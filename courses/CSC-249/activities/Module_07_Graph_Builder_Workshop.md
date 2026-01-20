# Module 7 Activity: Graph Builder Workshop - Networks and Traversal Algorithms

**Duration**: 90 minutes
**Format**: Team-based (2-3 students) with real-world applications
**Materials Needed**:
- Working C++/Python development environment
- Graph visualization tools (networkx for Python, or draw manually)
- Sprint 4 planning materials
- Map/network datasets (cities, social connections)
- Queue/Stack for BFS/DFS implementations

**Learning Objectives**:
- Implement graph representations (adjacency matrix, adjacency list)
- Execute graph traversal algorithms (BFS, DFS)
- Implement Dijkstra's shortest path algorithm
- Apply graphs to real-world problems (social networks, maps, dependencies)
- Recognize when graph structures solve problems efficiently
- Optimize sprint process based on cumulative experience (Sprints 1-3)

---

## Overview

**Welcome to Sprint 4!** Your final structured sprint before the capstone. PM should feel automatic now—you're optimizing based on three sprints of data.

**Graphs are the ultimate data structure.** Every other structure is a special case:
- Linked list? Graph with one path.
- Tree? Graph with no cycles.
- Hash table? Graph where connections are hash collisions.

Today you'll build graphs and use them to solve real problems: finding shortest paths, detecting cycles, modeling social networks.

**By the end of this workshop, you'll:**
- Implement adjacency matrix and adjacency list representations
- Code BFS and DFS traversal algorithms
- Build Dijkstra's shortest path algorithm
- Model real-world problems as graphs
- Apply sprint optimization from 3 prior sprints

**Graphs connect everything. Let's build.**

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Sprint 4 Cumulative Retrospective**:
   ```
   Sprint Velocities:
   - Sprint 1: _____ points
   - Sprint 2: _____ points
   - Sprint 3: _____ points
   - Average: _____ points
   - Trend: [Increasing/Stable/Decreasing]

   What process improvements from Sprints 1-3 will you keep?
   [Your answer]

   What will you try differently in Sprint 4?
   [Your answer]
   ```

2. **Form teams**: 2-3 students (your actual project teams)

3. **Create Sprint 4 Issue**:
   ```
   Title: Sprint 4: Graph Implementation & Real-World Application

   Description:
   Build graph data structure and apply it to solve a real-world problem
   (routing, social network analysis, or dependency resolution).

   Acceptance Criteria:
   - [ ] Graph with adjacency list representation
   - [ ] BFS and DFS traversal implementations
   - [ ] Shortest path algorithm (Dijkstra's)
   - [ ] Cycle detection
   - [ ] Real-world application demonstrating graph usage
   - [ ] Performance comparison with non-graph approaches

   Sprint Goal: Working graph solving an authentic problem

   Story Points: _____ (based on 3-sprint average velocity)
   ```

4. **Install visualization** (Python teams):
   ```bash
   pip install networkx matplotlib
   ```

---

## Part 1: Graph Representations (20 minutes)

### Instructions

**Step 1: Understand graph terminology**

```
Graph: G = (V, E)
- V: Vertices (nodes)
- E: Edges (connections)

Types:
- Undirected: edges have no direction (friendship)
- Directed: edges have direction (following on Twitter)
- Weighted: edges have costs (distance between cities)
- Unweighted: edges are equal

Example: Social Network
Vertices: People
Edges: Friendships
```

**Step 2: Implement adjacency matrix**

**Python**:
```python
class GraphMatrix:
    """Graph using adjacency matrix representation"""
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.matrix = [[0] * num_vertices for _ in range(num_vertices)]

    def add_edge(self, u, v, weight=1):
        """Add edge from u to v"""
        self.matrix[u][v] = weight
        # For undirected graph, also add v to u:
        # self.matrix[v][u] = weight

    def display(self):
        """Print adjacency matrix"""
        print("Adjacency Matrix:")
        for row in self.matrix:
            print(row)

    def has_edge(self, u, v):
        """Check if edge exists"""
        return self.matrix[u][v] != 0

    def get_neighbors(self, vertex):
        """Get all neighbors of vertex"""
        neighbors = []
        for i in range(self.V):
            if self.matrix[vertex][i] != 0:
                neighbors.append(i)
        return neighbors
```

**Step 3: Implement adjacency list**

```python
class GraphList:
    """Graph using adjacency list representation"""
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.adj_list = {i: [] for i in range(num_vertices)}

    def add_edge(self, u, v, weight=1):
        """Add edge from u to v"""
        self.adj_list[u].append((v, weight))
        # For undirected graph, also add v to u:
        # self.adj_list[v].append((u, weight))

    def display(self):
        """Print adjacency list"""
        print("Adjacency List:")
        for vertex in range(self.V):
            print(f"{vertex}: {self.adj_list[vertex]}")

    def get_neighbors(self, vertex):
        """Get all neighbors of vertex"""
        return [v for v, weight in self.adj_list[vertex]]
```

**Step 4: Compare representations**

```python
# Build same graph with both representations
# Graph:
#   0 -- 1
#   |    |
#   2 -- 3

# Matrix version
g_matrix = GraphMatrix(4)
g_matrix.add_edge(0, 1)
g_matrix.add_edge(0, 2)
g_matrix.add_edge(1, 3)
g_matrix.add_edge(2, 3)
g_matrix.display()

print()

# List version
g_list = GraphList(4)
g_list.add_edge(0, 1)
g_list.add_edge(0, 2)
g_list.add_edge(1, 3)
g_list.add_edge(2, 3)
g_list.display()
```

**Step 5: Analyze trade-offs**

| Aspect               | Adjacency Matrix      | Adjacency List         |
|----------------------|-----------------------|------------------------|
| Space Complexity     | O(V²)                 | O(V + E)               |
| Check if edge exists | O(1)                  | O(degree of vertex)    |
| Get all neighbors    | O(V)                  | O(degree of vertex)    |
| Best for             | Dense graphs          | Sparse graphs          |
| Add edge             | O(1)                  | O(1)                   |

```
Question: Which representation is better for a social network with
1 million users where each user has ~100 friends?

Answer: Adjacency list! (Why? V² = 10¹² vs V+E ≈ 10⁸)
```

### Expected Output

- Working adjacency matrix and list implementations
- Same graph represented both ways
- Understanding of space/time trade-offs
- Ability to choose appropriate representation

---

## Part 2: Graph Traversals - BFS and DFS (25 minutes)

### Instructions

**Step 1: Implement BFS (Breadth-First Search)**

BFS uses a queue: visit level by level

```python
from collections import deque

class Graph:
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.adj_list = {i: [] for i in range(num_vertices)}

    def add_edge(self, u, v):
        self.adj_list[u].append(v)
        self.adj_list[v].append(u)  # Undirected

    def bfs(self, start):
        """Breadth-First Search from start vertex"""
        visited = [False] * self.V
        queue = deque([start])
        visited[start] = True
        result = []

        while queue:
            vertex = queue.popleft()  # Dequeue
            result.append(vertex)

            # Visit all unvisited neighbors
            for neighbor in self.adj_list[vertex]:
                if not visited[neighbor]:
                    visited[neighbor] = True
                    queue.append(neighbor)

        return result

    def bfs_shortest_path(self, start, end):
        """Find shortest path using BFS"""
        if start == end:
            return [start]

        visited = [False] * self.V
        queue = deque([(start, [start])])  # (vertex, path)
        visited[start] = True

        while queue:
            vertex, path = queue.popleft()

            for neighbor in self.adj_list[vertex]:
                if not visited[neighbor]:
                    new_path = path + [neighbor]

                    if neighbor == end:
                        return new_path

                    visited[neighbor] = True
                    queue.append((neighbor, new_path))

        return None  # No path exists
```

**Step 2: Implement DFS (Depth-First Search)**

DFS uses a stack (or recursion): go as deep as possible first

