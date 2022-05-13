import { Button, IconButton } from '@mui/material';
import React, {useState, useEffect} from 'react';
import ReactMapGL, {NavigationControl , ScaleControl, Marker} from 'react-map-gl'
import CropFreeIcon from '@mui/icons-material/CropFree';
import FileSaver from 'file-saver';
import axios from 'axios';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ConstructionOutlined } from '@mui/icons-material';


const  MapBoxAcessToken  = process.env.REACT_APP_MAPBOX_TOKEN 
const MapStyle  = "mapbox://styles/mapbox/satellite-v9"
const MapStyleReq  = 'styles/v1/mapbox/satellite-v9'
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
        latitude: 39.875275,
        longitude: 32.748524,
        width: "100vw",
        height: "100vh",
        zoom: 10,
        preserveDrawingBuffer: true,
    })

    const [imgLink, setImgLink] = useState('')

    const  createReq = (map_style, longitude, latitude,zoom, size, token) => {
        return `https://api.mapbox.com/${map_style}/static/${longitude},${latitude},${zoom},0/${size}?access_token=${token}`
    }

     const onClickScreenShot = async () =>{
        //const size = `${viewport.width}x${viewport.height}`;
       // const size2= `${1280}x${1280}`
        const size3 = `${1024}x${1024}`
        const reqStr = createReq(MapStyleReq, viewport.longitude,
         viewport.latitude, viewport.zoom,size3, MapBoxAcessToken );
         setImgLink(reqStr)

        const response = await axios({
            url:imgLink,
            method:'GET',
            responseType: 'blob'
        })  
        
        const img = window.URL.createObjectURL(new Blob([response.data],{type:'image/png'}))
        console.log(img)
      // crop 10 px from the bottom of img
    
        const canvas = document.createElement('canvas');
        canvas.width = 1024;
        canvas.height = 1024;
        const ctx = canvas.getContext('2d');
        const img2 = new Image();
        img2.src = img;
        img2.onload = () => {
        console.log(img2)
        ctx.drawImage(img2, 20 ,20, 984, 984, 0, 0, 1024, 1024);
        const dataURL = canvas.toDataURL('image/png');
        FileSaver.saveAs(dataURL, "img.png")
        }
    }

    const map =  <ReactMapGL {...viewport} mapboxApiAccessToken= {MapBoxAcessToken} 
    onViewportChange={(viewport) => {setViewport(viewport)}}
    mapStyle={MapStyle}
    >
        <NavigationControl style={navControlStyle} />
        <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
        <Button 
             startIcon={<CropFreeIcon />} 
            style={{color:'#000000' ,backgroundColor: '#ffffff', 
            height:'10', width:'10', right:'30', top:'30'}}
            onClick={ onClickScreenShot}
        >
    </Button>
    <Popup trigger={<button> See Image</button>} position="right center">
    <div><img src={imgLink} alt='idk'></img></div>
    </Popup>

    

    </ReactMapGL>

    return <div>
     {map}
    </div>
}

export default OmMapBox