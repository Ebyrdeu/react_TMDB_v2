import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "@tanstack/react-query";

export const useActorMovies = (movieId) => {
	const {getActorMovies} = useTMDBService();
	return useQuery(["actorMovies", movieId], () => getActorMovies(movieId));
};
