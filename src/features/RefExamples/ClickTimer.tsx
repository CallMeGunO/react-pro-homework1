import { Button } from '@shared/Button';
import { useRef, type FC } from 'react';

type LoggerData = {
    firstClick: number | null;
    clicks: number;
};

export const ClickTimer: FC = () => {
    const loggerData = useRef<LoggerData>({
        firstClick: null,
        clicks: 0,
    });

    const onClick = () => {
        if (!loggerData.current.firstClick) {
            loggerData.current.firstClick = new Date().getTime();
            loggerData.current.clicks++;

            console.log(
                `first click is fixed at ${loggerData.current.firstClick}, this is ${loggerData.current.clicks} click`
            );

            return;
        }

        const now = new Date().getTime();
        const timeDiff = now - loggerData.current.firstClick;

        loggerData.current.clicks++;
        console.log(
            `ms since first click: ${timeDiff}, clicks: ${loggerData.current.clicks}`
        );
    };

    return <Button onClick={onClick}>Log</Button>;
};
