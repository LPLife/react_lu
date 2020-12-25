import React, {useState, useRef, useReducer} from 'react';
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
        h5Ref = useRef(),
        clicktoTest = () => {
            console.log(h5Ref, 'ddd');
            console.log(myRef.current.innerHTML); // => hello word
        };
    /**
     * useReducer接受一个reducer函数作为参数，以及一个初始值。reducer接收​两个参数
     *​一个是当前的state，一个action（动作），返回最新的state
     */
    const [sum, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1;
            case 'reduce':
                return state - 1;
            default:
                return state;
        }
    }, 0);
    return (
        <ThemeContext.Provider
            value={{
                username: 'superawesome',
                sumState: sum,
                sumDispatch: dispatch
            }}
        >
            <div className='index-page'>
                父组件index
                <Hello handlesumClick={handleClick} count={count}></Hello>
                <Word ref={h5Ref}></Word>
                <div ref={myRef} onClick={clicktoTest}>
                    hello word
                </div>
            </div>

            <button onClick={() => dispatch({type: 'add'})}>Add {sum}</button>
            <button onClick={() => dispatch({type: 'reduce'})}>reduce {sum}</button>
        </ThemeContext.Provider>
    );
};

export default Index;
