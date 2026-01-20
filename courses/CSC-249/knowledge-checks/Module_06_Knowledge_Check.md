# Module 6 Knowledge Check: Trees & Heaps - Sprint 3

**Purpose**: Assess understanding of binary search trees, tree traversals, heaps, priority queues, and maturing sprint practices
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 20-24 minutes

---

## Technical Concepts (60%)

### Question 1
What is a binary search tree (BST)?

A) A tree where each node has exactly two children
B) A tree where left subtree contains smaller values, right subtree contains larger values
C) A balanced tree
D) A tree that only stores binary numbers

**Correct Answer**: B
**Explanation**: BST property: for every node, all values in left subtree < node value < all values in right subtree. This ordering enables O(log n) search in balanced trees. Not all nodes need two children—leaves have zero. The ordering property, not the shape, defines BSTs. This property is what makes binary search work on trees.

### Question 2
What is the time complexity of searching for a value in a balanced BST?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: B
**Explanation**: Each comparison eliminates half the remaining tree (go left or right). 1000 nodes? ~10 comparisons. Like binary search on sorted arrays, but for dynamically changing data. "Balanced" is key—unbalanced BSTs degrade to O(n). You'll build both and measure the performance difference empirically.

### Question 3
What happens to BST search time complexity in the worst case (completely unbalanced tree)?

A) O(1)
B) O(log n)
C) O(n)
D) O(n log n)

**Correct Answer**: C
**Explanation**: Inserting sorted data (1, 2, 3, 4...) into a naive BST creates a linked list—every node has only right child. Search becomes linear scan: O(n). This is why balanced trees (AVL, Red-Black) exist—they maintain O(log n) guaranteed. You'll see this degradation happen when you insert sorted data and benchmark it.

### Question 4
What is an inorder traversal of a BST?

A) Visit root, then left, then right
B) Visit left subtree, then root, then right subtree
C) Visit left, right, then root
D) Visit nodes level by level

**Correct Answer**: B
**Explanation**: Inorder (left-root-right) visits BST nodes in sorted order. For tree with 5, 3, 7: visits 3, 5, 7. This is magical—the traversal order mirrors the value order. Useful for outputting sorted data. Preorder (root-left-right) and postorder (left-right-root) serve different purposes. Each traversal answers different questions about the tree.

### Question 5
What data structure would you use to implement a priority queue efficiently?

A) Unsorted array
B) Sorted array
C) Heap
D) Hash table

**Correct Answer**: C
**Explanation**: Priority queue needs: insert(O(log n)) and extract-max(O(log n)). Heaps deliver both. Unsorted array: insert O(1), extract-max O(n). Sorted array: insert O(n), extract-max O(1). Heap balances both operations. Use case: task scheduling (always do highest-priority task next), Dijkstra's algorithm, event simulation.

### Question 6
What is the heap property for a max heap?

A) All nodes are equal
B) Every parent node is greater than or equal to its children
C) Every parent node is less than its children
D) Nodes are sorted left to right

**Correct Answer**: B
**Explanation**: Max heap: parent ≥ children. This means root is always maximum. Min heap inverts: parent ≤ children, root is minimum. This property enables O(1) access to max/min and O(log n) insertion/deletion. Heaps are complete binary trees (filled left-to-right), making array implementation efficient.

### Question 7
How are heaps typically implemented?

A) Using linked list nodes
B) Using an array with parent/child index relationships
C) Using hash tables
D) Using graphs

**Correct Answer**: B
**Explanation**: Array-based heaps use clever indexing. Node at index i has children at 2i+1 and 2i+2, parent at (i-1)/2. No pointers needed. Complete tree property means no wasted space. This implementation is cache-friendly and fast. You'll appreciate this elegance after wrestling with linked trees—sometimes arrays win.

### Question 8
What is the time complexity of inserting into a heap?

A) O(1)
B) O(log n)
C) O(n)
D) O(n log n)

**Correct Answer**: B
**Explanation**: Insert at end (maintain complete tree), then bubble up to restore heap property. Worst case: bubble from leaf to root = tree height = log n. Same for extract-max (remove root, replace with last element, bubble down). This O(log n) for both operations makes heaps perfect for priority queues.

### Question 9
You need to build an expression evaluator for (3 + 5) * 2. Which tree structure naturally represents this?

A) Binary search tree
B) Expression tree (operators as internal nodes, operands as leaves)
C) Heap
D) Balanced tree

**Correct Answer**: B
**Explanation**: Expression tree: root is *, left child is +, right child is 2. The + node has children 3 and 5. Postorder traversal gives postfix notation (3 5 + 2 *). Inorder gives infix (with parentheses). Trees model hierarchical relationships naturally. This is why compilers use trees—they match problem structure.

---

## Project Management & Sprint Skills (40%)

### Question 10
By Sprint 3, what should be happening with your sprint process?

A) You should skip planning—it's a waste
B) PM practices should feel more natural and require less conscious effort
C) Every sprint should be harder
D) You should need more scaffolding than Sprint 1

**Correct Answer**: B
**Explanation**: Sprint 3 is about PM becoming habitual. You don't need detailed instructions for standup.md anymore—you just update it. Retrospectives feel natural, not forced. This is skill formation: conscious practice → unconscious competence. By Sprint 4, PM will be automatic, freeing mental energy for technical challenges.

### Question 11
You have velocity data from Sprint 1 (10 pts) and Sprint 2 (14 pts). How should you plan Sprint 3?

A) Commit to 24 points (add them)
B) Use average velocity (~12 pts) adjusted for Sprint 3 circumstances
C) Commit to 30 points (always increase)
D) Ignore previous data

**Correct Answer**: B
**Explanation**: Average velocity (12 pts) is your baseline. Sprint 3 has Thanksgiving break? Commit to 8. Normal week? 12. Light week after finishing other courses? 15. Multiple data points increase prediction accuracy. By Sprint 3, your velocity estimates should closely match actual completion. That's evidence of learning.

### Question 12
What should your Sprint 3 retrospective focus on?

A) Nothing—skip it
B) Patterns across all three sprints: what's working consistently, what needs adjustment
C) Only Sprint 3 in isolation
D) Blaming yourself for mistakes

**Correct Answer**: B
**Explanation**: Sprint 3 retrospective looks for trends. "I consistently underestimate tree-based algorithms—they take 1.5x my estimate. Recursion debugging always takes longer than I think. My Tuesday/Thursday work sessions are most productive." These meta-insights compound your PM effectiveness. Look for patterns, not just Sprint 3 events.

### Question 13
How does having three sprints of data change your planning compared to Sprint 1?

A) It doesn't—planning is always guessing
B) Three data points reveal trends and outliers, making estimates more reliable
C) You should ignore old data
D) It makes planning harder

**Correct Answer**: B
**Explanation**: One sprint could be anomaly. Three sprints reveal your true capacity. Sprint 1: 10 pts. Sprint 2: 14 pts. Sprint 3: 12 pts. Clear pattern: ~12 pt average, range 10-14. Now you can plan confidently: commit to 12, know you might finish 10-14. This is empiricism—let data drive decisions.

### Question 14
Why might Sprint 3 be cognitively demanding despite PM becoming easier?

A) Sprint 3 is always easiest
B) Tree and heap implementations are more complex than previous linear structures
C) PM takes more time in Sprint 3
D) There's no reason

**Correct Answer**: B
**Explanation**: Trees require recursive thinking, pointer manipulation in multiple directions, balancing concerns. Heaps add array-based tree implementation. Cognitively harder than linked lists. Good news: PM habits are automatic now, freeing mental energy for these technical challenges. This is intentional design—harder content, but better process support.

### Question 15
What does "PM becoming habitual" mean for your final project?

A) You can skip PM for the final project
B) You'll naturally apply sprint practices without explicit instruction
C) PM gets harder
D) You need more help with PM than before

**Correct Answer**: B
**Explanation**: By Module 8, you won't think "I should update standup.md"—you'll just do it. Retrospectives will be reflexive. This automation is the goal. Professional developers don't consciously think about Git workflow—it's muscle memory. Sprint 3 is where PM transitions from deliberate practice to habitual practice. That's mastery beginning.

---

## Scoring Guide
- 90-100%: Excellent understanding of tree structures and maturing sprint practices
- 80-89%: Good grasp, minor gaps in traversals or sprint patterns
- 70-79%: Adequate foundation, review BST properties and velocity trends
- Below 70%: Revisit Module 6 materials, practice tree traversals and retrospectives

## Study Resources
- Module 6 Assignments: BST & Heap Implementation Sprint, Expression Tree Evaluator
- Canvas HTML: "Binary Search Trees Explained"
- Canvas HTML: "Heaps and Priority Queues"
- VisuAlgo.net: BST and Heap visualizations
- Tree traversal animations (inorder, preorder, postorder)
- Sprint 3 retrospective template with trend analysis
- Expression tree evaluation examples
- Heap array indexing diagrams
