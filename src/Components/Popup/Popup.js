import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";

export const Popups = ({children, secretWord}) => {

    const trueAnswer = useSelector(state => state.trueAnswer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (trueAnswer === secretWord.length) {
            const winData = JSON.parse(localStorage.getItem('infoGame'));
            winData.push({
                secretWord,
                status: true,
                time: new Date()
            })
            dispatch({type: 'ADD_LIST', payload: winData})
            localStorage.setItem('infoGame', JSON.stringify(winData));
        } else {
            const loseData = JSON.parse(localStorage.getItem('infoGame'));
            loseData.push({
                secretWord,
                status: false,
                time: new Date()
            })
            dispatch({type: 'ADD_LIST', payload: loseData})
            localStorage.setItem('infoGame', JSON.stringify(loseData));
        }
    })

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