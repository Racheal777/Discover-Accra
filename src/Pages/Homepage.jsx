import React from "react";
import { Link } from "react-router-dom";
import Navbarr from "../Components/Navbar";

const Homepage = () => {
  return (
    <div className="md: bg-image">
      <section className=" md: bg-text">
        <div className="pic">
          <Navbarr />

          <div className="bg-text2">
            <h3>EXPLORE </h3>
          </div>
          <h1 className="text-9xl">Accra</h1>

          {/* <img src="../../images/main2.png"></img> */}

          <div className="bg-btn">
            <button>
              <a href="/home"> Explore</a>
            </button>
          </div>

          <div className="foot">
            <h2>Top locations</h2>
            <div className="items flex flex-wrap md:flex-wrap">
              <div className="cards">
                <Link to="/">Hotels</Link>
              </div>

              <div className="cards">
                <Link to="/">Restaurants</Link>
              </div>

              <div className="cards">
                <Link to="/">Adventure sites</Link>
              </div>
            </div>
            <div>
              <button>
                {" "}
                <Link to="/">View More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
