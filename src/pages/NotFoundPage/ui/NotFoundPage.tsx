import { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';

type NotFoundPagePropsType = {
    className?: string;
};

const NotFoundPage: FC<NotFoundPagePropsType> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            {t('NotFoundPage')}
        </div>
    );
};

export default NotFoundPage;
