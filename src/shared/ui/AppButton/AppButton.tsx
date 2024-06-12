import { FC } from 'react';

import { AppButtonPropsType } from './AppButton.types';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButtonSize } from './AppButton.constants';

import cls from './AppButton.module.scss';

export const AppButton: FC<AppButtonPropsType> = (props) => {
    const {
        className,
        children,
        theme,
        size = AppButtonSize.M,
        isSquare,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: isSquare,
    };

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
