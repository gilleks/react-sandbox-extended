import { FC, useState } from "react";
import './counter.scss';

export const Counter: FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div className="wrapper">
            <h3>Counter</h3>
            <h1>{count}</h1>
            <button className="buttonCounter" onClick={handleIncrement}>increment</button>
        </div>
    );
};
