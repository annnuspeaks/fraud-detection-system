import { useState } from "react";

import PageContainer from "../../components/layout/PageContainer/PageContainer";
import CSVUploader from "../../components/prediction/CSVUploader/CSVUploader";
import PredictionResult from "../../components/prediction/PredictionResult/PredictionResult";
import PredictionTable from "../../components/prediction/PredictionTable/PredictionTable";

const Prediction = () => {
  const [predictionResult, setPredictionResult] = useState(null);

  const handlePredictionComplete = (response) => {
    setPredictionResult(response);
  };

  return (
    <PageContainer>
      <div className="prediction-page">
        <CSVUploader
          onPredictionComplete={handlePredictionComplete}
          onPredictionError={() => setPredictionResult(null)}
        />
        {predictionResult && (
          <>
            <PredictionResult result={predictionResult} />

            <PredictionTable predictions={predictionResult.predictions} />
          </>
        )}
      </div>
    </PageContainer>
  );
};

export default Prediction;
