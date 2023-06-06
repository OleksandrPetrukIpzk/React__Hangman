import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Table} from "Components/Sudoku/Table/Table";
import {Header} from "Components/Header/Header";
import {Buttons} from "Components/Sudoku/Buttons/Buttons";
import {validator} from "Functions/Sudoku/validator";
import {isWin} from "Functions/Sudoku/isWin";
import {SudokuPopup} from "Functions/Sudoku/SudokuPopup";
import {generateRandomId} from "Functions/Sudoku/generateRandomId";
import {START} from "Constants/sudoku";
import './style.css'
import {searchTroubles} from "Functions/Sudoku/searchTroubles";

export const Sudoku = () => {
    const [numbers, setNumbers] = useState(START)
    const [dangerId, setDangerId] = useState([]);
    const [isWinGame, setIsWinGame] = useState(false);
    useEffect(() => {

        setDangerId(searchTroubles(numbers));

        if (dangerId.length === 0) {
            if (isWin(numbers)) {
                setIsWinGame(true);
            }
        }
    }, [numbers])


    return (<div>
        <Header/>
        {isWinGame && <SudokuPopup/> /**/}
        <div className='main'>
            {numbers.map((tableNumber) => <Table arrTable={tableNumber} dangerId={dangerId}
                                                 idTable={generateRandomId()}/>)}
        </div>
        <Buttons numbers={numbers} setNumbers={setNumbers}/>
    </div>)
}