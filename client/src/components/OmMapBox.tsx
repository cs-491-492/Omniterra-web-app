import { Button, IconButton } from '@mui/material';
import React, {useState} from 'react';
import ReactMapGL, {NavigationControl , ScaleControl} from 'react-map-gl'
import CropFreeIcon from '@mui/icons-material/CropFree';



const  MapBoxAcessToken : string = (process.env.REACT_APP_MAPBOX_TOKEN as string)
const MapStyle : string = "mapbox://styles/mapbox/satellite-v9"
const MapStyleReq : string = '/styles/mapbox/satellite-v9'

const navControlStyle= {
    right: 10,
    top: 10
  };

  const scaleControlStyle= {
    left: 20,
    bottom: 100
  };

function OmMapBox ()  {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "100vw",
        height: "100vh",
        zoom: 10,

    })
    return <div>
        <ReactMapGL {...viewport} mapboxApiAccessToken= {MapBoxAcessToken} 
        onViewportChange={(viewport: React.SetStateAction<{ latitude: number; longitude: number; width: string; height: string; zoom: number; }>) => {setViewport(viewport)}}
        mapStyle={MapStyle}
        
        >
            <NavigationControl style={navControlStyle} />
            <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
            <Button 
                 startIcon={<CropFreeIcon />} 
                style={{color:'#000000' ,backgroundColor: '#ffffff', 
                height:'10', width:'10', right:'30', top:'30'}}
            >
        </Button>
        </ReactMapGL>
    </div>
}

export default OmMapBox