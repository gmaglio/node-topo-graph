const debug = require('debug')('graph');

class DirectedGraph {
  constructor (input) {
    this.graph = {};
    this.visited = {};

    // build the graph
    var self = this;
    input.forEach((pair) => {
      if (!self.graph[pair[0]]) {
        self.graph[pair[0]] = [];
      }
      self.graph[pair[0]].push(pair[1]);
    });
  }

  /**
   * Return the graph
   *
   */
  getGraph () {
    debug(this.graph);
    return this.graph;
  }

  /**
   * Print the graph
   *
   */
  printGraph () {
    var self = this;
    Object.keys(this.graph).forEach((node) => {
      console.log(node + ' : ' + self.graph[node]);
    });
  }

  /**
   * Show graph tranversal starting from
   * specified node
   * @param {number} node - The nodeId to start from
   *
   */
  transverseFrom (node) {
    if (!this.graph[node]) {
      // this.flushVisitedNodes();
      return;
    }
    var self = this;
    for (var pathId in self.graph[node]) {
      if (self.visited[node.toString() + pathId.toString()]) {
        this.flushVisitedNodes();
        throw Error(
          'Encountered cyclic transversal at node ' +
          self.graph[node]
        );
      }
      self.visited[node.toString() + pathId.toString()] = true;
      console.log(pathId, ':', self.graph[node][pathId]);
      self.transverseFrom(self.graph[node][pathId]);
    }
  }

  // private methods start here

  /**
   * purge visitedNodes list
   *
   */
  flushVisitedNodes () {
    this.visited = [];
  }
}

module.exports = DirectedGraph;
