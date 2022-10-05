import {useParams} from "react-router-dom";
import {SingleMovie} from "../components/SingleMovie/SingleMovie.component";
import {SingleActor} from "../components/SingleActor/SingleActor.component.jsx";

export const MoreInfoPage = () => {
	const {type} = useParams();

	return type === "movie" ? <SingleMovie/> : <SingleActor/>;
};

