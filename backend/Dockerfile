# ===========================
# Base Image
# ===========================
FROM python:3.12-slim

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgomp1 && \
    rm -rf /var/lib/apt/lists/*

# ===========================
# Environment Variables
# ===========================
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# ===========================
# Working Directory
# ===========================
WORKDIR /app

# ===========================
# Install Dependencies
# ===========================
COPY backend/requirements-prod.txt .

RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements-prod.txt

# ===========================
# Copy Backend Source
# ===========================
COPY backend/app ./app

# Optional files
COPY backend/.env ./
COPY backend/docs ./docs

# ===========================
# Copy ML Artifacts
# ===========================
COPY artifacts ./artifacts

# ===========================
# Expose Port
# ===========================
EXPOSE 8000

# ===========================
# Start Application
# ===========================
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]