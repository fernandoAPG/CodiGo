import "./App.css";
import avatar from "./assets/assets/images/image-avatar.webp";
import banner from "./assets/assets/images/illustration-article.svg";
function App() {
  return (
    <>
      <div className="container">
        <img src={banner} alt="ilustration-article" className="banner" />
        <h2 className="mini-title">Learning</h2>

        <h2 className="date">Published 21 Dec 2023</h2>

        <h1 className="main-title">HTML & CSS foundations</h1>

        <p>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <section className="autor-info">
          <img src={avatar} alt="avatar-img" className="avatar-img" />
          <span>Greg Hooper</span>
        </section>
      </div>
      <div className="attribution">
        Challenge by{"Fernandoapg"}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/fernandoAPG">Fernandoapg</a>.
      </div>
    </>
  );
}

export default App;
