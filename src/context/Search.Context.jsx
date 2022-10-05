import {createContext, useReducer} from "react";
import {searchInitializer, searchIntialState, searchReducer} from "../reducer/search.reducer.js";

export const SearchContext = createContext(undefined);

export const SearchContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(searchReducer, searchIntialState, searchInitializer);

	return <SearchContext.Provider value={{...state, dispatch}} children={children}/>;

};