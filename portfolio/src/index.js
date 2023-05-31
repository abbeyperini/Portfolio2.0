import React from 'react';
import './styles/index.css';
import LandingPage from "./components/LandingPage";
import Error from "./components/Error";
import App from './App';
import Blog from './components/Blog';
import Speaking from './components/Speaking';
import Portfolio from './components/Work';
import About from './components/About';
import Contact from "./components/Contact";
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Error />
  }, 
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/speaking",
    element: <Speaking />
  },
  {
    path: "/portfolio",
    element: <Portfolio />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },

])

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<RouterProvider router={router} >
  <ScrollRestoration />
</RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
