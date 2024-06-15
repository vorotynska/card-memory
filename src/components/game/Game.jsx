import GameMaker from './GameMaker/GameMaker'
import Navigation from './Navigation/Navigation'
import { createContext, useReducer } from 'react';

export const GameContext = createContext();

function reducer(state, item) {
    return [...state, item]
}

export default function Game() {
    const [game, setGame] = useReducer(reducer, []);
    const score = 5
    return (
        <GameContext.Provider value={{ game, setGame }}>
            <Navigation />
            <GameMaker />
        </GameContext.Provider>
    )
}