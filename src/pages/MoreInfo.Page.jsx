import {useParams} from "react-router-dom";

export const MoreInfoPage = () => {
	const {type} = useParams();

	return  type === 'movies' ? <>movies</>
	 : 'actors'
};

