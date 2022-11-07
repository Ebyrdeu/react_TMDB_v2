import axios from 'axios';
import {useContext} from 'react';
import {SortContext} from '../context/Sort.context.jsx';
import {SearchContext} from '../context/Search.context.jsx';

export const useTMDBService = () => {

	axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
	const _api = import.meta.env.VITE_API;

	const {moviesGenre, moviesSort} = useContext(SortContext);
	const {searchQuery} = useContext(SearchContext);

	// Debounce also works, but this one faster to do
	const checkOnExistGenre = moviesGenre !== 'none' ? `&with_genres=${moviesGenre}` : '';
	const checkOnExistSort = moviesSort !== 'none' ? `&sort_by=${moviesSort}` : '';
	const checkOnSearch = searchQuery !== null ? `&query=${searchQuery}` : '&query=Shrek';

	// Functions
	const getMovieListMulti = ({pageParam = 1}) => axios.get(
			`discover/movie?api_key=${_api}&page=${pageParam}${checkOnExistGenre}${checkOnExistSort}`);

	const getMovieListSingle = (pageParam, genre, sort) =>
			axios.get(`discover/movie?api_key=${_api}&page=${pageParam}&with_genres=${genre}&sort_by=${sort}`);

	const getMovieSearch = ({pageParam = 1}) =>
			axios.get(`search/movie?api_key=${_api}&page=${pageParam}${checkOnSearch}`);

	const getSingleMovie = (movieId) =>
			axios.get(`movie/${movieId}?api_key=${_api}`);

	const getSimilarMovie = (movieId) =>
			axios.get(`movie/${movieId}/similar?api_key=${_api}`);

	const getMovieCast = (movieId) =>
			axios.get(`movie/${movieId}/credits?api_key=${_api}`);

	const getActors = (actorId) => axios.get(`person/${actorId}?api_key=${_api}`);

	const getActorMovies = (actorId) =>
			axios.get(`person/${actorId}/credits?api_key=${_api}`);

	return {
		getMovieListMulti,
		getMovieListSingle,
		getMovieSearch,
		getSingleMovie,
		getSimilarMovie,
		getMovieCast,
		getActors,
		getActorMovies,
	};
};