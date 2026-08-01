import { useEffect } from "react";
import "./Toast.css";

const Toast = ({
  show,
  type = "success",
  title,
  message,
  duration = 3500,
  onClose,
}) => {

  useEffect(() => {

    if (!show) return;

    const timer = setTimeout(() => {

      onClose?.();

    }, duration);

    return () => clearTimeout(timer);

  }, [show, duration, onClose]);

  if (!show) return null;

  return (

    <div className={`toast toast-${type}`}>

      <div className="toast-icon">

        {type === "success" && "✓"}
        {type === "error" && "✕"}
        {type === "warning" && "!"}
        {type === "info" && "i"}

      </div>

      <div className="toast-content">

        <h4>{title}</h4>

        <p>{message}</p>

      </div>

    </div>

  );

};

export default Toast;