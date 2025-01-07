import './Entry.css';
import marker from '../assets/marker.png';

function Entry({img, title, country, googleMapsLink, dates, text}) {
    return (
        <div className="entry-div">
            <div className="entry-image-container">
                <img 
                    className="entry-image" 
                    src={img.src}
                    alt={img.alt}
                />
            </div>
            <div className="entry-content">
                <img className="marker" src={marker} alt="marker" />
                <span className="entry-country">{country}</span>
                <a className="google-maps" href={googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-location">{title}</h2>
                <p className="entry-date">{dates}</p>
                <p className="entry-text">{text}</p>
            </div>
        </div>
    );
}

export default Entry;