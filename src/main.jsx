import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider, ScrollRestoration} from "react-router-dom";
import {MantineCustomProvider} from "./provider/MantineCustom.Provider.jsx";
import {TogglesContextProvider} from "./context/Toggles.context.jsx";
import {SortContextProvider} from "./context/Sort.context.jsx";
import {SearchContextProvider} from "./context/Search.context.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {router} from "./routes/routes.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MantineCustomProvider>
            <TogglesContextProvider>
                <SortContextProvider>
                    <SearchContextProvider>
                        <QueryClientProvider client={queryClient}>
                            <RouterProvider router={router}>
                                <ScrollRestoration/>
                            </RouterProvider>
                            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
                        </QueryClientProvider>
                    </SearchContextProvider>
                </SortContextProvider>
            </TogglesContextProvider>
        </MantineCustomProvider>
    </React.StrictMode>
);
