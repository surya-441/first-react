import NavLinks from './NavLinks';
import './ReactFactsNav.css';
function ReactFactsNav() {
    return (
        <header className="header">
            <nav className = "nav">
                <img className="logo-img" src ="/src/assets/react-icon.png" alt="React Logo" />
                <span className="logo-span">ReactFacts</span>
                <NavLinks />
            </nav>
        </header>
    );
}

export default ReactFactsNav;