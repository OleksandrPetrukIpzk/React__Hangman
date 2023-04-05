import {useEffect, useState} from "react";
import Popup from "reactjs-popup";
import {Inputs} from "Components/Inputs/Inputs";
import {Canvas} from "Components/Canvas/Canvas";
import 'reactjs-popup/dist/index.css';
import './style.css'

export const Main = () => {
    const secrets = ['Dima', 'Sasha', 'Kolyia', 'Pivo', 'Skelet', 'Vanila']
    const [letter, setLetter] = useState('');
    const [secretWord] = useState(secrets[Math.floor(Math.random() * secrets.length)]);
    const [trueAnswer, setTrueAnswer] = useState(0);
    const [wrong, setWrong] = useState('');
    const [isWrong, setIsWrong] = useState(false);


    useEffect(() => {
        if (Math.round(wrong.length / 2) === 6) {
            setIsWrong(true)
        } else {
            const onKeyPress = e => setLetter(e.key);
            document.addEventListener('keypress', onKeyPress);
            return () => {

                document.removeEventListener('keypress', onKeyPress);
            }
        }
    }, [letter])
    const handleReset = () => {
        window.location.reload();
    }
    return (
        <div>
            <h2>Hangman</h2>
            <p>Find the hidden word - Enter a letter</p>
            <div className='cartoon'>
                <Canvas wrong={Math.round(wrong.length / 2)}/>
                <div>
                    <h2>Wrong:</h2>
                    <p>{wrong}</p>
                </div>

            </div>
            {isWrong && <Popup open modal disabled position="right center">
                <div className='popup'>
                    <h2>You lose secret word has {secretWord} restart your game</h2>
                    <button onClick={handleReset}>Reset game</button>
                </div>
            </Popup>}
            {trueAnswer === secretWord.length && <Popup open modal disabled position="right center">
                <div className='popup'>
                    <h2>You win</h2>
                    <button onClick={handleReset}>Start new game</button>
                </div>
            </Popup>}
            <Inputs secretWord={secretWord} letter={letter} setTrueAnswer={setTrueAnswer}
                    setWrong={setWrong} wrong={wrong}/>
        </div>
    )


}