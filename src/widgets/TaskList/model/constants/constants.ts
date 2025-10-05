import type { FILTER_MODE } from '@features/TasksFeature';

export const FILTER_MODE_TEXT_MAP: Record<FILTER_MODE, string> = {
    ALL: 'Все',
    COMPLETED: 'Завершенные',
    NOT_COMPLETED: 'Не завершенные',
};
