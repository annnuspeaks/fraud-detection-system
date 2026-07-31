import RiskBadge from "../RiskBadge/RiskBadge";

function PredictionTable({ predictions }) {
  if (!predictions || predictions.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        marginTop: "30px",
        overflowX: "auto",
      }}
    >
      <h2>Prediction Details</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "15px",
        }}
      >
        <thead>
          <tr>
            <th>Row</th>

            <th>Prediction</th>

            <th>Probability</th>

            <th>Risk</th>

            <th>Message</th>
          </tr>
        </thead>

        <tbody>
          {predictions.map((item) => (
            <tr key={item.row}>
              <td>{item.row}</td>

              <td>{item.prediction === 1 ? "Fraud" : "Legitimate"}</td>

              <td>{(item.fraud_probability * 100).toFixed(2)}%</td>

              <td>
                <RiskBadge riskLevel={item.risk_level} />
              </td>

              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PredictionTable;
