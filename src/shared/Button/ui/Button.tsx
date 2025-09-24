import { type FC } from 'react';
import styles from './Button.module.css';

type ButtonProps = {
    children: string;
    onClick: VoidFunction;
};

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <div className={styles.container} onClick={onClick}>
            {children}
        </div>
    );
};
