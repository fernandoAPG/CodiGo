import "../App.css";
import picture from "../assets/illustration-thank-you.svg"
function Thank_you({rating} ) {
  return (
    <>
      <div className="container" style={{textAlign:"center"}}>
        <img src={picture} alt="thank-you-picture" />
        <span className="rating-value">You selected {rating} out of 5</span>

        <h1 className="title">Thank you!</h1>

        <p className="main-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fernandoapg</a>.
      </div>
    </>
  );
}

export default Thank_you;
