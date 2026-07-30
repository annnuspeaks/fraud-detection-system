import { useState } from "react";

import FeatureInput from "../FeatureInput/FeatureInput";
import { predictFraud } from "../../../services/predictionService";

function PredictionForm({ onPrediction }) {

    const [formData, setFormData] = useState({
        time: "",
        transactionHour: "",
        amount: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {

            setLoading(true);

            const payload = {
                Time: Number(formData.time),
                TransactionHour: Number(formData.transactionHour),
                Amount: Number(formData.amount),
            };

            console.log("Sending Payload:", payload);

            const response = await predictFraud(payload);

            console.log("Backend Response:", response);

            onPrediction(response);

        } catch (error) {

            console.error(error);

            alert(
                error?.response?.data?.detail ||
                "Prediction failed."
            );

        } finally {

            setLoading(false);

        }

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

            <button
                type="submit"
                disabled={loading}
            >
                {loading ? "Predicting..." : "Predict"}
            </button>

        </form>

    );

}

export default PredictionForm;