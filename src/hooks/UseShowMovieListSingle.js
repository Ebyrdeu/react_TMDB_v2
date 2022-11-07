import {useQuery} from '@tanstack/react-query';
import {useTMDBService} from '../service/useTMDBService.js';

export const useShowMovieListSingle = (pageParam, genre, sort) => {
    const {getMovieListSingle} = useTMDBService();

    return useQuery(['movie-list-single', genre, sort, pageParam], () => getMovieListSingle(pageParam, genre, sort), {
        keepPreviousData: true,
    });
};
