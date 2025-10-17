import { TitleTypography } from '@shared/TitleTypography';
import { useEffect, useRef, type FC } from 'react';

export const WebSocketLogger: FC = () => {
    // хз куда подключить ws, поэтому просто напишу логику

    const webSocket = useRef<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket('ws://...');
        webSocket.current = ws;

        webSocket.current.onmessage = (event) => {
            console.log(event.data);
        };

        return () => {
            webSocket.current?.close();
        };
    }, []);

    return <TitleTypography>WebSocketLogger</TitleTypography>;
};
