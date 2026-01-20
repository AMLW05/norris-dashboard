# Module 4 Activity: Linked List Debugging Session - Pointers, Memory, and Sprint Work

**Duration**: 90 minutes
**Format**: Pair programming with debugging challenges
**Materials Needed**:
- Working C++/Python development environment
- Debugger (gdb, lldb, or VS Code debugger for C++ / Python debugger)
- Memory visualization tool (optional: Python Tutor, C++ Insights)
- Whiteboard or paper for drawing pointer diagrams
- Sprint 1 planning materials (from PM integration)

**Learning Objectives**:
- Implement node-based linked lists from scratch
- Debug pointer/reference errors through systematic investigation
- Visualize memory and pointer relationships
- Understand difference between array-based and node-based structures
- Practice sprint planning for data structure implementation
- Apply "build, break, fix" methodology to learn deeply

---

## Overview

**Welcome to Sprint 1!** This is your first complete 2-week sprint cycle. You'll plan, build, test, and retrospect—all while implementing one of the foundational data structures: the Linked List.

But today isn't about perfect code. It's about **debugging**. Because the best way to understand pointers is to break them, then fix them.

You're going to work with intentionally broken linked list code. Your job: find the bugs, fix them, understand why they happened, and document what you learned.

**By the end of this session, you'll:**
- Understand how nodes and pointers create linked structures
- Debug common pointer errors (null derefs, memory leaks, dangling pointers)
- Implement insert, delete, and traversal operations
- Visualize memory layout of linked structures
- Plan Sprint 1 work for your linked list project

**This is hands-on debugging. Expect errors. Embrace them.**

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Pair up**: Find a partner. You'll be pair programming.
   - **Driver**: Types the code
   - **Navigator**: Reads ahead, spots errors, thinks strategically
   - **Switch roles every 20 minutes**

2. **Pull broken code**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b yourname-module04-sprint1
   ```

3. **Sprint 1 kickoff**:
   Create GitHub Issue:
   ```
   Title: Sprint 1: Linked List Implementation

   Description:
   As a data structures student, I need to implement a fully functional
   singly linked list to understand node-based data structures.

   Acceptance Criteria:
   - [ ] Node class with data and next pointer
   - [ ] LinkedList class with insert, delete, search, display operations
   - [ ] All operations handle edge cases (empty list, single node)
   - [ ] Memory properly managed (no leaks)
   - [ ] Test cases demonstrate all functionality
   - [ ] Code documented with comments

   Sprint Goal: Working linked list with all core operations

   Story Points: 8
   ```

4. **Open debugging tools**:
   - C++: Learn gdb/lldb basics or use VS Code debugger
   - Python: Use built-in debugger or IDE debugging features

---

## Part 1: The Broken Append Function (20 minutes)

### Instructions

**Step 1: Start with broken code**

**C++ Version**:
```cpp
#include <iostream>

struct Node {
    int data;
    Node* next;

    Node(int val) : data(val), next(nullptr) {}
};

class LinkedList {
private:
    Node* head;

public:
    LinkedList() : head(nullptr) {}

    // BUG: This append function is broken!
    void append(int value) {
        Node* newNode = new Node(value);

        if (head == nullptr) {
            head = newNode;
        } else {
            Node* current = head;
            while (current->next != nullptr) {
                current = current->next;
            }
            // BUG IS HERE: Missing code!
        }
    }

    void display() {
        Node* current = head;
        while (current != nullptr) {
            std::cout << current->data << " -> ";
            current = current->next;
        }
        std::cout << "NULL" << std::endl;
    }
};

int main() {
    LinkedList list;
    list.append(10);
    list.append(20);
    list.append(30);
    list.display();  // Should show: 10 -> 20 -> 30 -> NULL

    return 0;
}
```

**Python Version**:
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    # BUG: This append function is broken!
    def append(self, value):
        new_node = Node(value)

        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next is not None:
                current = current.next
            # BUG IS HERE: Missing code!

    def display(self):
        current = self.head
        while current is not None:
            print(current.data, end=" -> ")
            current = current.next
        print("NULL")

# Test
list = LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.display()  # Should show: 10 -> 20 -> 30 -> NULL
```

**Step 2: Run the broken code**

