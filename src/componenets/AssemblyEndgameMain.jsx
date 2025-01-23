import './AssemblyEndgameMain.css';
import { languages } from '../languages';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';
import { useState } from 'react';
function AssemblyEndgameMain() {
    const [ currentWord, setCurrentWord ] = useState('react');
    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const wrongGuessCount = guessedLetters.reduce((acc, ch)=> acc += currentWord.includes(ch) ? 0 : 1, 0)
    const isGameOver = (wrongGuessCount >=  languages.length || currentWord.split("").every(ch => guessedLetters.includes(ch)));
    console.log(isGameOver)

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    function addGuess(ch) {
        setGuessedLetters((prevGuesses) => prevGuesses.includes(ch) ?
                                            prevGuesses :
                                            [...prevGuesses, ch])
    }

    const languageElements = languages.map((language, index) => 
        <span  key={nanoid()}
            className={index < wrongGuessCount ? 'lost' : ''}
            style={{backgroundColor: language.backgroundColor, color: language.color}}
        >
            {language.name}
        </span>
    )
    const currentWordArray = currentWord.split("").map((ch) => 
        <span key={nanoid()}>
            {guessedLetters.includes(ch) ? ch.toUpperCase() : ""}
        </span>
    )
    const alphabetArray = alphabet.split("").map((ch) =>
        <button key={nanoid()}
            onClick={()=>addGuess(ch)}
            className= {clsx('keyboard-button', guessedLetters.includes(ch) ? (currentWord.includes(ch) ? "right" : "wrong") : "")}
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
            {isGameOver && <button className='new-game-button'>New Game</button>}
        </main>
    );
}

export default AssemblyEndgameMain;