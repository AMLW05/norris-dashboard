# M06-A1: BST & Heap Implementation Sprint (Sprint 3)

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 6 - Trees & Heaps (Sprint 3)
**Week**: 11
**Points**: 75 (45 technical + 30 process)
**Sprint Duration**: 2 weeks (Week 11-12)
**Due**: End of Week 11

---

## Assignment Overview

**SPRINT 3: Double Data Structures!** This is your LARGEST sprint yet—implement BOTH a Binary Search Tree (BST) AND a Min-Heap. With 2 sprints of velocity data, you can now plan confidently. PM processes become second nature.

**Philosophy**: "Trees unlock recursion's power." Both BSTs and heaps demonstrate hierarchical thinking. BSTs enable O(log n) search. Heaps enable O(1) min/max access. Together, they're foundational to advanced algorithms.

---

## Learning Objectives

By completing this sprint, you will:

1. Implement Binary Search Tree with all operations (insert, search, delete, traversals)
2. Implement Min-Heap with heapify and priority queue operations
3. Apply velocity-based planning with 2 sprints of historical data
4. Execute sprint with minimal scaffolding (PM becoming automatic)
5. Understand tree recursion and heap properties deeply

**Bloom's Level**: Apply, Analyze (CLO1, CLO2, CLO4)

---

## Part 1: Velocity-Based Sprint Planning (8 points)

### Create `SPRINT3_PLANNING.md`

