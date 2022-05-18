import React from 'react'
import Navbarr from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Index() {
  return (
    <div className='md: md:mx-auto'>
        <header>
            <Navbarr/>
        </header>

        <footer>
            <Footer/>
        </footer>

    </div>
  )
}
