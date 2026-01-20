# Module 8 Knowledge Check: Integration Project & Portfolio

**Purpose**: Assess comprehensive understanding of data structure selection, complexity analysis, professional development practices, and portfolio creation
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20-25 minutes

---

## Technical Concepts (60%)

### Question 1
You're building a contact management system with frequent lookups by phone number. Which data structure is best?

A) Unsorted array
B) Linked list
C) Hash table (phone number as key)
D) Binary search tree

**Correct Answer**: C
**Explanation**: Hash table gives O(1) average lookup—instant access for frequent queries. BST offers O(log n) but slower. Arrays and linked lists require O(n) search. Phone numbers are unique keys, perfect for hashing. This decision demonstrates understanding: match structure to dominant operation (lookup) and data characteristics (unique keys).

### Question 2
You need to maintain a sorted list of students by GPA with frequent insertions. Which structure is most appropriate?

A) Unsorted array
B) Sorted array
C) Binary search tree
D) Hash table

**Correct Answer**: C
**Explanation**: BST maintains order and supports O(log n) insertion (vs array's O(n) for maintaining sort). Hash tables don't preserve order. Frequent insertions rule out sorted arrays. BST balances all requirements: order preservation, efficient insertion, and reasonable lookup. Trade-off awareness drives this choice.

### Question 3
What does it mean to justify data structure selection with complexity analysis?

A) Just pick your favorite structure
B) Explain why chosen structure's time/space complexity matches problem requirements better than alternatives
C) Always use hash tables
D) Complexity analysis is irrelevant to selection

**Correct Answer**: B
**Explanation**: Professional justification: "I chose hash table because lookups dominate (80% of operations) and names are unique keys, giving O(1) average vs BST's O(log n) or array's O(n). Trade-off: no ordering, but requirements don't need sorted output." This demonstrates understanding of trade-offs, not just memorization.

### Question 4
You're implementing a task scheduler where highest-priority task runs next. Which structure is ideal?

A) Array
B) Linked list
C) Max heap (priority queue)
D) Stack

**Correct Answer**: C
**Explanation**: Max heap gives O(1) access to highest priority and O(log n) insertion/deletion. Perfect for priority queues. Array: O(n) to find max. Sorted array: O(n) to insert. Stack: no priority support. This shows structure selection based on operation mix—when one operation must be very fast (get max) and others can be moderate (insert).

### Question 5
Your application uses 3+ data structures. What should your documentation explain?

A) Nothing—code is self-explanatory
B) Why each structure was chosen, what operations it supports, and how structures work together
C) Just list the structures used
D) Only explain the hardest one

**Correct Answer**: B
**Explanation**: Professional documentation: "Hash table stores user records for O(1) lookup by ID. BST indexes users by name for sorted display. Max heap prioritizes login attempts for rate limiting. Hash table feeds BST on user creation; heap references hash table entries." System design explanation shows architectural thinking.

### Question 6
What is the time complexity of building a hash table from n items?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: C
**Explanation**: Insert n items × O(1) per insertion = O(n) total. Building sorted array requires O(n log n) (if sorting). Building BST from sorted data can be O(n²) worst case. Building heap is O(n) with heapify. Understanding construction complexity vs operation complexity is crucial for system design decisions.

### Question 7
When would you choose a sorted array over a BST despite slower insertions?

A) Never—BST is always better
B) When data rarely changes but queries are frequent and cache performance matters
C) When you don't know BST
D) Sorted arrays are always worse

**Correct Answer**: B
**Explanation**: Sorted arrays have excellent cache locality (contiguous memory) making binary search very fast in practice. If you build once and query thousands of times, amortize that O(n log n) sort over many O(log n) searches. BST has comparable O(log n) search but worse cache performance. Real-world performance isn't just Big O—it's Big O + constants + cache effects.

### Question 8
What does "using 3+ data structures appropriately" demonstrate in your final project?

A) That you like complexity
B) Understanding that different structures optimize different operations; complex systems need multiple tools
C) That you couldn't decide on one
D) Nothing—one structure is always enough

**Correct Answer**: B
**Explanation**: Real systems combine structures strategically. Database: hash index for ID lookups, B-tree index for range queries, heap for query optimization. Your project mirrors this: multiple structures, each chosen for specific operations. This is systems thinking—no single tool solves everything; compose solutions from appropriate tools.

### Question 9
How should you document AI collaboration in your final project?

A) Don't mention AI—pretend you did it alone
B) Show prompt evolution, what worked, what didn't, what you learned, and how AI accelerated understanding
C) Just paste AI-generated code
D) Only mention AI if it failed

**Correct Answer**: B
**Explanation**: Professional AI collaboration documentation: "Started with high-level prompt about graph structure. AI suggested adjacency list; I implemented, benchmarked against matrix. Asked AI to explain DFS recursion—didn't click. Asked for iterative version with stack—that made sense. Iterated on Dijkstra edge cases." Shows agency, learning, critical thinking.

