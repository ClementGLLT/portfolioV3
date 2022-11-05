import React from "react";
import '../components/Loader.css';
import '../styles/fundamentals.css';
import { motion } from "framer-motion";

const loaderVariants = {
    animationOne: {
        // x: [-20, 20],
        y : [0, -30],
        transition:{
            x: {
                yoyo: Infinity,
                duration: 0.5
            },
            y: {
                yoyo: Infinity,
                duration: 0.25
            }
        }
    }
}

const Loader = () => {
  return (
    <div className="mainContainerLoader">
      <motion.div className="loader BGColorPrimary"
      variants={loaderVariants}
      animate="animationOne"
      ></motion.div>
      <div className="typewriter">
      <p className="h3">À la recherche d'un poste de développeur frontend !</p>
      </div>
    </div>
  );
};

export default Loader;
