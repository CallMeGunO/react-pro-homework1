import { Header } from '@widgets/Header';
import { SignupForm } from '@widgets/SignupForm/ui/SignupForm';
import { type FC } from 'react';

import styles from './SignupPage.module.css';

export const SignupPage: FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <SignupForm />
        </div>
    );
};
