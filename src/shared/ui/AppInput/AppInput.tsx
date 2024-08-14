import { ChangeEvent, FC, memo, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppInputPropsType } from './AppInput.types';

import cls from './AppInput.module.scss';

export const AppInput: FC<AppInputPropsType> = memo((props) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const refInput = useRef<HTMLInputElement>(null);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
        setCaretPosition(event.target.value.length);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onSelect = (event: ChangeEvent<HTMLInputElement>) => {
        setCaretPosition(event.target.selectionStart || 0);
    };

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            refInput.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.AppInput, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={refInput}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className={cls.input}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused && (
                    <span
                        className={cls.caret}
                        style={{ left: `${caretPosition * 6.5}px` }}
                    />
                )}
            </div>
        </div>
    );
});
