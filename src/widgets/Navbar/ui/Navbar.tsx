import { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppButton } from 'shared/ui/AppButton';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton.constants';

import cls from './Navbar.module.scss';

type NavbarPropsType = {
    className?: string;
};

export const Navbar: FC<NavbarPropsType> = (props) => {
    const { className } = props;
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const { t } = useTranslation(['translation', 'about', 'main']);

    const handleToggleAuthModal = useCallback(() => {
        setIsAuthModalOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                className={cls.links}
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={handleToggleAuthModal}
            >
                {t('LogIn')}
            </AppButton>
            <Modal isOpen={isAuthModalOpen} onClose={handleToggleAuthModal}>
                TEST DATA FOR MODAL WINDOW 1 TEST DATA FOR MODAL WINDOW 2 TEST
                DATA FOR MODAL WINDOW 3
            </Modal>
        </div>
    );
};
