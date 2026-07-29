from fastapi import FastAPI

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
        "http://localhost:5173",
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