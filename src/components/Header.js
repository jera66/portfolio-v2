import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>What am I?</h1>
        <Typed 
          className="typed-text"
          strings={["A Software Engineer", "Also known as" ,"A front-end developer", "A back-end developer", "Full stack developer", "or!", '"a coder"', " ", " "]}
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
