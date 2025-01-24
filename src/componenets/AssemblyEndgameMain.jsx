import './AssemblyEndgameMain.css';
import { languages } from '../languages';
import { nanoid } from 'nanoid';
import { clsx } from 'clsx';
import { useState } from 'react';
import { getRandomWord } from '../util.js';
import AssemblyEndgameStatus from './AssemblyEndgameStatus.jsx';

function AssemblyEndgameMain() {
    const [ currentWord, setCurrentWord ] = useState(() => getRandomWord());
    const [ guessedLetters, setGuessedLetters ] = useState([]);

    const wrongGuessCount = guessedLetters.reduce((acc, ch)=> acc += currentWord.includes(ch) ? 0 : 1, 0)
    const isGameWon = currentWord.split("").every(ch => guessedLetters.includes(ch))
    const isGameLost = wrongGuessCount >=  languages.length - 1
    const isGameOver = isGameLost || isGameWon;

    const alphabet = "abcdefghijklmnopqrstuvwxyz";


    function addGuess(ch) {
        setGuessedLetters((prevGuesses) => prevGuesses.includes(ch) ?
                                            prevGuesses :
                                            [...prevGuesses, ch])
    }
    
    function handleNewGame() {
        setCurrentWord(getRandomWord())
        setGuessedLetters([])
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
        <span key={nanoid()} className={isGameLost && !guessedLetters.includes(ch) ? "missed-char" : ""}>
            {guessedLetters.includes(ch) || isGameLost ? ch.toUpperCase() : ""}
        </span>
    )
    const alphabetArray = alphabet.split("").map((ch) =>
        <button key={nanoid()}
            onClick={()=>addGuess(ch)}
            className={clsx('keyboard-button', guessedLetters.includes(ch) ? (currentWord.includes(ch) ? "right" : "wrong") : "")}
            disabled={isGameOver}
        >
            {ch.toUpperCase()}
        </button>
    )

    return (
        <main className='assembly-endgame-main'>
            <AssemblyEndgameStatus isGameLost={isGameLost} isGameWon={isGameWon} language={!isGameOver && guessedLetters.length && !currentWord.includes(guessedLetters[guessedLetters.length - 1]) ? languages[wrongGuessCount - 1].name : null} />
            <section className='language-chips'>
                {languageElements}
            </section>
            <section className='current-word'>
                {currentWordArray}
            </section>
            <section className={clsx('keyboard', {disabled: isGameOver})}>
                {alphabetArray}
            </section>
            {isGameOver && <button className='new-game-button' onClick={handleNewGame}>New Game</button>}
        </main>
    );
}

export default AssemblyEndgameMain;