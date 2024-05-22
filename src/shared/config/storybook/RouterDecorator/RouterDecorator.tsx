import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

type ThemeDecoratorType = {
    children?: ReactElement;
};

export const RouterDecorator: FC<ThemeDecoratorType> = (props) => {
    const { children } = props;

    return <BrowserRouter>{children}</BrowserRouter>;
};
