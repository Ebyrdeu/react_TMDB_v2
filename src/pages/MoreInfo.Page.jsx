import {useParams} from "react-router-dom";
import {SingleMovie} from "../components/single/movie/SingleMovie.component";
import {SingleActor} from "../components/single/actor/SingleActor.component.jsx";

export const MoreInfoPage = () => {
	const {type} = useParams();

	return type === "movie" ? <SingleMovie/> : <SingleActor/>;
};

