import {SHOP_LIST} from "Components/Constants/Constants";
import {useSelector} from "react-redux";
import {Buy} from "Components/Shop/ShopElements/Buy";
import {SellElement} from "Components/Shop/ShopElements/SellElement";

export const ListElements = () => {
    const boughtElement = JSON.parse(useSelector(state => state.store.boughtElement));

    return (<div style={{display: 'flex', alignItems: 'center'}}>
        {SHOP_LIST.map((element) => <div style={{padding: '10px'}}>
            <div style={{background: element.background, width: '100px', height: "100px"}}></div>
            <p>{element.name}</p>
            <p>Price: {element.price}</p>
            {boughtElement.find(library => library.name === element.name) ?
                <SellElement element={element}/>
                :
                <Buy element={element}/>
            }
        </div>)}
    </div>)
}