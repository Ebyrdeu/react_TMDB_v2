import {Link, useParams} from "react-router-dom";
import {SingleMovie} from "../components/SingleMovie/SingleMovie.component";

export const MoreInfoPage = () => {
	const {type} = useParams();

	return  type === 'movie' ? <SingleMovie/> : 'actors'
};

