import type { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Input.module.css';
import type { BaseInputProps } from '../model';

type InputRHFProps = BaseInputProps & UseFormRegisterReturn;

export const InputRHF = ({
    placeholder,
    label,
    type,
    ...rhfProps
}: InputRHFProps) => {
    return (
        <div className={styles.container}>
            {label && <span className={styles.label}>{label}:</span>}
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                {...rhfProps}
            />
        </div>
    );
};
