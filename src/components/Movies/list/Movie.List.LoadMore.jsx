import {IconChevronsDown} from "@tabler/icons";
import {createStyles, Text} from "@mantine/core";
import {useEffect, useRef} from "react";
import {useIntersection} from "@mantine/hooks";

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
	const containerRef = useRef();
	const {ref, entry} = useIntersection({
		root: containerRef.current,
		threshold: 1,
	});
	// Effects
	useEffect(() => {
		entry?.isIntersecting ? next() : null;
	}, [entry]);

	return (
		<div className={classes.wrapper} ref={ref}>
			<Text color={"dimmed"} children={"Scroll down to load more movies"}/>
			<IconChevronsDown/>
		</div>
	);
};

