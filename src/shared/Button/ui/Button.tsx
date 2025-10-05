import { type FC } from 'react';

import styles from './Button.module.css';

type ButtonProps = {
    children: string;
    onClick: VoidFunction;
    disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
}) => {
    if (disabled) {
        return (
            <div className={`${styles.container} ${styles.disabled}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={styles.container} onClick={onClick}>
            {children}
        </div>
    );
};
