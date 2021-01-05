import React from 'react'
import DevIcon from "devicon-react-svg";

const Services = () => {
  return (
    <div className="services">
      <h1 className="py-5">Some of the technologies I use</h1>
        <div className="container">
          <div className="row">

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="react"/></div>
                <h3>React</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="ruby"/></div>
                <h3>Ruby</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="javascript"/></div>
                <h3>JavaScript</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="css3"/></div>
                <h3>CSS3</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="html5"/></div>
                <h3>HTML</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="mongodb"/></div>
                <h3>Mongodb</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon icon="bootstrap"/></div>
                <h3>Bootstrap</h3>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="box">
                <div className="circle"><DevIcon className="icon" icon="streamline"/></div>
                <h3>SQL</h3>
              </div>
            </div>


          </div>
        </div>
            <h5 className="moreP">and more...</h5>
    </div>
  )
}

export default Services
