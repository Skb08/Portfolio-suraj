import React from 'react';
import'./Education.css';
import humble from '../../img/humble.png';
import heartemoji from '../../img/heartemoji.png';
import glasses from '../../img/glasses.png';
import Card from '../Card1/Card1';


const Education = () => {
  return (
    <div className="services1" id='Education'>
        <div className="title1">
            <span>My</span><br />
            <span>Education</span>
        </div>
        <br />
        <div className="cards">
            {/* first */}
            <div style={{top: '8rem',left: '-10rem' }}>
                <Card 
                    emoji = {heartemoji}
                    heading1 = {'2021-Present'}
                    heading2 = {'B.Tech, Ceramic Engg.'}
                    heading3 = {'NIT, Rourkela'}
                    detail = {"CGPA : 8.02/10"}
                />
            </div>
            {/*  second */}
            <div style={{top: '8rem',left: '12rem' }} >
                <Card 
                    emoji = {glasses}
                    heading1 = {'MAY 2020'}
                    heading2 = {'INTERMEDIATE'}
                    heading3 = {'JNV, Jharsuguda'}
                    detail = {"Percentage: 90.0%"}
                />
            </div>
            {/*  third */}
            <div style={{top: '8rem', left: '34rem'}}>
                <Card 
                    emoji = {humble}
                    heading1 = {'MAY 2018'}
                    heading2 = {'MATRICULATION'}
                    heading3 = {'JNV, Jharsuguda'}
                    detail = {"Percentage: 92.6%"}
                />
            </div>
            <div className="blur s-blur2" style={{background: 'rgb(209 120 181 / 46%)'}}></div>
            
            <div className="blur s-blur3" style={{background: '#cadbe3'}}></div>
        </div>
    </div>

  )
}

export default Education