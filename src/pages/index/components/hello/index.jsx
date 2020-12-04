import React from 'react';

const Hello = (props) => {
    return (
        <div className='from-page'>
            父组件传递过来的值count： {props.count}
            <button onClick={props.handleClick}>修改父组件传过来的count</button>
        </div>
    );
};

export default Hello;
