import type { Task } from '@entities/TaskCard';
import { useState } from 'react';
import { FILTER_MODE } from '../constants';
import { getFilteredTasks } from '../utils';

type ResultType = {
    tasks: Task[];
    filterMode: FILTER_MODE;
    setFilter: (newFilterMode: FILTER_MODE) => void;
    removeTask: (id: string) => void;
};

type UseTasks = (initialTasks: Task[]) => ResultType;

export const useTasks: UseTasks = (initialTasks) => {
    const [tasks, setTasks] = useState<Task[]>(initialTasks);
    const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialTasks);
    const [filterMode, setFilterMode] = useState<FILTER_MODE>(FILTER_MODE.ALL);

    const setFilter = (newFilterMode: FILTER_MODE): void => {
        setFilteredTasks(getFilteredTasks(tasks, newFilterMode));
        setFilterMode(newFilterMode);
    };

    const removeTask = (id: string): void => {
        const tasksWithRemoved = tasks.filter((task) => task.id !== id);

        setTasks(tasksWithRemoved);
        setFilteredTasks(getFilteredTasks(tasksWithRemoved, filterMode));
    };

    return {
        tasks: filteredTasks,
        filterMode,
        setFilter,
        removeTask,
    };
};
