import React, { useState, useEffect } from "react";
import "./ExcerciseList.scss";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HowToDoModal from "../HowToDoModal/HowToDoModal";

const API_URL = `${import.meta.env.VITE_BASE_URL}:${
  import.meta.env.VITE_PORT
}/days`;

const ExcerciseList = ({ exercises, dayId }) => {
  const [exerciseData, setExerciseData] = useState(exercises);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [updatedExerciseId, setUpdatedExerciseId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setExerciseData((prevData) =>
      prevData.map((exercise) =>
        exercise.id === id ? { ...exercise, [name]: value } : exercise
      )
    );
  };

  const handleComplete = (id) => {
    setExerciseData((prevData) =>
      prevData.map((exercise) =>
        exercise.id === id
          ? { ...exercise, completed: !exercise.completed }
          : exercise
      )
    );
  };

  const handleSave = async (exercise) => {
    const url = `${API_URL}/${dayId}/exercises/${exercise.id}`;

    const exerciseDataToUpdate = {
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
    };

    try {
      const response = await axios.put(url, exerciseDataToUpdate);
      setUpdatedExerciseId(exercise.id);
      setTimeout(() => {
        setUpdatedExerciseId(null);
      }, 1500);
      console.log("Exercise updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating exercise:", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
  };

  const openModal = (video) => {
    setVideoUrl(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderExerciseCard = (exercise) => (
    <div
      className={`exercise-list__card ${
        exercise.completed ? "exercise-list__card--completed" : ""
      }`}
      key={exercise.id}
    >
      <div className="exercise-list__image-container">
        <img
          src={`/images/${exercise.image}`}
          alt={`Exercise ${exercise.id} Image`}
          className="exercise-list__image"
        />
        <FaInfoCircle
          className="exercise-list__info-icon"
          title="How to do this workout?"
          onClick={() => openModal(exercise.video_url)}
        />
      </div>
      <h3 className="exercise-list__workout-title">{exercise.name}</h3>
      <div className="exercise-list__inputs">
        <div className="exercise-list__input-field">
          <label
            htmlFor={`reps-${exercise.id}`}
            className="exercise-list__label"
          >
            Reps
          </label>
          <input
            type="number"
            id={`reps-${exercise.id}`}
            placeholder="Enter reps"
            name="reps"
            value={exercise.reps || ""}
            onChange={(e) => handleChange(e, exercise.id)}
            className="exercise-list__input"
          />
        </div>
        <div className="exercise-list__input-field">
          <label
            htmlFor={`sets-${exercise.id}`}
            className="exercise-list__label"
          >
            Sets
          </label>
          <input
            type="number"
            id={`sets-${exercise.id}`}
            placeholder="Enter sets"
            name="sets"
            value={exercise.sets || ""}
            onChange={(e) => handleChange(e, exercise.id)}
            className="exercise-list__input"
          />
        </div>
      </div>
      <div className="exercise-list__status-wrapper">
        <div className="exercise-list__input-field">
          <label
            htmlFor={`weight-${exercise.id}`}
            className="exercise-list__label"
          >
            Weights
          </label>
          <input
            type="number"
            id={`weights-${exercise.id}`}
            placeholder="Weight"
            name="weight"
            value={exercise.weight || ""}
            onChange={(e) => handleChange(e, exercise.id)}
            className="exercise-list__input"
          />
        </div>
        <div
          className="exercise-list__completed-status"
          onClick={() => handleComplete(exercise.id)}
        >
          <span className="exercise-list__checkmark"></span>
        </div>
      </div>
      <div className="exercise-list__save-button">
        <button
          type="button"
          className="exercise-list__button"
          onClick={() => handleSave(exercise)}
        >
          Save
        </button>
        {updatedExerciseId === exercise.id && (
          <div className="exercise-list__alert">INFO UPDATED!</div>
        )}
      </div>
    </div>
  );

  return (
    <section className="exercise-list">
      <h2 className="exercise-list__title">Workouts</h2>
      {isMobile ? (
        <Slider {...settings} className="exercise-list__slider">
          {exerciseData.map((exercise) => renderExerciseCard(exercise))}
        </Slider>
      ) : (
        <div className="exercise-list__grid">
          {exerciseData.map((exercise) => renderExerciseCard(exercise))}
        </div>
      )}
      <HowToDoModal
        isOpen={isModalOpen}
        handleClose={closeModal}
        videoUrl={videoUrl}
      />
    </section>
  );
};

export default ExcerciseList;
