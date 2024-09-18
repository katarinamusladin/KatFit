import './SingleDay.scss';
import { Link } from 'react-router-dom';

export default function SingleDay(props){
  return(
    <>
    <li className='cards__item'>
      <Link className='cards__item__link' to={props.path}>
        <figure className='cards__item__pic-wrap' data-category={props.label}>
          <img
            className='cards__item__img'
            alt='Workout Image'
            src={props.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  </>
  )
};