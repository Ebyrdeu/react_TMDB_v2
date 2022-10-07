import {ActionIcon, Group, Tooltip} from "@mantine/core";
import {openSpotlight} from "@mantine/spotlight";
import {IconSearch} from "@tabler/icons";

export const SearchButton = () => {
	return (
		<Group position="center">
			<Tooltip label={"mod + k"}>
				<ActionIcon onClick={() => openSpotlight()} variant="transparent" children={<IconSearch size={16}/>}/>
			</Tooltip>
		</Group>
	);
};
