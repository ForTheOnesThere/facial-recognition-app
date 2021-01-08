import React from 'react';
import Logo from '../Logo/Logo.js';

const Navigation = (props) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Logo />
            <p onClick={() => props.changeRoute('signin')} className='f3 link dim black undeline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;