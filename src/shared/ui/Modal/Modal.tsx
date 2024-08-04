import {
    FC,
    MouseEvent,
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

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

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);

            refTimer.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            clearTimeout(refTimer.current);
            window.removeEventListener('keydown', handleClose);
        };
    }, [isOpen]);

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
