import {BackgroundAnimations} from "../components/other/backgroundAnimations/BackgroundAnimations.component.jsx";
import {MoviesHeader} from "../components/Movies/Movies.Header";
import {MoviesLists} from "../components/Movies/Movies.Lists";

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

