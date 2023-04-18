import {useEffect, useState} from "react";
import {Inputs} from "Components/Inputs/Inputs";
import {Canvas} from "Components/Canvas/Canvas";
import {useSelector} from "react-redux";
import {Popups} from "Components/Popup/Popup";
import './style.css'
import 'reactjs-popup/dist/index.css';

export const Main = () => {
    const wrong = useSelector(state => state.wrong)
    const trueAnswer = useSelector(state => state.trueAnswer);
    const secrets = ['Dima', 'Sasha', 'Kolyia', 'Pivo', 'Skelet', 'Vanila']
    const [letter, setLetter] = useState('');
    const [secretWord] = useState(secrets[Math.floor(Math.random() * secrets.length)]);
    const [isWrong, setIsWrong] = useState(false);

    useEffect(() => {
        if (Math.round(wrong.length / 2) === 6) {
            setIsWrong(true);
        } else {
            const onKeyPress = e => setLetter(e.key);
            document.addEventListener('keypress', onKeyPress);
            return () => {

                document.removeEventListener('keypress', onKeyPress);
            }
        }
    }, [letter])

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
            {isWrong && <Popups secretWord={secretWord}>
                <h2>You lose secret word has {secretWord} restart your game</h2>
            </Popups>}
            {trueAnswer === secretWord.length && <Popups secretWord={secretWord}>
                <h2>You win</h2>
            </Popups>
            }
            <Inputs secretWord={secretWord} letter={letter}
            />
        </div>
    )


}