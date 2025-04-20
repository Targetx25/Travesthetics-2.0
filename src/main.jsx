import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import App from './App.jsx';
import HeroSection from './components/heroSection.jsx';
import CityInput from './components/cityInput.jsx';
import Home from './pages/Home.jsx';
import CityList from './components/CityList.jsx';
import Categories from './components/Categories.jsx';
import Results from './components/results.jsx';
import About from './pages/About.jsx';
import { CityProvider, useCity } from './components/CityContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function AppWithRouter() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/start", element: <CityInput /> },
        {
          path: "/citylist",
          element: 
          <ProtectedRoute>
          <CityList/>
        </ProtectedRoute>
         
        },
        {
          path: "/categories",
          element: (
            <ProtectedRoute>
              <Categories />
            </ProtectedRoute>
          ),
        },
        {
          path: "/results",
          element: (
            <ProtectedRoute >
              <Results />
            </ProtectedRoute>
          ),
        },
        { path: "/about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <CityProvider>
      <AppWithRouter />
    </CityProvider>
  </React.StrictMode>
);
