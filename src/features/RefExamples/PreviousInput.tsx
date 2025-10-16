import { Input } from '@shared/Input';
import { TitleTypography } from '@shared/TitleTypography';
import { usePrevValue } from '@shared/usePrevValue';
import { useState, type FC } from 'react';

export const PreviousInput: FC = () => {
    const [value, setValue] = useState('');
    const prevValue = usePrevValue(value);

    return (
        <>
            <Input
                label={'CurrentValue'}
                value={value}
                setValue={setValue}
                type='text'
            />
            <TitleTypography>PreviousValue</TitleTypography>
            <div>{prevValue}</div>
        </>
    );
};
