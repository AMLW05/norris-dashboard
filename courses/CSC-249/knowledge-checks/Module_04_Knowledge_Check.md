# Module 4 Knowledge Check: Linear Structures - Sprint 1

**Purpose**: Assess understanding of linked lists, node-based structures, pointer manipulation, and complete sprint execution
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 18-22 minutes

---

## Technical Concepts (60%)

### Question 1
What is a linked list?

A) A list stored in a continuous array
B) A sequence of nodes where each node contains data and a reference to the next node
C) A sorted list
D) A list that uses hash functions

**Correct Answer**: B
**Explanation**: Linked lists use nodes scattered in memory, connected by pointers/references. Unlike arrays (contiguous memory), nodes can be anywhere—you follow the chain. This structure enables O(1) insertion/deletion at known positions (just change pointers), but O(n) access to arbitrary elements (must traverse). Understanding this trade-off drives data structure selection.

### Question 2
What is the time complexity for accessing the 100th element in a singly linked list?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: C
**Explanation**: No random access in linked lists—you must start at head and traverse 100 nodes. That's O(n) where n is the position. Arrays give O(1) access by index. This trade-off is crucial: linked lists excel at insertion/deletion; arrays excel at random access. Choose based on what operations dominate your use case.

### Question 3
What is the advantage of a linked list over an array?

A) Faster access to elements
B) Dynamic size—no need to declare capacity upfront or resize
C) Uses less memory
D) Always faster for all operations

**Correct Answer**: B
**Explanation**: Arrays need fixed size (or expensive resizing). Linked lists grow organically—allocate nodes as needed. Trade-off: linked lists use more memory per element (data + pointer) and are slower to access. Neither structure is universally better; it depends on your access patterns. Understanding this nuance is professional-level thinking.

### Question 4
In a singly linked list, what happens when you delete the only node?

A) Error automatically
B) Set head to None/null—list is now empty
C) Create a new node
D) Nothing changes

**Correct Answer**: B
**Explanation**: Deleting the last node means head points to None/null, representing empty list. This edge case (empty list) must be handled carefully throughout your code. Many linked list bugs stem from not checking for empty lists. Defensive programming: always consider edge cases like empty, single-node, and two-node lists.

### Question 5
What is the purpose of a "dummy head" node in linked list implementations?

A) To waste memory
B) To simplify edge case handling—no special logic for empty lists or first node
C) To make the list longer
D) It serves no purpose

**Correct Answer**: B
**Explanation**: A dummy head (or sentinel node) always exists, even when list is empty. This eliminates special cases: inserting at front doesn't need different logic. Professional implementations often use this pattern to reduce bug surface area. It's a clever hack that makes code cleaner and less error-prone.

### Question 6
You're implementing an undo system. Which data structure combinations work well?

A) Array only
B) Stack of linked list nodes
C) Queue of arrays
D) Hash table

**Correct Answer**: B
**Explanation**: Each undo action pushes a state onto a stack. Linked list implementation of the stack means unlimited undo levels without preallocating. Array-based stack would need a maximum undo limit. This shows how structures compose: stack (ADT) implemented with linked list (concrete structure). Professional design thinks in layers.

### Question 7
What is the time complexity of inserting at the beginning of a singly linked list?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: A
**Explanation**: Create new node, point it to current head, update head to new node—three operations, independent of list size. That's O(1). Inserting at the end is O(n) (must traverse entire list first). Understanding operation complexity for different positions is key to choosing the right structure and implementation variant.

### Question 8
What problem can occur with pointer/reference manipulation in linked lists?

A) No problems ever occur
B) Memory leaks (losing references to nodes) or null pointer errors
C) Too much speed
D) Automatic sorting issues

**Correct Answer**: B
**Explanation**: Forgetting to update a pointer creates a memory leak (unreachable nodes). Accessing a null pointer crashes. These bugs are subtle—your code compiles but fails at runtime. This is why testing edge cases (empty list, single node) is critical. Visualization tools help debug pointer logic before it breaks.

