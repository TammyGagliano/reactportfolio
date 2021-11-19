import React from "react";
import "./style.css"
import { Col, Row } from "react-bootstrap";


const Portfolio = () => {
    return (
        <div className="container">
            <h2>Portfolio</h2>
        <div className="portfolio">
            <div className="portfolioImg">
            <Row>
            <Col sm={12} md={6}>
            <h4>Weather Dashboard App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/weatherscreenshot.png`} alt=""/>
            <p>Get weather and 5 day forecast. </p>
            <h4>Fitness Tracker App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/fitnessscreenshot.png`} alt=""/>
            <p>View, create, and track daily workouts.</p>
            <p></p>
            </Col>
            <Col sm={12} md={6}>
            <h4>Password Generator App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/passwordGenScreenshot.png`} alt=""/>
            <p>Generate a random password.</p>
            <h4>Budget Tracker App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/budgetscreenshot.png`} alt=""/>
            <p>Fund and subtract expenses. </p>
            </Col>
            </Row>
            </div>
        </div>
        </div>
    );
};

export default Portfolio;
