import TenziesDie from './TenziesDie';
import './TenziesMain.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

function TenziesMain() {
    const [diceArray, setDiceArray] = useState(() => generateAllNewDice());
    const tenziesDieArr = diceArray.map((die) => <TenziesDie key={die.id} value={die.value} isHeld={die.isHeld} id={die.id} toggleHeld={toggleHeld} />)

    const gameWon = diceArray.every(die => die.isHeld) &&
        diceArray.every(die => die.value === diceArray[0].value);

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
        setDiceArray( gameWon ? generateAllNewDice() :
            (prevDiceArray) => 
            prevDiceArray.map((die) => (
                die.isHeld === true
                    ? die
                    : {...die, value: Math.ceil(Math.random() * 6)}
            ))
        )
    }
   return (
        <main className="tenzies-main">
            {gameWon && <Confetti />}
            <section>
                <h1 className="tenzies-title">Tenzies</h1>
                <p className="tenzies-instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </section>
            <div className="dice-container">
                {...tenziesDieArr}
           </div>
           <button className="roll-dice-button" onClick={rollDice}>
                {gameWon === true ? "New Game" : "Roll" }
            </button>
        </main>
    );
}

export default TenziesMain;