import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css';
import { Home } from './pages/Home';
import { Layout } from './pages/layouts/Layout';
import { HelloWebGPU } from './engine_pages/HelloWebGPU';
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
                {
                    path: '/start',
                    children: [
                        {
                            path: 'hello-webgpu',
                            element: <HelloWebGPU />
                        }
                    ]
                }
            ],
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}