import React from "react";
import Nav from "../componenets/Nav";
import logo from '../assets/react-icon.png';
import './ReactFacts.css';

function ReactFacts() {
    return (
        <main className="react-facts">
            <Nav />
            <img src={logo} width="40px" alt="React Logo" />
            <h1>Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    );
}

export default ReactFacts;