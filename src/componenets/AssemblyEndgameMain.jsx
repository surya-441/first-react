import './AssemblyEndgameMain.css';
import { languages } from '../languages';
import { nanoid } from 'nanoid';
import { useState } from 'react';
function AssemblyEndgameMain() {
    const [ currentWord, setCurrentWord ] = useState('react');
    const [ guessedLetters, setGuessedLetters ] = useState(() => new Set());
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    console.log(guessedLetters);

    function addGuess(ch) {
        if(guessedLetters.has(ch) !== true)
            setGuessedLetters((prevGuesses) => new Set(prevGuesses).add(ch))
    }

    const languageElements = languages.map((language) => 
        <span  key={nanoid()}
            style={{backgroundColor: language.backgroundColor, color: language.color}}
        >
            {language.name}
        </span>
    )
    const currentWordArray = currentWord.split("").map((ch) => 
        <span key={nanoid()}>
            {ch.toUpperCase()}
        </span>
    )
    const alphabetArray = alphabet.split("").map((ch) =>
        <button key={nanoid()}
            onClick={()=>addGuess(ch)}
        >
            {ch.toUpperCase()}
        </button>
    )

    return (
        <main className='assembly-endgame-main'>
            <section className='game-status'>
                <h2>You Win!</h2>
                <p>Well done! 🎉</p>
            </section>
            <section className='language-chips'>
                {languageElements}
            </section>
            <section className='current-word'>
                {currentWordArray}
            </section>
            <section className='keyboard'>
                {alphabetArray}
            </section>
            <button className='new-game-button'>New Game</button>
        </main>
    );
}

export default AssemblyEndgameMain;