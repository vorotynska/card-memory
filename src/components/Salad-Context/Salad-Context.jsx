import Navigation from "../Navigation/Navigation";
import SaladMaker from "../SaladMaker/SaladMaker";
import UserContext from "../User/User";

const user = {
    name: "Kwame",
    favorites: [
        'avocado',
        'carrot'
    ]
}

export default function Salad() {
    return (
        <UserContext.Provider value={user}>
            <Navigation />
            <SaladMaker />
        </UserContext.Provider>
    )
}