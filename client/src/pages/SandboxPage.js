import React from 'react';
import OmAppBar2 from "../components/OmAppBar2";
import KGL from "../components/KeplerGL";
import GeoJsonForm from '../components/GeoJsonForm';
import '../App.css';

function SandboxPage() {
   return(
       <div style={{ display: "flex", justifyContent: "flex-end", flexDirection:'column' }}>
       <OmAppBar2/>    
       <GeoJsonForm /> 
       <KGL/>
   </div>
   )
}
export default SandboxPage
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

