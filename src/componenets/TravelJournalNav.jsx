import NavLinks from "./NavLinks";
import './TravelJournalNav.css';

function TravelJournalNav() {
    return (
        <header className='travel-journal-nav-header'>
            <nav className="travel-journal-nav">
                <div className="center-logo">
                    <img className="globe-img" src ="/src/assets/globe.png" alt="Globe Logo" />
                    <span className="globe-span">my travel journal.</span>
                </div>
                <NavLinks />
            </nav>
        </header>
    );
}

export default TravelJournalNav;