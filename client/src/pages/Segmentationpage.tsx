import React from 'react';

import OmAppBar2 from '../components/OmAppBar2';
import OmMapBox from '../components/OmMapBox';
import OmAppBar from '../components/OmAppBar';
import SegPage from '../SegPage';

function SegmentationPage() {
    return(
        <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
        <OmAppBar2/> 
        <SegPage/>
    </div>
    )


}

export default SegmentationPage