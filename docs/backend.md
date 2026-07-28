# Backend Development

This document tracks the backend implementation of the Fraud Detection System.

---

# Phase 4 : Backend Development

## 4.1 FastAPI Setup

### Objective

Initialize and verify the FastAPI backend foundation for the Fraud Detection System.

### Completed

- FastAPI application initialized
- Backend project structure verified
- Backend virtual environment configured
- Root endpoint implemented
- Swagger UI available
- ReDoc available
- OpenAPI specification generated successfully

### Verification

The backend server was successfully started using Uvicorn.

Verified endpoints:

- `/`
- `/docs`
- `/redoc`

### Status

✅ Phase 4.1 Completed

---

## 4.2 API Architecture

### Objective

Define a scalable backend architecture before implementing API endpoints.

### Backend Architecture

```
Client
   │
   ▼
API Layer
   │
   ▼
Validation Layer
   │
   ▼
Service Layer
   │
   ▼
Model Layer
   │
   ▼
Response
```

### Folder Responsibilities

| Folder | Responsibility |
|----------|----------------|
| api | API endpoints |
| core | Configuration, logging, constants |
| models | Model loading and inference |
| schemas | Request and response validation |
| services | Business logic |
| utils | Shared helper functions |

### Planned Endpoints

- GET /
- GET /health
- POST /predict

### Status

✅ Architecture finalized.

---

## 4.3 Prediction API

### Objective

Expose the trained machine learning model through a production-ready FastAPI endpoint.

### Internal Implementation Roadmap

1. Model Loader
2. Request Schema
3. Response Schema
4. Prediction Service
5. Prediction Endpoint
6. End-to-End Testing

### Design Decision

The production model will be loaded once during application startup and reused for all prediction requests instead of loading it for every API call.

### 4.3.1 Model Loader

A dedicated model loader module was created to load all serialized machine learning artifacts.

Loaded artifacts:

- Production model
- Feature columns
- Preprocessing metadata
- Artifact version

The artifacts are loaded once during application startup and reused throughout the application lifecycle to avoid repeated disk I/O and improve prediction performance.

### Verification

The model loader was verified successfully.

Verification results:

- Production model loaded successfully.
- Model type: `lightgbm.sklearn.LGBMClassifier`
- Feature schema loaded successfully.
- Total input features: **33**

The backend can now access all production artifacts required for inference.

Added PredictionRequest Pydantic schema to validate incoming fraud prediction requests before preprocessing.

Added PredictionResponse schema to standardize fraud prediction API responses.

Implemented PredictionService to preprocess incoming requests, perform model inference, calculate fraud probability, assign risk level, and return a standardized response.

Added /predict POST endpoint to accept fraud prediction requests and return standardized prediction responses.

Successfully performed end-to-end testing of the prediction pipeline through Swagger UI.