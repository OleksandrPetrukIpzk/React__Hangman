import {useSelector} from "react-redux";

export const Win = ({setList}) => {

    const infoGame = useSelector(state => state.statistics.infoGame);

    const handleSortWin = () => {
        const sorted = JSON.parse(infoGame).filter(lose => lose.status);
        setList(sorted);
    }

    return <button onClick={handleSortWin}>Sort Win</button>
}