---

## Project Management & Sprint Skills (40%)

### Question 10
What should your process portfolio demonstrate?

A) That you never made mistakes
B) Your growth trajectory across 5 sprints with evidence of improving PM skills
C) That PM was easy
D) Only your final project

**Correct Answer**: B
**Explanation**: Portfolio shows: Sprint 1 velocity 10, Sprint 4 velocity 15. Estimates evolved from wild guesses to 90% accurate. Retrospective depth increased. Standup.md evolved from checklist to natural habit. Evidence of learning PM, not just doing PM. Employers value growth mindset and continuous improvement—your portfolio proves both.

### Question 11
How should you estimate your final integration project?

A) Guess optimistically
B) Break into tasks, estimate each using 4 sprints of velocity data and patterns
C) Assume it'll take one day
D) Don't estimate

**Correct Answer**: B
**Explanation**: Decompose: "Hash table implementation (8 pts—I've done this), BST with traversals (10 pts—trees are harder for me), integration & testing (6 pts), documentation (4 pts) = 28 pts total. My velocity is ~13 pts/sprint, so 2-3 sprints." Data-driven, task-level, accounts for personal patterns. That's professional estimation.

### Question 12
What is the value of comparing estimated vs actual time across your semester?

A) To feel bad about wrong estimates
B) To see calibration improvement—early estimates were off by 200%, final estimates off by 10%
C) No value
D) To prove estimation is impossible

**Correct Answer**: B
**Explanation**: Early: estimated 5 hours, took 15 (3x off). Late semester: estimated 8 hours, took 9 (1.1x off). This trajectory shows learning. You got better at self-prediction through feedback. That's a professional skill. Portfolio documents this growth—interviewers ask "tell me about improving at something." You have concrete evidence.

### Question 13
How does your final project demonstrate "create before theory" pedagogy mastery?

A) You skip all theory
B) You build working system, then explain why it works using theoretical concepts learned after implementing
C) You only do theory
D) It doesn't

**Correct Answer**: B
**Explanation**: Final project: "I implemented hash table (create), benchmarked collision rates (observe), researched why my hash function caused clustering (theory), revised implementation (iterate). Now I deeply understand hash function quality matters—I felt the performance difference." Create → measure → understand → optimize. That's the pedagogy cycle internalized.

### Question 14
What should your technical presentation demonstrate?

A) That you memorized Big O notation
B) Deep understanding through explaining implementation choices, complexity analysis, and real-world applications
C) That AI did your work
D) That data structures are hard

**Correct Answer**: B
**Explanation**: Strong presentation: "I chose hash table for O(1) user lookup. Here's my hash function—it distributes evenly (show benchmark data). Collision rate stayed under 5% (show load factor graph). Alternative was BST at O(log n)—measurably slower for my lookup-heavy workload." Evidence + analysis + justification = understanding.

### Question 15
Why is the final project autonomous (less scaffolding)?

A) The instructor is lazy
B) To assess whether PM and technical skills are internalized and self-directed
C) To make it harder
D) It's not autonomous—you get step-by-step instructions

**Correct Answer**: B
**Explanation**: No template telling you "do standup on Tuesday." You decide. No prescribed retrospective questions. You choose. This autonomy tests skill internalization. Can you self-manage without checklist? Can you choose appropriate structures without being told? Autonomy reveals mastery. You're ready for professional work when scaffolding can be removed.

---

## Scoring Guide
- 90-100%: Excellent comprehensive understanding, ready for advanced coursework
- 80-89%: Good overall grasp, minor gaps in system design or portfolio concepts
- 70-79%: Adequate foundation, review structure selection justification
- Below 70%: Revisit key concepts before final project, focus on integration thinking

## Study Resources
- Module 8 Assignments: Final Integration Project, Technical Presentation & Process Portfolio
- Canvas HTML: "Data Structure Selection Decision Tree"
- Canvas HTML: "Building Your Process Portfolio"
- All previous module materials—final project integrates everything
- System design examples using multiple structures
- Complexity analysis review
- Professional presentation guidelines
- Process portfolio examples from prior semesters

---

## Final Reflection Prompts

Use these to prepare for your process portfolio:

1. **Technical Growth**: Which data structure was hardest to understand initially? What clicked for you? How did create-first pedagogy help?

2. **PM Growth**: Compare your Sprint 1 planning to Sprint 4. What improved? What patterns did you discover about your work style?

3. **AI Collaboration**: How did your use of AI evolve? What makes a good prompt vs a bad one? How did AI accelerate (or hinder) learning?

4. **Integration**: How do the structures you learned compose into systems? Give an example from your project where multiple structures work together.

5. **Professional Readiness**: What skills from this course transfer directly to industry? How will you continue developing these skills?

Your answers to these questions are the heart of your process portfolio—evidence of deep learning, not just task completion.
