import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppButton } from 'shared/ui/AppButton';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

type CounterPropsType = {
    className?: string;
};

export const Counter: FC<CounterPropsType> = () => {
    const counterValue = useSelector(getCounterValue);

    const dispatch = useDispatch();

    const onIncrementClick = () => {
        dispatch(counterActions.increment());
    };

    const onDecrementClick = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <AppButton onClick={onIncrementClick}>increment</AppButton>
            <AppButton onClick={onDecrementClick}>decrement</AppButton>
        </div>
    );
};
