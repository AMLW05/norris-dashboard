# CSC-249 Troubleshooting Guide

Common problems in data structures and algorithms implementations - and how to fix them

---

## How to Use This Guide

**Search First**: Use Ctrl+F (Cmd+F on Mac) to search for your error message or symptom.

**Read Symptoms**: Even if the problem title doesn't match, check symptoms - you might have the same underlying issue.

**Follow Steps**: Troubleshooting steps are ordered from most likely to least likely cause.

**Ask for Help**: If you've tried everything here and still stuck, come to office hours with:
- What you tried (from this guide)
- Exact error message or behavior
- Minimal code that reproduces the problem
- What you think might be wrong (your hypothesis)

---

## Table of Contents

- [Pointer and Memory Issues](#pointer-and-memory-issues)
- [Linked List Errors](#linked-list-errors)
- [Tree Errors](#tree-errors)
- [Recursion Issues](#recursion-issues)
- [Graph Errors](#graph-errors)
- [Hash Table Issues](#hash-table-issues)
- [Sorting and Searching Errors](#sorting-and-searching-errors)
- [Algorithm Complexity Issues](#algorithm-complexity-issues)
- [Compilation Errors](#compilation-errors)
- [Runtime Errors](#runtime-errors)

---

## Pointer and Memory Issues

### Problem: Segmentation Fault (Segfault)

**Symptoms**:
```
Segmentation fault (core dumped)
```
Program crashes, sometimes with no clear indication where.

**Why This Happens**: Trying to access memory you don't have permission to access - most commonly dereferencing null or invalid pointers.

**How to Fix**:

1. **Find where it crashes** (use debugger):
```bash
# Compile with debug symbols
g++ -g program.cpp -o program

# Run with gdb
gdb ./program
run
bt  # Backtrace shows where crash happened
```

2. **Check for null pointer dereference**:
```cpp
// BAD: No null check
Node* node = nullptr;
node->data = 5;  // SEGFAULT!

// GOOD: Check before dereferencing
Node* node = nullptr;
if (node != nullptr) {
    node->data = 5;
}
```

3. **Check array bounds**:
```cpp
// BAD: Out of bounds
int arr[5];
arr[10] = 5;  // SEGFAULT!

// GOOD: Check bounds
int arr[5];
if (index >= 0 && index < 5) {
    arr[index] = 5;
}
```

4. **Check pointer after delete**:
```cpp
// BAD: Use after delete
Node* node = new Node(5);
delete node;
node->data = 10;  // SEGFAULT! (use after free)

// GOOD: Set to nullptr after delete
Node* node = new Node(5);
delete node;
node = nullptr;
```

5. **Common linked list causes**:
```cpp
// Dereferencing nullptr when list is empty
if (head == nullptr) {
    // Handle empty list case
    return;
}

// Walking off the end
Node* current = head;
while (current->next != nullptr) {  // Check next, not current!
    current = current->next;
}
```

**How to Prevent**: Always check pointers for null before dereferencing. Use debugger liberally. Draw memory diagrams before coding pointer manipulation.

---

### Problem: Memory Leak

**Symptoms**:
- Program uses more and more memory over time
- Valgrind reports "definitely lost" or "possibly lost" bytes
- Program eventually crashes with out-of-memory error (on long runs)

**Why This Happens**: Dynamically allocated memory (with `new`) is never freed (with `delete`).

**How to Fix**:

1. **Check with Valgrind** (C++):
```bash
# Compile with debug symbols
g++ -g program.cpp -o program

# Run with valgrind
valgrind --leak-check=full ./program

# Look for:
# "definitely lost: X bytes in Y blocks"
# "possibly lost: X bytes in Y blocks"
```

2. **Common leak pattern - forgetting to delete**:
```cpp
// BAD: Allocate but never delete
void function() {
    Node* node = new Node(5);
    // function ends, node pointer lost, memory leaked!
}

// GOOD: Delete before returning
void function() {
    Node* node = new Node(5);
    // ... use node ...
    delete node;
}
```

3. **Linked list destructor leak**:
```cpp
// BAD: Only delete head
~LinkedList() {
    delete head;  // Only deletes first node!
}

// GOOD: Delete all nodes
~LinkedList() {
    Node* current = head;
    while (current != nullptr) {
        Node* next = current->next;
        delete current;
        current = next;
    }
}
```

4. **BST destructor leak**:
```cpp
// BAD: Only delete root
~BST() {
    delete root;  // Only deletes root!
}

// GOOD: Recursively delete all nodes
~BST() {
    destroyTree(root);
}

void destroyTree(TreeNode* node) {
    if (node == nullptr) return;
    destroyTree(node->left);   // Delete left subtree
    destroyTree(node->right);  // Delete right subtree
    delete node;               // Delete node itself
}
```

5. **Reassigning pointer without deleting old memory**:
```cpp
// BAD: Lose reference to old memory
Node* node = new Node(5);
node = new Node(10);  // Leak! Old node(5) is lost

// GOOD: Delete before reassigning
Node* node = new Node(5);
delete node;
node = new Node(10);
```

**How to Prevent**: Use RAII (Resource Acquisition Is Initialization) - destructor should free all allocated memory. Run Valgrind on every implementation. Consider using smart pointers (`std::unique_ptr`, `std::shared_ptr`).

---

### Problem: Dangling Pointer

**Symptoms**:
- Segfault that appears randomly
- Code works sometimes, crashes other times
- Valgrind reports "Invalid read" or "Invalid write"

**Why This Happens**: Pointer points to memory that has been freed.

**How to Fix**:

1. **Set pointers to nullptr after delete**:
```cpp
// BAD: Dangling pointer
Node* node = new Node(5);
delete node;
// node still points to freed memory!

// GOOD: Set to nullptr
Node* node = new Node(5);
delete node;
node = nullptr;
```

2. **Linked list deletion - update pointers correctly**:
```cpp
// BAD: Dangling prev/next pointers
void deleteNode(Node* nodeToDelete) {
    delete nodeToDelete;
    // Other nodes still point to freed memory!
}

// GOOD: Update neighboring pointers first
void deleteNode(Node* nodeToDelete) {
    if (nodeToDelete->prev != nullptr) {
        nodeToDelete->prev->next = nodeToDelete->next;
    }
    if (nodeToDelete->next != nullptr) {
        nodeToDelete->next->prev = nodeToDelete->prev;
    }
    delete nodeToDelete;
}
```

3. **Returning pointer to local variable**:
```cpp
// BAD: Returning pointer to stack memory
Node* createNode() {
    Node node(5);  // Local variable on stack
    return &node;  // DANGER! Points to freed stack memory after return
}

// GOOD: Return pointer to heap memory
Node* createNode() {
    Node* node = new Node(5);  // Heap allocation
    return node;  // Safe - memory persists after return
}
```

**How to Prevent**: Always set pointers to nullptr after delete. Be very careful with pointer arithmetic and reassignment. Use debugger to track pointer values.

---

### Problem: Double Free

**Symptoms**:
```
*** Error in `./program': double free or corruption
free(): invalid pointer
```

**Why This Happens**: Calling `delete` twice on the same pointer.

**How to Fix**:

1. **Set to nullptr after delete**:
```cpp
// BAD: Can't tell if already deleted
Node* node = new Node(5);
delete node;
delete node;  // DOUBLE FREE!

// GOOD: nullptr prevents double free
Node* node = new Node(5);
delete node;
node = nullptr;
if (node != nullptr) {
    delete node;  // Won't execute
}
```

2. **Multiple pointers to same object**:
```cpp
// BAD: Two pointers, one object
Node* ptr1 = new Node(5);
Node* ptr2 = ptr1;
delete ptr1;
delete ptr2;  // DOUBLE FREE!

// GOOD: Track ownership
Node* ptr1 = new Node(5);
Node* ptr2 = ptr1;
delete ptr1;
ptr1 = nullptr;
ptr2 = nullptr;  // Don't delete ptr2
```

**How to Prevent**: Clear ownership semantics - who owns memory and is responsible for freeing it. Set pointers to nullptr after delete.

---

## Linked List Errors

### Problem: Infinite Loop in Traversal

**Symptoms**:
- Program hangs and never finishes
- Traversal never reaches end
- CPU usage 100%

**Why This Happens**: Loop condition never becomes false - usually circular reference or wrong termination check.

**How to Fix**:

1. **Check for correct termination**:
```cpp
// BAD: Wrong check (checks data, not pointer)
while (current != 0) {  // If data is 0, stops early!
    current = current->next;
}

// GOOD: Check pointer itself
while (current != nullptr) {
    current = current->next;
}
```

2. **Accidentally creating circular reference**:
```cpp
// BAD: Circular reference during insertion
void insertAfter(Node* node, int value) {
    Node* newNode = new Node(value);
    newNode->next = node->next;
    node->next = newNode;
    newNode->next = newNode;  // OOPS! Points to itself
}

// GOOD: Remove self-reference
void insertAfter(Node* node, int value) {
    Node* newNode = new Node(value);
    newNode->next = node->next;
    node->next = newNode;
}
```

3. **Use slow/fast pointers to detect cycle** (Floyd's algorithm):
```cpp
bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            return true;  // Cycle detected!
        }
    }

    return false;  // No cycle
}
```

**How to Prevent**: Draw diagrams before implementing pointer manipulation. Test with small lists first. Add cycle detection in debug builds.

---

### Problem: Off-by-One Error in List Operations

**Symptoms**:
- Inserting at index 3 puts element at index 2 or 4
- Can't access last element
- Accessing beyond list bounds

**Why This Happens**: Confusion between 0-based indexing and node counting.

**How to Fix**:

1. **InsertAt - careful with loop iterations**:
```cpp
// BAD: Off by one
void insertAt(int index, int value) {
    Node* current = head;
    for (int i = 0; i < index; i++) {  // Stops one before!
        current = current->next;
    }
    // Insert after current - WRONG position!
}

// GOOD: Go to node before insertion point
void insertAt(int index, int value) {
    Node* current = head;
    for (int i = 0; i < index - 1; i++) {  // Stop one before index
        current = current->next;
    }
    // Now insert after current - correct!
    Node* newNode = new Node(value);
    newNode->next = current->next;
    current->next = newNode;
}
```

2. **Test edge cases**:
- Insert at index 0 (beginning)
- Insert at last index (end)
- Insert at middle index
- Empty list

**How to Prevent**: Draw diagram for specific example (insert at index 2 in list of 5 elements). Trace through loop iterations. Test edge cases thoroughly.

---

### Problem: Lost Head/Tail Pointer

**Symptoms**:
- Can't access list after insertion/deletion
- List appears empty when it's not
- Segfault when traversing from head

**Why This Happens**: Forgot to update head or tail pointer when modifying first/last node.

**How to Fix**:

1. **Inserting at front - update head**:
```cpp
// BAD: Don't update head
void insertFront(int value) {
    Node* newNode = new Node(value);
    newNode->next = head;
    // Forgot to update head!
}

// GOOD: Update head pointer
void insertFront(int value) {
    Node* newNode = new Node(value);
    newNode->next = head;
    head = newNode;  // Update head!
}
```

2. **Deleting head - update head**:
```cpp
// BAD: Delete head but don't update pointer
void deleteFront() {
    if (head == nullptr) return;
    delete head;  // Head still points to freed memory!
}

// GOOD: Update head before deleting
void deleteFront() {
    if (head == nullptr) return;
    Node* temp = head;
    head = head->next;  // Update head first!
    delete temp;
}
```

3. **Doubly-linked list - update both head and tail**:
```cpp
// Deleting node from doubly-linked list
void deleteNode(Node* node) {
    // Update prev pointer
    if (node->prev != nullptr) {
        node->prev->next = node->next;
    } else {
        head = node->next;  // Deleting head - update head!
    }

    // Update next pointer
    if (node->next != nullptr) {
        node->next->prev = node->prev;
    } else {
        tail = node->prev;  // Deleting tail - update tail!
    }

    delete node;
}
```

**How to Prevent**: Always ask: "Am I modifying the first or last node?" If yes, update head/tail. Draw diagrams showing head/tail changes.

---

## Tree Errors

### Problem: Incorrect BST Property After Insertion

**Symptoms**:
- Inorder traversal doesn't give sorted sequence
- Search fails for recently inserted elements
- Tree structure looks wrong

**Why This Happens**: Inserting nodes without maintaining BST property (left < root < right).

**How to Fix**:

1. **Check insertion logic**:
```cpp
// BAD: Not comparing values correctly
TreeNode* insert(TreeNode* root, int value) {
    if (root == nullptr) {
        return new TreeNode(value);
    }

    // Wrong comparison - should use root->data
    if (value < root) {  // Comparing int to pointer!
        root->left = insert(root->left, value);
    }
    return root;
}

// GOOD: Compare with root->data
TreeNode* insert(TreeNode* root, int value) {
    if (root == nullptr) {
        return new TreeNode(value);
    }

    if (value < root->data) {
        root->left = insert(root->left, value);
    } else if (value > root->data) {
        root->right = insert(root->right, value);
    }
    // If equal, don't insert duplicate

    return root;
}
```

2. **Verify BST property**:
```cpp
bool isBST(TreeNode* root, int min, int max) {
    if (root == nullptr) return true;

    if (root->data <= min || root->data >= max) {
        return false;  // Violates BST property
    }

    return isBST(root->left, min, root->data) &&
           isBST(root->right, root->data, max);
}

// Call with: isBST(root, INT_MIN, INT_MAX)
```

3. **Verify with inorder traversal**:
```cpp
void inorder(TreeNode* root, vector<int>& result) {
    if (root == nullptr) return;
    inorder(root->left, result);
    result.push_back(root->data);
    inorder(root->right, result);
}

// Result should be sorted!
vector<int> values;
inorder(root, values);
// Check if sorted
for (int i = 1; i < values.size(); i++) {
    if (values[i] <= values[i-1]) {
        cout << "NOT A VALID BST!" << endl;
    }
}
```

**How to Prevent**: Test BST property after every insertion. Use inorder traversal to verify sorted sequence. Draw tree after insertions to visualize structure.

---

### Problem: BST Deletion Corrupts Tree

**Symptoms**:
- Tree structure broken after deletion
- Nodes unreachable
- Segfault during traversal
- Inorder no longer sorted

**Why This Happens**: BST deletion has three cases - deleting wrong case breaks tree structure.

**How to Fix**:

1. **Handle all three cases correctly**:
```cpp
TreeNode* deleteNode(TreeNode* root, int value) {
    if (root == nullptr) return nullptr;

    // Find node to delete
    if (value < root->data) {
        root->left = deleteNode(root->left, value);
    } else if (value > root->data) {
        root->right = deleteNode(root->right, value);
    } else {
        // Found node to delete

        // CASE 1: Leaf node (no children)
        if (root->left == nullptr && root->right == nullptr) {
            delete root;
            return nullptr;
        }

        // CASE 2: One child
        if (root->left == nullptr) {
            TreeNode* temp = root->right;
            delete root;
            return temp;  // Return child to parent
        }
        if (root->right == nullptr) {
            TreeNode* temp = root->left;
            delete root;
            return temp;  // Return child to parent
        }

        // CASE 3: Two children
        // Find inorder successor (min in right subtree)
        TreeNode* successor = findMin(root->right);
        root->data = successor->data;  // Replace with successor's data
        root->right = deleteNode(root->right, successor->data);  // Delete successor
    }

    return root;
}

TreeNode* findMin(TreeNode* root) {
    while (root->left != nullptr) {
        root = root->left;
    }
    return root;
}
```

2. **Common mistake - not returning updated subtree**:
```cpp
// BAD: Doesn't return updated subtree
void deleteNode(TreeNode* root, int value) {
    // ... deletion logic ...
    // Parent still points to old node!
}

// GOOD: Returns updated subtree
TreeNode* deleteNode(TreeNode* root, int value) {
    // ... deletion logic ...
    return root;  // Parent can update its pointer
}
```

**How to Prevent**: Test all three cases: delete leaf, delete node with one child, delete node with two children. Verify BST property after deletion. Draw diagrams for each case.

---

### Problem: Tree Memory Leak (Not Deleting All Nodes)

**Symptoms**:
- Valgrind reports memory leaks
- Memory usage grows with tree operations

**Why This Happens**: Tree destructor doesn't recursively delete all nodes.

**How to Fix**:

```cpp
// BAD: Only delete root
~BST() {
    delete root;  // Only deletes root, children leak!
}

// GOOD: Recursively delete all nodes (postorder)
~BST() {
    destroyTree(root);
}

void destroyTree(TreeNode* node) {
    if (node == nullptr) return;

    // Postorder: delete children before node
    destroyTree(node->left);   // Delete left subtree
    destroyTree(node->right);  // Delete right subtree
    delete node;               // Delete node itself
}
```

**Why Postorder**: Must delete children before deleting parent (otherwise lose pointers to children).

**How to Prevent**: Always use postorder traversal for tree deletion. Test with Valgrind.

---

## Recursion Issues

### Problem: Stack Overflow

**Symptoms**:
```
Segmentation fault (core dumped)
Stack overflow
```
Crashes on recursive algorithms, especially with deep recursion.

**Why This Happens**: Recursion too deep - exceeds call stack size.

**How to Fix**:

1. **Check base case**:
```cpp
// BAD: No base case!
int factorial(int n) {
    return n * factorial(n - 1);  // Infinite recursion!
}

// GOOD: Base case stops recursion
int factorial(int n) {
    if (n <= 1) return 1;  // Base case
    return n * factorial(n - 1);
}
```

2. **Check that recursive calls progress toward base case**:
```cpp
// BAD: Never reaches base case
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n);  // Always calls sum(n), never decreases!
}

// GOOD: Progresses toward base case
int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);  // Decreases n toward 0
}
```

3. **Convert to iterative for very deep recursion**:
```cpp
// Recursive - can overflow for large n
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

// Iterative - no stack overflow risk
int fibonacci(int n) {
    if (n <= 1) return n;

    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int c = a + b;
        a = b;
        b = c;
    }
    return b;
}
```

4. **Use memoization to reduce recursive depth**:
```cpp
map<int, int> memo;

int fibonacci(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n];  // Already calculated

    memo[n] = fibonacci(n-1) + fibonacci(n-2);
    return memo[n];
}
```

**How to Prevent**: Always check base case is reachable. Test with small inputs first. Consider iterative alternatives for deep recursion. Use debugger to trace call stack.

---

### Problem: Exponential Time Complexity (Naive Recursion)

**Symptoms**:
- Recursive function extremely slow
- Takes minutes for n=30, hours for n=40
- Timeouts on larger inputs

**Why This Happens**: Recalculating same subproblems many times (no memoization).

**How to Fix**:

1. **Add memoization (top-down DP)**:
```cpp
// BAD: Exponential O(2^n)
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
// fib(5) calls fib(4) and fib(3)
// fib(4) calls fib(3) and fib(2)
// fib(3) calculated TWICE!

// GOOD: Memoized O(n)
map<int, int> memo;

int fibonacci(int n) {
    if (n <= 1) return n;
    if (memo.count(n)) return memo[n];

    memo[n] = fibonacci(n-1) + fibonacci(n-2);
    return memo[n];
}
```

2. **Use bottom-up DP (tabulation)**:
```cpp
int fibonacci(int n) {
    if (n <= 1) return n;

    vector<int> dp(n+1);
    dp[0] = 0;
    dp[1] = 1;

    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}
```

**How to Prevent**: Identify overlapping subproblems. Use memoization or tabulation for dynamic programming problems.

---

## Graph Errors

### Problem: BFS/DFS Never Terminates

**Symptoms**:
- Traversal function hangs
- Never visits all nodes
- CPU usage 100%

**Why This Happens**: Not marking nodes as visited, leading to infinite loop in cyclic graphs.

**How to Fix**:

1. **Add visited tracking**:
```cpp
// BAD: No visited tracking
void BFS(int start) {
    queue<int> q;
    q.push(start);

    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        cout << vertex << " ";

        for (int neighbor : graph[vertex]) {
            q.push(neighbor);  // Can revisit nodes infinitely!
        }
    }
}

