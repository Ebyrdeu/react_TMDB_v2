import {Center, createStyles, Image, RingProgress, Text, Badge} from "@mantine/core";
import {IconCalendar, IconThumbUp} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
	wrapper: {
		display: "flex",
		alignItems: "start",
		"@media (max-width: 800px)": {
			flexWrap: "wrap",
			alignItems: "center",
			flexDirection: "column",
		},
	},

	iconsWrapper: {
		display: "flex",
		justifyContent: "space-between",
	},
	titleWrapper: {
		display: "flex",
		alignItems: "center",
		paddingTop: 20,
	},

	description: {
		width: 800,
		maxWidth: "100%",
		paddingLeft: 30,

	},
	icons: {
		display: "flex",
		alignItems: "center",
	},

}));

export const Top = ({data}) => {
	const {classes} = useStyles(undefined, undefined);
	const {title, overview, poster_path, genres, release_date, vote_average, vote_count} = data?.data;

	const genre = genres.map(({name, id}) => <Badge key={id} mr={5} mt={15} children={name}/>)

	return (
		<div className={classes.wrapper}>
			<div>
				<Image src={`https://image.tmdb.org/t/p/w500/${poster_path}`} height={320} width={215} radius="md"
				       mt="-140px"/>

				<div className={classes.iconsWrapper}>

					<div className={classes.icons}>
						<IconCalendar size={16}/>
						<Text ml={5} size="md" color="dimmed" children={release_date}/>
					</div>

					<div className={classes.icons}>
						<IconThumbUp size={16}/>
						<Text ml={5} size="md" color="dimmed" children={vote_count}/>
					</div>

				</div>
			</div>

			<div className={classes.description}>
				<div className={classes.titleWrapper}>
					<RingProgress
						mr={10}
						size={40}
						roundCaps
						thickness={2}
						sections={[{value: vote_average * 10, color: "#1469b2"}]}
						label={
							<Center>
								<Text size="xs" color="dimmed" children={`${(vote_average * 10) | 0}%`}/>
							</Center>
						}
					/>

					<Text size="xl" className={classes.title} weight={500} children={title}/>
				</div>
				<Text size="md" color="dimmed" children={overview} pt={20}/>
				{genre}
			</div>

		</div>
	);
};

