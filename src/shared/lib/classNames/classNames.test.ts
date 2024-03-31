import { classNames } from './classNames';

describe('classNames', () => {
    test('show "someClasses" if you pass "someClasses" to the function', () => {
        const expected = 'someClasses';

        const myClass = classNames('someClasses');

        expect(myClass).toBe(expected);
    });

    test('show "someClasses class1 class2" if you pass "someClasses class1 class2" to the function', () => {
        const expected = 'someClasses class1 class2';

        const myClass = classNames('someClasses', {}, ['class1', 'class2']);

        expect(myClass).toBe(expected);
    });

    test('show "someClasses class1 class2 hovered scrollable" if you pass "someClasses class1 class2 hovered scrollable" to the function', () => {
        const expected = 'someClasses class1 class2 hovered scrollable';

        const myClass = classNames(
            'someClasses',
            { ['hovered']: true, scrollable: true },
            ['class1', 'class2'],
        );

        expect(myClass).toBe(expected);
    });

    test('show "someClasses class1 scrollable" if you pass "someClasses class1 scrollable" to the function if "hovered" = false', () => {
        const expected = 'someClasses class1 scrollable';

        const myClass = classNames(
            'someClasses',
            { ['hovered']: false, scrollable: true },
            ['class1'],
        );

        expect(myClass).toBe(expected);
    });

    test('show "someClasses class1" if you pass "someClasses class1" to the function if scrollable: undefined', () => {
        const expected = 'someClasses class1';

        const myClass = classNames(
            'someClasses',
            { ['hovered']: false, scrollable: undefined },
            ['class1'],
        );

        expect(myClass).toBe(expected);
    });
});
