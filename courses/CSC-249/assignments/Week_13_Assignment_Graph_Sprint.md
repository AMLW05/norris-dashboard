# M07-A1: Graph Implementation & Traversal Sprint (Sprint 4 - FINAL SPRINT)

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 7 - Graphs & Advanced Algorithms (Sprint 4)
**Week**: 13
**Points**: 75 (45 technical + 30 process)
**Sprint Duration**: 2 weeks (Week 13-14)
**Due**: End of Week 13

---

## Assignment Overview

**SPRINT 4: YOUR FINAL SPRINT!** Implement graph data structure with both adjacency matrix and adjacency list representations. Build BFS, DFS, and Dijkstra's shortest path algorithm. This sprint represents the culmination of your sprint process learning—PM is now automatic.

**Philosophy**: "Graphs model everything." Social networks, maps, dependencies, internet routing—graphs are the most versatile data structure. Mastering graphs means you can model and solve almost any connected system problem.

---

## Learning Objectives

By completing this sprint, you will:

1. Implement graph using adjacency matrix AND adjacency list
2. Execute graph traversals (BFS, DFS) for connected component analysis
3. Implement Dijkstra's shortest path algorithm
4. Apply 3 sprints of velocity data for highly accurate planning
5. Complete final sprint with optimized process (PM mastery)

**Bloom's Level**: Create, Evaluate (CLO1, CLO2, CLO4)

---

## Part 1: Cumulative Velocity-Based Planning (10 points)

### Create `SPRINT4_PLANNING.md`

