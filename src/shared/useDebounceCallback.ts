import { useEffect } from 'react';

type UseDebounceCallback = (
    value: unknown,
    delay: number,
    callback: VoidFunction
) => void;

export const useDebounceCallback: UseDebounceCallback = (
    value,
    delay,
    callback
) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            callback();
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay, callback]);
};
