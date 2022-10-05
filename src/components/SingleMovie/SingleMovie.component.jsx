import {Link, useParams} from "react-router-dom";
import {useShowSingleMovie} from "../../hooks/useShowSingleMovie.js";
import {Button, Container, Image} from "@mantine/core";
import {Top} from "./SingleMovie.Top";
import {Bottom} from "./SingleMovie.Bottom";
import {IconCheck, IconArrowLeft} from "@tabler/icons";

export const SingleMovie = () => {

	const {id} = useParams();
	const {data, isLoading} = useShowSingleMovie(id);


	if (isLoading) return;

	return (
		<>
			<Image src={`https://image.tmdb.org/t/p/w500/${data?.data.backdrop_path}`} height={400}/>
			<Link to={`/`}>
				<Button
					variant="filled"
					leftIcon={<IconArrowLeft size={20} stroke={2}/>}
					radius="xs"
					size="md"
					styles={{
						root: {
							marginLeft: 10,
							paddingRight: 14,
							height: 48,
							position: "absolute",
							top: '375px',
							right: '20px',
							zIndex: 9999
						},
						rightIcon: {marginLeft: 5},
					}}
					children={'Back'}/>
			</Link>
			<Container size={"xl"}>
				<Top data={data}/>
				<Bottom/>
			</Container>
		</>
	);
};

