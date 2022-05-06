// Similar to https://codesandbox.io/s/627nq?file=/src/util.js
import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import moment from "moment";
import styles from "./graph_styles/styles";

export default function AreaGraph({input_data})  {

  const MyResponsiveLine = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{
          type: "linear",
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false
        }}
        curve="natural"
        colors={(data) => data['color']}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Image No',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Area Ratio',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        enableArea={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
    );
    return (
      // make sure parent container have a defined height when using
      <div style={styles.container}>
        <h3 style={styles.title}>Temporal Change in Land Cover</h3>
         <MyResponsiveLine data={input_data}/>
      </div>
    )
}





/*import React, { Component } from "react";
import { ResponsiveLine } from "@nivo/line";
import moment from "moment";
import styles from "./styles";
import { nivoData } from "../util";


const style = {
    'border': '1px solid black',
    'width': '100%',
    'height': '100px',
    'backgroundColor': '#005477'
}
 
export default function AreaGraph({input_data}) {
  /*const nivoData = () => {
    return [
      {
        id: "catagory-1",
        data: simpleData().map(({ x, y }) => ({ x: new Date(x), y }))
      },
      {
        id: "catagory-2",
        data: simpleData().map(({ x, y }) => ({ x: new Date(x), y }))
      }
    ];
  }; */
  
  /*const NivoAreaChart = ({ data }) => (
    state = {
      data: input_data
    };
    customTooltip = ({ point }) => {
      return (
        <p style={styles.tooltip}>
          Time: <b>{point.data.xFormatted}</b>
          <br />
          Count: <b>{point.data.yFormatted}</b>
        </p>
      );
    };
    render() {
      return (
        // make sure parent container have a defined height when using
        <div style={styles.container}>
          <h3 style={styles.title}>Nivo Stacked Area Chart</h3>
          <ResponsiveLine
            animate
            data={this.state.data}
            margin={{ top: 24, right: 96, bottom: 72, left: 64 }}
            xFormat={d => moment(d).format("mm:ss")}
            xScale={{ type: "time", format: "native" }}
            yScale={{
              type: "linear",
              min: 0,
              max: 200,
              stacked: true
            }}
            curve="natural"
            axisBottom={{
              format: "%M:%S ",
              tickValues: "every second",
              orient: "bottom",
              legend: "time",
              legendOffset: 36,
              legendPosition: "middle"
            }}
            axisLeft={{
              legend: "count",
              legendOffset: -40,
              legendPosition: "middle"
            }}
            tooltip={this.customTooltip}
            colors={{ scheme: "purpleRed_green" }}
            lineWidth={1}
            pointSize={4}
            enableArea={true}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 8
              }
            ]}
          />
        </div>
      );
    }
  }
  return (
    <div style={style}>
    <NivoAreaChart data={input_data}/>
    </div>
  );
}  */