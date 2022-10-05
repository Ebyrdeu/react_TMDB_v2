import {createStyles, Image, Text} from "@mantine/core";

const useStyles = createStyles(() => ({
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
	const {biography, profile_path, name, birthday, gender} = data?.data;

	return (
		<div className={classes.wrapper}>
			<div>
				<Image src={`https://image.tmdb.org/t/p/w500/${profile_path}`} height={320} width={215} radius="md"
				       mt="-40px"/>

				<div className={classes.iconsWrapper}>
					<Text ml={5} size="md" color="dimmed" children={birthday}/>
					<Text ml={5} size="md" color="dimmed" children={gender === 1 ? "female" : "male"}/>
				</div>
			</div>

			<div className={classes.description}>
				<Text size="xl" className={classes.title} weight={500} children={name}/>
				<Text size="md" color="dimmed" children={biography} lineClamp={10} pt={20}/>
			</div>

		</div>
	);
};

