import {useSelector} from "react-redux";

export const Lose = ({setList}) =>{

    const infoGame = useSelector(state => state.statistics.infoGame);

    const handleSortLose = () => {
        const sorted = JSON.parse(infoGame).filter(lose => !lose.status);
        setList(sorted);
    }

    return <button onClick={handleSortLose}>Sort Lose</button>
}