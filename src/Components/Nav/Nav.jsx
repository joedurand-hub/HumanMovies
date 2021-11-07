import './Nav.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filters/Filters'
import Star from '../AverageStars/AverageStars'

export function Nav() {
  return (
<nav className="Nav">
      
    <NavLink to={'/Home'}>
      <button className="home"> Home </button>
    </NavLink>
    <Star/>
     <SearchBar/>
     <Filter/>
</nav>
  );
};
export default Nav;