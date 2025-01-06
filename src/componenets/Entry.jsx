import './Entry.css';

function Entry() {
    return (
        <div className="entry-div">
            <div className="entry-image-container">
                <img 
                    className="entry-image" 
                    src="/src/assets/fugi.png" 
                    alt="Mt. Fugi"
                />
            </div>
            <div className="entry-content">
                <img className="marker" src="/src/assets/marker.png" alt="marker" />
                <span className="entry-country">Japan</span>
                <a className="google-maps" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>
                <h2 className="entry-location">Mount Fuji</h2>
                <p className="entry-date">12 Jan, 2023 - 24 Jan, 2023</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    );
}

export default Entry;