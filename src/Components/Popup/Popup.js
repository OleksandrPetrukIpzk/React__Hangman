import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Popup from "reactjs-popup";
import {Link} from "react-router-dom";
import {MINIMAL_WRONG_COUNT} from "Components/Constants/Constants";

export const Popups = ({children, secretWord}) => {
    const {color, background} = JSON.parse(useSelector(state => state.store.setStyle));
    const trueAnswer = useSelector(state => state.rules.trueAnswer);
    const infoGame = useSelector(state => state.statistics.infoGame);
    const repeatWord = useSelector(state => state.statistics.repeatWord);
    const listWords = JSON.parse(repeatWord);
    let reward = 0;
    const dispatch = useDispatch();

    useEffect(() => {
        const isWin = trueAnswer === secretWord.length;
        if (isWin) {
            if (listWords.includes(secretWord)) {
                reward = Math.ceil(secretWord.length / MINIMAL_WRONG_COUNT);
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
        <div className='popup' style={{color: color, background: background}}>
            {children}
            <button onClick={handleReset}>Reset game</button>
            <Link to='/status'>Status</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </Popup>)
}