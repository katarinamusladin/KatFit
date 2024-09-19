import HeroSection from "../../components/HeroSection/HeroSection";
import "./HomePage.scss";
import "../../App.scss";
import DaysSection from "../../components/DaysSection/DaysSection";
import { useRef } from 'react';
import video from "../../assets/videos/video-2.mp4";
function HomePage(){
  const daysRef = useRef(null);

  const scrollToDays = () => {
    if (daysRef.current) {
      daysRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("daysRef.current is null");
    }
  };
  return (
    <>
    
    <HeroSection 
        onButtonClick={scrollToDays}
        heading="STRONGER EVERY DAY" 
        text="Kate, you got this!" 
        mediaSrc={video} 
        isVideo={true} 
      />
   <DaysSection ref={daysRef}  />
    </>
  );
}

export default HomePage;