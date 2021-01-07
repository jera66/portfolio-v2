import React from 'react';
import author from '../image/me.png'

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..."/>
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>
          Since I was a child, I was curious about anything that had to do with internet. I always wondered how people were able to make websites. That something that once was just a thought is now a reality. From a simple to-do list to a social media app. Almost anything can be done with technology, and as a software engineer, I am one of those that can contribute and can create these things that were once just a thought
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe
