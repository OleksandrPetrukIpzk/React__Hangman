import {Library} from "Components/Shop/Library/Library";
import {Header} from "Components/Header/Header";
import {useEffect} from "react";
import {ChangeBackgroundColor} from "Functions/Hangman/ChangeBackgroundColor";
import {useSelector} from "react-redux";

export const OwnElements = () =>{

    const setStyle = JSON.parse(useSelector(state => state.store.setStyle));

    useEffect(()=>{
        ChangeBackgroundColor(setStyle);
    },[])

    return(
        <div>
        <Header/>
        <h2>Library</h2>
        <Library/>
    </div>
    );
}