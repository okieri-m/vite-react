import{ useLocation } from "react-router-dom";
import "./Body.css"

export const ThanksBody = () => {

    const location = useLocation();
    const rating = location.state?.rating ?? 'none';

  return (
    <div className="yourResult__container">
        <span className="yourResult__text">You selected <span id="userRating" aria-live="polite">{rating}</span> out of 5</span>
    </div>
  )
}