// GOOD: Track visited nodes
void BFS(int start) {
    vector<bool> visited(numVertices, false);
    queue<int> q;

    visited[start] = true;  // Mark start as visited
    q.push(start);

    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        cout << vertex << " ";

        for (int neighbor : graph[vertex]) {
            if (!visited[neighbor]) {  // Only visit unvisited
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}
```

2. **DFS visited tracking**:
```cpp
void DFS(int start) {
    vector<bool> visited(numVertices, false);
    DFSHelper(start, visited);
}

void DFSHelper(int vertex, vector<bool>& visited) {
    visited[vertex] = true;
    cout << vertex << " ";

    for (int neighbor : graph[vertex]) {
        if (!visited[neighbor]) {
            DFSHelper(neighbor, visited);
        }
    }
}
```

**How to Prevent**: Always use visited set/array for graph traversal. Test on graphs with cycles.

---

### Problem: Dijkstra's Gives Wrong Shortest Path

**Symptoms**:
- Shortest path distances incorrect
- Path to some nodes is longer than it should be

**Why This Happens**: Using wrong data structure (not min-heap), negative edge weights, or incorrect update logic.

**How to Fix**:

1. **Use priority queue (min-heap)**:
```cpp
// BAD: Using regular queue
queue<pair<int, int>> q;  // Doesn't pick minimum distance!

// GOOD: Use priority queue (min-heap)
priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
```

2. **Check for negative weights** (Dijkstra doesn't work):
```cpp
// If graph has negative edge weights, use Bellman-Ford instead
// Dijkstra assumes all weights are non-negative
```

3. **Update distances correctly**:
```cpp
// Check if new path is shorter
if (dist[u] + weight < dist[v]) {
    dist[v] = dist[u] + weight;
    pq.push({dist[v], v});
}
```

**How to Prevent**: Test on simple graphs with known shortest paths. Verify no negative weights. Use min-heap.

---

## Hash Table Issues

### Problem: Hash Function Causes Too Many Collisions

**Symptoms**:
- Hash table performance degraded (O(n) instead of O(1))
- All elements hash to same bucket
- Load factor calculation shows uneven distribution

**Why This Happens**: Poor hash function that doesn't distribute keys evenly.

**How to Fix**:

1. **Check hash function distribution**:
```cpp
// BAD: All strings hash to same value
int hash(string key) {
    return 0;  // Everything goes to bucket 0!
}

// BETTER: Use polynomial rolling hash
int hash(string key) {
    int hash = 0;
    for (char c : key) {
        hash = (hash * 31 + c) % TABLE_SIZE;
    }
    return hash;
}
```

2. **Use prime table size**:
```cpp
// BAD: Power of 2 size (only uses low bits of hash)
const int TABLE_SIZE = 128;

// GOOD: Prime number size (better distribution)
const int TABLE_SIZE = 127;
```

3. **Test distribution**:
```cpp
// Count elements per bucket
vector<int> bucketCounts(TABLE_SIZE, 0);
for (int i = 0; i < TABLE_SIZE; i++) {
    bucketCounts[i] = table[i].size();
}

// Ideally: all buckets have similar counts
// Bad: some buckets have 0, others have 100+
```

**How to Prevent**: Use tested hash functions (polynomial rolling hash for strings). Use prime table size. Test distribution on real data.

---

### Problem: Hash Table Never Resizes / Grows Too Slowly

**Symptoms**:
- Performance degrades as more elements added
- Load factor > 1.0
- Very long chains in chaining implementation

**Why This Happens**: Forgetting to resize when load factor exceeds threshold.

**How to Fix**:

1. **Check load factor after insertions**:
```cpp
void insert(int key, string value) {
    // ... insert logic ...

    // Check load factor
    float loadFactor = (float)numElements / TABLE_SIZE;
    if (loadFactor > 0.75) {
        resize();  // Double table size and rehash
    }
}
```

2. **Implement resize**:
```cpp
void resize() {
    int oldSize = TABLE_SIZE;
    TABLE_SIZE *= 2;  // Double size

    vector<list<pair<int, string>>> oldTable = table;
    table.clear();
    table.resize(TABLE_SIZE);

    // Rehash all elements
    for (int i = 0; i < oldSize; i++) {
        for (auto& pair : oldTable[i]) {
            insert(pair.first, pair.second);
        }
    }
}
```

**How to Prevent**: Implement resize threshold. Test with large datasets. Monitor load factor.

---

## Sorting and Searching Errors

### Problem: Binary Search Infinite Loop

**Symptoms**:
- Binary search never terminates
- Program hangs
- Loop counter goes very high

**Why This Happens**: Incorrect midpoint calculation or wrong loop condition.

**How to Fix**:

1. **Check midpoint calculation**:
```cpp
// BAD: Can overflow for large left + right
int mid = (left + right) / 2;

// GOOD: Avoids overflow
int mid = left + (right - left) / 2;
```

2. **Check loop condition**:
```cpp
// BAD: Can loop forever if not found
while (left < right) {  // Never terminates when left == right == target index
    // ...
}

// GOOD: Terminates correctly
while (left <= right) {  // <= allows checking when left == right
    // ...
}
```

3. **Check pointer updates**:
```cpp
// BAD: Doesn't update left/right
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    // Never updates left or right! Infinite loop!
}

// GOOD: Updates left/right
while (left <= right) {
    int mid = left + (right - left) / 2;
    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;   // Update left
    else right = mid - 1;                     // Update right
}
```

**How to Prevent**: Use standard binary search template. Test on small arrays. Add iteration counter for debugging.

---

### Problem: Merge Sort Doesn't Sort

**Symptoms**:
- Array not fully sorted after merge sort
- Some elements out of order

**Why This Happens**: Merge function has bug, or recursion doesn't cover all elements.

**How to Fix**:

1. **Check merge function carefully**:
```cpp
void merge(vector<int>& arr, int left, int mid, int right) {
    vector<int> L(arr.begin() + left, arr.begin() + mid + 1);
    vector<int> R(arr.begin() + mid + 1, arr.begin() + right + 1);

    int i = 0, j = 0, k = left;

    // Merge while both have elements
    while (i < L.size() && j < R.size()) {
        if (L[i] <= R[j]) {  // <= for stability
            arr[k++] = L[i++];
        } else {
            arr[k++] = R[j++];
        }
    }

    // Copy remaining elements (ESSENTIAL!)
    while (i < L.size()) arr[k++] = L[i++];
    while (j < R.size()) arr[k++] = R[j++];
}
```

2. **Check base case**:
```cpp
void mergeSort(vector<int>& arr, int left, int right) {
    if (left >= right) return;  // Base case: 0 or 1 element

    int mid = left + (right - left) / 2;
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
}
```

**How to Prevent**: Test on small arrays first. Print intermediate results. Verify base case.

---

### Problem: Quick Sort Stack Overflow

**Symptoms**:
- Quick sort crashes on large arrays
- Stack overflow error
- Segfault

**Why This Happens**: Bad pivot selection causes O(n) recursion depth (worst case).

**How to Fix**:

1. **Use median-of-three pivot**:
```cpp
int medianOfThree(vector<int>& arr, int low, int high) {
    int mid = low + (high - low) / 2;

    // Order: arr[low] <= arr[mid] <= arr[high]
    if (arr[mid] < arr[low]) swap(arr[low], arr[mid]);
    if (arr[high] < arr[low]) swap(arr[low], arr[high]);
    if (arr[mid] < arr[high]) swap(arr[mid], arr[high]);

    return arr[high];  // Return median as pivot
}
```

2. **Random pivot**:
```cpp
int randomPivot(vector<int>& arr, int low, int high) {
    int randomIndex = low + rand() % (high - low + 1);
    swap(arr[randomIndex], arr[high]);
    return arr[high];
}
```

3. **Tail recursion optimization** (recurse on smaller partition):
```cpp
void quickSort(vector<int>& arr, int low, int high) {
    while (low < high) {
        int pi = partition(arr, low, high);

        // Recurse on smaller partition
        if (pi - low < high - pi) {
            quickSort(arr, low, pi - 1);
            low = pi + 1;  // Tail call on larger partition
        } else {
            quickSort(arr, pi + 1, high);
            high = pi - 1;  // Tail call on larger partition
        }
    }
}
```

**How to Prevent**: Don't use first/last element as pivot on sorted data. Use randomization or median-of-three.

---

## Algorithm Complexity Issues

### Problem: Algorithm Too Slow / Timeout

**Symptoms**:
- Works on small inputs, times out on large inputs
- Takes minutes/hours for n=1000
- Online judge gives "Time Limit Exceeded"

**Why This Happens**: Using algorithm with wrong complexity - O(n²) when need O(n log n), or O(2^n) when need polynomial.

**How to Fix**:

1. **Identify current complexity**:
```cpp
// O(n²) - nested loops
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // ...
    }
}
```

2. **Replace with more efficient algorithm**:
```cpp
// Sorting problem

