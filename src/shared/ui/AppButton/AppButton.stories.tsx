import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppButton } from './AppButton';
import { AppButtonSize, AppButtonTheme } from './AppButton.constants';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'shared/lib/themeContext/themeContext';

const meta = {
    title: 'shared/AppButton',
    component: AppButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof AppButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.CLEAR,
    },
};

export const OutLine: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
    },
};

export const OutLineDark: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const OutLineSizeM: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
        size: AppButtonSize.M,
    },
};

export const OutLineSizeL: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
        size: AppButtonSize.L,
    },
};

export const OutLineSizeXL: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.OUTLINE,
        size: AppButtonSize.XL,
    },
};

export const BackgroundTheme: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND,
    },
};

export const BackgroundInvertedTheme: Story = {
    args: {
        children: 'Text',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        isSquare: true,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        isSquare: true,
        size: AppButtonSize.M,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        isSquare: true,
        size: AppButtonSize.L,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        theme: AppButtonTheme.BACKGROUND_INVERTED,
        isSquare: true,
        size: AppButtonSize.XL,
    },
};
