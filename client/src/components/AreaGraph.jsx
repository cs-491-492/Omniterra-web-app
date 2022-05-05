import React from "react";
import {VictoryChart, VictoryStack, VictoryGroup, VictoryArea, VictoryPortal, VictoryScatter} from 'victory'

const style = {
    'border': '1px solid black',
    'width': '100%',
    'height': '100px',
    'backgroundColor': '#005477'
}

class AreaGraph extends React.Component {


    render() {

    const style = {
        'width': '100%',
        'height': '400px',
    }
      return (
        <div style={style}>
          <VictoryChart scale={{ x: "time" }} width={400} height={400}>
            <VictoryStack colorScale="warm">
              <VictoryGroup
                data={[
                  { x: new Date(1986, 1, 1), y: 2 },
                  { x: new Date(1996, 1, 1), y: 3 },
                  { x: new Date(2006, 1, 1), y: 5 },
                  { x: new Date(2016, 1, 1), y: 4 }
                ]}
              >
                <VictoryArea/>
                <VictoryPortal>
                  <VictoryScatter
                    style={{ data: { fill: "black" } }}
                  />
                </VictoryPortal>
              </VictoryGroup>
              <VictoryGroup
                data={[
                  { x: new Date(1986, 1, 1), y: 4 },
                  { x: new Date(1996, 1, 1), y: 3 },
                  { x: new Date(2006, 1, 1), y: 2 },
                  { x: new Date(2016, 1, 1), y: 5 }
                ]}
              >
                <VictoryArea/>
               <VictoryPortal>
                  <VictoryScatter
                    style={{ data: { fill: "black" } }}
                  />
                </VictoryPortal>
              </VictoryGroup>
              <VictoryGroup
                data={[
                  { x: new Date(1986, 1, 1), y: 3 },
                  { x: new Date(1996, 1, 1), y: 1 },
                  { x: new Date(2006, 1, 1), y: 4 },
                  { x: new Date(2016, 1, 1), y: 2 }
                ]}
              >
                <VictoryArea/>
                <VictoryPortal>
                  <VictoryScatter
                    style={{ data: { fill: "black" } }}
                  />
                </VictoryPortal>
              </VictoryGroup>
            </VictoryStack>
          </VictoryChart>
        </div>
      );
    }
  }
  
 export default AreaGraph;