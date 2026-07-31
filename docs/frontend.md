# Frontend Documentation

# Frontend Documentation

## Project Overview

Frontend of the Fraud Detection System built using React + Vite.

---

## Tech Stack

- React 19
- Vite
- React Router DOM
- Axios

---

## Architecture

Layered frontend architecture.

Pages
↓

Components
↓

Services
↓

API

---

## Folder Structure

(Add the finalized architecture tree)

---

## Routing

Implemented React Router DOM.

Pages added:

- Home
- Prediction
- NotFound

Routing Structure

/              → Home

/prediction    → Prediction

*              → Not Found

## Shared Layout

Implemented application layout components:

- Layout
- Navbar
- Footer
- PageContainer

The application now renders all pages inside a common layout, providing a consistent structure across the frontend.

## API Layer

Implemented:

- Shared Axios instance
- Centralized API configuration
- Prediction service
- Health service

Verification:

- Axios installed
- Backend connectivity verified
- CORS configured
- Health endpoint successfully invoked from the frontend

## Prediction Form

Implemented:

- Reusable FeatureInput component
- Controlled PredictionForm
- React state management
- Form submission with preventDefault
- Console logging for submitted data

Verification:
- Form rendering verified
- Controlled inputs verified
- Form submission verified
- No project-related console errors

## Prediction Results

Implemented:

- PredictionResult component
- RiskBadge component
- Parent-child state communication
- Mock prediction response rendering

Verification:

- Result card displayed successfully.
- Risk badge displayed dynamically.
- Mock prediction rendered correctly.

## CSV Batch Prediction Frontend

Status: ✅ COMPLETED

Implemented:
- CSV file selection
- Upload validation
- Multipart API integration
- Loading state
- Error handling
- Batch prediction summary
- Prediction table
- Risk badge rendering
- Frontend–backend compatibility verification

Verified:
- Successful CSV upload
- Correct API contract
- Correct rendering of prediction results
- Stable upload workflow

## Architecture Decisions

## UI Design Principles

## API Integration

## Reusable Components

## Theme

## Pages

## Development Log

## Known Issues

## Future Improvements

## Phase-wise Progress