```python
class Graph:
    # ... previous methods ...

    def dfs(self, start):
        """Depth-First Search from start vertex"""
        visited = [False] * self.V
        result = []
        self._dfs_recursive(start, visited, result)
        return result

    def _dfs_recursive(self, vertex, visited, result):
        """Recursive DFS helper"""
        visited[vertex] = True
        result.append(vertex)

        for neighbor in self.adj_list[vertex]:
            if not visited[neighbor]:
                self._dfs_recursive(neighbor, visited, result)

    def dfs_iterative(self, start):
        """Iterative DFS using explicit stack"""
        visited = [False] * self.V
        stack = [start]
        result = []

        while stack:
            vertex = stack.pop()

            if not visited[vertex]:
                visited[vertex] = True
                result.append(vertex)

                # Add neighbors to stack
                for neighbor in reversed(self.adj_list[vertex]):
                    if not visited[neighbor]:
                        stack.append(neighbor)

        return result

    def detect_cycle(self):
        """Detect cycle using DFS"""
        visited = [False] * self.V
        rec_stack = [False] * self.V

        for vertex in range(self.V):
            if not visited[vertex]:
                if self._detect_cycle_util(vertex, visited, rec_stack):
                    return True

        return False

    def _detect_cycle_util(self, vertex, visited, rec_stack):
        """DFS-based cycle detection"""
        visited[vertex] = True
        rec_stack[vertex] = True

        for neighbor in self.adj_list[vertex]:
            if not visited[neighbor]:
                if self._detect_cycle_util(neighbor, visited, rec_stack):
                    return True
            elif rec_stack[neighbor]:
                return True  # Back edge found = cycle!

        rec_stack[vertex] = False
        return False
```

**Step 3: Test both traversals**

```python
# Build graph:
#     0
#    / \
#   1   2
#  / \
# 3   4

g = Graph(5)
g.add_edge(0, 1)
g.add_edge(0, 2)
g.add_edge(1, 3)
g.add_edge(1, 4)

print(f"BFS from 0: {g.bfs(0)}")  # Level-order: 0, 1, 2, 3, 4
print(f"DFS from 0: {g.dfs(0)}")  # Deep first: 0, 1, 3, 4, 2

# Test shortest path
print(f"Shortest path 0→4: {g.bfs_shortest_path(0, 4)}")  # [0, 1, 4]
```

**Step 4: Visualize the difference**

```
Graph:
    0
   / \
  1   2
 / \
3   4

BFS traversal (level by level):
Level 0: [0]
Level 1: [1, 2]
Level 2: [3, 4]
Result: 0, 1, 2, 3, 4

DFS traversal (deep first):
0 → 1 → 3 → (back) → 4 → (back) → 2
Result: 0, 1, 3, 4, 2

Use Case:
- BFS: Shortest path (fewest edges)
- DFS: Cycle detection, topological sort
```

**Step 5: Compare algorithms**

| Aspect            | BFS                  | DFS                    |
|-------------------|----------------------|------------------------|
| Data Structure    | Queue                | Stack (or recursion)   |
| Traversal Order   | Level by level       | Deep first             |
| Shortest Path     | Yes (unweighted)     | No                     |
| Space Complexity  | O(V)                 | O(V)                   |
| Time Complexity   | O(V + E)             | O(V + E)               |
| Use Cases         | Shortest path, levels| Cycle detect, toposort |

### Expected Output

- Working BFS and DFS implementations
- Understanding of queue vs stack distinction
- Shortest path finding with BFS
- Cycle detection with DFS
- Recognition of when to use each algorithm

---

## Part 3: Dijkstra's Shortest Path (25 minutes)

### Instructions

BFS finds shortest path by edge count. Dijkstra finds shortest path by total weight.

**Step 1: Understand Dijkstra's algorithm**

```
Idea: Always explore the closest unvisited vertex

Steps:
1. Set distance to start = 0, all others = infinity
2. Pick unvisited vertex with smallest distance
3. Update distances to its neighbors
4. Mark as visited
5. Repeat until all visited or target reached
```

**Step 2: Implement Dijkstra's**

```python
import heapq

class WeightedGraph:
    def __init__(self, num_vertices):
        self.V = num_vertices
        self.adj_list = {i: [] for i in range(num_vertices)}

    def add_edge(self, u, v, weight):
        """Add weighted edge"""
        self.adj_list[u].append((v, weight))
        self.adj_list[v].append((u, weight))  # Undirected

    def dijkstra(self, start):
        """Find shortest paths from start to all vertices"""
        # Distance from start to each vertex
        distances = [float('inf')] * self.V
        distances[start] = 0

        # Priority queue: (distance, vertex)
        pq = [(0, start)]

        # Track previous vertex in shortest path
        previous = [-1] * self.V

        while pq:
            current_dist, u = heapq.heappop(pq)

            # Skip if we've found a shorter path already
            if current_dist > distances[u]:
                continue

            # Check all neighbors
            for v, weight in self.adj_list[u]:
                distance = current_dist + weight

                # Found a shorter path to v
                if distance < distances[v]:
                    distances[v] = distance
                    previous[v] = u
                    heapq.heappush(pq, (distance, v))

        return distances, previous

    def shortest_path(self, start, end):
        """Get actual path from start to end"""
        distances, previous = self.dijkstra(start)

        # Reconstruct path
        path = []
        current = end

        while current != -1:
            path.append(current)
            current = previous[current]

        path.reverse()

        if path[0] != start:
            return None  # No path exists

        return path, distances[end]
```

