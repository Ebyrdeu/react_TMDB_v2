import {Badge, Card, Container, createStyles, Group, Image, Text} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	card: {
		position: "relative",
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
		width: 300,
	},

	rating: {
		position: "absolute",
		top: theme.spacing.xs,
		right: theme.spacing.xs + 2,
		pointerEvents: "none",
	},

	title: {
		display: "block",
		marginTop: theme.spacing.md,
		marginBottom: theme.spacing.xs / 2,
	},

	action: {
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
		...theme.fn.hover({
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
		}),
	},

	footer: {
		padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
		marginTop: theme.spacing.md,
		borderTop: `1px solid ${
			theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},
	wrapper :{
		display: "flex",
		justifyContent: "center",
		flexWrap: 'wrap'
	}
}));

export const TypeTwo = ({data}) => {
	const {classes} = useStyles(undefined, undefined);
	const items = data?.pages.map(({data}) =>
		data.results.map(({id, title, poster_path, vote_average, vote_count, release_date, overview}) => {
			return (
				<Card key={id} m={"md"} withBorder radius="md" className={classes.card}>
					<Card.Section>
						<Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} height={180}/>
					</Card.Section>

					<Badge className={classes.rating} variant="gradient" gradient={{from: "yellow", to: "red"}}
					       children={`Rating: ${vote_average}`}/>

					<Text className={classes.title} weight={500} component="a" children={title}/>
					<Text size="sm" color="dimmed" lineClamp={4} children={overview}/>

					<Card.Section className={classes.footer}>
						<Group position="apart">
							<Text size="xs" color="dimmed" children={`Votes : ${vote_count}`}/>
							<Text size="xs" color="dimmed" children={`Release : ${release_date}`}/>
						</Group>
					</Card.Section>
				</Card>
			);
		}));

	return (
		<Container size={"xl"} className={classes.wrapper}>
			{items}
		</Container>
	);
};

