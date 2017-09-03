const DirectedGraph = require('../index.js');
const assert = require('assert');

describe('Build graph via constructor', () => {
  it('It should be a directed graph', () => {
    const input = require('./testGraph.json');

    const dg = new DirectedGraph(input);
    const graph = dg.getGraph();
    assert.equal(Object.keys(graph).length, 7);
  });
});
