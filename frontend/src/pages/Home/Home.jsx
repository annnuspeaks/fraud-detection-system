import { useEffect } from "react";
import { Link } from "react-router-dom";
import { checkHealth } from "../../services/predictionService";
import "./Home.css";


function Home() {
  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await checkHealth();
        console.log("Health Check:", response);
      } catch (error) {
        console.error("Health Check Failed:", error);
      }
    };

    testAPI();
  }, []);

  return (
    <>
      <section className="home">
        <div className="hero">
          <span className="hero__badge">✨ AI Powered</span>

          <h1 className="hero__title">
            Detect Fraudulent Transactions
            <br />
            Using AI
          </h1>

          <p className="hero__description">
            A production-ready Fraud Detection System built using React, FastAPI
            and LightGBM to identify suspicious financial transactions with fast
            and reliable predictions.
          </p>

          <div className="hero__actions">
            <Link
              to="/prediction"
              className="hero__button hero__button--primary"
            >
              Start Prediction →
            </Link>

            <a
              href="/docs/frontend.md"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__button hero__button--secondary"
            >
              View Documentation ↗
            </a>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>

          <h3>Fast Prediction</h3>

          <p>
            Upload transaction datasets and receive fraud predictions within
            seconds.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🧠</div>

          <h3>Machine Learning</h3>

          <p>
            Powered by a LightGBM model trained for accurate fraud
            classification.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📊</div>

          <h3>Batch Analysis</h3>

          <p>Analyze thousands of transactions using a single CSV upload.</p>
        </div>
      </section>
      <section className="workflow">
        <h2 className="workflow__title">How It Works</h2>

        <p className="workflow__subtitle">
          Complete fraud detection in three simple steps.
        </p>

        <div className="workflow__steps">
          <div className="workflow-card">
            <div className="workflow-number">1</div>

            <h3>Upload Dataset</h3>

            <p>Upload your CSV transaction dataset for analysis.</p>
          </div>

          <div className="workflow-card">
            <div className="workflow-number">2</div>

            <h3>AI Analysis</h3>

            <p>The ML model analyzes every transaction and predicts fraud.</p>
          </div>

          <div className="workflow-card">
            <div className="workflow-number">3</div>

            <h3>Download Results</h3>

            <p>Review predictions, confidence scores and export results.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
