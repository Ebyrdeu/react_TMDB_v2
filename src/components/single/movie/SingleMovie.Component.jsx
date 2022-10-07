import {useNavigate, useParams} from "react-router-dom";
import {useShowSingleMovie} from "../../../hooks/useShowSingleMovie.js";
import {Button, Container, Image} from "@mantine/core";
import {Top} from "./SingleMovie.Top.jsx";
import {Bottom} from "./SingleMovie.Bottom.jsx";
import {IconArrowLeft} from "@tabler/icons";
import {useMovieComponentStyles} from "./styled-components/SingleMovie.Component.Styles.js";

export const SingleMovie = () => {

	const {id} = useParams();
	const {data, isLoading} = useShowSingleMovie(id);
	const {classes} = useMovieComponentStyles(undefined, undefined)
	const navigate = useNavigate();

	if (isLoading) return;

	return (
		<>
			{!data?.data.backdrop_path  ? <div className={classes.bg}/> : <Image src={`https://image.tmdb.org/t/p/w500/${data?.data.backdrop_path}`} height={400}/>}
			<Button
				onClick={() => navigate(-1)}
				variant="filled"
				leftIcon={<IconArrowLeft size={20} stroke={2}/>}
				radius="xs"
				size="md"
				styles={{
					root: {
						marginLeft: 10, paddingRight: 14, height: 48,
						position: "absolute", top: "375px", right: "20px",
						zIndex: 9999,
					},
					rightIcon: {marginLeft: 5},
				}}
				children={"Back"}/>
			<Container size={"xl"}>
				<Top data={data}/>
				<Bottom/>
			</Container>
		</>
	);
};

