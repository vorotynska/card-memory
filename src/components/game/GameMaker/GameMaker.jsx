import GameBuilder from '../GameBuilder/GameBuilder';
import './GameMaker.css';
import GameSummary from '../GameSummary/GameSummary';

export default function GameMaker() {
    return (
        <>
            <h1 className="maker">
                <span role="img" aria-label="game">🥗 </span>
                Game Memory!
                <span role="img" aria-label="game"> 🥗</span>
            </h1>
            <p>
                Get points by clicking on an image but don't click on any more than once!
            </p>
            <GameBuilder />
            <GameSummary />
        </>
    )
}