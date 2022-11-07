import {useTMDBService} from '../service/useTMDBService.js';
import {useContext} from 'react';
import {SortContext} from '../context/Sort.context.jsx';
import {useInfiniteQuery} from '@tanstack/react-query';

export const useShowMovieListMulti = (pageParam) => {
	const {getMovieListMulti} = useTMDBService();
	const {moviesGenre, moviesSort} = useContext(SortContext);

	return useInfiniteQuery(['movie-list-multi', moviesGenre, moviesSort, pageParam], getMovieListMulti, {
		getNextPageParam: (_lastPage, allPages) => (allPages.length < allPages[0].data.total_pages) ? allPages.length + 1 : undefined,
	});

};
