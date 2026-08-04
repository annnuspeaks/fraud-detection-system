import { useRef, useState } from "react";
import { predictCSV } from "../../../services/predictionService";
import LoadingCard from "../../common/LoadingCard/LoadingCard";
import "./CSVUploader.css";

const CSVUploader = ({ onPredictionComplete, onPredictionError }) => {
  const fileInputRef = useRef(null);

  const uploadInProgressRef = useRef(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [retryMode, setRetryMode] = useState(false);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const validateFile = (file) => {
    if (!file) {
      return "Please select a CSV file.";
    }

    if (!file.name.toLowerCase().endsWith(".csv")) {
      return "Only CSV files are allowed.";
    }

    if (file.size === 0) {
      return "Selected file is empty.";
    }

    const MAX_SIZE = 25 * 1024 * 1024;

    if (file.size > MAX_SIZE) {
      return "Maximum allowed file size is 25 MB.";
    }

    return "";
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    const validationError = validateFile(file);

    if (validationError) {
      setSelectedFile(null);

      setError(validationError);

      return;
    }

    setError("");

    setSelectedFile(file);

    setRetryMode(false);

    event.target.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile || uploadInProgressRef.current) return;

    uploadInProgressRef.current = true;

    setLoading(true);

    setError("");

    // onPredictionError?.();

    try {
      const response = await predictCSV(selectedFile);

      onPredictionComplete(response);

      setRetryMode(false);

      setSelectedFile(null);

      fileInputRef.current.value = "";

      setError("");
    } catch (error) {
      let message = "Prediction failed.";

      // Internet disconnected
      if (!navigator.onLine) {
        message = "No internet connection. Please check your network.";
      }

      // Request timeout
      else if (error.code === "ECONNABORTED") {
        message = "The server is taking too long to respond. Please try again.";
      }

      // Backend not reachable
      else if (!error.response) {
        message =
          "Unable to connect to the server. Please ensure the backend is running.";
      }

      // Validation errors
      else if (error.response.status === 400) {
        const detail = error.response.data?.detail;

        if (Array.isArray(detail)) {
          message = detail.map((item) => item.msg).join(", ");
        } else if (typeof detail === "string") {
          message = detail;
        }
      }

      // Internal server error
      else if (error.response.status === 500) {
        message = "Internal server error. Please try again later.";
      }

      // Endpoint missing
      else if (error.response.status === 404) {
        message = "Prediction service is unavailable.";
      }

      setError(message);

      setRetryMode(true);

      onPredictionError?.(message);
    } finally {
      uploadInProgressRef.current = false;
      setLoading(false);
    }
  };

  return (
    <section className="csv-uploader">
      <div className="upload-card">
        <div className="upload-icon">📁</div>
        <h2>Upload Transaction Dataset</h2>
        <p>
          Upload your transaction dataset and let our AI model detect fraudulent
          activities in seconds.
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv"
          hidden
          onChange={handleFileChange}
        />
        <div className="upload-actions">
          <button
            className="browse-btn"
            type="button"
            onClick={handleBrowseClick}
            disabled={loading}
          >
            📂 Choose CSV File
          </button>

          <button
            className="predict-btn"
            type="button"
            disabled={!selectedFile || loading}
            onClick={handleUpload}
          >
            {loading ? (
              <>
                <span className="button-spinner"></span>
                Predicting...
              </>
            ) : (
              <>🚀 Upload & Predict</>
            )}
          </button>
        </div>
        {selectedFile && (
          <div className="selected-file">✅ {selectedFile.name}</div>
        )}
        {loading && <LoadingCard />}
        {error && <div className="upload-error">{error}</div>}
        {retryMode && !loading && (
          <div className="retry-message">Retry using the same file.</div>
        )}{" "}
      </div>
    </section>
  );
};

export default CSVUploader;
