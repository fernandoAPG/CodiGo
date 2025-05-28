import star from "./assets/icon-star.svg";
import Thank_you from "./components/Thank-you.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [page, setpage] = useState(false);
  const [rating, setrating] = useState(0);
  const change = () => {
    setpage(true);
  };
  const licolors = {
    backgroundColor: "hsl(25, 97%, 53%)",
    color: "hsl(213, 19%, 18%)",
  };
  if (page) {
    return <Thank_you rating={rating} />;
  }
  return (
    <>
      <div className="container">
        <img src={star} alt="icon-star" className="star" />
        <h1 className="title">How did we do?</h1>

        <p className="main-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="rating-list">
          <li>
            <button
              style={rating==1 ? licolors : {}}
              type="button"
              onClick={() => {
                setrating(1);
              }}
            >
              1
            </button>
          </li>
          <li>
            <button
              style={rating==2 ? licolors : {}}
              type="button"
              onClick={() => {
                setrating(2);
              }}
            >
              2
            </button>
          </li>
          <li>
            <button
              style={rating==3 ? licolors : {}}
              type="button"
              onClick={() => {
                setrating(3);
              }}
            >
              3
            </button>
          </li>
          <li>
            <button
              style={rating==4 ? licolors : {}}
              type="button"
              onClick={() => {
                setrating(4);
              }}
            >
              4
            </button>
          </li>
          <li>
            <button
              style={rating==5 ? licolors : {}}
              type="button"
              onClick={() => {
                setrating(5);
              }}
            >
              5
            </button>
          </li>
        </ul>

        <button type="button" className="submit-btn" onClick={change}>
          Submit
        </button>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noopener noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Fernandoapg</a>.
      </div>
    </>
  );
}
export default App;