**Step 3: Test with weighted graph**

```python
# City map with distances
#      A --7-- B
#     /|       |\
#   2/ |5     4| \1
#   /  |       |  \
#  C --8-- D --3-- E
#
# Vertices: A=0, B=1, C=2, D=3, E=4

g = WeightedGraph(5)
g.add_edge(0, 1, 7)   # A-B: 7
g.add_edge(0, 2, 2)   # A-C: 2
g.add_edge(0, 3, 5)   # A-D: 5
g.add_edge(1, 4, 1)   # B-E: 1
g.add_edge(1, 3, 4)   # B-D: 4
g.add_edge(2, 3, 8)   # C-D: 8
g.add_edge(3, 4, 3)   # D-E: 3

# Find shortest path from A (0) to E (4)
path, distance = g.shortest_path(0, 4)
print(f"Shortest path A→E: {path}")      # [0, 1, 4] or [0, 3, 4]
print(f"Total distance: {distance}")     # 8 (via B) or 8 (via D)

# Get all distances from A
distances, _ = g.dijkstra(0)
print(f"Distances from A: {distances}")  # [0, 7, 2, 5, 8]
```

**Step 4: Trace algorithm execution**

```
Dijkstra from A (0):

Initial: distances = [0, ∞, ∞, ∞, ∞]
         pq = [(0, A)]

Step 1: Visit A
  Check neighbors: B (0+7=7), C (0+2=2), D (0+5=5)
  Update: distances = [0, 7, 2, 5, ∞]
  pq = [(2, C), (5, D), (7, B)]

Step 2: Visit C (smallest = 2)
  Check neighbors: A (skip), D (2+8=10 > 5, skip)
  pq = [(5, D), (7, B)]

Step 3: Visit D (smallest = 5)
  Check neighbors: A (skip), B (5+4=9 > 7), E (5+3=8)
  Update: distances = [0, 7, 2, 5, 8]
  pq = [(7, B), (8, E)]

Step 4: Visit B (smallest = 7)
  Check neighbors: E (7+1=8, equal to current)
  pq = [(8, E)]

Step 5: Visit E (smallest = 8)
  Done!

Final distances: [0, 7, 2, 5, 8]
```

### Expected Output

- Working Dijkstra's algorithm
- Correct shortest paths in weighted graphs
- Understanding of priority queue usage
- Recognition of O((V + E) log V) complexity

---

## Part 4: Real-World Application (20 minutes)

### Instructions

Choose one application and implement it:

**Option 1: Social Network Analysis**

```python
class SocialNetwork:
    def __init__(self):
        self.graph = Graph(0)
        self.users = {}  # username -> vertex_id

    def add_user(self, username):
        user_id = len(self.users)
        self.users[username] = user_id
        self.graph = Graph(len(self.users))
        return user_id

    def add_friendship(self, user1, user2):
        id1 = self.users[user1]
        id2 = self.users[user2]
        self.graph.add_edge(id1, id2)

    def degrees_of_separation(self, user1, user2):
        """How many friends apart are two users?"""
        id1 = self.users[user1]
        id2 = self.users[user2]
        path = self.graph.bfs_shortest_path(id1, id2)
        return len(path) - 1 if path else None

    def suggest_friends(self, username):
        """Friends of friends who aren't your friends"""
        user_id = self.users[username]
        friends = set(self.graph.get_neighbors(user_id))
        suggestions = set()

        for friend in friends:
            friends_of_friend = self.graph.get_neighbors(friend)
            for fof in friends_of_friend:
                if fof != user_id and fof not in friends:
                    suggestions.add(fof)

        return [name for name, id in self.users.items() if id in suggestions]
```

**Option 2: Course Prerequisites**

