import React, {useState} from 'react';
import Hello from './components/hello';
import Word from './components/word';

const Index = (props) => {
    let [count, setCount] = useState(0),
        handleClick = () => {
            setCount(count + 1);
        },
        //使用 ref 去存储 DOM 节点的引用
        myRef = React.createRef(),
        clicktoTest = () => {
            console.log(myRef.current.innerHTML); // => hello word
        };
    return (
        <div className='index-page'>
            <Hello handleClick={handleClick} count={count}></Hello>
            <Word></Word>
            <div ref={myRef} onClick={clicktoTest}>
                hello word
            </div>
        </div>
    );
};

export default Index;
