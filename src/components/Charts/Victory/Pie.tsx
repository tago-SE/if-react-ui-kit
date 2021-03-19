import { VictoryPie} from 'victory';
import React from 'react';
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

        
enum Animation {
    Idle, Opening, Closing,
}

const ScatterPoint = ({ x, y }) => {
    const [selected, setSelected] = React.useState(false);
    const [hovered, setHovered] = React.useState(false);
  
    return (
      <circle
        cx={x}
        cy={y}
        //r={datum.x * datum.y}
        stroke={hovered ? "purple" : "white"}
        strokeWidth={2}
        fill={selected ? "cyan" : "magenta"}
        onClick={() => setSelected(!selected)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    );
  };
  
/*

events={[{
      childName: ["pie", "bar"],
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {fill: "tomato"})
              };
            }
          }];
          */
export const MyVictoryPie = () => {
    return (
        <div style={{ width: "100%", height: "500px"}}>
            <h3>Click Me</h3>
            {/* <VictoryPie
                data={[
                    { x: "Cats", y: 35 },
                    { x: "Dogs", y: 40 },
                    { x: "Birds", y: 55 }
                ]}
            /> */}
            
            <VictoryPie
                radius={({ datum }) => 5 + datum.y * 2}
                // standalone={true}
                y={(d) => d.x + d.y}
                style={{
                    data: {
                      fillOpacity: 0.5, stroke: "#c43a31", strokeWidth: 3
                    },
                    labels: {
                      fontSize: 25, fill: "#c43a31"
                    }
                  }}
                events={[
                    {
                        target: "data",
                        eventHandlers: {
                            onClick: () => {
                                return [
                                    {
                                    target: "data",
                                    mutation: ({ style }) => {
                                        return style.fill === "#c43a31" ? null : { style: { fill: "#c43a31" } };
                                    }
                                    }, {
                                    target: "labels",
                                        mutation: ({ text }) => {
                                            return text === "clicked" ? null : { text: "clicked" };
                                        }
                                    }
                                ];
                            },
                        }
                    },
                    {
                        target: "data",
                        eventHandlers: {
                            onMouseOver: () => {
                                return [{
                                    target: "data",
                                    mutation: ({ style }) => {
                                        return style.fill === "#c43a31" ? null : { style: { fill: "#00ff00" } };
                                    }
                                }]  
                            }        
                        }
                    },
                    
                ]}
                data={data}
            />
        </div>
    );
}