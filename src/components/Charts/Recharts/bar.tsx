import React, { PureComponent } from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Legend, Bar, Tooltip } from 'recharts';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
export const BarRecharts = () => {
  	return (
    	<BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name" xAxisId={0} />
       <XAxis dataKey="name" xAxisId={1} hide/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Bar barSize={20}dataKey="uv" xAxisId={1} fill="#ccc" />
       <Bar dataKey="pv" barSize={20} xAxisId={0} fill="#8884d8" />
      </BarChart>
    );
}

// ReactDOM.render(
//   <SimpleBarChart />,
//   document.getElementById('container')
// );
