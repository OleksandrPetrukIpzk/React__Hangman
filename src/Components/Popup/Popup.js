import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Popups = ({children, secretWord}) => {

    const trueAnswer = useSelector(state => state.trueAnswer);
    const infoGame = useSelector(state => state.infoGame)
    const dispatch = useDispatch();
    useEffect(() => {
        const isWin = trueAnswer === secretWord.length
        const data = JSON.parse(infoGame);
        data.push({
            secretWord,
            status: isWin,
            time: new Date()
        });
        dispatch({type: 'ADD_LIST', payload: JSON.stringify(data)});
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