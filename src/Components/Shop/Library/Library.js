import { useSelector} from "react-redux";
import {SellElement} from "Components/Shop/ShopElements/SellElement";
import {EquipElement} from "Components/Shop/ShopElements/EquipElement";

export const Library = () => {

    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));
    const setStyle = JSON.parse(useSelector(state => state.store.setStyle));

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {boughtElement.map(element =>
            <div style={{padding: '10px'}}>
                <div style={{background: element.background, width: '100px', height: "100px"}}></div>
                <p>{element.name}</p>
                { element.name !== setStyle.name && <EquipElement element={element}/>}
               <SellElement element={element}/>
            </div>
        )}
    </div>)
}