// BAD: Bubble sort O(n²)
void bubbleSort(vector<int>& arr) {
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n-1; j++) {
            if (arr[j] > arr[j+1]) swap(arr[j], arr[j+1]);
        }
    }
}

// GOOD: Merge sort O(n log n)
void mergeSort(vector<int>& arr, int left, int right) {
    // ... implementation ...
}

// BEST: Use library O(n log n)
sort(arr.begin(), arr.end());
```

3. **Use hash table instead of linear search**:
```cpp
// BAD: Linear search O(n) repeated n times = O(n²)
bool hasDuplicate(vector<int>& arr) {
    for (int i = 0; i < n; i++) {
        for (int j = i+1; j < n; j++) {
            if (arr[i] == arr[j]) return true;
        }
    }
    return false;
}

// GOOD: Hash table O(n)
bool hasDuplicate(vector<int>& arr) {
    unordered_set<int> seen;
    for (int num : arr) {
        if (seen.count(num)) return true;
        seen.insert(num);
    }
    return false;
}
```

**Common Complexity Targets**:
- n = 10: O(n!) is okay
- n = 100: O(n³) is okay
- n = 1,000: O(n²) is okay
- n = 100,000: O(n log n) is okay
- n = 1,000,000: O(n) is okay

**How to Prevent**: Analyze complexity before implementing. Know which algorithms for which problems. Use profiler to find bottlenecks.

---

## Compilation Errors

### Problem: "No matching function for call"

**Symptoms**:
```
error: no matching function for call to 'function(arg1, arg2)'
```

**Why This Happens**: Function signature doesn't match call - wrong number/types of arguments.

**How to Fix**:

1. **Check argument count**:
```cpp
// Function declaration
void insert(int value);

