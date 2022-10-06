import {IconSearch} from "@tabler/icons";
import {SpotlightProvider} from "@mantine/spotlight";
import {useMovieSearch} from "../../../../hooks/useMovieSearch.js";
import {useContext} from "react";
import {SearchContext} from "../../../../context/Search.Context.jsx";
import {useNavigate} from "react-router-dom";
import {ControlButton} from "./Movies.Header.ControlButton.jsx";
import {MovieInfo} from "./Movies.Header.MovieInfo.jsx";

export const Search = () => {

	// Hooks
	const navigate = useNavigate();
	const {data, isLoading} = useMovieSearch();
	const {dispatch} = useContext(SearchContext);

	// Render Card info
	const item = data?.pages.map(data => {
		return data?.data.results.map((movieInfoData) => ({
			title: movieInfoData.title,
			description: movieInfoData["overview"],
			icon: <MovieInfo data={movieInfoData}/>,
			onTrigger: () => {
				dispatch({type: "SEARCH", payload: null});
				navigate(`info/movie/${movieInfoData.id}`);
			},

		}));
	});

	// The Idea is it ony will be usable on Home/main page
	return (
		<SpotlightProvider
			actions={isLoading ? [] : item[0]}
			searchIcon={<IconSearch size={18}/>}
			onQueryChange={(search) => {
				// probably it has better solution but, if it works, it works
				if (search === "") return dispatch({type: "SEARCH", payload: null});
				dispatch({type: "SEARCH", payload: search});
			}}
			highlightQuery
			searchPlaceholder="Search..."
			shortcut="mod + k"
			nothingFoundMessage="Nothing found...">

			<ControlButton/>
		</SpotlightProvider>
	);
};

