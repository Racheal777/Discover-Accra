import React from 'react'

export default function VideoPage() {
  return (
    <div>
        <section className='bg-video grid grid-cols-1 md:grid-cols-2'>
                    
        <video src='../images/video1.mp4' width="700" height="300" controls="controls" autoplay="true" />
            <div className='vid-text'>
                <h1><strong>BELONG ANYWHERE</strong></h1>
                <h3>Take a moment and breath</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Dolor voluptate asperiores odio optio? Amet enim 
                     .</p>
            </div>
        </section>
    </div>
  )
}
