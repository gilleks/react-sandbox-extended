import { InputHTMLAttributes } from 'react';

type HTMLInputType = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

export type AppInputPropsType = HTMLInputType & {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
};
