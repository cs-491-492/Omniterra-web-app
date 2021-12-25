import React from 'react';

import './App.css';
import Button from '@mui/material/Button';
import OmAppBar from './components/OmAppBar';
import OmAppBar2 from './components/OmAppBar2';
import OmMapBox from './components/OmMapBox';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid'
import SegPage from './SegPage';
import UploadImages from "./upload-images.component";


function App() {
  return (
    <div>
     
        <OmAppBar2/> 
        <SegPage/>
        
       
    
      
    </div>
  );
   /*<OmMapBox/>*/
}

export default App;
