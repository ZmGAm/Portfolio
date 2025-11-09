import React from 'react'
import FAQs1 from './FAQs1'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Prime from '../models/Prime'
import Lottie from "lottie-react";
// import Meta from "../../Assets/Meta.json";
import Chatgpt from "../../Assets/Chatgpt.json";
import Typing from './Typing';
import { motion } from 'framer-motion';
const FAQs = () => {
  return (

    <Container
      fluid className="about-section"
    >
      <Particle />
      <Row
        style={{ justifyContent: "center", padding: "10px" }}
      >
        <Col
          md={6}
          style={{
            height: "150vh",
            juystifyContent: 'center',
          }}
          className="about-img"
        >

          <Prime />
        </Col>
        <Col
          md={5}
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "50px",

          }}
        >
          <Row style={{ justifyContent: "left", paddingBottom: "180px" }}>

            <Col md={3} style={{ justifyContent: "left" }}>
              <Lottie
                animationData={Chatgpt}
                loop={true}
                autoplay={true}
                style={{ height: '10vh', width: '10vw', margin: 'auto' }}
              />
            </Col>
            <Col md={3} style={{ justifyContent: "center" }}>
        

              <div style={{ paddding: 50, height: '20vh', textAlign: "left" }}>
 
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                  I'M
                  <strong className="purple"> Your </strong>
                </h1>
                <Typing />


              </div>
            </Col>
          </Row>


          <FAQs1 />
        </Col>

      </Row>

    </Container>

  )
}

export default FAQs