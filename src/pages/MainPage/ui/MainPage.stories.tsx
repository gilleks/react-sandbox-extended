import type { Meta, StoryObj } from '@storybook/react';
import { MainPage } from '..';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/themeContext/themeContext';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MainPageLight: Story = {
    args: {},
};

export const MainPageDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
