import './Navigation.css';
import { useContext } from 'react';
import { GameContext } from '../Game';
import { useState } from 'react';

export default function Navigation() {
    const [bestScore, setBestScore] = useState(0);
    const { state } = useContext(GameContext);

    if (state.score > bestScore) {
        setBestScore(state.score);
    }


    return (
        <div className="wrapper-nav">
            Best score: {bestScore}
        </div>
    );
}
