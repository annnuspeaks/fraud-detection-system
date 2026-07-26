# Project Folder Strategy

## Overview

A well-designed folder structure is essential for maintainability, scalability, and collaboration. This document defines how the Fraud Detection System will evolve from a minimal project scaffold into a complete production-inspired application.

The objective is not to create every directory on Day 1, but to introduce folders only when they become necessary during development.

This incremental approach keeps the repository clean while maintaining a scalable architecture.

---

# Objectives

The folder strategy aims to:

- Keep the repository organized
- Avoid unnecessary directories
- Support modular development
- Separate responsibilities clearly
- Maintain consistency across the ML portfolio
- Simplify onboarding
- Enable future scalability

---

# Folder Design Principles

The project follows five core principles.

## 1. Incremental Growth

The repository starts with only essential directories.

As new features are implemented, the corresponding folders will be introduced.

This prevents an unnecessarily complex project structure.

---

## 2. Separation of Concerns

Different responsibilities belong in different directories.

Examples include:

- Documentation
- Data
- Machine Learning
- Backend
- Frontend
- Testing

Mixing responsibilities should be avoided.

---

## 3. Modular Organization

Each module should have a clearly defined responsibility.

Examples:

- API logic
- Model training
- Feature engineering
- UI components
- Utilities

Modules should remain as independent as possible.

---

## 4. Reusability

Common utilities should be centralized rather than duplicated.

Examples include:

- Configuration
- Logging
- Validation
- Shared components
- Helper functions

---

## 5. Portfolio Consistency

All six Machine Learning projects should share nearly identical directory structures.

Only project-specific modules should differ.

This creates a unified engineering identity across the portfolio.

---

# Development Stages

The repository evolves through multiple stages.

## Stage 1 — Initial Repository

```text
fraud-detection-system/

├── .github/
├── .vscode/
├── data/
│   ├── raw/
│   └── processed/
├── docs/
├── notebooks/
├── src/
├── tests/
├── .gitignore
├── LICENSE
├── README.md
├── requirements.txt
└── pyproject.toml
```

Only the directories required to begin development are created.

---

## Stage 2 — Data Engineering

Additional organization may include:

```text
data/
│
├── raw/
├── interim/
├── processed/
└── external/
```

Purpose:

- Preserve original datasets
- Store intermediate outputs
- Separate processed data
- Support external datasets

Folders should only be added when required.

---

## Stage 3 — Machine Learning

The `src` directory expands to support ML development.

Example additions:

```text
src/

├── data/
├── features/
├── models/
├── evaluation/
├── explainability/
└── utils/
```

Each module maintains a single responsibility.

---

## Stage 4 — Backend

Backend-specific modules are introduced.

Example structure:

```text
src/backend/

├── api/
├── services/
├── schemas/
├── core/
├── inference/
└── utils/
```

Responsibilities remain separated into dedicated modules.

---

## Stage 5 — Frontend

Frontend resources are added as implementation begins.

Example:

```text
frontend/

├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── services/
│   ├── layouts/
│   ├── assets/
│   └── utils/
└── package.json
```

The frontend remains independent from the backend.

---

## Stage 6 — Deployment

Deployment-related resources are introduced.

Examples:

```text
deployment/

├── docker/
├── nginx/
└── scripts/
```

These directories will only exist if deployment requires them.

---

# Documentation Strategy

Documentation remains centralized.

```text
docs/

01_project_vision.md
02_problem_statement.md
...
30_readme_planning.md
```

Future documentation may include:

- API documentation
- Architecture diagrams
- Deployment guides
- User guides
- Developer guides

---

# Notebook Strategy

The `notebooks/` directory is reserved exclusively for experimentation.

Typical notebook categories include:

- Data validation
- Exploratory Data Analysis
- Feature engineering
- Model training
- Model comparison
- Explainability

Production code should eventually migrate into reusable Python modules under `src/`.

---

# Source Code Strategy

The `src/` directory contains production-ready code only.

Responsibilities include:

- Data processing
- Feature engineering
- Training pipeline
- Inference pipeline
- Backend logic
- Shared utilities

Notebook-specific experimentation should not remain inside `src/`.

---

# Test Organization

Testing should mirror the source structure.

Example:

```text
tests/

├── data/
├── models/
├── backend/
├── frontend/
└── integration/
```

This improves discoverability and long-term maintenance.

---

# Naming Conventions

Folder names should follow these rules:

- Lowercase
- Descriptive
- Singular or plural used consistently
- Avoid spaces
- Use hyphens only at the repository level
- Use snake_case where appropriate

Consistency is more important than individual preference.

---

# Version Control Considerations

The repository should avoid committing:

- Large datasets
- Temporary files
- Cache files
- Virtual environments
- Model checkpoints not intended for release
- Build artifacts

Only source code, documentation, configuration, and lightweight project assets should be version controlled.

---

# Future Expansion

The folder strategy should support future additions such as:

- CI/CD pipelines
- Experiment tracking
- Model registry
- Monitoring
- Batch inference
- Streaming inference
- Cloud deployment
- Multiple model versions

These additions should integrate naturally without major restructuring.

---

# Folder Strategy Summary

| Category | Decision |
|----------|----------|
| Growth Strategy | Incremental |
| Architecture | Modular |
| Documentation | Centralized |
| Source Code | Production-Ready Only |
| Notebooks | Experimentation Only |
| Testing | Mirrors Source Structure |
| Frontend | Independent Module |
| Backend | Independent Module |
| Portfolio Consistency | Mandatory |

---

# Final Decision

The Fraud Detection System will adopt an incremental and modular folder strategy that introduces new directories only when they become necessary. This approach keeps the repository clean during early development while providing a clear path toward a production-inspired architecture.

The same folder philosophy will be applied across the complete Machine Learning portfolio, ensuring consistency, maintainability, and a unified engineering identity.