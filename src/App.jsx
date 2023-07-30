import React from 'react';

// react router
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// components & pages
import Home from './pages/Home';
import Received from './pages/Received ';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/your-application-has-been-submitted',
    element: <Received />,
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
