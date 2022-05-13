import React from 'react';
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import {geoJsonData} from '../data/data.js'
import {useDispatch} from 'react-redux'
import axios from "axios";
import useSWR from "swr";
const  MapBoxAccessToken  = process.env.REACT_APP_MAPBOX_TOKEN

export default function KGL() {
    const dispatch = useDispatch();
    //let data = geoJsonData
   // let mydata = geoJsonData
    let mydata = null;
    const { data} = useSWR("a", async () => {
      const response = await fetch(
        'http://127.0.0.1:5000/get_map_data'
        );
      const data = await response.json();
      return data;
    });
    if (data) {
      console.log('hey')
      console.log(data)
      mydata = data[0]
    }
    console.log(mydata)
  
  React.useEffect(() => {
  
    if (mydata) {
      dispatch(
        addDataToMap({
          datasets: {
            info: {
              label: "Data",
              id: "Data"
            },
           data: mydata
          },
          option: {
            centerMap: true,
            readOnly: false
          },
          config: {}
        })
      );
    }
  }, [dispatch, mydata ]);
  return (
  <KeplerGl id="map-1" mapboxApiAccessToken={MapBoxAccessToken} 
   width={window.innerWidth} height={window.innerHeight} styleType={'light'}/>
 )
}