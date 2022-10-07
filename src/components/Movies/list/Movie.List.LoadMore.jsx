import {IconChevronsDown} from "@tabler/icons";
import {createStyles, Text} from "@mantine/core";
import {useEffect} from "react";

const useStyles = createStyles(() => ({
	wrapper: {
		userSelect: "none",
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		alignItems: "center",
		marginBottom: 20,
	},
}));

export const LoadMore = ({next}) => {
	const {classes} = useStyles(undefined, undefined);
	// Detect Bottom of screen
	const onFindBottom = (e) => (window.innerHeight + e.target.documentElement.scrollTop >= e.target.documentElement.scrollHeight) ? next() : null;

	// Effects
	useEffect(() => {
		window.addEventListener("scroll", onFindBottom);
		return () => window.removeEventListener("scroll", onFindBottom);
	});

	return (
		<div className={classes.wrapper}>
			<Text color={"dimmed"} children={"Scroll down to load more movies"}/>
			<IconChevronsDown/>
		</div>
	);
};

