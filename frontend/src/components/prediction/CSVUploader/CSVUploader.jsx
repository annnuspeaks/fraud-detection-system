import { useRef, useState } from "react";
import { predictCSV } from "../../../services/predictionService";

const CSVUploader = ({ onPredictionComplete, onPredictionError }) => {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

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

    event.target.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile || loading) return;

    setLoading(true);

    try {
      const response = await predictCSV(selectedFile);

      onPredictionComplete(response);

      setSelectedFile(null);

      fileInputRef.current.value = "";

      setError("");
    } catch (error) {
      let message = "Prediction failed.";

      const detail = error.response?.data?.detail;

      if (Array.isArray(detail)) {
        message = detail.map((item) => item.msg).join(", ");
      } else if (typeof detail === "string") {
        message = detail;
      }

      setError(message);

      onPredictionError?.();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="csv-uploader">
      <h2>Fraud Detection</h2>

      <p>Upload a CSV file for batch fraud prediction.</p>

      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        hidden
        onChange={handleFileChange}
      />

      <button type="button" onClick={handleBrowseClick} disabled={loading}>
        Choose CSV File
      </button>

      {selectedFile && <div className="selected-file">{selectedFile.name}</div>}

      {error && (
        <div
          className="upload-error"
          style={{
            color: "#dc2626",
            marginTop: "10px",
            fontSize: "14px",
          }}
        >
          {error}
        </div>
      )}

      <button
        type="button"
        disabled={!selectedFile || loading}
        onClick={handleUpload}
      >
        {loading ? "Uploading..." : "Upload & Predict"}
      </button>
    </div>
  );
};

export default CSVUploader;
