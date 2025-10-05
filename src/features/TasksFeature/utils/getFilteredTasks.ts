import type { Task } from '@entities/TaskCard';

import { FILTER_MODE } from '../constants';

const getIsTaskSatisfiesFilter = (task: Task, filterMode: FILTER_MODE) => {
    switch (filterMode) {
        case FILTER_MODE.ALL:
            return true;
        case FILTER_MODE.COMPLETED:
            return task.completed;
        case FILTER_MODE.NOT_COMPLETED:
            return !task.completed;
        default:
            return false;
    }
};

export const getFilteredTasks = (
    tasks: Task[],
    filterMode: FILTER_MODE
): Task[] => {
    return tasks.filter((task) => getIsTaskSatisfiesFilter(task, filterMode));
};
