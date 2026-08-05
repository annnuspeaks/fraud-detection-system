from fastapi import FastAPI
from fastapi import Request
from fastapi.responses import JSONResponse

from app.core.logger import logger
from app.api.prediction import router as prediction_router
from app.api.health import router as health_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Fraud Detection System API",
    description="""
Enterprise-grade Machine Learning API for real-time credit card fraud detection.

## Features

- Real-time fraud prediction
- Probability estimation
- Risk level assessment
- Request validation
- Business rule validation

## Endpoints

- **POST /predict** → Predict transaction fraud
""",
    version="1.0.0",
    contact={
        "name": "Anurag Shukla",
        "email": "annu.speaks@outlook.com",
    },
    license_info={
        "name": "MIT License"
    }
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # Local Development
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://192.168.31.205:5173",

        "http://localhost:3000",
        "http://127.0.0.1:3000",

        # Vercel Production
        "https://frontend-annuspeaks.vercel.app",
        "https://frontend-gxc3nn5rb-annuspeaks.vercel.app",
        "https://frontend-alpha-virid-lx1rvvgqoq.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(prediction_router)
app.include_router(health_router)


@app.get("/")
def root():
    return {
        "message": "Fraud Detection System API is running."
    }

    
@app.exception_handler(Exception)
async def global_exception_handler(
    request: Request,
    exc: Exception,
):

    logger.exception(exc)

    return JSONResponse(

        status_code=500,

        content={
            "detail":
            "Internal server error."
        },

    )
