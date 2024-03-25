import { FC } from 'react';
import { Link } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import { AppLinkPropsType } from './AppLink.types';
import { AppLinkTheme } from './AppLink.constants';

import cls from './AppLink.module.scss';

export const AppLink: FC<AppLinkPropsType> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, { theme }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
