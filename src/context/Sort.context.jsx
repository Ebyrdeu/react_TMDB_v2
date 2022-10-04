import {createContext, useReducer} from "react";
import {sortInitializer, sortIntialState, sortReducer} from "../reducer/sort.reducer.js";

export const SortContext = createContext(undefined);

export const SortContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(sortReducer, sortIntialState, sortInitializer);
	return <SortContext.Provider value={{...state, dispatch}} children={children}/>;

};