### Question 9
How does a doubly linked list differ from a singly linked list?

A) It's twice as large
B) Each node has pointers to both next AND previous nodes
C) It stores two values per node
D) It can only traverse forward

**Correct Answer**: B
**Explanation**: Doubly linked lists enable bidirectional traversal and O(1) deletion at any known node (no need to find previous). Cost: extra pointer per node. Use case: browser history (back/forward buttons). Again, trade-offs: more memory and complexity for bidirectional access. Design is about matching structure to requirements.

---

## Project Management & Sprint Skills (40%)

### Question 10
What is sprint planning?

A) Planning your vacation
B) Defining what work you'll complete in the upcoming sprint period
C) Planning next semester's courses
D) Writing code faster

**Correct Answer**: B
**Explanation**: Sprint planning happens before the sprint. Review your backlog (e.g., implement linked list, build undo system), estimate story points, commit to what fits your velocity. For a 2-week sprint at 15 points velocity, you might commit to linked list (8 pts) + undo system (7 pts). Clear commitments prevent overcommitment and burnout.

### Question 11
What is a daily standup (async standup.md update in this course)?

A) A stretching exercise
B) Brief status update: what you did, what you're doing, any blockers
C) A final project presentation
D) A code review

**Correct Answer**: B
**Explanation**: Standups keep work visible. "Yesterday: implemented insert method. Today: working on delete method. Blocker: confused about updating pointers correctly." Async version: update standup.md daily. This practice builds accountability, helps identify problems early, and simulates professional team communication. Keep it brief—2-3 sentences max.

### Question 12
What is the purpose of a sprint retrospective?

A) Looking at old code
B) Reflecting on what went well, what didn't, and planning improvements for next sprint
C) Grading your work
D) Deleting failed code

**Correct Answer**: B
**Explanation**: After the sprint: "What went well? Linked list insert worked first try. What didn't? Underestimated delete complexity—took 3x expected. What will I change? Add buffer to pointer-heavy tasks; use visualization tools earlier." This closes the learning loop. Each sprint makes you better at planning and execution.

### Question 13
You estimated your linked list sprint at 15 points but only completed 10 points. What should you do?

A) Feel bad and give up
B) Record actual velocity (10), reflect on what slowed you down, adjust future commitments
C) Claim you finished 15 points anyway
D) Abandon sprint planning

**Correct Answer**: B
**Explanation**: Velocity is measured by completed work, not intention. 10 points is your reality. Maybe pointer debugging took longer than expected. Retrospect: "Need more time for pointer-heavy tasks." Next sprint: commit to 10-12 points, not 15. Honest velocity tracking enables realistic planning. Self-deception helps no one.

### Question 14
How does executing a complete sprint (planning, standups, review, retrospective) support professional development?

A) It doesn't—focus only on code
B) It builds project management skills used in real software teams
C) It wastes time better spent coding
D) It's only for managers

**Correct Answer**: B
**Explanation**: Professional developers don't just code—they plan sprints, communicate status, demo work, improve processes. These skills make you employable and effective. Employers want developers who can manage their own work, communicate progress, and improve continuously. Sprint 1 is your practice; by Sprint 4, these habits become automatic.

---

## Scoring Guide
- 90-100%: Excellent understanding of linked lists and sprint execution
- 80-89%: Good grasp, minor gaps in pointer logic or sprint practices
- 70-79%: Adequate foundation, review node manipulation and retrospectives
- Below 70%: Revisit Module 4 materials, visualize linked list operations more

## Study Resources
- Module 4 Assignments: Linked List Implementation Sprint, Sprint 1 Retrospective
- Canvas HTML: "Linked Lists vs Arrays Deep Dive"
- Canvas HTML: "Your First Complete Sprint Guide"
- VisuAlgo.net: Linked list visualizations
- Pointer manipulation diagrams
- Sprint planning template
- Standup.md examples
- Retrospective format guide
