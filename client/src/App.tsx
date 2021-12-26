import React from 'react';
import './App.css';
import MapPage from './pages/MapPage';
import HomePage from './pages/HomePage';
import SegmentationPage from './pages/Segmentationpage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/Map' element= {<MapPage/>}/>
        <Route path='/Segment' element= {<SegmentationPage/>}/>
      </Routes>
    </Router>

  );

}

export default App;