```markdown
# Sprint 4 Planning - Graph Implementation & Algorithms

**Sprint Goal**: Implement graph data structure with multiple representations and classic graph algorithms (BFS, DFS, Dijkstra).

---

## Cumulative Velocity Analysis

### Historical Velocity (All Sprints)

| Sprint | Planned | Completed | Velocity | Completion % |
|--------|---------|-----------|----------|--------------|
| Sprint 1 | [X] | [Y] | [Y] | [%] |
| Sprint 2 | [X] | [Y] | [Y] | [%] |
| Sprint 3 | [X] | [Y] | [Y] | [%] |

**Average Velocity**: [(S1 + S2 + S3) / 3] = [Z] points
**Trend**: [Analysis of increase/decrease/stability]
**Standard Deviation**: [Calculate σ]
**Coefficient of Variation**: [σ / mean] = [X]% ([Consistency rating])

### Sprint 4 Capacity Prediction

**Method 1 - Simple Average**: [Z] points
**Method 2 - Weighted (50% S3, 30% S2, 20% S1)**: [W] points
**Method 3 - Conservative (min of 3 sprints)**: [min] points

**Selected Method**: [Which one and why?]

**Complexity Adjustment**:
- Graphs are [more/similarly/less] complex than trees
- Dijkstra's algorithm adds complexity
- Adjustment: [+/- X points]

**Final Sprint 4 Capacity**: [C] story points

**Confidence Level**: Very High (based on 3 sprints of data)
**Prediction Interval**: [C ± X] points (based on standard deviation)

---

## Sprint Backlog

### PART A: Graph Representations (15 points)

#### Story 1: Graph Class with Adjacency Matrix
**As a** developer
**I want to** represent graph as 2D matrix
**So that** I can quickly check edge existence in O(1)

**Acceptance Criteria**:
- [ ] GraphMatrix class with n×n matrix
- [ ] add_edge(u, v, weight) adds edge
- [ ] remove_edge(u, v) removes edge
- [ ] has_edge(u, v) checks existence
- [ ] get_neighbors(u) returns adjacent vertices
- [ ] Supports directed and undirected graphs

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 2: Graph Class with Adjacency List
**As a** developer
**I want to** represent graph as adjacency list
**So that** I can save space for sparse graphs

**Acceptance Criteria**:
- [ ] GraphList class with dict/map of lists
- [ ] add_edge(u, v, weight) adds to adjacency list
- [ ] remove_edge(u, v) removes from list
- [ ] get_neighbors(u) returns neighbors
- [ ] More memory-efficient than matrix for sparse graphs

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 3: Graph Visualization
**As a** developer
**I want to** visualize graph structure
**So that** I can debug and understand connectivity

**Acceptance Criteria**:
- [ ] display() prints adjacency representation
- [ ] to_dot() exports DOT format for Graphviz (bonus)
- [ ] ASCII visualization for small graphs

**Story Points**: 2
**Estimated Hours**: 1.5

---

### PART B: Graph Traversals (20 points)

#### Story 4: Breadth-First Search (BFS)
**As a** developer
**I want to** traverse graph level-by-level
**So that** I can find shortest path (unweighted) and detect connectivity

**Acceptance Criteria**:
- [ ] BFS(start_vertex) returns visit order
- [ ] Uses queue for level-order traversal
- [ ] Handles disconnected graphs
- [ ] Returns distance from start for each vertex

**Story Points**: 5
**Estimated Hours**: 4

---

#### Story 5: Depth-First Search (DFS)
**As a** developer
**I want to** traverse graph deeply before backtracking
**So that** I can detect cycles and find paths

**Acceptance Criteria**:
- [ ] DFS(start_vertex) returns visit order
- [ ] Recursive implementation
- [ ] Iterative implementation (with stack)
- [ ] Returns discovery and finish times

**Story Points**: 5
**Estimated Hours**: 4

---

#### Story 6: Connected Components
**As a** developer
**I want to** find all connected components
**So that** I can identify isolated subgraphs

**Acceptance Criteria**:
- [ ] find_components() returns list of components
- [ ] Uses DFS or BFS
- [ ] Works on undirected graphs

**Story Points**: 3
**Estimated Hours**: 2.5

---

### PART C: Shortest Path Algorithm (15 points)

#### Story 7: Dijkstra's Shortest Path
**As a** developer
**I want to** find shortest path in weighted graph
**So that** I can solve navigation/routing problems

**Acceptance Criteria**:
- [ ] dijkstra(start, end) returns shortest path
- [ ] Returns total distance
- [ ] Uses priority queue (min-heap)
- [ ] Handles graphs with positive weights
- [ ] Returns path reconstruction

**Story Points**: 8
**Estimated Hours**: 6

---

#### Story 8: Shortest Path Visualization
**As a** developer
**I want to** visualize shortest path
**So that** I can verify algorithm correctness

**Acceptance Criteria**:
- [ ] Highlight shortest path in graph display
- [ ] Show distances at each step
- [ ] Works with example maps

**Story Points**: 3
**Estimated Hours**: 2

---

### PART D: Testing & Applications (10 points)

#### Story 9: Comprehensive Test Suite
**As a** developer
**I want to** test all graph operations
**So that** I can verify correctness

**Acceptance Criteria**:
- [ ] Test both representations (matrix & list)
- [ ] Test BFS and DFS on various graphs
- [ ] Test Dijkstra with example networks
- [ ] Test edge cases (disconnected, cycles, self-loops)
- [ ] 15+ tests passing

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 10: Real-World Application
**As a** developer
**I want to** apply graphs to real problem
**So that** I understand practical use

**Acceptance Criteria**:
- [ ] Model real network (city map, social network, etc.)
- [ ] Apply algorithms to solve problem
- [ ] Document findings

**Story Points**: 3
**Estimated Hours**: 2.5

---

## Total Sprint Backlog

**Graph Representations**: 10 points
**Traversals**: 13 points
**Shortest Path**: 11 points
**Testing**: 7 points
**TOTAL**: 41 story points

**Capacity Check**:
- Sprint 4 capacity: [C] points
- Planned backlog: 41 points
- **Status**: [Over/under/exact]

**Prioritization**:
- **MVP (Must Have)**: Stories 1, 2, 4, 5, 7, 9 = [X] points
- **Should Have**: Stories 3, 6, 8 = [Y] points
- **Could Have**: Story 10 = 3 points

---

## Definition of Done (Sprint 4 - Automatic)

[Should be internalized by now]
- Code complete, tested, documented
- AI prompts logged
- Complexity analyzed
- Merged via PR

---

## Sprint Risks

1. **Dijkstra complexity**: Most complex algorithm yet
   - Mitigation: Break into sub-tasks, use AI for priority queue help

2. **Two implementations**: Matrix AND list representations
   - Mitigation: Share code via interfaces/base class

3. **Final sprint pressure**: Temptation to rush
   - Mitigation: Stick to process, focus on learning not just completion

---

## Process Optimization Goals

This is your LAST sprint. Demonstrate mastery:
- Standups become habit
- Estimation accuracy high
- Burndown predictable
- AI collaboration efficient

**Personal Goal**: [What PM skill do you want to perfect this sprint?]
```

