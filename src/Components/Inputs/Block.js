import {useEffect, useState} from "react";
import './style.css'

export const Block = ({value, letter, setTrueAnswer, setWrong, wrong, secretWord}) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (!isChecked && letter === value) {
            setIsChecked(true);
            setTrueAnswer(prev => prev + 1);
        } else if (!isChecked && letter !== value && !secretWord.split('').includes(letter)) {
            let word = wrong;
            word += ' ' + letter;
            setWrong(word);
        }
    }, [letter])
    return (
        <div className='block'>
        <p>{isChecked && value}</p>
    </div>
    )
}