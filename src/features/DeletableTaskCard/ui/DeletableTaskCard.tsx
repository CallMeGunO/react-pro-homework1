import { TaskCard, type Task } from '@entities/TaskCard';
import { Button } from '@shared/Button';
import { memo, type FC } from 'react';

import styles from './DeletableTaskCard.module.css';

type DeletableTaskCardProps = {
    task: Task;
    handleDelete: (id: string) => void;
};

export const DeletableTaskCard: FC<DeletableTaskCardProps> = memo(
    ({ task, handleDelete }) => {
        const removeThisTask: VoidFunction = () => {
            handleDelete(task.id);
        };

        return (
            <div className={styles.container}>
                <TaskCard key={task.id} task={task} />
                <Button onClick={removeThisTask}>Удалить</Button>
            </div>
        );
    }
);
