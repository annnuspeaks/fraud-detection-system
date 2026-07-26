# Backend Architecture

## Overview

This document defines the backend architecture for the Fraud Detection System. It outlines how prediction requests flow through the application, how business logic is organized, how the Machine Learning model is integrated, and how APIs are exposed to the frontend.

The backend is designed to be lightweight, modular, and production-inspired. It follows a layered architecture that separates API handling, business logic, validation, and machine learning inference into independent modules.

This architecture will serve as the standard backend blueprint for all Machine Learning portfolio projects, with only domain-specific services and prediction pipelines changing between projects.

---

# Architecture Goals

The backend architecture is designed to achieve the following objectives:

- Modular code organization
- Clean separation of responsibilities
- Reusable business logic
- Easy API extension
- Consistent error handling
- Production-inspired project structure
- Simple deployment
- Easy integration with frontend and ML models

---

# Technology Stack

| Technology | Purpose |
|------------|---------|
| FastAPI | Backend Framework |
| Python | Programming Language |
| Pydantic | Data Validation |
| Uvicorn | ASGI Server |
| Scikit-learn | Model Inference |
| Joblib | Model Serialization |
| Pandas | Data Processing |
| NumPy | Numerical Operations |
| Loguru / Python Logging | Logging |
| Pytest | Backend Testing |

This stack will remain consistent across all portfolio projects wherever applicable.

---

# Architectural Pattern

The backend follows a **Layered Architecture**.

Each layer has a single responsibility and communicates only with adjacent layers.

```text
Frontend
    │
    ▼
API Layer
    │
    ▼
Service Layer
    │
    ▼
ML Inference Layer
    │
    ▼
Model Artifacts
```

This approach improves readability, maintainability, and scalability.

---

# Request Flow

Every prediction request follows the same lifecycle.

```text
User
    │
    ▼
Frontend
    │
    ▼
Prediction API
    │
    ▼
Request Validation
    │
    ▼
Business Service
    │
    ▼
Preprocessing Pipeline
    │
    ▼
ML Model
    │
    ▼
Prediction
    │
    ▼
Explainability
    │
    ▼
API Response
    │
    ▼
Frontend Dashboard
```

This workflow will remain consistent across all ML portfolio applications.

---

# API Layer

The API layer is responsible for:

- Receiving HTTP requests
- Validating request bodies
- Calling service functions
- Returning standardized JSON responses
- Mapping exceptions to HTTP status codes

The API layer should never contain business logic.

---

# Validation Layer

All incoming requests must be validated before processing.

Validation includes:

- Required fields
- Data types
- Numeric ranges
- Allowed categorical values
- Missing values
- Invalid payload detection

Validation models will be implemented using Pydantic.

---

# Service Layer

The service layer contains the application's business logic.

Responsibilities include:

- Input preparation
- Calling preprocessing pipeline
- Executing model inference
- Generating prediction response
- Calling explainability components
- Formatting outputs

Business rules must remain independent of API implementation.

---

# Machine Learning Inference Layer

The inference layer is responsible for:

- Loading trained artifacts
- Executing preprocessing
- Running predictions
- Computing probabilities
- Returning prediction outputs

The inference pipeline should remain identical to the training pipeline.

---

# Model Loading Strategy

The model should be loaded only once during application startup.

Startup sequence:

1. Load preprocessing pipeline
2. Load trained model
3. Verify artifacts
4. Register prediction service
5. Start API server

This minimizes prediction latency.

---

# Explainability Layer

Prediction explanations are generated after model inference.

Responsibilities include:

- Feature contribution analysis
- Important feature extraction
- Confidence interpretation
- Human-readable explanations

The explainability module should remain independent from the prediction logic.

---

# Response Structure

Every successful API response should follow a consistent format.

Example fields:

- Prediction
- Fraud Probability
- Confidence Score
- Risk Level
- Explanation Summary
- Processing Time

This response structure should remain standardized across portfolio projects.

---

# Error Handling

The backend should gracefully handle:

- Validation failures
- Missing model artifacts
- Prediction failures
- Internal server errors
- Unsupported requests
- Unexpected exceptions

Users should receive descriptive, non-technical error messages.

---

# Logging Strategy

The backend will log important application events.

Examples include:

- Application startup
- Model loading
- API requests
- Prediction execution
- Validation failures
- Unexpected exceptions

Sensitive information should never be written to logs.

---

# Configuration Management

Application configuration should be environment-based.

Configuration includes:

- Server settings
- Model paths
- Environment variables
- Logging configuration
- Deployment settings

Hardcoded configuration values should be avoided.

---

# API Documentation

Interactive API documentation will be automatically generated.

Documentation should include:

- Available endpoints
- Request schema
- Response schema
- Validation rules
- Example requests

This improves developer experience and simplifies testing.

---

# Backend Security

Basic backend security practices include:

- Input validation
- Sanitized error responses
- Environment variables
- Request size limits
- CORS configuration

Enterprise authentication mechanisms are outside the scope of Version 1.

---

# Scalability

Although designed for a portfolio application, the architecture should support future enhancements such as:

- Authentication
- Database integration
- Background tasks
- Batch prediction
- Multiple ML models
- Monitoring
- Model versioning

These additions should not require major architectural changes.

---

# Testing Strategy

Backend modules should support:

- Unit testing
- API testing
- Service testing
- Validation testing
- Integration testing

Each layer should be testable independently.

---

# Architecture Summary

| Category | Decision |
|----------|----------|
| Framework | FastAPI |
| Language | Python |
| Validation | Pydantic |
| Server | Uvicorn |
| ML Framework | Scikit-learn |
| Serialization | Joblib |
| Logging | Loguru / Python Logging |
| API Style | REST |
| Architecture | Layered Architecture |
| Documentation | Automatic API Documentation |

---

# Final Decision

The Fraud Detection System will use a modular Layered Architecture built on FastAPI. By separating API handling, validation, business logic, and machine learning inference into distinct layers, the backend remains clean, maintainable, and scalable.

This architecture establishes the standard backend foundation for the Machine Learning portfolio and will be reused across the remaining projects with only domain-specific services and ML pipelines changing.