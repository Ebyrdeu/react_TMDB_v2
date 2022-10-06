import {createContext, useReducer} from "react";
import {searchInitializer, searchInitialState, searchReducer} from "../reducer/search.reducer.js";

export const SearchContext = createContext(undefined);

export const SearchContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(searchReducer, searchInitialState, searchInitializer);

	return <SearchContext.Provider value={{...state, dispatch}} children={children}/>;

};