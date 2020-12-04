import React, {useState} from 'react';
import Hello from './components/hello';
const Index = (props) => {
    const [count, setCount] = useState(0);
    let handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div className='index-page'>
            <Hello handleClick={handleClick} count={count}></Hello>
        </div>
    );
};

export default Index;
