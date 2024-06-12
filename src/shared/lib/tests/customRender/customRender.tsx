import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/config/i18n/i18nForTest';

export type customRenderOptionsType = {
    route?: string;
    router?: boolean;
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
    const { route = '/', router = false } = options;

    if (router) {
        return render(
            <MemoryRouter initialEntries={[route]}>
                <CommonRender component={component} />
            </MemoryRouter>,
        );
    }

    return render(<CommonRender component={component} />);
};
