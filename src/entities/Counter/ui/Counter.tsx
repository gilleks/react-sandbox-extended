import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui/AppButton';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

type CounterPropsType = {
    className?: string;
};

export const Counter: FC<CounterPropsType> = () => {
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const dispatch = useDispatch();

    const onIncrementClick = () => {
        dispatch(counterActions.increment());
    };

    const onDecrementClick = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <AppButton
                onClick={onIncrementClick}
                data-testid="increment-button"
            >
                {t('Increment')}
            </AppButton>
            <AppButton
                onClick={onDecrementClick}
                data-testid="decrement-button"
            >
                {t('Decrement')}
            </AppButton>
        </div>
    );
};
