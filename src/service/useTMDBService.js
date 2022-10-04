import axios from "axios";
import {useContext} from "react";
import {SortContext} from "../context/Sort.context.jsx";

export const useTMDBService = () => {
	axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
	const _api = import.meta.env.VITE_API;
	const {moviesGenre, moviesSort} = useContext(SortContext);
	const checkOnExistGenre = moviesGenre !== 'n    one' ? `&with_genres=${moviesGenre}` : null;
	const checkOnExistSort =  moviesSort !== 'none' ? `&sort_by=${moviesSort}` : null;

	// Functions
	const getMovieList = ({pageParam = 1}) => axios.get(`discover/movie?api_key=${_api}&page=${pageParam}${checkOnExistGenre}${checkOnExistSort}`);

	return {
		getMovieList,
	};

};