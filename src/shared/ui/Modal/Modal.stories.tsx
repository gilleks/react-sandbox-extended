import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    args: {},
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {
    args: {
        isOpen: true,
        children: (
            <div>
                TEST DATA FOR MODAL WINDOW 1 TEST DATA FOR MODAL WINDOW 2 TEST
                DATA FOR MODAL WINDOW 3
            </div>
        ),
    },
};
