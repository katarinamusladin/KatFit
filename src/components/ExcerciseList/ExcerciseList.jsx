import React, { useState, useEffect } from "react";
import "./ExcerciseList.scss";
import axios from "axios";
import { FaInfoCircle } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const API_URL = `${import.meta.env.VITE_BASE_URL}:${
  import.meta.env.VITE_PORT
}/days`;

const ExcerciseList = ({ exercises }) => {
  const [exerciseData, setExerciseData] = useState(exercises);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    const updatedExercise = exerciseData.find((exercise) => exercise.id === id);
    try {
      await axios.put(`${API_URL}/exercises/${id}`, updatedExercise);
      alert("Exercise updated successfully!");
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

  const renderExerciseCard = (exercise) => (
    <div className="exercise-list__card" key={exercise.id}>
      <div className="exercise-list__image-container">
        <img
          src={`/images/${exercise.image}`}
          alt={`Exercise ${exercise.id} Image`}
          className="exercise-list__image"
        />
        <FaInfoCircle
          className="exercise-list__info-icon"
          title="How to do this workout?"
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
            htmlFor={`weights-${exercise.id}`}
            className="exercise-list__label"
          >
            Weights
          </label>
          <input
            type="number"
            id={`weights-${exercise.id}`}
            placeholder="Weight"
            name="weights"
            value={exercise.weights || ""}
            onChange={(e) => handleChange(e, exercise.id)}
            className="exercise-list__input"
          />
        </div>
        <div className="exercise-list__completed-status">
          <p>COMPLETED?</p>
          <span className="exercise-list__checkmark"></span>
        </div>
      </div>
      <div className="exercise-list__save-button">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, exercise.id)}
          className="exercise-list__button"
        >
          Save
        </button>
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
    </section>
  );
};

export default ExcerciseList;
