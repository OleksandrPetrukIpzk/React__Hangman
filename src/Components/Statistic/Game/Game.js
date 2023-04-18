export const Game = ({game}) => {

    return (<div className={game.status ? 'status__win' : 'status__lose'}>
        <h2>{game.status ? 'Win' : 'Lose'}</h2>
        <p>True answer: {game.secretWord}</p>
    </div>)
}