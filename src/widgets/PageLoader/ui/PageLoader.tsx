import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

type PageLoaderPropsType = {
    className?: string;
};

export const PageLoader: FC<PageLoaderPropsType> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
