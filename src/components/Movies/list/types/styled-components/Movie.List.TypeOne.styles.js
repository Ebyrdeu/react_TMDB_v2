import {createStyles} from "@mantine/core";

export const useTypeOneStyles = createStyles((theme, _params, getRef) => {
	const image = getRef("image");

	return {

		card: {
			position: "relative",
			height: 380,
			width: 420,
			maxWidth: '100%',
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
			display: "flex",
			justifyContent: "center",
			alignItems: 'center',
			flexWrap: "wrap",
		},
		link: {
			textDecoration: "none",
		},

	};
});

export const typeOneContainer = {
	hidden: {opacity: 1, scale: 0},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.01,
		},
	},
};

export const typeOneItem = {
	hidden: {y: 20, opacity: 0},
	visible: {
		y: 0,
		opacity: 1,
	},
};
