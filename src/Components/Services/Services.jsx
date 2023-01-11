import React from 'react';
import'./Services.css';
import humble from '../../img/humble.png';
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import Card from '../Card/Card';
import Resume from './121CR0114_suraj_1.pdf';

const Services = () => {
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="education">
            <span>My </span>
            <span>Skills</span>
            <span>I am profound in C, C++, Python, HTML, CSS and JavaScript.
                <br /> Currently trying my hands on frameworks namely React.js, node.js, express.js.</span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            {/* first */}
            <div style={{left: '21rem'}}>
                <Card 
                    emoji = {heartemoji}
                    heading = {'Programming Language'}
                    detail = {"C, C++, Python, Html, Css, JavaScript"}
                />
            </div>
            {/*  second */}
            <div style={{top: '12rem', left: '-7rem'}}>
                <Card 
                    emoji = {glasses}
                    heading = {'Libraries/Framworks'}
                    detail = {"React.js, Node.js, Express.js"}
                />
            </div>
            {/*  third */}
            <div style={{top: '21rem', left: '12rem'}}>
                <Card 
                    emoji = {humble}
                    heading = {"Other's"}
                    detail = {"Data Structure & Algorithm"}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'var(--purple'}}></div>
        </div>
    </div>

  )
}

export default Services