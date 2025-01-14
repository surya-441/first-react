import { Routes, Route } from "react-router-dom";
import ReactFacts from "./pages/ReactFacts";
import Home from "./pages/Home";
import TravelJournal from "./pages/TravelJournal";
import ChefClaude from "./pages/ChefClaude";
import MemeGenerator from "./pages/MemeGenerator";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reactfacts" element = {<ReactFacts />} />
                <Route path="/traveljournal" element = {<TravelJournal />} />
                <Route path="/chefclaude" element = {<ChefClaude /> } />
                <Route path="/memegenerator" element = {<MemeGenerator />} />
            </Routes>
        </>
    );
}

export default App