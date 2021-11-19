import React from "react";
import "./style.css"

const Portfolio = () => {
    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolioImg">
            <h4>Weather Dashboard App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/weatherscreenshot.png`} alt=""/>
            <p>Weather app does something </p>
            <h4>Note Taker App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/notetakerscreenshot.png`} alt=""/>
            <h4>Password Generator App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/passwordGenScreenshot.png`} alt=""/>
            <h4>Weather Dashboard App</h4>
            <img src={`${process.env.PUBLIC_URL}/images/budgetscreenshot.png`} alt=""/>
            </div>
        </div>
    );
};

export default Portfolio;
