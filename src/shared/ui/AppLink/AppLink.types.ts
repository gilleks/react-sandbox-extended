import { ReactNode } from 'react';
import { LinkProps } from 'react-router-dom';

import { AppLinkTheme } from './AppLink.constants';


export type AppLinkPropsType = LinkProps & {
    theme?: AppLinkTheme;
    className?: string;
    children?: ReactNode;
};