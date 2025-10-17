import { RefsPage } from '@pages/RefsPage';
import { SignupPage } from '@pages/SignupPage';
import { TaskPage } from '@pages/TaskPage';
import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
    {
        path: '/',
        element: <TaskPage />,
    },
    {
        path: '/form',
        element: <SignupPage />,
    },
    {
        path: '/refs',
        element: <RefsPage />,
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
