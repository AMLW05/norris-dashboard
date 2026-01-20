# CSC-249 Data Structures & Algorithms Glossary

Complete reference of data structures and algorithms terms used in CSC-249

---

## How to Use This Glossary

**Search Tip**: Use Ctrl+F (Cmd+F on Mac) to find terms instantly.

**Reading Tip**: Terms are alphabetical, but check the [Quick Reference by Category](#quick-reference-by-category) at the bottom to browse by topic.

**Learning Tip**: Don't memorize definitions. Understand when each structure/algorithm matters and what problems it solves.

---

## A

### Abstract Data Type (ADT)
**Definition**: A mathematical model for data types defined by behavior (operations) rather than implementation details.

**When It Matters**: When designing systems - focus on WHAT operations are needed, not HOW to implement them yet.

**Examples**:
- Stack ADT: push(), pop(), peek(), isEmpty() - doesn't specify array or linked list
- Queue ADT: enqueue(), dequeue(), front() - implementation details hidden
- List ADT: insert(), delete(), search() - could be array or linked structure

**Why Important**: Separation of interface from implementation. Multiple implementations possible for same ADT.

**Related Terms**: Data Structure, Implementation, Interface

---

### Algorithm
**Definition**: A finite sequence of well-defined instructions to solve a problem or perform a computation.

**Properties of Good Algorithms**:
- **Input**: Zero or more inputs
- **Output**: At least one output
- **Definiteness**: Each step is precisely defined
- **Finiteness**: Terminates after finite number of steps
- **Effectiveness**: Steps are executable and simple enough to be carried out

**Example**: Binary search algorithm for finding element in sorted array.

**Related Terms**: Time Complexity, Space Complexity, Correctness

---

### Amortized Analysis
**Definition**: Analysis technique that computes average time per operation over a sequence of operations, even if individual operations may be expensive.

**When It Matters**: Dynamic array resizing, splay trees, union-find - some operations are expensive but rare.

**Example**: Dynamic array doubling strategy:
- Most insertions are O(1) - just add element
- Occasional resize is O(n) - copy all elements
- Amortized cost: O(1) per insertion because resizes are rare

**Why Important**: Gives more accurate performance picture than worst-case alone for data structures with occasional expensive operations.

**Related Terms**: Big O Notation, Time Complexity, Dynamic Array

---

### Array
**Definition**: Contiguous block of memory storing fixed number of elements of same type, accessed via index.

**When It Matters**: When you need O(1) random access and know size in advance.

**Pros**:
- O(1) access by index
- Cache-friendly (contiguous memory)
- Simple and efficient

**Cons**:
- Fixed size (or expensive resizing)
- O(n) insertion/deletion (must shift elements)
- Wasted space if not full

**Example**: `int arr[100];` in C++, `arr = [1, 2, 3]` in Python

**Related Terms**: Dynamic Array, Index, Vector

---

### AVL Tree
**Definition**: Self-balancing binary search tree where height difference between left and right subtrees is at most 1.

**When It Matters**: When you need guaranteed O(log n) search/insert/delete (unlike BST which can degrade to O(n)).

**Balance Factor**: height(left subtree) - height(right subtree), must be -1, 0, or 1

**Rotations**: Single (LL, RR) or double (LR, RL) rotations to maintain balance after insertion/deletion

**Why Named AVL**: Invented by Adelson-Velsky and Landis in 1962

**Related Terms**: Binary Search Tree, Red-Black Tree, Self-Balancing Tree

---

## B

### Big O Notation
**Definition**: Mathematical notation describing upper bound of algorithm's growth rate as input size approaches infinity.

**When It Matters**: Comparing algorithm efficiency and choosing appropriate data structures.

**Common Complexities** (fastest to slowest):
- **O(1)**: Constant - array access, hash table lookup (average)
- **O(log n)**: Logarithmic - binary search, balanced tree operations
- **O(n)**: Linear - array traversal, linear search
- **O(n log n)**: Linearithmic - efficient sorting (merge, heap, quick sort average)
- **O(n²)**: Quadratic - nested loops, bubble/selection/insertion sort
- **O(2^n)**: Exponential - recursive Fibonacci, subset generation
- **O(n!)**: Factorial - permutation generation, traveling salesman brute force

**Example**: Binary search on sorted array of size n requires at most log₂(n) comparisons → O(log n)

**Important**: Big O describes worst-case unless specified otherwise (average-case, best-case)

**Related Terms**: Time Complexity, Space Complexity, Theta Notation, Omega Notation

---

### Binary Search
**Definition**: Search algorithm that finds position of target value in SORTED array by repeatedly dividing search interval in half.

**Requirements**: Array must be sorted

**How It Works**:
1. Compare target with middle element
2. If equal, found!
3. If target smaller, search left half
4. If target larger, search right half
5. Repeat until found or interval empty

**Time Complexity**: O(log n) - eliminates half of remaining elements each step

**Why It's Fast**: 1 million elements → max 20 comparisons (log₂(1,000,000) ≈ 20)

**Example**:
```
Find 7 in [1, 3, 5, 7, 9, 11, 13]
Mid = 7 → Found! (1 comparison)

Find 7 in [1, 3, 5, 9, 11, 13, 15]
Mid = 9 → too large, search left
Mid = 3 → too small, search right
Mid = 5 → too small, search right
→ Not found (3 comparisons)
```

**Related Terms**: Linear Search, Divide and Conquer, Sorted Array

---

### Binary Search Tree (BST)
**Definition**: Binary tree where each node's value is greater than all values in its left subtree and less than all values in its right subtree.

**When It Matters**: When you need dynamic set with efficient search/insert/delete.

**BST Property**: For every node N:
- All values in left subtree < N
- All values in right subtree > N

**Operations**:
- **Search**: O(h) where h is height - best O(log n), worst O(n) if degenerate
- **Insert**: O(h) - search for position, add new node
- **Delete**: O(h) - three cases: leaf, one child, two children

**Weakness**: Can become unbalanced (degenerate to linked list) if insertions are sorted

**Example**:
```
       8
      / \
     3   10
    / \    \
   1   6   14
```
Left subtree (1,3,6) < 8 < Right subtree (10,14)

**Related Terms**: AVL Tree, Red-Black Tree, Tree Traversal, Binary Tree

---

### Binary Tree
**Definition**: Tree data structure where each node has at most two children, referred to as left child and right child.

**Types**:
- **Full**: Every node has 0 or 2 children
- **Complete**: All levels full except possibly last, which fills left to right
- **Perfect**: All internal nodes have 2 children, all leaves at same level
- **Degenerate**: Each parent has only one child (essentially a linked list)

**Properties**:
- Max nodes at level i: 2^i
- Max nodes in tree of height h: 2^(h+1) - 1
- Min height for n nodes: log₂(n)

**Related Terms**: Binary Search Tree, Heap, Tree Traversal

---

### Breadth-First Search (BFS)
**Definition**: Graph/tree traversal algorithm that explores all neighbors at current depth before moving to next depth level.

**When It Matters**: Finding shortest path in unweighted graph, level-order traversal of trees.

**How It Works**: Uses queue (FIFO) to process nodes level by level

**Algorithm**:
1. Enqueue starting node, mark as visited
2. While queue not empty:
   - Dequeue node
   - Process node
   - Enqueue all unvisited neighbors

**Time Complexity**: O(V + E) where V = vertices, E = edges

**Space Complexity**: O(V) for queue and visited set

**Example**: Social network - find all friends within 2 degrees of separation

**Related Terms**: Depth-First Search, Queue, Graph Traversal, Level-Order Traversal

---

### Bubble Sort
**Definition**: Simple sorting algorithm that repeatedly steps through list, compares adjacent elements, and swaps if in wrong order.

**When It Matters**: Educational purposes, nearly-sorted data (optimized version can be O(n))

**How It Works**: "Bubble" largest element to end each pass

**Time Complexity**:
- Best: O(n) with optimization (already sorted)
- Average: O(n²)
- Worst: O(n²)

**Space Complexity**: O(1) - sorts in place

**Why It's Slow**: Many unnecessary comparisons and swaps

**When to Use**: RARELY - only for very small arrays or as teaching tool

**Related Terms**: Selection Sort, Insertion Sort, Sorting

---

## C

### Cache-Friendly
**Definition**: Data structure or algorithm that performs well with CPU cache by accessing memory sequentially or with good locality.

**When It Matters**: Performance-critical code, game engines, embedded systems.

**Cache-Friendly Structures**:
- Arrays (contiguous memory)
- Vector (dynamic array)

**Cache-Unfriendly Structures**:
- Linked lists (pointer chasing)
- Trees (scattered memory)

**Example**: Traversing array is faster than linked list even though both are O(n) because array accesses are sequential and cache-friendly.

**Related Terms**: Spatial Locality, Temporal Locality, Performance

---

### Circular Buffer (Ring Buffer)
**Definition**: Fixed-size buffer that wraps around - when end is reached, it circles back to beginning.

**When It Matters**: Streaming data, audio buffers, producer-consumer patterns.

**Implementation**: Array with read and write pointers that wrap using modulo

**Operations**:
- **Enqueue**: O(1) - write to write pointer, increment with wrap
- **Dequeue**: O(1) - read from read pointer, increment with wrap
- **Full check**: (write + 1) % size == read
- **Empty check**: write == read

**Why Useful**: No need to shift elements like regular queue, fixed memory

**Related Terms**: Queue, Producer-Consumer, Circular Queue

---

### Collision
**Definition**: In hash tables, when two different keys hash to the same index.

**When It Matters**: Hash table design and performance.

**Resolution Strategies**:
1. **Chaining**: Store multiple elements at same index using linked list
2. **Open Addressing**: Find alternative index using probing
   - Linear probing: Try next index
   - Quadratic probing: Try i² positions away
   - Double hashing: Use second hash function

**Example**: hash("Alice") = 5, hash("Bob") = 5 → collision at index 5

**Load Factor Impact**: More collisions as load factor (n/m) increases

**Related Terms**: Hash Table, Hash Function, Load Factor, Chaining, Probing

---

### Complete Binary Tree
**Definition**: Binary tree where all levels are fully filled except possibly the last, which fills from left to right.

**When It Matters**: Heap implementation - allows efficient array representation.

**Array Representation**: For node at index i:
- Left child: 2i + 1
- Right child: 2i + 2
- Parent: (i - 1) / 2

**Why Important**: No wasted space in array, O(1) parent/child navigation

**Example**:
```
       1
      / \
     2   3
    / \  /
   4  5 6

Array: [1, 2, 3, 4, 5, 6]
```

**Related Terms**: Binary Tree, Heap, Array Representation

---

## D

### Deque (Double-Ended Queue)
**Definition**: Linear data structure that allows insertion and deletion at both front and back ends.

**When It Matters**: When you need queue AND stack operations, sliding window algorithms.

**Operations** (all O(1)):
- push_front(), push_back()
- pop_front(), pop_back()
- front(), back()

**Implementation**: Circular buffer or doubly-linked list

**Use Cases**: Browser history (back/forward), undo/redo, sliding window maximum

**Related Terms**: Queue, Stack, Doubly-Linked List

---

### Depth-First Search (DFS)
**Definition**: Graph/tree traversal algorithm that explores as far as possible along each branch before backtracking.

**When It Matters**: Detecting cycles, topological sorting, finding connected components.

**How It Works**: Uses stack (LIFO) or recursion to go deep before wide

**Algorithm (Recursive)**:
1. Mark current node as visited
2. For each unvisited neighbor:
   - Recursively DFS on neighbor

**Time Complexity**: O(V + E) where V = vertices, E = edges

**Space Complexity**: O(V) for recursion stack or explicit stack

**Example**: Maze solving - explore one path completely before trying another

**Related Terms**: Breadth-First Search, Stack, Graph Traversal, Backtracking

---

### Dijkstra's Algorithm
**Definition**: Graph algorithm that finds shortest path from source to all other vertices in weighted graph with non-negative weights.

**When It Matters**: GPS navigation, network routing, finding cheapest path.

**How It Works**: Greedy approach - always choose nearest unvisited vertex

**Algorithm**:
1. Set source distance to 0, all others to infinity
2. While unvisited vertices remain:
   - Pick unvisited vertex with minimum distance
   - For each neighbor, update distance if shorter path found
   - Mark vertex as visited

**Time Complexity**:
- With array: O(V²)
- With min-heap: O((V + E) log V)

**Limitation**: Doesn't work with negative edge weights (use Bellman-Ford instead)

**Related Terms**: Shortest Path, Graph, Priority Queue, Greedy Algorithm

---

### Divide and Conquer
**Definition**: Algorithm design paradigm that breaks problem into smaller subproblems, solves recursively, and combines results.

**When It Matters**: Efficient algorithms for sorting, searching, and many recursive problems.

**Template**:
1. **Divide**: Break problem into smaller subproblems
2. **Conquer**: Solve subproblems recursively (base case for small inputs)
3. **Combine**: Merge subproblem solutions into solution for original problem

**Examples**:
- **Binary Search**: Divide array in half, search one half
- **Merge Sort**: Divide array in half, sort halves, merge
- **Quick Sort**: Partition around pivot, sort partitions

**Why Effective**: Often leads to O(n log n) algorithms

**Related Terms**: Recursion, Merge Sort, Quick Sort, Binary Search

---

### Dynamic Array (Vector)
**Definition**: Array that automatically resizes when capacity is exceeded.

**When It Matters**: When you need array-like access but don't know size in advance.

**Implementation**:
- Start with small capacity (e.g., 10)
- When full, allocate new array (typically double size)
- Copy elements to new array
- Delete old array

**Amortized Analysis**: Individual insertions occasionally O(n) due to resizing, but amortized O(1)

**Example**: C++ `std::vector`, Python `list`, Java `ArrayList`

**Operations**:
- Access: O(1)
- Push back (amortized): O(1)
- Insert middle: O(n)
- Delete middle: O(n)

**Related Terms**: Array, Amortized Analysis, Vector

---

### Dynamic Programming
**Definition**: Algorithm design paradigm that solves problems by breaking into overlapping subproblems, storing results to avoid redundant computation.

**When It Matters**: Optimization problems with optimal substructure and overlapping subproblems.

**Two Approaches**:
1. **Top-Down (Memoization)**: Recursive with caching
2. **Bottom-Up (Tabulation)**: Iterative, fill table

**Example**: Fibonacci with memoization:
```python
memo = {}
def fib(n):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]
```
Without DP: O(2^n), With DP: O(n)

**Classic Problems**: Longest common subsequence, knapsack, edit distance, coin change

**Related Terms**: Memoization, Recursion, Optimization

---

## G

### Graph
**Definition**: Non-linear data structure consisting of vertices (nodes) and edges (connections) between them.

**When It Matters**: Modeling relationships - social networks, maps, dependencies, networks.

**Types**:
- **Directed vs Undirected**: Edges have direction or not
- **Weighted vs Unweighted**: Edges have weights or not
- **Cyclic vs Acyclic**: Contains cycles or not
- **Connected vs Disconnected**: Path exists between all vertices or not

**Representations**:
1. **Adjacency Matrix**: 2D array, O(V²) space, O(1) edge check
2. **Adjacency List**: Array of lists, O(V + E) space, O(degree) edge check

**Common Operations**:
- Add vertex: O(1) for adjacency list
- Add edge: O(1) for both representations
- Check if edge exists: O(1) matrix, O(degree) list

**Related Terms**: Tree, BFS, DFS, Shortest Path

---

### Greedy Algorithm
**Definition**: Algorithm that makes locally optimal choice at each step, hoping to find global optimum.

**When It Matters**: Optimization problems where local optimum leads to global optimum.

**Characteristics**:
- Make best choice at current step
- Never reconsider previous choices
- Hope local optimum leads to global optimum

**When Greedy Works**: Problem has greedy-choice property and optimal substructure

**Examples**:
- **Dijkstra's Algorithm**: Always choose nearest unvisited vertex
- **Huffman Coding**: Build tree by merging smallest frequencies
- **Fractional Knapsack**: Take items with highest value/weight ratio

**Example (Coin Change with greedy)**: Making change for $0.67 with quarters, dimes, nickels, pennies - greedy works (2 quarters, 1 dime, 1 nickel, 2 pennies). But greedy doesn't always give optimal solution (depends on coin denominations).

**Related Terms**: Dynamic Programming, Optimization, Dijkstra's Algorithm

---

## H

### Hash Collision
See [Collision](#collision)

### Hash Function
**Definition**: Function that maps data of arbitrary size to fixed-size values (hash codes) used as indices in hash table.

**When It Matters**: Hash table performance depends on quality of hash function.

**Properties of Good Hash Function**:
1. **Deterministic**: Same key always produces same hash
2. **Uniform Distribution**: Spreads keys evenly across hash table
3. **Fast to Compute**: O(1) hashing
4. **Minimize Collisions**: Different keys should rarely produce same hash

**Common Techniques**:
- **Division Method**: hash(key) = key % table_size
- **Multiplication Method**: hash(key) = floor(m * (k * A % 1)) where A ≈ 0.618
- **String Hashing**: Polynomial rolling hash

**Example**:
```cpp
int hash(string key, int tableSize) {
    int hash = 0;
    for (char c : key) {
        hash = (hash * 31 + c) % tableSize;
    }
    return hash;
}
```

**Related Terms**: Hash Table, Collision, Load Factor

---

### Hash Table
**Definition**: Data structure that maps keys to values using hash function, providing average O(1) insert/delete/search.

**When It Matters**: When you need fast lookups by key (dictionaries, caches, symbol tables).

**How It Works**:
1. Hash function maps key to index
2. Store value at that index
3. Handle collisions with chaining or open addressing

**Operations** (average case):
- Insert: O(1)
- Delete: O(1)
- Search: O(1)

**Worst Case**: O(n) if all keys hash to same index

**Load Factor**: n/m where n = elements, m = table size
- Low load factor (<0.7): Few collisions, wastes space
- High load factor (>0.9): Many collisions, slow operations
- Solution: Resize when load factor exceeds threshold

**Related Terms**: Hash Function, Collision, Dictionary, Map

---

### Heap
**Definition**: Complete binary tree where each node's value satisfies heap property relative to its children.

**Types**:
- **Max Heap**: Parent ≥ children (root is maximum)
- **Min Heap**: Parent ≤ children (root is minimum)

**When It Matters**: Priority queues, heap sort, finding k largest/smallest elements.

**Implementation**: Array (using complete tree property)

**Operations**:
- **Insert**: O(log n) - add at end, bubble up
- **Extract Min/Max**: O(log n) - remove root, move last to root, bubble down
- **Peek Min/Max**: O(1) - return root
- **Heapify**: O(n) - build heap from array

**Use Cases**:
- Priority queue implementation
- Heap sort algorithm
- Finding median in stream
- Dijkstra's algorithm (with min-heap)

**Related Terms**: Priority Queue, Binary Tree, Heap Sort

---

### Heap Sort
**Definition**: Comparison-based sorting algorithm that uses heap data structure.

**How It Works**:
1. Build max heap from unsorted array: O(n)
2. Repeatedly extract max (swap with last, reduce heap size, heapify): O(n log n)

**Time Complexity**: O(n log n) in all cases (best, average, worst)

**Space Complexity**: O(1) - sorts in place

**Advantages**:
- Guaranteed O(n log n)
- In-place sorting
- No worst-case like quicksort

**Disadvantages**:
- Not stable
- Not cache-friendly (heap operations jump around array)
- Constants are worse than quicksort

**Related Terms**: Heap, Sorting, Merge Sort, Quick Sort

---

## I

### In-Order Traversal
**Definition**: Binary tree traversal that visits left subtree, then root, then right subtree.

**When It Matters**: BST in-order traversal gives sorted sequence.

**Algorithm**:
```
inorder(node):
    if node is null: return
    inorder(node.left)
    visit(node)
    inorder(node.right)
```

**Example Tree**:
```
    4
   / \
  2   6
 / \ / \
1  3 5  7
```
In-order: 1, 2, 3, 4, 5, 6, 7 (sorted!)

**Related Terms**: Pre-Order, Post-Order, Tree Traversal, BST

---

### Insertion Sort
**Definition**: Simple sorting algorithm that builds sorted array one element at a time by inserting each element into correct position.

**When It Matters**: Small arrays, nearly-sorted data, online algorithms.

**How It Works**: Like sorting cards in your hand - pick each card and insert into correct position

**Time Complexity**:
- Best: O(n) - already sorted
- Average: O(n²)
- Worst: O(n²) - reverse sorted

**Space Complexity**: O(1) - sorts in place

**Advantages**:
- Simple implementation
- Efficient for small data
- Stable sort
- Online algorithm (sorts as it receives data)
- O(n) for nearly-sorted data

**When to Use**: Small arrays (<10 elements), nearly-sorted data, as final step in hybrid sorts

**Related Terms**: Selection Sort, Bubble Sort, Sorting

---

## L

### Linear Search
**Definition**: Simple search algorithm that checks each element sequentially until target is found or end is reached.

**When It Matters**: Unsorted data, small datasets, when you need to find all occurrences.

**Time Complexity**: O(n) - may need to check all elements

**When to Use**: Unsorted arrays (can't use binary search), small datasets, finding all matches

**Related Terms**: Binary Search, Searching

---

### Linked List
**Definition**: Linear data structure where elements (nodes) are stored in non-contiguous memory, connected via pointers.

**Types**:
- **Singly-Linked**: Each node has pointer to next
- **Doubly-Linked**: Each node has pointers to next and previous
- **Circular**: Last node points back to first

**When It Matters**: When you need O(1) insertion/deletion at known position and don't need random access.

**Node Structure**:
```cpp
struct Node {
    int data;
    Node* next;  // singly-linked
    Node* prev;  // doubly-linked (additional)
};
```

**Operations**:
- **Access**: O(n) - must traverse from head
- **Search**: O(n) - must traverse
- **Insert at head**: O(1)
- **Insert at position**: O(n) - find position, then O(1) insert
- **Delete**: O(n) to find, O(1) to delete if you have pointer

**Advantages**:
- Dynamic size
- O(1) insertion/deletion at known position
- No wasted space

**Disadvantages**:
- No random access (O(n) to access element i)
- Extra memory for pointers
- Not cache-friendly

**Related Terms**: Array, Node, Pointer, Dynamic Array

---

### Load Factor
**Definition**: In hash tables, ratio of number of elements to table size: α = n/m

**When It Matters**: Determines hash table performance and when to resize.

**Impact on Performance**:
- **Low load (α < 0.5)**: Few collisions, fast operations, wastes space
- **Medium load (α ≈ 0.7)**: Good balance of speed and space
- **High load (α > 0.9)**: Many collisions, degraded performance

**Resizing Strategy**:
- When α exceeds threshold (e.g., 0.75), create larger table (typically 2x)
- Rehash all elements into new table
- Expensive (O(n)) but amortized O(1) per insertion

**Example**:
- Table size 100, 50 elements → α = 0.5
- Table size 100, 90 elements → α = 0.9 (should resize)

**Related Terms**: Hash Table, Collision, Rehashing

---

## M

### Max Heap
See [Heap](#heap) - heap where parent ≥ children

### Merge Sort
**Definition**: Divide-and-conquer sorting algorithm that divides array in half, sorts halves recursively, and merges sorted halves.

**How It Works**:
1. **Divide**: Split array into two halves
2. **Conquer**: Recursively sort each half
3. **Combine**: Merge two sorted halves

**Time Complexity**: O(n log n) in all cases (best, average, worst)

**Space Complexity**: O(n) - needs temporary array for merging

**Advantages**:
- Guaranteed O(n log n)
- Stable sort
- Good for linked lists
- Predictable performance

**Disadvantages**:
- Requires extra space O(n)
- Slower than quicksort in practice (higher constants)

**When to Use**: When stable sort needed, when O(n log n) worst-case required, sorting linked lists

**Related Terms**: Quick Sort, Divide and Conquer, Sorting

---

### Min Heap
See [Heap](#heap) - heap where parent ≤ children

---

## N

### Node
**Definition**: Basic unit in linked data structures containing data and pointers to other nodes.

**Structure**:
```cpp
// Singly-linked list node
struct Node {
    int data;
    Node* next;
};

// Doubly-linked list node
struct Node {
    int data;
    Node* next;
    Node* prev;
};

// Tree node
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};
```

**Related Terms**: Linked List, Tree, Pointer

---

## O

### O(1) - Constant Time
**Definition**: Algorithm whose running time doesn't depend on input size.

**Examples**:
- Array access: arr[5]
- Hash table lookup (average)
- Stack push/pop
- Queue enqueue/dequeue

**Why Desirable**: Blazing fast regardless of data size

---

### O(log n) - Logarithmic Time
**Definition**: Algorithm whose running time grows logarithmically with input size.

**Examples**:
- Binary search on sorted array
- BST operations (if balanced)
- Heap operations (insert, extract)

**Why Fast**: 1 million elements → only ~20 operations (log₂(1,000,000) ≈ 20)

**Intuition**: Eliminates half (or some fraction) of remaining data each step

---

### O(n) - Linear Time
**Definition**: Algorithm whose running time grows linearly with input size.

**Examples**:
- Array traversal
- Linear search
- Finding max/min in unsorted array

**Intuition**: Must look at every element once

---

### O(n log n) - Linearithmic Time
**Definition**: Algorithm whose running time grows as n * log(n).

**Examples**:
- Efficient sorting: merge sort, heap sort, quick sort (average)
- Building balanced tree

**Why Common**: Optimal for comparison-based sorting

**Intuition**: Doing O(log n) operations n times, or O(n) operations log(n) times

---

### O(n²) - Quadratic Time
**Definition**: Algorithm whose running time grows quadratically with input size.

**Examples**:
- Bubble sort, selection sort, insertion sort
- Nested loops over array
- Naive string matching

**When Acceptable**: Small inputs (<100 elements), simplicity matters more than performance

**Why Slow**: 1000 elements → 1,000,000 operations

---

### Open Addressing
**Definition**: Hash collision resolution strategy that finds alternative location in hash table itself (no external data structures).

**Probing Strategies**:
1. **Linear Probing**: Try next slots sequentially
   - `index = (hash(key) + i) % table_size`
   - Problem: Primary clustering

2. **Quadratic Probing**: Try slots quadratically
   - `index = (hash(key) + i²) % table_size`
   - Reduces clustering

3. **Double Hashing**: Use second hash function
   - `index = (hash1(key) + i * hash2(key)) % table_size`
   - Best distribution

**Advantages over Chaining**:
- Better cache performance
- No pointer overhead

**Disadvantages**:
- Degrades as load factor increases
- Deletion is tricky (need tombstones)

**Related Terms**: Hash Table, Collision, Chaining, Probing

---

## P

### Pointer
**Definition**: Variable that stores memory address of another variable.

**When It Matters**: Linked data structures, dynamic memory, pass-by-reference.

**Operations**:
- **Declaration**: `int* ptr;`
- **Address-of**: `ptr = &variable;`
- **Dereference**: `value = *ptr;`
- **Null pointer**: `ptr = nullptr;` (C++), `ptr = None` (Python)

**Common Bugs**:
- Dereferencing null pointer → segfault
- Dangling pointer (points to deallocated memory)
- Memory leak (lose pointer to allocated memory)

**Related Terms**: Reference, Memory Management, Node

---

### Post-Order Traversal
**Definition**: Binary tree traversal that visits left subtree, right subtree, then root.

**When It Matters**: Deleting tree (delete children before parent), evaluating expression trees.

**Algorithm**:
```
postorder(node):
    if node is null: return
    postorder(node.left)
    postorder(node.right)
    visit(node)
```

**Example**:
```
    4
   / \
  2   6
 / \ / \
1  3 5  7
```
Post-order: 1, 3, 2, 5, 7, 6, 4

**Related Terms**: Pre-Order, In-Order, Tree Traversal

---

### Pre-Order Traversal
**Definition**: Binary tree traversal that visits root, then left subtree, then right subtree.

**When It Matters**: Copying tree, prefix expression evaluation, creating copy of tree structure.

**Algorithm**:
```
preorder(node):
    if node is null: return
    visit(node)
    preorder(node.left)
    preorder(node.right)
```

**Example**:
```
    4
   / \
  2   6
 / \ / \
1  3 5  7
```
Pre-order: 4, 2, 1, 3, 6, 5, 7

**Related Terms**: In-Order, Post-Order, Tree Traversal

---

### Priority Queue
**Definition**: Abstract data type where each element has priority, and element with highest priority is served first.

**When It Matters**: Task scheduling, Dijkstra's algorithm, A* search, event-driven simulation.

**Operations**:
- **Insert**: Add element with priority
- **Extract-Max/Min**: Remove and return highest priority element
- **Peek**: View highest priority element without removing

**Implementation**: Typically using heap (min-heap or max-heap)

**Time Complexity** (with heap):
- Insert: O(log n)
- Extract: O(log n)
- Peek: O(1)

**Example**: Hospital emergency room - patients with severe conditions treated before minor ailments, regardless of arrival order

**Related Terms**: Heap, Queue, ADT

---

## Q

### Queue
**Definition**: Linear data structure following First-In-First-Out (FIFO) principle.

**When It Matters**: BFS, task scheduling, print queue, message buffers.

**Operations**:
- **Enqueue**: Add element to back - O(1)
- **Dequeue**: Remove element from front - O(1)
- **Front**: View front element - O(1)
- **isEmpty**: Check if empty - O(1)

**Implementation Options**:
1. **Circular Array**: Fixed size, wrap around
2. **Linked List**: Dynamic size, node-based
3. **Two Stacks**: Use two stacks to simulate queue

**Real-World Analogy**: Line at store - first person in line is first served

**Related Terms**: Stack, Deque, BFS, FIFO

---

### Quick Sort
**Definition**: Divide-and-conquer sorting algorithm that picks pivot, partitions array around pivot, and recursively sorts partitions.

**How It Works**:
1. Choose pivot element
2. Partition: rearrange so elements < pivot are left, elements > pivot are right
3. Recursively quicksort left and right partitions

**Time Complexity**:
- Best: O(n log n) - balanced partitions
- Average: O(n log n)
- Worst: O(n²) - sorted input with bad pivot choice (always pick min or max)

**Space Complexity**: O(log n) recursion depth (average)

**Advantages**:
- Fast in practice (low constants)
- In-place sorting
- Cache-friendly

**Disadvantages**:
- Unstable sort
- O(n²) worst case (rare with good pivot selection)

**Pivot Selection**:
- First/last element (simple but can be O(n²) on sorted data)
- Random element (avoids worst case on sorted data)
- Median-of-three (first, middle, last)

**Related Terms**: Merge Sort, Partition, Divide and Conquer, Sorting

---

## R

### Recursion
**Definition**: Function that calls itself with smaller subproblem, terminating at base case.

**When It Matters**: Tree traversal, divide-and-conquer, backtracking, dynamic programming.

**Structure**:
```cpp
returnType recursive(parameters) {
    // Base case - stops recursion
    if (base_condition) {
        return base_value;
    }

    // Recursive case - calls itself with smaller problem
    return recursive(modified_parameters);
}
```

**Example - Factorial**:
```cpp
int factorial(int n) {
    if (n <= 1) return 1;           // Base case
    return n * factorial(n - 1);     // Recursive case
}
```

**Stack Overflow**: Too many recursive calls exhaust call stack

**Related Terms**: Base Case, Recursive Case, Stack, Divide and Conquer

---

### Red-Black Tree
**Definition**: Self-balancing BST where each node has color (red or black) and maintains specific properties to ensure O(log n) height.

**Properties**:
1. Every node is red or black
2. Root is black
3. Leaves (NIL) are black
4. Red node has black children (no two reds in a row)
5. All paths from node to descendant leaves have same number of black nodes

**When It Matters**: When you need guaranteed O(log n) operations with less strict balancing than AVL.

**Comparison to AVL**:
- Red-Black: Less balanced (max height 2 log n), fewer rotations on insert
- AVL: More balanced (max height 1.44 log n), more rotations on insert

**Use Cases**: C++ `std::map`, Java `TreeMap`, Linux kernel

**Related Terms**: AVL Tree, Binary Search Tree, Self-Balancing Tree

---

### Reference
**Definition**: Alias to existing variable - different name for same memory location.

**C++ Syntax**: `int& ref = variable;`

**Key Differences from Pointer**:
- Cannot be null
- Cannot be reassigned (always refers to same variable)
- Automatically dereferenced (no * needed)

**When to Use**: Pass-by-reference to avoid copying large objects

**Related Terms**: Pointer, Pass-by-Reference

---

### Rehashing
**Definition**: Process of creating larger hash table and reinserting all elements when load factor exceeds threshold.

**When It Happens**: Load factor too high (e.g., > 0.75)

**Process**:
1. Create new table (typically double size)
2. For each element in old table:
   - Recompute hash with new table size
   - Insert into new table
3. Delete old table

**Cost**: O(n) to rehash all elements, but amortized O(1) per insertion over many operations

**Related Terms**: Hash Table, Load Factor, Dynamic Resizing

---

## S

### Selection Sort
**Definition**: Sorting algorithm that repeatedly finds minimum element from unsorted portion and places it at beginning.

**How It Works**: Find min, swap with first unsorted position, repeat

**Time Complexity**: O(n²) in all cases (best, average, worst)

**Space Complexity**: O(1) - sorts in place

**Characteristics**:
- Unstable
- Minimizes number of swaps (at most n swaps)
- Simple but slow

**When to Use**: When memory writes are expensive (flash memory), small arrays

**Related Terms**: Insertion Sort, Bubble Sort, Sorting

---

### Separate Chaining
**Definition**: Hash collision resolution where each table slot contains linked list (or other collection) of all elements that hash to that slot.

**When It Matters**: Hash table implementation with dynamic size.

**Structure**:
```
Index  Linked List
0      -> key1 -> key2 -> NULL
1      -> NULL
2      -> key3 -> NULL
3      -> key4 -> key5 -> key6 -> NULL
```

**Performance**:
- Average case: O(1 + α) where α is load factor
- Worst case: O(n) if all keys hash to same slot

**Advantages**:
- Simple to implement
- Handles high load factors
- Deletion is easy

**Disadvantages**:
- Extra memory for pointers
- Cache-unfriendly (pointer chasing)

**Related Terms**: Hash Table, Collision, Open Addressing

---

### Shortest Path
**Definition**: Path between two vertices in graph with minimum total edge weight.

**Algorithms**:
- **Dijkstra's**: Single source, non-negative weights, greedy
- **Bellman-Ford**: Single source, handles negative weights, dynamic programming
- **Floyd-Warshall**: All pairs, dynamic programming

**When It Matters**: GPS navigation, network routing, game pathfinding.

**Related Terms**: Dijkstra's Algorithm, Graph, Weighted Graph

---

### Singly-Linked List
**Definition**: Linked list where each node has pointer only to next node.

**Node Structure**:
```cpp
struct Node {
    int data;
    Node* next;
};
```

**Operations**:
- Insert at head: O(1)
- Insert at tail: O(n) without tail pointer, O(1) with tail pointer
- Delete: O(n) to find, O(1) to delete
- Traverse forward: O(n)
- Traverse backward: NOT POSSIBLE

**Compared to Doubly-Linked**:
- Pros: Less memory (one pointer vs two)
- Cons: Can only traverse forward, harder to delete given node

**Related Terms**: Doubly-Linked List, Linked List, Node

---

### Sorting
**Definition**: Process of arranging elements in specific order (ascending, descending, custom).

**Comparison-Based Sorts** (can't do better than O(n log n) in worst case):
- Merge sort: O(n log n), stable, requires O(n) space
- Quick sort: O(n log n) average, O(n²) worst, in-place
- Heap sort: O(n log n) always, in-place, unstable
- Insertion sort: O(n²), stable, good for small/nearly-sorted
- Selection sort: O(n²), unstable, minimizes swaps
- Bubble sort: O(n²), stable, educational only

**Non-Comparison Sorts** (can beat O(n log n) with restrictions):
- Counting sort: O(n + k) where k is range, requires range known
- Radix sort: O(d * n) where d is digits, for integers
- Bucket sort: O(n + k) average, for uniformly distributed data

**Stability**: Stable sort preserves relative order of equal elements

**Related Terms**: Merge Sort, Quick Sort, Heap Sort, Stable Sort

---

### Space Complexity
**Definition**: Amount of memory an algorithm uses as function of input size.

**What to Count**:
- Variables
- Data structures
- Recursion call stack
- NOT counting input itself

**Examples**:
- **O(1)**: Bubble sort (few variables, sorts in place)
- **O(log n)**: Binary search recursion depth
- **O(n)**: Merge sort (temporary array), hash table with n elements
- **O(n²)**: Adjacency matrix for graph

**Trade-offs**: Often time-space tradeoff - can use more space to go faster (memoization)

**Related Terms**: Time Complexity, Big O, Memory

---

### Stack
**Definition**: Linear data structure following Last-In-First-Out (LIFO) principle.

**When It Matters**: Function calls, undo operations, expression evaluation, DFS, backtracking.

**Operations**:
- **Push**: Add element to top - O(1)
- **Pop**: Remove element from top - O(1)
- **Peek/Top**: View top element - O(1)
- **isEmpty**: Check if empty - O(1)

**Implementation Options**:
1. **Array**: Fixed size or dynamic
2. **Linked List**: Dynamic size

**Real-World Analogies**:
- Stack of plates
- Browser back button
- Ctrl+Z undo

**Related Terms**: Queue, LIFO, DFS, Recursion

---

### Stable Sort
**Definition**: Sorting algorithm that preserves relative order of elements with equal keys.

**When It Matters**: Multi-key sorting, maintaining secondary sort order.

**Example**:
```
Input: [(Alice, 25), (Bob, 30), (Charlie, 25)]
Sort by age:

Stable:   [(Alice, 25), (Charlie, 25), (Bob, 30)]
          Alice appears before Charlie (as in input)

Unstable: [(Charlie, 25), (Alice, 25), (Bob, 30)]
          Order of equal ages may change
```

**Stable Algorithms**: Merge sort, insertion sort, bubble sort
**Unstable Algorithms**: Quick sort, heap sort, selection sort

**Related Terms**: Sorting, Merge Sort, Quick Sort

---

## T

### Time Complexity
**Definition**: Amount of time an algorithm takes as function of input size.

**Measured In**: Number of primitive operations (comparisons, assignments, arithmetic)

**Common Complexities**: See [Big O Notation](#big-o-notation)

**Best, Average, Worst Cases**:
- **Best Case**: Minimum time (optimistic scenario)
- **Average Case**: Expected time over all inputs
- **Worst Case**: Maximum time (pessimistic scenario)

**Example - Quick Sort**:
- Best: O(n log n) - pivot always splits evenly
- Average: O(n log n) - pivot splits reasonably
- Worst: O(n²) - pivot always picks min/max

**Related Terms**: Big O, Space Complexity, Algorithm Analysis

---

### Topological Sort
**Definition**: Linear ordering of vertices in directed acyclic graph (DAG) where for every edge u→v, u comes before v in ordering.

**When It Matters**: Task scheduling with dependencies, build systems, course prerequisites.

**Requires**: DAG (directed acyclic graph) - doesn't work with cycles

**Algorithms**:
1. **Kahn's Algorithm**: Use queue, process nodes with no incoming edges
2. **DFS-based**: Do DFS, add to stack on post-visit (reverse of post-order)

**Example**: Course prerequisites
```
Courses: A → B → D
         A → C → D

Topological orders:
- A, B, C, D
- A, C, B, D
Both valid!
```

**Related Terms**: DAG, DFS, Graph, Scheduling

---

### Tree
**Definition**: Hierarchical data structure consisting of nodes connected by edges, with one root node and no cycles.

**Properties**:
- One root node
- Each node has zero or more children
- Each node has exactly one parent (except root)
- No cycles (acyclic)
- n nodes → n-1 edges

**Terminology**:
- **Root**: Top node
- **Leaf**: Node with no children
- **Internal node**: Node with children
- **Parent/Child**: Direct connection
- **Sibling**: Nodes with same parent
- **Ancestor/Descendant**: Path exists
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root

**Types**: Binary tree, BST, AVL, Red-Black, B-tree, Trie

**Related Terms**: Binary Tree, Graph, Hierarchical Structure

---

### Tree Traversal
**Definition**: Process of visiting all nodes in tree systematically.

**Types**:
1. **Depth-First** (use stack/recursion):
   - Pre-order: Root, Left, Right
   - In-order: Left, Root, Right
   - Post-order: Left, Right, Root

2. **Breadth-First** (use queue):
   - Level-order: Visit all nodes at depth 0, then depth 1, etc.

**When Each Matters**:
- **In-order**: BST → sorted sequence
- **Pre-order**: Copy tree, prefix expressions
- **Post-order**: Delete tree, postfix expressions
- **Level-order**: BFS, tree printing by level

**Related Terms**: Binary Tree, BFS, DFS, Pre-Order, In-Order, Post-Order

---

### Trie (Prefix Tree)
**Definition**: Tree structure for storing strings where each node represents a character, and paths represent words.

**When It Matters**: Autocomplete, spell checker, IP routing, dictionary implementations.

**Structure**:
- Each node has children for possible next characters
- Path from root to node spells a prefix
- Mark end-of-word nodes

**Operations**:
- **Insert**: O(m) where m is word length
- **Search**: O(m)
- **Prefix search**: O(p) where p is prefix length
- **Delete**: O(m)

**Space Complexity**: O(ALPHABET_SIZE * avg_word_length * num_words) - can be large

**Example**: Insert "cat", "car", "dog"
```
        root
       / | \
      c  d  ...
      |  |
      a  o
     / \ |
    t   r g
```

**Use Cases**:
- Autocomplete: Find all words with prefix
- Spell check: Find words within edit distance
- IP routing: Longest prefix match

**Related Terms**: Tree, String, Dictionary, Autocomplete

---

## V

### Vertex (Node in Graph)
**Definition**: Fundamental unit in graph representing an entity.

**Also Called**: Node (especially in graph context)

**Properties**:
- Has unique identifier/value
- Connected to other vertices via edges
- May have degree (number of edges)

**Related Terms**: Graph, Edge, Node

---

## W

### Weighted Graph
**Definition**: Graph where edges have associated weights (costs, distances, capacities).

**When It Matters**: Shortest path problems, minimum spanning tree, network flow.

**Example**: Road network where weights represent:
- Distance in miles
- Travel time
- Toll cost

**Algorithms**:
- **Shortest Path**: Dijkstra's, Bellman-Ford
- **Minimum Spanning Tree**: Prim's, Kruskal's

**Related Terms**: Graph, Dijkstra's Algorithm, Shortest Path

---

## Quick Reference by Category

### Data Structures

**Linear**:
- Array, Dynamic Array, Linked List (Singly, Doubly, Circular), Stack, Queue, Deque

**Non-Linear**:
- Tree (Binary, BST, AVL, Red-Black), Heap (Min, Max), Graph, Trie

**Hash-Based**:
- Hash Table, Hash Map, Hash Set

### Algorithms

**Sorting**:
- Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort

**Searching**:
- Linear Search, Binary Search

**Graph**:
- BFS, DFS, Dijkstra's, Topological Sort

**Tree Traversal**:
- Pre-Order, In-Order, Post-Order, Level-Order

**Paradigms**:
- Divide and Conquer, Dynamic Programming, Greedy, Backtracking

### Complexity Classes

**Time**: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n), O(n!)

**Common Operations**: See individual data structure entries

### Concepts

**Algorithm Analysis**: Big O, Time Complexity, Space Complexity, Best/Average/Worst Case

**Trees**: Height, Depth, Balanced, Complete, Perfect

**Graphs**: Directed, Undirected, Weighted, Cyclic, Acyclic (DAG)

**Hashing**: Hash Function, Collision, Load Factor, Chaining, Open Addressing

---

## Tips for Using This Glossary

1. **Ctrl+F is your friend**: Don't scroll, search
2. **Start with related terms**: If you don't understand a term, check its "Related Terms"
3. **Focus on "When It Matters"**: This tells you the practical importance
4. **Examples > Definitions**: Read the examples to understand real usage
5. **Category reference**: Browse by category to see how concepts relate
6. **Draw diagrams**: For data structures, drawing helps WAY more than reading

---

**Last Updated**: CSC-249 Spring 2026

This is a living document. If you notice missing terms or confusing definitions, let Drew know.
