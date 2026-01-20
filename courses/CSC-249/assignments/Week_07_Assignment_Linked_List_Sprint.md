# M04-A1: Linked List Implementation Sprint (Sprint 1)

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 4 - Linear Structures (Sprint 1)
**Week**: 7
**Points**: 50 (30 technical + 20 process)
**Sprint Duration**: 2 weeks (Week 7-8)
**Due**: End of Week 7

---

## Assignment Overview

**YOUR FIRST COMPLETE SPRINT!** This is a 2-week agile sprint where you'll implement a linked list data structure from scratch while following professional sprint methodology. You'll plan work, track progress with daily standups, maintain a burndown chart, and deliver working software.

**Philosophy**: "Process equals product." This sprint isn't just about building a linked list—it's about experiencing how professional development teams organize work, track progress, and deliver on commitments.

---

## Learning Objectives

By completing this sprint, you will:

1. Implement singly-linked list with full CRUD operations
2. Execute complete sprint cycle (planning, daily standups, review, retrospective)
3. Track progress with burndown chart and velocity
4. Practice Sacred Flow workflow with sprint-oriented branching
5. Deliver working, tested code on schedule

**Bloom's Level**: Apply, Create (CLO1, CLO4)

---

## Sprint Overview - Two Week Timeline

### Week 7 (THIS ASSIGNMENT):
- Sprint planning (Monday)
- Implementation work (Mon-Fri)
- Daily standups (standup.md updates)
- Burndown chart tracking
- **Deliverable**: Working linked list with tests

