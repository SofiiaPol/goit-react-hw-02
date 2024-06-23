import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import Description from "./components/Description/Description";

function App() {
  const initFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initFeedback;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const resetFeedback = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(resetState);
    localStorage.setItem("feedback", JSON.stringify(resetState));
  };

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => {
      const updatedFeedback = {
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      };
      localStorage.setItem("feedback", JSON.stringify(updatedFeedback));
      return updatedFeedback;
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description />
      {totalFeedback !== 0 && (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 && <Notification message="No feedback given yet" />}
    </>
  );
}

export default App;
