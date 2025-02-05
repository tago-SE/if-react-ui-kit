import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

// TODO: Growth animation, death
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

function createArc(innerRadius, outerRadius, startAngle) {
    return d3.arc().innerRadius(innerRadius).outerRadius(outerRadius).startAngle(startAngle);
}

// const width = 960;
// const height = 500;
const arc_colors = ["#F3A54A", "#AA7CAA", "#CCDE66", "#4B90A6"];
const inner_radius = 60;
const radius_width = 10;

const data =  [{ label: 'Apples', value: 10 }, { label: 'Oranges', value: 20 }, { label: 'Banana', value: 35 }];


const TAU = 2 * Math.PI; // http://tauday.com/tau-manifesto
/**
 * This code illustrates how to pass over the rendering from react to D3 to bind data to the circles inside a svg.
 */
export const Pie = () => {
    const [data, setData] = useState(defaultData);
    const svgRef = useRef();

    //const arcGenerator = d3.arc().innerRadius(inner_radius).outerRadius(inner_radius + radius_width);

    // centroid
    useEffect(() => {

        const startRadius = 0, radius = 200, startAngle = 0;
        const arc = createArc(startRadius, startRadius + radius, startAngle);
        const svg = d3.select(svgRef.current);

        const width = 500; //+svg.attr("width");
        const height = 500; //+svg.attr("height");

        const g = svg
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        const foreground = g.append("path")
            .datum({endAngle: 0.127 * TAU})
            .style("fill", "orange")
            .attr("d", arc);

        // Every so often, start a transition to a new random angle. The attrTween
        // definition is encapsulated in a separate function (a closure) below.
        d3.interval(function() {
            console.log("transition", Math.random() * TAU);
            foreground.transition()
                .duration(750)
                .attrTween("d", arcTween(Math.random() * TAU));
        }, 3000);
        
        // Returns a tween for a transition’s "d" attribute, transitioning any selected
        // arcs from their current angle to the specified new angle.
        function arcTween(newAngle) {
            // The function passed to attrTween is invoked for each selected element when
            // the transition starts, and for each element returns the interpolator to use
            // over the course of transition. This function is thus responsible for
            // determining the starting angle of the transition (which is pulled from the
            // element’s bound datum, d.endAngle), and the ending angle (simply the
            // newAngle argument to the enclosing function).
            return function(d) {
            // To interpolate between the two angles, we use the default d3.interpolate.
            // (Internally, this maps to d3.interpolateNumber, since both of the
            // arguments to d3.interpolate are numbers.) The returned function takes a
            // single argument t and returns a number between the starting angle and the
            // ending angle. When t = 0, it returns d.endAngle; when t = 1, it returns
            // newAngle; and for 0 < t < 1 it returns an angle in-between.
            var interpolate = d3.interpolate(d.endAngle, newAngle);
        
            // The return value of the attrTween is also a function: the function that
            // we want to run for each tick of the transition. Because we used
            // attrTween("d"), the return value of this last function will be set to the
            // "d" attribute at every tick. (It’s also possible to use transition.tween
            // to run arbitrary code for every tick, say if you want to set multiple
            // attributes from a single function.) The argument t ranges from 0, at the
            // start of the transition, to 1, at the end.
            return function(t) {
                // Calculate the current arc angle based on the transition time, t. Since
                // the t for the transition and the t for the interpolate both range from
                // 0 to 1, we can pass t directly to the interpolator.
                //
                // Note that the interpolated angle is written into the element’s bound
                // data object! This is important: it means that if the transition were
                // interrupted, the data bound to the element would still be consistent
                // with its appearance. Whenever we start a new arc transition, the
                // correct starting angle can be inferred from the data.
                d.endAngle = interpolate(t);
        
                // Lastly, compute the arc path given the updated data! In effect, this
                // transition uses data-space interpolation: the data is interpolated
                // (that is, the end angle) rather than the path string itself.
                // Interpolating the angles in polar coordinates, rather than the raw path
                // string, produces valid intermediate arcs during the transition.
                return arc(d);
            };
        };
    };
        // svg
        // .selectAll("path")
        // .data(data)
        // .join(
        //     (enter) => {
        //         enter
        //             .append("path")
        //             .style("fill", function(d){ return d.fill })
        //             .attr("d", arcGenerator);
        //     },
        //     (update) => {
               
        //     },
        //     (exit) => {
        //         // Useful if we want to animate or something like that before we remove them we can do so here
        //         exit.remove();
        //     }
        // );

      
    }, [data, setData]);

  return (
    <React.Fragment>
      <svg className="pie-chart" ref={svgRef} width="100%" height={500} />
    </React.Fragment>
  );
}

