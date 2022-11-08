import {useShowMovieListSingle} from '../hooks/UseShowMovieListSingle.js';
import {Button, Group, Pagination} from '@mantine/core';
import {useLocalStorage} from '../hooks/useLocalStorage.js';
import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {TypeOneSingle} from '../components/Movies/list/types/TypeOne.Single.jsx';

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

export const JustToPassAssigment = () => {
  const [value, setValue] = useLocalStorage({genre: 16, sort: 'revenue.desc'}, 'genre_sort');
  const [searchParams, setSearchParams] = useSearchParams({page: '1'});

  const page = Number(searchParams.get('page')); // convert to number type

  const {genre, sort} = value; //  local storage
  const {data, isLoading} = useShowMovieListSingle(page, genre, sort); // query

  // Handlers
  const onChangePage = (pageParam) => setSearchParams({page: pageParam}); // change page

  // TEST
  if (isLoading) return;

  return (
      <>
        <Group position={'center'} my={'xl'} children={sortData.map(
            ({sortValue, label}) => <Button key={label} sx={{width: 200}} onClick={() => setValue({...value, sort: sortValue})}
                                            children={label}/>)}/>


        <Group position={'center'} mb={'xl'} children={genreData.map(
            ({genreValue, label}) => <Button key={label} sx={{width: 200}} onClick={() => setValue({...value, genre: genreValue})}
                                             children={label}/>)}/>


        <Group position={'center'}
               children={<Pagination initialPage={page} siblings={3} total={data?.data.total_pages} onChange={onChangePage}
                                     size="md"/>}/>

        <Group position={'center'} my={'xl'}>
          <TypeOneSingle data={data}/>
        </Group>
        <Group position={'center'}
               my={'xl'}
               children={<Pagination initialPage={page} siblings={3} total={data?.data.total_pages} onChange={onChangePage} size="md"/>}/>
      </>
  );
};
