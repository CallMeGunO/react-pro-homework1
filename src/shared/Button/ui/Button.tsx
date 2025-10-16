import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: string;
    onClick?: VoidFunction;
    disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    ...buttonProps
}) => {
    if (disabled) {
        return (
            <button className={`${styles.container} ${styles.disabled}`}>
                {children}
            </button>
        );
    }

    return (
        <button className={styles.container} onClick={onClick} {...buttonProps}>
            {children}
        </button>
    );
};
