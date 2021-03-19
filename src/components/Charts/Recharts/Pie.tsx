import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './pie.scss';

/**
 * Sold alternative 
 * https://codesandbox.io/s/github/rakannimer/react-google-charts/tree/master/sandboxes/pie-chart
 */
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ["#87C7BA", "#FCC74F", "#FF8569", "#4CB0D3","#805C5C", "#4A6886" ];
const RADIAN = Math.PI / 180;

for (let i = 0; i < data.length;  i++) {
    data[i]['fill'] = COLORS[i];
}


         
/**
 * Unknown
 */

const renderActiveShape2 = (props) => {
  console.log("active ", props);
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, /*, fill */ payload, percent, value } = props;
    const fill = payload.fill;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    console.log("render active", props);
    return (
        <g className="pie is-active">
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
        </text>
        <Sector
            className="WhatOnEarth"
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill} 
        />
    </g>
  );
};


/**
 * Circle with extra label area 
 */
const renderActiveShape = (props) => {
    console.log("active ", props);
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, /*, fill */ payload, percent, value } = props;
    const fill = payload.fill;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 0) * cos;
    const sy = cy + (outerRadius + 0) * sin;
    const mx = cx + (outerRadius + 55) * cos;
    const my = cy + (outerRadius + 55) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 25;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
    console.log("render active", props);
    return (
        <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
            {payload.name}
        </text>
        <Sector
            className="MyClassName"
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            fill={fill} 
        />
        {/* <Sector
            cx={cx}
            cy={cy}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={outerRadius + 6}
            outerRadius={outerRadius + 10}
            fill={fill}
        /> */}
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
            {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
        </g>
    );
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${data[index].name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export class PieRecharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: undefined,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onPieLeave = (_, index) => {
    if (this.state.activeIndex === index) {
        this.setState({...this.state, activeIndex: undefined});
    }
  }

  onPieClick = (_, index) => {
    this.setState({...this.state, activeIndex: this.state.activeIndex !== index ? index : undefined });
  }

  onClickLegend = (_, index) => {

  }

  render() {
    return (
        <div className="pie-chart" style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <PieChart>
                {/* <Legend
                    payload={
                        data.map(
                        item => ({
                            id: item.name,
                            type: "square",
                            value: `${item.name} (${item.value}%)`,
                        })
                        )
                    }
                /> */}
                <Legend 
                    type="cross"
                    width={100} 
                    style={{position: "absolute"}} 
                    wrapperStyle={{ top: 0, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}
                />
                <Tooltip 
                    wrapperStyle={{ width: 150, backgroundColor: '#ccc', color: "beige"}} 
                    contentStyle={{ color: "red" }}
                />
                <Pie
                    //label={renderCustomizedLabel}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={100}
                    fill={"#ffbbff"}
                    dataKey="value"
                    // These will override the customizedLabel implementation (?)
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}

                    
                    // onMouseEnter={this.onPieEnter}
                    // onMouseLeave={this.onPieLeave}
                    onClick={this.onPieClick}
                    
                    //
                    paddingAngle={0 }
                    opacity={this.state.activeIndex === undefined ? "1.0" : "0.2"}

                    isAnimationActive={false}
                    animationDuration={2000}
                />
                </PieChart>
            </ResponsiveContainer>
      </div>
    );
  }
}

/*
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ["#87C7BA", "#FCC74F", "#FF8569", "#4CB0D3","#805C5C", "#4A6886" ];


const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export class PieChartRecharts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  onPieLeave = (_, index) => {
      if (this.state.activeIndex === index) {
          this.setState({...this.state, activeIndex: 0});
      }
  }

  // 3 colors: #87C7BA #FCC74F #FF8569
  
  // 6 colors #87C7BA #FCC74F #FF8569 #4CB0D3 #805C5C #4A6886
  render() {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
            onMouseLeave={this.onPieLeave}
          />
          {
          	data.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default PieChartRecharts;
*/