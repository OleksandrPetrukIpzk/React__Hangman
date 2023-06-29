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
import {ZERO} from "Constants/sudoku";
import './style.css'


export const Sudoku = () => {
    const [difficult, setDifficult] = useState(0);
    const [arrWhiteIds, setArrWhiteIds] = useState([])
    const [numbers, setNumbers] = useState([]);
    const [dangerIds, setDangerIds] = useState([]);
    const [isWinGame, setIsWinGame] = useState(false);
    const backgroundStyle = JSON.parse(useSelector(state => state.store.backgroundStyle));

    useEffect(()=>{
        setNumbers(createSudoku(arrWhiteIds));
    },[difficult]);

    useEffect(() =>{
        setDangerIds(searchTroubles(numbers));
    },[numbers])

    useEffect(() => {
        if (dangerIds.length === ZERO && isWin(numbers) && difficult > ZERO) {
                setIsWinGame(true);
        }
    }, [dangerIds])

    useEffect(() => {
        ChangeBackgroundColor(backgroundStyle);
    }, [])

    return (<div>
        <Header/>
        {difficult === ZERO && <ChoseDifficult setDifficult={setDifficult} setArrWhiteIds={setArrWhiteIds}/>}
        {(isWinGame && difficult > ZERO)  && <SudokuPopup/> /**/}
        <div className='main'>
            {difficult > ZERO && numbers?.map((tableNumber, index) => <Table arrTable={tableNumber} dangerIds={dangerIds}
                                                                          idTable={generateRandomId()} index={index} numbers={numbers}/>)}
        </div>
        { difficult > ZERO && <Buttons arrWhiteIds={arrWhiteIds} numbers={numbers} setNumbers={setNumbers} />}
    </div>)
}