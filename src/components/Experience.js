import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>FEB-PRESENT 2021</h3>
              <p>started my first job as a Full stack developer at Totally Inview Inc. (bowery lightning)</p>
            </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>DEC-JAN 2020-2021</h3>
              <p>started side projects and finished Advanced CSS and Sass course (50 hours)</p>
            </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>NOV-DEC 2020</h3>
              <p>Finished taking Advanced Javascript course and React course (110 hours)</p>
            </div>
        </div>

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>OCT-NOV 2020</h3>
              <p>Finished my second bootcamp (100 hours) course at udemy with instructor Angela Yu</p>
            </div>
        </div>

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>AUG-OCT 2020</h3>
              <p>Finished my first fulltime coding bootcamp (600+ hours) at General Assembly, NY</p>
            </div>
        </div>
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
            <div className="timeline-content">
              <h3>2011 - 2014</h3>
              <p>Nassau College -Garden City, NY, 
56 credits towards associate in Digital technology degree.</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Experience
