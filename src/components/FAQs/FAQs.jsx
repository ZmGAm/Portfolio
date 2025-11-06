import React from 'react'
import FAQs1 from './FAQs1'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Prime from '../models/Prime'
import Lottie from "lottie-react";
import Meta from "../../Assets/Meta.json";
import Typewriter from "typewriter-effect";
const FAQs = () => {
  return (
    <Container fluid className='about-section'>
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
              <Col md={7} style={{ justifyContent: "left"}}>
            <Lottie
              animationData={Meta}
              loop={true}
              autoplay={true}
              style={{height:'10vh',width:'10vw',margin:'auto'}}
            />
            </Col>
            <Col md={7} style={{ justifyContent: "center"}}>
             <div style={{ paddding: 50,height:'20vh', textAlign: "left" }}>

              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                i'm
                <strong className="purple"> your </strong>
              </h1>
              <Typewriter
                options={{
                  strings: [
                    "Samart AI assistant",
                    "Conversational  Chatbot",
                    "AI-powered Knowledge Base Trained",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>
            </Col>
          
           
           

            <FAQs1 />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
            <Prime />
          </Col>
        </Row>

      </Container>

    </Container>
  )
}

export default FAQs