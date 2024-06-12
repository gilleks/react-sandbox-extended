import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { customRender } from 'shared/lib/tests/customRender/customRender';

describe('<Sidebar />', () => {
    test('should show Sidebar', () => {
        customRender(<Sidebar />, { router: true });

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should added class collapsed if click on Toggle button', () => {
        customRender(<Sidebar />, { router: true });

        const button = screen.getByTestId('sidebar-toggle');

        fireEvent.click(button);

        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
