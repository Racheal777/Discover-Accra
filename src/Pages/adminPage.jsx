import React, { useState } from "react";
import Navbarr from "../Components/Navbar";
import "../css/admin.css";
import {
  Navbar,
  Tab,
  Tabs,
  Nav,
  NavDropdown,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import ForgotPassword from "../Auth/forgotPassword";

export default function AdminPage() {
  const [key, setKey] = useState("home");
  return (
    <div>
      <Navbarr />
      <main className="md: md:mx-auto">
        <header className="headerr">
          <div className="header-text w-full md:w-2/4">
            <h1>
              Hello <span>Racheal</span>
            </h1>
            <h3> Time to Discover The City</h3>
          </div>
        </header>

        <section>
        
          <Row className="tabs">
              <Col>

              <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 main-tab"
            >
              <Tab eventKey="home" title="Home">
                
              </Tab>
              <Tab eventKey="profile" title="Profile">
               
              </Tab>
              <Tab eventKey="contact" title="Contact">
                
              </Tab>
              <Tab eventKey="settings" title="settings">
                  
              </Tab>
              <Tab eventKey="bucketList" title="Bucket List"></Tab>
            </Tabs>
          
              </Col>
          </Row>
            
          <Outlet/>
        </section>
      </main>
    </div>
  );
}
