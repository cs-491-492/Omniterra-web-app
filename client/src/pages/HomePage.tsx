import React from 'react';
import OmAppBar2 from '../components/OmAppBar2';

function HomePage(){
    return(
        
        <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
            <OmAppBar2/>
            <img src='../images/info.jpg' alt='a'> </img>
        </div>
    )
}

export default HomePage