import {ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {useHotkeys, useLocalStorage} from "@mantine/hooks";

export const MantineCustomProvider = ({children}) => {
	const [colorScheme, setColorScheme] = useLocalStorage({
		key: "mantine-color-scheme",
		defaultValue: "dark",
		getInitialValueInEffect: true,
	});

	const toggleColorScheme = (value) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
				{children}
			</MantineProvider>
		</ColorSchemeProvider>
	);
};

