import {createContext, useReducer} from "react";
import {sortInitializer, sortInitialState, sortReducer} from "../reducer/sort.reducer.js";

export const SortContext = createContext(undefined);

export const SortContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(sortReducer, sortInitialState, sortInitializer);

	return <SortContext.Provider value={{...state, dispatch}} children={children}/>;

};