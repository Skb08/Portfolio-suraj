import React from 'react';
import './Experience.css'; 


const Experience=() => {
  return (
    <div className="experience" id='Experience'>
      <div className="blur s-blur3" style={{background: '#cadbe3'}}></div>
      <div className="title">
        <span>My</span><br />
        <span>Achivements</span>
      </div>
      <br />
        <div className="achievement" >
          <div className="circle">8+</div>
          <span >Projects</span>
          <span> Using HTML, CSS, JS</span>
        </div>
        <div className="achievement" >
          <div className="circle" >24 Rank</div>
          <span>In April Long Two 2022 Div. 4</span>
          <span> At Codechef</span>
        </div>
        <div className="blur s-blur2" style={{background: '#d6adc9'}}></div>
        <div className="achievement">
          <div className="circle">3 Star</div>
          <span></span>
          <span> At Codechef</span>
        </div>
    </div>
  )
}

export default Experience