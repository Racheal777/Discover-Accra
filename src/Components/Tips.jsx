import React from 'react'

export default function Tips() {
  return (
    <div>
        <section className='tips-main'>
            <div className='top-text'>
                <h2>SOME <strong>ACCRA</strong> TIPS FOR TRAVELLERS</h2>
                <p>Welcome to Accra</p>
            </div>

            <section className='grid grid-cols-1 md:grid-cols-2  tips'>
                <div className='imgg'>
                    <img src="../images/car1.jpg" alt="pic" srcset="" />
                </div>

                <div>
                    <h2>Accra nice places</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Perspiciatis officiis libero ratione unde. Illum impedit
                          saepe asperiores, commodi autem incidunt nesciunt officia!
                           Porro illo necessitatibus esse blanditiis, repudiandae itaque repellendus!</p>

                    <h2>Do not forget</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Perspiciatis officiis libero ratione unde. Illum impedit
                          aque repellendus!</p>

                    <div className='flex md:flex-1'>
                        <div className='iconz'>
                        <i class="fa-solid fa-camera"></i>
                        <p>Camera</p>
                        </div>

                        <div className='iconz'>
                        <i class="fa-solid fa-mobile-button"></i>
                        <p>Mobile</p>
                        </div>

                        <div className='iconz'>
                        <i class="fa-solid fa-credit-card"></i>
                        <p>Credit Card</p>
                        </div>

                        <div className='iconz'>
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        <p>Bag</p>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    </div>
  )
}
