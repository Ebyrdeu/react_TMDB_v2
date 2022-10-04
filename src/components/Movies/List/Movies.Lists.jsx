import {useShowMovieList} from "../../../hooks/useShowMovieList.js";
import {useContext} from "react";
import {TogglerContext} from "../../../context/Toggler.context.jsx";
import {TypeOne} from "./Types/Movies.List.TypeOne.jsx";
import {TypeThree} from "./Types/Movies.List.TypeThree.jsx";
import {TypeTwo} from "./Types/Movies.List.TypeTwo.jsx";
import {LoadMore} from "./Movie.List.LoadMore";

export const MoviesLists = () => {
	const {data, isLoading, fetchNextPage} = useShowMovieList();
	const {showListType} = useContext(TogglerContext);

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
