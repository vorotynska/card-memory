import { useContext } from 'react';
import './SaladSummary.css';
import { SaladContext } from '../SaladMaker/SaladMaker';

export default function SaladSummary() {
    const { salad } = useContext(SaladContext);

    return (
        <div className="wrapper-sum">
            <h2>Your Salad</h2>
            <ul className="list">
                {salad.map(({ name, id }) => (<li key={id}>{name}</li>))}
            </ul>
        </div>
    )
}