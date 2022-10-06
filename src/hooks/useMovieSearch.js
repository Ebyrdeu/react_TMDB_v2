import {useTMDBService} from "../service/useTMDBService.js";
import {useContext} from "react";
import {SearchContext} from "../context/Search.Context.jsx";
import {useInfiniteQuery} from "@tanstack/react-query";

export const useMovieSearch = () => {
	const {getMovieSearch} = useTMDBService();
	const {searchQuery} = useContext(SearchContext);
	return useInfiniteQuery(["movie-search", searchQuery], getMovieSearch);

};
