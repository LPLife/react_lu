import React, {useState,useRef } from 'react';
import Hello from './components/hello';
import Word from './components/word';
import ThemeContext from './components/context';
import './index.less';

const Index = () => {
    let [count, setCount] = useState(0),
        handleClick = () => {
            setCount(count + 1);
        },
        //使用 ref 去存储 DOM 节点的引用
        myRef = useRef(),
        clicktoTest = () => {
            console.log(myRef.current.innerHTML); // => hello word
        };
    return (
        <ThemeContext.Provider 
        value={{
            username: 'superawesome',
        }}
        >
        <div className='index-page'>
            父组件index

                <Hello  handleClick={handleClick} count={count}></Hello>
                <Word></Word>
            <div ref={myRef} onClick={clicktoTest}>
                hello word
            </div>
        </div>
        </ThemeContext.Provider>
    );
};

export default Index;
