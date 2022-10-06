import {createStyles} from "@mantine/core";

export const useMovieTopStyles = createStyles(() => ({
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