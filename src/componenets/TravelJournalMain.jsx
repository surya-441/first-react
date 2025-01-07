import Entry from "./Entry";
import './TravelJournalMain.css';
import travelJournalData from '../travelJournalData';
function TravelJournalMain() {
    const entries = travelJournalData.map((entry) => {
        return <Entry 
            key={entry.id}
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
        />
    })
    console.log(entries)
    return (
        <main className="travel-journal-main">
            {entries}
        </main>
    );
}

export default TravelJournalMain;