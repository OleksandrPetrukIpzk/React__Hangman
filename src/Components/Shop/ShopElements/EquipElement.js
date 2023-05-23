import {useDispatch} from "react-redux";

export const EquipElement = ({element}) =>{
    const dispatch = useDispatch();

    const equipElement = (element) => {
        dispatch({type: 'SET_ACTUAL_STYLE', payload: JSON.stringify(element)})
    }
    return<button onClick={() => equipElement(element)}>Equip</button>
}