from fastapi import APIRouter

from app.schemas.prediction_request import PredictionRequest
from app.schemas.prediction_response import PredictionResponse
from app.services.prediction_service import PredictionService
from app.core.validators import PredictionValidator
from app.core.exceptions import PredictionException

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post(
    "",
    response_model=PredictionResponse
)
def predict(request: PredictionRequest):

    try:
        PredictionValidator.validate(request)
        return PredictionService.predict(request)

    except ValueError as e:
        raise PredictionException(str(e))