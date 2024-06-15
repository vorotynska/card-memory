import './Navigation.css';
import { useContext, useReducer } from 'react';
import { GameContext } from '../Game';

function scoreReducer(state, game) {
    if (state < game.length) return state = game.length;
}

export default function Navigation() {
    const { game } = useContext(GameContext);
    const [score, setScore] = useReducer(scoreReducer, 0);

    return (
        <div className="wrapper-nav">
            Best score: {score}
        </div>
    )
}