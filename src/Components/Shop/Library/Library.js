import {useEffect} from "react";
import {useSelector} from "react-redux";
import {SellElement} from "Components/Shop/ShopElements/SellElement";
import {EquipElement} from "Components/Shop/ShopElements/EquipElement";
import {BlockColorWithName} from "Components/Shop/ShopElements/BlockColorWithName";
import {ChangeBackgroundColor} from "Functions/Hangman/ChangeBackgroundColor";

export const Library = () => {

    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));
    const backgroundStyle = JSON.parse(useSelector(state => state.store.backgroundStyle));

    useEffect(() => {
        ChangeBackgroundColor(backgroundStyle);
    }, [backgroundStyle])

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {boughtElement.map(element =>
            <div style={{padding: '10px'}}>
                <BlockColorWithName element={element}/>
                {element.name !== backgroundStyle.name && <EquipElement element={element}/>}
                <SellElement element={element}/>
            </div>
        )}
    </div>)
}