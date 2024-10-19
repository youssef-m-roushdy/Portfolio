import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import myCv from '../../assets/docs/Youssef-Mahmoud-Roushdy.pdf';
//import '../../assets/docs/'
const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  const onButtonClick = () => {
    const pdfUrl = myCv;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Youssef-Mahmoud-Roushdy.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}
        </div>
        <div className="container home-content">
          <Fade right>
            <h1>Hi 👋 I'am a</h1>
            <h2>
              <Typewriter
                options={{
                  strings: [".Net Software Engineer", "Backend Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=201158729981"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <button
                className="btn btn-cv"
                onClick={onButtonClick}
              >
                My Resume
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
