import React from "react";
import "./SectionTitle.css";
import "../styles/fundamentals.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function SectionTitle(props) {
  const animation = useRef(null);
  const isInView = useInView(animation);

  return (
    <div
      className="sectionContainer" ref={animation}
      style={{
        transform: isInView ? "none" : "translateY(40px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="sectionTextContainer">
        <text className="textColorG1 h2 sectionText" >{props.title1}</text>
        <text className="textColorG1 h2 sectionText">{props.title2}</text>
      </div>
      <div className="sectionDivider BGColorG5"></div>
    </div>
  );
}

export default SectionTitle;
