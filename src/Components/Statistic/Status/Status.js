import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Game} from "Components/Statistic/Game/Game";
import {Link} from "react-router-dom";
import './style.css'

export const Status = () => {

    const infoGame = useSelector(state => state.infoGame);
    const [list, setList] = useState(infoGame);
    const dispatch = useDispatch();

    const handleSortLose = () => {
        const sorted = infoGame.filter(lose => !lose.status);
        setList(sorted);
    }
    const handleSortWin = () => {
        const sorted = infoGame.filter(lose => lose.status);
        setList(sorted);
    }
    const resetSort = () => {
        setList(infoGame);
    }
    return (<div>
        <div className='buttons'>
            <button onClick={handleSortLose}>Sort Lose</button>
            <button onClick={handleSortWin}>Sort Win</button>
            <button onClick={resetSort}>Reset</button>
        </div>
        <Link to='/' onClick={() => dispatch({type: 'BREAK_WRONG_LETTER'})}>Start Game</Link>
        {infoGame.length ? list?.sort((x, y) => Date.parse(y.time) - Date.parse(x.time)).map(game => <Game
            game={game}/>) : <h2>You dont have game</h2>}

    </div>)
}