import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import { useTheme } from "../../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import myCv from '../../assets/docs/Youssef-Mahmoud-Roushdy.pdf';
import { Link } from "react-router-dom";

const Home = ({ user, setUser }) => {
  const [theme, setTheme] = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem("auth-token");
    setUser(null)
  };

  return (
    <div className="container-fluid home-container" id="home">
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? <FaMoon size={30} /> : <FaSun size={30} />}
      </div>
      <div className="container home-content">
        <Fade right>
          <div className="info-log-reg">
            <h1>Hi 👋 I'm a</h1>
            <div className="log-reg-buttons">
              {user ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    className="bg-[#138781] hover:bg-[#064e3b] text-white font-bold py-2 px-4 rounded"
                    to="/register"
                  >
                    Sign up
                  </Link>
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    to="/login"
                  >
                    Sign in
                  </Link>
                </>
              )}
            </div>
          </div>
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
            <a
              className="btn btn-cv"
              href={myCv}
              download="Youssef-Mahmoud-Roushdy.pdf"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
