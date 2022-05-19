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

export default function TopPlaces() {
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
    <div className="top-places">
      <Container fluid>
        <Row className="middle-about">
          <Col>
            <div>
              <h2>Accra <strong>Top</strong> Hotels</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus necessi c.
              </p>
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
                      Alisa Hotel
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel3.jpg"></img>
                      Kempinski Hotel
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel3.jpg"></img>
                      Marriot Hotel
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel4.jpg"></img>
                      Golden Tulip
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel3.jpg"></img>
                      Accra City Hotel
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="locations">
                    <Link to="">
                      <img className="img" src="../images/hotel4.jpg"></img>
                      Airport View Hotel
                    </Link>
                    <div className="icons">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                </Col>
              </OwlCarousel>
            </div>
          </Col>
        </Row>

        <hr></hr>

        <Row className="middle-about">
          <Col>
            <div>
              <h2>Accra <strong>Top</strong> Restaurants</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Accusamus necessitatibus .
              </p>
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
                <div className="locations">
                  <Link to="">
                    <img className="img" src="../images/res.jpg"></img>
                    Polo Club lounge
                  </Link>
                  <div className="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="locations">
                  <Link to="">
                    <img className="img" src="../images/res4.jpg"></img>
                    AM PM restaurant
                  </Link>
                  <div className="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="locations">
                  <Link to="">
                    <img className="img" src="../images/res3.jpg"></img>
                    Neem Grill Restaurant
                  </Link>
                  <div className="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="locations">
                  <Link to="">
                    <img className="img" src="../images/hotel4.jpg"></img>
                    Telande Garden Restaurant
                  </Link>
                  <div className="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="locations">
                  <Link to="">
                    <img className="img" src="../images/pic6.jpg"></img>
                    Sky bar restaurant
                  </Link>
                  <div className="icons">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
