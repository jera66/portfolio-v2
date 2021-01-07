import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>What am I?</h1>
        <Typed 
          className="typed-text"
          strings={[" ", "A Software Engineer", "Also known as an" ,"Front-end developer", "Back-end developer", "Full stack developer", "Or!", '"a coder"', " ", " "]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">Contact me</a>
      </div>
    </div>
  )
}

export default Header
