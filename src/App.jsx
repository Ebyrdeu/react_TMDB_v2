import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/Movies.Page";
import {NotFoundPage} from "./pages/NotFound.Page";
import {MoreInfoPage} from "./pages/MoreInfo.Page";
import ErrorBoundary from "./components/other/ErrorBoundary.component";
import {BackToTop} from "./components/other/backToTop";

function App() {

	return(
		<Routes>
			<Route path="/" element={<BackToTop/>}>
				<Route index element={<ErrorBoundary childElement={<MoviesPage/>}/>}/>
				<Route path={"info/:type/:id"} element={<ErrorBoundary childElement={<MoreInfoPage/>}/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	);
}

export default App;
