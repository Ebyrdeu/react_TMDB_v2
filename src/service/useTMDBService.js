import axios from "axios";
import {useContext} from "react";
import {SortContext} from "../context/Sort.context.jsx";

export const useTMDBService = () => {
	axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
	const _api = import.meta.env.VITE_API;

	const {moviesGenre, moviesSort,} = useContext(SortContext);

	const checkOnExistGenre = moviesGenre !== "none" ? `&with_genres=${moviesGenre}` : "";
	const checkOnExistSort = moviesSort !== "none" ? `&sort_by=${moviesSort}` : "";

	// Functions
	const getMovieList = ({pageParam = 1}) => axios.get(`discover/movie?api_key=${_api}&page=${pageParam}${checkOnExistGenre}${checkOnExistSort}`)


	const getSingleMovie = (movieId) => axios.get(`movie/${movieId}?api_key=${_api}`);

	const getMovieCast= (movieId) => axios.get(`movie/${movieId}/credits?api_key=${_api}`);

	return {
		getMovieList,
		getSingleMovie,
		getMovieCast
	};

};