import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { AppLinkTheme } from './AppLink.constants';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/themeContext/themeContext';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: { to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'PRIMARY',
    },
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'SECONDARY',
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'SECONDARY DARK',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
