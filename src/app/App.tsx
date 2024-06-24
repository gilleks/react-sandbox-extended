import { FC, Suspense, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';
import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App: FC = () => {
    const { theme } = useTheme();

    const [isModalOpen, setIsModalOpen] = useState(true);

    const handleOpen = () => {
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div onClick={handleOpen}>TOGGLE</div>
                <Modal isOpen={isModalOpen} onClose={handleClose}>
                    ASDAA ASDAD ASDA ADAD ADA ADA SD ASD AD ADAD ASDAA ASDAD
                    ASDA ADAD ADA ADA SD ASD AD ADAD ASDAA ASDAD ASDA ADAD ADA
                    ADA SD ASD AD ADAD
                </Modal>
                <div className="pageContent">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
