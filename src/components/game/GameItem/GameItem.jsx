import './GameItem.css';
import { useContext } from 'react';
import { GameContext } from '../Game';

export default function GameItem({ image, name }) {
    const { dispatch } = useContext(GameContext);

    function update() {
        dispatch({ type: 'ADD', item: name });
    }

    function add({ name }) {
        const [cart, setCart] = useState([]);
        setCart(current => [...current, name])

    }

    return (
        <div className="wrapper-game-item">
            <h3>
                {name}
            </h3>
            <button className='add' onClick={update}>
                <span className='image' role="img" aria-label={name}>{image}</span>
            </button>
        </div>
    )
}