# Sprint Planning Template

**Purpose**: Define your sprint goal, calculate capacity, select user stories, and commit to what you'll complete in the next 1-2 weeks for your data structures implementation.
**When to Use**: At the beginning of each sprint (before you start coding)
**Time to Complete**: 30-45 minutes

---

## Instructions

1. **Review your velocity** from previous sprints to understand your capacity
2. **Define a clear sprint goal** - what data structure or algorithm will you implement?
3. **Break down user stories** from your backlog that support the goal
4. **Estimate story points** for each story (use Fibonacci: 1, 2, 3, 5, 8, 13)
5. **Calculate your capacity** based on available hours and historical velocity
6. **Commit to stories** that fit within your capacity (don't overcommit!)
7. **Identify risks** that might impact your sprint (exams, new tech, complexity)

---

## Template

### Sprint Information
- **Sprint Number**:
- **Sprint Duration**: [Start Date] to [End Date]
- **Available Hours This Sprint**:
- **Data Structure/Algorithm Focus**:

### Sprint Goal
**In one sentence, what are you trying to accomplish this sprint?**


### Capacity Calculation
- **Previous Sprint Velocity**: ___ story points
- **Average Velocity (last 3 sprints)**: ___ story points
- **Planned Capacity for This Sprint**: ___ story points
- **Confidence Level**: [ ] High [ ] Medium [ ] Low

**Capacity Adjustments:**
- [ ] Exams or major deadlines this sprint? Reduce capacity by 30-50%
- [ ] New data structure/algorithm to learn? Add learning buffer
- [ ] Holidays or planned time off? Adjust available hours
- [ ] First time implementing this type of structure? Add research time

### User Stories Selected

| Story ID | User Story | Story Points | Priority | Notes |
|----------|-----------|--------------|----------|-------|
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |
| | | | [ ] Must Have [ ] Should Have [ ] Nice to Have | |

**Total Committed Story Points**: ___

### Sprint Backlog Task Breakdown
For each user story, break down into technical tasks:

**Story ID [___]:**
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

**Story ID [___]:**
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### Definition of Done
**A story is complete when:**
- [ ] Code is written and compiles without errors
- [ ] Unit tests pass (all test cases)
- [ ] Time/space complexity analysis documented
- [ ] Code is committed to repository with clear commit messages
- [ ] AI prompts documented in prompts.txt
- [ ] Pull request created and reviewed
- [ ] [Add your own criteria]

### Risk Identification

| Risk | Impact (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|
| | | |
| | | |

### Sprint Commitment
**I commit to completing ___ story points this sprint, focused on: [sprint goal]**

Signed: _________________  Date: _________________

---

## Example (Filled)

### Sprint Information
- **Sprint Number**: 2
- **Sprint Duration**: Feb 15 - Feb 28
- **Available Hours This Sprint**: 18 hours
- **Data Structure/Algorithm Focus**: Linked Lists & Stack Implementation

### Sprint Goal
**Implement a fully functional doubly-linked list with comprehensive test coverage and build a stack using the linked list as the underlying structure**

### Capacity Calculation
- **Previous Sprint Velocity**: 10 story points
- **Average Velocity (last 3 sprints)**: N/A (first data structure sprint)
- **Planned Capacity for This Sprint**: 12 story points
- **Confidence Level**: [ ] High [x] Medium [ ] Low

**Capacity Adjustments:**
- [x] Exams or major deadlines this sprint? **Yes - CS 134 exam on Feb 22, reducing capacity to 10 points**
- [x] New data structure/algorithm to learn? **Yes - first time implementing linked lists from scratch, added learning buffer**
- [ ] Holidays or planned time off?
- [x] First time implementing this type of structure? **Added 2 hours for pointer debugging**

### User Stories Selected

| Story ID | User Story | Story Points | Priority | Notes |
|----------|-----------|--------------|----------|-------|
| US-004 | As a developer, I want to implement a node class so I can build linked list structures | 2 | [x] Must Have | Foundation for all linked structures |
| US-005 | As a developer, I want to implement insert/delete operations so I can modify the linked list | 5 | [x] Must Have | Core functionality |
| US-006 | As a user, I want a working stack with push/pop so I can solve the undo system problem | 3 | [x] Must Have | Uses linked list underneath |
| US-007 | As a developer, I want comprehensive unit tests so I can verify correctness | 2 | [x] Should Have | Quality assurance |

**Total Committed Story Points**: 12 (adjusted to 10 after exam consideration)

### Sprint Backlog Task Breakdown

**Story US-004: Implement Node Class**
- [ ] Design node structure (data, next, prev pointers)
- [ ] Implement node constructor in C++ or Python
- [ ] Write basic node creation tests
- [ ] Document node class with comments

**Story US-005: Implement Insert/Delete Operations**
- [ ] Implement insertFront() method
- [ ] Implement insertBack() method
- [ ] Implement insertAt(index) method
- [ ] Implement deleteFront() method
- [ ] Implement deleteBack() method
- [ ] Implement deleteAt(index) method
- [ ] Handle edge cases (empty list, single element, invalid index)
- [ ] Write unit tests for each operation

**Story US-006: Build Stack Using Linked List**
- [ ] Design stack interface (push, pop, peek, isEmpty)
- [ ] Implement stack operations using linked list
- [ ] Write stack unit tests
- [ ] Build simple undo system application
- [ ] Document stack complexity analysis

**Story US-007: Comprehensive Unit Tests**
- [ ] Test empty list operations
- [ ] Test single element operations
- [ ] Test multi-element operations
- [ ] Test boundary conditions
- [ ] Test memory leaks (C++) or reference handling (Python)

### Definition of Done
**A story is complete when:**
- [x] Code is written and compiles without errors
- [x] Unit tests pass (all test cases)
- [x] Time/space complexity analysis documented (Big O notation)
- [x] Code is committed to repository with clear commit messages
- [x] AI prompts documented in prompts.txt showing learning journey
- [x] Pull request created and reviewed
- [x] Code handles edge cases (empty list, null pointers, invalid inputs)
- [x] Memory management verified (no leaks for C++, no circular references for Python)

### Risk Identification

| Risk | Impact (H/M/L) | Mitigation Strategy |
|------|----------------|---------------------|
| Pointer/reference bugs are notoriously difficult | H | Pair program during pointer manipulation, use debugger extensively, draw diagrams |
| Exam on Feb 22 will consume study time | H | Front-load sprint work, complete US-004 and US-005 before Feb 20 |
| Never used valgrind or memory profiler before | M | Watch tutorial video, allocate 2 hours for learning tool |
| Complexity analysis might be difficult | M | Use AI to verify analysis, compare with textbook examples |

### Sprint Commitment
**I commit to completing 10 story points this sprint (reduced from 12 due to exam), focused on: Implementing a fully functional doubly-linked list with comprehensive test coverage and building a stack using the linked list as the underlying structure**

Signed: Jordan Chen  Date: Feb 15, 2026

---

## Why This Matters

Sprint planning isn't busywork - it's how professional software engineers ship complex systems on time.

At companies like Google, Microsoft, and Amazon, developers don't just "start coding and see what happens." They plan sprints carefully because:

1. **Data structures are foundational** - One bug in a core structure breaks everything built on it
2. **Complexity analysis requires thought** - Hasty implementations lead to O(n²) where O(log n) was possible
3. **Memory bugs are expensive** - Segfaults and memory leaks in production cost companies millions
4. **Estimation improves with practice** - You get better at predicting how long pointer manipulation takes

In CSC-249, sprint planning helps you:
- Break down complex algorithms into manageable pieces
- Identify "I don't know how to do this yet" before you're stuck at 2am
- Balance implementation work with studying for other classes
- Document your learning process for portfolio/interview stories

The best systems programmers I know are excellent planners. They understand their velocity with low-level code, they don't overcommit when learning new algorithms, and they identify memory management risks early.

---

## Common Mistakes to Avoid

- **Mistake**: Committing to more story points than your velocity because "linked lists seem easy"
  **Better approach**: Linked lists LOOK simple but pointer manipulation is subtle. Segfaults and memory leaks take time to debug. Be realistic about complexity.

- **Mistake**: Vague sprint goals like "work on linked lists"
  **Better approach**: Specific, measurable goals like "implement doubly-linked list with insert/delete operations and 90%+ test coverage." You should know exactly what success looks like.

- **Mistake**: Not adjusting capacity for learning curve when implementing first data structure
  **Better approach**: If you've never implemented a tree from scratch, budget time for: understanding pointers, drawing diagrams, debugging segfaults, learning memory tools. Learning takes time.

- **Mistake**: Selecting user stories that span multiple data structures
  **Better approach**: Focus one sprint on linked lists, next sprint on trees. Mixing structures leads to context switching and shallow understanding. Deep beats broad.

- **Mistake**: Skipping task breakdown and jumping straight to coding
  **Better approach**: Break "implement BST" into: define node structure, implement insert, implement search, implement delete, handle rotations, write tests. This reveals complexity you didn't see at first.

- **Mistake**: Not planning for AI collaboration time
  **Better approach**: Using AI to learn data structures is REQUIRED in CSC-249, but it takes time. Budget time for: crafting good prompts, understanding AI-generated code, documenting your learning. AI collaboration is iterative.

---

## Tips from Drew

**Start with the data structure, not the algorithm.** Ask yourself: "What do I want to HAVE WORKING at the end of this sprint?" A fully tested linked list? A balanced tree? A hash table with collision resolution? Focus on one structure, go deep.

**Your velocity with algorithms is different from your velocity with apps.** Some students crush app development (15 points per sprint) but struggle with low-level code (8 points per sprint). That's normal. Algorithms require different thinking. Find YOUR algorithm velocity.

**The "must have" category is your MVP.** For a linked list, "must haves" are: node structure, insert, delete, traverse. "Should haves" are: reverse list, find middle, detect cycle. "Nice to haves" are: merge sorted lists, remove duplicates. Know your MVP.

**Identify the "I've never done pointer manipulation before" risk.** If you're coming from Python or Java without pointers, C++ pointer manipulation is a risk. Budget time for learning: drawing memory diagrams, using debugger, understanding stack vs heap. I typically add a "spike" story (research task) at the beginning of the sprint when learning low-level programming.

**Front-load your sprint, especially with systems code.** Don't plan to debug memory leaks in the last 3 days. Aim to complete 60% of story points by the sprint midpoint. Memory bugs take unpredictable time to fix. Give yourself buffer.

**If your capacity is below 6 story points, consider extending the sprint.** Implementing a complex data structure in 1 week while taking 4 other classes isn't realistic. Better to do a 2-week sprint with 12 points than a 1-week sprint with 4 points.

**Time complexity analysis is part of the work, not an afterthought.** When you estimate "implement BST insert" at 5 points, that includes: writing code, testing it, AND analyzing why it's O(log n) average case. Complexity analysis is part of done.

---

## Integration with CSC-249

In CSC-249, you'll use sprint planning for Modules 4-7 (the sprint-based modules):

- **Sprint 1 (Module 4)**: Linear structures - linked lists, stacks, queues
- **Sprint 2 (Module 5)**: Hash tables with collision resolution strategies
- **Sprint 3 (Module 6)**: Trees and heaps - BST, heap, priority queue
- **Sprint 4 (Module 7)**: Graphs - representations, traversals, Dijkstra's

Each sprint should result in a **working data structure** - not just code, but tested, analyzed, understood.

Your sprint velocity will inform your final project scope. If you're averaging 10 points per sprint and you have 3 sprints left, you can commit to about 30 points of work. This helps you make realistic scope decisions early for the integration project.

Data structures work is unpredictable - memory bugs appear mysteriously, algorithm complexity surprises you, test cases fail in weird ways. Sprint planning helps you absorb these surprises without derailing your entire project.

**The students who plan their sprints carefully finish their data structures projects. The ones who "wing it" end up debugging segfaults during finals week.**

---

## CSC-249 Specific Sprint Planning Tips

**Pointer/memory management is always a risk.** Every sprint involving C++, add to risk table: "Memory leaks, segfaults, dangling pointers" with mitigation "Use valgrind, draw memory diagrams, pair program during pointer code."

**Big O analysis time must be estimated.** Don't estimate "implement quicksort" without including "analyze why it's O(n log n) average, O(n²) worst case, explain pivot selection impact." Analysis is part of the work.

**First data structure of each type takes longer.** First linked list: 10 points. Second linked list variant: 5 points. First tree: 12 points. Learning the pattern takes time, variants are faster.

**Recursion debugging deserves its own buffer.** Recursive algorithms (tree traversals, quicksort, graph DFS) are beautiful but stack traces are confusing. Add 20% to estimates for recursive implementations if you're new to recursion.

**Visualization helps but takes time.** Drawing how your BST rebalances or how your hash table resolves collisions is INCREDIBLY helpful for understanding. But budget time for it. I recommend adding "create visualization" as a separate task (1-2 points).

**Test coverage for data structures needs to be comprehensive.** You can't have "mostly working" linked lists. One off-by-one error breaks everything. Budget adequate time for: empty structure tests, single element tests, multiple element tests, boundary conditions, stress tests with large N.
