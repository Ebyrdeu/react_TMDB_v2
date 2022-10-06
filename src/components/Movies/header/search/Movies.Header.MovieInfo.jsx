import {Image, Text} from "@mantine/core";

export const MovieInfo = ({data}) => {
	const {title, poster_path, release_date, vote_average} = data;
	return (
		<div>
			<Image radius={"md"}
			       fit={"cover"}
			       src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
			       alt={title}
			       height={140}
			       width={100}/>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<Text color="dimmed" size={"xs"} children={release_date}/>
				<Text color="dimmed" size={"xs"} children={vote_average}/>
			</div>
		</div>
	);
};