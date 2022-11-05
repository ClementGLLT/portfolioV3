import React from "react";
import "./ImgGallery.css";
import "../styles/fundamentals.css";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

function ImgGallery(props) {
  const animation = useRef(null);
  const isInView = useInView(animation);
  

  console.log("props.img",props.url);
  if (props.url !== "false" )

  return (
    <div className="galleryImgContainer">
      <div
        className="imgGallery" ref={animation}
        style={{
            backgroundImage: "url(" + props.url + ")",
            transform: isInView ? "none" : "translateY(40px)",
            opacity: isInView ? 1 : 0,
            transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
        ></div>
        </div>
  );
}

export default ImgGallery;
