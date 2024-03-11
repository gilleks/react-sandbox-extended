import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

type NavbarPropsType = {
    className?: string;
};

export const Navbar: FC<NavbarPropsType> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} theme={AppLinkTheme.SECONDARY}>
                    Главная
                </AppLink>

                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
