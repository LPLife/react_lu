import React,{useContext} from 'react';
import ThemeContext from '../context';

import './index.less';
const Hello = (props) => {
    const { username } = useContext(ThemeContext);
    return (
        <div className='hello-page'>
            hello子组件 <br />
            父组件传递过来的值count： {props.count}
            <button onClick={props.handleClick}>修改父组件传过来的count</button>
            共享的{username}
        </div>
    );
};

export default Hello;
