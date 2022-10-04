import {ActionIcon, Group, Tooltip, useMantineColorScheme} from "@mantine/core";
import {IconLayoutGrid, IconMoonStars, IconSun, IconList, IconGridDots} from "@tabler/icons";
import {useContext} from "react";
import {TogglerContext} from "../../context/Toggler.context.jsx";

export const Toggles = () => {
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const {dispatch} =  useContext(TogglerContext);

	const onListChangeHandler = (listType) => dispatch({type: listType})

	return (
		<Group position="center" my="xl">

			{/*List Change*/}
			<Tooltip label={'Show Big Grid'}>
				<ActionIcon
					onClick={() => onListChangeHandler('BIG_GRID')}
					variant="transparent" children={<IconLayoutGrid size={18}/>}/>
			</Tooltip>
			<Tooltip label={'Show Medium Grid'}>
				<ActionIcon
					onClick={() => onListChangeHandler('MEDIUM_GRID')}
					variant="transparent" children={<IconGridDots size={18}/>}/>
			</Tooltip>
			<Tooltip label={'Show List'}>
				<ActionIcon
					onClick={() => onListChangeHandler('SMALL_GRID')}
					variant="transparent" children={<IconList size={18}/>}/>
			</Tooltip>

			{/*Dark Mode*/}
			<Tooltip label={"mod+J"}>
				<ActionIcon
					onClick={() => toggleColorScheme()}
					size="lg"
					sx={(theme) => ({
						backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
						color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
					})}>
					{colorScheme === "dark" ? <IconSun size={18}/> : <IconMoonStars size={18}/>}
				</ActionIcon>

			</Tooltip>
		</Group>
	);
};

