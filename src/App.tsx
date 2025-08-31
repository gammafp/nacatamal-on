import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
export const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}