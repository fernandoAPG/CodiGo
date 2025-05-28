import { useState } from "react";
import star from "../public/images/icon-star.svg";
import minus from "../public/images/icon-minus.svg";
import plus from "../public/images/icon-plus.svg";
import "./App.css";
function App() {
  const [btn, setbtn] = useState(1);
  const q1 = () => {
    return (
      <p>
        Frontend Mentor offers realistic coding challenges to help developers
        improve their frontend coding skills with projects in HTML, CSS, and
        JavaScript. It's suitable for all levels and ideal for portfolio
        building.
      </p>
    );
  };
  const q2 = () => {
    return (
      <p>
        Yes, Frontend Mentor offers both free and premium coding challenges,
        with the free option providing access to a range of projects suitable
        for all skill levels.
      </p>
    );
  };
  const q3 = () => {
    return (
      <p>
        Yes, you can use projects completed on Frontend Mentor in your
        portfolio. It's an excellent way to showcase your skills to potential
        employers!
      </p>
    );
  };
  const q4 = () => {
    return (
      <p>
        The best place to get help is inside Frontend Mentor's Discord
        community. There's a help channel where you can ask questions and seek
        support from other community members.
      </p>
    );
  };
  return (
    <>
      <div className="container">
        <section className="sub-container">
          <section className="header">
            <img src={star} alt="star-img" className="star" />
            <h1 className="title">FAQs</h1>
          </section>
          <section className="questions-box">
            <h2 className="questions" onClick={() => setbtn(1)}>
              What is Frontend Mentor, and how will it help me?
            </h2>
            <img
              src={btn == 1 ? minus : plus}
              alt={btn == 1 ? "minus-img" : "plus-img"}
              className="icon"
            />
          </section>
          {btn == 1 && <section className="answers">{q1()}</section>}
          <section className="questions-box">
            <h2 className="questions" onClick={() => setbtn(2)}>
              Is Frontend Mentor free?
            </h2>
            <img
              src={btn == 2 ? minus : plus}
              alt={btn == 2 ? "minus-img" : "plus-img"}
              className="icon"
            />
          </section>
          {btn == 2 && <section className="answers">{q2()}</section>}
          <section className="questions-box">
            <h2 className="questions" onClick={() => setbtn(3)}>
              Can I use Frontend Mentor projects in my portfolio?
            </h2>
            <img
              src={btn == 3 ? minus : plus}
              alt={btn == 3 ? "minus-img" : "plus-img"}
              className="icon"
            />
          </section>
          {btn == 3 && <section className="answers">{q3()}</section>}
          <section className="questions-box">
            <h2 className="questions" onClick={() => setbtn(4)}>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </h2>
            <img
              src={btn == 4 ? minus : plus}
              alt={btn == 4 ? "minus-img" : "plus-img"}
              className="icon"
            />
          </section>
          {btn == 4 && <section className="answers">{q4()}</section>}
        </section>
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

export default App;
