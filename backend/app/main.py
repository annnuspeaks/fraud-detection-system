from fastapi import FastAPI

app = FastAPI(
    title="Fraud Detection System API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Fraud Detection System API is running."
    }