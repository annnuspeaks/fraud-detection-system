# Tech Stack Decision

## Overview

This document defines the official technology stack for the Fraud Detection System. It establishes the programming languages, frameworks, libraries, development tools, and deployment technologies that will be used throughout the project.

The selected technologies prioritize:

- Industry relevance
- Portfolio value
- Maintainability
- Learning opportunity
- Community support
- Long-term scalability

Where practical, the same technology stack will be reused across the complete Machine Learning portfolio to create a consistent engineering ecosystem.

This document is considered **LOCKED** unless a portfolio-wide technology migration is planned.

---

# Technology Selection Principles

Every technology included in this project must satisfy the following criteria:

- Industry adoption
- Active maintenance
- Strong documentation
- Large community support
- Production suitability
- Portfolio relevance
- Easy integration with the overall architecture

Preference is given to technologies that are commonly used in modern Machine Learning and Full Stack AI applications.

---

# High-Level Technology Stack

```text
                    Frontend
                       │
             React + TypeScript
                       │
                 Tailwind CSS
                       │
                    Axios API
                       │
                 FastAPI Backend
                       │
        Machine Learning Pipeline
                       │
     Scikit-learn + XGBoost + SHAP
                       │
           Serialized Model Artifacts
```

---

# Programming Languages

| Technology | Purpose |
|------------|---------|
| Python | Machine Learning & Backend Development |
| TypeScript | Frontend Development |
| HTML | UI Structure |
| CSS (Tailwind CSS) | Styling |
| Markdown | Documentation |

---

# Machine Learning Stack

| Technology | Purpose |
|------------|---------|
| scikit-learn | Classical Machine Learning |
| XGBoost | Gradient Boosting Models |
| pandas | Data Manipulation |
| NumPy | Numerical Computing |
| SHAP | Model Explainability |
| Joblib | Model Serialization |

These libraries provide a robust and widely adopted ML ecosystem.

---

# Data Visualization

Visualization tools include:

| Technology | Purpose |
|------------|---------|
| Matplotlib | Static Visualizations |
| Plotly | Interactive Charts (Optional) |
| Seaborn | Exploratory Data Analysis |
| Recharts | Frontend Dashboard Charts |

Different libraries are used for different stages of the project.

---

# Backend Stack

| Technology | Purpose |
|------------|---------|
| FastAPI | REST API Framework |
| Uvicorn | ASGI Server |
| Pydantic | Request Validation |
| Python Logging / Loguru | Logging |
| Python-dotenv | Environment Configuration |

The backend is intentionally lightweight and modular.

---

# Frontend Stack

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| TypeScript | Type Safety |
| Vite | Build Tool |
| Tailwind CSS | Styling |
| React Router | Routing |
| Zustand | Global State |
| TanStack Query | Server State |
| Axios | HTTP Requests |
| React Hook Form | Form Management |
| Zod | Validation |
| Lucide React | Icons |
| Recharts | Dashboard Charts |

This stack balances developer productivity with scalability.

---

# Development Environment

Recommended development tools:

| Tool | Purpose |
|------|---------|
| Visual Studio Code | Primary IDE |
| Jupyter Notebook | Experimentation |
| Git | Version Control |
| GitHub | Repository Hosting |
| Python Virtual Environment | Dependency Isolation |

---

# Testing Stack

Testing technologies include:

| Technology | Purpose |
|------------|---------|
| pytest | Backend Testing |
| FastAPI TestClient | API Testing |
| React Testing Library *(Future)* | Frontend Component Testing |
| Vitest *(Future)* | Frontend Unit Testing |

Testing will be implemented during later development phases.

---

# Documentation Tools

Documentation will primarily use:

- Markdown
- README
- Architecture documents
- FastAPI automatic API documentation

This approach keeps documentation lightweight and version-controlled.

---

# Dependency Management

The project will use:

| Technology | Purpose |
|------------|---------|
| pip | Python Package Installation |
| requirements.txt | Python Dependencies |
| npm | Frontend Dependencies |
| package.json | Frontend Package Management |

Dependency versions should be pinned where appropriate to improve reproducibility.

---

# Version Control

Version control decisions:

- Git
- GitHub
- Feature-based commits
- Descriptive commit messages
- Incremental development

Repository management follows the same standards across the portfolio.

---

# Deployment Technologies

Version 1 deployment targets:

| Component | Technology |
|-----------|------------|
| Backend | Render / Railway (or similar free-friendly platform) |
| Frontend | Vercel |
| Model Artifacts | Bundled with Backend |
| Source Code | GitHub |

Deployment decisions prioritize accessibility and ease of demonstration.

---

# Future Technologies

Future versions of the project may incorporate:

- Docker
- MLflow
- Apache Airflow
- PostgreSQL
- Redis
- Celery
- Kubernetes
- Cloud Object Storage
- Monitoring platforms

These technologies are intentionally deferred to keep Version 1 focused and portfolio-friendly.

---

# Technology Compatibility

The selected stack is designed to ensure:

- Strong Python ecosystem integration
- Seamless frontend-backend communication
- Easy deployment
- Consistent development experience
- Reusable architecture across projects

Each component complements the overall system architecture.

---

# Technology Summary

| Category | Decision |
|----------|----------|
| Programming Language | Python + TypeScript |
| Machine Learning | scikit-learn, XGBoost |
| Explainability | SHAP |
| Backend | FastAPI |
| Frontend | React + TypeScript |
| Styling | Tailwind CSS |
| Build Tool | Vite |
| State Management | Zustand + TanStack Query |
| API Client | Axios |
| Charts | Recharts |
| Testing | pytest |
| Version Control | Git + GitHub |
| Deployment | Vercel + Render/Railway |

---

# Final Decision

The Fraud Detection System will use a modern, industry-aligned technology stack centered around Python for Machine Learning and backend development, and React with TypeScript for the frontend. The selected technologies emphasize modularity, maintainability, and portfolio relevance while remaining approachable for individual development.

This technology stack will serve as the baseline for the remaining Machine Learning portfolio projects, ensuring consistency, reusable engineering patterns, and a unified development experience.