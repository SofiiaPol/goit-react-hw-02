import styles from "./Feedback.module.css";

function Feedback({ feedback, total, positiveFeedback }) {
  return (
    <div>
      <p>Good: {`${feedback.good}`}</p>
      <p>Neutral: {`${feedback.neutral}`}</p>
      <p>Bad: {`${feedback.bad}`}</p>
      <p>Total Feedback: {`${total}`}</p>
      <p>Positive Feedback: {`${positiveFeedback}%`}</p>
    </div>
  );
}

export default Feedback;