```markdown
# Sprint 3 Planning - BST & Heap Implementation

**Sprint Goal**: Implement functional BST with full operations AND Min-Heap with priority queue functionality.

---

## Velocity-Based Capacity

### Historical Velocity
- **Sprint 1**: [X] points
- **Sprint 2**: [Y] points
- **Average**: [(X+Y)/2] = [Z] points
- **Trend**: [Increasing/Decreasing/Stable]

### Sprint 3 Capacity Calculation

**Method used**: [Simple average / Weighted / Conservative]
**Base capacity**: [Z] points

**Complexity adjustment**:
- BST + Heap = 2 data structures (vs 1 in prior sprints)
- Recursion complexity: [More complex than iteration]
- Adjustment factor: [+/-] X points

**Final Sprint 3 Capacity**: [W] points

**Confidence**: High (based on 2 sprints of data)

---

## Sprint Backlog

### PART A: Binary Search Tree (30-35 points)

#### Story 1: BST Node and Basic Structure
**As a** developer
**I want to** create TreeNode and BST class foundation
**So that** I can build tree operations

**Acceptance Criteria**:
- [ ] TreeNode class with data, left, right pointers
- [ ] BST class with root pointer
- [ ] Constructor, isEmpty(), size() methods
- [ ] Basic structure documented

**Story Points**: 3
**Estimated Hours**: 2

---

#### Story 2: BST Insert Operation
**As a** developer
**I want to** insert values maintaining BST property
**So that** left < parent < right always holds

**Acceptance Criteria**:
- [ ] Recursive insert implementation
- [ ] Maintains BST property (left < node < right)
- [ ] Handles duplicates (ignore or count)
- [ ] Size updates correctly

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 3: BST Search Operations
**As a** developer
**I want to** search for values efficiently
**So that** I can find elements in O(log n) average

**Acceptance Criteria**:
- [ ] Recursive search(value) returns true/false
- [ ] find_min() returns smallest value
- [ ] find_max() returns largest value
- [ ] All O(log n) average case

**Story Points**: 3
**Estimated Hours**: 2

---

#### Story 4: BST Traversals
**As a** developer
**I want to** traverse tree in different orders
**So that** I can process nodes systematically

**Acceptance Criteria**:
- [ ] inorder_traversal() - returns sorted list
- [ ] preorder_traversal() - for tree reconstruction
- [ ] postorder_traversal() - for deletion
- [ ] level_order_traversal() - breadth-first (bonus)

**Story Points**: 5
**Estimated Hours**: 4

---

#### Story 5: BST Delete Operation (HARDEST)
**As a** developer
**I want to** delete nodes while maintaining BST property
**So that** tree stays valid after deletion

**Acceptance Criteria**:
- [ ] Handle 3 cases: no children, 1 child, 2 children
- [ ] Two-child case uses successor replacement
- [ ] BST property maintained
- [ ] Size decrements

**Story Points**: 8
**Estimated Hours**: 6

---

#### Story 6: BST Height and Balance Checking
**As a** developer
**I want to** measure tree height and balance
**So that** I understand tree performance characteristics

**Acceptance Criteria**:
- [ ] height() returns tree height
- [ ] is_balanced() checks if balanced
- [ ] Recursive implementations

**Story Points**: 3
**Estimated Hours**: 2

---

### PART B: Min-Heap (20-25 points)

#### Story 7: Heap Array Structure
**As a** developer
**I want to** represent heap as array
**So that** I can use index math for parent/child

**Acceptance Criteria**:
- [ ] MinHeap class with array storage
- [ ] parent(i), left_child(i), right_child(i) helpers
- [ ] isEmpty(), size() methods

**Story Points**: 2
**Estimated Hours**: 1.5

---

#### Story 8: Heap Insert with Heapify-Up
**As a** developer
**I want to** insert maintaining min-heap property
**So that** smallest element stays at root

**Acceptance Criteria**:
- [ ] insert(value) adds to end
- [ ] heapify_up() bubbles value to correct position
- [ ] Min-heap property maintained (parent < children)

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 9: Heap Extract-Min with Heapify-Down
**As a** developer
**I want to** remove minimum efficiently
**So that** priority queue operations are O(log n)

**Acceptance Criteria**:
- [ ] extract_min() removes and returns root
- [ ] heapify_down() restores heap property
- [ ] Size decrements correctly

**Story Points**: 5
**Estimated Hours**: 4

---

#### Story 10: Heap Build from Array (Heapify)
**As a** developer
**I want to** build heap from arbitrary array
**So that** I can create heap in O(n) time

**Acceptance Criteria**:
- [ ] build_heap(array) creates valid heap
- [ ] Uses heapify_down() for each element
- [ ] More efficient than n inserts

**Story Points**: 4
**Estimated Hours**: 3

---

#### Story 11: Heap Sort Implementation
**As a** developer
**I want to** use heap for O(n log n) sorting
**So that** I understand heap applications

**Acceptance Criteria**:
- [ ] heap_sort(array) returns sorted array
- [ ] Uses build_heap + repeated extract_min
- [ ] O(n log n) guaranteed complexity

**Story Points**: 3
**Estimated Hours**: 2

---

### PART C: Testing & Documentation

#### Story 12: Comprehensive Test Suite
**As a** developer
**I want to** test both BST and Heap thoroughly
**So that** I can verify correctness

**Acceptance Criteria**:
- [ ] BST tests: insert, search, delete, traversals (10+ tests)
- [ ] Heap tests: insert, extract_min, heapify (8+ tests)
- [ ] Edge cases: empty, single element, duplicates
- [ ] All tests passing

**Story Points**: 5
**Estimated Hours**: 4

---

#### Story 13: Performance Benchmarking
**As a** developer
**I want to** verify O(log n) performance
**So that** I can prove tree efficiency

**Acceptance Criteria**:
- [ ] Benchmark BST insert/search on 1000, 10000, 100000 items
- [ ] Benchmark heap operations
- [ ] Compare to linear search
- [ ] Graph results

**Story Points**: 3
**Estimated Hours**: 2

---

## Total Sprint Backlog

**BST Stories**: 26 points
**Heap Stories**: 18 points
**Testing**: 8 points
**TOTAL**: 52 story points

**Capacity Check**:
- Sprint 3 capacity: [W] points
- Planned backlog: 52 points
- **Status**: [Over/under by X points]

**Adjustment**: [Which stories are stretch goals? Which are MVP?]

---

## Definition of Done (Sprint 3 - Now Habitual)

[✓ should be automatic by now]
- [ ] Code implemented and committed
- [ ] Tests passing
- [ ] Documented
- [ ] AI prompts logged
- [ ] Complexity analyzed
- [ ] Merged to sprint branch

---

## Sprint Risks

1. **Delete operation complexity**: Most students struggle with BST delete
   - Mitigation: Allocate extra time (8 points), use AI diagrams

2. **Two data structures**: More code than previous sprints
   - Mitigation: MVP = basic operations, advanced features are stretch goals

3. **Recursion understanding**: Trees are inherently recursive
   - Mitigation: Draw recursion trees, visualize with Python Tutor
```

**Grading** (8 points):
- Historical velocity analysis (2 pts)
- Sprint 3 capacity with adjustment (2 pts)
- Complete backlog with both BST and Heap (3 pts)
- Capacity check and prioritization (1 pt)

