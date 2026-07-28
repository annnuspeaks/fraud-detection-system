from fastapi import FastAPI

from app.api.prediction import router as prediction_router

app = FastAPI(
    title="Fraud Detection System API",
    version="1.0.0"
)

app.include_router(prediction_router)

@app.get("/")
def root():
    return {
        "message": "Fraud Detection System API is running."
    }