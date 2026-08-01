import pandas as pd
import joblib

from app.core.config import PREPROCESSING_PIPELINE_PATH
from app.core.logger import logger
from app.models.model_loader import (
    production_model,
    feature_columns,
)
from app.schemas.csv_prediction_response import (
    CSVPredictionItem,
    CSVPredictionResponse,
)
from app.schemas.prediction_request import PredictionRequest
from app.schemas.prediction_response import PredictionResponse

preprocessing_pipeline = joblib.load(
    PREPROCESSING_PIPELINE_PATH
)


class PredictionService:

    @staticmethod
    def _get_risk_level(probability: float) -> str:
        if probability >= 0.80:
            return "High"
        elif probability >= 0.50:
            return "Medium"
        return "Low"

    @staticmethod
    def _get_message(prediction: int) -> str:
        if prediction == 1:
            return "Potential fraudulent transaction detected."
        return "Transaction appears to be genuine."
    
    @staticmethod
    def _validate_csv(
        dataframe: pd.DataFrame,
    ) -> pd.DataFrame:

        if dataframe.empty:
            raise ValueError(
                "Uploaded CSV is empty."
            )

        dataframe.columns = (
            dataframe.columns
            .str.strip()
        )

        if dataframe.columns.duplicated().any():

            duplicates = dataframe.columns[
                dataframe.columns.duplicated()
            ].tolist()

            raise ValueError(
                "Duplicate column(s): "
                +", ".join(duplicates)
            )

        required_columns = [
            "Time",
            "Amount",
            "TransactionHour",
            "LogAmount",
            "HighValueTransaction",
        ] + [
            f"V{i}"
            for i in range(1, 29)
        ]

        missing_columns = [

            column

            for column in required_columns

            if column not in dataframe.columns

        ]

        if missing_columns:

            raise ValueError(

                "Missing required columns: "

                +", ".join(missing_columns)

            )

        dataframe = dataframe[
            required_columns
        ].copy()

        
        # Remove completely empty rows
        dataframe = dataframe.dropna(
            how="all"
        )

        # If nothing remains after removing blank rows
        if dataframe.empty:
            raise ValueError(
                "Uploaded CSV is empty."
            )

        if dataframe.isnull().any().any():

            raise ValueError(
                "CSV contains missing values."
            )

        for column in dataframe.columns:

            dataframe[column] = pd.to_numeric(
                dataframe[column],
                errors="raise",
            )

        if dataframe.isin(
            [float("inf"), float("-inf")]
        ).any().any():

            raise ValueError(
                "CSV contains infinite values."
            )

        return dataframe

    @staticmethod
    def predict(request: PredictionRequest) -> PredictionResponse:

        logger.info("Prediction request received.")

        raw_data = pd.DataFrame(
            [request.model_dump()]
        )

        processed_data = preprocessing_pipeline.transform(
            raw_data
        )

        processed_df = pd.DataFrame(
            processed_data,
            columns=feature_columns,
        )

        prediction = int(
            production_model.predict(processed_df)[0]
        )

        probability = float(
            production_model.predict_proba(processed_df)[0][1]
        )

        risk = PredictionService._get_risk_level(
            probability
        )

        logger.info(
            f"Prediction={prediction}, "
            f"Probability={probability:.4f}, "
            f"Risk={risk}"
        )

        logger.info("Prediction completed successfully.")

        return PredictionResponse(
            prediction=prediction,
            fraud_probability=round(probability, 4),
            risk_level=risk,
            message=PredictionService._get_message(
                prediction
            ),
        )

    @staticmethod
    def predict_batch(
        dataframe: pd.DataFrame,
    ) -> CSVPredictionResponse:
        try:

            logger.info(
                "Batch prediction request received."
            )

            dataframe = (
                PredictionService
                ._validate_csv(
                    dataframe
                )
            )

            processed_data = (
                preprocessing_pipeline.transform(
                    dataframe
                )
            )

            processed_df = pd.DataFrame(
                processed_data,
                columns=feature_columns,
            )

            predictions = production_model.predict(
                processed_df
            )

            probabilities = (
                production_model.predict_proba(
                    processed_df
                )[:, 1]
            )

            results = []

            fraud_count = 0

            for index, (
                prediction,
                probability,
            ) in enumerate(
                zip(predictions, probabilities),
                start=1,
            ):

                prediction = int(prediction)
                probability = float(probability)

                if prediction == 1:
                    fraud_count += 1

                results.append(
                    CSVPredictionItem(
                        row=index,
                        prediction=prediction,
                        fraud_probability=round(
                            probability,
                            4,
                        ),
                        risk_level=PredictionService._get_risk_level(
                            probability
                        ),
                        message=PredictionService._get_message(
                            prediction
                        ),
                    )
                )

            genuine_count = (
                len(results) - fraud_count
            )

            logger.info(
                "Batch prediction completed. "
                f"Total={len(results)}, "
                f"Fraud={fraud_count}, "
                f"Genuine={genuine_count}"
            )

            return CSVPredictionResponse(
                total_records=len(results),
                fraud_count=fraud_count,
                genuine_count=genuine_count,
                predictions=results,
            )
        
        except ValueError:
            raise

        except Exception as e:

            logger.exception(
                "Prediction pipeline failed."
            )

            raise RuntimeError(
                "Prediction pipeline failed."
            )