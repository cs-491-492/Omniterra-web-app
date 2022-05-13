import React from 'react';
import OmAppBar2 from '../components/OmAppBar2';
import InfoImage from "../images/info.png";


function HomePage(){
    return(
        
        <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
            <OmAppBar2/> 
            <img className="info" src={InfoImage} alt="" />
        </div>
    )
}

export default HomePage