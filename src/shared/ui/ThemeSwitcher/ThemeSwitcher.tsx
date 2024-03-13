import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/hooks/useTheme';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';

import { ThemeSwitcherPropsType } from './ThemeSwitcher.types';
import { getIconThemeButton } from './ThemeSwitcher.helpers';

import cls from './ThemeSwitcher.module.scss';


export const ThemeSwitcher: FC<ThemeSwitcherPropsType> = (props) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
        >
            {getIconThemeButton(theme)}
        </AppButton>
    );
};
