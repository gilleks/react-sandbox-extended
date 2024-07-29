import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
    test('should decrement counter value = 9', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.decrement())).toEqual({
            value: 9,
        });
    });

    test('should increment counter value = 11', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(counterReducer(state, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test('should increment counter value = 1 if state empty', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });
});
