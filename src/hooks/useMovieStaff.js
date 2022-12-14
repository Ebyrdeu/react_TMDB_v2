import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "@tanstack/react-query";

export const useMovieStaff = (movieId) => {
	const {getMovieCast} = useTMDBService();
	return useQuery(["movies-cast", movieId], () => getMovieCast(movieId));
};