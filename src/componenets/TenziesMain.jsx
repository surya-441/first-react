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
    const [diceArray, setDiceArray] = useState(generateAllNewDice());
    const tenziesDieArr = diceArray.map((die) => <TenziesDie key={die.id} value={die.value} />)
    return (
        <main className="tenzies-main">
            <div className="dice-container">
                {...tenziesDieArr}
           </div>
           <button className="roll-dice" onClick={()=>setDiceArray(generateAllNewDice())}>Roll</button>
        </main>
    );
}

export default TenziesMain;