import { AppRouter } from '@app/router';
import { store } from '@app/store';
import { type FC } from 'react';
import { Provider } from 'react-redux';

export const App: FC = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};
