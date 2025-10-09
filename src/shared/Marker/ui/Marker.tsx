import { type FC } from 'react';

import { COMPLETED_TEXT, NON_COMPLETED_TEXT } from '../model';
import styles from './Marker.module.css';

type MarkerProps = {
    checked: boolean;
};

export const Marker: FC<MarkerProps> = ({ checked }) => {
    const className = `${styles.container} ${
        checked ? styles.checked : styles.notChecked
    }`;

    return (
        <div className={className}>
            {checked ? COMPLETED_TEXT : NON_COMPLETED_TEXT}
        </div>
    );
};
