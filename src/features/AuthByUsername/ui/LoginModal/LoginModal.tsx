import { FC } from 'react';

import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

type loginModalPropsType = {
    isOpen: boolean;
    onClose: () => void;
};

export const LoginModal: FC<loginModalPropsType> = (props) => {
    const { isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            <LoginForm />
        </Modal>
    );
};
