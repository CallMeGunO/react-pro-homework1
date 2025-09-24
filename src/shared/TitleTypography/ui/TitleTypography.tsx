import { type FC } from 'react';
import styles from './TitleTypography.module.css';

type TitleTypographyProps = {
    children: string;
};

export const TitleTypography: FC<TitleTypographyProps> = ({ children }) => {
    return <span className={styles.container}>{children}</span>;
};