---

## Part 2: Technical Implementation - BST (25 points)

### Binary Search Tree Implementation

**Python starter code**:

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None


class BST:
    def __init__(self):
        self.root = None
        self._size = 0

    def insert(self, data):
        """Insert data maintaining BST property."""
        self.root = self._insert_recursive(self.root, data)
        self._size += 1

    def _insert_recursive(self, node, data):
        """Recursive helper for insert."""
        if node is None:
            return TreeNode(data)

        if data < node.data:
            node.left = self._insert_recursive(node.left, data)
        elif data > node.data:
            node.right = self._insert_recursive(node.right, data)
        # else: duplicate, ignore

        return node

    def search(self, data):
        """Search for data in tree."""
        return self._search_recursive(self.root, data)

    def _search_recursive(self, node, data):
        """Recursive search."""
        # TODO: Implement
        pass

    def delete(self, data):
        """Delete data from tree."""
        self.root = self._delete_recursive(self.root, data)

    def _delete_recursive(self, node, data):
        """
        Recursive delete - handles 3 cases:
        1. Node has no children: return None
        2. Node has 1 child: return that child
        3. Node has 2 children: find inorder successor, replace, delete successor
        """
        # TODO: Implement - THIS IS THE HARDEST PART
        pass

    def find_min(self):
        """Find minimum value (leftmost node)."""
        if self.root is None:
            return None
        node = self.root
        while node.left:
            node = node.left
        return node.data

    def find_max(self):
        """Find maximum value (rightmost node)."""
        # TODO: Implement (mirror of find_min)
        pass

    def inorder_traversal(self):
        """Return sorted list of elements."""
        result = []
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, node, result):
        """Inorder: left, root, right (gives sorted order)."""
        if node:
            self._inorder_recursive(node.left, result)
            result.append(node.data)
            self._inorder_recursive(node.right, result)

    def preorder_traversal(self):
        """Root, left, right."""
        # TODO: Implement
        pass

    def postorder_traversal(self):
        """Left, right, root."""
        # TODO: Implement
        pass

    def height(self):
        """Return height of tree."""
        return self._height_recursive(self.root)

    def _height_recursive(self, node):
        """Height = max(left_height, right_height) + 1."""
        # TODO: Implement
        pass

    def is_balanced(self):
        """Check if tree is balanced (height difference < 2)."""
        # TODO: Implement
        pass

    def size(self):
        return self._size

    def is_empty(self):
        return self.root is None
```

**C++ version** (template for generics):

```cpp
template <typename T>
class TreeNode {
public:
    T data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(T value) : data(value), left(nullptr), right(nullptr) {}
};

template <typename T>
class BST {
private:
    TreeNode<T>* root;
    int _size;

    TreeNode<T>* insertRecursive(TreeNode<T>* node, T data) {
        if (node == nullptr) {
            return new TreeNode<T>(data);
        }

        if (data < node->data)
            node->left = insertRecursive(node->left, data);
        else if (data > node->data)
            node->right = insertRecursive(node->right, data);

        return node;
    }

    // TODO: Implement other recursive helpers

public:
    BST() : root(nullptr), _size(0) {}

    void insert(T data) {
        root = insertRecursive(root, data);
        _size++;
    }

