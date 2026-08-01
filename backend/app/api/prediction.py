from io import StringIO
from collections import Counter
from app.core.logger import logger

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

        logger.exception(
            "Unexpected error during CSV prediction."
        )

    raise HTTPException(
        status_code=500,
        detail="An unexpected server error occurred. Please try again later."
    )


@router.post(
    "/csv",
    response_model=CSVPredictionResponse,
    summary="Predict Transactions from CSV",
)
async def predict_csv(
    file: UploadFile=File(...),
):

    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are allowed.",
        )

    try:

        contents = await file.read()
        
        # New Injection
        MAX_FILE_SIZE = 25 * 1024 * 1024  # 25 MB

        if len(contents) > MAX_FILE_SIZE:
            raise HTTPException(
                status_code=413,
                detail="Maximum allowed file size is 25 MB."
            )
        # New Injection Ended
        
        # New Injection
        try:
            csv_text = contents.decode("utf-8")
        except UnicodeDecodeError:
            raise HTTPException(
                status_code=400,
                detail="CSV must be UTF-8 encoded."
            )
        # New Injection Ended

        # Read raw header before Pandas renames duplicate columns
        header_line = csv_text.splitlines()[0]

        headers = [
            column.strip()
            for column in header_line.split(",")
        ]

        duplicates = [
            column
            for column, count in Counter(headers).items()
            if count > 1
        ]

        if duplicates:

            raise ValueError(
                "Duplicate column names detected: "
                +", ".join(duplicates)
            )

        dataframe = pd.read_csv(
            StringIO(csv_text),
            skip_blank_lines=True,
        )
        
        if len(dataframe) > 100000:
            raise ValueError(
                "Maximum 100000 rows are allowed."
            )

        return PredictionService.predict_batch(
            dataframe
        )

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

    except HTTPException:
        raise

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"CSV prediction failed: {str(e)}",
        )
