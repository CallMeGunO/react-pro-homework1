import { useState, type FC } from 'react';
import { type Task } from '@entities/TaskCard';
import { Button } from '@shared/Button';
import { TitleTypography } from '@shared/TitleTypography';
import { DeletableTaskCard } from '@features/DeletableTaskCard';

import {
    FILTER_MODE,
    FILTER_MODE_TEXT_MAP,
    useTasks,
    getFilterTitle,
} from '../model';

import styles from './TaskList.module.css';

const MOCK_TASKS: Task[] = [
    {
        id: '1',
        title: 'Сущность TaskCard',
        completed: true,
    },
    {
        id: '2',
        title: 'Хук useTasks',
        completed: true,
    },
    {
        id: '3',
        title: 'Виджет TaskList',
        completed: true,
    },
    {
        id: '4',
        title: 'Shared кнопка FilterButton',
        completed: true,
    },
    {
        id: '5',
        title: 'Оптимизация через мемоизацию',
        completed: false,
    },
    {
        id: '6',
        title: 'Нейропомошник',
        completed: false,
    },
];

type TaskListProps = {
    tasks?: Task[];
};

export const TaskList: FC<TaskListProps> = ({ tasks = MOCK_TASKS }) => {
    const {
        tasks: filteredTasks,
        filterMode,
        setFilter,
        removeTask,
    } = useTasks(tasks);

    const [filterTitle, setFilterTitle] = useState<string>(
        getFilterTitle(filterMode)
    );

    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                {Object.values(FILTER_MODE).map((filter) => {
                    const setThisFilter: VoidFunction = () => {
                        setFilter(filter);
                        setFilterTitle(getFilterTitle(filter));
                    };

                    return (
                        <Button onClick={setThisFilter}>
                            {FILTER_MODE_TEXT_MAP[filter]}
                        </Button>
                    );
                })}
            </div>
            <TitleTypography>{filterTitle}</TitleTypography>
            <div className={styles.list}>
                {filteredTasks.map((task) => (
                    <DeletableTaskCard
                        key={task.id}
                        task={task}
                        handleDelete={removeTask}
                    />
                ))}
            </div>
        </div>
    );
};
