# M01-A1: GitHub Setup & First ADT (Stack)

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 1 - Foundations & AI Collaboration
**Week**: 1
**Points**: 25
**Due**: End of Week 1

---

## Assignment Overview

This assignment establishes your professional development workflow and introduces Abstract Data Types (ADTs) through hands-on implementation. You'll configure your GitHub repository, set up your development environment, and build your first data structure—a Stack—using the "create first, understand later" approach.

**Philosophy**: You will build a working Stack BEFORE reading about Stack theory. This mirrors how professional developers learn new concepts—by doing, breaking, fixing, and finally understanding.

---

## Learning Objectives

By completing this assignment, you will:

1. Configure professional development environment (GitHub, IDE, compiler/interpreter)
2. Execute Sacred Flow workflow (Issue → Branch → Code → Commit → PR → Merge)
3. Implement Stack ADT using array-based or linked-list approach
4. Document your code with clear comments and README
5. Test your implementation with provided test cases

**Bloom's Level**: Apply (CLO1, CLO4)

---

## Prerequisites

- CSC-134 completed (intro to programming with C++)
- GitHub account created
- Text editor or IDE installed (VS Code recommended)
- C++ compiler (g++, clang, Visual Studio) OR Python 3.8+ installed

---

## Part 1: GitHub Setup (8 points)

### Step 1: Fork the Course Repository

1. Navigate to the course repository: `[INSTRUCTOR_WILL_PROVIDE_URL]`
2. Click "Fork" button (top right)
3. Clone YOUR fork to your local machine:
   ```bash
   git clone https://github.com/YOUR_USERNAME/csc249-yourname.git
   cd csc249-yourname
   ```

### Step 2: Create README.md

Create a file called `README.md` in the root directory with:

```markdown
# CSC-249: Data Structures & Algorithms
**Student**: [Your Full Name]
**Semester**: Spring 2026
**Instructor**: Drew Norris

## About Me
[2-3 sentences about your programming experience and goals for this course]

## Language Choice
**Primary Language**: [C++ or Python]

**Why I chose this language**:
[1-2 sentences explaining your choice]

## AI Tool
**Chosen Tool**: [Claude / ChatGPT / GitHub Copilot]

## Course Progress
- [x] Week 1: GitHub Setup & First ADT
- [ ] Week 2: AI Collaboration & Undo System
[...list continues through Week 16]
```

### Step 3: Make Your First Commit

```bash
git add README.md
git commit -m "Initial commit: Add student README with course info and language choice"
git push origin main
```

**Grading** (8 points):
- Repository forked correctly (2 pts)
- README.md complete with all sections (4 pts)
- First commit pushed successfully (2 pts)

---

## Part 2: Stack ADT Implementation (12 points)

### The Challenge: Build Before You Read

**Your task**: Implement a Stack data structure from scratch WITHOUT looking up "how to implement a stack" online. Use your understanding of arrays/lists and the LIFO (Last In, First Out) concept to figure it out.

### LIFO Concept

Think of a stack of plates:
- When you add a plate, it goes on TOP
- When you remove a plate, you take from the TOP
- You cannot access plates in the middle without removing top plates first

**Real-world uses**: Browser back button, undo functionality, function call stack

### Required Operations

Your Stack must support:

1. **push(item)**: Add item to top of stack
2. **pop()**: Remove and return top item (error if empty)
3. **peek()**: Return top item without removing (error if empty)
4. **isEmpty()**: Return true if stack has no items
5. **size()**: Return number of items in stack

### Implementation Instructions

Create a directory `week01-stack/` in your repo:

```bash
mkdir week01-stack
cd week01-stack
```

#### For C++ Students:

Create `Stack.h` and `Stack.cpp`:

**Stack.h**:
```cpp
#ifndef STACK_H
#define STACK_H

#include <stdexcept>

class Stack {
private:
    int* data;      // Dynamic array to hold stack elements
    int capacity;   // Maximum size of stack
    int topIndex;   // Index of top element (-1 if empty)

public:
    Stack(int cap = 10);  // Constructor with default capacity
    ~Stack();              // Destructor to free memory

    void push(int item);
    int pop();
    int peek() const;
    bool isEmpty() const;
    int size() const;
};

#endif
```

**Your task**: Implement the methods in `Stack.cpp`. DO NOT look up solutions yet—try to figure out the logic yourself.

