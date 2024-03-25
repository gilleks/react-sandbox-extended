import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { LangSwitcherPropsType } from './LangSwitcher.types';
import { AppButton, ThemeButton } from '../AppButton';

import cls from './LangSwitcher.module.scss';

export const LangSwitcher: FC<LangSwitcherPropsType> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggleLanguage}
        >
            {t('Languages')}
        </AppButton>
    );
};
