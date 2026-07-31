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
            }}
        >

            <h2>Batch Prediction Summary</h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "20px",
                    flexWrap: "wrap",
                }}
            >

                <div
                    style={{
                        flex: 1,
                        minWidth: "160px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <h3>Total Records</h3>

                    <p
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        {result.total_records}
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "160px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <h3>Fraudulent</h3>

                    <p
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#dc2626",
                        }}
                    >
                        {result.fraud_count}
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        minWidth: "160px",
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                    }}
                >
                    <h3>Legitimate</h3>

                    <p
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#16a34a",
                        }}
                    >
                        {result.genuine_count}
                    </p>
                </div>

            </div>

        </div>

    );

}

export default PredictionResult;