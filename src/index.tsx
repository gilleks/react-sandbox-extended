import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ThemeProvider } from 'app/providers/themeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError';

import 'shared/config/i18n/i18n';

import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const rootElement = document.querySelector('#root');

if (!rootElement) throw new Error('Failed to find the root element');

const root = createRoot(rootElement);

root.render(
    <StoreProvider>
        <StrictMode>
            <BrowserRouter>
                <ErrorBoundary fallback={<PageError />}>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StrictMode>
    </StoreProvider>,
);
