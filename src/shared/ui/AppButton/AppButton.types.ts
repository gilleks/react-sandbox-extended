import { ButtonHTMLAttributes, ReactNode } from 'react';

import { AppButtonSize, AppButtonTheme } from './AppButton.constants';

export type AppButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children?: ReactNode;
    theme?: AppButtonTheme;
    size?: AppButtonSize;
    isSquare?: boolean;
};
