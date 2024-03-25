import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ThemeButton } from './AppButton.constants';

export type AppButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    children?: ReactNode;
    theme?: ThemeButton;
};
