import "./PredictionResult.css";

function PredictionResult({ result }) {

    if (!result) {
        return null;
    }

    return (

        <div className="prediction-result">

            <h2>Batch Prediction Summary</h2>

            <div className="prediction-summary-grid">

                <div className="summary-card">

                    <h3>Total Records</h3>

                    <p className="summary-value">
                        {result.total_records}
                    </p>
                </div>

                <div className="summary-card">

                    <h3>Fraudulent</h3>

                    <p className="summary-value fraud-value">
                        {result.fraud_count}
                    </p>
                </div>

                <div className="summary-card">

                    <h3>Legitimate</h3>

                    <p className="summary-value genuine-value">
                        {result.genuine_count}
                    </p>
                </div>

            </div>

        </div>

    );

}

export default PredictionResult;