import RiskBadge from "../RiskBadge/RiskBadge";

function PredictionResult({ result }) {
    if (!result) {
        return null;
    }

    return (
        <div
            style={{
                marginTop: "30px",
                padding: "20px",
                border: "1px solid #555",
                borderRadius: "10px",
                width: "400px",
            }}
        >
            <h2>Prediction Result</h2>

            <p>
                <strong>Prediction :</strong>{" "}
                {result.prediction === 1
                    ? "Fraudulent Transaction"
                    : "Legitimate Transaction"}
            </p>

            <p>
                <strong>Fraud Probability :</strong>{" "}
                {(result.fraud_probability * 100).toFixed(2)}%
            </p>

            <p>
                <strong>Risk Level :</strong>
            </p>

            <RiskBadge riskLevel={result.risk_level} />

            <p style={{ marginTop: "20px" }}>
                <strong>Message :</strong>
            </p>

            <p>{result.message}</p>
        </div>
    );
}

export default PredictionResult;