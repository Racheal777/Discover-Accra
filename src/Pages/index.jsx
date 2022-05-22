import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import About from '../Components/About';
import Tips from '../Components/Tips';
import OwlCarousels from '../Components/owlCarousel';
import TopPlaces from '../Components/top-places';
import Testimonials from '../Components/Testimonials';
import VideoPage from '../Components/videoPage';

export default function Index() {
  return (
    <div >
       <Navbarr/>
      <main className='md: md:mx-auto'>

        <header>
            
            <div className='header-text w-full md:w-2/4'>
              <h1>TIME TO REWIND AND TAKE A BREAK</h1>
              <h3>Discover The City</h3>
              <button><Link to = "/">Plan With Us</Link></button>
            </div>
        </header>

        <section>
          <About/>
        </section>

        <section>
          <OwlCarousels/>
        </section>

        <section>
          <Tips/>
        </section>

        <section>
          <TopPlaces/>
        </section>

        <section>
          <VideoPage/>
        </section>

        
        <section>
          <Testimonials/>
        </section>


        <footer>
            <Footer/>
        </footer>
        </main>
    </div>
  )
}
