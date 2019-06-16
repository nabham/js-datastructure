
function Graph(directed = false) {

  this.directed = directed;
  this.nodes = [];
  this.edges = {};

  this.addNode = function (key) {
    this.nodes.push(key);
  }

  this.addEdge = function (fromKey, toKey) {
    this.edges[fromKey] = this.edges[fromKey] || [];

    this.edges[fromKey].push(toKey);

    if (!directed) {
      this.edges[toKey] = this.edges[toKey] || [];

      this.edges[toKey].push(fromKey);
    }
  }

  this.print = function () {
    return Object.keys(this.edges).map(edgeKey => {
      return edgeKey + ' => ' + this.edges[edgeKey];
    }).join('\n');
  }
}

module.exports = Graph;