```python
class CourseGraph:
    def __init__(self):
        self.graph = {}  # course -> list of prerequisites

    def add_course(self, course, prerequisites=[]):
        self.graph[course] = prerequisites

    def can_take(self, course, completed):
        """Check if prerequisites are met"""
        if course not in self.graph:
            return False

        for prereq in self.graph[course]:
            if prereq not in completed:
                return False

        return True

    def course_order(self):
        """Topological sort for course sequence"""
        # Use DFS to find valid ordering
        visited = set()
        result = []

        def dfs(course):
            if course in visited:
                return
            visited.add(course)

            # Visit prerequisites first
            for prereq in self.graph.get(course, []):
                dfs(prereq)

            result.append(course)

        for course in self.graph:
            dfs(course)

        return result
```

**Option 3: Route Planning**

```python
class CityMap:
    def __init__(self):
        self.graph = WeightedGraph(0)
        self.cities = {}  # city_name -> vertex_id

    def add_city(self, name):
        city_id = len(self.cities)
        self.cities[name] = city_id
        return city_id

    def add_route(self, city1, city2, distance):
        id1 = self.cities[city1]
        id2 = self.cities[city2]
        self.graph.add_edge(id1, id2, distance)

    def shortest_route(self, from_city, to_city):
        id1 = self.cities[from_city]
        id2 = self.cities[to_city]
        path, distance = self.graph.shortest_path(id1, id2)

        # Convert IDs back to city names
        city_names = {v: k for k, v in self.cities.items()}
        route = [city_names[id] for id in path]

        return route, distance
```

### Expected Output

- Working real-world application
- Graph solving an authentic problem
- Clear demonstration of graph advantages
- Understanding of when to use graphs

---

## Wrap-up & Sprint 4 Retrospective (10 minutes)

### Discussion Questions

**1. Graph Applications**: Where else do you see graphs in software/systems?
   - Web crawling (pages = vertices, links = edges)
   - GPS navigation (intersections = vertices, roads = edges)
   - Dependency management (packages = vertices, dependencies = edges)
   - Neural networks (neurons = vertices, connections = edges)

**2. Algorithm Selection**: When would you use BFS vs DFS vs Dijkstra's?

**3. Representation Choice**: For each application, would you use adjacency matrix or list?
   - Social network (sparse): _____
   - Chess AI (all pieces can attack all): _____
   - City map (sparse): _____

**4. Sprint Process Optimization**: After 4 sprints, what PM practices are most valuable? What's unnecessary overhead?

### Cumulative Sprint Retrospective

```
Sprint Progress:
Sprint 1: ____ points (baseline)
Sprint 2: ____ points (velocity-based)
Sprint 3: ____ points (optimizing)
Sprint 4: ____ points (mature process)

Key Learnings Across 4 Sprints:
1. [Process learning]
2. [Technical learning]
3. [Team learning]

What PM practices will you use in Capstone (Module 8)?
[Your answer]
```

### Exit Ticket

**Submit via Canvas**:

```
1. Upload graph implementation with BFS, DFS, and Dijkstra's

2. Draw a graph representing your friend group. Find:
   - Shortest path between two people
   - Person with most connections (highest degree)

3. Explain the difference between BFS and Dijkstra's

4. Sprint 4 velocity: _____ points
   4-sprint average: _____ points

5. Most valuable PM practice from 4 sprints: _____
```

---

## Extension Challenges (Optional)

### Challenge 1: A* Search
Implement A* pathfinding with heuristics

### Challenge 2: Minimum Spanning Tree
Implement Kruskal's or Prim's algorithm

### Challenge 3: Network Flow
Implement Ford-Fulkerson max flow algorithm

### Challenge 4: Graph Coloring
Solve graph coloring problem (scheduling, map coloring)

---

## Instructor Notes

### Common Struggles

**BFS vs DFS confusion**: Students mix up queue/stack
- **Fix**: Emphasize data structure drives behavior

**Dijkstra complexity**: Priority queue implementation
- **Fix**: Use Python's heapq, explain greedy approach

**Graph representation choice**: When to use matrix vs list
- **Fix**: Calculate memory for real examples (1M vertices)

### Success Indicators

Students master graphs if they:
- ✅ Choose appropriate representation
- ✅ Implement BFS and DFS correctly
- ✅ Understand Dijkstra's greedy approach
- ✅ Apply graphs to solve real problems
- ✅ Recognize O(V + E) patterns

### Sprint 4 Assessment

**Process Maturity Check**:
- Are students self-managing sprints?
- Are retrospectives actionable?
- Is velocity stabilizing?
- Are they ready for autonomous Capstone sprint?

---

**Next: Module 8 Capstone - Autonomous project using all data structures!**
