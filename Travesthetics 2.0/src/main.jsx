
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from './components/heroSection.jsx';
import CityInput from './components/cityInput.jsx';
import Home from './pages/Home.jsx';
import CityList from './components/CityList.jsx';
import Categories from './components/Categories.jsx';
import Results from './components/results.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path: "/",
        element : <Home/>,
      },
      {
        path: "/start",
        element: <CityInput/>,

      },
      {
        path : "/cityList",
        element: <CityList/>,
      },
      {
        path: "/categories",
        element: <Categories/>,
      },
      {
        path : "/results",
        element: <Results/>,
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
