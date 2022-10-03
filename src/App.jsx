import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./pages/Movies.Page";
import {NotFoundPage} from "./pages/NotFound.Page";
import {MoreInfoPage} from "./pages/MoreInfo.Page";

function App() {

	return(
		<Routes>
			<Route path="/">
				<Route index element={<MoviesPage/>}/>
				<Route path={"info/:type/:id"} element={<MoreInfoPage/>}/>
				<Route path="*" element={<NotFoundPage/>}/>
			</Route>
		</Routes>
	);
}

export default App;
