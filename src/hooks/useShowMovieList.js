import {useTMDBService} from "../service/useTMDBService.js";
import {useInfiniteQuery} from "react-query";

export const useShowMovieList = (onSuccess, onError) => {
	const {getMovieList} = useTMDBService();

	return useInfiniteQuery(["movie-list"], getMovieList, {
		getNextPageParam: (_lastPage, allPages) => (allPages.length < allPages[0].data.total_pages) ? allPages.length + 1 : undefined,
	});

};