// BAD: Wrong number of arguments
insert(5, 10);  // Error! Function takes 1 arg, not 2

// GOOD: Correct arguments
insert(5);
```

2. **Check argument types**:
```cpp
// Function declaration
void process(string str);

// BAD: Wrong type
process(123);  // Error! int, not string

// GOOD: Correct type
process("123");  // Or process(to_string(123))
```

3. **Check const correctness**:
```cpp
// Function declaration
void print(const vector<int>& arr);

// BAD: Non-const object to const reference (actually this works)
vector<int> arr = {1, 2, 3};
print(arr);  // This is fine

// BAD: const object to non-const reference
void modify(vector<int>& arr);
const vector<int> arr = {1, 2, 3};
modify(arr);  // Error! Can't pass const to non-const reference
```

**How to Prevent**: Check function declaration. Use IDE autocomplete. Pay attention to const.

---

### Problem: "use of undeclared identifier"

**Symptoms**:
```
error: use of undeclared identifier 'variable'
error: 'Class' does not name a type
```

**Why This Happens**: Using variable/type before declaring it, or forgetting to include header.

**How to Fix**:

1. **Check variable is declared**:
```cpp
// BAD: Use before declaration
cout << value << endl;
int value = 5;  // Declared after use!

// GOOD: Declare before use
int value = 5;
cout << value << endl;
```

2. **Include necessary headers**:
```cpp
// BAD: Missing header
vector<int> arr;  // Error! vector not declared

