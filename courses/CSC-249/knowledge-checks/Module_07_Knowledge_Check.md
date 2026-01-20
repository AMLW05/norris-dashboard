# Module 7 Knowledge Check: Graphs & Advanced Algorithms - Sprint 4

**Purpose**: Assess understanding of graph representations, traversal algorithms, shortest path algorithms, and process optimization
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20-24 minutes

---

## Technical Concepts (60%)

### Question 1
What is a graph in computer science?

A) A chart showing data
B) A collection of nodes (vertices) connected by edges
C) A type of tree
D) A sorting algorithm

**Correct Answer**: B
**Explanation**: Graphs model relationships: social networks (people = nodes, friendships = edges), maps (cities = nodes, roads = edges), web pages (pages = nodes, links = edges). Unlike trees, graphs can have cycles and multiple paths between nodes. Graphs are the most general structure you'll study—trees are special cases of graphs.

### Question 2
What is the difference between directed and undirected graphs?

A) Directed graphs are faster
B) Directed graphs have edges with direction (A→B doesn't imply B→A); undirected edges go both ways
C) Undirected graphs can't have cycles
D) There is no difference

**Correct Answer**: B
**Explanation**: Facebook friendships: undirected (mutual). Twitter follows: directed (I follow you doesn't mean you follow me). One-way streets vs two-way streets. This distinction affects algorithms—BFS on directed graphs only follows edge direction. Modeling real-world relationships requires choosing the right graph type.

### Question 3
What are the two primary ways to represent graphs in code?

A) Arrays and linked lists
B) Adjacency matrix and adjacency list
C) Stacks and queues
D) Trees and heaps

**Correct Answer**: B
**Explanation**: Adjacency matrix: 2D array where matrix[i][j] = 1 if edge exists. Fast edge lookup O(1), wastes space for sparse graphs. Adjacency list: each node has a list of neighbors. Space-efficient for sparse graphs, O(degree) to check edge. Trade-offs again—dense graphs favor matrices, sparse graphs favor lists. Choose based on graph density and query patterns.

### Question 4
What is the time complexity of checking if an edge exists using an adjacency matrix?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: A
**Explanation**: matrix[i][j] directly tells you if edge exists—constant time array access. Adjacency list requires scanning node i's neighbor list = O(degree). Matrix trades space for speed: uses O(n²) space but instant edge queries. Adjacency list: O(n + edges) space but slower queries. Understanding these trade-offs guides implementation choices.

### Question 5
What is Breadth-First Search (BFS)?

A) Searching by going as deep as possible first
B) Exploring nodes level by level, visiting all neighbors before going deeper
C) A sorting algorithm
D) A type of tree

**Correct Answer**: B
**Explanation**: BFS uses a queue: start at node, visit all neighbors, then visit their neighbors, etc. Layer by layer exploration. Finds shortest path in unweighted graphs. Use case: social network (degrees of separation), maze solving (shortest route), web crawling. Contrast with DFS (goes deep first). Different tools for different problems.

### Question 6
What is Depth-First Search (DFS)?

A) Exploring level by level
B) Exploring as far as possible along each branch before backtracking
C) Always finding the shortest path
D) A heap operation

**Correct Answer**: B
**Explanation**: DFS uses a stack (or recursion): go deep down one path until you can't, backtrack, try another. Useful for: detecting cycles, topological sorting, maze solving (any path, not shortest). Doesn't guarantee shortest path. BFS and DFS are fundamental—you'll use them as building blocks for more complex algorithms.

### Question 7
What data structure does BFS use for tracking nodes to visit?

A) Stack
B) Queue
C) Heap
D) Hash table

**Correct Answer**: B
**Explanation**: Queue gives FIFO—visit neighbors in order discovered, maintaining level-by-level exploration. DFS uses stack (LIFO) for depth-first. This shows how data structure choice determines algorithm behavior. Same graph, different structure (queue vs stack), completely different traversal order. Structure shapes behavior.

### Question 8
What is Dijkstra's algorithm used for?

A) Sorting graphs
B) Finding the shortest path in weighted graphs
C) Deleting nodes
D) Counting edges

**Correct Answer**: B
**Explanation**: Dijkstra finds minimum-cost path in graphs with weighted edges (road distances, network latency). Uses priority queue (heap!) to always explore lowest-cost path next. O((V + E) log V) with binary heap. Powers GPS navigation, network routing. BFS finds shortest path for unweighted graphs; Dijkstra handles weights.

### Question 9
You're modeling a social network. Which graph representation is more memory-efficient?

A) Adjacency matrix (everyone to everyone possible)
B) Adjacency list (most people have few connections)
C) They're always equal
D) Neither works for social networks

