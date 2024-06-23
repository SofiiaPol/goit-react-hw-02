import styles from "./Feedback.module.css";

function Feedback({ feedback, total, positiveFeedback }) {
  return (
    <div className={styles.feedbackscontainer}>
      <p className={styles.feedback}>Good: {`${feedback.good}`}</p>
      <p className={styles.feedback}>Neutral: {`${feedback.neutral}`}</p>
      <p className={styles.feedback}>Bad: {`${feedback.bad}`}</p>
      <p className={styles.feedback}>Total Feedback: {`${total}`}</p>
      <p className={styles.feedback}>
        Positive Feedback: {`${positiveFeedback}%`}
      </p>
    </div>
  );
}

export default Feedback;
