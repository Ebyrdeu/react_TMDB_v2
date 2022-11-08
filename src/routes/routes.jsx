import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import {BackToTop} from '../components/other/backToTop.jsx';
import ErrorBoundary from '../components/other/ErrorBoundary.component.jsx';
import {MoviesPage} from '../pages/Movies.Page.jsx';
import {MoreInfoPage} from '../pages/MoreInfo.Page.jsx';
import {NotFoundPage} from '../pages/NotFound.Page.jsx';
import {JustToPassAssigment} from '../justToPassAssigment/justToPassAssigment';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BackToTop/>}>
          <Route index element={<ErrorBoundary childElement={<MoviesPage/>}/>}/>
          <Route path={'info/:type/:id'} element={<ErrorBoundary childElement={<MoreInfoPage/>}/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path={':id'} element={<JustToPassAssigment/>}/>
        </Route>,
    ),
);