**Grading** (10 points):
- Cumulative velocity analysis (3 pts)
- Sprint 4 capacity with 3 methods (2 pts)
- Complete backlog (3 pts)
- MVP prioritization (1 pt)
- Process optimization goals (1 pt)

---

## Part 2: Technical Implementation - Graph Representations (15 points)

### Adjacency Matrix Implementation

**Python**:

```python
class GraphMatrix:
    """Graph using adjacency matrix representation."""

    def __init__(self, num_vertices, directed=False):
        self.num_vertices = num_vertices
        self.directed = directed
        # Initialize n×n matrix with infinity (no edge)
        self.matrix = [[float('inf')] * num_vertices for _ in range(num_vertices)]

        # Distance from vertex to itself is 0
        for i in range(num_vertices):
            self.matrix[i][i] = 0

    def add_edge(self, u, v, weight=1):
        """Add edge from u to v with weight."""
        self.matrix[u][v] = weight
        if not self.directed:
            self.matrix[v][u] = weight

    def remove_edge(self, u, v):
        """Remove edge."""
        self.matrix[u][v] = float('inf')
        if not self.directed:
            self.matrix[v][u] = float('inf')

    def has_edge(self, u, v):
        """Check if edge exists."""
        return self.matrix[u][v] != float('inf')

    def get_neighbors(self, u):
        """Return list of (neighbor, weight) tuples."""
        neighbors = []
        for v in range(self.num_vertices):
            if self.matrix[u][v] != float('inf') and u != v:
                neighbors.append((v, self.matrix[u][v]))
        return neighbors

    def display(self):
        """Print adjacency matrix."""
        for row in self.matrix:
            print([w if w != float('inf') else '∞' for w in row])
```

### Adjacency List Implementation

```python
from collections import defaultdict

class GraphList:
    """Graph using adjacency list representation."""

    def __init__(self, directed=False):
        self.directed = directed
        self.adj_list = defaultdict(list)

    def add_edge(self, u, v, weight=1):
        """Add edge from u to v."""
        self.adj_list[u].append((v, weight))
        if not self.directed:
            self.adj_list[v].append((u, weight))

    def remove_edge(self, u, v):
        """Remove edge."""
        self.adj_list[u] = [(vertex, w) for vertex, w in self.adj_list[u] if vertex != v]
        if not self.directed:
            self.adj_list[v] = [(vertex, w) for vertex, w in self.adj_list[v] if vertex != u]

    def get_neighbors(self, u):
        """Return neighbors of u."""
        return self.adj_list[u]

    def display(self):
        """Print adjacency list."""
        for vertex, neighbors in self.adj_list.items():
            print(f"{vertex}: {neighbors}")
```

**Grading - Representations** (15 points):
- Adjacency matrix implementation (6 pts)
- Adjacency list implementation (6 pts)
- Helper methods (has_edge, get_neighbors) (3 pts)

---

## Part 3: Graph Algorithms (30 points)

### BFS Implementation

```python
from collections import deque

def bfs(graph, start):
    """
    Breadth-first search from start vertex.
    Returns visit order and distances.
    """
    visited = set()
    distances = {start: 0}
    visit_order = []
    queue = deque([start])

    while queue:
        vertex = queue.popleft()

        if vertex in visited:
            continue

        visited.add(vertex)
        visit_order.append(vertex)

        for neighbor, weight in graph.get_neighbors(vertex):
            if neighbor not in visited:
                queue.append(neighbor)
                if neighbor not in distances:
                    distances[neighbor] = distances[vertex] + 1

    return visit_order, distances
```

