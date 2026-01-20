# CSC-249: Data Structures & Algorithms
## Complete Course Map for Internal Certification

**Instructor**: Drew Norris
**Credits**: 3 (2 Class | 3 Lab)
**Term Length**: 16 weeks (8 modules, 2 weeks each)
**Prerequisites**: CSC-134 (Intro to Programming - C++)
**Delivery Mode**: Hybrid (online materials + in-person lab)
**Last Updated**: January 2026

---

## COURSE OVERVIEW

### Course Description
Introduction to fundamental data structures and algorithms used in programming applications. Students implement lists, stacks, queues, trees, graphs, heaps, sorting, and searching using professional development practices. Emphasizes "create-before-theory" pedagogy with mandatory AI collaboration and sprint-based project management. Students choose C++ or Python for implementations.

### Target Audience
- Students who completed CSC-134 (Intro to Programming with C++)
- Students ready for hands-on data structure implementation
- Students preparing for advanced CS courses requiring autonomous PM skills
- Students seeking professional development workflow competency

### Unique Features
- **Create-First Pedagogy**: Build implementations before reading theory (inverted Bloom's taxonomy)
- **Mandatory AI Collaboration**: AI tools required, prompts documented in prompts.txt files
- **Dual-Language Support**: Choose C++ or Python, AI bridges concepts between languages
- **4 Complete Sprint Cycles**: Students manage DS&A projects using Scrum methodology
- **40% Process Grading**: Emphasizes PM skills alongside technical implementation
- **Production-Ready Focus**: Portfolio-quality code and professional documentation

---

## PROGRAM OUTCOMES ALIGNMENT

This course contributes to the following program-level outcomes:

**PO1**: Apply technical skills in computing environments (data structure implementation)
**PO2**: Demonstrate professional communication in technical contexts (documentation, presentations)
**PO3**: Solve problems using critical thinking and technical tools (algorithm analysis, debugging)
**PO4**: Work effectively in team-based project environments (sprint methodology, retrospectives)
**PO5**: Adapt to emerging technologies and industry changes (AI collaboration, dual-language flexibility)

---

## COURSE LEARNING OUTCOMES (CLOs)

Upon successful completion of CSC-249, students will be able to:

**CLO1**: Implement fundamental data structures (lists, stacks, queues, trees, graphs, hash tables) using C++ or Python
*Bloom's Level*: Apply, Create
*Assessment*: All technical assignments (Weeks 1-16) require implementation from scratch

**CLO2**: Analyze algorithm complexity using Big O notation and select appropriate structures for problems
*Bloom's Level*: Analyze, Evaluate
*Assessment*: Benchmarking lab (Week 3), sorting comparison (Week 6), capstone justification (Week 15-16)

**CLO3**: Collaborate effectively with AI tools, documenting prompts and iterative learning processes
*Bloom's Level*: Apply, Evaluate
*Assessment*: prompts.txt files in all assignments, AI collaboration reflection in capstone

**CLO4**: Apply professional development workflows (version control, code review, pull requests, sprint methodology)
*Bloom's Level*: Apply
*Assessment*: Sacred Flow workflow (all weeks), 4 complete sprints (Modules 4-7), Process Portfolio (Week 16)

**CLO5**: Design solutions by building implementations first, then understanding theoretical foundations
*Bloom's Level*: Create, Evaluate
*Assessment*: Create-first approach in Modules 1-7, reflection in retrospectives and capstone

---

## 8-MODULE STRUCTURE OVERVIEW

| Module | Weeks | Topic | Points | CLOs | PM Focus |
|--------|-------|-------|--------|------|----------|
| 1 | 1-2 | Foundations & AI Collaboration | 50 | 1, 3, 4, 5 | Sacred Flow intro |
| 2 | 3-4 | Algorithm Analysis & Recursion | 50 | 2, 3, 5 | User stories |
| 3 | 5-6 | Sorting Algorithms | 50 | 1, 2, 5 | Story points |
| 4 | 7-8 | Linked Lists - Sprint 1 | 75 | 1, 4 | First complete sprint |
| 5 | 9-10 | Hash Tables - Sprint 2 | 75 | 1, 4 | Velocity tracking |
| 6 | 11-12 | Trees & Heaps - Sprint 3 | 100 | 1, 4 | PM becomes habitual |
| 7 | 13-14 | Graphs - Sprint 4 | 125 | 1, 2, 4 | Process optimization |
| 8 | 15-16 | Integration Project & Portfolio | 175 | All | Process portfolio |
| **TOTAL** | **16** | | **700** | | **4 sprints** |

---

## MODULE 1: Foundations & AI Collaboration
**Duration**: Weeks 1-2
**Theme**: Professional workflows and ADT fundamentals

### Module Learning Outcomes (MLOs)
1. **MLO 1.1**: Configure professional development environment (GitHub, IDE, compiler/interpreter, AI tools) *(Bloom's: Apply | CLO1, CLO4)*
2. **MLO 1.2**: Implement simple ADTs (Stack, Queue) using create-first approach *(Bloom's: Apply, Create | CLO1, CLO5)*
3. **MLO 1.3**: Document AI collaboration patterns in prompts.txt files *(Bloom's: Apply | CLO3)*
4. **MLO 1.4**: Execute professional GitHub workflow (Issue → Branch → PR → Merge) *(Bloom's: Apply | CLO4)*

### Assignments
**M01-A1: GitHub Setup & First ADT (Stack)** (25 points)
- **What Students Do**: Fork course repo, create README.md with language choice and AI tool selection, implement Stack ADT from scratch (push, pop, peek, isEmpty, size), write test suite, follow Sacred Flow (Issue → Branch → PR)
- **Grading Split**: GitHub setup (8 pts), Stack implementation (12 pts), Sacred Flow workflow (5 pts)
- **CLOs Assessed**: CLO1 (ADT implementation), CLO4 (Git workflow), CLO5 (create-first)
- **Technical Content**: Stack ADT, LIFO principle, array-based or list-based implementation, dynamic memory (C++) or list operations (Python)
- **Deliverables**: README.md, Stack implementation, test file, GitHub issue, PR with reflection

**M01-A2: AI Collaboration & Undo System** (25 points)
- **What Students Do**: Build undo/redo system using Stack (like Ctrl+Z), document AI collaboration process in prompts.txt, iterate on implementation with AI guidance, write reflection on AI learning process
- **Grading Split**: Undo system implementation (15 pts), prompts.txt documentation (5 pts), AI collaboration reflection (5 pts)
- **CLOs Assessed**: CLO1 (Stack application), CLO3 (AI collaboration), CLO5 (iterative learning)
- **Technical Content**: Stack-based undo/redo, command pattern basics, state management
- **Deliverables**: Undo system code, prompts.txt with AI interactions, reflection essay

### Learning Activities
1. **Lab**: Sacred Flow Lab - DS&A Edition (90 min, hands-on Git workflow)
2. **Reading**: Introduction to ADTs (30 min)
3. **Video**: Stack Fundamentals (15 min)
4. **Discussion**: "Build-First vs Theory-First Learning" (async)
5. **Workshop**: AI Collaboration Best Practices (45 min)

### Knowledge Check
- 12-question quiz on ADT terminology, Stack operations, LIFO concept
- Git workflow scenario questions
- AI collaboration ethics questions

### Instructional Materials
- GitHub setup guide (fork, clone, branch, PR)
- Stack implementation starter code (C++ and Python)
- Test suite templates
- AI prompt templates and best practices guide
- Sacred Flow workflow diagram

### Project Management Integration (Introduction Level)
- **Planning Sheet**: Basic GitHub issue template
- **New PM Skill**: Sacred Flow workflow (Issue → Branch → Commit → PR → Merge)
- **Reflection**: Exit Ticket (What did I build? What did I learn? What's next?)
- **PM Time**: ~2 hours for Git workflow practice

---

## MODULE 2: Algorithm Analysis & Recursion
**Duration**: Weeks 3-4
**Theme**: Measuring performance and thinking recursively

### Module Learning Outcomes (MLOs)
1. **MLO 2.1**: Measure algorithm performance using benchmarking tools (timeit, chrono) *(Bloom's: Apply | CLO2)*
2. **MLO 2.2**: Analyze complexity using Big O notation through experimentation *(Bloom's: Analyze | CLO2)*
3. **MLO 2.3**: Implement recursive algorithms (factorial, Fibonacci, Tower of Hanoi) *(Bloom's: Apply | CLO1)*
4. **MLO 2.4**: Compare iterative vs recursive solutions empirically *(Bloom's: Evaluate | CLO2)*
5. **MLO 2.5**: Create user stories for algorithm implementation projects *(Bloom's: Create | CLO4)*

### Assignments
**M02-A1: Benchmarking Lab & Big O Analysis** (25 points)
- **What Students Do**: Implement 3 search algorithms (linear, binary, interpolation), benchmark each with datasets of varying sizes (100, 1000, 10000 elements), graph runtime vs input size, identify Big O empirically, write analysis report
- **Grading Split**: Implementations (10 pts), Benchmarking data (8 pts), Big O analysis (5 pts), Report (2 pts)
- **CLOs Assessed**: CLO1 (algorithm implementation), CLO2 (complexity analysis)
- **Technical Content**: Linear search, binary search, interpolation search, timeit/chrono, Big O notation (O(1), O(log n), O(n), O(n²))
- **Deliverables**: Three search implementations, benchmark data CSV, performance graphs, analysis report

**M02-A2: Recursive Algorithms Project** (25 points)
- **What Students Do**: Implement 5 recursive algorithms (factorial, Fibonacci, power, sum of digits, Tower of Hanoi), trace execution with print statements, compare to iterative versions, create user stories for implementation tasks, document base cases and recursive cases
- **Grading Split**: Implementations (12 pts), Iterative comparisons (5 pts), User stories (5 pts), Tracing/analysis (3 pts)
- **CLOs Assessed**: CLO1 (recursion), CLO2 (comparison), CLO4 (user stories)
- **Technical Content**: Recursion fundamentals, base case, recursive case, call stack, tail recursion, memoization introduction
- **Deliverables**: Five recursive implementations, iterative versions, user story document, execution traces

### Learning Activities
1. **Workshop**: Benchmarking Workshop (60 min, hands-on performance measurement)
2. **Reading**: Big O Notation and Complexity Analysis (45 min)
3. **Video**: Recursion Demystified (25 min)
4. **Lab**: Recursive Problem Solving Session (90 min)
5. **Discussion**: "When Recursion Beats Iteration" (async)

### Knowledge Check
- 14-question quiz on Big O notation, recursion concepts
- Algorithm complexity matching exercise
- Recursive tracing problems
- User story format identification

### Instructional Materials
- Benchmarking code templates (timeit for Python, chrono for C++)
- Big O cheat sheet with common complexities
- Recursion visualization tools (Python Tutor recommended)
- User story template with examples
- Performance graphing scripts

### Project Management Integration (Introduction Level)
- **Planning Sheet**: User story template for technical projects
- **New PM Skill**: Writing user stories (As a.../I want.../So that...)
- **Reflection**: Exit Ticket with user story practice
- **PM Time**: ~2 hours for user story writing and estimation

---

## MODULE 3: Sorting Algorithms
**Duration**: Weeks 5-6
**Theme**: Classic algorithms and divide-and-conquer strategies

### Module Learning Outcomes (MLOs)
1. **MLO 3.1**: Implement sorting algorithms (selection, insertion, merge, quick sort) *(Bloom's: Apply | CLO1)*
2. **MLO 3.2**: Visualize algorithm execution step-by-step *(Bloom's: Understand, Apply | CLO5)*
3. **MLO 3.3**: Benchmark sorting performance on different datasets *(Bloom's: Apply, Analyze | CLO2)*
4. **MLO 3.4**: Understand divide-and-conquer patterns *(Bloom's: Understand | CLO2)*
5. **MLO 3.5**: Estimate work complexity using story points *(Bloom's: Apply | CLO4)*

### Assignments
**M03-A1: Sorting Implementation & Visualization** (25 points)
- **What Students Do**: Implement 4 sorting algorithms from scratch (selection sort, insertion sort, merge sort, quick sort), add step-by-step print statements to visualize execution, test on various datasets (random, sorted, reverse-sorted), create visualization showing algorithm behavior
- **Grading Split**: Implementations (12 pts), Step-by-step visualization (8 pts), Testing (3 pts), Code quality (2 pts)
- **CLOs Assessed**: CLO1 (implementation), CLO5 (create-first approach)
- **Technical Content**: Selection sort, insertion sort, merge sort, quick sort, divide-and-conquer, pivot selection, recursion in sorting
- **Deliverables**: Four sorting implementations, visualization output, test results

**M03-A2: Sorting Comparison Report** (25 points)
- **What Students Do**: Benchmark all 4 sorting algorithms on datasets of sizes 100, 500, 1000, 5000, 10000 with random/sorted/reverse data, create comparison graphs, analyze Big O complexity empirically, write report justifying algorithm selection for different scenarios, estimate story points for implementation tasks
- **Grading Split**: Benchmark data (10 pts), Comparison graphs (8 pts), Analysis report (5 pts), Story points estimation (2 pts)
- **CLOs Assessed**: CLO2 (complexity analysis), CLO4 (estimation)
- **Technical Content**: Sorting complexity (O(n²) vs O(n log n)), best/average/worst case analysis, stability in sorting, practical algorithm selection
- **Deliverables**: Benchmark data CSV, performance graphs, written analysis, story points document

### Learning Activities
1. **Studio**: Sorting Visualization Studio (90 min, interactive sorting animations)
2. **Reading**: Divide-and-Conquer Algorithms (60 min)
3. **Video**: Merge Sort and Quick Sort Explained (30 min)
4. **Lab**: Sorting Implementation Workshop (90 min)
5. **Discussion**: "Which Sort for Which Data?" (async)

### Knowledge Check
- 15-question quiz on sorting algorithms, complexity analysis
- Algorithm selection scenarios
- Story point estimation practice
- Divide-and-conquer pattern identification

### Instructional Materials
- Sorting algorithm pseudocode
- Visualization tools (VisuAlgo recommended)
- Benchmark templates
- Story point estimation guide (Fibonacci scale)
- Sorting performance comparison charts

### Project Management Integration (Developing Level)
- **Planning Sheet**: Story point estimation worksheet
- **New PM Skill**: Story point estimation using Fibonacci scale (1, 2, 3, 5, 8)
- **Reflection**: Exit Ticket with velocity baseline
- **PM Time**: ~2 hours for estimation practice

---

## MODULE 4: Linear Structures - Sprint 1
**Duration**: Weeks 7-8
**Theme**: Linked lists with first complete sprint

### Module Learning Outcomes (MLOs)
1. **MLO 4.1**: Implement singly-linked list with full CRUD operations *(Bloom's: Apply, Create | CLO1)*
2. **MLO 4.2**: Understand pointer/reference manipulation in depth *(Bloom's: Understand, Apply | CLO1)*
3. **MLO 4.3**: Build applications using stacks and queues (undo systems, simulators) *(Bloom's: Create | CLO1)*
4. **MLO 4.4**: Compare array-based vs node-based implementations *(Bloom's: Analyze | CLO2)*
5. **MLO 4.5**: Execute first complete sprint cycle (planning, standups, review, retrospective) *(Bloom's: Apply | CLO4)*

### Assignments
**M04-A1: Linked List Implementation Sprint** (50 points)
- **What Students Do**: Execute first full 2-week sprint with sprint planning (capacity calculation, user stories, story points), implement singly-linked list from scratch (Node class, insert front/back/at, delete value/at, search, get, size, isEmpty, display), write comprehensive test suite (15+ tests), maintain daily standups in standup.md, track burndown chart, follow Sacred Flow with sprint branching strategy
- **Grading Split**: Technical implementation (30 pts) - Node class (3), insert operations (6), delete operations (6), search/get (4), helpers (3), tests (5), passing (3) | PM execution (20 pts) - Sprint planning (5), daily standups (8), burndown chart (5), sprint review (2)
- **CLOs Assessed**: CLO1 (linked list implementation), CLO4 (sprint execution)
- **Technical Content**: Singly-linked lists, node-based structures, pointer/reference manipulation, traversal algorithms, memory management (C++), CRUD operations
- **PM Content**: Sprint planning (capacity, sprint goal, user stories, story points), daily standups (What I did/What I'm doing/Blockers), burndown chart tracking, sprint branching strategy
- **Deliverables**: SPRINT_PLANNING.md, LinkedList implementation, test suite, standup.md (5+ entries), burndown.csv and chart, SPRINT_REVIEW.md, PR from sprint branch

**M04-A2: Sprint 1 Retrospective** (25 points)
- **What Students Do**: Conduct structured retrospective using Start/Stop/Continue format, analyze what went well and what didn't, calculate actual velocity (story points completed), identify blockers encountered and resolutions, document lessons learned, create action items for Sprint 2
- **Grading Split**: What went well (5 pts), What didn't go well (5 pts), Velocity calculation (5 pts), Action items (5 pts), Honesty and depth (5 pts)
- **CLOs Assessed**: CLO4 (retrospective practice)
- **Technical Content**: N/A (pure process)
- **PM Content**: Sprint retrospective ceremonies, Start/Stop/Continue framework, velocity calculation, continuous improvement mindset
- **Deliverables**: SPRINT1_RETROSPECTIVE.md with structured sections, velocity data, improvement action items

### Learning Activities
1. **Lab**: Linked List Debugging Session (90 min, hands-on pointer manipulation)
2. **Reading**: Linked Lists and Memory Management (45 min)
3. **Workshop**: Sprint Planning Workshop (60 min, first sprint planning practice)
4. **Lab**: Sprint Work Time with Check-ins (2 sessions × 90 min)
5. **Demo**: Sprint 1 Review Presentations (in-class, 60 min)

### Knowledge Check
- 14-question quiz on linked lists, pointers/references, sprint concepts
- Linked list operation tracing
- Sprint planning scenario quiz
- Retrospective reflection prompts

### Instructional Materials
- Linked list visualization tools (VisuAlgo)
- Node class starter code (C++ and Python)
- Sprint planning template with capacity calculation
- Daily standup log template
- Burndown chart spreadsheet template
- Retrospective template (Start/Stop/Continue)
- PM Mini-Lesson: Sprint Basics

### Project Management Integration (Developing Level)
- **Planning Sheet**: Full sprint planning document with capacity and goals
- **New PM Skills**: Sprint planning, capacity calculation, daily standups, burndown tracking, sprint retrospectives
- **Reflection**: Retrospective replaces standard exit ticket
- **PM Time**: ~5 hours (2 hrs planning, 2 hrs daily tracking, 1 hr retrospective)
- **Process Grading**: 40% of module grade (20 pts process / 50 pts total)

---

## MODULE 5: Hashing & Hash Tables - Sprint 2
**Duration**: Weeks 9-10
**Theme**: O(1) lookup with collision strategies

### Module Learning Outcomes (MLOs)
1. **MLO 5.1**: Design hash functions for different data types *(Bloom's: Create | CLO1)*
2. **MLO 5.2**: Implement collision resolution strategies (chaining, open addressing) *(Bloom's: Apply | CLO1)*
3. **MLO 5.3**: Build hash table/dictionary from scratch *(Bloom's: Create | CLO1)*
4. **MLO 5.4**: Analyze hash table performance characteristics *(Bloom's: Analyze | CLO2)*
5. **MLO 5.5**: Apply velocity tracking to improve sprint planning *(Bloom's: Apply | CLO4)*

### Assignments
**M05-A1: Hash Table Implementation Sprint** (50 points)
- **What Students Do**: Execute Sprint 2 with velocity-based planning (use Sprint 1 actual velocity), implement hash table from scratch with custom hash function, implement collision resolution (chaining with linked lists or open addressing), build hash table operations (insert, delete, search, resize), test with various load factors, track sprint progress with standups and burndown, apply Sprint 1 retrospective action items
- **Grading Split**: Technical implementation (30 pts) - Hash function (5), collision resolution (8), hash table operations (10), resize/rehash (4), tests (3) | PM execution (20 pts) - Velocity-based planning (5), daily standups (8), burndown (5), improvement evidence (2)
- **CLOs Assessed**: CLO1 (hash table implementation), CLO2 (performance analysis), CLO4 (sprint execution)
- **Technical Content**: Hash functions (modulo, multiplication, universal hashing), collision resolution (chaining, linear probing, quadratic probing, double hashing), load factor, dynamic resizing, rehashing
- **PM Content**: Velocity-based sprint planning (use Sprint 1 data), applying retrospective improvements, refined daily standup practice
- **Deliverables**: SPRINT_PLANNING.md with velocity calculation, hash table implementation, test suite, standup.md, burndown chart, improvement evidence

**M05-A2: Sprint 2 Review & Velocity Analysis** (25 points)
- **What Students Do**: Conduct sprint review (demo hash table implementation), run Sprint 2 retrospective, analyze velocity improvement (Sprint 1 vs Sprint 2), identify patterns in estimation accuracy, compare planned vs actual story points, document what changed based on Sprint 1 actions, create Sprint 3 improvement plan
- **Grading Split**: Sprint review/demo (10 pts), Retrospective depth (10 pts), Velocity analysis (5 pts)
- **CLOs Assessed**: CLO4 (process maturation)
- **Technical Content**: Hash table demonstration
- **PM Content**: Sprint review ceremony, velocity trend analysis, estimation accuracy improvement
- **Deliverables**: Sprint review document, Sprint 2 retrospective, velocity comparison chart

### Learning Activities
1. **Workshop**: Hash Function Design Workshop (90 min, designing and testing hash functions)
2. **Reading**: Hash Tables and Collision Resolution (60 min)
3. **Lab**: Sprint 2 Work Time with Velocity Coaching (2 sessions × 90 min)
4. **Discussion**: "Hash Collisions in the Wild" (async)
5. **Demo**: Sprint 2 Hash Table Demonstrations (in-class, 60 min)

### Knowledge Check
- 15-question quiz on hash functions, collision resolution, load factor
- Hash function design exercise
- Velocity calculation practice
- Sprint review preparation checklist

### Instructional Materials
- Hash function examples and design patterns
- Collision resolution visualization
- Load factor and resize strategies
- Velocity tracking spreadsheet template
- Sprint review presentation template

### Project Management Integration (Developing Level)
- **Planning Sheet**: Sprint planning with historical velocity data
- **New PM Skills**: Velocity-based capacity planning, sprint review presentations
- **Reflection**: Retrospective with focus on velocity patterns
- **PM Time**: ~5 hours (2 hrs planning with velocity, 2 hrs tracking, 1 hr review/retro)
- **Process Grading**: 40% of module grade

---

## MODULE 6: Trees & Heaps - Sprint 3
**Duration**: Weeks 11-12
**Theme**: Hierarchical structures and priority queues

### Module Learning Outcomes (MLOs)
1. **MLO 6.1**: Implement binary search trees (BST) with all operations *(Bloom's: Apply, Create | CLO1)*
2. **MLO 6.2**: Execute tree traversals (inorder, preorder, postorder, level-order) *(Bloom's: Apply | CLO1)*
3. **MLO 6.3**: Build heap data structure for priority queue *(Bloom's: Create | CLO1)*
4. **MLO 6.4**: Design expression tree evaluator *(Bloom's: Create | CLO1)*
5. **MLO 6.5**: Manage sprint with PM becoming habitual *(Bloom's: Apply | CLO4)*

### Assignments
**M06-A1: BST & Heap Implementation Sprint** (75 points)
- **What Students Do**: Execute Sprint 3 with PM becoming habitual (less scaffolding provided), implement binary search tree from scratch (insert, delete, search, find min/max, tree traversals), implement min-heap for priority queue (insert, extract_min, heapify), test both structures comprehensively, maintain sprint process independently
- **Grading Split**: Technical implementation (50 pts) - BST operations (20), tree traversals (10), heap operations (15), tests (5) | PM execution (25 pts) - Sprint artifacts (15), PM quality/consistency (10)
- **CLOs Assessed**: CLO1 (tree and heap implementation), CLO4 (autonomous sprint execution)
- **Technical Content**: Binary search trees, BST property, tree traversals (recursive and iterative), heap property, heapify operation, priority queue, tree balancing concepts
- **PM Content**: By Sprint 3, PM should be habitual - students execute independently with minimal guidance
- **Deliverables**: BST implementation, heap implementation, traversal methods, test suite, sprint artifacts (planning, standups, burndown)

**M06-A2: Expression Tree Evaluator** (25 points)
- **What Students Do**: Build expression tree from postfix notation, implement recursive evaluator, support basic operators (+, -, *, /), visualize tree structure, test with various expressions, document tree building algorithm
- **Grading Split**: Tree building (10 pts), Evaluation algorithm (8 pts), Visualization (4 pts), Tests (3 pts)
- **CLOs Assessed**: CLO1 (tree application), CLO5 (algorithmic thinking)
- **Technical Content**: Expression trees, postfix notation, tree-based evaluation, operator precedence
- **Deliverables**: Expression tree implementation, evaluator, visualization output, test cases

### Learning Activities
1. **Lab**: Tree Traversal Lab (90 min, hands-on traversal practice)
2. **Reading**: Binary Search Trees and Heaps (60 min)
3. **Workshop**: Expression Tree Workshop (60 min)
4. **Lab**: Sprint 3 Work Time (2 sessions × 90 min, minimal instructor intervention)
5. **Discussion**: "BST vs Hash Table - When to Use Which?" (async)

### Knowledge Check
- 15-question quiz on trees, BST properties, heaps, traversals
- Tree traversal tracing exercises
- Heap operation simulations
- Sprint self-assessment checklist

### Instructional Materials
- BST visualization tools
- Tree traversal animations
- Heap operation visualizations
- Expression tree examples
- Sprint execution checklist (self-guided)

### Project Management Integration (Proficient Level)
- **Planning Sheet**: Student creates own sprint plan (minimal template)
- **New PM Skills**: PM becoming automatic, less scaffolding needed
- **Reflection**: Brief retrospective (PM is now habitual)
- **PM Time**: ~4 hours (students are more efficient now)
- **Process Grading**: 33% of module grade (25 pts / 75 pts total)

---

## MODULE 7: Graphs & Advanced Algorithms - Sprint 4
**Duration**: Weeks 13-14
**Theme**: Network structures and graph traversal

### Module Learning Outcomes (MLOs)
1. **MLO 7.1**: Implement graph representations (adjacency matrix, adjacency list) *(Bloom's: Apply | CLO1)*
2. **MLO 7.2**: Execute graph traversal algorithms (BFS, DFS) *(Bloom's: Apply | CLO1)*
3. **MLO 7.3**: Implement shortest path algorithm (Dijkstra's) *(Bloom's: Apply | CLO1)*
4. **MLO 7.4**: Apply graphs to real-world problems (social networks, maps, routing) *(Bloom's: Apply, Create | CLO1, CLO2)*
5. **MLO 7.5**: Optimize sprint process based on 3 prior sprints *(Bloom's: Evaluate | CLO4)*

### Assignments
**M07-A1: Graph Implementation & Traversal Sprint** (75 points)
- **What Students Do**: Execute Sprint 4 with process optimization focus, implement graph using adjacency list and adjacency matrix, implement BFS and DFS traversals, implement Dijkstra's shortest path algorithm, test with various graph structures (directed/undirected, weighted/unweighted), execute optimized sprint process based on lessons from Sprints 1-3
- **Grading Split**: Technical implementation (50 pts) - Graph representations (12), BFS/DFS (15), Dijkstra's (15), tests (8) | PM execution (25 pts) - Sprint artifacts (15), Process optimization evidence (10)
- **CLOs Assessed**: CLO1 (graph implementation), CLO2 (algorithm selection), CLO4 (process optimization)
- **Technical Content**: Graph terminology (vertices, edges, directed/undirected, weighted), adjacency matrix vs adjacency list, BFS queue-based traversal, DFS recursive and stack-based, Dijkstra's algorithm, shortest paths
- **PM Content**: Sprint 4 shows process maturity - students apply all learnings from previous sprints, demonstrate optimization
- **Deliverables**: Graph implementation (both representations), BFS/DFS/Dijkstra implementations, test suite, sprint artifacts with optimization evidence

**M07-A2: Real-World Graph Application** (50 points)
- **What Students Do**: Design and implement real-world application using graphs (social network analyzer, route planner, network topology, recommendation system, maze solver), justify graph representation choice, benchmark performance, document design decisions, create demonstration/visualization, write technical report
- **Grading Split**: Application implementation (25 pts), Graph choice justification (8 pts), Performance analysis (7 pts), Demonstration (5 pts), Technical report (5 pts)
- **CLOs Assessed**: CLO1 (application), CLO2 (analysis and justification), CLO5 (design thinking)
- **Technical Content**: Applied graph algorithms, problem decomposition, algorithm selection justification, performance benchmarking
- **Deliverables**: Graph application code, demo/visualization, technical report with justification and analysis

### Learning Activities
1. **Workshop**: Graph Builder Workshop (90 min, constructing and visualizing graphs)
2. **Reading**: Graph Algorithms and Applications (75 min)
3. **Lab**: Sprint 4 Work Time (2 sessions × 90 min)
4. **Discussion**: "Graphs in Real-World Systems" (async)
5. **Peer Review**: Sprint board and process optimization exchanges

### Knowledge Check
- 14-question quiz on graph concepts, traversals, shortest paths
- Graph algorithm tracing exercises
- Algorithm selection scenarios
- Process optimization self-reflection

### Instructional Materials
- Graph visualization tools (VisuAlgo, NetworkX)
- BFS/DFS animation demonstrations
- Dijkstra's algorithm walkthrough
- Real-world graph problem examples
- Sprint optimization checklist

### Project Management Integration (Proficient → Advanced)
- **Planning Sheet**: Student-created with documented improvements
- **PM Skills**: Process optimization based on 3 sprints of velocity data
- **Reflection**: Retrospective focusing on process evolution over 4 sprints
- **PM Time**: ~4 hours (highly efficient now)
- **Process Grading**: 35% of module grade

---

## MODULE 8: Integration Project & Portfolio
**Duration**: Weeks 15-16
**Theme**: Capstone project demonstrating mastery

### Module Learning Outcomes (MLOs)
1. **MLO 8.1**: Design application using 3+ data structures appropriately *(Bloom's: Create | CLO1, CLO2)*
2. **MLO 8.2**: Justify structure selection with complexity analysis *(Bloom's: Evaluate | CLO2)*
3. **MLO 8.3**: Document complete development process (technical + PM + AI collaboration) *(Bloom's: Create | CLO3, CLO4)*
4. **MLO 8.4**: Present technical work professionally with AI collaboration evidence *(Bloom's: Create | CLO3, CLO4)*
5. **MLO 8.5**: Evaluate personal skill development across entire course *(Bloom's: Evaluate | CLO4, CLO5)*

### Assignments
**M08-A1: Final Integration Project** (100 points)
- **What Students Do**: Execute Sprint 5 (final sprint) with full autonomy, design and implement end-to-end application integrating 3+ data structures from semester (e.g., priority queue with heap + graph for route planning, hash table + BST + linked list for database), choose project from provided list or propose custom project, build complete working application with user interface (CLI or GUI), justify each data structure choice with Big O analysis, test comprehensively, document development process including AI collaboration, create Process Portfolio documenting PM journey across all 4-5 sprints
- **Grading Split**:
  - Technical Implementation (60 pts): Multi-structure integration (15 pts), Application completeness (15 pts), Data structure justification with Big O (10 pts), Code quality (10 pts), Comprehensive testing (5 pts), Working demo (5 pts)
  - Process Portfolio (40 pts): Velocity chart Sprints 1-5 with analysis (10 pts), Estimation accuracy evolution (8 pts), Retrospective insights with evidence (12 pts), PM growth narrative essay (10 pts)
- **CLOs Assessed**: All 5 CLOs (comprehensive capstone)
- **Technical Content**: Student-selected application, must integrate 3+ different data structures from course, production-ready code, comprehensive testing, Big O justification for each structure
- **PM Content**: Sprint 5 execution + Process Portfolio analyzing all 4-5 sprints - velocity trends, estimation improvement, retrospective action items with evidence, PM growth narrative
- **AI Collaboration**: Comprehensive prompts.txt documenting entire development journey with AI
- **Deliverables**:
  - Application source code with 3+ integrated data structures
  - Comprehensive test suite
  - Process Portfolio document (velocity chart, estimation analysis, retrospective cycles, growth narrative)
  - Sprint 5 artifacts (planning, standups, burndown)
  - prompts.txt with complete AI collaboration history
  - README with project overview and structure justification
  - Technical documentation

**M08-A2: Technical Presentation & Process Portfolio Defense** (75 points)
- **What Students Do**: Present capstone project to class (15-20 minutes total), technical deep-dive (8 min) - problem, data structures chosen, Big O justification, demo working application, PM journey narrative (5 min) - velocity evolution, key sprint learnings, process improvements, AI collaboration reflection (4 min) - how AI helped learning, effective prompting strategies, Q&A (5-10 min) - defend decisions, explain trade-offs
- **Grading Split**: Technical explanation clarity (25 pts), Data structure justification (15 pts), PM narrative (15 pts), AI collaboration reflection (10 pts), Presentation quality (5 pts), Q&A responses (5 pts)
- **CLOs Assessed**: All CLOs (demonstrating mastery)
- **Technical Content**: Project demonstration and explanation, Big O analysis defense
- **PM Content**: PM journey storytelling with data (velocity charts, retrospective insights, growth evidence)
- **AI Content**: AI collaboration reflection, effective prompting demonstration, learning process analysis
- **Deliverables**: Presentation slides/materials, live demo or recorded video, Q&A participation, Process Portfolio defense

### Learning Activities
1. **Workshop**: Capstone Project Planning (in-class, 90 min)
2. **Reading**: Technical Presentations Best Practices (30 min)
3. **Lab**: Sprint 5 Work Time (2 sessions × 90 min)
4. **Workshop**: Presentation Practice with Peer Feedback (90 min)
5. **Presentation Day**: Final Demos and Defenses (2 class sessions, 180+ min total)
6. **Celebration**: Course Retrospective and Reflection

### Knowledge Check
- Self-assessment: Course CLO achievement reflection
- Capstone completeness checklist
- Presentation readiness rubric
- PM growth self-evaluation

### Instructional Materials
- Capstone project idea list with examples
- Data structure selection decision tree
- Process Portfolio template with examples
- Technical presentation guide
- PM growth narrative prompts
- Big O justification framework

### Project Management Integration (Advanced/Mastery)
- **Planning Sheet**: Sprint 5 planning document (fully autonomous)
- **Process Portfolio**: Comprehensive analysis of all 4-5 sprints
- **PM Skills Demonstrated**: Velocity tracking, estimation accuracy, retrospective discipline, continuous improvement, autonomous sprint execution
- **Reflection**: Comprehensive course retrospective + "What I'll do in future CS courses" forward-looking statement
- **PM Time**: ~10 hours (5 hrs Sprint 5 execution, 5 hrs Process Portfolio creation)
- **Process Grading**: 40% of Module 8 grade (Process Portfolio is major deliverable)

---

## GRADING BREAKDOWN

### Points Distribution
| Category | Points | Percentage | Description |
|----------|--------|------------|-------------|
| **Module 1** | 50 | 7% | Foundations + AI collaboration |
| **Module 2** | 50 | 7% | Algorithm analysis + recursion |
| **Module 3** | 50 | 7% | Sorting algorithms |
| **Module 4** | 75 | 11% | Linked lists Sprint 1 + retrospective |
| **Module 5** | 75 | 11% | Hash tables Sprint 2 + velocity |
| **Module 6** | 100 | 14% | Trees & heaps Sprint 3 + expression tree |
| **Module 7** | 125 | 18% | Graphs Sprint 4 + real-world application |
| **Module 8** | 175 | 25% | Capstone (100 pts) + presentation (75 pts) |
| **Total** | **700** | **100%** | |

### Grading Scale
- **A**: 90-100% (630-700 points)
- **B**: 80-89% (560-629 points)
- **C**: 70-79% (490-559 points)
- **D**: 60-69% (420-489 points)
- **F**: Below 60% (< 420 points)

### Process Grading Breakdown by Module
- **Modules 1-3**: 20-30% process (learning fundamentals + PM basics)
- **Modules 4-5**: 40% process (first sprints, learning sprint cycle)
- **Modules 6-7**: 33-35% process (PM becomes habitual)
- **Module 8**: 40% process (Process Portfolio emphasis)

### Process Grading Components
- **Sprint Artifacts**: Planning, standups, burndown charts, retrospectives (varies by module)
- **AI Collaboration**: prompts.txt files documenting AI learning process (all assignments)
- **Sacred Flow**: GitHub issues, branches, PRs, commit quality (all assignments)
- **Process Portfolio**: Comprehensive sprint analysis and PM growth narrative (Module 8)

---

## ASSESSMENT ALIGNMENT MATRIX

### CLO → Assessment Mapping

| CLO | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | Total Assessments |
|-----|----|----|----|----|----|----|----|----|-------------------|
| **CLO1** (Implement data structures) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 8 modules (all) |
| **CLO2** (Analyze complexity) | | ✓ | ✓ | ✓ | ✓ | | ✓ | ✓ | 6 modules |
| **CLO3** (AI collaboration) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 8 (all modules) |
| **CLO4** (Professional workflows) | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | 8 (all modules) |
| **CLO5** (Create-first design) | ✓ | ✓ | ✓ | ✓ | | | ✓ | ✓ | 6 modules |

**Assessment Methods**:
- Formative: Knowledge checks, exit tickets, daily standups (ongoing)
- Summative: Sprint deliverables, retrospectives, capstone project, presentation
- Authentic: 4-5 complete sprint cycles managing real DS&A projects
- Process: Sprint artifacts, velocity tracking, retrospective depth, AI collaboration documentation

---

## BLOOM'S TAXONOMY DISTRIBUTION

| Cognitive Level | MLOs | Percentage | Balance |
|-----------------|------|------------|---------|
| **Remember** | 0 | 0% | None (not assessed separately) |
| **Understand** | 3 | 8% | ██ Embedded in higher levels |
| **Apply** | 24 | 63% | ████████████ Primary focus |
| **Analyze** | 4 | 11% | ███ |
| **Evaluate** | 4 | 11% | ███ |
| **Create** | 3 | 8% | ██ |

**Pedagogical Rationale**: Heavy emphasis on Apply level reflects hands-on, implementation-focused course design with create-first pedagogy. Students BUILD data structures (apply), MANAGE sprint projects (apply), and ANALYZE performance (analyze/evaluate). The "Create" level appears in design tasks (capstone, real-world applications). This distribution supports create-before-theory philosophy while scaffolding toward higher-order thinking.

---

## QUALITY MATTERS STANDARDS ALIGNMENT

### Standard 1: Course Overview and Introduction ✅
- **1.1**: Instructions on getting started
  - *Evidence*: Module 1 setup guide, GitHub workflow tutorial, dual-language setup options
- **1.2**: Introduction to purpose and structure
  - *Evidence*: Course description, 8-module overview, create-first pedagogy explanation, sprint cycle introduction
- **1.3**: Etiquette expectations
  - *Evidence*: Discussion guidelines, peer review norms, AI collaboration ethics, Sacred Flow expectations
- **1.4**: Instructor/student contact
  - *Evidence*: Office hours (extended during sprint weeks), Discord server, email response time (24 hrs weekdays)
- **1.5**: Technical skills and requirements
  - *Evidence*: Prerequisites (CSC-134), C++/Python choice, GitHub proficiency, AI tool selection
- **1.6**: Accessibility policies
  - *Evidence*: Accommodation statement, alternative format options, flexible sprint deadlines with documentation

### Standard 2: Learning Objectives (Competencies) ✅
- **2.1**: Course-level learning objectives
  - *Evidence*: 5 CLOs clearly stated with Bloom's levels and assessment methods
- **2.2**: Module-level learning objectives
  - *Evidence*: 38 MLOs (4-5 per module) with CLO linkage and Bloom's levels
- **2.3**: Learning objectives stated clearly
  - *Evidence*: Active verbs, measurable outcomes, specific technical contexts
- **2.4**: Objectives align with course level
  - *Evidence*: 200-level appropriate (data structures fundamentals, not advanced algorithms)
- **2.5**: Learning activities support objectives
  - *Evidence*: Aligned activities listed per module with time estimates

### Standard 3: Assessment and Measurement ✅
- **3.1**: Assessments measure stated objectives
  - *Evidence*: CLO → Assessment matrix shows multiple measures per CLO
- **3.2**: Grading policy stated
  - *Evidence*: Point distribution, grading scale, process grading criteria (20-40% by module)
- **3.3**: Sufficient assessments per objective
  - *Evidence*: CLO1 assessed 8 times; CLO3 and CLO4 assessed 8 times; all CLOs measured multiple times
- **3.4**: Rubrics provided for graded items
  - *Evidence*: Detailed rubrics in assignment files, grading splits shown in COURSEMAP
- **3.5**: Due dates and work expectations clear
  - *Evidence*: 2-week module cycle, sprint deadlines, time estimates provided (9 hrs/week)

### Standard 4: Instructional Materials ✅
- **4.1**: Instructional materials support objectives
  - *Evidence*: Labs, readings, videos aligned to each MLO; AI collaboration guides
- **4.2**: Purpose of materials clearly explained
  - *Evidence*: Module introductions explain how materials connect to objectives
- **4.3**: Materials varied and appropriate
  - *Evidence*: Mix of video, text, interactive coding, hands-on sprints, visualization tools; dual-language support
- **4.4**: Materials support diverse learners
  - *Evidence*: C++ or Python choice, AI collaboration support, multiple visualization tools, create-first accommodates different learning styles

### Standard 5: Learning Activities and Learner Interaction ✅
- **5.1**: Activities support learning objectives
  - *Evidence*: 5+ activities per module tied to specific MLOs
- **5.2**: Opportunities for learner-learner interaction
  - *Evidence*: Discussions, peer reviews, demo days, process optimization exchanges
- **5.3**: Opportunities for learner-instructor interaction
  - *Evidence*: PR feedback, retrospective check-ins, office hours, in-class lab coaching, sprint reviews
- **5.4**: Requirements for learner interaction stated
  - *Evidence*: Participation requirements, discussion prompts, demo day expectations, peer review guidelines

### Standard 6: Course Technology ✅
- **6.1**: Tools support learning objectives
  - *Evidence*: GitHub (CLO4 - workflows), C++/Python compilers (CLO1 - implementation), AI tools (CLO3 - collaboration), visualization tools (CLO5 - understanding)
- **6.2**: Navigation instructions provided
  - *Evidence*: Canvas navigation guide, GitHub workflow tutorial, IDE setup guides
- **6.3**: Technology access statement
  - *Evidence*: Free tools (g++, Python, VS Code, GitHub, AI options), computer lab access, no paid requirements
- **6.4**: Privacy policies provided
  - *Evidence*: Links to GitHub, AI tool privacy policies; data handling explanation

### Standard 7: Learner Support ✅
- **7.1**: Technical support resources
  - *Evidence*: IT help desk, GitHub support links, compiler setup guides, troubleshooting documentation
- **7.2**: Academic support resources
  - *Evidence*: Tutoring center, writing center (for presentations), library CS resources
- **7.3**: Course policies clear
  - *Evidence*: Syllabus with attendance, late work (10% per day), academic integrity (AI collaboration rules)
- **7.4**: Institutional resources accessible
  - *Evidence*: Links to student services, accessibility office, counseling, career services

### Standard 8: Accessibility and Usability ✅
- **8.1**: Course navigation facilitates access
  - *Evidence*: Consistent module structure, clear labeling, module numbers + titles
- **8.2**: Information presented clearly
  - *Evidence*: Headings, lists, tables, white space; clean COURSEMAP design
- **8.3**: Course provides accessible text
  - *Evidence*: All materials markdown or HTML; code examples screen reader compatible
- **8.4**: Multimedia alternatives provided
  - *Evidence*: Video transcripts, visualization tool descriptions, code explanations in text form
- **8.5**: Vendor accessibility statements
  - *Evidence*: Links to GitHub, Canvas, VS Code, VisuAlgo VPAT statements

**Certification Status**: ✅ All 22 Essential Standards Met

---

## INSTRUCTIONAL DESIGN NOTES

### Backward Design Approach
1. **CLOs Defined First**: 5 course-level outcomes based on program needs and CS curriculum progression
2. **MLOs Derived**: 38 module objectives (4-5 per module) explicitly linked to CLOs with Bloom's levels
3. **Assessments Aligned**: Every assessment maps to specific CLO(s); process grading = CLO4
4. **Activities Designed**: Learning activities scaffold toward implementation and sprint success

### Create-First Pedagogy (Inverted Bloom's)
**Traditional Approach**: Learn theory → Understand → Apply → Create
**Drew's Approach**: Create → Break → Fix → Understand → Analyze

**Implementation**:
- **Week 1**: Build Stack before reading about Stack theory
- **Week 3**: Implement sorts before analyzing complexity
- **Week 7**: Code linked list before studying pointer theory
- **Week 11**: Build BST before learning tree algorithms formally

**Rationale**: Mirrors professional developer learning (exploration → iteration → mastery). Cognitive struggle during "create" phase leads to deeper understanding when theory is introduced. Aligns with constructivist learning theory.

### Scaffolding Strategy

**Modules 1-3**: Foundation (20-30% process grading)
- High structure: Templates, guided instructions, starter code
- Sacred Flow introduced gradually
- User stories and story points taught explicitly
- Technical focus: ADTs, recursion, sorting

**Modules 4-5**: First Full Sprints (40% process grading)
- Full sprint cycle introduced with guidance
- Templates provided for planning, standups, retrospectives
- Velocity tracking begins
- Technical challenge: Linked lists, hash tables

**Modules 6-7**: Habitual Practice (33-35% process grading)
- Less scaffolding - students execute sprints independently
- PM becomes automatic, focus shifts to technical depth
- Process optimization emphasized
- Technical challenge: Trees, graphs

**Module 8**: Mastery Demonstration (40% process grading)
- Full autonomy - minimal templates, student-designed project
- Process Portfolio shows growth across all sprints
- Technical integration: Multiple data structures combined

### Integrated AI Collaboration Philosophy
**AI as Learning Partner, Not Replacement**:
- prompts.txt required in all assignments
- Students document AI interactions and learning process
- Assessment includes "explain your code" requirement
- AI helps understanding, doesn't bypass learning

**Scaffolded AI Use**:
- Module 1: Learn effective prompting
- Modules 2-7: Iterate with AI to debug and understand
- Module 8: Reflect on AI collaboration throughout course

### Dual-Language Flexibility
**C++ Track**: Systems programming, memory management, pointers, templates
**Python Track**: Rapid prototyping, high-level abstractions, Python-specific features

**AI Bridges Languages**: Students use AI to translate concepts, compare implementations, understand trade-offs

### Active Learning Emphasis
- **Hands-on**: 60% of class time in lab/sprint work mode
- **Minimal Lecture**: 15-20 min concept intro, then BUILD
- **Immediate Application**: Learn sprint planning → Plan your sprint same day
- **Iteration Culture**: 4-5 sprints with retrospectives = 4-5 improvement cycles

---

## PM SKILLS PROGRESSION

### Skill Thread Across Courses

**CSC-113 (Introduction Level)** - If taken:
- Basic GitHub workflow (Issue → Branch → PR → Merge)
- Simple project cycles
- Exit tickets and reflection practice

**CSC-249 (Developing → Proficient)** ← YOU ARE HERE:
- Sacred Flow workflow mastery
- User story writing (As a.../I want.../So that...)
- Story point estimation (Fibonacci scale)
- Sprint planning (capacity, goals, story selection)
- Daily standups (What I did/What I'm doing/Blockers)
- Burndown charts (visual progress tracking)
- Sprint reviews (demo working software)
- Structured retrospectives (Start/Stop/Continue, action items)
- Velocity tracking across multiple sprints (4-5 complete cycles)

**CTS-285/289 (Proficient → Advanced)** - Looking Ahead:
- Stakeholder management and communication
- Risk assessment and mitigation
- Release planning across multiple sprints
- Team velocity and capacity planning
- Definition of Done refinement

### PM Skills Growth in CSC-249

**Week 1-2**: Sacred Flow workflow introduction
**Week 3-4**: User story writing practice
**Week 5-6**: Story point estimation
**Week 7-8**: First complete sprint (planning, standups, burndown, retro)
**Week 9-10**: Velocity-based planning (using Sprint 1 data)
**Week 11-12**: PM becoming habitual (less guidance)
**Week 13-14**: Process optimization (4 sprints of data)
**Week 15-16**: Process Portfolio (analyzing all sprints, demonstrating growth)

---

## COURSE POLICIES

### Attendance
**Hybrid Model**: Online materials + in-person lab
- Online readings/videos: Complete before class
- In-person lab: Attendance required for participation points
- Sprint work sessions: Critical attendance (coding happens here)
- Excused absences: Notify instructor within 24 hours, make-up work arranged

### Late Work
**Sacred Flow Exception**: If you follow Sacred Flow (create issue, branch, PR on time) AND communicate with instructor, you can request 24-48 hour extension with reduced penalty.

**Sprint Deadlines**: Sprints run on 2-week cycles. Sprint deliverables due end of Week 2 of each sprint module.

**Standard Late Policy**:
- 1-24 hours late: -10%
- 25-48 hours late: -20%
- 48+ hours late: -50%
- After Module 8: No late work accepted (end of term)
- **Exception**: Capstone (Module 8) late policy is stricter: 10% per day (it's 25% of grade)

### Academic Integrity
**Collaboration Encouraged**:
- Discussing data structure concepts with classmates
- Asking AI assistants to explain algorithms or debug code
- Using official documentation (cppreference, Python docs)
- Sharing troubleshooting tips and PM strategies
- Peer review of sprint boards and retrospectives

**Plagiarism Prohibited**:
- Copying someone else's code or implementation word-for-word
- Submitting AI-generated code without understanding or attribution
- Sharing complete assignment files or sprint deliverables
- Having someone else complete your implementation or PM artifacts

**The Rule**: You must be able to explain everything you submit. If you can't explain your code, your data structure choices, or your PM decisions, you don't submit it.

**AI Tool Use Policy**:
- ✅ Allowed: Using AI to explain concepts, suggest approaches, debug errors
- ✅ Allowed: AI-assisted code with attribution in prompts.txt and understanding demonstrated
- ✅ Required: Document all AI interactions in prompts.txt
- ❌ Prohibited: Copy-paste AI code without modification or comprehension
- ❌ Prohibited: AI-written analysis/reflection without your own thinking
- ❌ Prohibited: Hiding AI collaboration (transparency required)

**Consequences**: First offense: 0 on assignment + meeting. Second offense: F in course + academic conduct report.

### Accessibility
Students with documented disabilities should contact the Office of Accessibility Services and provide documentation to instructor within first week. Accommodations include:
- Extended time on sprint deliverables
- Alternative format materials
- Assistive technology support for coding
- Flexible presentation formats
- Sprint deadline adjustments with documentation

---

## REQUIRED MATERIALS

### Free Resources (Required)
- **GitHub account** (free tier sufficient; GitHub Pro free for students)
- **C++ compiler** (g++, clang, Visual Studio Community) OR **Python 3.8+**
- **IDE**: VS Code (free), CLion (free for students), or PyCharm (free for students)
- **AI tool access**: Claude, ChatGPT (free tier), or GitHub Copilot (free for students)
- **Git** command line tools or GitHub Desktop
- **Browser**: Chrome, Firefox, or Edge (current version)
- **Computer**: Windows, Mac, or Linux with internet access

### Recommended Resources (Free)
- **Runestone Academy**: Interactive C++ or Python textbook (free)
- **VisuAlgo**: Data structure visualization tool (visualgo.net)
- **Python Tutor**: Code execution visualization (pythontutor.com)

### Optional Materials
- **Zybooks CSC 249**: Light reference only (NOT required)
- **Local development environment**: vs cloud-based Codespaces/Replit

### Hardware Requirements
- Reliable internet connection
- Computer with 4GB+ RAM (8GB recommended for C++ compilation)
- 5GB free disk space (for compiler, IDE, repos)
- Webcam and microphone (for final presentation; can use phone)

### Software Installation

**C++ Students**:
```bash
# Install g++ compiler (Linux/Mac)
sudo apt-get install g++   # Ubuntu
brew install gcc           # Mac

# Verify installation
g++ --version

# Install VS Code
# Download from code.visualstudio.com
# Install C++ extension
```

**Python Students**:
```bash
# Install Python 3.8+
# Download from python.org

# Verify installation
python --version

# Install VS Code
# Download from code.visualstudio.com
# Install Python extension
```

---

## TIME EXPECTATIONS

### Federal Credit Hour Standard
**3 credits = 9-10 hours/week total**
- 2 hours in-class instruction (lecture/demos)
- 3 hours in-class lab (hands-on coding)
- 4-5 hours outside class (homework, sprints, retrospectives)

### Estimated Time per Module (2 weeks)

**Modules 1-3** (Foundation):
- Reading/Videos: 2-3 hours
- Technical Assignments: 6-8 hours
- PM Activities (Sacred Flow, user stories, estimation): 2-3 hours
- Total per Module: 10-14 hours over 2 weeks = 5-7 hours/week

**Modules 4-7** (Sprint Cycles):
- Sprint Planning: 2 hours
- Implementation Work: 8-10 hours
- Daily Standups (10 days × 5 min): 50 min
- Burndown Tracking: 30 min
- Sprint Review/Retro: 1.5 hours
- Total per Module: 12-16 hours over 2 weeks = 6-8 hours/week

**Module 8** (Capstone):
- Sprint 5 Planning: 2 hours
- Implementation: 10-12 hours
- Process Portfolio Creation: 5-6 hours
- Presentation Preparation: 3-4 hours
- Total: 20-24 hours over 2 weeks = 10-12 hours/week (final push)

### Sprint Time Breakdown (Modules 4-7)

**Week 1 of Sprint**:
- Sprint planning: 2 hours
- Initial implementation: 4-5 hours
- Daily standups (5 days × 5 min): 25 min
- Burndown updates: 15 min
- Total: 6-8 hours

**Week 2 of Sprint**:
- Continued implementation: 4-5 hours
- Testing and debugging: 2-3 hours
- Daily standups (5 days × 5 min): 25 min
- Sprint review prep: 30 min
- Retrospective: 1 hour
- Total: 8-10 hours

---

## INSTRUCTOR PHILOSOPHY: Drew's Approach

### Sacred Flow (Workflow Mastery)
> "Every professional developer uses version control. Every professional project uses sprints. You will too."

The Issue → Branch → PR → Merge workflow continues from CSC-113, enhanced with sprint structure:
- **Issues** = User stories (acceptance criteria defined)
- **Branches** = Sprint work (feature branches off sprint branch)
- **PRs** = Sprint deliverables (demo-able working code + prompts.txt)
- **Merges** = Sprint completion (Done = tested, documented, understood)

### Create Before Theory (Inverted Bloom's)
> "Build it. Break it. Fix it. Then understand it deeply."

**Traditional CS**: Learn theory → Apply theory → Maybe create
**Drew's CS**: Create → Struggle → Iterate → Understand profoundly

**Why it works**: Cognitive struggle during creation leads to deeper understanding when theory is introduced. You'll remember how to implement a BST because you debugged pointer issues for 2 hours, not because you memorized a diagram.

### Process Over Product (40% Process Grading)
> "I don't just grade what you built. I grade how you built it."

**What Drew looks at**:
- **Commit frequency**: Did you work incrementally or cram at the end?
- **Commit quality**: Are messages descriptive?
- **Sprint planning**: Is capacity realistic based on velocity data?
- **Daily standups**: Are they consistent? Do they surface blockers early?
- **Burndown tracking**: Does it show steady progress or last-minute panic?
- **Retrospectives**: Are they honest? Do action items lead to actual changes?
- **AI collaboration**: Do prompts show learning or just code extraction?

**Why**: In industry, process determines success. Data structure knowledge means nothing if you can't manage a project. Good process → Good software.

### AI as Collaborator (Not Cheater)
> "AI is your pair programmer. Document the conversation in prompts.txt."

**Required Documentation**: Every assignment includes prompts.txt showing:
- What you asked AI
- What AI suggested
- What you tried
- What you learned
- How you iterated

**Assessment**: "Explain your code" requirement ensures understanding. AI helps you learn faster, not replaces learning.

### Failure as Exercise (DS&A Edition)
> "Your linked list will have pointer bugs. That's not a bug—it's a feature. Debug and learn."

**Philosophy**: Data structures are complex. Bugs are inevitable. Debugging is where learning happens.
- Sprint 1: Most students underestimate linked list complexity → Sprint 2 teaches realistic estimation
- Hash tables: Collision bugs teach algorithm selection importance
- Retrospectives normalize: "What broke? What did I learn? What will I do differently?"

**Favorite Moment**: When a student's Sprint 3 retrospective says "I underestimated tree traversal by 5 points" and their Sprint 4 estimate is spot-on because they learned.

### Dual-Language Philosophy
> "C++ teaches you how computers work. Python teaches you how to think. Both make you better."

**In CSC-249**:
- **C++ Track**: Memory management, pointers, systems thinking, performance optimization
- **Python Track**: Rapid prototyping, high-level abstractions, algorithm focus
- **AI Bridges**: Use AI to translate concepts, compare implementations, understand trade-offs

**Same Outcomes**: Both tracks achieve all CLOs. Both run sprints. Both build portfolio projects. Different paths, same rigor.

---

## STUDENT SUCCESS TIPS

### From Past Students
1. **"Start sprint planning on Day 1, not Day 3."** - Two weeks goes fast.
2. **"Do daily standups even when it feels silly."** - They catch scope creep early.
3. **"Your Sprint 1 velocity will be wrong. That's OK."** - You'll calibrate by Sprint 3.
4. **"Document AI prompts as you go."** - Don't try to remember them later.
5. **"Draw data structures on paper."** - Debugging pointers is easier with diagrams.
6. **"Actually implement retrospective action items."** - Drew checks for evidence.
7. **"Save sprint board screenshots each sprint."** - You'll need them for Process Portfolio.
8. **"Test edge cases early."** - Empty lists, single elements, etc.

### From Drew
1. **Choose your language thoughtfully** - C++ for systems/performance, Python for algorithms/rapid dev. Either is fine, but commit to one.
2. **Use VisuAlgo constantly** - Visualizing data structures makes them click.
3. **Follow Sprint Planning Template (Modules 4-5)** - It teaches capacity planning. By Module 6, you won't need it.
4. **Do actual daily standups** - Set a phone alarm. 5 minutes/day = better project outcomes.
5. **Use retrospectives honestly** - "Everything went great!" is never true. Honesty → growth.
6. **Track velocity from Sprint 1** - Create spreadsheet Week 7, update after every sprint. Module 8 Process Portfolio needs this data.
7. **Commit after EVERY feature completion** - Not at the end of the sprint. Incremental commits show professional habits.
8. **Your capstone is your portfolio piece** - Treat it as a job interview artifact from Day 1.
9. **Document AI collaboration transparently** - prompts.txt is about learning process, not hiding AI use.
10. **Build before reading theory** - Trust the create-first process. Understanding comes after struggle.

---

## COURSE EVOLUTION NOTES

### Changes from Traditional DS&A Courses
- **NEW**: Create-first pedagogy (build before theory)
- **NEW**: Mandatory AI collaboration with prompts.txt documentation
- **NEW**: Dual-language support (C++ or Python)
- **NEW**: 4-5 complete sprint cycles (vs traditional weekly homeworks)
- **NEW**: Process Portfolio as major capstone component
- **NEW**: 40% process grading (vs traditional 100% technical grading)

### Continuous Improvement
Student feedback via exit tickets, sprint retrospectives, and end-of-course surveys informs:
- Sprint template clarity (adjusted after Sprint 1 feedback each term)
- Time estimate accuracy (calibrated based on actual student velocity data)
- PM scaffolding (reduced from Modules 1-8 based on competency development)
- Technical difficulty balance (graph algorithms moved from Week 11 to Week 13-14 after feedback)
- AI collaboration guidelines (refined based on student prompts.txt quality)

---

## APPENDICES

### Appendix A: Glossary
- **Sacred Flow**: GitHub workflow (Issue → Branch → PR → Merge)
- **Sprint**: 2-week development cycle with planning, execution, review, retrospective
- **User Story**: Requirement format (As a [persona], I want [functionality], So that [value])
- **Story Points**: Relative effort estimation (Fibonacci: 1, 2, 3, 5, 8, 13)
- **Velocity**: Story points completed per sprint (tracks capacity)
- **Burndown Chart**: Visual showing remaining work over sprint duration
- **Retrospective**: Sprint reflection (What went well? What didn't? What to improve?)
- **ADT**: Abstract Data Type (interface without implementation details)
- **Big O**: Asymptotic complexity notation (O(1), O(n), O(log n), O(n²), etc.)
- **Node**: Basic unit of linked structures (contains data + pointer/reference)
- **Traversal**: Visiting all elements in data structure (inorder, preorder, postorder, BFS, DFS)
- **prompts.txt**: File documenting AI collaboration throughout assignment
- **CLO**: Course Learning Outcome (program-level)
- **MLO**: Module Learning Outcome (unit-level)
- **frotz → plugh**: Drew's signature (Zork game references)

### Appendix B: Sprint Workflow Quick Reference

1. **Sprint Planning** (Start of 2-week cycle):
   - Calculate capacity (use previous sprint velocity if available)
   - Define sprint goal (one sentence, specific)
   - Create user stories (As a.../I want.../So that...)
   - Estimate story points (Fibonacci scale)
   - Select stories (total points ≤ capacity)
   - Break stories into technical tasks
   - Create GitHub Issues and move to "To Do"

2. **Daily Execution** (Days 1-10):
   - Daily standup (5 min update in standup.md): What I did/What I'll do/Blockers
   - Work on ONE story at a time
   - Move story to "In Progress" when starting
   - Commit frequently (feature-based commits)
   - Update burndown chart daily or every 2 days
   - Document AI collaboration in prompts.txt
   - Move story to "Done" when acceptance criteria met and tests pass

3. **Sprint Review** (End of Week 2):
   - Demo working code (to instructor or class)
   - Show what shipped (completed user stories)
   - Discuss what didn't ship (if any) and why
   - Document in SPRINT_REVIEW.md

4. **Sprint Retrospective** (End of Week 2):
   - What went well? (celebrate)
   - What didn't go well? (learn)
   - Action items for next sprint (concrete changes)
   - Calculate actual velocity (points completed)
   - Document in SPRINT_RETROSPECTIVE.md

### Appendix C: Data Structures & Algorithms Covered

**Linear Structures**:
- Stack (Module 1)
- Queue (Module 1)
- Singly-Linked List (Module 4)
- Doubly-Linked List (bonus)
- Circular List (bonus)

**Hash-Based Structures**:
- Hash Table with Chaining (Module 5)
- Hash Table with Open Addressing (Module 5)

**Tree Structures**:
- Binary Search Tree (Module 6)
- Heap (Min-Heap, Max-Heap) (Module 6)
- Expression Tree (Module 6)
- AVL Tree (bonus)

**Graph Structures**:
- Adjacency Matrix (Module 7)
- Adjacency List (Module 7)

**Sorting Algorithms**:
- Selection Sort (Module 3)
- Insertion Sort (Module 3)
- Merge Sort (Module 3)
- Quick Sort (Module 3)

**Search Algorithms**:
- Linear Search (Module 2)
- Binary Search (Module 2)
- BST Search (Module 6)

**Graph Algorithms**:
- Breadth-First Search (BFS) (Module 7)
- Depth-First Search (DFS) (Module 7)
- Dijkstra's Shortest Path (Module 7)

**Complexity Analysis**:
- Big O Notation (O(1), O(log n), O(n), O(n log n), O(n²))
- Best/Average/Worst Case Analysis
- Space Complexity
- Empirical Benchmarking

### Appendix D: Skill Thread Progression

**Git/GitHub**:
- CSC-113/114: Basic Sacred Flow (Issue → Branch → PR → Merge)
- CSC-249: Sprint-based Sacred Flow (Issues as user stories, feature branches, sprint branches, prompts.txt documentation)
- CTS-285: Team Git workflows (branching strategies, code review)
- CTS-289: Release management (version tagging, deployment branches)

**Project Management**:
- CSC-113/114: Basic project cycles, simple retrospectives
- CSC-249: Full Scrum (user stories, story points, sprints, velocity, burndown, structured retros, Process Portfolio)
- CTS-285: Stakeholder management, risk analysis, release planning
- CTS-289: Autonomous PM, multi-sprint coordination, professional client communication

**Data Structures & Algorithms**:
- CSC-134: Programming fundamentals (arrays, loops, functions)
- CSC-249: Data structures implementation (lists, trees, graphs, hash tables), algorithm analysis
- CTS-285: Advanced algorithms, data modeling, system design
- CTS-289: Production systems, optimization, scalability

**AI Collaboration**:
- CSC-113/114: AI tool usage, prompt engineering (if taken)
- CSC-249: Documented AI collaboration (prompts.txt), iterative learning with AI, AI as debugging partner
- CTS-285+: AI-assisted development, code generation with understanding, AI ethics

**Documentation & Communication**:
- CSC-134: Code comments, basic documentation
- CSC-249: Technical documentation, sprint artifacts, retrospectives, Process Portfolio, formal presentation
- CTS-285: Technical reports, stakeholder presentations, project proposals
- CTS-289: Professional deliverables, client documentation, portfolio defense

---

## CONTACT INFORMATION

**Instructor**: Drew Norris
**Email**: dnorris@college.edu
**Office Hours**: See Canvas (extended hours during sprint weeks for PM support)
**Discord**: Link in Canvas (fastest response for quick questions)
**Response Time**: Within 24 hours (weekdays), 48 hours (weekends)

**PM Support**: Office hours include sprint coaching (planning, velocity questions, retrospective guidance)
**AI Collaboration Help**: Office hours include prompt engineering guidance and AI learning strategies

**Instructional Designer**: Angela Westmoreland
**Email**: awestmoreland@college.edu
**Course Development Support**: Available for material questions, accessibility needs

---

## RESOURCES

### Technical Resources
- **VisuAlgo** (visualgo.net): Interactive data structure visualizations
- **Runestone Academy** (runestone.academy): Interactive C++/Python textbooks (free)
- **Python Tutor** (pythontutor.com): Code execution visualization
- **cppreference.com**: C++ standard library documentation
- **Python.org Docs**: Official Python documentation
- **GeeksforGeeks**: Data structure explanations and code examples

### PM Resources
- PM Materials (see pm-materials/ directory)
- Sprint Planning Template
- Daily Standup Template
- Sprint Retrospective Template
- Burndown Chart Template
- Process Portfolio Template

### AI Collaboration Resources
- AI Prompt Documentation Template (see planning-sheets/)
- Effective Prompting Guide
- AI Ethics Guidelines
- prompts.txt Examples

### Visualization Tools
- **VisuAlgo**: All data structures covered in course
- **Python Tutor**: Step-by-step code execution
- **Graph Online** (graphonline.ru): Graph visualization and algorithms
- **Binary Tree Visualizer**: Various online tools

---

**Last Updated**: January 20, 2026
**Document Version**: 1.0 (Complete Course Map)
**QM Certification Status**: ✅ All 22 Essential Standards Met
**Approved for Internal Certification**: Pending Review

**frotz → plugh**
