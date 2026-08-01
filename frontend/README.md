<!-- ========================================================= -->
<!-- Frontend README                                            -->
<!-- Fraud Detection System                                     -->
<!-- ========================================================= -->

<p align="center">
  <img src="public/favicon.ico" alt="Fraud Detection System Logo" width="96" />
</p>

<h1 align="center">
Fraud Detection System – Frontend
</h1>

<p align="center">
A modern, responsive, and scalable React application for enterprise-grade fraud prediction.
</p>

<p align="center">

React • Vite • Axios • React Router • Responsive UI • REST API

</p>

---

# Frontend

> **Purpose:** Quick start guide for the Fraud Detection System frontend.
>
> **Audience:** Developers, Contributors, Recruiters, and Technical Reviewers.
>
> **Project:** Fraud Detection System
>
> **Module:** Frontend
>
> **Last Updated:** Phase 5.11
>
> **Related Documents**
>
> - `docs/frontend.md` *(Complete Frontend Technical Documentation)*

---

# Project Overview

The **Fraud Detection System Frontend** is a modern React-based web application that provides an intuitive interface for performing batch fraud prediction using CSV files.

Designed with a modular architecture and reusable UI components, the application communicates with a FastAPI backend to upload datasets, execute fraud detection models, and present prediction results through a clean, responsive, and user-friendly interface.

The frontend emphasizes maintainability, scalability, and developer experience while following modern React development practices and responsive design principles.

---

# Key Features

- Batch CSV fraud prediction workflow
- Modern React component architecture
- Responsive layout for Desktop, Tablet, and Mobile devices
- Centralized API communication layer
- Reusable UI components
- Toast-based notification system
- Loading and retry states
- Prediction summary dashboard
- Dynamic prediction table
- Clean folder organization
- Professional developer-friendly architecture

---

# Technology Stack

| Category | Technology |
|-----------|------------|
| Framework | React 19 |
| Build Tool | Vite |
| Routing | React Router DOM |
| HTTP Client | Axios |
| Styling | CSS3 |
| Language | JavaScript (ES Modules) |
| Package Manager | npm |
| Backend Communication | REST API |

---

# Design Principles

The frontend has been developed around the following engineering principles:

- Component-driven architecture
- Clear separation of concerns
- Reusability over duplication
- Responsive-first user experience
- Maintainable folder structure
- Scalable API integration
- Consistent user feedback through loading and notification states
- Readable and well-organized codebase

---

# Project Structure

The frontend follows a modular and component-driven architecture to improve maintainability, scalability, and code reusability.

```text
frontend/
│
├── docs/                  # Frontend technical documentation
├── public/                # Static assets
├── src/
│   ├── api/               # Axios instance and API configuration
│   ├── assets/            # Images, icons, and static resources
│   ├── components/        # Reusable UI components
│   ├── constants/         # Application constants
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Shared page layouts
│   ├── pages/             # Route-level pages
│   ├── services/          # API service layer
│   ├── utils/             # Utility functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

## Directory Responsibilities

| Directory | Responsibility |
|------------|----------------|
| `docs/` | Detailed frontend technical documentation. |
| `public/` | Static assets served directly by Vite. |
| `src/api/` | Shared Axios client and API configuration. |
| `src/assets/` | Images, icons, and other frontend resources. |
| `src/components/` | Reusable UI components used throughout the application. |
| `src/constants/` | Application-wide constants and configuration values. |
| `src/hooks/` | Custom React hooks for reusable logic. |
| `src/layouts/` | Shared layouts that provide consistent page structure. |
| `src/pages/` | Route-level application pages. |
| `src/services/` | Business logic responsible for communicating with backend APIs. |
| `src/utils/` | Shared helper functions and utilities. |

---

# Installation

## Prerequisites

Before running the frontend locally, ensure the following software is installed:

- Node.js (Latest LTS version recommended)
- npm
- Git

---

## Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the frontend directory.

```bash
cd frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

By default, Vite starts the development server locally.

To expose it to other devices on the same network:

```bash
npm run dev -- --host
```

---

# Available Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Generates an optimized production build. |
| `npm run preview` | Serves the production build locally for testing. |
| `npm run lint` | Runs ESLint across the project. |

---

# Environment Configuration

The frontend communicates with the backend through a centralized API configuration.

Current development uses a configurable API base URL.

Future versions of the project will migrate this configuration to dedicated environment variables (`.env`) to simplify local development, LAN testing, and production deployment.

---

# Backend Requirements

The frontend depends on the Fraud Detection System backend.

Before using prediction features, ensure the backend server is running and accessible.

Typical development workflow:

```text
Backend Running
        │
        ▼
Frontend Starts
        │
        ▼
API Connection
        │
        ▼
CSV Upload
        │
        ▼
Prediction Results
```

---

# Development Workflow

The recommended development workflow for frontend changes is:

```text
Requirement

↓

Planning

↓

Component Development

↓

API Integration

↓

Testing

↓

Responsive Validation

↓

Documentation

↓

Git Commit
```

Maintaining this workflow helps keep the project organized, testable, and easy to maintain.

---

# Documentation

Detailed technical documentation is available in:

```text
docs/frontend.md
```

The technical documentation contains:

- Frontend architecture
- Folder structure explanation
- Routing and navigation
- Shared layouts
- Component documentation
- API integration
- CSV prediction workflow
- Responsive design strategy
- Architecture decisions
- Development workflow
- Known limitations
- Future improvements

---

# Screenshots

Project screenshots will be added as the application reaches production-ready status.

Suggested screenshots include:

- Home Page
- Prediction Page
- CSV Upload Workflow
- Prediction Summary
- Prediction Results Table
- Mobile Responsive View
- Tablet Responsive View

---

# Project Status

Current Status:

```text
✔ Frontend Architecture Completed

✔ API Integration Completed

✔ CSV Upload Workflow Completed

✔ Prediction Result Visualization Completed

✔ Loading & Error Handling Completed

✔ Responsive Design Completed

✔ Real Device Compatibility Testing Completed

✔ Frontend Documentation In Progress
```

---

# Future Roadmap

Upcoming milestones include:

- Complete frontend technical documentation
- Backend technical documentation
- Project-level documentation
- Environment variable standardization
- Deployment configuration
- Production release preparation

---

# Contributing

This project is currently maintained as a portfolio-focused machine learning engineering project.

External contributions are not planned at this stage.

Future collaboration guidelines may be added as the project evolves.

---

# License

This project is intended for educational, research, and portfolio purposes.

License information will be finalized before the first public release.

---

# Additional Resources

Frontend Technical Documentation

```text
docs/frontend.md
```

Project Root Documentation

```text
../README.md
```

Backend Documentation

```text
../backend/README.md
```

---

# Acknowledgements

This frontend has been developed following modern React engineering practices with an emphasis on:

- Clean Architecture
- Component Reusability
- Responsive Design
- Maintainability
- Scalability
- Developer Experience

---

<p align="center">

Built with React, Vite, and modern frontend engineering practices.

</p>

<p align="center">

Fraud Detection System • Frontend Module

</p>