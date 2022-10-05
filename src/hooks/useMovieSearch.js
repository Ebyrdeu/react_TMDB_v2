import {useTMDBService} from "../service/useTMDBService.js";

import {useInfiniteQuery, useQuery} from "react-query";
import {useContext} from "react";
import {SearchContext} from "../context/Search.Context.jsx";

export const useMovieSearch = () => {
	const {getMovieSearch} = useTMDBService();
	const {searchQuery} = useContext(SearchContext);
	return useInfiniteQuery(["movie-search", searchQuery],  getMovieSearch);

};
