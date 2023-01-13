import React from 'react';
// import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';
import skb1 from '../../img/skb1.png';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <img src={skb1} className='logo' alt="" />
            {/* <div className="n-name">Suraj</div> */}
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass= "activeClass" >
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}  >
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true}  >
                        <li>Achievements</li>
                    </Link>
                    <Link spy={true} to='Education' smooth={true}  >
                    <li>Education</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true}  >
                        <li>Portfolio</li>
                    </Link>
                    
                </ul>
            </div>
            <Link spy={true} to='Contact' smooth={true}  >
                <button className="button n-button">Contact</button>       
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar