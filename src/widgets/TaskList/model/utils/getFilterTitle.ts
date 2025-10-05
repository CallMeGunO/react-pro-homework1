import type { FILTER_MODE } from '@features/TasksFeature';
import { FILTER_MODE_TEXT_MAP } from '../constants';

export const getFilterTitle = (filterMode: FILTER_MODE): string => {
    return `${FILTER_MODE_TEXT_MAP[filterMode]} задачи`;
};
