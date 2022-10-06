import {createContext, useReducer} from "react";
import {togglesInitializer, togglesInitialState, togglesReducer} from "../reducer/toggles.reducer.js";

export const TogglerContext = createContext(undefined);


export const TogglerContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(togglesReducer, togglesInitialState, togglesInitializer)

	return <TogglerContext.Provider value={{...state, dispatch}} children={children}/>

}