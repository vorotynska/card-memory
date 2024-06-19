import { createContext, useReducer, useState, useEffect } from 'react';
import GameMaker from './GameMaker/GameMaker';
import Navigation from './Navigation/Navigation';

// Массив ingredients перемещён сюда для удобства
const ingredients = [
    { image: '🍎', name: 'apple' },
    { image: '🥑', name: 'avocado' },
    { image: '🥦', name: 'broccoli' },
    { image: '🥕', name: 'carrot' },
    { image: '🍷', name: 'red wine dressing' },
    { image: '🍚', name: 'seasoned rice' },
    { image: '🍌', name: 'banana' },
    { image: '🍉', name: 'watermelon' },
    { image: '🍇', name: 'grapes' },
    { image: '🍒', name: 'cherry' },
    { image: '🍑', name: 'peach' },
    { image: '🍍', name: 'pineapple' }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const initialState = {
    items: [],
    score: 0,
    shuffledIngredients: shuffle([...ingredients]).slice(0, 6) // Добавлено начальное перемешивание
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            if (state.items.includes(action.item)) {
                return {
                    ...state,
                    score: 0,
                    items: [],
                    shuffledIngredients: shuffle([...ingredients]).slice(0, 6) // Перемешиваем при сбросе
                };
            }
            return { ...state, score: state.score + 1, items: [...state.items, action.item] };
        default:
            return state;
    }
}

export const GameContext = createContext();

export default function Game() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [bestScore, setBestScore] = useState(0);

    if (state.score > bestScore) {
        setBestScore(state.score);
    }

    return (
        <GameContext.Provider value={{ state, dispatch, bestScore }}>
            <Navigation />
            <GameMaker shuffledIngredients={state.shuffledIngredients} />
        </GameContext.Provider>
    );
}
