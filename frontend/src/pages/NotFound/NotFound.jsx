import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found-card">
        <div className="error-code">404</div>

        <h1>Page Not Found</h1>

        <p>The page you're looking for doesn't exist or may have been moved.</p>

        <Link to="/" className="home-button">
          🏠 Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