    // TODO: Implement all other methods
};
```

**Grading - BST** (25 points):
- TreeNode and BST structure (3 pts)
- Insert operation (4 pts)
- Search operations (min, max, search) (4 pts)
- Traversals (inorder, preorder, postorder) (5 pts)
- Delete operation (6 pts)
- Height and balance checking (3 pts)

---

## Part 3: Technical Implementation - Min-Heap (20 points)

### Min-Heap Implementation

**Python implementation**:

```python
class MinHeap:
    def __init__(self):
        self.heap = []

    def parent(self, i):
        """Return parent index."""
        return (i - 1) // 2

    def left_child(self, i):
        """Return left child index."""
        return 2 * i + 1

    def right_child(self, i):
        """Return right child index."""
        return 2 * i + 2

    def swap(self, i, j):
        """Swap elements at indices i and j."""
        self.heap[i], self.heap[j] = self.heap[j], self.heap[i]

    def insert(self, value):
        """Insert value and heapify up."""
        self.heap.append(value)
        self._heapify_up(len(self.heap) - 1)

    def _heapify_up(self, i):
        """Bubble element up to restore min-heap property."""
        parent = self.parent(i)
        if i > 0 and self.heap[i] < self.heap[parent]:
            self.swap(i, parent)
            self._heapify_up(parent)

    def extract_min(self):
        """Remove and return minimum (root)."""
        if len(self.heap) == 0:
            raise IndexError("Heap is empty")

        if len(self.heap) == 1:
            return self.heap.pop()

        # Swap root with last element
        root = self.heap[0]
        self.heap[0] = self.heap.pop()
        self._heapify_down(0)
        return root

    def _heapify_down(self, i):
        """Bubble element down to restore min-heap property."""
        smallest = i
        left = self.left_child(i)
        right = self.right_child(i)

        # TODO: Implement - find smallest among node, left, right
        # Swap if needed and recurse
        pass

    def peek_min(self):
        """Return minimum without removing."""
        if len(self.heap) == 0:
            return None
        return self.heap[0]

    def build_heap(self, array):
        """Build heap from array in O(n) time."""
        self.heap = array.copy()
        # Start from last non-leaf node, heapify down
        for i in range(len(self.heap) // 2 - 1, -1, -1):
            self._heapify_down(i)

    def heap_sort(self, array):
        """Sort array using heap sort."""
        self.build_heap(array)
        sorted_array = []
        while len(self.heap) > 0:
            sorted_array.append(self.extract_min())
        return sorted_array

    def size(self):
        return len(self.heap)

    def is_empty(self):
        return len(self.heap) == 0
```

**Grading - Min-Heap** (20 points):
- Heap structure and helper methods (3 pts)
- Insert with heapify-up (4 pts)
- Extract-min with heapify-down (5 pts)
- Build-heap from array (4 pts)
- Heap-sort implementation (2 pts)
- Tests passing (2 pts)

---

## Part 4: Sprint Process (30 points)

**Sprint 3 process grading emphasizes autonomy**:

### Daily Standups (10 pts)
- 7+ standup entries (5 pts)
- Shows progress on both BST and Heap (3 pts)
- Blockers documented and resolved (2 pts)

### Burndown Chart (8 pts)
- Daily tracking (4 pts)
- Burndown chart graph (4 pts)

### Sprint Review (7 pts)
- Complete review document (3 pts)
- Velocity comparison (all 3 sprints) (2 pts)
- Technical complexity reflection (2 pts)

### Sacred Flow (5 pts)
- Sprint branch strategy (2 pts)
- Feature branches for BST and Heap (2 pts)
- PR with comprehensive summary (1 pt)

---

## Submission Checklist

- [ ] SPRINT3_PLANNING.md
- [ ] BST fully implemented (insert, search, delete, traversals)
- [ ] Min-Heap fully implemented (insert, extract, heapify, heap-sort)
- [ ] Test suite for both (18+ tests total)
- [ ] standup.md (7+ entries)
- [ ] Burndown tracking
- [ ] SPRINT3_REVIEW.md
- [ ] prompts.txt
- [ ] Pull request

---

## Grading Rubric (75 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Planning** | 8 | Velocity analysis (2), capacity (2), backlog (3), prioritization (1) |
| **BST Implementation** | 25 | Structure (3), insert (4), search (4), traversals (5), delete (6), height/balance (3) |
| **Heap Implementation** | 20 | Structure (3), insert (4), extract (5), build-heap (4), heap-sort (2), tests (2) |
| **Daily Standups** | 10 | 7+ entries (5), shows progress (3), blockers (2) |
| **Burndown** | 8 | Tracking (4), chart (4) |
| **Sprint Review** | 7 | Complete (3), velocity comparison (2), reflection (2) |
| **Sacred Flow** | 5 | Sprint branch (2), feature branches (2), PR (1) |
| **Total** | **83** | *Scaled to 75 points* |

---

## Resources

**BST**:
- VisuAlgo: [BST Visualization](https://visualgo.net/en/bst)
- Tree delete explained: Multiple resources

**Heap**:
- VisuAlgo: [Heap Visualization](https://visualgo.net/en/heap)
- Heapify algorithm analysis

---

## Extension Challenges (+8 bonus)

1. **AVL Tree**: Self-balancing BST with rotations
2. **Max-Heap**: Implement max-heap for priority queue
3. **Heap Priority Queue**: Full priority queue interface
4. **Tree Visualization**: ASCII tree printer

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
