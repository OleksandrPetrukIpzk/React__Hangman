import {Block} from "Components/Hangman/Inputs/Block";
import './style.css'

export const Inputs = ({secretWord, letter}) => {
    return (<div className='blocks'>
        {secretWord.split('').map(item =>
            <Block value={item} letter={letter} secretWord={secretWord}/>
        )}
    </div>)
}