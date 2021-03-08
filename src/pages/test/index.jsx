import React, {useState} from 'react';

import './index.less';
let timer = null;
const Test  = () => {
    let [count, setCount] = useState(0);
    const add = () => {
        timer =  setInterval(() => {
                setCount(count++);
            }, 1000);
        }
    const suspend = () => {
        if (timer) {
            clearInterval(timer)              
        }
    }
    const reset = () => {
        setCount(0);
        clearInterval(timer)
    }
    return (
        <div>
           count: {count}
            <button onClick={add}>add</button>
            <button onClick={suspend}>suspend</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Test;