**Correct Answer**: B
**Explanation**: Social networks are sparse—you know hundreds of people, not millions. Adjacency matrix wastes space storing zeros for non-friendships. List stores only actual connections. For 1 million users with 200 friends average: matrix uses 1 trillion slots, list uses 200 million. This is why Facebook uses adjacency lists.

---

## Project Management & Sprint Skills (40%)

### Question 10
What does "process optimization" mean in Sprint 4 context?

A) Writing faster code
B) Refining your sprint practices based on three sprints of experience
C) Skipping retrospectives
D) Working more hours

**Correct Answer**: B
**Explanation**: After three sprints, you know what works: "Tuesday evening is my most productive time. I need 30-minute breaks between tasks. Tree algorithms need 1.5x my estimates." Sprint 4: apply these insights. Optimize standup.md format, retrospective questions, estimation anchors. This meta-learning—learning how you learn and work—is professional-level self-management.

### Question 11
What should a cumulative retrospective (looking back at all 4 sprints) reveal?

A) Nothing useful
B) Your growth trajectory, consistent patterns, and improvement evidence
C) That Sprint 1 was perfect
D) That you should quit

**Correct Answer**: B
**Explanation**: Sprint 1 velocity: 10. Sprint 4 velocity: 15. Your estimates got more accurate. Pointer bugs that blocked you for days in Sprint 1 now take hours. Standup.md evolved from forced to natural. This documented growth is what employers want to see—evidence of continuous improvement. Process portfolio captures this journey.

### Question 12
How should you use velocity data from 4 sprints to estimate your final project?

A) Ignore all previous data
B) Use average velocity and variance to create realistic timeline with buffer
C) Assume you'll work twice as fast
D) Guess randomly

**Correct Answer**: B
**Explanation**: Sprints 1-4: 10, 14, 12, 15 points. Average: ~13 pts, range: 10-15. Final project estimated at 40 points? Plan for 3-4 sprints (40 ÷ 13). Add buffer for unknowns. This is professional estimation—use historical data, account for variance, build in contingency. Much better than "I hope I finish in one week."

### Question 13
What is a process portfolio in the context of this course?

A) A folder of code files
B) Documentation showing your PM growth across all sprints with artifacts and reflection
C) Your GitHub profile
D) A job application

**Correct Answer**: B
**Explanation**: Process portfolio includes: sprint plans, velocity charts, retrospectives, standup.md logs, estimate vs actual comparisons, reflections on growth. It demonstrates: "I started guessing estimates; now I'm data-driven. Early sprints I missed retrospectives; now they're habitual." This metacognitive evidence shows learning how to learn—highly valuable professionally.

### Question 14
Why is Sprint 4 focused on "process optimization" rather than new PM concepts?

A) There's nothing left to learn
B) You should be refining and personalizing practices, not learning new frameworks
C) PM stops at Sprint 3
D) Sprint 4 has no PM component

**Correct Answer**: B
**Explanation**: Modules 4-6 taught PM frameworks. Sprint 4 is about making them yours. Customize retrospective questions to your needs. Optimize standup.md format. Refine estimation anchors. This transition from following frameworks to owning your process is professional maturity. You're not just using PM—you're mastering it.

### Question 15
How do graph algorithms' complexity inform your sprint planning?

A) They don't—algorithms are separate from PM
B) Understanding that graph algorithms are complex helps you estimate their implementation time realistically
C) Graph algorithms are always easy
D) PM and technical complexity are unrelated

**Correct Answer**: B
**Explanation**: Implementing BFS: 5 points (queue-based traversal, clear algorithm). Implementing Dijkstra: 12 points (priority queue, distance tracking, edge relaxation—more complex). Technical complexity drives estimate. Three sprints taught you how complexity correlates with effort. Use that knowledge. Don't estimate Dijkstra like BFS—you know better now.

---

## Scoring Guide
- 90-100%: Excellent understanding of graph algorithms and process optimization
- 80-89%: Good grasp, minor gaps in traversals or cumulative retrospectives
- 70-79%: Adequate foundation, review BFS/DFS differences and velocity analysis
- Below 70%: Revisit Module 7 materials, visualize graph traversals more

## Study Resources
- Module 7 Assignments: Graph Implementation & Traversal Sprint, Real-World Graph Application
- Canvas HTML: "Graph Representations and When to Use Each"
- Canvas HTML: "BFS vs DFS Deep Dive"
- Canvas HTML: "Dijkstra's Algorithm Visualized"
- VisuAlgo.net: Graph traversal animations
- Adjacency matrix vs list comparison
- Cumulative retrospective template
- Process optimization guide
- Dijkstra's algorithm step-by-step walkthrough
