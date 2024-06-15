import { useContext } from 'react';
import './Navigation.css';
import UserContext from '../User/User';

export default function Navigation() {
    const user = useContext(UserContext);

    return (
        <div className='wrapper-salad'>
            Welcome, {user.name}
        </div>
    )
}