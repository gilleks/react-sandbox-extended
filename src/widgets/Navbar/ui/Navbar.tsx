import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';

import cls from './Navbar.module.scss';

type NavbarPropsType = {
    className?: string;
};

export const Navbar: FC<NavbarPropsType> = (props) => {
    const { className } = props;

    const { t } = useTranslation(['about', 'main']);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>[]</div>
        </div>
    );
};
