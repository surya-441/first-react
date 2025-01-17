import TenziesDie from './TenziesDie';
import './TenziesMain.css';

function TenziesMain() {
    return (
        <main className="tenzies-main">
            <div className="dice-container">
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
                <TenziesDie value={0} />
            </div>
        </main>
    );
}

export default TenziesMain;