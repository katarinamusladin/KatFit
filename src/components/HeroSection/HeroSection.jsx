import { Button } from "../Button/Button";
import './HeroSection.scss';
import '../../App.scss';
import video from "../../assets/videos/video-2.mp4";


export default function HeroSection(){
  return (
    <div className="hero">
      <video className="hero__video" src={video} autoPlay loop muted />
      <h1 className="hero__heading">STRONGER EVERY DAY</h1>
      <p className="hero__text">Consistency is the key</p>
      <div className="hero__buttons">
        <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large">
          GET STARTED
        </Button>
      </div>
     
    </div>
  
  );



}