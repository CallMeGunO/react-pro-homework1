import { type FC } from 'react';

import styles from './TaskPage.module.css';
import { TitleTypography } from '@shared/TitleTypography';
import { TaskList } from '@widgets/TaskList';

export const TaskPage: FC = () => {
    return (
        <div className={styles.container}>
            <TitleTypography>Мои задачи</TitleTypography>
            <TaskList />
        </div>
    );
};
