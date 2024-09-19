import SingleDay from "../SingleDay/SingleDay";
import { useState, useEffect, forwardRef } from "react";
import axios from "axios";
import "./DaysSection.scss";
const API_URL = `${import.meta.env.VITE_BASE_URL}:${
  import.meta.env.VITE_PORT
}/days`;
const DaysSection = forwardRef((props, ref) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    async function fetchDays() {
      try {
        const response = await axios.get(API_URL);
        setDays(response.data);
      } catch (error) {
        console.error("Error fetching days:", error);
      }
    }

    fetchDays();
  }, []);

  return (
    <>
      <div ref={ref} className="cards">
        <h1 className="cards__title">5 Day Workout Planner</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {days.map((day) => (
                <SingleDay
                  key={day.id}
                  src={`/images/${day.image}`}
                  text={day.target_area}
                  label={day.name}
                  path={`/day/${day.id}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});

export default DaysSection;
