import { Theme } from 'shared/lib/themeContext/themeContext';
import { COLORS } from 'shared/constants/colors';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';

export const getIconThemeButton = (theme: Theme) => {
    switch (theme) {
        case Theme.LIGHT:
            return <ThemeIcon fill={COLORS.light.invertedPrimaryColor} />;
        case Theme.DARK:
            return <ThemeIcon fill={COLORS.dark.invertedPrimaryColor} />;
        default:
            break;
    }
};