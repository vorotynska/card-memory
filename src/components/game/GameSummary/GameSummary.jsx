import './GameSummary';
import { useContext, useState } from 'react';
import { GameContext } from '../Game';

export default function GameSummary() {
    const { state } = useContext(GameContext);

    return (
        <div className='wrapper-game-summary'>
            <h2>Your Score: {state.score}</h2>

        </div>
    )
}