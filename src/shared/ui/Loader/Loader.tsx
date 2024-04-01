import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

type LoaderPropsType = {
    className?: string;
};

export const Loader: FC<LoaderPropsType> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(cls.loader, {}, [className])}>
            <div />
            <div />
            <div />
        </div>
    );
};
