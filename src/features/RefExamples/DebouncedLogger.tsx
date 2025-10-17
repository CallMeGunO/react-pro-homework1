import { Input } from '@shared/Input';
import { TitleTypography } from '@shared/TitleTypography';
import { useDebounceCallback } from '@shared/useDebounceCallback';
import { useState, type FC } from 'react';

export const DebouncedLogger: FC = () => {
    const [inputValue, setInputValue] = useState('');

    const callback = () => {
        console.log(inputValue);
    };

    useDebounceCallback(inputValue, 1000, callback);

    return (
        <>
            <TitleTypography>DebouncedLogger</TitleTypography>
            <Input<string>
                value={inputValue}
                setValue={setInputValue}
                type='text'
            />
        </>
    );
};
