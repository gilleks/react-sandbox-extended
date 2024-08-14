import { FC, useCallback, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { AppButtonTheme } from 'shared/ui/AppButton/AppButton.constants';

import cls from './Navbar.module.scss';
import { LoginModal } from 'features/AuthByUsername';

type NavbarPropsType = {
    className?: string;
};

export const Navbar: FC<NavbarPropsType> = (props) => {
    const { className } = props;
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const { t } = useTranslation(['translation', 'about', 'main']);

    const handleCloseAuthModal = useCallback(() => {
        setIsAuthModalOpen(false);
    }, []);

    const handleOpenAuthModal = useCallback(() => {
        setIsAuthModalOpen(true);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                className={cls.links}
                theme={AppButtonTheme.BACKGROUND_INVERTED}
                onClick={handleOpenAuthModal}
            >
                {t('LogIn')}
            </AppButton>

            <LoginModal
                isOpen={isAuthModalOpen}
                onClose={handleCloseAuthModal}
            />
        </div>
    );
};
