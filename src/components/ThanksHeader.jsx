import thanksPageIllustration from "./assets/thankspage-img.png";
import "./ThanksHeader.css";

export const ThanksHeader = () => {
  return (
    <div className="thanks__imgContainer">
        <img src={thanksPageIllustration} alt="thank you page illustration" className="thanks__img" />
    </div>
  )
}
