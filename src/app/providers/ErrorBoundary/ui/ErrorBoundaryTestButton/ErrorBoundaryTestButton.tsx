import { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { AppButton } from 'shared/ui/AppButton';

type ErrorBoundaryTestButtonPropsType = {
    className?: string;
};

/*
 * Component for test ErrorBoundary
 */
export const ErrorBoundaryTestButton: FC<
    ErrorBoundaryTestButtonPropsType
> = () => {
    const [testError, setTestError] = useState(false);

    const { t } = useTranslation();

    const toggleError = () => {
        setTestError(true);
    };

    useEffect(() => {
        if (testError) {
            throw new Error();
        }
    }, [testError]);

    return <AppButton onClick={toggleError}>{t('ErrorCheck')}</AppButton>;
};
