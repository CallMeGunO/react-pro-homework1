import { Button } from '@shared/Button';
import { useRef, type FC } from 'react';

export const FocusTracker: FC = () => {
    const input1Ref = useRef<HTMLInputElement | null>(null);
    const input2Ref = useRef<HTMLInputElement | null>(null);
    const focusesOnInput1 = useRef(0);

    const onClick: VoidFunction = () => {
        if (!input1Ref.current) {
            return;
        }

        input1Ref.current.focus();
    };

    const onInput1Focus: VoidFunction = () => {
        console.log(++focusesOnInput1.current);
    };

    return (
        <div>
            <input
                ref={input1Ref}
                placeholder='input1'
                onFocusCapture={onInput1Focus}
            />
            <input ref={input2Ref} placeholder='input2' />
            <Button onClick={onClick}>Focus on Input 1</Button>
        </div>
    );
};
