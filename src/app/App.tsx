import { FC, Suspense } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';

import './styles/index.scss';

export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className="pageContent">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
