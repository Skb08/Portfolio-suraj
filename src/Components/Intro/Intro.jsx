import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import FlotingDiv from '../FlotingDiv/FlotingDiv';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import person from '../../img/person1.png';
import codechef from '../../img/codechef.png';
import codeforce from '../../img/codeforce.png';


const Intro = () => {   

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hi! I AM</span>
                <span>Suraj Kumar Behera</span>
                <span>A second year undergrad from the Ceramic Engineering Department of NIT, Rourkela.
                    <br/>I am enthusiastic for competitive programming and web development.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="https://github.com/Skb08"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/suraj-kumar-behera-b3883222b"><img src={LinkedIn} alt="" /></a>
                <a href="https://codeforces.com/profile/suraj110" className='cc'><img src={codeforce} alt="" /></a>   
                <a href="https://www.codechef.com/users/suraj110" className='cc'><img src={codechef} alt="" /></a>   
            </div>
        </div>
        <div className="i-right">

            <img src={glassesimoji} className="per1" alt="" />
            <img src={person} className="per" alt="" />
            <div style={{top:'-4%',left:'68%'}} className='floting-div'>
                <FlotingDiv image={Crown} text1={"Web"} text2={"Developer"}/>
            </div>
            <div style={{top:'76%', left:'0%'}} className='floting-div'>
                <FlotingDiv image={thumbup} text1={"Competitive"} text2={"Programmer"}/>
            </div>
            {/* blur divs */}
            <div className='blur' styl={{background: "rgb(238 210 255"}}></div>
            <div className='blur' style={{
                background:'rgb(173 181 216)',
                top:'20rem',
                width:'24rem',
                height:'11rem',
                left:'-7rem',
            }}></div>

        </div>
    </div>
  )
}

export default Intro