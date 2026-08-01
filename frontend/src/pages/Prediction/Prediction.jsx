import { useState } from "react";

import PageContainer from "../../components/layout/PageContainer/PageContainer";
import CSVUploader from "../../components/prediction/CSVUploader/CSVUploader";
import PredictionResult from "../../components/prediction/PredictionResult/PredictionResult";
import PredictionTable from "../../components/prediction/PredictionTable/PredictionTable";
import Toast from "../../components/common/Toast/Toast";

const Prediction = () => {
  const [predictionResult, setPredictionResult] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const handlePredictionComplete = (response) => {
    setToast({
      show: true,

      type: "success",

      title: "Prediction Completed",

      message: `Processed ${response.total_records} transaction${response.total_records !== 1 ? "s" : ""}.`,
    });
    setPredictionResult(response);
  };

  return (
    <PageContainer>
      <div className="prediction-page">
        <CSVUploader
          onPredictionComplete={handlePredictionComplete}
          onPredictionError={(message) => 
              setToast({

                show:true,

                type:"error",

                title:"Prediction Failed",

                message:message,
              })
            }
        />
        {predictionResult && (
          <>
            <Toast
              show={toast.show}
              type={toast.type}
              title={toast.title}
              message={toast.message}
              onClose={() =>
                  setToast(prev => ({
                      ...prev,
                      show:false,
                  }))
              }
          />

            <PredictionResult result={predictionResult} />

            <PredictionTable predictions={predictionResult.predictions} />
          </>
        )}
      </div>
    </PageContainer>
  );
};

export default Prediction;
