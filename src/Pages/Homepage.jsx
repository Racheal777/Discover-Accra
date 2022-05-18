import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../Components/Navbar";



const Homepage = () => {
  return (
    <div className="md: bg-image">
      <section className=" md: bg-text">

     
        
        
      <div className="">

          <Navbarr/>
          
        {/* <h1 className="text md:text-base">EXPLORE THE CITY</h1> */}
        
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
      </section>
    </div>
  );
};

export default Homepage;
