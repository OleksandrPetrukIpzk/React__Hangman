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

export const Sudoku = () => {
    const [isWinGame, setIsWinGame] = useState(false);
    const [numbers, setNumbers] = useState(START)
    const targetId = useSelector(state => state.sudoku.targetId);
    let dangerId = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i <= 2) {
            for (let y = 0; y < 9; y++) {

                if (y <= 2) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, 3, -6));
                        dangerId.push(...validator(numbers[i], numbers[i + 6], y, 3, -6));

                    }
                }
                if (y >= 3 && i <= 5) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, 3, 3));
                        dangerId.push(...validator(numbers[i], numbers[i + 6], y, 3, 3));


                    }
                }
                if (y >= 6 && y <= 8) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, -3, 6));
                        dangerId.push(...validator(numbers[i], numbers[i + 6], y, -3, 6));
                    }
                }
            }
        }
        if (i >= 3 && i <= 5) {
            for (let y = 0; y < 9; y++) {
                if (y <= 2) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, 3, -6))
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, 3, -6))
                    }
                }
                if (y >= 3 && i <= 5) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, 3, 3))
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, 3, 3))
                    }
                }
                if (y >= 6 && y <= 8) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i + 3], y, -3, 6))
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, -3, 6))

                    }
                }
            }
        }
        if (i >= 6) {
            for (let y = 0; y < 9; y++) {
                if (y <= 2) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, 3, -6))
                        dangerId.push(...validator(numbers[i], numbers[i - 6], y, 3, -6))

                    }
                }
                if (y >= 3 && i <= 5) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, 3, 3))
                        dangerId.push(...validator(numbers[i], numbers[i - 6], y, 3, 3))

                    }
                }
                if (y >= 6 && y <= 8) {
                    if (numbers[i][y].number !== '') {
                        dangerId.push(...validator(numbers[i], numbers[i - 3], y, -3, 6))
                        dangerId.push(...validator(numbers[i], numbers[i - 6], y, -3, 6))
                    }
                }
            }
        }

        if (i === 0 || i === 3 || i === 6) {
            for (let y = 0; y < 9; y++) {
                if ((y === 0 || y === 3 || y === 6) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i + 1], y, 1, -2));
                    dangerId.push(...validator(numbers[i], numbers[i + 2], y, 1, -2));
                }
                if ((y === 1 || y === 4 || y === 7) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i + 1], y, 1, 1));
                    dangerId.push(...validator(numbers[i], numbers[i + 2], y, 1, 1));
                }
                if ((y === 2 || y === 5 || y === 8) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i + 1], y, -1, 2));
                    dangerId.push(...validator(numbers[i], numbers[i + 2], y, -1, 2));
                }
            }
        }
        if (i === 1 || i === 4 || i === 7) {
            for (let y = 0; y < 9; y++) {
                if ((y === 0 || y === 3 || y === 6) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i + 1], y, 1, -2));
                    dangerId.push(...validator(numbers[i], numbers[i - 1], y, 1, -2));
                }
                if ((y === 1 || y === 4 || y === 7) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i + 1], y, 1, 1));
                    dangerId.push(...validator(numbers[i], numbers[i - 1], y, 1, 1));
                }
                if ((y === 2 || y === 5 || y === 8) && numbers[i][y].number !== '') {
                    dangerId.push(...validator(numbers[i], numbers[i - 1], y, -1, 2));
                    dangerId.push(...validator(numbers[i], numbers[i - 1], y, -1, 2));
                }
            }
        }
    }

    useEffect(() => {
        if (dangerId.length === 0) {
            if (isWin(numbers)) {
                setIsWinGame(true);
            }
        }
    }, [targetId])


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