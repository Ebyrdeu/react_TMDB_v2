import {useTMDBService} from "../service/useTMDBService.js";
import {useInfiniteQuery} from "react-query";
import {useContext} from "react";
import {SortContext} from "../context/Sort.context.jsx";

export const useShowMovieList = (onSuccess, onError) => {
	const {getMovieList} = useTMDBService();
	const {moviesGenre, moviesSort} = useContext(SortContext);

	return useInfiniteQuery(["movie-list", moviesGenre, moviesSort], getMovieList, {
		getNextPageParam: (_lastPage, allPages) => (allPages.length < allPages[0].data.total_pages) ? allPages.length + 1 : undefined,
	});

};
