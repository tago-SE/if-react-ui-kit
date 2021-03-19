import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import './pie.scss';
import { join } from "path";
import { allColors } from '../../Colors';

// TODO: Growth animation, death
let defaultData = [
    // {
    //     id: "a",
    //     label: "Apples",
    //     value: 25,
    //     isSelected: false,
    // },
    // {
    //     id: "b",
    //     label: "Oranges",
    //     value: 10,
    //     isSelected: false,
    // },
  //   {
  //       id: "C",
  //       label: "Bananas",
  //       value: 35,
  //       isSelected: false,
  //   },
  //   {
  //       id: "D",
  //       label: "Grapes",
  //       value: 45,
  //       isSelected: false,
  //   },
  //   {
  //     id: "D",
  //     label: "Grapes",
  //     value: 45,
  //     isSelected: false,
  // },
  // {
  //   id: "E",
  //   label: "Melons",
  //   value: 45,
  //   isSelected: false,
  // },
];

function getName(i) {
  if (i % 3 === 0) {
    return "Apples";
  }
  if (i % 2 === 0) {
    return "Oranges"
  }
  return "Bananas";
}

for (let i = 0; i < 8; i++) {
  defaultData.push({
    id: i.toString(),
    label: getName(i),
    value: i*2,
    isSelected: false,
  });
}

const SelectedClass = "selected";
const FocusedClass = "active";
const UnfocusedClass = "inactive";

// https://design.if.eu/components/color#components-color.color


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

export const DonutChart = () => {
    const [data, setData] = useState(defaultData);
    const ref = useRef(null);

    const margin = {top: 50, right: 50, bottom: 50, left: 50 };
    const innerRadius = 100, radius = 50, startAngle = 0;
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
            //.padAngle(0.05)
            .value((d) => d.value);
        
        const g = svg.selectAll("g");


        const arc = g
            .selectAll("path")
            .data(pieGenerator(data), getKey)
            .join("path")
            .attr("d", arcGenerator)
            .attr("id", d => d.data.id)
            .attr("isSelected", false)
            .attr("class", "arc")
            .attr("fill", (d, i) => d.data.isSelected ? "blue" : color(i))
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
              const current = d3.select(el.target);
              const others = g.selectAll("path").filter(d => el.target.id != d.data.id);
              others.classed(SelectedClass, false);
              current.classed(SelectedClass, !current.classed(SelectedClass));
              const currentId = current.attr("id");
              const currentData = data.filter(d => d.id === currentId)[0];

              // Center Label
              const centerLabel = g.select("#center-text-label");
              centerLabel
                .attr("fill", current.attr("fill"))
                .text(currentData.label);
              
              // Center Value
              const centerValue = g.select("#center-text-value");
              const startValue = centerValue.text();
              const endValue = currentData.value;
    
              if (Math.abs(startValue - endValue) > 0.5) {
                centerValue
                // .attr("fill", current.attr("fill"))
                .transition()
                .tween("text", function() {
                  // selection of node being transitioned
                  const selection = d3.select(this);   
                  const start = d3.select(this).text();
                  const end = endValue;
                  var interpolator = d3.interpolateNumber(start, end); 
                  return function(t) { 
                    selection.text(interpolator(t).toFixed(1)); 
                  }; 
                })
                .delay(50)
                .duration(2000);
              }
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


    }, [data, setData]);

    // text x="349.5" y="119" dy="8"
  return (
      <div className="chart-container" style={{ width: "100%", height: "auto"}}>
        <React.Fragment>    
            <svg 
                className="pie-chart" ref={ref} 
                style={{width: "500px", height: "500px"}}
            >
                <g transform={`translate(${width / 2}, ${height / 2})`}>
                  <g id="center" className="center" textAnchor="middle">
                    <text id="center-text-label" dy="-30" className="center-text" textAnchor="middle" children="Label" fill="" />
                    <text id="center-text-value" dy="10" className="center-text" textAnchor="middle" children={0} fill="#000000" />
                  </g>
                </g>

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