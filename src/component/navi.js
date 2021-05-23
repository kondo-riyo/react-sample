import React from 'react';
import { useHistory } from 'react-router-dom';

const Nav = props => {
    const history =useHistory();
    const handleLink = path => history.push(path);
    return (
        <nav>
        <button onClick={()=>handleLink('/ticket')}>チケット作成</button>
        </nav>
    )
}

export default Nav