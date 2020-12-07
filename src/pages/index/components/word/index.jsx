import React, {useState} from 'react';
import './index.less';
const Word = () => {
    let [name, setName] = useState('名字为空'),
        handleClick = () => {
            setName('liming');
        };
    return (
        <div className='word-page'>
            word子组件 <br />
            name:{name}
            <p onClick={handleClick}>设置名字</p>
        </div>
    );
};

export default Word;
