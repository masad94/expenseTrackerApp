import {createContext} from 'react';

const initialState={
    transactions:[]
}


export const GlobalContext = createContext(initialState);
