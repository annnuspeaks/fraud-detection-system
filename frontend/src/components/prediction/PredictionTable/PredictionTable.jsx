import RiskBadge from "../RiskBadge/RiskBadge";
import "./PredictionTable.css";

function PredictionTable({ predictions }) {
  if (!predictions || predictions.length === 0) {
    return null;
  }

  return (
    <div className="prediction-table-wrapper">
      <h2>Prediction Details</h2>

      <table className="prediction-table">
        <thead>
          <tr>
            <th className="table-header column-row">Row</th>
            <th className="table-header column-prediction">Prediction</th>
            <th className="table-header column-probability">Probability</th>
            <th className="table-header column-risk">Risk</th>
            <th className="table-header column-message">Message</th>
          </tr>
        </thead>

        <tbody>
          {predictions.map((item) => (
            <tr key={item.row}>
              <td className="table-cell column-row">{item.row}</td>
              <td className="table-cell column-prediction">
                {item.prediction === 1 ? "Fraud" : "Legitimate"}
              </td>

              <td className="table-cell column-probability">
                {(item.fraud_probability * 100).toFixed(2)}%
              </td>

              <td className="table-cell column-risk">
                <RiskBadge riskLevel={item.risk_level} />
              </td>

              <td className="table-cell column-message">{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PredictionTable;
