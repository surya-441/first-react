import './TenziesDie.css';

function TenziesDie({value, isHeld}) {
    return (
        <button style={isHeld ? {backgroundColor: "#59E391" }: {}}>{value}</button>
    );
}

export default TenziesDie;