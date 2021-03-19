import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import './pie.scss';
import { join } from "path";
import { allColors, primaryBlue, primaryRed, primaryYellow, primaryGreen } from '../../Colors';

import { DonutChart} from './Donut';
export { DonutChart };

// TODO: Growth animation, death
let defaultData = [];
let dataset = [
  {label: "Assamese", count: 13},
  {label: "Bengali", count: 83},
  {label: "Bodo", count: 1.4},
  {label: "Dogri", count: 2.3},
  {label: "Gujarati", count: 46},
  {label: "Hindi", count: 300},
  {label: "Kannada", count: 38},
  {label: "Kashmiri", count: 5.5},
  {label: "Konkani", count: 5},
  {label: "Maithili", count: 20},
  {label: "Malayalam", count: 33},
  {label: "Manipuri", count: 1.5},
  {label: "Marathi", count: 72},
  {label: "Nepali", count: 2.9},
  {label: "Oriya", count: 33},
  {label: "Punjabi", count: 29},
  {label: "Sanskrit", count: 0.01},
  {label: "Santhali", count: 6.5},
  {label: "Sindhi", count: 2.5},
  {label: "Tamil", count: 61},
  {label: "Telugu", count: 74},
  {label: "Urdu", count: 52}
];

for (let i = 0; i < dataset.length; i++) {
  defaultData.push({
    id: dataset[i].label,
    label: dataset[i].label,
    value: dataset[i].count,
  });
}




const SelectedClass = "selected";
const FocusedClass = "active";
const UnfocusedClass = "inactive";

// Popout pie: http://jsfiddle.net/kt97oq57/1/

// https://design.if.eu/components/color#components-color.color


/**
 * BOOK TO READ ??? https://livebook.manning.com/book/d3-js-in-action/about-this-book/4
 */
// LABELS: https://stackoverflow.com/questions/52085016/d3-labels-in-pie-chart-being-cut-off
// Good side labels: http://bl.ocks.org/dbuezas/9306799 (but minor bug, but is animated  )
// BEST: Not bugged labels: https://jsfiddle.net/thudfactor/HdwTH/
// Change values: http://bl.ocks.org/dbuezas/9306799

// SIDE LEGEND: https://www.agilecaterpillar.com/blog/chartswithd3/

/**
 * Birth Death: http://bl.ocks.org/mbostock/5100636
 * ARC Death animation:
 * http://bl.ocks.org/pr3ssh/7252659
 */
const TAU = 2 * Math.PI; // http://tauday.com/tau-manifesto
/**
 * This code illustrates how to pass over the rendering from react to D3 to bind data to the circles inside a svg.
 */

 // simple tooltip: https://github.com/Caged/d3-tip

