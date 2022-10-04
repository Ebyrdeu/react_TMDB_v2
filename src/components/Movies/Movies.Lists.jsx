import {useShowMovieList} from "../../hooks/useShowMovieList.js";
import {useContext, useState} from "react";
import {TogglerContext} from "../../context/Toggler.context.jsx";
import {TypeOne} from "./Movies.List.TypeOne.jsx";
import {TypeThree} from "./Movies.List.TypeThree.jsx";


export const MoviesLists = () => {
	const {data, isLoading, fetchNextPage} = useShowMovieList();
	const {showListType} = useContext(TogglerContext)



	return (
		<div>
			<div style={{marginBottom: 120}}>
				{showListType === 1 ? <TypeOne data={data}/>: null}
				{showListType === 2 ? <TypeOne data={data}/>: null}
				{showListType === 3 ? <TypeThree data={data}/>: null}
			</div>
			<button onClick={fetchNextPage}>Fetch </button>
		</div>
	);
};

