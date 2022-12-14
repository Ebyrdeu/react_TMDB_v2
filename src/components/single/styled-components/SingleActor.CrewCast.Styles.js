import {createStyles} from "@mantine/core";

export const useActorCrewCastStyles = createStyles((theme, _params, getRef) => {
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