import React from 'react';
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import {geoJsonData} from '../data/data.js'
import {useDispatch} from 'react-redux'
const  MapBoxAccessToken  = process.env.REACT_APP_MAPBOX_TOKEN

export default function KGL() {
    const dispatch = useDispatch();
    let data = geoJsonData
  
  React.useEffect(() => {
  
    if (data) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Data",
              id: "Data"
            },
           data: data
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: {}
        })
      );
    }
  }, [dispatch, data ]);
  return (
  <KeplerGl id="map-1" mapboxApiAccessToken={MapBoxAccessToken} 
   width={window.innerWidth} height={window.innerHeight} styleType={'light'}/>
 )
}