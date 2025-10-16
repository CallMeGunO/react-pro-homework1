import { TitleTypography } from '@shared/TitleTypography';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header: FC = () => {
    return (
        <div className={styles.container}>
            <TitleTypography>ЗАГОЛОВОК СТРАНИЦ</TitleTypography>
            <Link to='/'>ГЛАВНАЯ</Link>
            <Link to='/form'>РЕГИСТРАЦИЯ</Link>
            <Link to='/refs'>ДОМАШКА С РЕФАМИ</Link>
        </div>
    );
};
