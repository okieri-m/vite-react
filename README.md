# 1. Project Overview

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

 ユーザーが1−５の評価を選択した時、選択されたボタンには動的に is-active のクラスめいが付与され、ハイライトされます。
 ```
 <input type="radio" id={`rating - ${rating}`} onClick={() => handleRatingClick(rating)} name={`rating - ${rating}`} value={`rating - ${rating}`}/>
                    <label htmlFor={`rating - ${rating}`} className={`review__numberItem ${selectedRating === rating ? "is-active" : ""}`} aria-label={`Rating ${rating} out of 5`} aria-pressed={selectedRating === rating} >{rating}</label>

 ```

 ユーザーが選択する評価は、reactのフックuseStateで管理されていて、値が更新されるごとに最新の値が保存されます。

 ユーザーが submit を押した後の仕組みは useNavigate で実装されます。useNavigate では、submit が押された後の遷移先のパス(/thanks)と、ユーザーが選択した値(1-5の評価)が保存されます。

 例えば、ユーザーが評価3を選択し、submit をクリックすると、評価3が保存され、useNavigate で設定された /thanks へ遷移されます。ユーザーが評価を選択せずにsubmitボタンを押すと、「Select your feedback」のアラートが表示されます。

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

 遷移先のページでは、useLocation hookが使用され、遷移前で受け取った評価の値「３」が引き渡され、UIで「You selected 3 out of 5」が表示されます。

 