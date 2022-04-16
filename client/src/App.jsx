import React from 'react';
import './App.css';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import OmAppBar2 from './components/OmAppBar2';
import SegmentationPage from './pages/Segmentationpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import KeplerGlReducer from "kepler.gl/reducers";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import useSwr from "swr";
const  MapBoxAccessToken  = process.env.REACT_APP_MAPBOX_TOKEN 

const reducers = combineReducers({
  keplerGl: keplerGlReducer
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
      </Routes>
    </Router>
    </Provider>
  );

}

function Kgl(){
  return <div>
    <OmAppBar2/>
    <KeplerGl id="map-1" mapboxApiAccessToken={MapBoxAccessToken} 
    width={window.innerWidth} height={window.innerHeight} />
  </div>
}
