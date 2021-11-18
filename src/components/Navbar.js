import { Link } from "react-router-dom";
import "./style.css";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-wrapper">
                <div className="logo">
                </div>
                <div className="list-wrapper">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="./components/About">About</Link></li>
                        <li><Link to="./components/Portfolio">Portfolio</Link></li>
                        <li><Link to="./components/Skills">Skills</Link></li>
                        <li><Link to="./components/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
