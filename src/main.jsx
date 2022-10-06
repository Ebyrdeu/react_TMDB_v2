import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {MantineContextProvider} from "./context/MantineContext.jsx";
import {TogglerContextProvider} from "./context/Toggler.context.jsx";
import {SortContextProvider} from "./context/Sort.context.jsx";
import {SearchContextProvider} from "./context/Search.Context.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>

		<TogglerContextProvider>
			<SortContextProvider>
				<SearchContextProvider>
					<MantineContextProvider>
						<QueryClientProvider client={queryClient}>
							<BrowserRouter>
								<App/>
							</BrowserRouter>
							<ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
						</QueryClientProvider>
					</MantineContextProvider>
				</SearchContextProvider>
			</SortContextProvider>
		</TogglerContextProvider>

	</React.StrictMode>,
);
