import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please fill all fields");
      }
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/email`, {
        name,
        email,
        msg,
      });
      if (res.data.success) {
        setName("");
        setEmail("");
        setMsg("");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="container contact" id="contact">
        <Fade right>
          <div className="card card0 border-0">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                <div className="card1">
                  <div className="row border-line">
                    <img
                      src="https://contact.eg/contact-us/cover.png"
                      alt="oncontact"
                      className="image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 d-flex justify-content-center align-items-center form-contact">
                <div className="card2  card border-0 px-4 py-5 ">
                  <div className="row">
                    <h6>
                      Contact With{" "}
                      <a
                        href="https://www.linkedin.com/in/youssefmahmoud2004/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaLinkedin color="blue" className="ms-2" size={30} />
                      </a>{" "}
                      <a
                        href="https://github.com/youssef-m-roushdy"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaGithub color="black" className="ms-2" size={30} />
                      </a>{" "}
                      <a
                        href="https://www.facebook.com/yossef.mahmoud.9699/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <FaFacebook color="blue" className="ms-2" size={30} />
                      </a>
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Write your Name"
                        className="mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your Email Address"
                        className="mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="msg"
                        placeholder="Write your Message"
                        className="mb-3"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                      />
                    </div>
                    <div className="row px-3">
                      <button type="submit" className="button">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Contact;