What happens?
```
Expected output: 10 -> 20 -> 30 -> NULL
Actual output: _____________________

What's wrong? [Your hypothesis]
```

**Step 3: Debug systematically**

**Add print statements** (C++):
```cpp
void append(int value) {
    std::cout << "Appending: " << value << std::endl;
    Node* newNode = new Node(value);

    if (head == nullptr) {
        std::cout << "List was empty, setting head" << std::endl;
        head = newNode;
    } else {
        Node* current = head;
        std::cout << "Traversing to end..." << std::endl;
        while (current->next != nullptr) {
            std::cout << "At node: " << current->data << std::endl;
            current = current->next;
        }
        std::cout << "Reached last node: " << current->data << std::endl;
        // What needs to happen here?
    }
}
```

**Step 4: Visualize the problem**

Draw on whiteboard/paper:
```
Before append(20):
head -> [10 | next] -> NULL

After finding last node:
current -> [10 | next] -> NULL
newNode -> [20 | next] -> NULL

What line connects them?
```

**Step 5: Fix the bug**

Add the missing line:
```cpp
current->next = newNode;  // C++
```
```python
current.next = new_node  # Python
```

**Step 6: Document what you learned**

In comments:
```
BUG 1: Missing pointer connection in append()
SYMPTOM: Only first node appears in list
CAUSE: New node created but never linked to last node
FIX: Added current->next = newNode after while loop
LESSON: Creating a node doesn't automatically connect it to the list!
```

### Expected Output

- Bug identified: missing pointer assignment
- Understanding that memory allocation ≠ pointer connection
- Working append function
- Documentation of debugging process

---

## Part 2: The Segmentation Fault Mystery (20 minutes)

### Instructions

**Step 1: New bug to debug**

```cpp
// BUG: This delete function causes segmentation fault!
void deleteNode(int value) {
    if (head == nullptr) return;

    // Special case: deleting head
    if (head->data == value) {
        head = head->next;
        return;
    }

    Node* current = head;
    while (current->next->data != value) {  // BUG LINE!
        current = current->next;
    }

    Node* temp = current->next;
    current->next = current->next->next;
    delete temp;  // C++ only
}
```

**Step 2: Test the broken code**

```cpp
LinkedList list;
list.append(10);
list.append(20);
list.append(30);
list.deleteNode(40);  // Try to delete value not in list
```

**What happens?**
```
Expected: Nothing (value not found)
Actual: SEGMENTATION FAULT / CRASH

Why did it crash? [Your hypothesis]
```

**Step 3: Use debugger**

**C++ with gdb**:
```bash
g++ -g linked_list.cpp -o linked_list
gdb ./linked_list

(gdb) run
# When it crashes:
(gdb) backtrace
(gdb) print current
(gdb) print current->next
```

**Python**:
```python
import pdb

def deleteNode(self, value):
    pdb.set_trace()  # Debugger will pause here
    # Step through with 'n', print variables with 'p current'
```

**Step 4: Identify the problem**

```
The crash happens in the line: while (current->next->data != value)

Why?
[Hint: What if we reach the end of the list and current->next is NULL?]

Accessing current->next->data when current->next is NULL causes:
___________
```

**Step 5: Fix with null check**

```cpp
void deleteNode(int value) {
    if (head == nullptr) return;

    if (head->data == value) {
        Node* temp = head;
        head = head->next;
        delete temp;  // C++ only - prevent memory leak!
        return;
    }

    Node* current = head;
    // FIX: Check both conditions!
    while (current->next != nullptr && current->next->data != value) {
        current = current->next;
    }

    // FIX: Verify node was found before deleting
    if (current->next == nullptr) {
        std::cout << "Value " << value << " not found" << std::endl;
        return;
    }

    Node* temp = current->next;
    current->next = current->next->next;
    delete temp;
}
```

**Step 6: Document**

```
BUG 2: Null pointer dereference in deleteNode()
SYMPTOM: Segmentation fault when deleting non-existent value
CAUSE: Accessed current->next->data without checking if current->next is NULL
FIX: Added null check in while condition
LESSON: Always verify pointer is not null before dereferencing!
```

### Expected Output

