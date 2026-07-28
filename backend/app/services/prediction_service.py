import pandas as pd

from app.models.model_loader import (
    production_model,
    feature_columns
)
from app.schemas.prediction_request import PredictionRequest
from app.schemas.prediction_response import PredictionResponse

import joblib
from pathlib import Path


ARTIFACTS_DIR = Path(__file__).resolve().parents[3] / "artifacts"

preprocessing_pipeline = joblib.load(
    ARTIFACTS_DIR / "preprocessing_pipeline.pkl"
)


class PredictionService:

    @staticmethod
    def predict(request: PredictionRequest) -> PredictionResponse:

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

        message = (
            "Potential fraudulent transaction detected."
            if prediction == 1
            else "Transaction appears to be genuine."
        )

        return PredictionResponse(
            prediction=prediction,
            fraud_probability=round(probability, 4),
            risk_level=risk,
            message=message
        )