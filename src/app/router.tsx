import { TaskPage } from '@pages/TaskPage';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
    {
        path: '/',
        element: <TaskPage />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
