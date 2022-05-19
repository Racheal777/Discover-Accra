import React from 'react'
import Navbarr from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import About from '../Components/About';

export default function Index() {
  return (
    <div className='md: md:mx-auto'>
      
        <header>
            <Navbarr/>
            <div className='header-text w-full md:w-2/4'>
              <h1>TIME TO REWIND AND TAKE A BREAK</h1>
              <h3>Discover The City</h3>
              <button><Link to = "/">Plan With Us</Link></button>
            </div>
        </header>

        <section>
          <About/>
        </section>

        <footer>
            <Footer/>
        </footer>

    </div>
  )
}
