import type { Meta, StoryObj } from '@storybook/react';
import { AboutPage } from '../';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/themeContext/themeContext';

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AboutPageLight: Story = {
    args: {},
};

export const AboutPageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
