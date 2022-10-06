import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "@tanstack/react-query";

export const useSimilarMovie = (movieId) => {
	const {getSimilarMovie} = useTMDBService();

	return useQuery(["movie-similar", movieId], () => getSimilarMovie(movieId));

};