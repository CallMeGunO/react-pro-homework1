import { TaskCreateForm } from '@entities/TaskCreateForm';
import { DeletableTaskCard } from '@features/DeletableTaskCard';
import { FILTER_MODE, useTasks } from '@features/TasksFeature';
import { Button } from '@shared/Button';
import { TitleTypography } from '@shared/TitleTypography';
import { useState, type FC } from 'react';

import { FILTER_MODE_TEXT_MAP, getFilterTitle } from '../model';
import styles from './TaskList.module.css';

export const TaskList: FC = () => {
    const {
        tasks: filteredTasks,
        filterMode,
        setFilter,
        addTask,
        removeTask,
    } = useTasks();

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
            <TaskCreateForm addTask={addTask} />
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
