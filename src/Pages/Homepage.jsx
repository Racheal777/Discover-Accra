import React from "react";
import { Link } from "react-router-dom";



const Homepage = () => {
  return (
    <div className="md:container md:mx-auto bg-image">
      <div className="bg-text">
        
        <div className="bg-btn">
        <h1 className="text-9xl  text-center">Accra</h1>
        <button><a href="/home"> Explore</a></button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
