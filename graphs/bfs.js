const Queue = require('../queues/queue');

function bfs(graph, startingNode, visitingFn) {

  let visited = graph.nodes.reduce((acc, nodeKey) => {
    acc[nodeKey] = false;
    return acc;
  }, {});

  let queue = new Queue();
  queue.enqueqe(startingNode);
  visited[startingNode] = true;

  while (!queue.isEmpty()) {
    let currNode = queue.dequeqe();

    for (let edge of (graph.edges[currNode] || [])) {
      if (!visited[edge]) {
        visited[edge] = true;
        visitingFn(edge);
        queue.enqueqe(edge);
      }
    }
  }

  return;
}

module.exports = bfs;