import React from "react";
// --------------FONT AWESOME IMPORTS --------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import {
  PopupboxManager,
  popupboxContainer,
  PopupboxContainer,
} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
import projectsInfo from "../projectsInfo/projectsInfo";

const Portfolio = () => {
  const popupboxConfig = {
    titleBar: {
      enable: false,
      text: "Google Maps Clone Project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };
  const mappedProjects = projectsInfo.map((a, idx) => {
    const openPopupbox = () => {
      const content = (
        <>
            <b>{a.desc}</b>{" "}
            <hr/>
          <img
            className="portfolio-image-popupbox"
            src={a.name}
            alt={a.desc}
          />
          <a className="hyper-link" onClick={() => window.open(a.link)}>
            Click here to go to site
          </a>
        </>
      );
      PopupboxManager.open({ content });
    };

    return (
      <div key={idx} className="image-box-wrapper row justify-content-center">
        <div className="portfolio-image-box" onClick={openPopupbox}>
          <img className="portfolio-image" src={a.name} alt={a.desc} />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
      </div>
    );
  });

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        {mappedProjects}
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
