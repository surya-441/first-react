import './Entry.css';

function Entry() {
    return (
        <div className="entry-div">
            <img className="entry-image" src="/src/assets/fugi.png" alt="Mt. Fugi" />
            <div className="entry-content">
                <text className="entry-location">JAPAN</text>
            </div>
        </div>
    );
}

export default Entry;