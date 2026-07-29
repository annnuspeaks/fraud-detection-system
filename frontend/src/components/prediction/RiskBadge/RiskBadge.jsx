function RiskBadge({ riskLevel }) {
    const badgeStyle = {
        padding: "8px 16px",
        borderRadius: "8px",
        color: "#fff",
        fontWeight: "bold",
        display: "inline-block",
        marginTop: "8px",
    };

    switch (riskLevel) {
        case "LOW":
            badgeStyle.backgroundColor = "green";
            break;

        case "MEDIUM":
            badgeStyle.backgroundColor = "orange";
            break;

        case "HIGH":
            badgeStyle.backgroundColor = "red";
            break;

        default:
            badgeStyle.backgroundColor = "gray";
    }

    return <span style={badgeStyle}>{riskLevel}</span>;
}

export default RiskBadge;