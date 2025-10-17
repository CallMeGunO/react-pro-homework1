import {
    ClickTimer,
    DebouncedLogger,
    FocusTracker,
    PreviousInput,
    WebSocketLogger,
} from '@features/RefExamples';
import { DividerX } from '@shared/DividerX';
import { Header } from '@widgets/Header';
import { type FC } from 'react';

import styles from './RefsPage.module.css';

export const RefsPage: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <ClickTimer />
            <DividerX />
            <PreviousInput />
            <DividerX />
            <FocusTracker />
            <DividerX />
            <DebouncedLogger />
            <DividerX />
            <WebSocketLogger />
        </div>
    );
};
