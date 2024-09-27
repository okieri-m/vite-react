# 1. Project Overview
<img src="https://github.com/user-attachments/assets/a28624ba-0a9d-45ac-bd21-a6a78a220806" width="300">

This is a web page created to obtain numerical reviews from users.


# 2. Languages

This website is used these languages below.  

HTML, CSS, JavScript, React


# 3. Installation

Please reffer to this URL to clone the folder.  
[How to clone the folder](https://docs.github.com/ja/repositories/creating-and-managing-repositories/cloning-a-repository)


# 4.Script Usage

This script implements the ability for users to select a rating as feedback on a web page and send that rating to the next page. The ratings are displayed in 1-5 buttons, and when the user clicks one of the rating button, that button is highlighted. The user then clicks on the Submit Ratings button to send the ratings and move to the next page.

 ## Feature details

When the user selects a rating from 1 to 5, the selected button is dynamically assigned the class name ```is-active``` and highlighted.


 ```
 <input type="radio" id={`rating - ${rating}`} onClick={() => handleRatingClick(rating)} name={`rating - ${rating}`} value={`rating - ${rating}`}/>
<label htmlFor={`rating - ${rating}`} className={`review__numberItem ${selectedRating === rating ? "is-active" : ""}`} aria-label={`Rating ${rating} out of 5`} aria-pressed={selectedRating === rating} >{rating}</label>

 ```

 The rating is managed by React hook  ```useState``` , which stores the latest value each time the rating is updated.

 The functionality after the user clicks the submit button is implemented using the React hook ```useNavigate``` . The navigate hook stores two values: the pass to the next page(/thanks) and the rating chosen by the user.

 For example, if the user chooses a rating 3 and clicks submit, the rating 3 is stored, and the page navigates to /thanks. If the user clicks the submit button without chosing any rating, an alart will be shown saying "Select your feedback." .

 ```
   const handleSubmit = (e) =>{
   if (selectedRating === null){
       alert("Select your feedback");
   } else {
       e.preventDefault();
       navigate("/thanks", {state: {rating: selectedRating}});
     }
  };
```

On the next page (/thanks), useLocation hook is used to retrieved the rating of 3, which is then displayed to the user as "You selected 3 out of 5".

 
