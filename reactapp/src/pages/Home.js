import React from "react";
import "./Home.css";
import "../styles/fundamentals.css";
import Navbar from "../components/Navbar";
import WelcomeScreen from "../components/WelcomeScreen";
import SectionTitle from "../components/SectionTitle";
import ProjectTile from "../components/ProjectTile";
import ProjectModal from "../components/ProjectModal";
import ExperienceSection from "../components/ExperienceSection";
import Loader from "../components/Loader";
import { useRef, useState, useEffect } from "react";
import { motion, Variants, useInView } from "framer-motion";

function Home(props) {
  const projectSection = useRef(null);
  const experienceSection = useRef(null);
  const aboutMeSection = useRef(null);
  const [projectsList, setprojectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState([]);

  //Ancres de scroll vers la section associée
  const scrollToSection = (elementRef) => {
    console.log("scrollToSection");
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  //Activation de la modale
  const clickModalProject = () => {
    if (showModal === true) {
      setShowModal(false);
      console.log(showModal, "false");
    } else {
      setShowModal(true);
      console.log(showModal, "true");
    }
  };

  //Récupération des infos du backend
  useEffect(() => {
    const APIResultsLoading = async () => {
      setIsLoading(true);
      const data = await fetch("http://localhost:3001/projectData");
      const body = await data.json();
      setprojectsList(body.projectsData);
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
      await delay(4000);
      setIsLoading(false);
    };
    APIResultsLoading();
  }, []);

  // console.log(projectsList[0],'projectsList');

  // Agencement des tuiles projets dynamiques avec la fonction map
  var tileList = [];
  projectsList.map((tile) => {
    tileList.push(
      <button
        className="buttonTile"
        onMouseEnter={props.hover}
        onMouseLeave={props.notHover}
      >
        <ProjectTile
          onMouseEnter={props.hover}
          onMouseLeave={props.notHover}
          tile={tile}
          clickModalProject={clickModalProject}
          showModal={showModal}
          setShowModal={setShowModal}
          infoModal={infoModal}
          setInfoModal={setInfoModal}
        />
      </button>
    );
  });

  //Constante contenant la page Home
  const home = (
    <div>
      <Navbar
        scrollToSection={scrollToSection}
        projectSection={projectSection}
        experienceSection={experienceSection}
        aboutMeSection={aboutMeSection}
        hover={props.hover}
        notHover={props.notHover}
      />

      {showModal && (
        <ProjectModal
          clickModalProject={clickModalProject}
          showModal={showModal}
          setShowModal={setShowModal}
          hover={props.hover}
          notHover={props.notHover}
          infoModal={infoModal}
        />
      )}
      <div className="mainMainContainer">
        <div className="mainContainer">
          <WelcomeScreen />
          <motion.div
            className="sectionProject"
            ref={projectSection}
            // variants={animationInViewLG}
            initial="init"
            animate="final"
          >
            <SectionTitle title1="Quelques" title2="projets" />
            <motion.div
              className="projectWrapper" /* variants={animationInViewMD} */
            >
              {tileList}
            </motion.div>
          </motion.div>
          <motion.div
            className="sections"
            ref={experienceSection}
            /* variants={animationInViewMD} */
            initial="init"
            animate="final"
          >
            <SectionTitle title1="Quelques" title2="experiences" />
            <ExperienceSection />
          </motion.div>
          <div className="sections" ref={aboutMeSection}>
            <SectionTitle title1="Quelques mots" title2="sur mon parcours" />
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{isLoading ? <Loader /> : home}</div>;
}

export default Home;
