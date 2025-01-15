import { useState, useEffect } from 'react';
import './MemeGeneratorMain.css';

function MemeGeneratorMain() {
    const [meme, setMeme] = useState({
        imageUrl: "http://i.imgflip.com/1bij.jpg",
        topText: "One does not simply",
        bottomText: "Walk into Mordor"
    });
    const [memeArray, setMemeArray] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(jsonData => setMemeArray(jsonData.data.memes))
    }, []);
    function handleChange(event) {
        const {value, name} = event.currentTarget;
        setMeme((prevMeme) => ({...prevMeme, [name]: value}))
    }
    function getRandomMeme() {
        const newMemeUrl = memeArray[Math.floor(Math.random() * memeArray.length)].url
        setMeme(prevMeme => ({...prevMeme, imageUrl: newMemeUrl}))
    }
    return (
        <main className="meme-generator-main">
            <div className="meme-generator-form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={getRandomMeme}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
    );
}

export default MemeGeneratorMain;