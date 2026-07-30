from pydantic import BaseModel, Field
from typing import List


class CSVPredictionItem(BaseModel):
    row: int = Field(
        ...,
        description="Row number in uploaded CSV"
    )

    prediction: int = Field(
        ...,
        description="0 = Genuine, 1 = Fraud"
    )

    fraud_probability: float = Field(
        ...,
        ge=0.0,
        le=1.0,
        description="Fraud probability"
    )

    risk_level: str = Field(
        ...,
        description="Low, Medium or High"
    )

    message: str = Field(
        ...,
        description="Prediction message"
    )


class CSVPredictionResponse(BaseModel):
    total_records: int = Field(
        ...,
        description="Total records received"
    )

    fraud_count: int = Field(
        ...,
        description="Total fraudulent transactions"
    )

    genuine_count: int = Field(
        ...,
        description="Total genuine transactions"
    )

    predictions: List[CSVPredictionItem]