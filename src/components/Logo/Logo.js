import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './circuit.png';
 


const Logo = () => {
    return(
     <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 250, width: 250 }} >
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around'}}className="Tilt-inner">
                <img className="center" alt='logo' src={logo}/>
            </div>
         </Tilt>
     </div>
    )
}

export default Logo;