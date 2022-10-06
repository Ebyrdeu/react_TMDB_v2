import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "@tanstack/react-query";

export const useShowSingleActor = (actorId) => {
	const {getActors} = useTMDBService();
	return useQuery(["actor", actorId], () => getActors(actorId));
};