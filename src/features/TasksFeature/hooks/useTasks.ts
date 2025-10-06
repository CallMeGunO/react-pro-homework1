import { useGetTasksQuery, type Task } from '@entities/TaskCard';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FILTER_MODE } from '../constants';
import { getFilteredTasks } from '../utils';

type ResultType = {
    tasks: Task[];
    filterMode: FILTER_MODE;
    setFilter: (newFilterMode: FILTER_MODE) => void;
    addTask: (title: string, completed: boolean) => void;
    removeTask: (id: string) => void;
};

type UseTasks = () => ResultType;

export const useTasks: UseTasks = () => {
    const { data, isSuccess } = useGetTasksQuery();

    const [tasks, setTasks] = useState<Task[]>([]);
    const [filterMode, setFilterMode] = useState<FILTER_MODE>(FILTER_MODE.ALL);

    useEffect(() => {
        if (isSuccess && data) {
            setTasks(data);
        }
    }, [data, isSuccess]);

    const filteredTasks = useMemo(() => {
        return getFilteredTasks(tasks, filterMode);
    }, [tasks, filterMode]);

    const addTask = useCallback((title: string, completed: boolean) => {
        const newTask: Task = {
            id: uuidv4(),
            title: title,
            completed: completed,
        };

        setTasks((prev) => [...prev, newTask]);
    }, []);

    const removeTask = useCallback((id: string): void => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    return {
        tasks: filteredTasks,
        filterMode,
        setFilter: setFilterMode,
        addTask,
        removeTask,
    };
};
