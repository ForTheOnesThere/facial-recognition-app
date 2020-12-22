import React from 'react';

const Navigation = (props) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => props.changeRoute('signin')} className='f3 link dim black undeline pa3 pointer'>Sign Out</p>
        </nav>
    )
}

export default Navigation;