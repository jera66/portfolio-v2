import React from "react";
// --------------FONT AWESOME IMPORTS --------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import {
  PopupboxManager,
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
          <div>
            <b>{a.desc}</b>{" "}
            <hr/>
          <img
            className="portfolio-image-popupbox"
            src={a.name}
            alt={a.desc}
          />
          </div>
          <h5 className="summary-popup">{a.summary}</h5>
          <h5 className="summary-popup">{a.summary2}</h5>
          <p className="hyper-link" onClick={() => window.open(a.link)}>
            <p className="link-popup">Click here to go to site</p> 
          </p>
        </>
      );
      PopupboxManager.open({ content });
    };

    return (
        <div key={idx} className="portfolio-image-box" onClick={openPopupbox}>
          <img className="portfolio-image" src={a.name} alt={a.desc} />
          <div className="overflow"></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
    );
  });

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        <p className="text-center">This is my github page <a href="https://github.com/Juan321654" target="_blank">https://github.com/Juan321654</a></p>
        <div className="image-box-wrapper row justify-content-center">
        {mappedProjects}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
