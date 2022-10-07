import {createStyles} from "@mantine/core";

export  const useTypeTwoStyles = createStyles((theme) => ({
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
	wrapper: {
		display: "flex",
		justifyContent: "center",
		flexWrap: "wrap",
	},
	link: {
		textDecoration: "none",
	},
}));

export const typeTwoContainer = {
	hidden: {opacity: 1, scale: 0},
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.08,
		},
	},
};

export const typeTwoItem = {
	hidden: {y: 20, opacity: 0},
	visible: {
		y: 0,
		opacity: 1,
	},
};