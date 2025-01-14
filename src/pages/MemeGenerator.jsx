import './MemeGenerator.css';
import MemeGeneratorNav from '../componenets/MemeGeneratorNav.jsx';
import MemeGeneratorMain from '../componenets/MemeGeneratorMain.jsx';
function MemeGenerator() {
    return (
        <div className="meme-generator">
            <MemeGeneratorNav />
            <MemeGeneratorMain />
        </div>
    );
}

export default MemeGenerator;