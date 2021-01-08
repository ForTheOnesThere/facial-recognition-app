import React from 'react';

const Rank = (props) => {
    const { name, entries} = props.userDetails;
    return(
        <div>
            <div className='white f3' style={{marginLeft: '3%', marginRight: '3%', marginTop: '10%'}}>
                {`${name}, your current entry count is:`}
            </div>
            <div className='white f1'>
                {`#${entries}`}
            </div>
        </div>
    )
}

export default Rank;