import starIcon from "./assets/star.png";
import "./FormHeader.css";

export const Header = () => {
  return (
    <div className="star__imgContainer">
        <img src={starIcon} alt="star icon" className="star__img" />
    </div>
  )
}
