import React from 'react';
import './index.less';
const Hello = (props) => {
    return (
        <div className='hello-page'>
            hello子组件 <br />
            父组件传递过来的值count： {props.count}
            <button onClick={props.handleClick}>修改父组件传过来的count</button>
        </div>
    );
};

export default Hello;
