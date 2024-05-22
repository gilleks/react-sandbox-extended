import { FC, ReactElement } from 'react';
import { Theme } from 'shared/lib/themeContext/themeContext';

import 'app/styles/index.scss';
import cls from './ThemeDecorator.module.scss';

type ThemeDecoratorType = {
    theme: Theme;
    children?: ReactElement;
};

export const ThemeDecorator: FC<ThemeDecoratorType> = (props) => {
    const { children, theme } = props;

    return (
        <div className={`app ${theme} ${cls.themeWrapper}`}>
            <div className={`${cls.contentWrapper}`}>{children}</div>
        </div>
    );
};
