import React, {useState,useRef,useReducer  } from 'react';
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
            console.log(h5Ref,'ddd')
            console.log(myRef.current.innerHTML); // => hello word
        };
        const [sum, dispatch] = useReducer((state, action) => {
            switch (action.type) {
                case 'add':
                    return state + action.number;
                case 'reduce':
                return state - action.number;
                default:
                return state;
            }
          }, []);
    return (
        <ThemeContext.Provider
        value={{
            username: 'superawesome',
        }}
        >
        <div className='index-page'>
            父组件index
                <Hello  handlesumClick={handleClick} count={count}></Hello>
                <Word ref={h5Ref}></Word>
            <div ref={myRef} onClick={clicktoTest}>
                hello word
            </div>
        </div>

        <button onClick={() => dispatch({type:'add',number:1})}>
        Add {sum}
      </button>
      <button onClick={() => dispatch({type:'reduce',number:1})}>
      reduce {sum}
      </button>
        </ThemeContext.Provider>
    );
};

export default Index;
