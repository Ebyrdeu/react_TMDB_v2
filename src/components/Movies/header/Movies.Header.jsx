import {Container, Group} from "@mantine/core";
import {Toggles} from "./toggles/Movies.Header.Toggle.jsx";
import {Select} from "./select/Movies.Header.Select.jsx";
import {Search} from "./search/Movies.Header.Search.jsx";

export const MoviesHeader = () => {

	return (
		<Container>
			<Group position="center" my="xl">
				<Select/>
				<Toggles/>
				<Search/>
			</Group>
		</Container>
	);

};

