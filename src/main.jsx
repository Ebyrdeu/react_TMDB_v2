import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import {MantineContextProvider} from "./context/MantineContext.jsx";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import {TogglerContextProvider} from "./context/Toggler.context.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MantineContextProvider>
				<BrowserRouter>
					<TogglerContextProvider>
						<App/>
					</TogglerContextProvider>
				</BrowserRouter>
				<ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
			</MantineContextProvider>
		</QueryClientProvider>

	</React.StrictMode>,
);
