import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

import { routeConfig } from '../config/routeConfig';

export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {routeConfig.map(({ element, path }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <div className="pageWrapper">{element}</div>
                            }
                        />
                    );
                })}
            </Routes>
        </Suspense>
    );
};
