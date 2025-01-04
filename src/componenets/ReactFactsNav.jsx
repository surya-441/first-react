import NavLinks from './NavLinks';
import './ReactFactsNav.css';
function ReactFactsNav() {
    return (
        <header className="react-facts-nav-header">
            <nav className = "react-facts-nav">
                <img className="logo-img" src ="/src/assets/react-icon.png" alt="React Logo" />
                <span className="logo-span">ReactFacts</span>
                <NavLinks />
            </nav>
        </header>
    );
}

export default ReactFactsNav;