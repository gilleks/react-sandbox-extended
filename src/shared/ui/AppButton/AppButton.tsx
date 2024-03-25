import { FC } from 'react';

import { AppButtonPropsType } from './AppButton.types';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppButton.module.scss';

export const AppButton: FC<AppButtonPropsType> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            type="button"
            className={classNames(cls.AppButton, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
