import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import logo from './circuit.png';
 


const Logo = () => {
    return(
     <div className='ma4 mt0'>
         <Tilt className="Tilt br2 shadow-2" options={{ max : 15 }} style={{ height: 100, width: 100, position: 'absolute', left: '10px', top: '10px'}} >
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'space-around'}} className="Tilt-inner">
                <img onClick={() => window.open('https://github.com/ForTheOnesThere')} className="centerLogo" alt='logo' src={logo}/>
            </div>
         </Tilt>
     </div>
    )
}

export default Logo;