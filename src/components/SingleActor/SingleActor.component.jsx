import {useNavigate, useParams} from "react-router-dom";

import {Button, Container, createStyles} from "@mantine/core";
import {Top} from "./SingleActor.Top.jsx";
import {Bottom} from "./SingleActor.Bottom.jsx";
import {IconArrowLeft} from "@tabler/icons";
import {useShowSingleActor} from "../../hooks/useShowSingleActor.js";

const useStyles = createStyles((theme) => ({
	bg: {height: 100, background: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0]},

}));

export const SingleActor = () => {
	const {id} = useParams();
	const {data, isLoading} = useShowSingleActor(id);
	const navigate = useNavigate();
	const {classes} = useStyles(undefined, undefined);
	if (isLoading) return;

	return (
		<>

			<Button
				onClick={() => navigate(-1)}
				variant="filled"
				leftIcon={<IconArrowLeft size={20} stroke={2}/>}
				radius="xs"
				size="md"
				styles={{
					root: {
						marginLeft: 10, paddingRight: 14, height: 48,
						position: "absolute", top: "75px", right: "20px",
						zIndex: 9999,
					},
					rightIcon: {marginLeft: 5},
				}}
				children={"Back"}/>

			<div className={classes.bg}/>
			<Container size={"xl"}>
				<Top data={data}/>
				<Bottom/>
			</Container>
		</>
	);
};

