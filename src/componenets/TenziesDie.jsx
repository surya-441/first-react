import './TenziesDie.css';

function TenziesDie({value, isHeld, id, toggleHeld}) {
    return (
        <button 
            className='die-button'
            style={isHeld ? {backgroundColor: "#59E391" }: {}}
            onClick={()=>toggleHeld(id)}
        >
            {value}
        </button>
    );
}

export default TenziesDie;