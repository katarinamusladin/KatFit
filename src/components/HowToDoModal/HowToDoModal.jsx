import React from "react";
import "./HowToDoModal.scss";
import { FaTimes } from "react-icons/fa";

const HowToDoModal = ({ isOpen, handleClose, videoUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={handleClose}></div>
      <div className="modal__content">
        <FaTimes className="modal__close" onClick={handleClose} />
        <h2 className="modal__title">Check out this video!</h2>
        <div className="modal__video">
          <iframe src={videoUrl} title="Workout Video"></iframe>
        </div>
        <button className="modal__ok-button" onClick={handleClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default HowToDoModal;
