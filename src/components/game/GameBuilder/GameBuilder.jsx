import './GameBuilder.css';
import GameItem from '../GameItem/GameItem';
import { createContext } from 'react';

const ingredients = [
    {
        image: '🍎',
        name: 'apple',
    },
    {
        image: '🥑',
        name: 'avocado',
    },
    {
        image: '🥦',
        name: 'broccoli',
    },
    {
        image: '🥕',
        name: 'carrot',
    },
    {
        image: '🍷',
        name: 'red wine dressing',
    },
    {
        image: '🍚',
        name: 'seasoned rice',
    },
];

const GameContext = createContext();

export default function GameBuilder() {
    return (
        <div className="wrapper-game-builder">
            {
                ingredients.map(ingredient => (
                    <GameItem
                        key={ingredient.name}
                        image={ingredient.image}
                        name={ingredient.name}
                    />
                ))
            }
        </div>
    )
}