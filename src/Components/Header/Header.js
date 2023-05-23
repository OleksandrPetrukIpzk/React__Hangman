import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Header = () =>{
    const coins = useSelector(state => state.store.coins);
    return(
        <div>
            <Link to='/'>Game</Link>
            <Link to='/status'>Status</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/library'>Library</Link>
            <h3>Coin {coins}</h3>
        </div>
    )
}