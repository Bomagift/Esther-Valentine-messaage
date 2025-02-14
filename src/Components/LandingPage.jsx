import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1 className="fade-in">
        Hey love, I have a little surprise for you... 💕
      </h1>
      <button className="start-btn" onClick={() => navigate("/riddle")}>
        Click to continue
      </button>
    </div>
  );
};
export default LandingPage;
