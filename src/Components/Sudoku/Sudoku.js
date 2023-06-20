import {useEffect, useState} from "react";
import {Table} from "Components/Sudoku/Table/Table";
import {Header} from "Components/Header/Header";
import {Buttons} from "Components/Sudoku/Buttons/Buttons";
import {SudokuPopup} from "Components/Sudoku/SudokuPopup";
import {isWin} from "Functions/Sudoku/isWin";
import {searchTroubles} from "Functions/Sudoku/searchTroubles";
import {generateRandomId} from "Functions/Sudoku/generateRandomId";
import {ChoseDifficult} from "Components/Sudoku/ChoseDifficult";
import {createSudoku} from "Functions/Sudoku/createSudoku";
import {ChangeBackgroundColor} from "Functions/Hangman/ChangeBackgroundColor";
import {useSelector} from "react-redux";
import './style.css'

export const Sudoku = () => {
    const [difficult, setDifficult] = useState(0);
    const [arrWhiteIds, setArrWhiteIds] = useState([])
    const [numbers, setNumbers] = useState([]);
    const [dangerId, setDangerId] = useState([]);
    const [isWinGame, setIsWinGame] = useState(false);
    const setStyle = JSON.parse(useSelector(state => state.store.setStyle));

    useEffect(()=>{
        setNumbers(createSudoku(arrWhiteIds));
    },[difficult]);

    useEffect(() =>{
        setDangerId(searchTroubles(numbers));
    },[numbers])

    useEffect(() => {
        if (dangerId.length === 0 && isWin(numbers) && difficult > 0) {
                setIsWinGame(true);
        }
    }, [dangerId])

    useEffect(() => {
        ChangeBackgroundColor(setStyle);
    }, [])

    return (<div>
        <Header/>
        {difficult === 0 && <ChoseDifficult setDifficult={setDifficult} setArrWhiteIds={setArrWhiteIds}/>}
        {(isWinGame && difficult > 0)  && <SudokuPopup/> /**/}
        <div className='main'>
            {difficult > 0 && numbers?.map((tableNumber, index) => <Table arrTable={tableNumber} dangerId={dangerId}
                                                                          idTable={generateRandomId()} index={index} numbers={numbers} arrWhiteIds={arrWhiteIds}/>)}
        </div>
        { difficult > 0 && <Buttons arrWhiteIds={arrWhiteIds} numbers={numbers} setNumbers={setNumbers} />}
    </div>)
}