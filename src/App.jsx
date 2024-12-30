import { Routes, Route } from "react-router-dom";
import ReactFacts from "./pages/ReactFacts";
import Home from "./pages/Home";
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reactfacts" element = {<ReactFacts />} />
            </Routes>
        </div>
    );
}

export default App