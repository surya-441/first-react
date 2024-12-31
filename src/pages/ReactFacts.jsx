import React from "react";
import Nav from "../componenets/Nav";
import ReactFactsMain from "../componenets/ReactFactsMain";
import './ReactFacts.css';

function ReactFacts() {
    return (
        <div className="react-facts">
            <Nav />
            <ReactFactsMain />
        </div>
    );
}

export default ReactFacts;