import { TitleTypography } from '@shared/TitleTypography';
import { Header } from '@widgets/Header';
import { TaskList } from '@widgets/TaskList';
import { type FC } from 'react';

import styles from './TaskPage.module.css';

export const TaskPage: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <TitleTypography>Мои задачи</TitleTypography>
            <TaskList />
        </div>
    );
};
