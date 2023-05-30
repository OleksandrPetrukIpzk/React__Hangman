import { useSelector} from "react-redux";
import {SellElement} from "Components/Shop/ShopElements/SellElement";
import {EquipElement} from "Components/Shop/ShopElements/EquipElement";
import {BlockColorWithName} from "Components/Shop/ShopElements/BlockColorWithName";
import {useEffect} from "react";
import {ChangeBackgroundColor} from "Components/Functions/ChangeBackgroundColor";

export const Library = () => {

    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));
    const  setStyle = JSON.parse(useSelector(state => state.store.setStyle));

    useEffect(()=>{
        ChangeBackgroundColor(setStyle);
    },[setStyle])

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {boughtElement.map(element =>
            <div style={{padding: '10px'}}>
           <BlockColorWithName element={element}/>
                { element.name !== setStyle.name && <EquipElement element={element}/>}
               <SellElement element={element}/>
            </div>
        )}
    </div>)
}