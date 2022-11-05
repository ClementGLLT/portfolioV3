import React from "react";
import "./ExperienceSection.css";
import "../styles/fundamentals.css";
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

function ExperienceSection(props) {
  const animation = useRef(null);
  const isInView = useInView(animation);

  const expInfo = [
    {
      name: "",
      role: "",
      scope: "",
      duration: "",
      mission: "",
    },
    {
      name: "BPCE",
      role: "UX/UI Designer",
      scope: "Design system, mobile & desktop, Login / Virements / Prélèvements",
      duration: "24 mois",
      mission: "Création de nouveaux parcours utilisateurs intégrés aux espaces clients Banque Populaire et Caisse d'Épargne. Création et spécifications de nouveaux composants du système NEO. Mise en place de nouveaux process et nouveaux outils.",
    },
    {
      name: "Natixis",
      role: "UX/UI Designer / UX researcher",
      scope: "B2C / B2B",
      duration: "3 mois",
      mission: "Créer un outil de souscription simple mais pédagogique qui permettrait aux conseillers d'assimiler rapidement les subtilités d'une nouvelle formule d'assurance-crédit afin d'être persuasif face au client.",
    },
    {
      name: "Ubisoft",
      role: "UI Designer / DA",
      scope: "B2C, e-commerce , mobile & desktop",
      duration: "2 semaines",
      mission: "Refonte visuelle du site e-commerce de la boutique Ubisoft afin de teaser et promouvoir l'événement en ligne Ubisoft Forward présentant les nouveaux jeux vidéo.",
    },
    {
      name: "AOS",
      role: "UX/UI Designer / UX researcher",
      scope: "Design sprint / Desktop / WEB",
      duration: "1 mois",
      mission: "Conception du processus de remplissage de la page de profil et présentation finale de la page de profil de l'entreprise de l'ouvrier du bâtiment",
    },
    {
      name: "Deliveroo",
      role: "UX/UI Designer, Facilitateur",
      scope: "Design sprint / B2C / Mobile",
      duration: "2 semaines",
      mission: "Dans le cadre d'un design sprint pour Deliveroo, nous avons proposé une fonctionnalité en attaquant un nouveau segment du marché : Les utilisateurs peuvent proposer leur cuisine.",
    },
    {
      name: "La Poste",
      role: "Role",
      scope: "Scope",
      duration: "",
      mission: "mission",
    },
    {
      name: "SNCF",
      role: "Role",
      scope: "Scope",
      duration: "",
      mission: "mission",
    },
  ];

  const [infoExp, setInfoExp] = useState({
    name: "",
    role: "",
    scope: "",
    mission: "",
  });

  function onMouseEnter(position) {
    setInfoExp(position);
    return infoExp;
  }

  function onClick(position) {
    setInfoExp(position);
    return infoExp;
  }

  return (
    <div className="experienceSectionMainContainer">
      <div className="expListLGContainer">
        <text
          className="h3 title1 hover"
          onMouseEnter={() => onMouseEnter(expInfo[1])}
          onClick={() => onClick(expInfo[1])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[1].name}
        </text>
        <text
          className="h3 title2 hover"
          onMouseEnter={() => onMouseEnter(expInfo[2])}
          onClick={() => onClick(expInfo[2])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[2].name}
        </text>
        <text
          className="h3 title3 hover"
          onMouseEnter={() => onMouseEnter(expInfo[3])}
          onClick={() => onClick(expInfo[3])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[3].name}
        </text>
        <text
          className="h3 title4 hover"
          onMouseEnter={() => onMouseEnter(expInfo[4])}
          onClick={() => onClick(expInfo[4])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[4].name}
        </text>
        <text
          className="h3 title5 hover"
          onMouseEnter={() => onMouseEnter(expInfo[5])}
          onClick={() => onClick(expInfo[5])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[5].name}
        </text>
        <text
          className="h3 title6 hover"
          onMouseEnter={() => onMouseEnter(expInfo[6])}
          onClick={() => onClick(expInfo[6])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[6].name}
        </text>
        <text
          className="h3 title7 hover"
          onMouseEnter={() => onMouseEnter(expInfo[7])}
          onClick={() => onClick(expInfo[7])}
/*           onMouseLeave={() => onMouseEnter(expInfo[0])} */
        >
          {expInfo[7].name}
        </text>
      </div>
      <div className="hider">
        <div className="tableDetailsContainer">
          <div className="titleContainer">
            <text className="h3">{infoExp.name}</text>
            <div className="dividerTitle BGColorG1"></div>
          </div>
          <div className="subSectionWrapper">
            <div className="subSectionTableContainer ss1">
              <text className="titleSubSectionTable bodyBold">Rôle :</text>
              <text className="descriptionSubSectionTable body">
                {infoExp.role}
              </text>
            </div>
            <div className="subSectionTableContainer ss2">
              <text className="titleSubSectionTable bodyBold">Périmètre :</text>
              <text className="descriptionSubSectionTable body">
                {infoExp.scope}
              </text>
            </div>
            <div className="subSectionTableContainer ss3">
              <text className="titleSubSectionTable bodyBold">Durée :</text>
              <text className="descriptionSubSectionTable body">
                {infoExp.duration}
              </text>
            </div>
          </div>
          <div className="subSectionTableContainer">
            <text className="titleSubSectionTable bodyBold">Mission :</text>
            <text className="descriptionSubSectionTable body">
              {infoExp.mission}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
