from io import StringIO

import pandas as pd
from fastapi import (
    APIRouter,
    File,
    HTTPException,
    UploadFile,
)

from app.schemas.prediction_request import PredictionRequest
from app.schemas.prediction_response import PredictionResponse
from app.schemas.csv_prediction_response import CSVPredictionResponse
from app.services.prediction_service import PredictionService

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"],
)


@router.post(
    "",
    response_model=PredictionResponse,
    summary="Predict Single Transaction",
)
def predict(
    request: PredictionRequest,
):
    try:
        return PredictionService.predict(request)

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


@router.post(
    "/csv",
    response_model=CSVPredictionResponse,
    summary="Predict Transactions from CSV",
)
async def predict_csv(
    file: UploadFile = File(...),
):

    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are allowed.",
        )

    try:

        contents = await file.read()

        dataframe = pd.read_csv(
            StringIO(
                contents.decode("utf-8")
            )
        )

        return PredictionService.predict_batch(
            dataframe
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=f"CSV prediction failed: {str(e)}",
        )