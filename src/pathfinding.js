function sorted_insert(array, sort_key, value) {
  const index = array.findIndex((e) => e[sort_key] > value[sort_key])

  array.splice(index, 0, value)
}

function reconstruct_path(end) {
  const path = []
  let node = end

  while (node) {
    path.push(node.node)
    node = node.parent
  }

  return path.reverse()
}

export async function pathfinding({
  start,
  is_target,
  neighbors,
  heuristic,
  equal,
}) {
  const open = [{ cost: 0, node: start }]
  const closed = []

  const insert = sorted_insert.bind(null, open, 'cost')

  while (open.length >= 0) {
    const head = open.shift()

    if (is_target(head.node))
      return {
        open,
        closed,
        path: reconstruct_path(head),
      }

    for (const neighbor of await neighbors(head.node)) {
      const cost = head.cost + heuristic(head.node, neighbor)
      const visited = closed.some(
        ({ node, cost: closed_cost }) =>
          equal(node, neighbor) && closed_cost <= cost
      )

      if (!visited) {
        const pending_index = open.findIndex(({ node }) =>
          equal(node, neighbor)
        )
        const pending = pending_index >= 0 && open[pending_index].cost <= cost

        if (!pending) {
          if (pending_index >= 0) open.splice(pending_index, 1)
          insert({ cost, node: neighbor, parent: head })
        }
      }
    }

    closed.push(head)
  }

  return { open, closed }
}
