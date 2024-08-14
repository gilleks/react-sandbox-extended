import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { AppInput } from 'shared/ui/AppInput';

import cls from './LoginForm.module.scss';

type loginFormPropsType = {
    className?: string;
};

export const LoginForm: FC<loginFormPropsType> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput
                className={cls.input}
                autofocus
                type="text"
                placeholder={t('EnterName')}
            />
            <AppInput
                className={cls.input}
                type="text"
                placeholder={t('EnterPassword')}
            />
            <AppButton className={cls.loginButton}>{t('LogIn')}</AppButton>
        </div>
    );
};
