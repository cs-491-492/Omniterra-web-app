import React from 'react';
import OmAppBar2 from '../components/OmAppBar2';
import SegmentedImage from "../components/info.png";


function HomePage(){
    return(
        
        <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
            <OmAppBar2/> 
            <img className="info" src={SegmentedImage} alt="" />
        </div>
    )
}

export default HomePage