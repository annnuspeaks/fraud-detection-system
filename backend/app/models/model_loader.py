from pathlib import Path
from app.core.logger import logger
import joblib

# ------------------------------------------------------------------
# Artifact Paths
# ------------------------------------------------------------------

from app.core.config import (
    MODEL_PATH,
    FEATURE_COLUMNS_PATH,
    PREPROCESSING_METADATA_PATH,
    ARTIFACT_VERSION_PATH
)

# ------------------------------------------------------------------
# Load Artifacts Once
# ------------------------------------------------------------------

try:

    production_model = joblib.load(MODEL_PATH)

    feature_columns = joblib.load(FEATURE_COLUMNS_PATH)

    preprocessing_metadata = joblib.load(
        PREPROCESSING_METADATA_PATH
    )

    artifact_version = joblib.load(
        ARTIFACT_VERSION_PATH
    )

except Exception:
    logger.exception(
        "Unable to load ML artifacts."
    )

    raise RuntimeError(
        "ML artifacts failed to load."
    )
