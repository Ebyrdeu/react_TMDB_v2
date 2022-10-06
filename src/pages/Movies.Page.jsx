import {BackgroundAnimations} from "../components/other/backgroundAnimations/BackgroundAnimations.component.jsx";
import {MoviesHeader} from "../components/Movies/header/Movies.Header.jsx";
import {MoviesLists} from "../components/Movies/list/Movies.Lists.jsx";

export const MoviesPage = () => {
	return (
		<>
			<MoviesHeader/>
			<BackgroundAnimations/>
			<MoviesLists/>
		</>
	);
};

