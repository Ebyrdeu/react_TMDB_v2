import axios from "axios";

export const useTMDBService = () => {
	axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
	const _api = import.meta.env.VITE_API;

	// Functions
	const getMovieList = ({pageParam = 1}) => axios.get(`discover/movie?api_key=${_api}&page=${pageParam}`)

	return {
		getMovieList,
	};

};