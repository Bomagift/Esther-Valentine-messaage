import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RiddlePage.css";

const RiddlePage = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const correctAnswers = ["6th March", "6 march", "6 March"];

  const checkAnswer = () => {
    if (correctAnswers.includes(answer.trim().toLowerCase())) {
      navigate("/qr");
    } else {
      setError("Oops! Try again, love. 💖");
    }
  };

  return (
    <div className="riddle-container">
      <h2>What day and month did we first meet? 💭</h2>
      <input
        type="text"
        placeholder="Enter your answer..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={checkAnswer}>Submit</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default RiddlePage;
