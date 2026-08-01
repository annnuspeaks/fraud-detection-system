import "./LoadingCard.css";

const LoadingCard = () => {
  return (
    <div className="loading-card">

      <div className="loading-spinner"></div>

      <h3 className="loading-title">
        Processing your CSV
      </h3>

      <p className="loading-subtitle">
        Uploading, validating and generating predictions...
      </p>

      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <small className="loading-note">
        Large datasets (50K–100K rows) may take a few seconds.
      </small>

    </div>
  );
};

export default LoadingCard;