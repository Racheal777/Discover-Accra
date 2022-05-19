import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Row,
  Col,
  Container,
  Form,
  FormControl,
  Button,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import React from "react";

export default function OwlCarousels() {
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <div>
      <Container fluid>
        <Row className="middle-about">
          <Col>
            <div>
              <h2>Top Locations</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div class="container-fluid">
              <OwlCarousel
                {...options}
                className="owl-theme"
                loop
                autoplay={true}
              >
                <Col>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel4.jpg"></img>
                      Hotels
                    </Link>
                  </div>
                </Col>

                <Col>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/res4.jpg"></img>
                      Restaurants
                    </Link>
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/camp.jpg"></img>
                      Adventure
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/beach5.jpg"></img>
                      Beaches
                    </Link>
                  </div>
                </Col>
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
