import { createContext } from 'react';

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export enum Theme {
    LIGHT = 'appLightTheme',
    DARK = 'appDarkTheme',
}

type ThemeContextType = {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({});
