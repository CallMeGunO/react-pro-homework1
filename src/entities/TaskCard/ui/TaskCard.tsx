import { Marker } from '@shared/Marker';
import { TitleTypography } from '@shared/TitleTypography';
import { type FC } from 'react';

import { type Task } from '../model';
import styles from './TaskCard.module.css';

type TaskCardProps = { task: Task };

export const TaskCard: FC<TaskCardProps> = ({ task }) => {
    return (
        <div className={styles.container}>
            <TitleTypography>{task.title}</TitleTypography>
            <Marker checked={task.completed} />
        </div>
    );
};
