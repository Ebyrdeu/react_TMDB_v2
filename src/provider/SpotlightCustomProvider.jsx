import {useNavigate} from "react-router-dom";
import {useMovieSearch} from "../hooks/useMovieSearch.js";
import {useContext} from "react";
import {SearchContext} from "../context/Search.context.jsx";
import {MovieInfo} from "../components/Movies/header/search/Movies.Header.MovieInfo.jsx";
import {SpotlightProvider} from "@mantine/spotlight";
import {IconSearch} from "@tabler/icons";

export const SpotlightCustomProvider = ({children}) => {
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
				return dispatch({type: "SEARCH", payload: search});
			}}
			centered
			overlayBlur={10}
			highlightQuery
			searchPlaceholder="Search..."
			shortcut="mod + k"
			nothingFoundMessage="Nothing found...">
			{children}
		</SpotlightProvider>
	);
};

