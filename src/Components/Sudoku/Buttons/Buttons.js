import {ChangeNumber} from "Components/Sudoku/Buttons/ChangeNumber";
import {DeleteElement} from "Components/Sudoku/Buttons/DeleteElement";
import {PrevElement} from "Components/Sudoku/Buttons/PrevElement";
import {PromptNumber} from "Components/Sudoku/Buttons/PromptNumber";
import {AnswerAllSudoku} from "Components/Sudoku/Buttons/AnswerAllSudoku";

export const Buttons = ({numbers, setNumbers, arrWhiteIds, }) => {

    const numberButton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='main__buttons'>

            {numberButton.map(number => <ChangeNumber number={number} setNumbers={setNumbers} numbers={numbers} arrWhiteIds={arrWhiteIds}/>)}

            <DeleteElement numbers={numbers} setNumbers={setNumbers} arrWhiteIds={arrWhiteIds}/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='prev'/>
            <PrevElement setNumbers={setNumbers} numbers={numbers} props='redo'/>
            <PromptNumber numbers={numbers} setNumbers={setNumbers}/>
            <AnswerAllSudoku setNumbers={setNumbers}/>
        </div>
    )
}