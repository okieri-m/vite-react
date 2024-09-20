import { useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export const Form = () => {

    const [ selectedRating, setSelectedRating ] = useState(null);
  const navigate = useNavigate();

  const handleRatingClick = (rating) =>{
   setSelectedRating(rating);
  };

  const handleSubmit = () =>{
   if (selectedRating === null){
       alert("Select your feedback");
   } else {
       navigate("/thanks", {state: {rating: selectedRating}});
     }
  };

  return (
    <form>
        <div className="review__numberContainer">
            {[1, 2, 3, 4, 5].map((rating) => (
                <Fragment key={rating}>
                    <input type="radio" id={rating} />
                    <label htmlFor={rating} className={`review__numberItem ${selectedRating === rating ? "is-active" : ""}`} aria-label={`Rating ${rating} out of 5`} aria-pressed={selectedRating === rating} onClick={() => handleRatingClick(rating)} >{rating}</label>
                </Fragment>
            ))}
        </div>
        <button className="submit__btn" type="button" onClick={handleSubmit}>SUBMIT</button>
    </form>
  )
}

