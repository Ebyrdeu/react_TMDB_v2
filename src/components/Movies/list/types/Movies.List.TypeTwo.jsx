import {Badge, Card, Container, Group, Image, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {typeTwoContainer, typeTwoItem, useTypeTwoStyles} from "./styled-components/Movie.List.TypeTwo.styles.js";

export const TypeTwo = ({data}) => {
	const {classes} = useTypeTwoStyles(undefined, undefined);
	const items = data?.pages.map(({data}) =>
		data.results.map(({id, title, poster_path, vote_average, vote_count, release_date, overview}) =>
			(
				<Link key={id} to={`info/movie/${id}`} className={classes.link}>
					<motion.div className="item" variants={typeTwoItem}>
						<motion.div className="container"
						            whileHover={{scale: 1.1, zIndex: 999}}
						            whileTap={{scale: 0.98, zIndex: 999}}>
							<Card m={"md"} withBorder radius="md" className={classes.card}>
								<Card.Section>
									<Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}
									       height={180}/>
								</Card.Section>

								<Badge className={classes.rating} variant="gradient"
								       gradient={{from: "yellow", to: "red"}}
								       children={`Rating: ${vote_average}`}/>

								<Text className={classes.title} weight={500} children={title}/>
								<Text size="sm" color="dimmed" lineClamp={4} children={overview}/>

								<Card.Section className={classes.footer}>
									<Group position="apart">
										<Text size="xs" color="dimmed" children={`Votes : ${vote_count}`}/>
										<Text size="xs" color="dimmed" children={`Release : ${release_date}`}/>
									</Group>
								</Card.Section>
							</Card>
						</motion.div>
					</motion.div>
				</Link>
			),
		));

	return (
		<Container size={"xl"} className={classes.wrapper}>
			<motion.div
				className={`${classes.wrapper}`}
				variants={typeTwoContainer}
				initial="hidden"
				animate="visible">
				{items}
			</motion.div>
		</Container>
	);
};

