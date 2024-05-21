import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, {loader as appLoader} from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from './error-page';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Watch, { loader as contentLoader } from './Watch/Watch';
import Contact from './routes/contacts';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: appLoader,
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
        path: "watch/:id",
        element: <Watch />,
        loader: contentLoader,
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
