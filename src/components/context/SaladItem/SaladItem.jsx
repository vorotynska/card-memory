import { useContext, useReducer } from 'react';
import './SaladItem.css';
import UserContext from '../User/User'
import { SaladContext } from '../SaladMaker/SaladMaker';

const reducer = key => key + 1;

export default function SaladItem({ image, name }) {
    const { setSalad } = useContext(SaladContext);
    const user = useContext(UserContext);
    const favorite = user.favorites.includes(name);
    const [id, updateId] = useReducer(reducer, 0);
    function update() {
        setSalad({
            name,
            id: `${name}-${id}`
        })
        updateId();
    };
    return (
        <div className="wrapper-item">
            <h3>
                {name}
            </h3>
            <span className='favorite' aria-label={favorite ? 'Favorite' : 'Not Favorite'}>
                {favorite ? '😋' : ''}
            </span>
            <button className='add' onClick={update}>
                <span className='image' role="img" aria-label={name}>{image}</span>
            </button>
        </div>
    )
}