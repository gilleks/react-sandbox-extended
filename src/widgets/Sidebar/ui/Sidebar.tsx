import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';
import { AppButtonSize } from 'shared/ui/AppButton/AppButton.constants';

import cls from './Sidebar.module.scss';

type SidebarPropsType = {
    className?: string;
};

export const Sidebar: FC<SidebarPropsType> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
            data-testid={'sidebar'}
        >
            <AppButton
                className={cls.collapseButton}
                type="button"
                onClick={onToggle}
                data-testid={'sidebar-toggle'}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={AppButtonSize.L}
                isSquare
            >
                {collapsed ? '>' : '<'}
            </AppButton>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.langWrapper} />
            </div>
        </div>
    );
};
