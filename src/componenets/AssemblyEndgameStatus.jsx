import { clsx } from 'clsx';
import './AssemblyEndgameStatus.css';
import { getFarewellText } from '../util.js';

function AssemblyEndgameStatus({isGameWon, isGameLost, language}) {
    let gameStatus;
    if(isGameWon) {
        gameStatus = <><h2>You Win!</h2><p>Well done! 🎉</p></>
    }
    else if(isGameLost) {
        gameStatus = <><h2>Game over!</h2><p>You lose! Better start learning Assembly 😭</p></> 
    }
    else if(language) {
        gameStatus = <h2>“{getFarewellText(language)}“</h2>
    }
    return (
        <section className={clsx('game-status', {won: isGameWon, lost: isGameLost, farewell: language})}>
            {gameStatus}
        </section>
    );
}

export default AssemblyEndgameStatus;