import {useSelector} from "react-redux";
import {Buy} from "Components/Shop/ShopElements/Buy";
import {SellElement} from "Components/Shop/ShopElements/SellElement";
import {BlockColorWithName} from "Components/Shop/ShopElements/BlockColorWithName";
import {SHOP_LIST} from "Constants/hangman";

export const ListElements = () => {
    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {SHOP_LIST.map((element) => <div style={{padding: '10px'}}>
            <BlockColorWithName element={element} />
            <p>Price: {element.price}</p>
            {boughtElement.find(library => library.name === element.name) ?
                <SellElement element={element}/>
                :
                <Buy element={element}/>
            }
        </div>)}
    </div>)
}