export const PieChart = () => {
    const [data, setData] = useState(defaultData);
    const ref = useRef(null);

    const margin = {top: 50, right: 50, bottom: 50, left: 50 };
    const innerRadius = 0, radius = 200, startAngle = 0;
    const outerRadius = innerRadius + radius
    const width = 2 * outerRadius + margin.left + margin.right;
    const height = 2 * outerRadius + margin.top + margin.bottom;

    useEffect(() => {
        const svg = d3.select(ref.current);
        
        var color = d3.scaleOrdinal(allColors);
        // const colorScale = d3     
        //     .scaleSequential()      
        //     .interpolator(d3.interpolateCool)      
        //     .domain([0, data.length]);
  
        const arcGenerator = d3
            .arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

        //const pieColors = d3.scale.category10();

        //const colorScale = d3.scale.ordinal().range(Colors);

        
        const getKey = function(d){ return d.data.label; };
        const pieGenerator = d3
            .pie()
            .sort(null)
            .padAngle(0.05)
            .value((d) => d.value);
        
        const g = svg.selectAll("g");

        // Simple labels: http://jsfiddle.net/kt97oq57/1/
        // Anmation/Legend: https://codepen.io/thecraftycoderpdx/pen/jZyzKo?editors=1010
        // Legend and filter 
        const arc = g
            .selectAll("path")
            .data(pieGenerator(data), getKey)
            .join("path")
            .attr("d", arcGenerator)
            .attr("id", d => d.data.id)
            .attr("class", "arc")
            .attr("fill", (d, i) => color(i))
            //.attr("stroke", "white")
            //.attr("stroke-width", "10px")
        
            .on('mouseover', el => {
                const others = g.selectAll("path").filter(d => el.target.id != d.data.id);
                others.classed(UnfocusedClass, true);
                d3.select(el.target).classed(FocusedClass, false);
            }) 
            .on("mouseout", (el) => {
                g.selectAll("path").classed(UnfocusedClass, false);
                d3.select(el.target).classed(FocusedClass, false);
            })

            .on("click", (el) => {
                const others = g.selectAll(`.${SelectedClass}`).filter(d => el.target.id != d.data.id);
                
                others
                  .classed(SelectedClass, false)
                  .transition()
                  .duration(500)
                  .attr("transform",function() {
                    return 'translate(0,0)'; 
                  });

                // Toggle selection class from activated arc
                const current = d3.select(el.target);
                const alreadySelected = current.classed(SelectedClass);
                current
                  .classed(SelectedClass, !alreadySelected)
                  .transition()
                  .duration(500)
                  .attr("transform",function(d){
                    if (alreadySelected) {
                      return 'translate(0,0)';
                    } else {
                      let a = d.startAngle + (d.endAngle - d.startAngle)/2 - Math.PI/2;
                      let x = Math.cos(a) * 20;
                      let y = Math.sin(a) * 20;
                      return 'translate(' + x + ',' + y + ')';    
                    }
                }); 


                

      
                // if (current.classed(SelectedClass)) {
                //     current.classed(SelectedClass, false);
                // } else {
                //     const others = g.selectAll("path").filter(d => el.target.id != d.data.id);
                //     others.classed(SelectedClass, false);
                //     current.classed(SelectedClass, true);
                // }
            });


            

        // const line = d3.line()
        //     .x(value => value.x*30)
        //     .y(value => value.y*30)
        //     .curve(d3.curveCardinal);

        // svg
        //     .selectAll("rect")
        //     .data(data)
        //     .join("rect")
        //     .attr("d", value => rect(value))
          
          /*
          svg.append("circle").attr("cx",200).attr("cy",130).attr("r", 6).style("fill", "#69b3a2")
svg.append("circle").attr("cx",200).attr("cy",160).attr("r", 6).style("fill", "#404080")
svg.append("text").attr("x", 220).attr("y", 130).text("variable A").style("font-size", "15px").attr("alignment-baseline","middle")
svg.append("text").attr("x", 220).attr("y", 160).text("variable B").style("font-size", "15px").attr("alignment-baseline","middle")
*/

      // const interval = setInterval(() => {
      //   const entry = data.filter(d => d.id === 5)[0];
      //   if (entry.value <= 0) {
      //     return;
      //   }
      //   entry.value = entry.value - 0.5;
      //   if (entry.value < 0) entry.value = 0;
      //   setData([...data]);
      // }, 15);
      // return () => clearInterval(interval);



    }, [data, setData]);

    
  return (
      <div className="chart-container" style={{ width: "100%", height: "auto"}}>
        <React.Fragment>    
            <svg 
                className="pie-chart" ref={ref} 
                style={{width: "500px", height: "500px"}}
            >
                <g transform={`translate(${width / 2}, ${height / 2})`}/>

            </svg>
        </React.Fragment>
    </div>
  );
}

/*

  function drawChart() {
    // Remove the old svg
    d3.select('#pie-container')
      .select('svg')
      .remove();

    // Create new svg
    const svg = d3
      .select('#pie-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arcGenerator = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const pieGenerator = d3
      .pie()
      .padAngle(0)
      .value((d) => d.value);

    const arc = svg
      .selectAll()
      .data(pieGenerator(data))
      .enter();

    // Append arcs
    arc
      .append('path')
      .attr('d', arcGenerator)
      .style('fill', (_, i) => "rgb(110, 64, 170)")
      .style('stroke', '#ffffff')
      .style('stroke-width', sectionPadding)
      .on("mouseover", (d) => {
        d3.select(d.target)
        .transition()
        .duration(200)
       //.style("opacity", "0.2")
    //    .style("stroke-wdth", "20");
        console.log("d", d);
      })
      .on("mouseout", (d) => {
        d3.select(d.target)
        .transition()
        .duration(200)
        .style("opacity", "1.0");
      })
      .on("click", (d) => {
        d3.select(d.target)
        .transition()
        .duration(800)
        .style("fill", "blue")
        .style("stroke-width", "20");
        console.log("D", d);
      });

    // Append text labels
    arc
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('alignment-baseline', 'middle')
      .text((d) => d.data.label)
      .style('fill', (_, i) => colorScale(data.length - i))
      .attr('transform', (d) => {
        const [x, y] = arcGenerator.centroid(d);
        return `translate(${x}, ${y})`;
      });
  }    
  */