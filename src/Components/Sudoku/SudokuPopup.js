import {useEffect} from "react";
import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {useDispatch, useSelector} from "react-redux";
import {REWARD} from "Constants/sudoku";

 export const SudokuPopup = () =>{
     const infoGame = useSelector(state => state.status.infoGame)
     const dispatch = useDispatch();
     useEffect(() =>{
         const data = JSON.parse(infoGame);
         data.push({
             secretWord: 'Sudoku',
             status: true,
             time: new Date(),
         });
         dispatch({type: 'ADD_LIST', payload: JSON.stringify(data)});
         dispatch({type: 'WIN_MONEY', payload: REWARD});
     },[])
    const handleReset = () => {
        window.location.reload();
    }
    return(<Popup open modal disabled position="right center">
        <div className='popup'>
            <h1>You win</h1>
            <button onClick={handleReset}>Reset game</button>
            <Link to='/status'>Status</Link>
            <Link to='/shop'>Shop</Link>
        </div>
    </Popup>)
}