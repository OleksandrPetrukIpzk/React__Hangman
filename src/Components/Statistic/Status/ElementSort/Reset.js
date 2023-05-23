import {useSelector} from "react-redux";

export const Reset = ({setList}) => {

    const infoGame = useSelector(state => state.statistics.infoGame);

    const resetSort = () => {
        setList(JSON.parse(infoGame));
    }

    return <button onClick={resetSort}>Reset</button>
}