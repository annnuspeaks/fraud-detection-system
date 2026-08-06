<p align="center">
  <img src="docs/assets/backend-logo.png" alt="Fraud Detection System Backend Logo" width="96" />
</p>

<h1 align="center">
Fraud Detection System – Backend
</h1>

<p align="center">
Production-ready FastAPI backend providing scalable REST APIs for enterprise-grade batch fraud detection using a trained LightGBM machine learning model.
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688?logo=fastapi)
![LightGBM](https://img.shields.io/badge/LightGBM-ML-success)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker)
![Render](https://img.shields.io/badge/Render-Production-46E3B7)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

---

# Table of Contents

- [Overview](#overview)
- [Why This Project?](#why-this-project)
- [Live Resources](#live-resources)
- [Backend Responsibilities](#backend-responsibilities)
- [Core Features](#core-features)
- [Design Principles](#design-principles)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Running the Backend](#running-the-backend)
- [API Documentation](#api-documentation)
- [API Endpoints](#api-endpoints)
- [Prediction Workflow](#prediction-workflow)
- [Deployment](#deployment)
- [Architecture Overview](#architecture-overview)
- [Logging & Monitoring](#logging--monitoring)
- [Error Handling](#error-handling)
- [Troubleshooting](#troubleshooting)
- [Related Documentation](#related-documentation)
- [Contributing](#contributing)
- [License](#license)

---

# Overview

The **Fraud Detection System Backend** is the core processing engine of the project. Built using **FastAPI**, it exposes a production-ready REST API capable of receiving transaction datasets, validating requests, loading the trained machine learning model, executing fraud prediction, and returning standardized responses.

The backend has been designed with a modular architecture that separates routing, validation, business logic, machine learning inference, configuration, and utility components. This separation improves maintainability, simplifies testing, and supports future scalability.

The application is containerized using Docker and deployed on **Render**, enabling continuous deployment directly from GitHub while providing a secure and publicly accessible prediction service.

---

# Why This Project?

Modern fraud detection systems require more than accurate machine learning models—they require reliable backend services capable of exposing those models through secure, scalable, and maintainable APIs.

This backend was developed to demonstrate production-oriented backend engineering practices including REST API development, request validation, machine learning inference, deployment automation, centralized configuration, and modular software architecture.

Beyond serving prediction requests, the project showcases how machine learning models can be integrated into real-world backend systems suitable for portfolio presentation, enterprise demonstrations, and future expansion.

---

# Live Resources

The following production resources represent the latest deployed backend service.

| Resource | URL | Status |
|----------|-----|--------|
| 🚀 Production API | https://fraud-detection-backend-0tpc.onrender.com | ✅ Live |
| ❤️ Health Endpoint | https://fraud-detection-backend-0tpc.onrender.com/health | ✅ Healthy |
| 📘 Swagger UI | https://fraud-detection-backend-0tpc.onrender.com/docs | ✅ Available |
| 📗 ReDoc | https://fraud-detection-backend-0tpc.onrender.com/redoc | ✅ Available |
| 🌐 Frontend Application | https://fraudmatrix.vercel.app | ✅ Live |

> **Note:** The backend is hosted on Render. If the service has been inactive, the first request may take a few seconds while the container starts.

---

# Backend Responsibilities

The backend acts as the processing layer between the frontend application and the trained machine learning model.

Its primary responsibilities include:

- Receive prediction requests from the frontend.
- Validate uploaded datasets.
- Load production machine learning artifacts.
- Execute fraud prediction.
- Calculate fraud probabilities.
- Determine transaction risk levels.
- Generate standardized API responses.
- Provide service health information.
- Expose interactive API documentation.
- Support production deployment and monitoring.

---

# Core Features

## API Features

- RESTful API built using FastAPI.
- Automatic OpenAPI specification generation.
- Interactive Swagger documentation.
- ReDoc documentation.
- Standardized JSON responses.
- Structured HTTP status codes.

## Machine Learning Features

- Batch fraud prediction.
- LightGBM model integration.
- Prediction probability calculation.
- Risk classification.
- Production inference pipeline.

## Engineering Features

- Modular architecture.
- Docker containerization.
- Centralized configuration.
- Request validation using Pydantic.
- Structured logging.
- Health monitoring endpoint.
- Production deployment on Render.
- GitHub continuous deployment.

---

# Technology Stack

The backend is built using a modern Python ecosystem focused on performance, maintainability, and production deployment.

| Category | Technology |
|----------|------------|
| Programming Language | Python 3.11+ |
| API Framework | FastAPI |
| ASGI Server | Uvicorn |
| Data Validation | Pydantic |
| Machine Learning | LightGBM |
| Data Processing | Pandas |
| Numerical Computing | NumPy |
| Model Serialization | Joblib |
| CORS | FastAPI CORSMiddleware |
| Containerization | Docker |
| Backend Hosting | Render |
| Version Control | Git & GitHub |

The selected technology stack emphasizes rapid API development, reliable machine learning inference, modular architecture, and straightforward cloud deployment.

---

# Project Structure

```text
backend/
│
├── api/
│   ├── routes/
│   ├── dependencies/
│   └── __init__.py
│
├── core/
│   ├── config.py
│   ├── logging.py
│   └── constants.py
│
├── docs/
│   └── backend.md
│
├── models/
│   ├── trained_model.pkl
│   ├── feature_columns.pkl
│   └── ...
│
├── schemas/
│   ├── request.py
│   ├── response.py
│   └── prediction.py
│
├── services/
│   ├── prediction_service.py
│   ├── preprocessing_service.py
│   └── model_loader.py
│
├── utils/
│
├── tests/
│
├── main.py
├── requirements.txt
├── Dockerfile
├── .dockerignore
├── .env.example
└── README.md
```

The backend follows a layered architecture where routing, validation, business logic, model inference, configuration, and utilities are organized into independent modules. This structure minimizes coupling, improves readability, and supports long-term scalability.

---

# Getting Started

This section describes how to set up the backend for local development.

## Prerequisites

Ensure the following software is installed before running the backend.

| Software | Recommended Version |
|----------|---------------------|
| Python | 3.11 or later |
| pip | Latest |
| Git | Latest |
| Visual Studio Code | Latest |

Verify the installation.

```bash
python --version
pip --version
git --version
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/annnuspeaks/fraud-detection-system.git
```

Navigate to the backend directory.

```bash
cd fraud-detection-system/backend
```

---

## Create a Virtual Environment

### Windows

```bash
python -m venv .venv
```

Activate the virtual environment.

```bash
.venv\Scripts\activate
```

---

### Linux / macOS

```bash
python3 -m venv .venv
```

Activate the virtual environment.

```bash
source .venv/bin/activate
```

---

## Install Dependencies

Install all required packages.

```bash
pip install -r requirements.txt
```

Verify the installation.

```bash
pip list
```

---

# Environment Configuration

The backend uses environment variables to separate configuration from application logic.

Create a `.env` file inside the backend directory.

```env
ENVIRONMENT=development
HOST=0.0.0.0
PORT=8000
LOG_LEVEL=INFO
```

> **Important**
>
> Production environment variables should never be committed to the repository. Configure them directly through the Render dashboard.

---

## Development Environment

During local development, the backend communicates with the React frontend running locally.

Typical development workflow:

- Start the backend.
- Start the frontend.
- Upload a CSV dataset.
- Verify API communication.
- Review prediction results.

---

## Production Environment

The production backend is deployed on **Render**.

Production deployment provides:

- Automatic HTTPS
- Docker-based deployment
- GitHub integration
- Environment variable management
- Continuous deployment
- Public REST API

---

# Running the Backend

Start the FastAPI development server.

```bash
uvicorn main:app --reload
```

The backend will be available at:

```text
http://127.0.0.1:8000
```

---

## Verify the Server

Open the following endpoints after the server starts.

| Endpoint | Purpose |
|----------|---------|
| `/` | Root endpoint |
| `/health` | Service health check |
| `/docs` | Swagger UI |
| `/redoc` | ReDoc |
| `/openapi.json` | OpenAPI specification |

If the health endpoint responds successfully, the backend is ready to receive prediction requests.

---

## Development Workflow

A typical backend development cycle follows the workflow below.

1. Activate the virtual environment.
2. Start the FastAPI server.
3. Verify the health endpoint.
4. Send prediction requests.
5. Validate API responses.
6. Review application logs.
7. Commit tested changes to GitHub.

---

# API Documentation

The backend exposes a RESTful API built with **FastAPI**, providing endpoints for fraud prediction, health monitoring, and automatic API documentation.

FastAPI automatically generates interactive API documentation using the OpenAPI specification, making the backend easy to explore, test, and integrate.

---

## Interactive API Documentation

The following interfaces are available after the backend starts.

| Tool | Endpoint | Purpose |
|------|----------|---------|
| Swagger UI | `/docs` | Interactive API testing |
| ReDoc | `/redoc` | API reference documentation |
| OpenAPI Specification | `/openapi.json` | Machine-readable API schema |

Production URLs

| Resource | URL |
|----------|-----|
| Swagger UI | https://fraud-detection-backend-0tpc.onrender.com/docs |
| ReDoc | https://fraud-detection-backend-0tpc.onrender.com/redoc |
| OpenAPI Specification | https://fraud-detection-backend-0tpc.onrender.com/openapi.json |

The documentation is generated automatically from the API source code, ensuring that it always reflects the latest implementation.

---

# API Endpoints

The backend currently exposes a minimal set of production-ready endpoints.

| Method | Endpoint | Purpose |
|---------|----------|---------|
| GET | `/` | Root endpoint |
| GET | `/health` | Backend health status |
| POST | `/predict` | Batch fraud prediction |

---

## Root Endpoint

The root endpoint confirms that the backend service is running successfully.

Typical use cases include:

- Deployment verification
- Initial connectivity testing
- Basic API availability checks

---

## Health Endpoint

The health endpoint provides a lightweight mechanism for monitoring backend availability.

Typical use cases include:

- Deployment validation
- Production monitoring
- Uptime verification
- Automated health checks
- Load balancer validation

---

## Prediction Endpoint

The prediction endpoint serves as the primary business endpoint of the backend.

Its responsibilities include:

- Receiving prediction requests
- Validating uploaded datasets
- Executing preprocessing
- Running machine learning inference
- Calculating fraud probabilities
- Determining fraud labels
- Returning standardized prediction responses

All prediction logic is centralized to maintain a consistent inference pipeline across all client applications.

---

# Prediction Workflow

Every prediction request follows a layered execution pipeline designed to keep routing, validation, business logic, and machine learning responsibilities independent.

```text
Client Request
      │
      ▼
FastAPI Router
      │
      ▼
Request Validation
      │
      ▼
Prediction Service
      │
      ▼
Data Preprocessing
      │
      ▼
LightGBM Model
      │
      ▼
Prediction Processing
      │
      ▼
Response Formatting
      │
      ▼
JSON Response
```

---

## Request Lifecycle

Each prediction request passes through the following stages.

1. The frontend submits a prediction request.
2. FastAPI receives the incoming request.
3. Request data is validated using Pydantic schemas.
4. Uploaded data is preprocessed.
5. The trained LightGBM model is loaded (if required).
6. Fraud prediction is executed.
7. Prediction probabilities are calculated.
8. Risk labels are assigned.
9. Results are converted into standardized response objects.
10. A JSON response is returned to the client.

This layered execution model improves maintainability, simplifies testing, and isolates machine learning logic from API routing.

---

# Deployment

The backend is deployed using **Render** and containerized using **Docker**, providing a consistent execution environment across development and production.

---

## Deployment Stack

| Component | Technology |
|-----------|------------|
| Source Control | GitHub |
| Containerization | Docker |
| Backend Hosting | Render |
| API Framework | FastAPI |
| ASGI Server | Uvicorn |

---

## Deployment Workflow

Every production deployment follows the workflow below.

```text
Developer
     │
     ▼
Git Commit
     │
     ▼
GitHub Repository
     │
     ▼
Render Deployment
     │
     ▼
Docker Build
     │
     ▼
Application Startup
     │
     ▼
Health Verification
     │
     ▼
Production API
```

Render automatically detects new commits pushed to the main branch, rebuilds the Docker image, deploys the updated backend, and exposes the latest production service.

---

## Production Resources

| Resource | URL |
|----------|-----|
| Backend API | https://fraud-detection-backend-0tpc.onrender.com |
| Health Endpoint | https://fraud-detection-backend-0tpc.onrender.com/health |
| Swagger UI | https://fraud-detection-backend-0tpc.onrender.com/docs |
| ReDoc | https://fraud-detection-backend-0tpc.onrender.com/redoc |

---

## Deployment Benefits

The production deployment provides:

- Docker-based deployment consistency
- Automatic HTTPS
- Continuous deployment from GitHub
- Environment-based configuration
- Centralized infrastructure management
- Reliable public API accessibility
- Simplified maintenance
- Production-ready scalability
- Automatic redeployment on every GitHub push

---

# Architecture Overview

The backend follows a layered architecture that separates API routing, validation, business logic, machine learning inference, and infrastructure concerns.

```text
                    Client
                      │
                      ▼
               FastAPI Router
                      │
                      ▼
             Request Validation
                      │
                      ▼
             Prediction Service
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
 Data Preprocessing        Model Loader
          │                       │
          └───────────┬───────────┘
                      ▼
              LightGBM Model
                      │
                      ▼
           Response Formatter
                      │
                      ▼
                JSON Response
```

This architecture promotes:

- Separation of concerns
- Modular service design
- Independent testing
- Reusable business logic
- Simplified maintenance
- Future scalability
- Clean integration with frontend applications

---

# Logging & Monitoring

Reliable backend services require visibility into application behavior. The backend implements centralized logging and health monitoring to simplify debugging, operational monitoring, and future production maintenance.

---

## Logging Strategy

Application events are recorded using Python's built-in logging framework through a centralized logging configuration.

Logging is used to capture:

- Application startup
- Incoming API requests
- Prediction execution
- Validation failures
- Runtime exceptions
- Warning messages
- Critical application events

A centralized logging strategy improves consistency across the application and simplifies troubleshooting during development and production.

---

## Health Monitoring

The backend exposes a dedicated health endpoint for monitoring service availability.

Health Endpoint

```text
GET /health
```

Production URL

```text
https://fraud-detection-backend-0tpc.onrender.com/health
```

The endpoint can be used for:

- Deployment verification
- Production monitoring
- Service availability checks
- CI/CD validation
- Infrastructure health monitoring

---

## Monitoring Objectives

The monitoring strategy is designed to ensure:

- Backend availability
- Stable prediction service
- Early failure detection
- Faster issue diagnosis
- Reliable production operation

---

# Error Handling

The backend follows a structured error-handling strategy to provide predictable API behavior and meaningful responses.

---

## Validation Errors

Incoming requests are validated before prediction execution.

Typical validation failures include:

- Missing required fields
- Invalid CSV structure
- Unsupported file format
- Empty datasets
- Invalid request payloads

Validation failures return descriptive HTTP responses that help clients identify and correct input issues.

---

## Prediction Errors

Prediction-related failures are handled gracefully to prevent unexpected application crashes.

Possible scenarios include:

- Model loading failure
- Feature mismatch
- Corrupted input data
- Prediction execution failure
- Internal processing exceptions

Whenever possible, errors are converted into standardized API responses rather than exposing internal implementation details.

---

## HTTP Status Codes

The backend follows conventional HTTP status codes.

| Status Code | Meaning |
|-------------|---------|
| 200 | Request completed successfully |
| 400 | Invalid client request |
| 404 | Resource not found |
| 422 | Validation error |
| 500 | Internal server error |

---

## Error Handling Philosophy

The backend is designed to:

- Fail gracefully
- Return meaningful error messages
- Preserve application stability
- Protect internal implementation details
- Support efficient debugging

---

# Troubleshooting

The following recommendations help resolve common backend issues.

---

## Backend Does Not Start

Verify:

- Python is installed correctly.
- The virtual environment is activated.
- Dependencies are installed.
- Required files exist.

---

## Dependency Errors

Reinstall project dependencies.

```bash
pip install -r requirements.txt
```

---

## Model Loading Failure

Verify:

- Model files exist.
- Model paths are correct.
- Serialized artifacts are compatible with the current environment.

---

## API Not Accessible

Check:

- FastAPI server is running.
- Port configuration is correct.
- Firewall restrictions are not blocking requests.
- Health endpoint is reachable.

---

## CORS Errors

Ensure:

- Frontend origin is allowed.
- CORS middleware is configured correctly.
- Backend has been redeployed after configuration changes.

---

## Docker Build Failures

Verify:

- Dockerfile syntax.
- Build context.
- Python package compatibility.
- Required project files are included in the Docker image.

---

## Render Deployment Issues

If deployment fails:

- Review Render build logs.
- Verify environment variables.
- Confirm Docker build completes successfully.
- Ensure the health endpoint responds after deployment.

---

# Related Documentation

Comprehensive project documentation is organized into separate documents according to their intended audience.

| Document | Purpose |
|----------|---------|
| `../README.md` | Complete project overview |
| `docs/backend.md` | Backend technical handbook |
| `../frontend/README.md` | Frontend overview |
| `../frontend/docs/frontend.md` | Frontend technical handbook |

For detailed backend implementation, architecture decisions, API internals, and engineering documentation, refer to **docs/backend.md**.

---

# Contributing

Contributions that improve code quality, documentation, architecture, performance, testing, or maintainability are welcome.

Before submitting changes:

- Follow the existing project structure.
- Maintain modular architecture.
- Keep business logic independent of API routing.
- Update documentation whenever functionality changes.
- Test all affected endpoints before creating a pull request.

---

# License

This project is distributed under the **MIT License**.

See the `LICENSE` file for additional licensing information.

---

<p align="center">

Developed using Python, FastAPI, Docker, and Machine Learning.

Designed for production deployment, scalable backend architecture, and continuous learning.

</p>