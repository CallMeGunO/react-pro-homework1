import styles from './Input.module.css';

type InputProps<T> = {
    value: T;
    setValue: (newValue: T) => void;
    placeholder?: string;
    label?: string;
};

export const Input = <T,>({
    value,
    setValue,
    placeholder,
    label,
}: InputProps<T>) => {
    return (
        <div className={styles.container}>
            {label && <span className={styles.label}>{label}:</span>}
            <input
                className={styles.input}
                value={value as string}
                onChange={(e) => setValue(e.target.value as T)}
                placeholder={placeholder}
            />
        </div>
    );
};
