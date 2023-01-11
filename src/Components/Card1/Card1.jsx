import React from 'react';
import './Card1.css';

const Card1=({emoji, heading1, heading2, heading3, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading1}</span>
        <span>{heading2}</span>
        <span>{heading3}</span>
        <span>{detail}</span>
        <button className="c-button ">LEARN MORE</button>
    </div>
  )
}

export default Card1