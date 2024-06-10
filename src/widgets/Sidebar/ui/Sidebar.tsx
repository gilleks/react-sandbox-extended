import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton.constants';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { routePath } from 'app/providers/router/config/routeConfig';
import MainIcon from 'shared/assets/icons/main-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';

import cls from './Sidebar.module.scss';

type SidebarPropsType = {
    className?: string;
};

export const Sidebar: FC<SidebarPropsType> = (props) => {
    const { className } = props;

    const [isCollapsed, setIsCollapsed] = useState(false);

    const { t } = useTranslation(['about', 'main']);

    const onToggle = () => {
        setIsCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                cls.Sidebar,
                { [cls.collapsed]: isCollapsed },
                [className],
            )}
            data-testid={'sidebar'}
        >
            <div className={cls.linksWrapper}>
                <AppLink
                    className={cls.linkWrapper}
                    to={routePath.main}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('MainText', { ns: 'main' })}
                    </span>
                </AppLink>
                <AppLink
                    className={cls.linkWrapper}
                    to={routePath.about}
                    theme={AppLinkTheme.SECONDARY}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('AboutPage')}</span>
                </AppLink>
            </div>

            <AppButton
                className={cls.collapseButton}
                type="button"
                onClick={onToggle}
                data-testid={'sidebar-toggle'}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={AppButtonSize.L}
                isSquare
            >
                {isCollapsed ? '>' : '<'}
            </AppButton>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={cls.langWrapper}
                    isShort={isCollapsed}
                />
            </div>
        </div>
    );
};
