import styles from "./Feedback.module.css";

function Feedback({ feedback }) {
  return (
    <div>
      <p>Good: {`${feedback.good}`}</p>
      <p>Neutral: {`${feedback.neutral}`}</p>
      <p>Bad: {`${feedback.bad}`}</p>
      <p>Total Feedback:</p>
      <p>Positive Feedback:</p>
    </div>
  );
}

export default Feedback;
