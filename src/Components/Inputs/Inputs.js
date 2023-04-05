import {Block} from "Components/Inputs/Block";
import './style.css'

export const Inputs = ({secretWord, letter, setTrueAnswer, setWrong, wrong}) => {
    return (<div className='blocks'>
        {secretWord.split('').map(item =>
            <Block value={item} letter={letter} setTrueAnswer={setTrueAnswer} setWrong={setWrong} wrong={wrong}
                   secretWord={secretWord}/>
        )}
    </div>)
}