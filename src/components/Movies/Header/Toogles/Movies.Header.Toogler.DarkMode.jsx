import {ActionIcon, Tooltip, useMantineColorScheme} from "@mantine/core";
import {IconMoonStars, IconSun} from "@tabler/icons";

export const DarkMode = () => {
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	return (
		<>
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
		</>
	);
};

