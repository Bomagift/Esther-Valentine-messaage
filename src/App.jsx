import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../src/components/LandingPage";
import RiddlePage from "../src/components/RiddlePage";
import QRPage from "../src/components/QRPage";
import MessagePage from "../src/components/MessagePage";
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
