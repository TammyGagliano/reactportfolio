import "./style.css";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div className="contact"> 
    <div className="container">
    <Row>
    <Col sm={8}> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425710.5893909689!2d-87.13032516049101!3d33.53092193978224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888911df5885bfd3%3A0x25507409eaba54ce!2sBirmingham%2C%20AL!5e0!3m2!1sen!2sus!4v1637340330239!5m2!1sen!2sus" 
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}></iframe></Col>
    <Col sm={4}><h1>Contact me!</h1>
     
     <h3>Phone</h3>
     <p>555-555-5555</p>

     <h3>Email</h3>
     <p>tammy@grmail.com</p>

     <h3>Address</h3>
     <p>Birmingham, Alabama </p></Col>
  </Row>

      </div>
    </div>
  );
};

export default About;


