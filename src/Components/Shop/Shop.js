import {Header} from "Components/Header/Header";
import { useSelector} from "react-redux";
import {useEffect} from "react";
import {ListElements} from "Components/Shop/ListElements/ListElements";
import {Library} from "Components/Shop/Library/Library";
import {ChangeBackgroundColor} from "Functions/Hangman/ChangeBackgroundColor";

export const Shop = () => {

    const setStyle = JSON.parse(useSelector(state => state.store.setStyle));


    useEffect(() => {
        ChangeBackgroundColor(setStyle);
    }, [setStyle]);

    return (<div>
        <Header/>
        <h1>Store</h1>
        <ListElements/>
        <h2>Buyed</h2>
        <Library/>
    </div>)
}