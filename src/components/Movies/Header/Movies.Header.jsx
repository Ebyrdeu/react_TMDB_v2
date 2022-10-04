import {Container, Group} from "@mantine/core";
import {Toggles} from "./Toogles/Movies.Header.Toggler.jsx";
import {Select} from "./Select/Movies.Header.Select.jsx";

export const MoviesHeader = () => {

	return (
		<Container>
			<Group position="center" my="xl">
				<Select/>
				<Toggles/>
			</Group>
		</Container>
	);

};

