import { useState } from "react";

import PredictionForm from "../../components/prediction/PredictionForm/PredictionForm";
import PredictionResult from "../../components/prediction/PredictionResult/PredictionResult";

function Prediction() {
    const [result, setResult] = useState(null);

    return (
        <>
            <h1>Fraud Prediction</h1>

            <PredictionForm
                onPrediction={setResult}
            />

            <PredictionResult
                result={result}
            />
        </>
    );
}

export default Prediction;