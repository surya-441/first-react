import trollFace from '../assets/troll-face.png';
import './MemeGeneratorNav.css';
import NavLinks from './NavLinks';

function MemeGeneratorNav() {
    return (
        <header className="meme-generator-header">
            <img src={trollFace} />
            <h1>Meme Generator</h1>
            <NavLinks />
        </header>
    );
}

export default MemeGeneratorNav;