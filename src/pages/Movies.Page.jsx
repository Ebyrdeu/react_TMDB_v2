import {BackgroundAnimations} from "../components/other/backgroundAnimations/BackgroundAnimations.component.jsx";
import {MoviesHeader} from "../components/Movies/Header/Movies.Header.jsx";
import {MoviesLists} from "../components/Movies/List/Movies.Lists.jsx";

export const MoviesPage = () => {
	return (
		<>
			{/*TOP CENTER FUNCTIONS*/}
			<MoviesHeader/>
			{/*TOP LEFT CORNER ANIMATION*/}
			<BackgroundAnimations/>

			<MoviesLists/>
		</>
	);
};

