import React from "react";
import "./Link.css";
import { FaGithub } from "react-icons/fa";
import "../styles/fundamentals.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Link(props) {
  const animation = useRef(null);
  const isInView = useInView(animation);
  const lienGit = props.url ;

  function onclick() {
    props.clickModalProject();
    props.setInfoModal(props.tile);
  }


  return (
    <div
      className="linkContainer"
      ref={animation}
      onClick={onclick}
      style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <FaGithub className="icon textColorWhite" />
      <a href={props.url} target="_blank" >
        <div className="body textColorWhite linkText">{props.text}</div>
      </a>
    </div>
  );
}

export default Link;
