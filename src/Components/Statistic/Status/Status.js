import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Game} from "Components/Statistic/Game/Game";
import {ChangeBackgroundColor} from "Functions/Hangman/ChangeBackgroundColor";
import {Header} from "Components/Header/Header";
import {Sort} from "Components/Statistic/Status/ElementSort/Sort";
import './style.css'

export const Status = () => {
    const backgroundStyle = JSON.parse(useSelector(state => state.store.backgroundStyle));
    const infoGame = useSelector(state => state.statistics.infoGame);
    const [list, setList] = useState(JSON.parse(infoGame));


    useEffect(() => {
        ChangeBackgroundColor(backgroundStyle);
    }, [])

    return (
        <div>
            <Header/>
            {infoGame.length &&
                <div className='buttons'>
                    <Sort setList={setList} props={'win'}/>
                    <Sort setList={setList} props={'lose'}/>
                    <Sort setList={setList} props={'reset'}/>

                </div>
            }
            {infoGame.length ? list?.sort((x, y) => Date.parse(y.time) - Date.parse(x.time)).map(game => <Game
                game={game}/>) : <h2>You dont have game</h2>}

        </div>
    )
}