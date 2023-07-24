
import { useState } from 'react';
import Logo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import {FaBars} from 'react-icons/fa';
import {MdOutlineClose} from 'react-icons/md';
import './navbar.css';

const NavBar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
   <nav>
    <div className="container nav__container">
        <Link className='logo' to='/'>
            <img src={Logo} alt="Nav logo" onClick={() => setIsNavShowing(false)}/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name, path}, index) => { 
              return (
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                  </li>
                )
              }
            )}   
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <FaBars />
          }
          
        </button>
    </div>
   </nav>
  )
}

export default NavBar