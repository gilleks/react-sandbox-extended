import { FC, Suspense } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton';

import cls from './PageError.module.scss';

type PageErrorPropsType = {
    className?: string;
};

export const PageError: FC<PageErrorPropsType> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <Suspense fallback="">
            <div className={classNames(cls.PageError, {}, [className])}>
                <p>{t('UnexpectedErrorOccurred')}</p>
                <AppButton onClick={reloadPage}>{t('ReloadPage')}</AppButton>
            </div>
        </Suspense>
    );
};
