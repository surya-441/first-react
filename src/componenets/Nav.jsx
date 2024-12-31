import { Link } from "react-router-dom";
import './Nav.css';
function Nav() {
    return (
        <header className="header">
            <nav className = "nav">
                <img className="logo-img" src ="/src/assets/react-icon.png" alt="React Logo" />
                <span className="logo-span">ReactFacts</span>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/reactfacts">React Facts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;