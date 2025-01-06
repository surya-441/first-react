import TravelJournalNav from "../componenets/TravelJournalNav";
import TravelJournalMain from "../componenets/TravelJournalMain";
import './TravelJournal.css';

function TravelJournal() {
    return (
        <div className="travel-journal">
            <TravelJournalNav />
            <TravelJournalMain />
        </div>
    );
}

export default TravelJournal;