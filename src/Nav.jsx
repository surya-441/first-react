import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/reactfacts">React Facts</Link>
                </li>
            </ul>
        </nav>
    );
}