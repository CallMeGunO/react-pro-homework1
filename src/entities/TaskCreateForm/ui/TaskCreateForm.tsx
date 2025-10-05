import { Button } from '@shared/Button';
import { Checkbox } from '@shared/Checkbox';
import { Input } from '@shared/Input';
import { TitleTypography } from '@shared/TitleTypography';
import { useState, type FC } from 'react';

import styles from './TaskCreateForm.module.css';

type TaskCreateFormProps = {
    addTask: (title: string, completed: boolean) => void;
};

export const TaskCreateForm: FC<TaskCreateFormProps> = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState<string>('');
    const [isTaskCompleted, setIsTaskCompleted] = useState<boolean>(false);

    const toggleIsTaskCompleted = () => {
        setIsTaskCompleted((prev) => !prev);
    };

    const handleAddTask: VoidFunction = () => {
        addTask(taskTitle, isTaskCompleted);
        setTaskTitle('');
    };

    return (
        <div className={styles.container}>
            <TitleTypography>Новая задача</TitleTypography>
            <Input
                label='Заголовок задачи'
                placeholder='Помыть посуду . . .'
                value={taskTitle}
                setValue={setTaskTitle}
            />
            <Checkbox
                label='Завершена ли задача'
                value={isTaskCompleted}
                onClick={toggleIsTaskCompleted}
            />
            <Button onClick={handleAddTask} disabled={!taskTitle}>
                Добавить
            </Button>
        </div>
    );
};