// GOOD: Include header
#include <vector>
vector<int> arr;
```

3. **Forward declare or include class definitions**:
```cpp
// File: Node.h
class Node {
    int data;
    Node* next;
};

// File: LinkedList.h
#include "Node.h"  // Must include to use Node

class LinkedList {
    Node* head;  // Now Node is declared
};
```

**How to Prevent**: Declare before use. Include necessary headers. Check spelling.

---

## Runtime Errors

### Problem: "vector::_M_range_check" (out of bounds)

**Symptoms**:
```
terminate called after throwing an instance of 'std::out_of_range'
  what():  vector::_M_range_check: __n (which is 10) >= this->size() (which is 5)
```

**Why This Happens**: Accessing vector index that doesn't exist.

**How to Fix**:

1. **Check bounds before access**:
```cpp
// BAD: No bounds check
vector<int> arr = {1, 2, 3, 4, 5};
cout << arr[10];  // Out of bounds! Undefined behavior with []

// GOOD: Check bounds
if (index >= 0 && index < arr.size()) {
    cout << arr[index];
}

// BEST: Use .at() for automatic bounds checking
try {
    cout << arr.at(10);  // Throws exception
} catch (out_of_range& e) {
    cerr << "Index out of bounds!" << endl;
}
```

2. **Check loop bounds**:
```cpp
// BAD: Loop goes too far
for (int i = 0; i <= arr.size(); i++) {  // <= is wrong!
    cout << arr[i];  // Crashes on last iteration
}

