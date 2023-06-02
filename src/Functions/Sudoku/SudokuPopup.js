import {Link} from "react-router-dom";
import Popup from "reactjs-popup";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {REWARD} from "Constants/sudoku";

 export const SudokuPopup = () =>{
     const dispatch = useDispatch();
     useEffect(() =>{

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