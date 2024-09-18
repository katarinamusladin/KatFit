import SingleDay from "../SingleDay/SingleDay";
import { useState, useEffect } from "react";
import axios from "axios";
import "./DaysSection.scss";
const API_URL = `${import.meta.env.VITE_BASE_URL}:${
  import.meta.env.VITE_PORT
}/days`;
export default function DaysSection() {
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
      <div className="cards">
        <h1 className="cards__title">5 DAY WORKOUT PLANNER</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {days.map((day) => (
                <SingleDay
                  key={day.id}
                  src={`/images/${day.image}`}
                  text={day.target_area}
                  label= {day.name}
                  path={`/day/${day.id}`}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
