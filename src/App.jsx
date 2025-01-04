import { Routes, Route } from "react-router-dom";
import ReactFacts from "./pages/ReactFacts";
import Home from "./pages/Home";
import TravelJournal from "./pages/TravelJournal";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reactfacts" element = {<ReactFacts />} />
                <Route path="/traveljournal" element = {<TravelJournal />} />
            </Routes>
        </>
    );
}

export default App