import React from 'react';
import type { Preview } from '@storybook/react';
import { Theme } from '../../src/shared/lib/themeContext/themeContext';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <RouterDecorator>
                <ThemeDecorator theme={Theme.LIGHT}>
                    <StyleDecorator>
                        <Story />
                    </StyleDecorator>
                </ThemeDecorator>
            </RouterDecorator>
        ),
    ],
};

export default preview;
