import pandas as pd

from app.models.model_loader import (
    production_model,
    feature_columns
)
from app.schemas.prediction_request import PredictionRequest
from app.schemas.prediction_response import PredictionResponse
from app.core.logger import logger

import joblib
from pathlib import Path

from app.core.config import PREPROCESSING_PIPELINE_PATH

preprocessing_pipeline = joblib.load(
    PREPROCESSING_PIPELINE_PATH
)

class PredictionService:

    @staticmethod
    def predict(request: PredictionRequest) -> PredictionResponse:
        
        logger.info("Prediction request received.")

        raw_data = pd.DataFrame([request.model_dump()])

        processed_data = preprocessing_pipeline.transform(raw_data)

        processed_df = pd.DataFrame(
            processed_data,
            columns=feature_columns
        )

        prediction = int(
            production_model.predict(processed_df)[0]
        )

        probability = float(
            production_model.predict_proba(processed_df)[0][1]
        )

        if probability >= 0.80:
            risk = "High"
        elif probability >= 0.50:
            risk = "Medium"
        else:
            risk = "Low"
            
        logger.info(
            f"Prediction={prediction}, "
            f"Probability={probability:.4f}, "
            f"Risk={risk}"
        )

        message = (
            "Potential fraudulent transaction detected."
            if prediction == 1
            else "Transaction appears to be genuine."
        )

        logger.info("Prediction completed successfully.")
        
        return PredictionResponse(
            prediction=prediction,
            fraud_probability=round(probability, 4),
            risk_level=risk,
            message=message
        )
        
        
