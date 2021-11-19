import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
            <div className="person">
                <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="Tammy Gagliano"/>
            </div>
            <div className="title">
                <header>
                    <h1>Tammy Gagliano</h1>
                    <h3>Full Stack Web Developer</h3>
                </header>
                <Link to="about">
                    <button className="button">Learn More</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;