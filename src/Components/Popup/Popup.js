import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Popups = ({children, secretWord}) => {

    const trueAnswer = useSelector(state => state.trueAnswer);
    const infoGame = useSelector(state => state.infoGame);
    const repeatWord = useSelector(state => state.repeatWord);
    const listWords = JSON.parse(repeatWord);
    let reward = 0;
    const dispatch = useDispatch();

    useEffect(() => {
        const isWin = trueAnswer === secretWord.length;
        if (isWin) {
            if (listWords.includes(secretWord)) {
                reward = Math.ceil(secretWord.length / 2);
            } else {
                reward = secretWord.length;
                listWords.push(secretWord);
                dispatch({type: 'ADD_REPEAT_WORD', payload: JSON.stringify(listWords)})
            }
        }
        const data = JSON.parse(infoGame);
        data.push({
            secretWord,
            status: isWin,
            time: new Date(),
        });
        dispatch({type: 'ADD_LIST', payload: JSON.stringify(data)});
        dispatch({type: 'WIN_MONEY', payload: reward});
    }, []);

    const handleReset = () => {
        window.location.reload();
    }

    return (<Popup open modal disabled position="right center">
        <div className='popup'>
            {children}
            <button onClick={handleReset}>Reset game</button>
            <Link to='/status'>Status</Link>
        </div>
    </Popup>)
}