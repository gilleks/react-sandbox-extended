import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

type AppLinkPropsType = LinkProps & {
    theme?: AppLinkTheme;
    className?: string;
    children?: ReactNode;
};

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
            className={classNames(cls.AppLink, { theme }, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
