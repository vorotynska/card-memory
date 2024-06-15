import { createContext, useReducer } from "react";
import SaladBuilder from "../SaladBuilder/SaladBuilder";
import SaladSummary from "../SaladSummary/SaladSummary";

export const SaladContext = createContext()

function reducer(state, item) {
    return [...state, item]
}

export default function SaladMaker() {
    const [salad, setSalad] = useReducer(reducer, []);


    return (
        <SaladContext.Provider value={{ salad, setSalad }}>
            <h1 className='wrapper-maker'>
                <span role="img" aria-label="salad">🥗 </span>
                Build Your Custom Salad!
                <span role="img" aria-label="salad"> 🥗</span>
            </h1>
            <SaladBuilder />
            <SaladSummary />
        </SaladContext.Provider>
    )
}