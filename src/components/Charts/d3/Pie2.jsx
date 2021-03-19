import React, { useEffect } from 'react';
import * as d3 from 'd3';

export const PieSecond = (props) => {
//   const {
//     data,
//     outerRadius,
//     innerRadius,
//   } = props;

    const data =  [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }, { label: 'Banana', value: 35 }];
    const outerRadius = 200;
    const innerRadius = 20;
    const sectionPadding = 0;

  const margin = {
    top: 50, right: 50, bottom: 50, left: 50,
  };

  const width = 2 * outerRadius + margin.left + margin.right;
  const height = 2 * outerRadius + margin.top + margin.bottom;

  const colorScale = d3     
    .scaleSequential()      
    .interpolator(d3.interpolateCool)      
    .domain([0, data.length]);

  console.log("c", colorScale(0));

  useEffect(() => {
    drawChart();
  }, [data]);

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

  return <div id="pie-container" />;
}

/*
  // test events
      svg
      .select(".plot-area")
      .selectAll(".bar")
      .on("mouseover", (d) => {
        d3.select(d.target).style("fill", "blue");
      })
      .on("mouseout", (d) => {
        d3.select(d.target).style("fill", "steelblue");
      })
      .on("click", (d) => {
        if (onBarClicked) {
          onBarClicked(d);
        }
        svg
        .select(".plot-area")
        .selectAll(".bar")
        .style("opacity", "0.2");
        d3.select(d.target).transition().duration(500).style("fill", "red").style("opacity", "1.0");
      });
*/