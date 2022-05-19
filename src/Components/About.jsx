import React from 'react'

export default function About() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-3 about '>
            
            <div className='about-text'>
            <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Illum perferendis nostrum unde est impedit
                     Illum perferendis nostrum unde est impedit
                      </p>
                      <img src="../images/car1.jpg" alt="picture" srcset="" />
            </div>
            <div>
                <div className='cardz'>
                <h2>Hotels</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>

                <div className='cardz'>
                <h2>Restaurants</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>
            </div>

            <div>
                <div className='cardz'>
                <h2>Adventure sites</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>

                <div className='cardz'>
                <h2>Beach</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>
            </div>
        </section>
    </div>
  )
}
