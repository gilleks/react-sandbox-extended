import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('<Sidebar />', () => {
    test('should show Sidebar', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should added class collapsed if click on Toggle button', () => {
        renderWithTranslation(<Sidebar />);

        const button = screen.getByTestId('sidebar-toggle');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
