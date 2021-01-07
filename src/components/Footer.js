import React from 'react'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon

} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Bay Shore, NY</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-5555">+1(347)303-4211</a>
            </div>
            <div className="d-flex">
              <p>JuanCamachopers@hotmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="a" className="footer-nav">Home</a>
                <br />
                <a href="a" className="footer-nav">About me</a>
                <br />
                <a href="a" className="footer-nav">Techonologies</a>
                <br />
              </div>
              <div className="col">
                <a href="a" className="footer-nav">Experience</a>
                <br />
                <a href="a" className="footer-nav">Portfolio</a>
                <br />
                <a href="a" className="footer-nav">Contact me</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 colo-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton 
              url={"https://juancamachoportfolio.netlify.app/"}
              quote={"FullStack Developer"}
              hashtag="#React.js"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton 
              url={"https://juancamachoportfolio.netlify.app/"}
              quote={"FullStack Developer"}
              hashtag="#React.js"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <RedditShareButton 
              url={"https://juancamachoportfolio.netlify.app/"}
              quote={"FullStack Developer"}
              hashtag="#React.js"
              >
                <RedditIcon className="mx-3" size={36} />
              </RedditShareButton>
              <LinkedinShareButton 
              url={"https://juancamachoportfolio.netlify.app/"}
              quote={"FullStack Developer"}
              hashtag="#React.js"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
