
function dfs(graph, startingNode, visitingFn) {

  let visited = graph.nodes.reduce((acc, nodeKey) => {
    acc[nodeKey] = false;
    return acc;
  }, {});

  const explore = (node) => {

    if(visited[node]) {
      return;
    }

    visited[node] = true;
    visitingFn(node);

    for(let edge of (graph.edges[node] || [])) {
      explore(edge);
    }
    
  };

  explore(startingNode);

  return;
}

module.exports = dfs;