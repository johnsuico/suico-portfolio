import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import components
import { Landing, ErrorPage } from './Components/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;