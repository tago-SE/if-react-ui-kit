import React from 'react';
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { ResponsivePie, } from '@nivo/pie'
import ResponsiveBump from 'nivo';
// Motion animation test
import {Motion, spring} from 'react-motion';
// import styled from '@emotion/react';
import styled from '@emotion/styled'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "id": "go",
      "label": "go",
      "value": 312,
      "color": "hsl(280, 70%, 50%)"
    },
    {
      "id": "c",
      "label": "c",
      "value": 310,
      "color": "hsl(311, 70%, 50%)"
    },
    {
      "id": "elixir",
      "label": "elixir",
      "value": 576,
      "color": "hsl(156, 70%, 50%)"
    },
    {
      "id": "css",
      "label": "css",
      "value": 293,
      "color": "hsl(256, 70%, 50%)"
    },
    {
      "id": "ruby",
      "label": "ruby",
      "value": 351,
      "color": "hsl(302, 70%, 50%)"
    }
];

// did not manage to target using styled
export const StyledPieChart = styled(ResponsivePie)`
    div {
        background-color: blue;
    }
    background-color: red;
    svg {
        opacity: 1;
    }
    rect {
        fill: crimson;
        opacity: 0.5
    }
`;




const customPalette = ['#ffd700', '#ffb14e', '#fa8775', '#ea5f94', '#cd34b5', '#9d02d7', '#0000ff'];

        
enum Animation {
    Idle, Opening, Closing,
}

// Use this to animate the data points in a cool way:
// https://medium.com/wolox/how-to-animate-a-pie-chart-with-victory-in-react-native-db5997b991a5
export const PieChartNivo = () => {

    const duration = 1500;
    const fps = 30;
    const frames = duration/fps;
    const anglePerFrame = 360/frames;

    const [state, setState] = React.useState({
        startAngle: 0,
        endAngle: 360,
        hoveredPieId: undefined,
        anim: Animation.Opening,
    });

    React.useEffect(() => {
        if (state.anim === Animation.Idle) return;
        if (state.anim === Animation.Opening) {
            let newStartAngle = state.startAngle + anglePerFrame;
            if (newStartAngle >= 360) newStartAngle = 360;
            setTimeout(() => {
                setState({...state, startAngle: newStartAngle, anim:  newStartAngle >= 360 ? Animation.Closing : Animation.Opening});
            }, 1000/60);
        }
        else if (state.anim === Animation.Closing) {
            let newStartAngle = state.startAngle - anglePerFrame;
            if (newStartAngle <= 0) newStartAngle = 0;
            setTimeout(() => {
                setState({...state, startAngle: newStartAngle, anim:  newStartAngle <= 0 ? Animation.Idle : Animation.Closing});
            }, 1000/60);
        }
    }, [state, setState]);


    const onPieEnter = (node, event) => {
        console.log("node", node);
        console.log("event", event);

        //event.currentTarget.style.opacity = 1.0;
        setState({...state, hoveredPieId: node.id });
    }

    const onPieLeave = (node, event) => {
        //event.currentTarget.style.opacity = 0.2;
        // if (state.hoveredPieId === node.id) {
        //     setState({...state, hoveredPieId: undefined})
        // }
    }

    const onPieClick = (node, event) => {
        console.log("clicked", event);
    }

    const onLegendClick = (node, event) => {
        console.log("on legends click", node);
        node.currentTarget.classList = "Highlighted";
    }   

    return (
        <div className="Pie-Wrapper" style={{height: "500px", width: "100%"}}>
            <StyledPieChart
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={0.7}
                cornerRadius={3}
                colors={({ value }) => customPalette[value % (customPalette.length - 1)]}
                //colors={{ scheme: 'nivo' }}
                borderWidth={0}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                radialLabelsSkipAngle={10}
                radialLabelsTextColor="#333333"
                radialLabelsLinkColor={{ from: 'color' }}
                enableRadialLabels={state.anim === Animation.Idle}
                sliceLabelsSkipAngle={10}
                sliceLabelsTextColor="#333333"
                enableSliceLabels={state.anim === Animation.Idle}
                startAngle={state.startAngle}
                endAngle={state.endAngle}
                id="hello"
                fit={true}
                onClick={onPieClick}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                defs={[
                    {
                        id: 'dots',
                        type: 'fill', // patternDots
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.1)',
                        size: 4,
                        padding: 1,
                        stagger: false,
                        opacity: 0.2,
                    },
                    {
                        id: 'lines',
                        type: 'fill', // patternLines
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.1)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10,
                        opacity: 0.3,
                    }
                ]}
                // matches defs (pattern) with sections
                fill={[
                    {
                        match: {
                            id: 'ruby'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'c'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'go'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'python'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'scala'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'lisp'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'elixir'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'javascript'
                        },
                        id: 'lines'
                    }
                ]}
                legends={[
                    {
                        anchor: 'right',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 5,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'square',
                        onClick: onLegendClick,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#0000ff',
                                    itemBackground: "#00ff00",
                                    itemOpacity: 0.4,
                                }
                            },
                        ]
                    }
                ]}
            />
        </div>
    )
}

