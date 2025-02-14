import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/Components/LandingPage";
import RiddlePage from "../src/Components/RiddlePage";
import QRPage from "../src/Components/QRPage";
import MessagePage from "../src/Components/MessagePage";
const App = () => (
  <Router>
    
    <Routes>
    
      <Route path="/" element={<LandingPage />} />
      <Route path="/riddle" element={<RiddlePage />} />
      <Route path="/qr" element={<QRPage />} />
      <Route path="/message" element={<MessagePage />} />
    </Routes>
  </Router>
);
export default App;