// GOOD: Use < not <=
for (int i = 0; i < arr.size(); i++) {
    cout << arr[i];
}
```

**How to Prevent**: Always check bounds. Use range-based for loops when possible. Use .at() during development.

---

### Problem: Integer Overflow

**Symptoms**:
- Results become negative unexpectedly
- Large numbers wrap to small numbers
- Calculations give wrong answers

**Why This Happens**: Integer result exceeds type limits (32-bit int: -2^31 to 2^31-1).

**How to Fix**:

1. **Use long long for large numbers**:
```cpp
// BAD: Overflows int
int factorial(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;  // Overflows for n > 12
    }
    return result;
}

// GOOD: Use long long
long long factorial(int n) {
    long long result = 1;
    for (int i = 1; i <= n; i++) {
        result *= i;  // Can handle larger n
    }
    return result;
}
```

2. **Check for overflow before operation**:
```cpp
if (a > INT_MAX - b) {
    // a + b would overflow
}

if (a > INT_MAX / b) {
    // a * b would overflow
}
```

**How to Prevent**: Use appropriate types (long long for large numbers). Consider overflow in algorithm design.

---

## General Troubleshooting Strategy

1. **Read the error message carefully** - Last line usually says what's wrong
2. **Google the exact error** - Someone else has seen this
3. **Check your assumptions**:
   - Print variable values
   - Check sizes, indices, null pointers
   - Verify loop conditions
4. **Simplify until it works**:
   - Comment out code to isolate problem
   - Test with smaller inputs
   - Test edge cases separately
5. **Use debugging tools**:
   - gdb (C++)
   - Valgrind (memory issues)
   - Print statements (when debugger unavailable)
6. **Draw diagrams** - Visualize data structures
7. **Ask for help** - Bring: what you tried, error message, minimal code

---

## Emergency Debugging Commands

```bash
# Compile with all warnings and debug symbols
g++ -Wall -Wextra -g program.cpp -o program

# Run with gdb (debugger)
gdb ./program
(gdb) run
(gdb) bt        # Backtrace (where it crashed)
(gdb) print var # Print variable value

# Check for memory errors
valgrind --leak-check=full ./program

# Check for memory leaks
valgrind --leak-check=full --show-leak-kinds=all ./program

# Print variable in code
cout << "DEBUG: variable = " << variable << endl;

# Assert conditions in debug builds
#include <cassert>
assert(head != nullptr);  // Crash if false (debug builds only)
```

---

**Last Updated**: CSC-249 Spring 2026

Hit a problem not covered here? Let Drew know so we can add it.

Remember: Everyone gets stuck on pointers and recursion. That's normal. What matters is how you debug it.
