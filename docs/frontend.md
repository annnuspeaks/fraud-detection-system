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

Implemented the frontend API layer.

Components:

- Shared Axios instance
- Centralized API constants
- Prediction service

Architecture:

UI
↓

Services
↓

Axios

↓

FastAPI Backend

Rules:

- Components never call Axios directly.
- Services handle all backend communication.
- API endpoints are centralized.

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

