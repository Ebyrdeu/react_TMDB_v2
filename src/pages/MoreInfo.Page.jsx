import {useParams} from "react-router-dom";
import {SingleMovie} from "../components/single/movie/SingleMovie.Component.jsx";
import {SingleActor} from "../components/single/actor/SingleActor.Component.jsx";

export const MoreInfoPage = () => {
	const {type} = useParams();

	return type === "movie" ? <SingleMovie/> : <SingleActor/>;
};

