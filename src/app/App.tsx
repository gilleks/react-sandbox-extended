import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Sidebar } from 'widgets/Sidebar';


export const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Navbar />
            <div className='pageContent'>
                <Sidebar />
                <AppRouter />
            </div>

        </div>
    );
};

export default App;