### Week 8 (M04-A2):
- Sprint review (demo your work)
- Sprint retrospective (what went well, what didn't)
- **Deliverable**: Retrospective document

---

## Part 1: Sprint Planning (5 points)

### Step 1: Create Sprint Backlog

Create `SPRINT_PLANNING.md` in your `week07-linked-list-sprint/` directory:

```markdown
# Sprint 1 Planning - Linked List Implementation

**Sprint Goal**: Implement a fully functional singly-linked list with all CRUD operations and comprehensive tests.

**Sprint Duration**: 2 weeks (Week 7-8)
**Team Size**: 1 (solo)
**Available Hours**: [Estimate your weekly hours for this course × 2]

---

## Sprint Backlog

### Story 1: Node Class Implementation
**As a** developer
**I want to** create a Node class to store data and link to next node
**So that** I can build the foundation for my linked list

**Acceptance Criteria**:
- [ ] Node class created with `data` and `next` attributes
- [ ] Constructor initializes node with data
- [ ] Can link nodes together manually
- [ ] Basic tests confirm node linking works

**Story Points**: 2
**Estimated Hours**: 1.5

---

### Story 2: LinkedList Class with Basic Operations
**As a** developer
**I want to** create LinkedList class with insert/delete/search
**So that** I can manipulate list data

**Acceptance Criteria**:
- [ ] `insert_front(data)` adds node to front
- [ ] `insert_back(data)` adds node to end
- [ ] `delete(data)` removes first occurrence
- [ ] `search(data)` returns True if found
- [ ] `is_empty()` checks if list empty
- [ ] `size()` returns number of nodes

**Story Points**: 5
**Estimated Hours**: 4

---

### Story 3: Display and Traversal Methods
**As a** developer
**I want to** print and traverse the list
**So that** I can visualize and debug the structure

**Acceptance Criteria**:
- [ ] `display()` prints all elements
- [ ] `to_list()` converts to Python list/C++ vector
- [ ] `reverse_display()` prints in reverse (bonus)

**Story Points**: 2
**Estimated Hours**: 1.5

---

### Story 4: Advanced Operations
**As a** developer
**I want to** implement insert_at_index and delete_at_index
**So that** I can manipulate list at arbitrary positions

**Acceptance Criteria**:
- [ ] `insert_at(index, data)` inserts at specific position
- [ ] `delete_at(index)` removes node at position
- [ ] `get(index)` retrieves data at position
- [ ] Handles invalid indices gracefully

**Story Points**: 3
**Estimated Hours**: 2.5

---

### Story 5: Comprehensive Test Suite
**As a** developer
**I want to** create thorough tests for all operations
**So that** I can verify correctness and catch bugs

**Acceptance Criteria**:
- [ ] Test file with 15+ test cases
- [ ] All CRUD operations tested
- [ ] Edge cases tested (empty list, single element, etc.)
- [ ] All tests passing

**Story Points**: 3
**Estimated Hours**: 2.5

---

### Story 6: Documentation and Code Quality
**As a** developer
**I want to** document my code and ensure quality
**So that** others (and future me) can understand it

**Acceptance Criteria**:
- [ ] All methods have docstrings/comments
- [ ] README.md with usage examples
- [ ] Code follows style guidelines
- [ ] No compiler warnings

**Story Points**: 2
**Estimated Hours**: 1.5

---

## Sprint Capacity

**Total Story Points**: 17
**Total Estimated Hours**: 13.5
**Buffer Time**: 2 hours (for unexpected issues)

**Available Hours**: [Your estimate]
**Capacity Match**: [Is this realistic?]

---

## Definition of Done

A story is "Done" when:
- [ ] Code implemented and committed
- [ ] Tests written and passing
- [ ] Code documented
- [ ] Peer reviewed (self-review + instructor feedback)
- [ ] Merged to main branch

---

## Sprint Risks

1. **Risk**: Linked list pointers might be confusing
   **Mitigation**: Use AI to explain pointer mechanics, draw diagrams

2. **Risk**: Running out of time
   **Mitigation**: Focus on core stories (1-5), treat Story 6 as stretch goal

3. **Risk**: [Add your own risks]
   **Mitigation**: [Add your mitigation strategies]
```

**Grading** (5 points):
- Sprint backlog complete with user stories (2 pts)
- Story points estimated (1 pt)
- Definition of Done defined (1 pt)
- Risks identified (1 pt)

---

## Part 2: Technical Implementation (30 points)

### Linked List Requirements

Implement a **singly-linked list** with these operations:

**Python starter code**:

```python
class Node:
    """Node class for singly-linked list."""
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    """Singly-linked list implementation."""

    def __init__(self):
        self.head = None
        self._size = 0

    def insert_front(self, data):
        """Insert data at front of list. O(1)"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self._size += 1

    def insert_back(self, data):
        """Insert data at end of list. O(n)"""
        # TODO: Implement
        pass

    def delete(self, data):
        """Delete first occurrence of data. Returns True if deleted."""
        # TODO: Implement
        # Hint: Need to track previous node
        pass

    def search(self, data) -> bool:
        """Search for data in list. Returns True if found."""
        # TODO: Implement
        pass

    def insert_at(self, index, data):
        """Insert data at specific index."""
        # TODO: Implement
        pass

    def delete_at(self, index):
        """Delete node at specific index."""
        # TODO: Implement
        pass

    def get(self, index):
        """Get data at specific index."""
        # TODO: Implement
        pass

    def is_empty(self) -> bool:
        """Check if list is empty."""
        return self.head is None

    def size(self) -> int:
        """Return number of elements."""
        return self._size

    def display(self):
        """Print all elements."""
        current = self.head
        elements = []
        while current:
            elements.append(str(current.data))
            current = current.next
        print(" -> ".join(elements) if elements else "Empty list")

    def to_list(self):
        """Convert to Python list."""
        result = []
        current = self.head
        while current:
            result.append(current.data)
            current = current.next
        return result
```

**C++ starter code**:

```cpp
#ifndef LINKEDLIST_H
#define LINKEDLIST_H

#include <iostream>
#include <vector>

template <typename T>
class Node {
public:
    T data;
    Node* next;

    Node(T value) : data(value), next(nullptr) {}
};

template <typename T>
class LinkedList {
private:
    Node<T>* head;
    int _size;

public:
    LinkedList() : head(nullptr), _size(0) {}

    ~LinkedList() {
        // TODO: Implement destructor to free memory
        while (head != nullptr) {
            Node<T>* temp = head;
            head = head->next;
            delete temp;
        }
    }

    void insertFront(T data) {
        Node<T>* newNode = new Node<T>(data);
        newNode->next = head;
        head = newNode;
        _size++;
    }

    void insertBack(T data) {
        // TODO: Implement
    }

    bool deleteValue(T data) {
        // TODO: Implement
        // Return true if deleted, false if not found
        return false;
    }

    bool search(T data) {
        // TODO: Implement
        return false;
    }

    void insertAt(int index, T data) {
        // TODO: Implement
    }

    void deleteAt(int index) {
        // TODO: Implement
    }

    T get(int index) {
        // TODO: Implement
        throw std::out_of_range("Index out of bounds");
    }

    bool isEmpty() {
        return head == nullptr;
    }

    int size() {
        return _size;
    }

    void display() {
        Node<T>* current = head;
        while (current != nullptr) {
            std::cout << current->data;
            if (current->next != nullptr) std::cout << " -> ";
            current = current->next;
        }
        std::cout << std::endl;
    }

    std::vector<T> toVector() {
        std::vector<T> result;
        Node<T>* current = head;
        while (current != nullptr) {
            result.push_back(current->data);
            current = current->next;
        }
        return result;
    }
};

#endif
```

### Test Suite

Create `test_linked_list.py` or `test_linked_list.cpp`:

```python
def test_linked_list():
    """Comprehensive test suite for LinkedList."""

    ll = LinkedList()

    # Test 1: Empty list
    assert ll.is_empty() == True
    assert ll.size() == 0
    print("Test 1 PASSED: Empty list")

    # Test 2: Insert front
    ll.insert_front(10)
    ll.insert_front(20)
    ll.insert_front(30)
    assert ll.to_list() == [30, 20, 10]
    assert ll.size() == 3
    print("Test 2 PASSED: Insert front")

    # Test 3: Insert back
    ll.insert_back(5)
    assert ll.to_list() == [30, 20, 10, 5]
    print("Test 3 PASSED: Insert back")

    # Test 4: Search
    assert ll.search(20) == True
    assert ll.search(999) == False
    print("Test 4 PASSED: Search")

    # Test 5: Delete
    ll.delete(20)
    assert ll.to_list() == [30, 10, 5]
    assert ll.size() == 3
    print("Test 5 PASSED: Delete")

    # Test 6: Insert at index
    ll.insert_at(1, 15)  # Insert 15 at index 1
    assert ll.to_list() == [30, 15, 10, 5]
    print("Test 6 PASSED: Insert at index")

    # Test 7: Get at index
    assert ll.get(0) == 30
    assert ll.get(2) == 10
    print("Test 7 PASSED: Get at index")

    # Test 8: Delete at index
    ll.delete_at(1)  # Remove element at index 1
    assert ll.to_list() == [30, 10, 5]
    print("Test 8 PASSED: Delete at index")

    # Test 9: Delete front
    ll.delete(30)
    assert ll.to_list() == [10, 5]
    print("Test 9 PASSED: Delete front")

    # Test 10: Delete back
    ll.delete(5)
    assert ll.to_list() == [10]
    print("Test 10 PASSED: Delete back")

    # Test 11: Delete only element
    ll.delete(10)
    assert ll.is_empty() == True
    print("Test 11 PASSED: Delete only element")

    # Test 12: Delete from empty list
    result = ll.delete(999)
    assert result == False
    print("Test 12 PASSED: Delete from empty list")

    print("\n✓ All tests passed!")

if __name__ == "__main__":
    test_linked_list()
```

**Grading - Technical Implementation** (30 points):
- Node class implemented (3 pts)
- Insert operations (front, back, at index) (6 pts)
- Delete operations (value, at index) (6 pts)
- Search and get operations (4 pts)
- Helper methods (size, isEmpty, display) (3 pts)
- Test suite with 10+ tests (5 pts)
- All tests passing (3 pts)

---

## Part 3: Sprint Process Execution (20 points)

### Daily Standups (8 points)

Create `standup.md` and update it EVERY DAY you work on the sprint:

```markdown
# Sprint 1 Daily Standups - Linked List

## Monday, Week 7
**What I did yesterday**: N/A (sprint start)
**What I'm doing today**: Sprint planning, implement Node class, start LinkedList
**Blockers**: None yet
**Burndown**: 17 story points remaining

---

## Tuesday, Week 7
**What I did yesterday**: Completed Node class, started LinkedList insert methods
**What I'm doing today**: Finish insert_back, implement delete method
**Blockers**: Confused about pointer handling in delete - will ask AI
**Burndown**: 15 story points remaining

---

## Wednesday, Week 7
**What I did yesterday**: [Fill in]
**What I'm doing today**: [Fill in]
**Blockers**: [Any issues?]
**Burndown**: [Points remaining]

---

[Continue for each work day...]
```

**Requirements**:
- Minimum 5 standup entries (one per work day)
- Must include what you did, what you're doing, and blockers
- Must track burndown points

**Grading** (8 points):
- 5+ standup entries (4 pts)
- Entries show actual daily progress (2 pts)
- Blockers and solutions documented (2 pts)

### Burndown Chart (5 points)

Create `burndown.csv` tracking story points remaining each day:

```csv
Day,Story_Points_Remaining,Ideal_Burndown
0,17,17
1,15,14.2
2,13,11.4
3,10,8.6
4,7,5.8
5,3,3.0
6,0,0
```

Then create a graph (`burndown_chart.png`) showing actual vs ideal burndown.

**Python visualization**:

```python
import matplotlib.pyplot as plt
import pandas as pd

df = pd.read_csv('burndown.csv')

plt.plot(df['Day'], df['Story_Points_Remaining'], marker='o', label='Actual', color='blue')
plt.plot(df['Day'], df['Ideal_Burndown'], linestyle='--', label='Ideal', color='green')

plt.xlabel('Day')
plt.ylabel('Story Points Remaining')
plt.title('Sprint 1 Burndown Chart')
plt.legend()
plt.grid(True)
plt.savefig('burndown_chart.png')
plt.show()
```

**Grading** (5 points):
- burndown.csv with daily tracking (3 pts)
- Burndown chart graph created (2 pts)

### Sprint Review (2 points)

Create `SPRINT_REVIEW.md`:

```markdown
# Sprint 1 Review - Linked List Implementation

**Sprint Goal**: Implement fully functional singly-linked list
**Goal Met**: Yes/No

---

## Completed Stories

- [x] Story 1: Node Class (2 pts)
- [x] Story 2: LinkedList Basic Operations (5 pts)
- [x] Story 3: Display Methods (2 pts)
- [x] Story 4: Advanced Operations (3 pts)
- [x] Story 5: Test Suite (3 pts)
- [ ] Story 6: Documentation (2 pts) - **Incomplete**

**Total Completed**: [X] story points out of 17

---

## Demo

[Paste screenshot or output of tests passing]

---

## What Worked Well

- [What went smoothly?]
- [What helped you succeed?]

---

## What Didn't Work

- [What was challenging?]
- [What took longer than expected?]

---

## Next Sprint Preview

For Sprint 2 (Hash Tables), I will:
- [Improvements to make]
- [Process changes]
```

**Grading** (2 points):
- Review document complete (1 pt)
- Honest assessment of completion (1 pt)

### Sacred Flow - Sprint Branch Strategy (5 points)

**Branch naming for sprints**:

```bash
# Create sprint branch
git checkout -b sprint1-linked-list

# Create feature branches OFF sprint branch
git checkout -b feature/node-class
# ...work, commit...
git checkout sprint1-linked-list
git merge feature/node-class

# Create feature branch for next story
git checkout -b feature/insert-operations
# ...work, commit...
git checkout sprint1-linked-list
git merge feature/insert-operations

# When sprint complete, PR sprint branch to main
git push origin sprint1-linked-list
# Create PR: "Sprint 1 Complete - Linked List Implementation"
```

**Grading** (5 points):
- Sprint branch created (1 pt)
- Multiple feature branches used (2 pts)
- PR created with sprint summary (2 pts)

---

## Submission Checklist

- [ ] SPRINT_PLANNING.md with backlog
- [ ] LinkedList implementation complete
- [ ] Test suite with 10+ tests passing
- [ ] standup.md with 5+ daily updates
- [ ] burndown.csv and burndown_chart.png
- [ ] SPRINT_REVIEW.md complete
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request created from sprint branch

---

## Grading Rubric (50 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Planning** | 5 | Backlog (2), story points (1), DoD (1), risks (1) |
| **Technical Implementation** | 30 | Node (3), insert ops (6), delete ops (6), search/get (4), helpers (3), tests (5), passing (3) |
| **Daily Standups** | 8 | 5+ entries (4), show progress (2), blockers (2) |
| **Burndown Chart** | 5 | CSV tracking (3), chart graph (2) |
| **Sprint Review** | 2 | Review complete (1), honest assessment (1) |
| **Sacred Flow** | 5 | Sprint branch (1), feature branches (2), PR (2) |
| **Total** | **55** | *Scaled to 50 points* |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code doesn't compile: -5 points
- Tests don't pass: -5 points
- Missing standup entries: -2 pts per missing day
- No burndown chart: -5 points
- Missing prompts.txt: -3 points

---

## Resources

**Linked Lists**:
- VisuAlgo: [Linked List Visualization](https://visualgo.net/en/list)
- Runestone: [Linked Lists](https://runestone.academy/ns/books/published/pythonds3/BasicDS/ImplementinganUnorderedListLinkedLists.html)

**Sprint Process**:
- See `pm-materials/01-Sprint-Basics-For-CSC249.md`
- Scrum Guide (simplified): [scrumguides.org](https://scrumguides.org/)

**Get Help**:
- Office Hours: See Canvas
- Discord: #week07-sprint1 channel

---

## Extension Challenges (+5 bonus)

1. **Doubly-Linked List**: Implement with `prev` pointers, allows O(1) insert/delete at back

2. **Circular Linked List**: Last node points back to head

3. **Reverse Method**: Implement `reverse()` that reverses list in-place

4. **Middle Element**: Implement `find_middle()` using slow/fast pointer technique

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
