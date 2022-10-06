import {useContext, useState} from "react";
import {SortContext} from "../../../../context/Sort.context.jsx";
import {NativeSelect} from "@mantine/core";

export const Sort = () => {
	const [genreData, setGenreData] = useState([
		{value: 'none', label: "None"},
		{value: "popularity.asc", label: "Popularity Asc"},
		{value: "popularity.desc", label: "Popularity Dec"},
		{value: "release_date.asc", label: "Release Date Asc"},
		{value: "release_date.desc", label: "Release Date Dec"},
		{value: "revenue.asc", label: "Revenue Asc"},
		{value: "revenue.desc", label: "Revenue Dec"},
		{value: "primary_release_date.asc", label: "Primary Release Date Asc"},
		{value: "primary_release_date.desc", label: "Primary Release Date Dec"},
		{value: "original_title.asc", label: "Original Title Asc"},
		{value: "original_title.desc", label: "Original Title Dec"},
		{value: "vote_average.asc", label: "Vote Average  Asc"},
		{value: "vote_average.desc", label: "Vote Average  Dec"},
		{value: "vote_count.asc", label: "Vote Count  Asc"},
		{value: "vote_count.desc", label: "Vote Count  Dec"},
	]);
	const {dispatch} = useContext(SortContext);

	return (
		<>
			<NativeSelect
				data={genreData}
				onChange={(e) => dispatch({type: "SORT", payload: e.target.value})}
				placeholder="Pick one"
			/>
		</>
	);
};

