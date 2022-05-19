
import React from 'react';
import { Row, Col, Container, 
    Form, FormControl, Button,
    Carousel,

} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Testimonials = () => {
    return (
        <div className="testimonials">
            <Row >
          
          <Col sm = {12} >
          <h2>Testimonials</h2>
            <Carousel variant="dark">
            
              <Carousel.Item className="carousel-item">
                
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                    .
                  </p>
                  <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                  
                  <h5>Derek</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                   .
                  </p>
                  <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                  <h5>Alberta</h5>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                
                <Carousel.Caption>
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod temporincididunt ut labore et dolore magna
                    .
                  </p>
                  <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                  <h5>Racheal</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>


        </div>
    );
}

export default Testimonials;
