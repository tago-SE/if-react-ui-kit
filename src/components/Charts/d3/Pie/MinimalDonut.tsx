import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { getAllColor } from '../../Colors';

type PieChartDataType = {
  color: string;
  value: number;
  key?: string | number;
  title?: string | number;
  [key: string]: any;
}[];

// type LabelRenderProps = {
//   x: number;
//   y: number;
//   dx: number;
//   dy: number;
//   textAnchor: string;
//   dataEntry: {
//     ...props.data[dataIndex]
//     // props.data entry relative to the label extended with:
//     startAngle: number;
//     degrees: number;
//     percentage: number;
//   };
//   dataIndex: number;
//   style: React.CSSProperties;
// };

const data: PieChartDataType = [];
for (let i = 0; i < 3; i++) {
  data.push({
    color: getAllColor(i) ,
    value: (i+1)*2,
    key: i.toString(),
    title: "Hello" + i,
  });
}

// https://www.npmjs.com/package/react-minimal-pie-chart

export const MinimalDonut = () => {

  const h1Styles: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    position: 'absolute',
    right: 0,
    bottom: '2rem',
    padding: '0.5rem',
    fontFamily: 'sans-serif',
    fontSize: '1.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  };


  return (
    <div style={{ height: "500px", width: "100%"}}>
      <PieChart
        data={data}
        // totalValue={35}
        paddingAngle={1}
        // segmentsStyle={undefined}
        reveal={100}
        animate={true}
        animationDuration={500}
        label={ ({ dataEntry }) => `${Math.round(dataEntry.value)} %`}
        labelPosition={100}
        labelStyle={((dataIndex) => { 
          return {
            fontFamily: 'sans-serif',
            fontSize: '6px',
          };
        })}
        
      />
    </div>
  );
}