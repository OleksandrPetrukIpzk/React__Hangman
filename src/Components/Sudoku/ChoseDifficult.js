import Popup from "reactjs-popup";
import {generateWhiteListIds} from "Functions/Sudoku/generateWhiteListIds";

export const ChoseDifficult = ({setDifficult, setArrWhiteIds}) =>{

    const choseLevel = (value) =>{
        setDifficult(value);
        setArrWhiteIds(generateWhiteListIds(value));
    }

    return(<Popup  open modal disabled position="right center">
        <div  className='popup'>
            <h3>Chose your difficult</h3>
            <button value={30} onClick={(e) => choseLevel(e.target.value)}>Easy</button>
            <button value={50} onClick={(e) => choseLevel(e.target.value)}>Medium</button>
            <button value={70} onClick={(e) => choseLevel(e.target.value)}>Hard</button>
        </div>
    </Popup>)
}