import {useEffect, useState} from "react";
import './style.css'
import {useDispatch, useSelector} from "react-redux";

export const Block = ({value, letter, secretWord}) => {
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);
    const wrong = useSelector(state => state.wrong)
    useEffect(() => {
        if (!isChecked && letter === value) {
            setIsChecked(true);
            dispatch({type: 'ADD_TRUE_ANSWER'})
        } else if (!isChecked && letter !== value && !secretWord.split('').includes(letter)) {
            let word = wrong;
            word += ' ' + letter;
            dispatch({type: 'CHANGE_WRONG', payload: word})
        }
    }, [letter])
    return (
        <div className='block'>
            <p>{isChecked && value}</p>
        </div>
    )
}