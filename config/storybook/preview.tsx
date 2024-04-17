import React from 'react';
import type { Preview } from '@storybook/react';
import { StyleDecorator } from '../../src/shared/config/storybook/styleDecorator';

import 'app/styles/index.scss';

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
            <StyleDecorator>
                <Story />
            </StyleDecorator>
        ),
    ],
};

export default preview;
