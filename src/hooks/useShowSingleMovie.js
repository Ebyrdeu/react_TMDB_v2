import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "@tanstack/react-query";

export const useShowSingleMovie = (movieId) => {
	const {getSingleMovie} = useTMDBService();

	return useQuery(["movie-desc", movieId], () => getSingleMovie(movieId));

};

