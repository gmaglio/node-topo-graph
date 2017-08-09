# Description
Node.JS implementation of a DirectedGraph

Includes topological transversal and the handling of 
cyclic nodes.

# To Use

```javascript
const DirectedGraph = require('directed-graph');

const topoPairs = [
  [55, 661],
  [661, 1],
  [55, 3]
];

const dg = new DirectedGraph(topoPairs);
dg.printGraph();

// printGraph will show the following
{
  55: [661, 3],
  661: 1
}
*/
```
