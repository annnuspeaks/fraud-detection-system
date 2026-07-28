from pydantic import BaseModel, Field


class PredictionResponse(BaseModel):
    prediction: int = Field(
        ...,
        description="0 = Genuine Transaction, 1 = Fraudulent Transaction"
    )

    fraud_probability: float = Field(
        ...,
        ge=0.0,
        le=1.0,
        description="Probability of transaction being fraudulent"
    )

    risk_level: str = Field(
        ...,
        description="Low, Medium or High"
    )

    message: str = Field(
        ...,
        description="Human readable prediction message"
    )