**Hints** (only read if stuck):
- `topIndex` starts at -1 (empty stack)
- `push`: increment topIndex, then set data[topIndex] = item
- `pop`: save data[topIndex] to return, decrement topIndex
- `isEmpty`: check if topIndex == -1
- `size`: return topIndex + 1

Create `test_stack.cpp`:
```cpp
#include <iostream>
#include "Stack.h"

int main() {
    Stack s;

    // Test 1: isEmpty on new stack
    std::cout << "Test 1: isEmpty on new stack: " << (s.isEmpty() ? "PASS" : "FAIL") << std::endl;

    // Test 2: push and size
    s.push(10);
    s.push(20);
    s.push(30);
    std::cout << "Test 2: size after 3 pushes: " << (s.size() == 3 ? "PASS" : "FAIL") << std::endl;

    // Test 3: peek
    std::cout << "Test 3: peek returns 30: " << (s.peek() == 30 ? "PASS" : "FAIL") << std::endl;

    // Test 4: pop
    int val = s.pop();
    std::cout << "Test 4: pop returns 30: " << (val == 30 ? "PASS" : "FAIL") << std::endl;

    // Test 5: size after pop
    std::cout << "Test 5: size is now 2: " << (s.size() == 2 ? "PASS" : "FAIL") << std::endl;

    return 0;
}
```

Compile and run:
```bash
g++ -o test_stack Stack.cpp test_stack.cpp
./test_stack
```

#### For Python Students:

Create `stack.py`:

```python
class Stack:
    def __init__(self, capacity=10):
        """Initialize empty stack with maximum capacity."""
        self.data = []       # List to hold stack elements
        self.capacity = capacity

    def push(self, item):
        """Add item to top of stack."""
        # YOUR CODE HERE
        pass

    def pop(self):
        """Remove and return top item. Raise error if empty."""
        # YOUR CODE HERE
        pass

    def peek(self):
        """Return top item without removing. Raise error if empty."""
        # YOUR CODE HERE
        pass

    def is_empty(self):
        """Return True if stack is empty."""
        # YOUR CODE HERE
        pass

    def size(self):
        """Return number of items in stack."""
        # YOUR CODE HERE
        pass
```

Create `test_stack.py`:
```python
from stack import Stack

def test_stack():
    s = Stack()

    # Test 1: isEmpty on new stack
    assert s.is_empty() == True, "Test 1 FAILED"
    print("Test 1: isEmpty on new stack: PASS")

    # Test 2: push and size
    s.push(10)
    s.push(20)
    s.push(30)
    assert s.size() == 3, "Test 2 FAILED"
    print("Test 2: size after 3 pushes: PASS")

    # Test 3: peek
    assert s.peek() == 30, "Test 3 FAILED"
    print("Test 3: peek returns 30: PASS")

    # Test 4: pop
    val = s.pop()
    assert val == 30, "Test 4 FAILED"
    print("Test 4: pop returns 30: PASS")

    # Test 5: size after pop
    assert s.size() == 2, "Test 5 FAILED"
    print("Test 5: size is now 2: PASS")

    print("\nAll tests passed!")

if __name__ == "__main__":
    test_stack()
```

Run tests:
```bash
python test_stack.py
```

### What If Your Code Doesn't Work?

**GOOD!** That's expected. Debugging is learning. Try these steps:

1. **Add print statements** to see what's happening:
   ```cpp
   std::cout << "Push: topIndex before = " << topIndex << std::endl;
   ```

2. **Draw it out**: Sketch the array and topIndex on paper for each operation

3. **Ask AI for guidance** (NOT full solutions):
   ```
   Prompt: "I'm implementing a stack using an array. When I push three items and then pop once, my size() returns the wrong value. What am I likely doing wrong with my topIndex variable?"
   ```

4. **Document your struggles** in `prompts.txt` (see Part 3)

**Grading** (12 points):
- All 5 required methods implemented (5 pts)
- Code compiles/runs without errors (2 pts)
- All test cases pass (3 pts)
- Code is commented explaining logic (2 pts)

---

## Part 3: Sacred Flow Workflow (5 points)

### Create an Issue

On GitHub (your fork), click "Issues" → "New Issue":

**Title**: "M01-A1: Implement Stack ADT"

**Description**:
```
## Goal
Implement Stack data structure with push, pop, peek, isEmpty, and size operations.

## Acceptance Criteria
- [ ] Stack.h / stack.py created with class definition
- [ ] All 5 methods implemented
- [ ] Test file created and all tests passing
- [ ] Code commented
- [ ] prompts.txt documenting AI collaboration

## Language
[C++ or Python]
```

