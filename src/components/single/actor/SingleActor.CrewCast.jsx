import {Card, Group, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useActorCrewCastStyles} from "../styled-components/SingleActor.CrewCast.Styles.js";

export const CrewCast = ({data}) => {
	const {classes} = useActorCrewCastStyles(undefined, undefined);
	const {title, job, poster_path, id, character} = data;

	return (
		<Link to={`/info/movie/${id}`} className={classes.link}>
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
					     style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}/>
					<div className={classes.overlay}/>

					<div className={classes.content}>
						<div>
							<Text size="lg" className={classes.title} weight={500} children={title}/>

							<Group position="apart" spacing="xs">
								<Text size="sm" className={classes.author}
								      children={job === undefined ? character : job}/>
							</Group>
						</div>
					</div>
				</Card>
			</motion.div>
		</Link>
	);
};

