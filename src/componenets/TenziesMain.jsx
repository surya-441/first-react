import TenziesDie from './TenziesDie';
import './TenziesMain.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';

function TenziesMain() {
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }));
    }
    function toggleHeld(id) {
        setDiceArray((prevDiceArray) => 
            prevDiceArray.map((die) => (
                die.id === id 
                    ? {...die, isHeld: !die.isHeld}
                    : die
            ))
        );
    }
    function rollDice() {
        setDiceArray((prevDiceArray) => 
            prevDiceArray.map((die) => (
                die.isHeld === true
                    ? die
                    : {...die, value: Math.ceil(Math.random() * 6)}
            ))
        )
    }
    const [diceArray, setDiceArray] = useState(generateAllNewDice());
    const tenziesDieArr = diceArray.map((die) => <TenziesDie key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} toggleHeld={toggleHeld} />)
    return (
        <main className="tenzies-main">
            <div className="dice-container">
                {...tenziesDieArr}
           </div>
           <button className="roll-dice-button" onClick={rollDice}>Roll</button>
        </main>
    );
}

export default TenziesMain;