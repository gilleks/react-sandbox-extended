import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';


export const AppRouter: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    routeConfig.map(({ element, path }) => {
                        return (
                            <Route key={path} path={path} element={element} />
                        );
                    })
                }
            </Routes>
        </Suspense>
    );
};
