import { TaskCard } from '@entities/TaskCard';
import { TaskPage } from '@pages/TaskPage/ui/TaskPage';
import { Button } from '@shared/Button';
import { TaskList } from '@widgets/TaskList/ui/TaskList';
import { type FC } from 'react';

export const App: FC = () => {
    return (
        <>
            <TaskPage />
        </>
    );
};
