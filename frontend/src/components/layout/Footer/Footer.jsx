import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Fraud Detection System</h2>

          <p>
            Enterprise-grade fraud detection platform powered by Machine
            Learning.
          </p>
        </div>

        <div className="footer-divider"></div>
        <div className="footer-products">
          <h3>Our Other Products</h3>

          <div className="product-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Customer Churn Prediction
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              Enterprise RAG AI Assistant
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              Recommendation System
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              Time-Series Forecasting
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              MLOps Automated Pipeline
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              Enterprise AI Decision Intelligence Program
            </a>
          </div>
        </div>
        <div className="footer-contact">
          <a
            href="https://github.com/annnuspeaks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/annuspeaks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:annu.speaks@outlook.com">Email</a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TAS Communication Services | Anurag Shukla</p>

          <p>Built with React • FastAPI • LightGBM</p>
        </div>
      </div>
      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        ↑
      </button>
    </footer>
  );
}

export default Footer;
