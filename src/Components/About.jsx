import React from 'react'

export default function About() {
  return (
    <div>
        <section className='grid grid-cols-1 md:grid-cols-3 about '>
            
            <div className='about-text'>
            <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Illum perferendis nostrum unde est impedit
                     Illum perferendis nostrum unde est impedit
                      </p>
                      <img src="../images/car1.jpg" alt="picture" srcset="" />
            </div>
            <div>
                <div className='cardz'>
                <h3>Hotels</h3>
                <i class="fa-solid fa-hotel"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>

                <div className='cardz'>
                <h3>Restaurants</h3>
                <i class="fa-solid fa-pot-food"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>
            </div>

            <div>
                <div className='cardz'>
                <h3>Adventure sites</h3>
                <i class="fa-solid fa-campground"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>

                <div className='cardz'>
                <h3>Beach</h3>
                <i class="fa-solid fa-umbrella-beach"></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
                Illum perferendis nostrum unde est impedit.</p>
                </div>
            </div>
        </section>
    </div>
  )
}
