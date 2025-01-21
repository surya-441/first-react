import './AssemblyEndgameMain.css';
import { languages } from '../languages';
import { nanoid } from 'nanoid';
import { useState } from 'react';
function AssemblyEndgameMain() {
    const [ currentWord, setCurrentWord ] = useState('react');
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
        </main>
    );
}

export default AssemblyEndgameMain;