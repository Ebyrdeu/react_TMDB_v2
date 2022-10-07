import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {MantineCustomProvider} from "./provider/MantineCustom.Provider.jsx";
import {TogglesContextProvider} from "./context/Toggles.context.jsx";
import {SortContextProvider} from "./context/Sort.context.jsx";
import {SearchContextProvider} from "./context/Search.context.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {SpotlightCustomProvider} from "./provider/SpotlightCustomProvider.jsx";
import './main.css'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<MantineCustomProvider>
				<TogglesContextProvider>
					<SortContextProvider>
						<SearchContextProvider>
							<QueryClientProvider client={queryClient}>
								<SpotlightCustomProvider children={<App/>}/>
								<ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
							</QueryClientProvider>
						</SearchContextProvider>
					</SortContextProvider>
				</TogglesContextProvider>
			</MantineCustomProvider>
		</BrowserRouter>
	</React.StrictMode>
	,
);
