import { Button } from "../Button/Button";
import './HeroSection.scss';
import '../../App.scss';


export default function HeroSection( { heading, text, mediaSrc, isVideo, onButtonClick } ){
  return (
    <div className="hero">
      {isVideo ? (
        <video className="hero__video" src={mediaSrc} autoPlay loop muted />
      ) : (
        <img className="hero__image" src={mediaSrc} alt={heading} />
      )}
      <h1 className="hero__heading">{heading}</h1>
      <p className="hero__text">{text}</p>
      <div className="hero__buttons">
        <Button className="btns" buttonStyle='btn--outline' buttonSize="btn--large" onClick={(e) => {
            e.preventDefault();
            onButtonClick();
          }}>
          BEGIN NOW
        </Button>
      </div>
     
    </div>
  
  );



}