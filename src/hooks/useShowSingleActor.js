import {useTMDBService} from "../service/useTMDBService.js";
import {useQuery} from "react-query";

export const useShowSingleActor = (actorId) => {
	const {getActors} = useTMDBService();
	return useQuery(["actor", actorId], () => getActors(actorId));
};