import {Card, Center, Group, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {IconEye, IconStar} from "@tabler/icons";
import {useActorCrewCastStyles} from "../styled-components/SingleActor.CrewCast.Styles.js";

export const CrewCastCard = ({data}) => {
	const {classes, theme} = useActorCrewCastStyles(undefined, undefined);
	const {name, job, profile_path, id, character, poster_path, title, release_date, vote_count, vote_average} = data;

	return (
		<Link to={title === undefined ? `/info/actor/${id}` : `/info/movie/${id}`} className={classes.link}>
			<motion.div
				className="container"
				whileHover={{scale: 1.2, rotate: 5, zIndex: 999}}
				whileTap={{scale: 0.98, rotate: -5, zIndex: 999}}>
				<Card
					p="lg"
					m={"xs"}
					shadow="lg"
					className={classes.card}
					radius="md">
					<div className={classes.image}
					     style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${profile_path === undefined ? poster_path : profile_path})`}}/>
					<div className={classes.overlay}/>

					<div className={classes.content}>
						<div>
							<Text size="lg" className={classes.title} weight={500}
							      children={character === undefined ? title === undefined ? name : title : character}/>

							<Group position="apart" spacing="xs">
								<Text size="sm" className={classes.author}
								      children={job === undefined ? release_date === undefined ? name : release_date : job}/>
							</Group>

							{release_date !== undefined ?
								<Group spacing="lg">
									<Center>
										<IconEye size={16} stroke={1.5} color={theme.colors.dark[2]}/>
										<Text size="sm" className={classes.bodyText} children={vote_count}/>
									</Center>
									<Center>
										<IconStar size={16} stroke={1.5} color={theme.colors.dark[2]}/>
										<Text size="sm" className={classes.bodyText}
										      children={Math.round(vote_average * 10) / 10}/>
									</Center>
								</Group> : null
							}
						</div>
					</div>
				</Card>
			</motion.div>
		</Link>
	);
};

