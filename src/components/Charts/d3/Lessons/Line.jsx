import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { on } from "process";

export const Line = () => {

    const defaultData = [
        { x: 5, y: 5 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 7 },
        { x: 9, y: 10 },
    ];

    const [data, setData] = useState(defaultData);
    const svgRef = useRef();
    console.log("data", data);

    useEffect(() => {

      
        const svg = d3.select(svgRef.current);

        const line = d3.line()
            .x(value => value.x*30)
            .y(value => value.y*30)
            .curve(d3.curveCardinal);

        svg
            .selectAll("path")
            .data([data])
            .join("path")
            .attr("d", value => line(value))
            .attr("fill", "none")
            .attr("stroke", "blue")
            .attr("stroke-width", "3px")
            .on("mouseover", (d) => {
         
            })
            .on("mouseout", (d) => {
                d3.select(d.target).attr("stroke", "blue");
            })
            .on("click", (d) => {
              d3.select(d.target).attr("stroke", "black");
            });
    }, [data, setData]);

  return (
    <React.Fragment>
      <svg ref={svgRef}>
          <path d="M0, 150, 100, 100, 150, 120" stroke="blue" fill="none" />
      </svg>
    </React.Fragment>
  );
}

/*
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
*/