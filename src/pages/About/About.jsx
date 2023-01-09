import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About MyLibrary</h2>
            <p className='fs-17'>Today a reader, tomorrow a leader</p>
            <p className='fs-17'>Explore Yourself!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
