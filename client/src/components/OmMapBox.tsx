import { Button, IconButton } from '@mui/material';
import React, {useState, useEffect} from 'react';
import ReactMapGL, {NavigationControl , ScaleControl} from 'react-map-gl'
import CropFreeIcon from '@mui/icons-material/CropFree';
import FileSaver from 'file-saver';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const  MapBoxAcessToken : string = (process.env.REACT_APP_MAPBOX_TOKEN as string)
const MapStyle : string = "mapbox://styles/mapbox/satellite-v9"
const MapStyleReq : string = 'styles/v1/mapbox/satellite-v9'
//const request:String = `https://api.mapbox.com/{map_style}/static/{longitude},{latitude},{zoom},0/{size}?{token}`

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
        preserveDrawingBuffer: true,
    })

    const [imgLink, setImgLink] = useState('')

    const  createReq = (map_style:string, longitude:number, latitude:number,zoom:number, size:string, token:string) => {
        return `https://api.mapbox.com/${map_style}/static/${longitude},${latitude},${zoom},0/${size}?access_token=${token}`
    }

    const onClickScreenShot = () =>{
        const size = `${viewport.width}x${viewport.height}`;
        const size2= `${1280}x${1280}`
        const size3 = `${600}x${600}`
        const reqStr = createReq(MapStyleReq, viewport.longitude,
         viewport.latitude, viewport.zoom,size3, MapBoxAcessToken );
         setImgLink(reqStr)
    }

    const map:any =  <ReactMapGL {...viewport} mapboxApiAccessToken= {MapBoxAcessToken} 
    onViewportChange={(viewport: React.SetStateAction<{ latitude: number; longitude: number; width: string; height: string; zoom: number; preserveDrawingBuffer:boolean; }>) => {setViewport(viewport)}}
    mapStyle={MapStyle}
    >
        <NavigationControl style={navControlStyle} />
        <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
        <Button 
             startIcon={<CropFreeIcon />} 
            style={{color:'#000000' ,backgroundColor: '#ffffff', 
            height:'10', width:'10', right:'30', top:'30'}}
            onClick={onClickScreenShot}
        >
    </Button>
    <Popup trigger={<button> See Image</button>} position="right center">
    <div><img src={imgLink} alt='idk'></img></div>
    </Popup>
    </ReactMapGL>

    return <div>
     { map}
    </div>
}

export default OmMapBox