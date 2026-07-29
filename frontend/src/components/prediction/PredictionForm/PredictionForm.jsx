import { useState } from "react";
import FeatureInput from "../FeatureInput/FeatureInput";

function PredictionForm() {
    const [formData, setFormData] = useState({
        time: "",
        transactionHour: "",
        amount: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Prediction Input:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FeatureInput
                label="Time"
                name="time"
                type="number"
                value={formData.time}
                onChange={handleChange}
                placeholder="Enter transaction time"
            />

            <FeatureInput
                label="Transaction Hour"
                name="transactionHour"
                type="number"
                value={formData.transactionHour}
                onChange={handleChange}
                placeholder="0 - 23"
            />

            <FeatureInput
                label="Amount"
                name="amount"
                type="number"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Transaction amount"
            />

            <button type="submit">
                Predict
            </button>
        </form>
    );
}

export default PredictionForm;