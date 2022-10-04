import {createContext, useReducer} from "react";
import {togglerInitializer, togglerIntialState, togglerReducer} from "../reducer/toggler.reducer.js";

export const TogglerContext = createContext(undefined);


export const TogglerContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(togglerReducer, togglerIntialState, togglerInitializer)


	return <TogglerContext.Provider value={{...state, dispatch}} children={children}/>

}