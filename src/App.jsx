
import React from 'react';

import Home from './pages/Home/Home';
import Error404 from './pages/Error404/Error404';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/Kasa",
    element: <Home />
  },
  {
    path: "/Accomodation/:id",
    element: <Accomodation />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: "*",
    element: <Error404 />
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;