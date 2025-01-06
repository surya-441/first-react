import TravelJournalNav from "../componenets/TravelJournalNav";
import Entry from "../componenets/Entry";
import './TravelJournal.css';

function TravelJournal() {
    return (
        <div className="travel-journal">
            <TravelJournalNav />
            <Entry />
        </div>
    );
}

export default TravelJournal;