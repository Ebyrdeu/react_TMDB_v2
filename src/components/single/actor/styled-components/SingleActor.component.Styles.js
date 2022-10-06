import {createStyles} from "@mantine/core";

export const useComponentStyles = createStyles((theme) => ({
	bg: {height: 100, background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]},

}));
