import { type FC } from 'react';
import styles from './DeletableTaskCard.module.css';
import { TaskCard, type Task } from '@entities/TaskCard';
import { Button } from '@shared/Button';

type DeletableTaskCardProps = {
    task: Task;
    handleDelete: (id: string) => void;
};

export const DeletableTaskCard: FC<DeletableTaskCardProps> = ({
    task,
    handleDelete,
}) => {
    const removeThisTask: VoidFunction = () => {
        handleDelete(task.id);
    };

    return (
        <div className={styles.container}>
            <TaskCard key={task.id} task={task} />
            <Button onClick={removeThisTask}>Удалить</Button>
        </div>
    );
};
