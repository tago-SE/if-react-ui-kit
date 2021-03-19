// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import styled from '@emotion/styled'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = [
    {
      "country": "AD",
      "hot dog": 10,
      "hot dogColor": "hsl(303, 70%, 50%)",
      "burger": 123,
      "burgerColor": "hsl(95, 70%, 50%)",
      "sandwich": 113,
      "sandwichColor": "hsl(323, 70%, 50%)",
      "kebab": 183,
      "kebabColor": "hsl(194, 70%, 50%)",
      "fries": 172,
      "friesColor": "hsl(263, 70%, 50%)",
      "donut": 114,
      "donutColor": "hsl(244, 70%, 50%)"
    },
    {
      "country": "AE",
      "hot dog": 179,
      "hot dogColor": "hsl(223, 70%, 50%)",
      "burger": 182,
      "burgerColor": "hsl(49, 70%, 50%)",
      "sandwich": 184,
      "sandwichColor": "hsl(335, 70%, 50%)",
      "kebab": 65,
      "kebabColor": "hsl(122, 70%, 50%)",
      "fries": 197,
      "friesColor": "hsl(49, 70%, 50%)",
      "donut": 21,
      "donutColor": "hsl(18, 70%, 50%)"
    },
    {
      "country": "AF",
      "hot dog": 75,
      "hot dogColor": "hsl(116, 70%, 50%)",
      "burger": 99,
      "burgerColor": "hsl(113, 70%, 50%)",
      "sandwich": 124,
      "sandwichColor": "hsl(216, 70%, 50%)",
      "kebab": 31,
      "kebabColor": "hsl(181, 70%, 50%)",
      "fries": 133,
      "friesColor": "hsl(245, 70%, 50%)",
      "donut": 130,
      "donutColor": "hsl(273, 70%, 50%)"
    },
    {
      "country": "AG",
      "hot dog": 121,
      "hot dogColor": "hsl(349, 70%, 50%)",
      "burger": 189,
      "burgerColor": "hsl(32, 70%, 50%)",
      "sandwich": 4,
      "sandwichColor": "hsl(152, 70%, 50%)",
      "kebab": 97,
      "kebabColor": "hsl(238, 70%, 50%)",
      "fries": 146,
      "friesColor": "hsl(348, 70%, 50%)",
      "donut": 129,
      "donutColor": "hsl(285, 70%, 50%)"
    },
    {
      "country": "AI",
      "hot dog": 63,
      "hot dogColor": "hsl(14, 70%, 50%)",
      "burger": 26,
      "burgerColor": "hsl(329, 70%, 50%)",
      "sandwich": 32,
      "sandwichColor": "hsl(285, 70%, 50%)",
      "kebab": 29,
      "kebabColor": "hsl(349, 70%, 50%)",
      "fries": 49,
      "friesColor": "hsl(6, 70%, 50%)",
      "donut": 98,
      "donutColor": "hsl(346, 70%, 50%)"
    },
    {
      "country": "AL",
      "hot dog": 135,
      "hot dogColor": "hsl(326, 70%, 50%)",
      "burger": 123,
      "burgerColor": "hsl(176, 70%, 50%)",
      "sandwich": 0,
      "sandwichColor": "hsl(277, 70%, 50%)",
      "kebab": 172,
      "kebabColor": "hsl(130, 70%, 50%)",
      "fries": 61,
      "friesColor": "hsl(253, 70%, 50%)",
      "donut": 43,
      "donutColor": "hsl(260, 70%, 50%)"
    },
    {
      "country": "AM",
      "hot dog": 96,
      "hot dogColor": "hsl(233, 70%, 50%)",
      "burger": 107,
      "burgerColor": "hsl(169, 70%, 50%)",
      "sandwich": 118,
      "sandwichColor": "hsl(298, 70%, 50%)",
      "kebab": 109,
      "kebabColor": "hsl(4, 70%, 50%)",
      "fries": 173,
      "friesColor": "hsl(246, 70%, 50%)",
      "donut": 148,
      "donutColor": "hsl(315, 70%, 50%)"
    }
];

export const StyledResponsiveBar = styled(ResponsiveBar)`
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


export const BarNivo = () => (
    <div style={{height: "500px", width: "100%"}}>
    <StyledResponsiveBar
        data={data}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    /></div>
);