import {ChangeNumber} from "Components/Sudoku/Buttons/ChangeNumber";
import {DeleteElement} from "Components/Sudoku/Buttons/DeleteElement";
import {PrevElement} from "Components/Sudoku/Buttons/PrevElement";
import {PromptNumber} from "Components/Sudoku/Buttons/PromptNumber";

export const Buttons = ({numbers, setNumbers}) => {

    const numberButton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <div className='main__buttons'>

            {numberButton.map(number => <ChangeNumber number={number} setNumbers={setNumbers} numbers={numbers}/>)}

            <DeleteElement numbers={numbers} setNumbers={setNumbers}/>
            <PrevElement setNumbers={setNumbers} numbers={numbers}>Prev</PrevElement>
            <PrevElement setNumbers={setNumbers} numbers={numbers}>Redo</PrevElement>
            <PromptNumber numbers={numbers} setNumbers={setNumbers}/>

        </div>
    )
}