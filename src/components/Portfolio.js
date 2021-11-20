import React from "react";
import "./style.css"
import { Col, Row } from "react-bootstrap";


const Portfolio = () => {
    return (
        <div className="container">
            <h1>Portfolio</h1>
        <div className="portfolio">
            <div className="portfolioImg">
         

  <Row>
    <Col sm={6}><h4>Fitness Tracker App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/fitnessscreenshot.png`} alt=""/>
            <p><a href="https://tg-fitness-tracker.herokuapp.com/">View, create, and track daily workouts.</a></p></Col>
    <Col sm={6}><h4>Weather Dashboard App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/weatherscreenshot.png`} alt=""/>
            <p><a href="https://tammygagliano.github.io/weather-dashboard/">See the weather and 5 day forecast.</a></p></Col>
  </Row>
  <Row>
    <Col sm={6}><h4>Budget Tracker App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/budgetscreenshot.png`} alt=""/>
            <p><a href="https://tg-progressive-budget.herokuapp.com/">Fund and subtract expenses.</a></p></Col>
    <Col sm={6}><h4>Weather Dashboard App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/weatherscreenshot.png`} alt=""/>
            <p><a href="https://tammygagliano.github.io/weather-dashboard/">See the weather and 5 day forecast.</a></p></Col>
  </Row>

          
            </div>
        </div>
        </div>
    );
};

export default Portfolio;
