'use strict';
const DirectedGraph = require('../index.js');
const input = require('./testGraph.json');
const dg = new DirectedGraph(input);
dg.transverseFrom(2);
