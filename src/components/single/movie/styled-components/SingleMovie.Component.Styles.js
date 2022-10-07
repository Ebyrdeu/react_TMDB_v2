import {createStyles} from "@mantine/core";

export const useMovieComponentStyles = createStyles((theme) => ({
	bg: {height: 400, background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]},

}));
