import { screen } from '@testing-library/react';
import { Counter } from './Counter';
import { customRender } from 'shared/lib/tests/customRender/customRender';
import { userEvent } from '@testing-library/user-event';

describe('Counter', () => {
    test('should render counter with value 10', () => {
        customRender(<Counter />, {
            redux: true,
            initialState: { counter: { value: 10 } },
        });

        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('should render counter increment with value 11', async () => {
        const user = userEvent.setup();

        customRender(<Counter />, {
            redux: true,
            initialState: { counter: { value: 10 } },
        });

        await user.click(screen.getByTestId('increment-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('should render counter decrement with value 9', async () => {
        const user = userEvent.setup();

        customRender(<Counter />, {
            redux: true,
            initialState: { counter: { value: 10 } },
        });

        await user.click(screen.getByTestId('decrement-button'));

        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
