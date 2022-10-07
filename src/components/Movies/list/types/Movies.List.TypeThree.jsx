import {Container, Group, Progress, ScrollArea, Table, Text} from "@mantine/core";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useTypeThreeStyles} from "./styled-components/Movie.List.TypeThree.styles.js";

export const TypeThree = ({data}) => {
	const {classes, theme} = useTypeThreeStyles(undefined, undefined);

	const rows = data?.pages.map(({data}) => {

		return data.results.map(({id, title, poster_path, vote_average, vote_count}) => {
			const totalReviews = vote_average + (10 - vote_average);
			const positiveReviews = (vote_average / totalReviews) * 100;
			const negativeReviews = ((10 - vote_average) / totalReviews) * 100;

			return (
				<motion.tr className="container"
				           whileHover={{scale: 1.01, zIndex: 999}}
				           whileTap={{scale: 0.99, zIndex: 999}}
				           key={id}
				           sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
					<td>
						<Link to={`info/movie/${id}`} className={classes.link}>
							<img className={classes.posterImage} src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
							     alt={title}/>
						</Link>
					</td>
					<td>
						<Link to={`info/movie/${id}`} className={classes.link}>
							<Text size="md" className={classes.title} weight={500}>{title}</Text>
						</Link>
					</td>
					<td>{vote_count}</td>
					<td>
						<Group position="apart">
							<Text size="xs" color="teal" weight={700}>
								{positiveReviews.toFixed(0)}%
							</Text>
							<Text size="xs" color="red" weight={700}>
								{negativeReviews.toFixed(0)}%
							</Text>
						</Group>
						<Progress
							classNames={{bar: classes.progressBar}}
							sections={[{
								value: positiveReviews,
								color: theme.colorScheme === "dark" ? theme.colors.teal[9] : theme.colors.teal[6],
							}, {
								value: negativeReviews,
								color: theme.colorScheme === "dark" ? theme.colors.red[9] : theme.colors.red[6],
							}]}
						/>
					</td>
				</motion.tr>

			);
		});

	});

	return (<Container>
		<ScrollArea>
			<Table sx={{minWidth: 800}} verticalSpacing="xs">
				<thead>
				<tr>
					<th>Poster</th>
					<th>Title</th>
					<th>Votes</th>
					<th>Rating</th>
				</tr>
				</thead>
				<tbody>{rows}</tbody>
			</Table>
		</ScrollArea>
	</Container>);
};

