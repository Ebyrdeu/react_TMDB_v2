import {useQuery} from "react-query";
import {useTMDBService} from "../service/useTMDBService.js";

export const useShowSingleMovie = (movieId) => {
	const {getSingleMovie} = useTMDBService();

	return useQuery(["movie-desc", movieId], () => getSingleMovie(movieId));

};