### Create a Branch

```bash
git checkout -b m01-stack-implementation
```

### Code, Commit, Repeat

As you work:

```bash
# After implementing push method
git add Stack.cpp   # or stack.py
git commit -m "Implement push method with array-based storage"

# After implementing pop
git commit -m "Implement pop with error handling for empty stack"

# Continue for each method...
```

**Best practice**: Commit early, commit often. Each method = one commit.

### Create Pull Request

When all tests pass:

```bash
git push origin m01-stack-implementation
```

On GitHub, click "Compare & pull request". Fill out:

**Title**: "M01-A1: Stack ADT Implementation Complete"

**Description**:
```
## Summary
Implemented Stack ADT using [array-based / linked-list] approach.

## What I Built
- Stack class with 5 core operations
- Test suite with 5 tests (all passing)
- Documented code with comments

## Challenges Faced
[1-2 sentences about what was hardest]

## AI Collaboration
See prompts.txt for detailed AI interactions.

## Tests
All 5 tests passing. Screenshot:
[Paste screenshot of test output]
```

### Merge (After Instructor Review)

Instructor will review your PR and may request changes. Once approved:

```bash
git checkout main
git pull origin main
git merge m01-stack-implementation
git push origin main
```

**Grading** (5 points):
- Issue created with acceptance criteria (1 pt)
- Branch created for work (1 pt)
- Multiple commits (not just one) (1 pt)
- PR description complete (1 pt)
- Code merged after review (1 pt)

---

## Part 4: Reflection (included in rubric)

In your PR description, answer:

1. **Build-First Experience**: "Did building the Stack before reading about it help or hurt your understanding? Why?"

2. **Debugging Journey**: "What broke? How did you fix it?"

3. **LIFO Understanding**: "Explain LIFO in your own words with a real-world analogy."

---

## Submission Checklist

Before submitting, verify:

- [ ] README.md created with all sections
- [ ] Stack implementation complete (all 5 methods)
- [ ] Test file created and all tests passing
- [ ] Code is commented
- [ ] Issue created on GitHub
- [ ] Branch created for work
- [ ] Multiple commits with descriptive messages
- [ ] Pull request created with complete description
- [ ] Reflection questions answered in PR

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **GitHub Setup** | 8 | Repository forked (2), README complete (4), first commit (2) |
| **Stack Implementation** | 12 | Methods implemented (5), compiles/runs (2), tests pass (3), comments (2) |
| **Sacred Flow Workflow** | 5 | Issue (1), branch (1), commits (1), PR description (1), merged (1) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code does not compile: -5 points
- Tests do not pass: -3 points
- Missing reflection: -2 points
- AI collaboration not documented: -2 points

---

## Resources

**DO NOT READ UNTIL AFTER YOU'VE TRIED**:
- Runestone Academy: [Section 3.3-3.4 (Stack ADT)](https://runestone.academy/ns/books/published/pythonds3/BasicDS/WhatIsaStack.html)
- VisuAlgo: [Stack Visualization](https://visualgo.net/en/list)

**Tools**:
- GitHub Desktop (GUI alternative to command line)
- VS Code Git integration
- C++ Compiler Help: [How to install g++](https://code.visualstudio.com/docs/cpp/config-linux)
- Python Installation: [python.org](https://www.python.org/downloads/)

**Get Help**:
- Office Hours: [See Canvas for schedule]
- Discord: #week01-stack channel
- Email instructor with "CSC-249 M01-A1" in subject

---

## Extension Challenges (Optional, +5 bonus points)

For students who finish early and want more challenge:

1. **Capacity Handling**: Modify your Stack to dynamically resize when capacity is reached (instead of fixed size)

2. **Dual Implementation**: Implement Stack in BOTH C++ and Python, then write a comparison document explaining:
   - What's easier in C++? What's easier in Python?
   - How does memory management differ?
   - Which language helped you understand Stacks better?

3. **Generic Stack** (C++): Use templates to make Stack work with any data type, not just int

4. **Stack of Strings** (Python): Modify your Stack to store strings, add a `reverse_string(s)` function that uses your Stack to reverse a string

**Submission**: Create a separate PR titled "M01-A1 Extension Challenge" with your bonus work.

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
