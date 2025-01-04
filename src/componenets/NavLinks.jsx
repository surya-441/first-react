import { Link } from "react-router-dom";
function NavLinks() {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/reactfacts">React Facts</Link>
            </li>
            <li>
                <Link to="/traveljournal">Travel Journal</Link>
            </li>
        </ul>
    );
}

export default NavLinks;