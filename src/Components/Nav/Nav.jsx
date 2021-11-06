import './Nav.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filters/Filters'

export function Nav() {
  return (
<nav className="Nav">
      
    <NavLink to={'/home'}>
      <button className="home"> Home </button>
    </NavLink>
     <SearchBar/>
     <Filter/>
</nav>
  );
};
export default Nav;