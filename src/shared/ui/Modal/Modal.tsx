import { FC, MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Modal.module.scss';

const ANIMATION_DELAY = 300;

type ModalPropsType = {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
};

export const Modal: FC<ModalPropsType> = (props) => {
    const { className, children, isOpen, onClose } = props;

    const [isClosing, setIsClosing] = useState(false);
    const refTimer = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    const handleContentClick = (event: MouseEvent) => {
        event.stopPropagation();
    };

    const handleClose = () => {
        if (onClose) {
            setIsClosing(true);

            refTimer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeout(refTimer.current);
        };
    }, []);

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
            <div className={cls.overlay} onClick={handleClose}>
                <div className={cls.content} onClick={handleContentClick}>
                    {children}
                </div>
            </div>
        </div>
    );
};
