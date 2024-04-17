import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AppButton } from './AppButton';
import { ThemeButton } from './AppButton.constants';
import 'app/styles/index.scss';
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
        theme: ThemeButton.CLEAR,
    },
};

export const OutLine: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
