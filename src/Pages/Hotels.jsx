import React from "react";
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
import Navbarr from "../components/navbar";
import { HotelData } from "../data/hotels";

export default function Hotels() {
  let hotels = HotelData();
  return (
    <div>
      <Navbarr />
      <Container fluid>
        <Row className="hotels">
          <Col>
            <div>
              <h2>HOTELS</h2>
            </div>
          </Col>
        </Row>

        <Row className="all-locations">
          <h1>Discover the best Hotels in the city</h1>

          {hotels.map((hotel) => (
            <Col xs={12} md={4} key={hotel.id}>
              <div className="locations" >
                <Link to={`/hotel/${hotel.id}`} >
                  <img src={hotel.image}></img>
                  <h2>{hotel.HotelName}</h2>
                  <p>{hotel.Location}</p>
                  <div className='icons'>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  </div>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
