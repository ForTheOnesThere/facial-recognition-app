import React from 'react';
import './FaceRecognition.css';
 
const FaceRecognition = (props) => {
    return(    
         <div className='center ma'> 
            <div className='absolute mt2'>
                <img id='user-image' alt='' src={props.image} width='500px' height='auto'/> 
                <div className='bounding-box' style={{top: props.box.top, right: props.box.right, bottom: props.box.bottom, left: props.box.left}}></div> 
            </div>                     
         </div>
    )
}

export default FaceRecognition;