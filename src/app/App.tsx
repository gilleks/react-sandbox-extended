import { FC } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/themeProvider';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss';
import { AppRouter } from './providers/router';


export const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', { hovered: true }, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>TOGGLE THEME</button>
        </div>
    );
};

export default App;
