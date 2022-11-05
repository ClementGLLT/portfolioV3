import React from "react";
import "./ProjectModal.css";
import "../styles/fundamentals.css";
import Tags from "../components/Tags";
import ImgGallery from "../components/ImgGallery";
import Link from "../components/Link.js";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";

function ProjectModal({
  setShowModal,
  showModal,
  modalProject,
  clickModalProject,
  hover,
  notHover,
  props,
  infoModal,
  setInfoModal,
}) {
  console.log(infoModal, "infoModal");

  const bgColor = infoModal.color;
  const animationOpenWindow = useRef(null);

  const animationWelcomeSection = useRef(null);
  const animationSection1 = useRef(null);
  const animationSection2 = useRef(null);
  const animationSection3 = useRef(null);
  const animationGallery = useRef(null);

  const isInViewOpenWindow = useInView(animationOpenWindow);

  const isInViewWelcomeSection = useInView(animationWelcomeSection);
  const isInViewSection1 = useInView(animationSection1);
  const isInViewSection2 = useInView(animationSection2);
  const isInViewSection3 = useInView(animationSection3);
  const isInViewGallery = useInView(animationGallery);

  const welcomeImg = infoModal.urlWelcomeModal;
  const section1Img = infoModal.urlSection1;
  const section2Img = infoModal.urlSection2;
  const section3Img = infoModal.urlSection3;
  const galleryImg1 = infoModal.urlGallery1;
  const galleryImg2 = infoModal.urlGallery2;
  const galleryImg3 = infoModal.urlGallery3;

  //Section 1 -------------------------------------------------------------------------------------------------
  function section1() {
    if (infoModal.section1Title !== "false")
      return (
        <div className="section1" ref={animationSection1}>
          <div className="textColumn">
            <div
              className="h3 textColorG1"
              style={{
                transform: isInViewSection1 ? "none" : "translateY(40px)",
                opacity: isInViewSection1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
              }}
            >
              {infoModal.section1Title}
            </div>
            <div
              className="body textColorG1"
              style={{
                transform: isInViewSection1 ? "none" : "translateY(40px)",
                opacity: isInViewSection1 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              {infoModal.section1Description}
            </div>
          </div>
          <div
            className="imgColumn"
            style={{
              backgroundImage: "url(" + section1Img + ")",
              transform: isInViewSection1 ? "none" : "translateY(40px)",
              opacity: isInViewSection1 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          ></div>
        </div>
      );
  }

  //Section 2 -------------------------------------------------------------------------------------------------
  function section2() {
    if (infoModal.section2Title !== "false")
      return (
        <div className="section1" ref={animationSection2}>
          
          <div className="textColumn">
            <div
              className="h3 textColorG1"
              style={{
                transform: isInViewSection2 ? "none" : "translateY(40px)",
                opacity: isInViewSection2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.0s",
              }}
            >
              {infoModal.section2Title}
            </div>
            <div
              className="body textColorG1"
              style={{
                transform: isInViewSection2 ? "none" : "translateY(40px)",
                opacity: isInViewSection2 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              {infoModal.section2Description}
            </div>
          </div>
            <div
            className="imgColumn"
            style={{
              backgroundColor: bgColor,
              backgroundImage: "url(" + section2Img + ")",
              transform: isInViewSection2 ? "none" : "translateY(40px)",
              opacity: isInViewSection2 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          ></div>
        </div>
      );
  }

  //Section 3 -------------------------------------------------------------------------------------------------
  function section3() {
    if (infoModal.section3Title !== "false")
      return (
        <div className="section1" ref={animationSection3}>
          <div className="textColumn">
            <div
              className="h3 textColorG1"
              style={{
                transform: isInViewSection3 ? "none" : "translateY(40px)",
                opacity: isInViewSection3 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
              }}
            >
              {infoModal.section2Title}
            </div>
            <div
              className="body textColorG1"
              style={{
                transform: isInViewSection3 ? "none" : "translateY(40px)",
                opacity: isInViewSection3 ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
              {infoModal.section2Description}
            </div>
          </div>
          <div
            className="imgColumn"
            style={{
              backgroundColor: bgColor,
              backgroundImage: "url(" + section3Img + ")",
              transform: isInViewSection3 ? "none" : "translateY(40px)",
              opacity: isInViewSection3 ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
            }}
          ></div>
        </div>
      );
  }

  function githubLink1() {
    if (infoModal.githubLink1 !== "false")
    return(
      <Link text={infoModal.gitLinkText1} url={infoModal.githubLink1}/>
    )
  }

  function githubLink2() {
    if (infoModal.githubLink2 !== "false")
    return(
      <Link text={infoModal.gitLinkText2} url={infoModal.githubLink2}/>
    )
  }

  return (
    <div
      className="modalWindow"
      ref={animationOpenWindow}
      style={{
        transform: isInViewOpenWindow ? "none" : "translateY(-100vh)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="headerModal">
        <div className="h3 textColorG1">{infoModal.number}</div>
        <div className="h3 textColorG1 titleModal">{infoModal.title}</div>
        <div className="iconeWrapper">
          <IoClose
            className="icone textColorG6"
            onMouseEnter={hover}
            onMouseLeave={notHover}
            style={{ backgroundColor: bgColor, minWidth: "32px" }}
            onClick={clickModalProject}
          />
        </div>
      </div>
      <div className="verticalScrollWindow">
        <div className="sectionWrapper">
          {/* //Welcome Section-------------------------------------------------------- */}
          <div
            ref={animationWelcomeSection}
            style={{
              backgroundImage: "url(" + welcomeImg + ")",
              backgroundColor: bgColor,
              backgroundSize: isInViewWelcomeSection ? "70vw" : "0vw",
              opacity: isInViewWelcomeSection ? 1 : 0,
              transition: "all 5s cubic-bezier(0,.82,0,1) 0.2s",
            }}
            className="welcomeSection"
          >
            <div
              className="welcomeText"
              style={{
                transform: isInViewWelcomeSection
                  ? "none"
                  : "translateX(-100px)",
                opacity: isInViewWelcomeSection ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              <div className="h2 textColorWhite textsWelcome">
                {infoModal.kickLineTitle}
              </div>
              <div className="body textColorWhite">
                {infoModal.welcomeDescription} 
              </div>
              {githubLink1()}
              {githubLink2()}
            </div>
            {/* <Tags/> */}
          </div>

          {/* //Section-------------------------------------------------------- */}
          {section1()}

          {/* //Section 2-------------------------------------------------------- */}
          {section2()}

          {/* //Section 3-------------------------------------------------------- */}
          {section3()}

          {/* //Gallery-------------------------------------------------------- */}
          <ImgGallery url={galleryImg1} />
          <ImgGallery url={galleryImg2} />
          <ImgGallery url={galleryImg3} />
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