- Understanding of null pointer dereference
- Proper use of debugger to identify crash location
- Fixed delete function with null checks
- Defensive programming mindset

---

## Part 3: Memory Leak Detective (20 minutes)

### Instructions

**Step 1: Detect memory leaks**

**C++ students**: Use valgrind or similar tool:
```bash
g++ -g linked_list.cpp -o linked_list
valgrind --leak-check=full ./linked_list
```

**Python students**: Python has automatic garbage collection, but understand the concept:
```python
# In C++, this would leak memory:
def clear_list_BAD(self):
    self.head = None  # Orphans all nodes!

# Proper version:
def clear_list_GOOD(self):
    while self.head is not None:
        temp = self.head
        self.head = self.head.next
        # In C++: delete temp
```

**Step 2: Implement destructor/cleanup**

**C++**:
```cpp
class LinkedList {
public:
    // Destructor: called when LinkedList object is destroyed
    ~LinkedList() {
        Node* current = head;
        while (current != nullptr) {
            Node* next = current->next;
            delete current;  // Free memory
            current = next;
        }
        std::cout << "All nodes deleted, memory freed" << std::endl;
    }
};
```

**Step 3: Test memory management**

```cpp
int main() {
    {  // Scope block
        LinkedList list;
        list.append(10);
        list.append(20);
        list.append(30);
        list.display();
        // Destructor automatically called when list goes out of scope
    }
    std::cout << "List destroyed, no memory leaks!" << std::endl;
    return 0;
}
```

**Step 4: Document memory management**

```
MEMORY MANAGEMENT RULES:
1. Every 'new' must have a matching 'delete'
2. Destructor must free all dynamically allocated memory
3. Delete operations must free the deleted node
4. Setting head = nullptr without freeing nodes causes memory leak

Best practice: Use smart pointers (std::unique_ptr, std::shared_ptr)
in modern C++ to automate memory management!
```

### Expected Output

- Understanding of memory leaks
- Proper destructor implementation (C++)
- Recognition of memory management responsibility
- Testing with valgrind or similar tools

---

## Part 4: Complete Implementation Challenge (30 minutes)

### Instructions

Now implement the full linked list with all operations:

**Required Operations**:

1. **insertAtBeginning(value)**: Add node at front (O(1))
2. **insertAtEnd(value)**: Add node at end (O(n))
3. **insertAtPosition(value, position)**: Insert at specific index
4. **deleteByValue(value)**: Remove first occurrence
5. **deleteAtPosition(position)**: Remove at specific index
6. **search(value)**: Return true if found
7. **reverse()**: Reverse the entire list
8. **size()**: Return number of nodes
9. **isEmpty()**: Check if list is empty

**Step 1: Plan your implementation order**

```
Sprint Task Breakdown:
1. [ ] insertAtBeginning (easiest, do first)
2. [ ] search (simple traversal)
3. [ ] size (count nodes)
4. [ ] isEmpty (trivial)
5. [ ] deleteByValue (use what you debugged earlier)
6. [ ] insertAtPosition (more complex)
7. [ ] deleteAtPosition (complex)
8. [ ] reverse (challenging, do last)

Estimated time per task: _____ minutes each
```

**Step 2: Implement with test-driven approach**

For each operation:
1. Write test cases first
2. Implement the function
3. Run tests
4. Debug if needed
5. Move to next operation

**Example test cases**:
```cpp
int main() {
    LinkedList list;

    // Test insertAtBeginning
    list.insertAtBeginning(10);
    list.insertAtBeginning(5);
    list.display();  // Should show: 5 -> 10 -> NULL

    // Test search
    assert(list.search(5) == true);
    assert(list.search(100) == false);

    // Test size
    assert(list.size() == 2);

    // Test reverse
    list.reverse();
    list.display();  // Should show: 10 -> 5 -> NULL

    std::cout << "All tests passed!" << std::endl;
    return 0;
}
```

**Step 3: Implement reverse() - the challenge**

```
Hint for reverse():
- You need three pointers: previous, current, next
- Traverse the list, flipping next pointers as you go

Draw it first:
Before: head -> [1] -> [2] -> [3] -> NULL
After:  head -> [3] -> [2] -> [1] -> NULL

What pointer changes are needed at each step?
```

