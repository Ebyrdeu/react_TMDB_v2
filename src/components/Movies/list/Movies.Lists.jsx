import {useContext} from 'react';
import {TogglesContext} from '../../../context/Toggles.context.jsx';
import {TypeOne} from './types/Movies.List.TypeOne.jsx';
import {TypeThree} from './types/Movies.List.TypeThree.jsx';
import {TypeTwo} from './types/Movies.List.TypeTwo.jsx';
import {LoadMore} from './Movie.List.LoadMore';
import {useShowMovieListMulti} from '../../../hooks/useShowMovieListMulti.js';

export const MoviesLists = () => {
	const {data, isLoading, fetchNextPage} = useShowMovieListMulti();
	const {showListType} = useContext(TogglesContext);

	if (isLoading) return;

	return (
			<div>
				<div style={{marginBottom: 120}}>
					{showListType === 1 ? <TypeOne data={data}/> : null}
					{showListType === 2 ? <TypeTwo data={data}/> : null}
					{showListType === 3 ? <TypeThree data={data}/> : null}
				</div>

				<LoadMore next={fetchNextPage}/>
			</div>
	);
};

