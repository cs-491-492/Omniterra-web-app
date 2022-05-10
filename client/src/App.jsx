import React from 'react';

import './App.css';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import OmAppBar2 from './components/OmAppBar2';
import GeoJsonForm from './components/GeoJsonForm';
import SegmentationPage from './pages/Segmentationpage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider } from "react-redux";
import useSWR from "swr";
import AnnotationPage from './pages/AnnotationPage';
import ManipulatorPage from './pages/ManipulatorPage';
import GalleryPage from './pages/GalleryPage';
import SandboxPage from './pages/SandboxPage';
import CarouselComp from './components/CarouselComp';
import LandcoverComp from './components/LandcoverComp';
import {DEFAULT_MAP_STYLES} from "kepler.gl";
import keplerGlReducer, {mapStateUpdaters} from "kepler.gl/reducers";


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
        <Route path='/Sandbox' element={<SandboxPage/>}/>
        <Route path='/Annotation' element={<AnnotationPage/>}/>
        <Route path='/Gallery' element={<GalleryPage/>}/>
        <Route path='/Landcover' element={<LandcoverComp to={'http://localhost:8080/'}/>}/>
      </Routes>
    </Router>
    </Provider>
  );

}

