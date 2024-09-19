import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HeroSection from "../../components/HeroSection/HeroSection";
import "./DayDetailPage.scss";
import ExcercisesSection from "../../components/ExcercisesSection/ExcercisesSection";

const API_URL = `${import.meta.env.VITE_BASE_URL}:${
  import.meta.env.VITE_PORT
}/days`;

export default function DayDetailPage() {
  const { dayId } = useParams();
  const [dayData, setDayData] = useState(null);

  const dayDescriptions = {
    1: "LEG DAY",
    2: "UPPER BODY ",
    3: "GLUTES",
    4: "HIIT CARDIO",
    5: "FULL BODY",
  };

  useEffect(() => {
    async function fetchDayData() {
      try {
        const response = await axios.get(`${API_URL}/${dayId}`);
        setDayData(response.data);
      } catch (error) {
        console.error("Error fetching day data:", error);
      }
    }
    console.log(dayData);
    fetchDayData();
  }, [dayId]);

  if (!dayData) {
    return <div>Loading...</div>;
  }
  const isVideo = dayData.image.endsWith(".mp4");
  return (
    <>
      <HeroSection
        heading={dayData.name}
        text={dayDescriptions[dayId]}
        mediaSrc={`/images/${dayData.image}`}
        isVideo={isVideo}
      />

      <ExcercisesSection exercises={dayData.exercises} />
    </>
  );
}
