import {createStyles} from "@mantine/core";

export const useMovieTopStyles = createStyles((theme) => ({
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
	bg : {
		background: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[0],
		height: 320, width: 215,
		marginTop: -140,
		borderRadius: 8,
		position: 'relative',
	}
}));