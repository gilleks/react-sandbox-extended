import { render, screen } from '@testing-library/react';
import { AppButton } from './AppButton';
import { ThemeButton } from './AppButton.constants';

describe('<AppButton />', () => {
    test('should show button with TEST name', () => {
        render(<AppButton>TEST</AppButton>);

        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('should show button with class clear', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);

        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
