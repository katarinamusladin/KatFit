import SingleDay from "../SingleDay/SingleDay";
import "./DaysSection.scss";
import Image from "../../assets/images/image1.jpg";

export default function DaysSection() {
  return (
    <>
      <div className="cards">
        <h1 className="cards__title">5 DAY WORKOUT PLANNER</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <SingleDay
                src={Image}
                text="LEGS"
                label="DAY 1"
                path="/"
              />
              <SingleDay
                src={Image}
                text="UPPER"
                label="DAY 2"
                path="/"
              />

              <SingleDay
                src={Image}
                text="GLUTES"
                label="DAY 3"
                path="/"
              />
              <SingleDay
                src={Image}
                text="HIIT CARDIO"
                label="DAY 4"
                path="/"
              />
              <SingleDay
                src={Image}
                text="FULL BODY"
                label="DAY 5"
                path="/"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
