import React from "react";
import Image1 from "../assets/Images/IMG_0530.jpeg"
import Image2 from "../assets/Images/IMG_9756.jpeg"
import MyVideo from "../assets/Video/d175ae5e-247e-4825-9413-6a4498ec0f93.mp4"
import MyVideo1 from "../assets/Video/filtered-78D24304-B1F9-4BCC-816C-436EB586E509.mp4"




import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./QRPage.css";

const QRPage = () => {
  return (
    <div className="qr-container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Click below to reveal your surprise! 💌
      </motion.h2>


      <div className="image-gallery">
        <motion.img
          src={Image1}
          alt="Us Together"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          src={Image2}
          alt="Another Moment"
          className="qr-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />

       
      </div>


      <div className="video-gallery">
        <motion.video
          className="qr-video"
          controls
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <source src={MyVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <motion.video
          className="qr-video"
          controls
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <source src={MyVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>


      </div>


      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/message">
          <button>Go to Surprise</button>
        </Link>
      </motion.div>
    </div>
  );
};

export default QRPage;

