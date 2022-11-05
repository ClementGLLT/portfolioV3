import React from "react";
import "./Navbar.css";
import "../styles/fundamentals.css";
import Buttontertiary from "./Buttontertiary.js";
import { FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useInView } from "framer-motion";
import { useRef } from "react";

function Navbar({
  scrollToSection,
  projectSection,
  experienceSection,
  aboutMeSection,
  hover,
  notHover /* handleClickExperienceSection, handleClickAboutMeSection */,
}) {
  const animation = useRef(null);
  const isInView = useInView(animation);
  return (
    <div
      className="mainContainerNav"
      ref={animation}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
      }}
    >
      <div className="topContainer">
        <button className="button" onMouseEnter={hover} onMouseLeave={notHover}>
          <Buttontertiary
            label="Clément Guillot - 2022"
            onMouseEnter={hover}
            onMouseLeave={notHover}
          />
        </button>
        {/* <button className='button' onMouseEnter={hover} onMouseLeave={notHover}>
            <Buttontertiary label='About me'onMouseEnter={hover} onMouseLeave={notHover}/>
            </button> */}
      </div>
      <div className="underBigContainer">
        <div className="leftContainer">
          <button
            className="button"
            onClick={() => scrollToSection(projectSection)}
            onMouseEnter={hover}
            onMouseLeave={notHover}
          >
            <Buttontertiary
              label="Projets"
              textOrientation="textOrientationVertical" /* onClick={() => handleClickProjectSection()} */
            />
          </button>
          <button
            className="button"
            onClick={() => scrollToSection(experienceSection)}
            onMouseEnter={hover}
            onMouseLeave={notHover}
          >
            <Buttontertiary
              label="Experiences"
              textOrientation="textOrientationVertical"
            />
          </button>
          <button
            className="button"
            onClick={() => scrollToSection(aboutMeSection)}
            onMouseEnter={hover}
            onMouseLeave={notHover}
          >
            <Buttontertiary
              label="Qui je suis"
              textOrientation="textOrientationVertical"
            />
          </button>
        </div>
        <div className="rightContainer">
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-guillot/"
            target="_blank"
          >
            <FaLinkedinIn
              className="icon textColorPrimary"
              onMouseEnter={hover}
              onMouseLeave={notHover}
            />
          </a>
          <a
            href="https://medium.com/@clement.guillot.dsgn"
            target="_blank"
          >
          <FaMediumM
            className="icon textColorPrimary"
            onMouseEnter={hover}
            onMouseLeave={notHover}
          />
</a>        
<a
            href="mailto:clement.guillot.dsgn@gmail.com"
            target="_blank"
          >
          <IoMdMail
            className="icon textColorPrimary"
            onMouseEnter={hover}
            onMouseLeave={notHover}
          />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
