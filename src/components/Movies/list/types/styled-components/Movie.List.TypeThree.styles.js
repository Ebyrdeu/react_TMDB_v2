import {createStyles} from "@mantine/core";

export const useTypeThreeStyles = createStyles((theme) => ({
	progressBar: {
		"&:not(:first-of-type)": {
			borderLeft: `3px solid ${theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white}`,
		},
	}, posterImage: {
		width: 50,
	},
	link: {
		textDecoration: "none",
		color: `${theme.colorScheme !== "dark" ? theme.colors.dark[6] : theme.white}`
	},
}));