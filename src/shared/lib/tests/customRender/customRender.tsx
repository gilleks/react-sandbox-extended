import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export type customRenderOptionsType = {
    route?: string;
    router?: boolean;
    redux?: boolean;
    initialState?: Partial<StateSchema>;
};

type CommonRenderType = {
    component: ReactElement;
};

const CommonRender: FC<CommonRenderType> = (props) => {
    const { component } = props;

    return <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>;
};

export const customRender = (
    component: ReactElement,
    options?: customRenderOptionsType,
) => {
    const {
        router = false,
        route = '/',
        redux = false,
        initialState,
    } = options;

    if (router && redux) {
        return render(
            <StoreProvider initialState={initialState}>
                <MemoryRouter initialEntries={[route]}>
                    <CommonRender component={component} />
                </MemoryRouter>
            </StoreProvider>,
        );
    }

    if (router) {
        return render(
            <MemoryRouter initialEntries={[route]}>
                <CommonRender component={component} />
            </MemoryRouter>,
        );
    }

    if (redux) {
        return render(
            <StoreProvider initialState={initialState}>
                <CommonRender component={component} />
            </StoreProvider>,
        );
    }

    return render(<CommonRender component={component} />);
};
