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
            <li>
                <Link to="/chefclaude">Chef Claude</Link>
            </li>
            <li>
                <Link to="/memegenerator">Meme Generator</Link>
            </li>
            <li>
                <Link to="/tenzies">Tenzies</Link>
            </li>
            <li>
                <Link to="/assembly-endgame">Assembly Endgame</Link>
            </li>
        </ul>
    );
}

export default NavLinks;