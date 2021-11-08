import './Nav.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Stars from '../AverageStars/AverageStars'

export function Nav() {
    return (
  <nav className="Nav">
        
      <NavLink to={'/Home'}>
        <button className="home"> Home </button>
      </NavLink>
      <Stars/>
      <SearchBar/>
  </nav>
    );
  };
export default Nav;