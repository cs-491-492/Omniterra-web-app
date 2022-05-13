import React from 'react';

import OmAppBar2 from '../components/OmAppBar2';
import OmMapBox from '../components/OmMapBox';
import OmAppBar from '../components/OmAppBar';
import SegPage from './SegPage';
import GeoJsonForm from '../components/GeoJsonForm';
import SegPage2 from './SegPage2';

function SegmentationPage() {
    return(
        <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
        <OmAppBar2/> 
      
        <SegPage2/>
    </div>
    )


}

export default SegmentationPage