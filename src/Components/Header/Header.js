import {useSelector} from "react-redux";

export const Header = () =>{
    const coins = useSelector(state => state.coins)
    return(
        <div>
            <h3>Coin {coins}</h3>
        </div>
    )
}