from app.schemas.prediction_request import PredictionRequest


class PredictionValidator:

    @staticmethod
    def validate(request: PredictionRequest) -> None:

        if request.Amount < 0:
            raise ValueError("Amount cannot be negative.")

        if request.TransactionHour < 0 or request.TransactionHour > 23:
            raise ValueError(
                "TransactionHour must be between 0 and 23."
            )

        if request.HighValueTransaction not in (0, 1):
            raise ValueError(
                "HighValueTransaction must be either 0 or 1."
            )