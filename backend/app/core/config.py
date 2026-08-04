from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[2]

ARTIFACTS_DIR = PROJECT_ROOT / "artifacts"

MODEL_PATH = ARTIFACTS_DIR / "fraud_detection_model.pkl"

PREPROCESSING_PIPELINE_PATH = (
    ARTIFACTS_DIR / "preprocessing_pipeline.pkl"
)

FEATURE_COLUMNS_PATH = (
    ARTIFACTS_DIR / "feature_columns.pkl"
)

PREPROCESSING_METADATA_PATH = (
    ARTIFACTS_DIR / "preprocessing_metadata.pkl"
)

ARTIFACT_VERSION_PATH = (
    ARTIFACTS_DIR / "artifact_version.pkl"
)