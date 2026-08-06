<p align="center">
  <img src="public/favicon.ico" alt="Fraud Detection System Logo" width="96" />
</p>

<h1 align="center">
Fraud Detection System – Frontend
</h1>

<p align="center">
Modern React + Vite frontend for enterprise-grade batch fraud detection powered by a FastAPI backend.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![Deployment](https://img.shields.io/badge/Vercel-Production-black?logo=vercel)
![License](https://img.shields.io/badge/License-MIT-blue)

</p>

---

# Table of Contents

- [Overview](#overview)
- [Live Resources](#live-resources)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Screens](#screens)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Production Build](#production-build)
- [Backend Integration](#backend-integration)
- [Deployment](#deployment)
- [Architecture Overview](#architecture-overview)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)
- [License](#license)

---

# Overview

The **Fraud Detection System Frontend** is a production-ready web application built using **React** and **Vite** that provides an intuitive interface for enterprise-scale batch fraud detection.

Users can upload transaction datasets in CSV format, send them securely to the backend prediction service, and visualize fraud detection results through an interactive and responsive dashboard.

The frontend communicates with a production FastAPI backend through REST APIs and is deployed on **Vercel**, while the backend is hosted on **Render**. The application has been designed with modular architecture, reusable components, responsive layouts, and clean separation between presentation and business logic.

The project emphasizes maintainability, scalability, and deployment readiness, making it suitable for production demonstrations, portfolio presentation, and enterprise-oriented machine learning workflows.

---

# Why This Project?

Financial fraud continues to evolve rapidly, requiring scalable systems capable of processing large transaction datasets efficiently.

This frontend was developed to demonstrate how modern web technologies can integrate seamlessly with machine learning services, enabling users to upload datasets, perform fraud prediction, and visualize results through a clean and responsive interface.

The project also serves as a production-ready portfolio application showcasing frontend engineering, API integration, deployment, and software architecture best practices.

---

## Project Objectives

- Provide a modern interface for batch fraud prediction.
- Simplify CSV-based prediction workflows.
- Deliver prediction summaries and detailed transaction results.
- Integrate seamlessly with the FastAPI prediction API.
- Maintain a responsive experience across desktop and mobile devices.
- Demonstrate production-grade frontend deployment practices.

---

## Current Status

| Item | Status |
|------|--------|
| Development | ✅ Completed |
| Production Deployment | ✅ Live |
| Frontend Hosting | Vercel |
| Backend Integration | Connected |
| API Communication | Operational |
| Responsive UI | Implemented |

---

# Live Resources

The following production resources are publicly accessible and represent the latest deployed version of the frontend application.

| Resource | URL | Status |
|----------|-----|--------|
| 🌐 Production Application | https://fraudmatrix.vercel.app | ✅ Live |
| ⚙️ Backend API | https://fraud-detection-backend-0tpc.onrender.com | ✅ Live |
| ❤️ Health Endpoint | https://fraud-detection-backend-0tpc.onrender.com/health | ✅ Healthy |
| 📘 Frontend Documentation | docs/frontend.md | 📖 Available |
| 📗 Backend Documentation | ../backend/README.md | 📖 Available |
| 📙 Root Documentation | ../README.md | 📖 Available |

> **Note:** The backend is deployed on Render. After prolonged inactivity, the first request may take a few seconds while the service wakes up.

---

# Features

The frontend has been designed to provide a simple, responsive, and production-ready interface for batch fraud detection while maintaining a clean separation between user experience and backend communication.

## User Features

- Upload transaction datasets in CSV format.
- One-click batch fraud prediction.
- Responsive drag-and-drop upload interface.
- Real-time prediction progress feedback.
- Interactive prediction summary dashboard.
- Detailed transaction-level prediction results.
- Success and error toast notifications.
- Automatic file validation before prediction.
- Mobile, tablet, and desktop responsive layout.
- Clean and modern enterprise-inspired user interface.

## Engineering Features

- Built using React 19 and Vite.
- Modular component-based architecture.
- REST API communication using Axios.
- Environment-based configuration.
- Centralized API service layer.
- Production-ready Vercel deployment.
- Backend integration with FastAPI.
- CORS-compatible production architecture.
- Clean project organization for long-term scalability.
- Easy deployment and maintenance.

---

# Design Principles

The frontend has been developed using a set of engineering principles intended to maximize maintainability, scalability, and user experience.

- Component-driven architecture
- Separation of concerns
- Reusable UI components
- Centralized API communication
- Environment-based configuration
- Responsive-first design
- Predictable routing
- Production-ready deployment

---

# Technology Stack

| Category | Technology |
|----------|------------|
| Frontend Framework | React 19 |
| Build Tool | Vite |
| Language | JavaScript (ES6+) |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | CSS3 |
| Package Manager | npm |
| Version Control | Git & GitHub |
| Frontend Hosting | Vercel |
| Backend Framework | FastAPI |
| Backend Hosting | Render |

---

# Project Structure

```text
frontend/
├── docs/
│   └── frontend.md
│
├── public/
│   ├── favicon.ico
│   └── ...
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env.example
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

The project follows a feature-oriented architecture where UI components, routing, services, assets, documentation, and configuration are organized into independent modules. This structure simplifies maintenance, encourages reuse, and supports future scalability.

---

# Screens

The frontend currently provides the following production-ready interfaces:

- Home Page
- Prediction Page
- CSV Upload Interface
- Prediction Summary Dashboard
- Transaction Result Table
- Loading Indicators
- Success Notifications
- Error Handling Interface
- Responsive Navigation
- Scroll-to-Top Utility

Screenshots and demonstration assets are maintained separately under the portfolio enhancement phase.

---

# Getting Started

This section explains how to set up the frontend application for local development.

## Prerequisites

Ensure the following software is installed before running the project.

| Software | Recommended Version |
|----------|---------------------|
| Node.js | 20.x or later |
| npm | Latest |
| Git | Latest |
| Visual Studio Code | Latest |

Verify your installation.

```bash
node -v
npm -v
git --version
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/annnuspeaks/fraud-detection-system.git
```

Navigate to the frontend directory.

```bash
cd fraud-detection-system/frontend
```

Install project dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## Environment Variables

The frontend uses environment variables to determine the backend API endpoint.

Create a `.env` file inside the frontend directory.

```env
VITE_API_BASE_URL=http://localhost:8000
```

### Production Configuration

The production deployment on Vercel uses the following environment variable.

```env
VITE_API_BASE_URL=https://fraud-detection-backend-0tpc.onrender.com
```

> **Important**
>
> Environment files (`.env`) should never be committed to version control. Configure production environment variables directly through the Vercel dashboard.

---

## Available Scripts

The project includes the following npm scripts.

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build. |
| `npm run preview` | Serves the production build locally for testing. |

---

## Development Workflow

The recommended frontend development workflow is:

1. Start the FastAPI backend.
2. Start the React development server.
3. Upload a CSV dataset.
4. Verify backend communication.
5. Review prediction results.
6. Commit changes after successful validation.

---

## Building for Production

Generate an optimized production build.

```bash
npm run build
```

The generated production assets are created inside the following directory.

```text
dist/
```

Preview the production build locally.

```bash
npm run preview
```

---

## Deployment Configuration

The frontend is configured for production deployment using **Vercel**.

Production deployment includes:

- Optimized Vite production build.
- Automatic deployment from the GitHub repository.
- Environment variable management.
- Global CDN distribution.
- HTTPS enabled by default.
- Automatic asset optimization.

Production URL

```text
https://fraudmatrix.vercel.app
```

---

# Backend Integration

The frontend communicates with the Fraud Detection System backend through a RESTful API developed using FastAPI. All prediction requests are sent securely over HTTPS, and responses are rendered through reusable UI components.

The frontend contains no machine learning logic.

All prediction processing is delegated to the backend API, allowing the frontend to remain focused exclusively on presentation, interaction, and user experience.

## Integration Overview

```text
User
   │
   ▼
React Components
   │
   ▼
Axios Service Layer
   │
   ▼
FastAPI REST API
   │
   ▼
Fraud Detection Model
   │
   ▼
Prediction Results
```

The communication layer has been intentionally separated from the presentation layer to improve maintainability, scalability, and testing.

---

## API Communication Flow

The frontend follows a predictable request lifecycle.

1. User uploads a CSV dataset.
2. Client-side validation verifies the uploaded file.
3. Axios sends the request to the backend prediction endpoint.
4. FastAPI validates the request.
5. The machine learning model performs fraud prediction.
6. Prediction results are returned to the frontend.
7. Summary cards and detailed prediction tables are updated.

---

## Production API Endpoint

```text
https://fraud-detection-backend-0tpc.onrender.com
```

Health Endpoint

```text
https://fraud-detection-backend-0tpc.onrender.com/health
```

---

# Deployment

The frontend is deployed using **Vercel**, providing automatic builds, HTTPS, global content delivery, and continuous deployment from GitHub.

Deployment Workflow

```text
GitHub
   │
   ▼
Vercel
   │
   ▼
Automatic Build
   │
   ▼
Production Deployment
```

## Deployment Platform

| Component | Platform |
|-----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Source Control | GitHub |

---

## Production Deployment

Production URL

```text
https://fraudmatrix.vercel.app
```

Deployment includes:

- Automatic GitHub integration.
- Production environment variables.
- HTTPS by default.
- Global CDN distribution.
- Optimized Vite production build.
- Continuous deployment on every push to the main branch.

---

## Deployment Architecture

```text
                     User
                       │
                       ▼
         React + Vite Frontend (Vercel)
                       │
                  HTTPS REST API
                       │
                       ▼
          FastAPI Backend (Render)
                       │
                       ▼
          LightGBM Prediction Model
                       │
                       ▼
              Fraud Prediction Results
```

---

# Troubleshooting

## Backend takes time to respond

The backend is hosted on Render. If the service has been inactive, the first request may take a few seconds while the instance starts.

---

## Environment Variable Issues

Ensure the following variable is configured correctly.

```env
VITE_API_BASE_URL=https://fraud-detection-backend-0tpc.onrender.com
```

---

## API Connection Failed

Verify:

- Backend service is running.
- Environment variables are configured correctly.
- Browser developer tools show successful API requests.
- The backend health endpoint is accessible.

---

## Build Failures

If dependencies become inconsistent, reinstall them.

```bash
rm -rf node_modules
npm install
npm run build
```

---

## Port Already In Use

Terminate the existing process or run the application using a different available port.

---

## Browser Cache

If the latest deployment is not visible, clear the browser cache or perform a hard refresh.

Windows

Ctrl + Shift + R

macOS

Cmd + Shift + R

---

# Documentation

The project documentation is organized into multiple levels to separate quick-start guides from detailed engineering documentation.

| Document | Purpose |
|----------|---------|
| `../README.md` | Complete project overview |
| `docs/frontend.md` | Frontend technical documentation |
| `../backend/README.md` | Backend overview |
| `../backend/docs/backend.md` | Backend technical documentation |

---

# Contributing

Contributions that improve code quality, documentation, architecture, performance, or user experience are always welcome.

Before submitting changes:

- Follow the existing project structure.
- Keep components modular and reusable.
- Maintain consistent coding style.
- Update documentation whenever functionality changes.
- Test all affected workflows before creating a pull request.

---

# License

This project is distributed under the MIT License.

See the LICENSE file for additional information.
---

<p align="center">

Developed using React, Vite, FastAPI, and Machine Learning.

Designed for production deployment, portfolio presentation, and continuous learning.

</p>