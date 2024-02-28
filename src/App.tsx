import { FC } from 'react';
import { Counter } from './components/counter/Counter';

import './index.scss';


export const App: FC = () => {
    return (
        <div className='app'>
            <Counter />
        </div>
    )
}

export default App;
