import React from "react";
// --------------IMAGES ---------------------------
import map from "../image/projectsicon/map.png";
import calc from "../image/projectsicon/calc.png";
import drumkit from "../image/projectsicon/drumkit.png";
import generativeArt from "../image/projectsicon/generative_art.png";
import gorjeo from "../image/projectsicon/gorjeo3.jpg";
import interactiveparticles from "../image/projectsicon/interactiveparticles.gif";
import rememberSeq from "../image/projectsicon/remember-seq.png";
import spartikus from "../image/projectsicon/spartikus.png";
import stooltracker from "../image/projectsicon/stooltracker.jpg";
import tindog from "../image/projectsicon/tindog.png";
import todos from "../image/projectsicon/todos.png";
import weatherteller from "../image/projectsicon/weatherteller.jpg";
// --------------FONT AWESOME IMPORTS --------------------
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// REACT POPUPBOX
import { PopupboxManager, popupboxContainer, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css'

// make a function that loops thru array of pic to display

const Portfolio = () => {
  const openPopupbox = () => {
    const content = (
      <>
    <img className="portfolio-image-popupbox" src={map} alt="google map clone project"/>
    <b>Go to Site</b> <a className="hyper-link" onClick={() => window.open("https://jcgooglemapsreplica.netlify.app/")}>hello</a>
    </>
    )
    PopupboxManager.open({content})
  }

  const popupboxConfig = {
    titleBar: {
      enable: true,
      text: "Google Maps Clone Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        {/* -  */}
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupbox}>
            <img
              className="portfolio-image"
              src={map}
              alt="google map clone project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={calc}
              alt="calculator project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={drumkit}
              alt="drumkit project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={generativeArt}
              alt="generative project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={gorjeo}
              alt="gorjeo project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={interactiveparticles}
              alt="interactiveparticles project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={rememberSeq}
              alt="rememberSeq project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={spartikus}
              alt="spartikus project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={stooltracker}
              alt="stooltracker project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={tindog}
              alt="tindog project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img className="portfolio-image" src={todos} alt="todos project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={weatherteller}
              alt="weatherteller project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
        {/* - */}
      </div>
      <PopupboxContainer {...popupboxConfig} />
    </div>
  );
};

export default Portfolio;
