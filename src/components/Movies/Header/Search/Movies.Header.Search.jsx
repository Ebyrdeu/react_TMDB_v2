import {ActionIcon, createStyles, Group, Image, Tooltip} from "@mantine/core";
import {IconSearch} from "@tabler/icons";
import {openSpotlight, SpotlightProvider} from "@mantine/spotlight";
import {useMovieSearch} from "../../../../hooks/useMovieSearch.js";
import {useContext, useState} from "react";
import {SearchContext} from "../../../../context/Search.Context.jsx";
import {useNavigate} from "react-router-dom";

const SpotlightControl = () => {
	return (
		<Group position="center">
			<Tooltip label={"mod + k"}>
				<ActionIcon onClick={() => openSpotlight()} variant="transparent" children={<IconSearch size={16}/>}/>
			</Tooltip>
		</Group>
	);
};

const useStyles = createStyles((theme) => ({
	searchCode: {
		fontWeight: 700,
		fontSize: 10,
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0],
		border: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[2]
		}`,
	},

}));

export const Search = () => {
	const {classes} = useStyles(undefined, undefined);
	const navigate = useNavigate()
	const {data, isLoading, fetchNextPage} = useMovieSearch();
	const {dispatch} = useContext(SearchContext);
	const [searchValue, setSearchValue] = useState(null);
	if (isLoading) return;

	const item = data?.pages.map(data => {
		return data?.data.results.map(({title, overview, poster_path, id}) => ({
			title,
			description: overview,
			icon: <Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} height={100} width={100}/>,
			onTrigger: () => {
				dispatch({type: "SEARCH", payload: null});
				navigate(`info/movie/${id}`);
			},

		}));
	});

	return (

		<SpotlightProvider
			actions={item[0]}
			searchIcon={<IconSearch size={18}/>}
			onQueryChange={(search) => {
				if(search === '') return 	dispatch({type: 'SEARCH', payload: null});
				dispatch({type: 'SEARCH', payload: search})
			}}
			highlightQuery
			searchPlaceholder="Search..."
			shortcut="mod + k"
			nothingFoundMessage="Nothing found...">
			<SpotlightControl/>
		</SpotlightProvider>
	);
};

