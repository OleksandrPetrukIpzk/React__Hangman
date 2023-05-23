import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Game} from "Components/Statistic/Game/Game";
import {ChangeBackgroundColor} from "Components/Functions/ChangeBackgroundColor";
import {Header} from "Components/Header/Header";
import {Reset} from "Components/Statistic/Status/ElementSort/Reset";
import {Lose} from "Components/Statistic/Status/ElementSort/Lose";
import {Win} from "Components/Statistic/Status/ElementSort/Win";
import './style.css'

export const Status = () => {
    const setStyle = JSON.parse(useSelector(state => state.store.setStyle));
    const infoGame = useSelector(state => state.statistics.infoGame);
    const [list, setList] = useState(JSON.parse(infoGame));


    useEffect(() => {
        ChangeBackgroundColor(setStyle);
    }, [])

    return (
        <div>
            <Header/>
            {infoGame.length &&
                <div className='buttons'>
                    <Win setList={setList}/>
                    <Lose setList={setList}/>
                    <Reset setList={setList}/>
                </div>
            }
            {infoGame.length ? list?.sort((x, y) => Date.parse(y.time) - Date.parse(x.time)).map(game => <Game
                game={game}/>) : <h2>You dont have game</h2>}

        </div>
    )
}