import {createContext, useReducer} from "react";
import {togglesInitializer, togglesInitialState, togglesReducer} from "../reducer/toggles.reducer.js";

export const TogglesContext = createContext(undefined);

export const TogglesContextProvider = ({children}) => {

	const [state, dispatch] = useReducer(togglesReducer, togglesInitialState, togglesInitializer);

	return <TogglesContext.Provider value={{...state, dispatch}} children={children}/>;

};