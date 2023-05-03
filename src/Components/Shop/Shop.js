import {Header} from "Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Shop = () => {
    const boughtElement = JSON.parse(useSelector(state => state.boughtElement));
    const coins = useSelector(state => state.coins);
    const dispatch = useDispatch();
    const SHOP_LIST = [
        {name: 'Black', price: 50, background: 'black', color: 'white'},
        {name: 'Gold', price: 1000, background: 'gold', color: 'black'},
        {name: 'Red', price: 80, background: 'red', color: 'black'},
        {name: 'White', price: 100, background: 'white', color: 'black'},
        {name: 'Classic', price: 0, background: 'dodgerblue', color: 'white'},
    ]
    const buyElement = (element) => {
        if (coins > element.price) {
            boughtElement.push(element);
            dispatch({type: 'BUY_ELEMENT', payload: element.price});
            dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(boughtElement)});
            dispatch({type:'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
            document.body.style.background = element.background;
            document.body.style.color = element.color;
        }
    }
    const equipElement = (element) => {
        document.body.style.background = element.background;
        document.body.style.color = element.color;
        dispatch({type:'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
    }
    return (<div>
        <Header/>
        <Link to='/'>Home </Link>
        <Link to='/status'> Status</Link>
        <div style={{display: 'flex', alignItems: 'center'}}>
            {SHOP_LIST.map((element) => <div style={{padding: '10px'}}>
                <div style={{background: element.background, width: '100px', height: "100px"}}></div>
                <p>{element.name}</p>
                <p>{element.price}</p>
                {boughtElement.find(library => library.name === element.name) ?
                    <button onClick={() => equipElement(element)}>Equip</button> :
                    <button onClick={() => buyElement(element)}>Buy</button>}
            </div>)}
        </div>
    </div>)
}