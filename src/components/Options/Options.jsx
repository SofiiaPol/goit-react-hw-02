import styles from "./Options.module.css";

function Options({ updateFeedback, resetFeedback, total }) {
  return (
    <div className={styles.buttoncontainer}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total !== 0 && (
        <button className={styles.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
