import {useShowMovieListSingle} from '../hooks/UseShowMovieListSingle.js';
import {Button, Group, Pagination} from '@mantine/core';
import {useLocalStorage} from '../hooks/useLocalStorage.js';
import React from 'react';

export const JustToPassAssigment = () => {

	const sortData = [
		{sortValue: 'none', label: 'None'},
		{sortValue: 'popularity.asc', label: 'Popularity Asc'},
		{sortValue: 'popularity.desc', label: 'Popularity Dec'},
		{sortValue: 'release_date.asc', label: 'Release Date Asc'},
		{sortValue: 'release_date.desc', label: 'Release Date Dec'},
		{sortValue: 'revenue.asc', label: 'Revenue Asc'},
		{sortValue: 'revenue.desc', label: 'Revenue Dec'},
		{sortValue: 'primary_release_date.asc', label: 'Primary Release Date Asc'},
		{sortValue: 'primary_release_date.desc', label: 'Primary Release Date Dec'},
		{sortValue: 'original_title.asc', label: 'Original Title Asc'},
		{sortValue: 'original_title.desc', label: 'Original Title Dec'},
		{sortValue: 'vote_average.asc', label: 'Vote Average  Asc'},
		{sortValue: 'vote_average.desc', label: 'Vote Average  Dec'},
		{sortValue: 'vote_count.asc', label: 'Vote Count  Asc'},
		{sortValue: 'vote_count.desc', label: 'Vote Count  Dec'},
	];

	const genreData = [
		{genreValue: 'none', label: 'None'},
		{genreValue: 28, label: 'Action'},
		{genreValue: 12, label: 'Adventure'},
		{genreValue: 16, label: 'Animation'},
		{genreValue: 35, label: 'Comedy'},
		{genreValue: 80, label: 'Crime'},
		{genreValue: 99, label: 'Documentary'},
		{genreValue: 18, label: 'Drama'},
		{genreValue: 10751, label: 'Family'},
		{genreValue: 14, label: 'Fantasy'},
		{genreValue: 36, label: 'History'},
		{genreValue: 27, label: 'Horror'},
		{genreValue: 10402, label: 'Music'},
		{genreValue: 9648, label: 'Mystery'},
		{genreValue: 10749, label: 'Romance'},
		{genreValue: 878, label: 'Science Fiction'},
		{genreValue: 10770, label: 'TV Movie'},
		{genreValue: 53, label: 'Thriller'},
		{genreValue: 10772, label: 'War'},
		{genreValue: 37, label: 'Western'},
	];

	const [value, setValue] = useLocalStorage({page: 1, genre: 16, sort: 'revenue.desc'}, 'page');

	const {page, genre, sort} = value;

	const {data, isLoading} = useShowMovieListSingle(page, genre, sort);

	const onChangePage = (pageParam) => setValue({...value, page: pageParam});

	if (isLoading) return;

	return (
			<div>
				{sortData.map(({sortValue, label}) => {
					return <Button onClick={() => setValue({...value, sort: sortValue})} children={label}/>;
				})}

				{genreData.map(({genreValue, label}) => {
					return <Button onClick={() => setValue({...value, genre: genreValue})} children={label}/>;
				})}
				<Pagination initialPage={page} siblings={3} total={data?.data.total_pages} onChange={onChangePage} size="sm"
				            radius="xl"/>
				<Group position={'center'}>
					{data?.data.results.map(movie => <div style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
						width: 150,
						height: 150,
						margin: 10,
						backgroundSize: 'cover',
					}} key={movie.id} children={movie.title}/>)}
				</Group>
			</div>
	);
};