**Step 4: Use AI strategically**

Document in prompts.txt:
```
Prompt: How do I reverse a singly linked list? I understand I need
to flip pointers, but I'm not sure how to do it without losing
references to nodes.

[Document AI response and your implementation]

Prompt: My reverse function works but seems complex. Can you help me
understand what each pointer (prev, current, next) is doing at each step?

[Document explanation]
```

### Expected Output

- All 9 operations implemented correctly
- Comprehensive test cases
- Working reverse function (most challenging)
- Understanding of pointer manipulation
- Documented learning process

---

## Wrap-up & Sprint Retrospective (10 minutes)

### Discussion Questions

**1. Pointers vs References**: What's the difference between array-based (vector/list) and node-based (linked list) structures?
   - Memory layout?
   - Access time?
   - Insertion/deletion efficiency?

**2. Common Pointer Bugs**: What were the top 3 bugs you encountered?
   - Null pointer dereference?
   - Memory leaks?
   - Dangling pointers?
   - Lost references?

**3. Debugging Mindset**: How did systematic debugging (print statements, debugger, visualization) help?

**4. Sprint 1 Planning**: Looking at your task breakdown, were your estimates accurate? What took longer than expected?

### Sprint 1 Retrospective

**What went well?**
```
[Your answer]
```

**What was challenging?**
```
[Your answer]
```

**What will you do differently in Sprint 2?**
```
[Your answer]
```

### Exit Ticket

**Submit via Canvas**:

```
1. Upload your complete LinkedList implementation with test cases

2. Document the 3 most important bugs you fixed:
   Bug 1: [Description, cause, fix]
   Bug 2: [Description, cause, fix]
   Bug 3: [Description, cause, fix]

3. Draw (or describe) the memory layout of a linked list with 3 nodes

4. On a scale of 1-5, how confident are you with:
   - Understanding pointers/references: ___
   - Debugging pointer errors: ___
   - Implementing linked list operations: ___
   - Sprint planning and estimation: ___

5. What's one "aha!" moment you had about pointers today?
```

---

## Extension Challenges (Optional)

### Challenge 1: Doubly Linked List
Add `prev` pointer to each node. Implement bidirectional traversal.

### Challenge 2: Circular Linked List
Make the last node point back to head. Detect cycles.

### Challenge 3: Linked List-Based Stack
Implement Stack ADT using linked list instead of array.

### Challenge 4: Detect Loop
Implement Floyd's cycle detection algorithm (tortoise and hare).

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Pairing, sprint kickoff, setup
- **10-30 min**: Broken append debugging
- **30-50 min**: Segfault mystery
- **50-70 min**: Memory leak detection
- **70-100 min**: Full implementation
- **100-110 min**: Retrospective

### Common Struggles

**Pointer confusion**: Students confuse pointer, value, and address
- **Fix**: Draw lots of box-and-arrow diagrams
- Use Python Tutor or similar visualization tools

**Off-by-one errors**: Especially in insertAtPosition
- **Fix**: Test with small lists (0, 1, 2 elements)

**Memory leaks**: Forgetting to delete nodes
- **Fix**: Every delete operation should free memory
- Teach RAII principles for modern C++

**Null checks**: Forgetting to verify pointers before dereferencing
- **Fix**: "Trust nothing. Check everything." mindset

### Success Indicators

Students are on track if they:
- ✅ Can draw memory diagrams with pointers
- ✅ Systematically debug using print statements or debugger
- ✅ Implement insert and delete operations correctly
- ✅ Handle edge cases (empty list, single node)
- ✅ Understand memory management (C++)
- ✅ Complete Sprint 1 planning with realistic estimates

### Teaching Philosophy Notes

**Debugging is learning.** Don't give students perfect code—give them broken code. The struggle to fix it creates deeper understanding than copying working examples.

**Visualization is key.** Students who can draw linked lists on paper rarely make pointer errors. Those who can't draw them always do. Require diagrams.

**Sprint 1 is practice.** This is their first sprint. Estimates will be wrong. Velocity will be lower than they think. That's data for Sprint 2 planning.

---

**Sprint 1 continues: Use this debugging mindset throughout your 2-week sprint. Break things. Fix things. Learn deeply.**
