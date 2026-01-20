# CSC-249 Quick Reference Cards

Copy/paste code snippets for common data structures and algorithms in C++ and Python

---

## How to Use This Reference

**Quick Start**: Ctrl+F to find what you need, copy the code, adapt to your problem.

**Code Style**: All snippets use best practices and include comments explaining key concepts.

**Language Toggle**: Each major section provides both C++ and Python implementations - use what your project requires.

**Pro Tip**: Don't just copy/paste. Read the comments and understand why the code works.

**Assumptions**:
- C++ code uses C++17 or later
- Python code uses Python 3.8+
- Basic syntax knowledge assumed
- Focus is on data structures logic, not edge case handling (you add that!)

---

## Table of Contents

1. [Linked List](#linked-list)
2. [Stack](#stack)
3. [Queue](#queue)
4. [Binary Search Tree](#binary-search-tree)
5. [Hash Table](#hash-table)
6. [Heap](#heap)
7. [Graph](#graph)
8. [Sorting Algorithms](#sorting-algorithms)
9. [Search Algorithms](#search-algorithms)
10. [Tree Traversals](#tree-traversals)
11. [Common Patterns](#common-patterns)

---

## Linked List

### Singly-Linked List (C++)

```cpp
#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;

    // Constructor
    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() : head(nullptr) {}

    // Insert at front - O(1)
    void insertFront(int value) {
        Node* newNode = new Node(value);
        newNode->next = head;
        head = newNode;
    }

    // Insert at back - O(n)
    void insertBack(int value) {
        Node* newNode = new Node(value);

        if (head == nullptr) {
            head = newNode;
            return;
        }

        Node* current = head;
        while (current->next != nullptr) {
            current = current->next;
        }
        current->next = newNode;
    }

    // Delete node with value - O(n)
    void deleteValue(int value) {
        if (head == nullptr) return;

        // Special case: deleting head
        if (head->data == value) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        // Find node before the one to delete
        Node* current = head;
        while (current->next != nullptr && current->next->data != value) {
            current = current->next;
        }

        // If found, delete it
        if (current->next != nullptr) {
            Node* temp = current->next;
            current->next = current->next->next;
            delete temp;
        }
    }

    // Search for value - O(n)
    bool search(int value) {
        Node* current = head;
        while (current != nullptr) {
            if (current->data == value) return true;
            current = current->next;
        }
        return false;
    }

    // Print list - O(n)
    void print() {
        Node* current = head;
        while (current != nullptr) {
            cout << current->data << " -> ";
            current = current->next;
        }
        cout << "NULL" << endl;
    }

    // Destructor - free memory
    ~LinkedList() {
        Node* current = head;
        while (current != nullptr) {
            Node* next = current->next;
            delete current;
            current = next;
        }
    }
};
```

### Singly-Linked List (Python)

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # Insert at front - O(1)
    def insert_front(self, value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    # Insert at back - O(n)
    def insert_back(self, value):
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
            return

        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node

    # Delete node with value - O(n)
    def delete_value(self, value):
        if self.head is None:
            return

        # Special case: deleting head
        if self.head.data == value:
            self.head = self.head.next
            return

        # Find node before the one to delete
        current = self.head
        while current.next is not None and current.next.data != value:
            current = current.next

        # If found, delete it
        if current.next is not None:
            current.next = current.next.next

    # Search for value - O(n)
    def search(self, value):
        current = self.head
        while current is not None:
            if current.data == value:
                return True
            current = current.next
        return False

    # Print list - O(n)
    def print_list(self):
        current = self.head
        while current is not None:
            print(f"{current.data} -> ", end="")
            current = current.next
        print("NULL")
```

### Doubly-Linked List (C++)

```cpp
struct DNode {
    int data;
    DNode* next;
    DNode* prev;

    DNode(int val) : data(val), next(nullptr), prev(nullptr) {}
};

class DoublyLinkedList {
private:
    DNode* head;
    DNode* tail;

public:
    DoublyLinkedList() : head(nullptr), tail(nullptr) {}

    // Insert at front - O(1)
    void insertFront(int value) {
        DNode* newNode = new DNode(value);

        if (head == nullptr) {
            head = tail = newNode;
            return;
        }

        newNode->next = head;
        head->prev = newNode;
        head = newNode;
    }

    // Insert at back - O(1) with tail pointer!
    void insertBack(int value) {
        DNode* newNode = new DNode(value);

        if (tail == nullptr) {
            head = tail = newNode;
            return;
        }

        newNode->prev = tail;
        tail->next = newNode;
        tail = newNode;
    }

    // Delete node with value - O(n)
    void deleteValue(int value) {
        if (head == nullptr) return;

        DNode* current = head;

        // Find node to delete
        while (current != nullptr && current->data != value) {
            current = current->next;
        }

        if (current == nullptr) return; // Not found

        // Update prev pointer
        if (current->prev != nullptr) {
            current->prev->next = current->next;
        } else {
            head = current->next; // Deleting head
        }

        // Update next pointer
        if (current->next != nullptr) {
            current->next->prev = current->prev;
        } else {
            tail = current->prev; // Deleting tail
        }

        delete current;
    }

    // Print forward - O(n)
    void printForward() {
        DNode* current = head;
        while (current != nullptr) {
            cout << current->data << " <-> ";
            current = current->next;
        }
        cout << "NULL" << endl;
    }

    // Print backward - O(n)
    void printBackward() {
        DNode* current = tail;
        while (current != nullptr) {
            cout << current->data << " <-> ";
            current = current->prev;
        }
        cout << "NULL" << endl;
    }

    // Destructor
    ~DoublyLinkedList() {
        DNode* current = head;
        while (current != nullptr) {
            DNode* next = current->next;
            delete current;
            current = next;
        }
    }
};
```

---

## Stack

### Array-Based Stack (C++)

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

class Stack {
private:
    static const int MAX_SIZE = 100;
    int arr[MAX_SIZE];
    int top;

public:
    Stack() : top(-1) {}

    // Push element - O(1)
    void push(int value) {
        if (isFull()) {
            throw overflow_error("Stack overflow");
        }
        arr[++top] = value;
    }

    // Pop element - O(1)
    int pop() {
        if (isEmpty()) {
            throw underflow_error("Stack underflow");
        }
        return arr[top--];
    }

    // Peek top element - O(1)
    int peek() const {
        if (isEmpty()) {
            throw underflow_error("Stack is empty");
        }
        return arr[top];
    }

    // Check if empty - O(1)
    bool isEmpty() const {
        return top == -1;
    }

    // Check if full - O(1)
    bool isFull() const {
        return top == MAX_SIZE - 1;
    }

    // Get size - O(1)
    int size() const {
        return top + 1;
    }
};
```

### Linked List-Based Stack (C++)

```cpp
class StackNode {
public:
    int data;
    StackNode* next;

    StackNode(int val) : data(val), next(nullptr) {}
};

class Stack {
private:
    StackNode* top;
    int count;

public:
    Stack() : top(nullptr), count(0) {}

    // Push element - O(1)
    void push(int value) {
        StackNode* newNode = new StackNode(value);
        newNode->next = top;
        top = newNode;
        count++;
    }

    // Pop element - O(1)
    int pop() {
        if (isEmpty()) {
            throw underflow_error("Stack underflow");
        }

        StackNode* temp = top;
        int value = top->data;
        top = top->next;
        delete temp;
        count--;
        return value;
    }

    // Peek top element - O(1)
    int peek() const {
        if (isEmpty()) {
            throw underflow_error("Stack is empty");
        }
        return top->data;
    }

    // Check if empty - O(1)
    bool isEmpty() const {
        return top == nullptr;
    }

    // Get size - O(1)
    int size() const {
        return count;
    }

    // Destructor
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
};
```

### Stack (Python)

```python
class Stack:
    def __init__(self):
        self.items = []

    # Push element - O(1) amortized
    def push(self, value):
        self.items.append(value)

    # Pop element - O(1)
    def pop(self):
        if self.is_empty():
            raise IndexError("Stack underflow")
        return self.items.pop()

    # Peek top element - O(1)
    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.items) == 0

    # Get size - O(1)
    def size(self):
        return len(self.items)

    # String representation
    def __str__(self):
        return " -> ".join(map(str, reversed(self.items))) + " [TOP]"
```

---

## Queue

### Circular Array Queue (C++)

```cpp
class Queue {
private:
    static const int MAX_SIZE = 100;
    int arr[MAX_SIZE];
    int front;
    int rear;
    int count;

public:
    Queue() : front(0), rear(-1), count(0) {}

    // Enqueue element - O(1)
    void enqueue(int value) {
        if (isFull()) {
            throw overflow_error("Queue overflow");
        }

        rear = (rear + 1) % MAX_SIZE;
        arr[rear] = value;
        count++;
    }

    // Dequeue element - O(1)
    int dequeue() {
        if (isEmpty()) {
            throw underflow_error("Queue underflow");
        }

        int value = arr[front];
        front = (front + 1) % MAX_SIZE;
        count--;
        return value;
    }

    // Get front element - O(1)
    int getFront() const {
        if (isEmpty()) {
            throw underflow_error("Queue is empty");
        }
        return arr[front];
    }

    // Check if empty - O(1)
    bool isEmpty() const {
        return count == 0;
    }

    // Check if full - O(1)
    bool isFull() const {
        return count == MAX_SIZE;
    }

    // Get size - O(1)
    int size() const {
        return count;
    }
};
```

### Queue (Python)

```python
from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()

    # Enqueue element - O(1)
    def enqueue(self, value):
        self.items.append(value)

    # Dequeue element - O(1)
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue underflow")
        return self.items.popleft()

    # Get front element - O(1)
    def front(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[0]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.items) == 0

    # Get size - O(1)
    def size(self):
        return len(self.items)

    # String representation
    def __str__(self):
        return "FRONT -> " + " -> ".join(map(str, self.items)) + " <- REAR"
```

---

## Binary Search Tree

### BST (C++)

```cpp
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int val) : data(val), left(nullptr), right(nullptr) {}
};

class BST {
private:
    TreeNode* root;

    // Helper: Insert recursively
    TreeNode* insertHelper(TreeNode* node, int value) {
        if (node == nullptr) {
            return new TreeNode(value);
        }

        if (value < node->data) {
            node->left = insertHelper(node->left, value);
        } else if (value > node->data) {
            node->right = insertHelper(node->right, value);
        }
        // If equal, do nothing (no duplicates)

        return node;
    }

    // Helper: Search recursively
    bool searchHelper(TreeNode* node, int value) const {
        if (node == nullptr) return false;

        if (value == node->data) return true;
        if (value < node->data) return searchHelper(node->left, value);
        return searchHelper(node->right, value);
    }

    // Helper: Find minimum node in subtree
    TreeNode* findMin(TreeNode* node) const {
        while (node->left != nullptr) {
            node = node->left;
        }
        return node;
    }

    // Helper: Delete recursively
    TreeNode* deleteHelper(TreeNode* node, int value) {
        if (node == nullptr) return nullptr;

        if (value < node->data) {
            node->left = deleteHelper(node->left, value);
        } else if (value > node->data) {
            node->right = deleteHelper(node->right, value);
        } else {
            // Found node to delete

            // Case 1: Leaf node (no children)
            if (node->left == nullptr && node->right == nullptr) {
                delete node;
                return nullptr;
            }

            // Case 2: One child
            if (node->left == nullptr) {
                TreeNode* temp = node->right;
                delete node;
                return temp;
            }
            if (node->right == nullptr) {
                TreeNode* temp = node->left;
                delete node;
                return temp;
            }

            // Case 3: Two children
            // Find inorder successor (min in right subtree)
            TreeNode* successor = findMin(node->right);
            node->data = successor->data;
            node->right = deleteHelper(node->right, successor->data);
        }

        return node;
    }

    // Helper: Inorder traversal
    void inorderHelper(TreeNode* node) const {
        if (node == nullptr) return;
        inorderHelper(node->left);
        cout << node->data << " ";
        inorderHelper(node->right);
    }

    // Helper: Destructor cleanup
    void destroyTree(TreeNode* node) {
        if (node == nullptr) return;
        destroyTree(node->left);
        destroyTree(node->right);
        delete node;
    }

public:
    BST() : root(nullptr) {}

    // Insert value - O(h) where h is height
    void insert(int value) {
        root = insertHelper(root, value);
    }

    // Search for value - O(h)
    bool search(int value) const {
        return searchHelper(root, value);
    }

    // Delete value - O(h)
    void remove(int value) {
        root = deleteHelper(root, value);
    }

    // Print inorder (sorted) - O(n)
    void inorder() const {
        inorderHelper(root);
        cout << endl;
    }

    // Destructor
    ~BST() {
        destroyTree(root);
    }
};
```

### BST (Python)

```python
class TreeNode:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    # Insert value - O(h)
    def insert(self, value):
        self.root = self._insert_helper(self.root, value)

    def _insert_helper(self, node, value):
        if node is None:
            return TreeNode(value)

        if value < node.data:
            node.left = self._insert_helper(node.left, value)
        elif value > node.data:
            node.right = self._insert_helper(node.right, value)
        # If equal, do nothing (no duplicates)

        return node

    # Search for value - O(h)
    def search(self, value):
        return self._search_helper(self.root, value)

    def _search_helper(self, node, value):
        if node is None:
            return False

        if value == node.data:
            return True
        if value < node.data:
            return self._search_helper(node.left, value)
        return self._search_helper(node.right, value)

    # Delete value - O(h)
    def delete(self, value):
        self.root = self._delete_helper(self.root, value)

    def _delete_helper(self, node, value):
        if node is None:
            return None

        if value < node.data:
            node.left = self._delete_helper(node.left, value)
        elif value > node.data:
            node.right = self._delete_helper(node.right, value)
        else:
            # Found node to delete

            # Case 1: Leaf node
            if node.left is None and node.right is None:
                return None

            # Case 2: One child
            if node.left is None:
                return node.right
            if node.right is None:
                return node.left

            # Case 3: Two children
            # Find inorder successor (min in right subtree)
            successor = self._find_min(node.right)
            node.data = successor.data
            node.right = self._delete_helper(node.right, successor.data)

        return node

    def _find_min(self, node):
        while node.left is not None:
            node = node.left
        return node

    # Print inorder (sorted) - O(n)
    def inorder(self):
        self._inorder_helper(self.root)
        print()

    def _inorder_helper(self, node):
        if node is None:
            return
        self._inorder_helper(node.left)
        print(node.data, end=" ")
        self._inorder_helper(node.right)
```

---

## Hash Table

### Hash Table with Separate Chaining (C++)

```cpp
#include <iostream>
#include <list>
#include <vector>
using namespace std;

class HashTable {
private:
    static const int TABLE_SIZE = 10;
    vector<list<pair<int, string>>> table;

    // Hash function
    int hashFunction(int key) const {
        return key % TABLE_SIZE;
    }

public:
    HashTable() : table(TABLE_SIZE) {}

    // Insert key-value pair - O(1) average
    void insert(int key, const string& value) {
        int index = hashFunction(key);

        // Check if key already exists, update if so
        for (auto& pair : table[index]) {
            if (pair.first == key) {
                pair.second = value;
                return;
            }
        }

        // Key doesn't exist, add new pair
        table[index].push_back({key, value});
    }

    // Get value by key - O(1) average
    string get(int key) const {
        int index = hashFunction(key);

        for (const auto& pair : table[index]) {
            if (pair.first == key) {
                return pair.second;
            }
        }

        throw runtime_error("Key not found");
    }

    // Delete key - O(1) average
    void remove(int key) {
        int index = hashFunction(key);

        table[index].remove_if([key](const pair<int, string>& p) {
            return p.first == key;
        });
    }

    // Check if key exists - O(1) average
    bool contains(int key) const {
        int index = hashFunction(key);

        for (const auto& pair : table[index]) {
            if (pair.first == key) {
                return true;
            }
        }
        return false;
    }

    // Print hash table
    void print() const {
        for (int i = 0; i < TABLE_SIZE; i++) {
            cout << "Bucket " << i << ": ";
            for (const auto& pair : table[i]) {
                cout << "(" << pair.first << ", " << pair.second << ") -> ";
            }
            cout << "NULL" << endl;
        }
    }
};
```

### Hash Table (Python)

```python
class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]  # List of lists (chaining)

    # Hash function
    def _hash(self, key):
        return hash(key) % self.size

    # Insert key-value pair - O(1) average
    def insert(self, key, value):
        index = self._hash(key)

        # Check if key exists, update if so
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return

        # Key doesn't exist, add new pair
        self.table[index].append((key, value))

    # Get value by key - O(1) average
    def get(self, key):
        index = self._hash(key)

        for k, v in self.table[index]:
            if k == key:
                return v

        raise KeyError(f"Key {key} not found")

    # Delete key - O(1) average
    def delete(self, key):
        index = self._hash(key)

        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return

        raise KeyError(f"Key {key} not found")

    # Check if key exists - O(1) average
    def contains(self, key):
        index = self._hash(key)

        for k, v in self.table[index]:
            if k == key:
                return True
        return False

    # Print hash table
    def display(self):
        for i, bucket in enumerate(self.table):
            print(f"Bucket {i}: {bucket}")
```

---

## Heap

### Min Heap (C++)

```cpp
#include <vector>
#include <stdexcept>
using namespace std;

class MinHeap {
private:
    vector<int> heap;

    // Get parent index
    int parent(int i) const { return (i - 1) / 2; }

    // Get left child index
    int leftChild(int i) const { return 2 * i + 1; }

    // Get right child index
    int rightChild(int i) const { return 2 * i + 2; }

    // Bubble up to maintain heap property
    void heapifyUp(int index) {
        while (index > 0 && heap[index] < heap[parent(index)]) {
            swap(heap[index], heap[parent(index)]);
            index = parent(index);
        }
    }

    // Bubble down to maintain heap property
    void heapifyDown(int index) {
        int minIndex = index;
        int left = leftChild(index);
        int right = rightChild(index);

        if (left < heap.size() && heap[left] < heap[minIndex]) {
            minIndex = left;
        }

        if (right < heap.size() && heap[right] < heap[minIndex]) {
            minIndex = right;
        }

        if (minIndex != index) {
            swap(heap[index], heap[minIndex]);
            heapifyDown(minIndex);
        }
    }

public:
    // Insert element - O(log n)
    void insert(int value) {
        heap.push_back(value);
        heapifyUp(heap.size() - 1);
    }

    // Extract minimum - O(log n)
    int extractMin() {
        if (heap.empty()) {
            throw underflow_error("Heap is empty");
        }

        int min = heap[0];

        // Move last element to root
        heap[0] = heap.back();
        heap.pop_back();

        // Restore heap property
        if (!heap.empty()) {
            heapifyDown(0);
        }

        return min;
    }

    // Peek minimum - O(1)
    int getMin() const {
        if (heap.empty()) {
            throw underflow_error("Heap is empty");
        }
        return heap[0];
    }

    // Check if empty - O(1)
    bool isEmpty() const {
        return heap.empty();
    }

    // Get size - O(1)
    int size() const {
        return heap.size();
    }
};
```

### Min Heap (Python)

```python
import heapq

class MinHeap:
    def __init__(self):
        self.heap = []

    # Insert element - O(log n)
    def insert(self, value):
        heapq.heappush(self.heap, value)

    # Extract minimum - O(log n)
    def extract_min(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        return heapq.heappop(self.heap)

    # Peek minimum - O(1)
    def get_min(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        return self.heap[0]

    # Check if empty - O(1)
    def is_empty(self):
        return len(self.heap) == 0

    # Get size - O(1)
    def size(self):
        return len(self.heap)

# Note: For max heap in Python, negate values
class MaxHeap:
    def __init__(self):
        self.heap = []

    def insert(self, value):
        heapq.heappush(self.heap, -value)  # Negate for max heap

    def extract_max(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        return -heapq.heappop(self.heap)  # Negate back

    def get_max(self):
        if not self.heap:
            raise IndexError("Heap is empty")
        return -self.heap[0]  # Negate back
```

---

## Graph

### Graph with Adjacency List (C++)

```cpp
#include <vector>
#include <list>
#include <queue>
#include <stack>
#include <iostream>
using namespace std;

class Graph {
private:
    int numVertices;
    vector<list<int>> adjList;

public:
    Graph(int vertices) : numVertices(vertices), adjList(vertices) {}

    // Add edge - O(1)
    void addEdge(int src, int dest) {
        adjList[src].push_back(dest);
        // For undirected graph, add:
        // adjList[dest].push_back(src);
    }

    // BFS traversal - O(V + E)
    void BFS(int start) {
        vector<bool> visited(numVertices, false);
        queue<int> q;

        visited[start] = true;
        q.push(start);

        while (!q.empty()) {
            int vertex = q.front();
            q.pop();
            cout << vertex << " ";

            for (int neighbor : adjList[vertex]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.push(neighbor);
                }
            }
        }
        cout << endl;
    }

    // DFS traversal (iterative) - O(V + E)
    void DFS(int start) {
        vector<bool> visited(numVertices, false);
        stack<int> s;

        s.push(start);

        while (!s.empty()) {
            int vertex = s.top();
            s.pop();

            if (!visited[vertex]) {
                cout << vertex << " ";
                visited[vertex] = true;

                // Push neighbors (in reverse order for same traversal as recursive)
                for (auto it = adjList[vertex].rbegin(); it != adjList[vertex].rend(); ++it) {
                    if (!visited[*it]) {
                        s.push(*it);
                    }
                }
            }
        }
        cout << endl;
    }

    // DFS recursive helper
    void DFSRecursive(int start) {
        vector<bool> visited(numVertices, false);
        DFSHelper(start, visited);
        cout << endl;
    }

private:
    void DFSHelper(int vertex, vector<bool>& visited) {
        visited[vertex] = true;
        cout << vertex << " ";

        for (int neighbor : adjList[vertex]) {
            if (!visited[neighbor]) {
                DFSHelper(neighbor, visited);
            }
        }
    }
};
```

### Graph (Python)

```python
from collections import deque, defaultdict

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)

    # Add edge - O(1)
    def add_edge(self, src, dest):
        self.graph[src].append(dest)
        # For undirected graph, add:
        # self.graph[dest].append(src)

    # BFS traversal - O(V + E)
    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)

        while queue:
            vertex = queue.popleft()
            print(vertex, end=" ")

            for neighbor in self.graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        print()

    # DFS traversal (recursive) - O(V + E)
    def dfs(self, start, visited=None):
        if visited is None:
            visited = set()

        visited.add(start)
        print(start, end=" ")

        for neighbor in self.graph[start]:
            if neighbor not in visited:
                self.dfs(neighbor, visited)

    # DFS iterative - O(V + E)
    def dfs_iterative(self, start):
        visited = set()
        stack = [start]

        while stack:
            vertex = stack.pop()

            if vertex not in visited:
                print(vertex, end=" ")
                visited.add(vertex)

                # Add neighbors in reverse order for same traversal as recursive
                for neighbor in reversed(self.graph[vertex]):
                    if neighbor not in visited:
                        stack.append(neighbor)

        print()
```

---

## Sorting Algorithms

### Merge Sort (C++)

```cpp
void merge(vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    // Create temp arrays
    vector<int> L(n1), R(n2);

    // Copy data
    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    // Merge back
    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

### Quick Sort (C++)

```cpp
int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }

    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

### Sorting Algorithms (Python)

```python
# Merge Sort
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Quick Sort
def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

# Heap Sort
def heap_sort(arr):
    import heapq
    heapq.heapify(arr)  # Build heap in-place
    return [heapq.heappop(arr) for _ in range(len(arr))]
```

---

## Search Algorithms

### Binary Search (C++)

```cpp
// Iterative binary search
int binarySearch(const vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Not found
}

// Recursive binary search
int binarySearchRecursive(const vector<int>& arr, int target, int left, int right) {
    if (left > right) {
        return -1;
    }

    int mid = left + (right - left) / 2;

    if (arr[mid] == target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}
```

### Binary Search (Python)

```python
# Iterative
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Not found

# Recursive
def binary_search_recursive(arr, target, left=0, right=None):
    if right is None:
        right = len(arr) - 1

    if left > right:
        return -1

    mid = left + (right - left) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, right)
    else:
        return binary_search_recursive(arr, target, left, mid - 1)
```

---

## Tree Traversals

### All Traversals (C++)

```cpp
// Assuming TreeNode struct from BST section

// Inorder: Left, Root, Right (BST → sorted)
void inorder(TreeNode* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

// Preorder: Root, Left, Right
void preorder(TreeNode* root) {
    if (root == nullptr) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

// Postorder: Left, Right, Root (for deletion)
void postorder(TreeNode* root) {
    if (root == nullptr) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

// Level-order (BFS)
void levelOrder(TreeNode* root) {
    if (root == nullptr) return;

    queue<TreeNode*> q;
    q.push(root);

    while (!q.empty()) {
        TreeNode* node = q.front();
        q.pop();

        cout << node->data << " ";

        if (node->left != nullptr) q.push(node->left);
        if (node->right != nullptr) q.push(node->right);
    }
}
```

### All Traversals (Python)

```python
from collections import deque

# Inorder: Left, Root, Right
def inorder(root):
    if root is None:
        return
    inorder(root.left)
    print(root.data, end=" ")
    inorder(root.right)

# Preorder: Root, Left, Right
def preorder(root):
    if root is None:
        return
    print(root.data, end=" ")
    preorder(root.left)
    preorder(root.right)

# Postorder: Left, Right, Root
def postorder(root):
    if root is None:
        return
    postorder(root.left)
    postorder(root.right)
    print(root.data, end=" ")

# Level-order (BFS)
def level_order(root):
    if root is None:
        return

    queue = deque([root])

    while queue:
        node = queue.popleft()
        print(node.data, end=" ")

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
```

---

## Common Patterns

### Reverse a Linked List (C++)

```cpp
Node* reverse(Node* head) {
    Node* prev = nullptr;
    Node* current = head;
    Node* next = nullptr;

    while (current != nullptr) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    return prev; // New head
}
```

### Find Middle of Linked List (C++)

```cpp
Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;
    }

    return slow; // Middle node
}
```

### Detect Cycle in Linked List (C++)

```cpp
bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast != nullptr && fast->next != nullptr) {
        slow = slow->next;
        fast = fast->next->next;

        if (slow == fast) {
            return true; // Cycle detected
        }
    }

    return false; // No cycle
}
```

### Common Patterns (Python)

```python
# Reverse linked list
def reverse_list(head):
    prev = None
    current = head

    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node

    return prev  # New head

# Find middle
def find_middle(head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    return slow  # Middle node

# Detect cycle
def has_cycle(head):
    slow = fast = head

    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:
            return True  # Cycle detected

    return False  # No cycle
```

---

## Dijkstra's Algorithm (Shortest Path)

### Dijkstra (C++)

```cpp
#include <vector>
#include <queue>
#include <limits>
using namespace std;

const int INF = numeric_limits<int>::max();

vector<int> dijkstra(int source, const vector<vector<pair<int, int>>>& graph) {
    int n = graph.size();
    vector<int> dist(n, INF);
    dist[source] = 0;

    // Min heap: (distance, vertex)
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, source});

    while (!pq.empty()) {
        auto [d, u] = pq.top();
        pq.pop();

        if (d > dist[u]) continue;  // Already processed with shorter distance

        for (auto [v, weight] : graph[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }

    return dist;
}
```

### Dijkstra (Python)

```python
import heapq

def dijkstra(graph, source):
    dist = {node: float('inf') for node in graph}
    dist[source] = 0

    pq = [(0, source)]  # (distance, vertex)

    while pq:
        d, u = heapq.heappop(pq)

        if d > dist[u]:
            continue  # Already processed

        for v, weight in graph[u]:
            if dist[u] + weight < dist[v]:
                dist[v] = dist[u] + weight
                heapq.heappush(pq, (dist[v], v))

    return dist
```

---

## Tips for Using Quick Reference Cards

1. **Copy, don't memorize**: Understanding > memorization
2. **Modify for your needs**: These are templates - add edge cases, error handling
3. **Test before using**: Run code snippets to verify they work in your environment
4. **Read the comments**: They explain WHY, not just WHAT
5. **Combine patterns**: Mix and match to solve complex problems
6. **Check complexity**: Know the Big O of operations you're using

---

**Last Updated**: CSC-249 Spring 2026

Found an error or want to add common operation? Let Drew know.
