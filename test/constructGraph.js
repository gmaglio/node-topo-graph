const DirectedGraph = require('../index.js');
const assert = require('assert');

describe('Build graph via constructor', () => {
  it('It should be a directed graph', () => {
    const input = [
      [233, 45], 
      [55, 690], 
      [45, 690],
      [690, 31],
      [690, 77],
      [2, 45],
      [31, 901],
      [77, 13],
      [77, 58]
    ];

    const dg = new DirectedGraph(input);
    const graph = dg.getGraph();
    assert.equal(Object.keys(graph).length, 7);
  });
});
