import { Marker } from '@shared/Marker';
import { type FC } from 'react';

import styles from './Checkbox.module.css';

type CheckboxProps = {
    value: boolean;
    onClick: VoidFunction;
    label?: string;
};

export const Checkbox: FC<CheckboxProps> = ({ value, onClick, label }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {label && <span className={styles.label}>{label}:</span>}
            <Marker checked={value} />
        </div>
    );
};
