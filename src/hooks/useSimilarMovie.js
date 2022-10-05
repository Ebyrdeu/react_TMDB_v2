import {useInfiniteQuery, useQuery} from "react-query";
import {useTMDBService} from "../service/useTMDBService.js";

export const useSimilarMovie = (movieId) => {
	const {getSimilarMovie} = useTMDBService();

	return useQuery(["movie-similar", movieId], () => getSimilarMovie(movieId));

};