import './AssemblyEndgameMain.css';
import { languages } from '../languages';
import { nanoid } from 'nanoid';
function AssemblyEndgameMain() {
    const languageElements = languages.map((language) => 
        <span  key={nanoid()}
            style={{backgroundColor: language.backgroundColor, color: language.color}}
        >
            {language.name}
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
        </main>
    );
}

export default AssemblyEndgameMain;