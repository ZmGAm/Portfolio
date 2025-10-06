import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Zohaib Muneer </span>
            from <span className="purple"> Lahore, Pakistan.</span>
            <br />
            A detail-driven and problem-solving BSCS graduate with solid experience in programming and full-stack development, and training AI models.   
            <br />
            I excel at tackling intricate issues and developing innovative technology solutions that have a tangible impact on the real world.
            <br />
           
            I am ready to embark on new challenges and assist organizations to meet their objectives.Located in Lahore, Pakistan, I'm actively looking to initiate my career in tech and work with innovative professionals.
            <br/>
             Apart from coding, some other activities that I love to do!
            
            <br />  
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> joind different scotties 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Zohaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
