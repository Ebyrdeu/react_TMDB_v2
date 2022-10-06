import {Card, createStyles, Group, Text} from "@mantine/core";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const useStyles = createStyles((theme, _params, getRef) => {
	const image = getRef("image");

	return {
		card: {
			position: "relative",
			height: 280,
			width: 180,
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		},

		image: {
			ref: image,
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundSize: "cover",
		},

		overlay: {
			position: "absolute",
			top: "20%",
			left: 0,
			right: 0,
			bottom: 0,
			backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)",
		},

		content: {
			height: "100%",
			position: "relative",
			display: "flex",
			flexDirection: "column",
			justifyContent: "flex-end",
			zIndex: 1,
		},

		title: {
			color: theme.white,
			marginBottom: 5,
		},

		bodyText: {
			color: theme.colors.dark[2],
			marginLeft: 7,
		},

		author: {
			color: theme.colors.dark[2],
		},
		link: {
			textDecoration: "none",
		},
		castWrapper: {
			display: "flex",
			flexWrap: "wrap",
			justifyContent: "center",
		},
	};
});

export const CrewCast = ({data}) => {
	const {classes} = useStyles(undefined, undefined);
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
