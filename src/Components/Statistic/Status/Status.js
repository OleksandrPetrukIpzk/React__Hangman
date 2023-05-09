import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Game} from "Components/Statistic/Game/Game";
import {Link} from "react-router-dom";
import './style.css'

export const Status = () => {
    const setStyle = JSON.parse(useSelector(state => state.setStyle));
    const infoGame = useSelector(state => state.infoGame);
    const [list, setList] = useState(JSON.parse(infoGame));
    const dispatch = useDispatch();

    const handleSortLose = () => {
        const sorted = JSON.parse(infoGame).filter(lose => !lose.status);
        setList(sorted);
    }
    const handleSortWin = () => {
        const sorted = JSON.parse(infoGame).filter(lose => lose.status);
        setList(sorted);
    }
    const resetSort = () => {
        setList(JSON.parse(infoGame));
    }
    useEffect(()=>{
        document.body.style.background = setStyle.background;
        document.body.style.color = setStyle.color;
    },)
    return (<div>
        {infoGame.length &&
            <div className='buttons'>
                <button onClick={handleSortLose}>Sort Lose</button>
                <button onClick={handleSortWin}>Sort Win</button>
                <button onClick={resetSort}>Reset</button>
            </div>
        }
        <Link to='/' onClick={() => dispatch({type: 'BREAK_WRONG_LETTER'})}>Start Game</Link>
        {infoGame.length ? list?.sort((x, y) => Date.parse(y.time) - Date.parse(x.time)).map(game => <Game
            game={game}/>) : <h2>You dont have game</h2>}

    </div>)
}