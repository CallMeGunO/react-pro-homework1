import { FILTER_MODE, FILTER_MODE_TEXT_MAP } from '../constants';

export const getFilterTitle = (filterMode: FILTER_MODE): string => {
    return `${FILTER_MODE_TEXT_MAP[filterMode]} задачи`;
};
