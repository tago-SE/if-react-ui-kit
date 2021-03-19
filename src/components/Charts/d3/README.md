GOAL: https://app.everviz.com/create

D3 Gallery:
https://observablehq.com/@d3/gallery




TODO:
https://github.com/d3/d3/wiki

- Video Tutorial Stacked Line Chart / Bar with filter 

Video Tutorial: https://www.youtube.com/watch?v=ww54a4Xbdds
Video Tutorial github: https://github.com/muratkemaldar/using-react-hooks-with-d3/tree/15-stacked-area-chart

... 1 to 15 video tutorials on using D3: https://www.youtube.com/watch?v=Y-ThTzB-Zjk


https://hackernoon.com/how-and-why-to-use-d3-with-react-d239eb1ea274

https://app.pluralsight.com/guides/make-d3js-charts-responsive-in-react-apps


https://www.newline.co/books/fullstack-d3/using-d3-with-react
https://www.programmer-books.com/reactd3-js-pdf/ <---



STEAL FROM HERE: https://github.com/codesuki/react-d3-components


Examples: 
https://bl.ocks.org/mbostock
https://github.com/holtzy/D3-graph-gallery


Getting started:
https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/


Selecting DOM elements
D3 makes manipulating the DOM easy. For example, let’s try to change all <p&gt;</p> -elements to have an inline style setting the color to blue.

d3.selectAll("p").style("color", "blue")

The .selectAll()-method allows us to select all elements of a specific type. We can also use .select() to select individual nodes.

The React library also manipulates the DOM. This means we have to make a little extra effort to get it to work together with D3. Luckily React already has a solution for allowing targeting and updating DOM elements. To do this, React uses references.