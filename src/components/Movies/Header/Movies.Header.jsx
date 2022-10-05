import {Container, Group} from "@mantine/core";
import {Toggles} from "./Toogles/Movies.Header.Toggler.jsx";
import {Select} from "./Select/Movies.Header.Select.jsx";
import {Search} from "./Search/Movies.Header.Search.jsx";

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

