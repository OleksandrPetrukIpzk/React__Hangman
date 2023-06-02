import {useSelector} from "react-redux";

export const Sort = ({props, setList}) =>{
    const infoGame = useSelector(state => state.statistics.infoGame);
    const resetSort = () => {
        setList(JSON.parse(infoGame));
    }
    const handleSortWin = () => {
        const sorted = JSON.parse(infoGame).filter(lose => lose.status);
        setList(sorted);
    }
    const handleSortLose = () => {
        const sorted = JSON.parse(infoGame).filter(lose => !lose.status);
        setList(sorted);
    }
    return(<button onClick={() => (props === 'win' && handleSortWin()) || (props === 'lose' && handleSortLose()) || (props === 'reset' && resetSort())}>{props}</button>)
}