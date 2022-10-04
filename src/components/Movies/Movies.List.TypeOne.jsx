import {IconEye, IconStar} from "@tabler/icons";
import {Card, Center, Container, createStyles, Group, Text} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
	const image = getRef("image");

	return {
		card: {
			position: "relative",
			height: 380,
			width: 420,
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],

			[`&:hover .${image}`]: {
				transform: "scale(1.03)",
			},
		},

		image: {
			ref: image,
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundSize: "cover",
			transition: "transform 500ms ease",
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

		date: {
			color: theme.colors.dark[2],
		},

		wrapper: {
			display: 'flex',
			justifyContent: "center",
			flexWrap: 'wrap'
		},
	};
});

export const TypeOne = ({data}) => {
	const {classes, theme} = useStyles(undefined, undefined);

	const items = data?.pages.map(({data}) =>
		data.results.map(({id, title, poster_path, vote_average, vote_count, release_date}) => {
			return (
				<Card
					key={id}
					p="lg"
					m="md"
					shadow="lg"
					className={classes.card}
					radius="md"
					component="a"
					target="_blank">
					<div className={classes.image}
					     style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})`}}/>
					<div className={classes.overlay}/>

					<div className={classes.content}>
						<div>
							<Text size="lg" className={classes.title} weight={500}>{title}</Text>

							<Group position="apart" spacing="xs">
								<Text size="sm" className={classes.date}>{release_date}</Text>

								<Group spacing="lg">
									<Center>
										<IconEye size={16} stroke={1.5} color={theme.colors.dark[2]}/>
										<Text size="sm" className={classes.bodyText} children={vote_count}/>
									</Center>
									<Center>
										<IconStar size={16} stroke={1.5} color={theme.colors.dark[2]}/>
										<Text size="sm" className={classes.bodyText} children={vote_average}/>
									</Center>
								</Group>
							</Group>
						</div>
					</div>
				</Card>
			);
		}));

	return (
		<div className={classes.wrapper}>
			{items}
		</div>
	);
};

