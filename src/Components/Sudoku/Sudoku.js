import {useEffect, useState} from "react";
import {Table} from "Components/Sudoku/Table/Table";
import {Header} from "Components/Header/Header";
import {Buttons} from "Components/Sudoku/Buttons/Buttons";
import {SudokuPopup} from "Components/Sudoku/SudokuPopup";
import {isWin} from "Functions/Sudoku/isWin";
import {searchTroubles} from "Functions/Sudoku/searchTroubles";
import {generateRandomId} from "Functions/Sudoku/generateRandomId";
import {START} from "Constants/sudoku";
import './style.css'
import {useSelector} from "react-redux";


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
    }, [numbers,])


    return (<div>
        <Header/>
        {isWinGame && <SudokuPopup/> /**/}
        <div className='main'>
            {numbers.map((tableNumber, index) => <Table arrTable={tableNumber} dangerId={dangerId}
                                                 idTable={generateRandomId()} index={index}/>)}
        </div>
        <Buttons numbers={numbers} setNumbers={setNumbers}/>
    </div>)
}