### DFS Implementation

```python
def dfs_recursive(graph, start, visited=None):
    """Recursive DFS."""
    if visited is None:
        visited = set()

    visited.add(start)
    visit_order = [start]

    for neighbor, weight in graph.get_neighbors(start):
        if neighbor not in visited:
            visit_order.extend(dfs_recursive(graph, neighbor, visited))

    return visit_order


def dfs_iterative(graph, start):
    """Iterative DFS using stack."""
    visited = set()
    visit_order = []
    stack = [start]

    while stack:
        vertex = stack.pop()

        if vertex in visited:
            continue

        visited.add(vertex)
        visit_order.append(vertex)

        # Add neighbors to stack (reverse for consistent ordering)
        neighbors = graph.get_neighbors(vertex)
        for neighbor, weight in reversed(neighbors):
            if neighbor not in visited:
                stack.append(neighbor)

    return visit_order
```

### Dijkstra's Shortest Path

```python
import heapq

def dijkstra(graph, start, end):
    """
    Find shortest path from start to end using Dijkstra's algorithm.
    Returns (distance, path).
    """
    # Priority queue: (distance, vertex)
    pq = [(0, start)]
    distances = {start: 0}
    previous = {start: None}
    visited = set()

    while pq:
        current_dist, current = heapq.heappop(pq)

        if current in visited:
            continue

        visited.add(current)

        # Found shortest path to end
        if current == end:
            break

        # Check neighbors
        for neighbor, weight in graph.get_neighbors(current):
            distance = current_dist + weight

            # Found shorter path to neighbor
            if neighbor not in distances or distance < distances[neighbor]:
                distances[neighbor] = distance
                previous[neighbor] = current
                heapq.heappush(pq, (distance, neighbor))

    # Reconstruct path
    path = []
    current = end
    while current is not None:
        path.append(current)
        current = previous.get(current)
    path.reverse()

    return distances.get(end, float('inf')), path
```

**Grading - Algorithms** (30 points):
- BFS implementation (8 pts)
- DFS (recursive and iterative) (10 pts)
- Dijkstra's algorithm (12 pts)

---

## Part 4: Sprint 4 Process (30 points)

**Final sprint process—demonstrate mastery**:

### Daily Standups (10 pts)
- 7+ entries showing graph and algorithm progress
### Burndown Chart (8 pts)
- Accurate daily tracking, close to ideal
### Sprint Review (7 pts)
- All 4 sprints compared, velocity trend analysis
### Sacred Flow (5 pts)
- Professional PR, sprint branch strategy

---

## Submission Checklist

- [ ] SPRINT4_PLANNING.md with 3-sprint velocity analysis
- [ ] GraphMatrix and GraphList implementations
- [ ] BFS, DFS, Dijkstra algorithms
- [ ] Test suite (15+ tests)
- [ ] standup.md (7+ entries)
- [ ] Burndown chart
- [ ] SPRINT4_REVIEW.md
- [ ] prompts.txt
- [ ] Pull request

---

## Grading Rubric (75 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Planning** | 10 | Velocity analysis (3), capacity (2), backlog (3), prioritization (1), goals (1) |
| **Graph Representations** | 15 | Matrix (6), list (6), helpers (3) |
| **Algorithms** | 30 | BFS (8), DFS (10), Dijkstra (12) |
| **Sprint Process** | 30 | Standups (10), burndown (8), review (7), Sacred Flow (5) |
| **Total** | **85** | *Scaled to 75* |

---

## Resources

**Graphs**:
- VisuAlgo: [Graph Visualization](https://visualgo.net/en/graphds)
- Dijkstra's algorithm explained

---

## Extension Challenges (+8 bonus)

1. **A\* Algorithm**: Heuristic shortest path
2. **Minimum Spanning Tree**: Prim's or Kruskal's
3. **Topological Sort**: For DAGs
4. **Graph Coloring**: Vertex coloring problem

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
