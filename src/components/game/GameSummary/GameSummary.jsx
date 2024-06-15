import './GameSummary';
import { useContext, useState } from 'react';
import { GameContext } from '../Game';

export default function GameSummary() {
    const { game } = useContext(GameContext);

    return (
        <div className='wrapper-game-summary'>
            <h2>Your Score: {game.length}</h2>

        </div>
    )
}