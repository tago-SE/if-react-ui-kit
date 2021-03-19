import React from 'react';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryBrushContainer, VictoryAxis } from 'victory';

// const data = [
//     {
//       "id": "go",
//       "label": "go",
//       "value": 312,
//       "color": "hsl(280, 70%, 50%)"
//     },
//     {
//       "id": "c",
//       "label": "c",
//       "value": 310,
//       "color": "hsl(311, 70%, 50%)"
//     },
//     {
//       "id": "elixir",
//       "label": "elixir",
//       "value": 576,
//       "color": "hsl(156, 70%, 50%)"
//     },
//     {
//       "id": "css",
//       "label": "css",
//       "value": 293,
//       "color": "hsl(256, 70%, 50%)"
//     },
//     {
//       "id": "ruby",
//       "label": "ruby",
//       "value": 351,
//       "color": "hsl(302, 70%, 50%)"
//     }
// ];

const data = [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 }
];

const customPalette = ['#ffd700', '#ffb14e', '#fa8775', '#ea5f94', '#cd34b5', '#9d02d7', '#0000ff'];


export class MyBrushLine extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    
    handleZoom(domain) {
        this.setState({selectedDomain: domain});
      }
    
      handleBrush(domain) {
        this.setState({zoomDomain: domain});
      }
    
      render() {
        return (
          <div>
              <VictoryChart
                width={550}
                height={300}
                scale={{x: "time"}}
                containerComponent={
                  <VictoryZoomContainer responsive={false}
                    zoomDimension="x"
                    zoomDomain={this.state.zoomDomain}
                    onZoomDomainChange={this.handleZoom.bind(this)}
                  />
                }
              >
                <VictoryLine
                  style={{
                    data: {stroke: "tomato"}
                  }}
                  data={[
                    {x: new Date(1982, 1, 1), y: 125},
                    {x: new Date(1987, 1, 1), y: 257},
                    {x: new Date(1993, 1, 1), y: 345},
                    {x: new Date(1997, 1, 1), y: 515},
                    {x: new Date(2001, 1, 1), y: 132},
                    {x: new Date(2005, 1, 1), y: 305},
                    {x: new Date(2011, 1, 1), y: 270},
                    {x: new Date(2015, 1, 1), y: 470}
                  ]}
                />
    
              </VictoryChart>
    
              <VictoryChart
                width={550}
                height={90}
                scale={{x: "time"}}
                padding={{top: 0, left: 50, right: 50, bottom: 30}}
                containerComponent={
                  <VictoryBrushContainer responsive={false}
                    brushDimension="x"
                    brushDomain={this.state.selectedDomain}
                    onBrushDomainChange={this.handleBrush.bind(this)}
                  />
                }
              >
                <VictoryAxis
                  tickValues={[
                    new Date(1985, 1, 1),
                    new Date(1990, 1, 1),
                    new Date(1995, 1, 1),
                    new Date(2000, 1, 1),
                    new Date(2005, 1, 1),
                    new Date(2010, 1, 1),
                    new Date(2015, 1, 1)
                  ]}
                  tickFormat={(x) => new Date(x).getFullYear()}
                />
                <VictoryLine
                  style={{
                    data: {stroke: "purple"}
                  }}
                  data={[
                    {x: new Date(1982, 1, 1), y: 125},
                    {x: new Date(1987, 1, 1), y: 257},
                    {x: new Date(1993, 1, 1), y: 345},
                    {x: new Date(1997, 1, 1), y: 515},
                    {x: new Date(2001, 1, 1), y: 132},
                    {x: new Date(2005, 1, 1), y: 305},
                    {x: new Date(2011, 1, 1), y: 270},
                    {x: new Date(2015, 1, 1), y: 470}
                  ]}
                />
              </VictoryChart>
          </div>
        );
      }
}