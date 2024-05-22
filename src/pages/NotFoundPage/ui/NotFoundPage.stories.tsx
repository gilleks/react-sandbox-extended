import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from '..';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/themeContext/themeContext';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NotFoundPageLight: Story = {
    args: {},
};

export const NotFoundPageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
