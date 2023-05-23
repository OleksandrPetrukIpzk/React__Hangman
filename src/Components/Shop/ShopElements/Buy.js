import {useDispatch, useSelector} from "react-redux";

export const Buy = ({element}) => {
    const coins = useSelector(state => state.store.coins);
    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));
    const dispatch = useDispatch();
    const buyElement = (element) => {
        if (coins > element.price) {
            boughtElement.push(element);
            dispatch({type: 'BUY_ELEMENT', payload: element.price});
            dispatch({type: 'ADD_ELEMENT_TO_LIBRARY', payload: JSON.stringify(boughtElement)});
            dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
        }
    }
    return (
        <button onClick={() => buyElement(element)}>Buy</button>
    )
}