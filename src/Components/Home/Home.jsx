import React from 'react';
import Nav from '../Nav/Nav.jsx';
import Filter from '../Filters/Filters'
import Cards from '../Cards/Cards'
import './Home.css'

function Home() {
      return (
      <div className="home">
        <Nav/>
        <Filter/>
        <Cards/>
    </div>
      )
  };
  
  export default Home;