import type { HTMLInputTypeAttribute } from 'react';

export type BaseInputProps = {
    placeholder?: string;
    label?: string;
    type: HTMLInputTypeAttribute;
};

export type InputProps<T> = {
    value: T;
    setValue: (newValue: T) => void;
} & BaseInputProps;
