import React from "react";
import ReactFactsNav from "../componenets/ReactFactsNav";
import ReactFactsMain from "../componenets/ReactFactsMain";
import './ReactFacts.css';

function ReactFacts() {
    return (
        <div className="react-facts">
            <ReactFactsNav />
            <ReactFactsMain />
        </div>
    );
}

export default ReactFacts;