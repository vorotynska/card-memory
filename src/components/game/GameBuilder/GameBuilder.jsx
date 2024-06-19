import './GameBuilder.css';
import GameItem from '../GameItem/GameItem';

export default function GameBuilder({ shuffledIngredients = [] }) { // Значение по умолчанию
    return (
        <div className="wrapper-game-builder">
            {shuffledIngredients.map(ingredient => (
                <GameItem
                    key={ingredient.name}
                    image={ingredient.image}
                    name={ingredient.name}
                />
            ))}
        </div>
    );
}

