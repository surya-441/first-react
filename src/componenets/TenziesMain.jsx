import TenziesDie from './TenziesDie';
import './TenziesMain.css';
import { useState } from 'react';

function TenziesMain() {
    function generateAllNewDice() {
        return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
    }
    const [diceArray, setDiceArray] = useState(generateAllNewDice());
    const tenziesDieArr = diceArray.map((val) => <TenziesDie value={val} />)
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