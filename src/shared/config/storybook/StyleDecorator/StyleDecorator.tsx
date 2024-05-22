import { FC, ReactElement } from 'react';

import 'app/styles/index.scss';

type StyleDecoratorType = {
    children?: ReactElement;
};

export const StyleDecorator: FC<StyleDecoratorType> = (props) => {
    const { children } = props;

    return <>{children}</>;
};
