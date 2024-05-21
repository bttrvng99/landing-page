import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page';
import Home from './Home/Home';
import Movie, {loader as movieLoader} from './Movie/Movie';
import TvSeries, {loader as tvLoader} from './Tv/TvSeries';
import Contact from './routes/contacts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "movie/:id",
        element: <Movie />,
        loader: movieLoader,
      },
      {
        path: "tv/:id",
        element: <TvSeries />,
        loader: tvLoader,
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
