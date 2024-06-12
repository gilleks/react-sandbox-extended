import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';
import { AppButtonTheme } from './AppButton.constants';

describe('<AppButton />', () => {
    test('should show button with TEST name', () => {
        render(<AppButton>TEST</AppButton>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should show button with class clear', () => {
        render(<AppButton theme={AppButtonTheme.CLEAR}>TEST</AppButton>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
