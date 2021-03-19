import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

/**
 * This code illustrates how to pass over the rendering from react to D3 to bind data to the circles inside a svg.
 */
export const Basics = () => {
    const defaultData = [
        {
            id: "A",
            value: 25,
            selected: false,
        },
        {
            id: "b",
            value: 10,
            selected: false,
        },
        {
            id: "C",
            value: 35,
            selected: false,
        },
        {
            id: "D",
            value: 45,
            selected: false,
        }
    ];
    const [data, setData] = useState(defaultData);
    const svgRef = useRef();
    console.log("data", data);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const onUpdate = (d) => {
            d
            .attr("r", data => data.value)
            .attr("cx", data => data.value * 2)
            .attr("cy", data => data.value * 2)
            .attr("id", data => data.id)
            .attr("stroke", "red")
            .attr("fill", data => data.selected ? "blue" : "black")
            .on("click", (e) => {
                const id = e.target.id;
                const foundEntries = data.filter(d => d.id === id);
                if (foundEntries.length === 1) {
                    const entry = foundEntries[0];
                    entry.selected = !entry.selected;
                    setData([...data]);
                } 
               else if (foundEntries.length === 0) throw Error(`Illegal state: data source does not contain id matching target element {${id}}.`);
               else throw Error(`Illegal state: data source contains multple elements with matching id's {${id}}.`)
            });
        }
        
        svg
        .selectAll("circle")
        .data(data)
        .join(
            (enter) => {
                const d = enter.append("circle");
                onUpdate(d);
            },
            (update) => {
                onUpdate(update); 
            },
            (exit) => {
                // Useful if we want to animate or something like that before we remove them we can do so here
                exit.remove();
            }
        );
      
    }, [data, setData]);

  return (
    <React.Fragment>
      <svg ref={svgRef}></svg>
    </React.Fragment>
  );
}
