import type { Meta, StoryObj } from '@storybook/react';
import { AppInput } from './AppInput';

const meta = {
    title: 'shared/AppInput',
    component: AppInput,
    argTypes: {},
} satisfies Meta<typeof AppInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
};
