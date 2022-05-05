import React from 'react';
import {geoJsonData} from './data/data.js'
import './App.css';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import OmAppBar2 from './components/OmAppBar2';
import GeoJsonForm from './components/GeoJsonForm';
import SegmentationPage from './pages/Segmentationpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import keplerGlReducer, {mapStateUpdaters} from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl, {DEFAULT_MAP_STYLES} from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSWR from "swr";
import AnnotationPage from './pages/AnnotationPage';
import ManipulatorPage from './pages/ManipulatorPage';
import GalleryPage from './pages/GalleryPage';
import CarouselComp from './components/CarouselComp';
const  MapBoxAccessToken  = process.env.REACT_APP_MAPBOX_TOKEN


/*const reducers = combineReducers({
  keplerGl: keplerGlReducer
});*/

const customizedKeplerGlReducer = keplerGlReducer.initialState({
  mapStyle: {
    mapStyles: {
        ...DEFAULT_MAP_STYLES,
    },
    styleType: 'satellite'
  }
});

const reducers = combineReducers({
  keplerGl: customizedKeplerGlReducer
});


const store = createStore(reducers, {}, applyMiddleware(taskMiddleware));


export default function App() {

 

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/Map' element= {<MapPage/>}/>
        <Route path='/Segment' element= {<SegmentationPage/>}/>
        <Route path='/Kepler' element={<Kgl/>}/>
        <Route path='/Annotation' element={<AnnotationPage/>}/>
        <Route path='/Manipulator' element={<ManipulatorPage/>}/>
        <Route path='/Gallery' element={<GalleryPage/>}/>
    
      </Routes>
    </Router>
    </Provider>
  );

}

function Kgl(){
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



  return <div>
    <OmAppBar2/>
    {/*  <GeoJsonForm geoJsonData={data}/> */}
    <KeplerGl id="map-1" mapboxApiAccessToken={MapBoxAccessToken} 
     width={window.innerWidth} height={window.innerHeight} styleType={'light'}/>
  
  </div>
}
//width={window.innerWidth} height={window.innerHeight}
//   <GeoJsonForm />

/*

React.useEffect(() => {
  if (data) {
    dispatch(
      addDataToMap({
        datasets: {
          info: {
            label: "hey",
            id: "hey"
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
}, [dispatch, data]);
*/

/*
 {
        fields: 
          [
            {
              "name":"_geojson",
              "type":"geojson",
              "format":"",
              "analyzerType":"GEOMETRY"
           },
         
           
         ],
        rows: [
          [
             {
                "type":"Feature",
                "geometry":{
                   "type":"Polygon",
                   "coordinates":[
                      [
                         [
                            104.94065978802936,
                            -4.447213075711515
                         ],
                         [
                            104.94065978802936,
                            -7.36876298598175
                         ],
                         [
                            108.81812774118436,
                            -7.36876298598175
                         ],
                         [
                            108.81812774118436,
                            -4.447213075711515
                         ],
                         [
                            104.94065978802936,
                            -4.447213075711515
                         ]
                      ]
                   ]
                }
             }
          ],
          [
             {
                "type":"Feature",
                "geometry":{
                   "type":"Polygon",
                   "coordinates":[
                      [
                         [
                            102.19818062000978,
                            -0.9027508363555458
                         ],
                         [
                            102.19818062000978,
                            -2.886497863202886
                         ],
                         [
                            105.77105723495364,
                            -2.886497863202886
                         ],
                         [
                            105.77105723495364,
                            -0.9027508363555458
                         ],
                         [
                            102.19818062000978,
                            -0.9027508363555458
                         ]
                      ]
                   ]
                }
             }
          ]
       ]
      }
*/