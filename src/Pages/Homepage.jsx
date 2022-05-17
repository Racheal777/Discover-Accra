import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../Components/Navbar";



const Homepage = () => {
  return (
    <div className="md:container  bg-image  ">
      <div className="bg-text md:mx-auto">
          <Navbarr/>
        <div className="bg-btn">
            <h3>Discover beautiful </h3>
        <h1 className="text-9xl">Accra</h1>
        <button><a href="/home"> Explore</a></button>
        </div>

        <div className="foot">
            
            <h2>Top locations</h2>
            <div className="items flex flex-wrap md:flex-wrap">
            <Link to='/'>Hotels</Link>
            <Link to='/'>Restaurants</Link>
            <Link to='/'>Adventure sites</Link>
            <Link to='/'>Beaches</Link>
            <div>
            <button> <Link to='/'>View More</Link></button>
            </div>
            
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Homepage;
