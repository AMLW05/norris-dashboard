# M02-A2: Recursive Algorithms Project

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 2 - Algorithm Analysis & Recursion
**Week**: 4
**Points**: 25
**Due**: End of Week 4

---

## Assignment Overview

Build recursive solutions to classic problems and compare them to iterative approaches. You'll implement factorial, Fibonacci, Tower of Hanoi, and a recursive file system explorer, discovering when recursion is elegant versus when it's inefficient.

**Philosophy**: "Think backwards." Recursion requires a mental shift—solving a problem by solving a smaller version of itself. Build recursive solutions first, benchmark them, then understand when recursion shines and when it fails.

---

## Learning Objectives

By completing this assignment, you will:

1. Implement recursive algorithms for mathematical and structural problems
2. Identify base cases and recursive cases in algorithm design
3. Compare recursive vs iterative performance empirically
4. Visualize recursion call stacks and execution flow
5. Apply user story writing to technical projects (PM skill)

**Bloom's Level**: Apply, Analyze (CLO2, CLO3, CLO4)

---

## Part 1: Classic Recursive Algorithms (10 points)

### Algorithm 1: Factorial

**Iterative version** (you know this):
```python
def factorial_iterative(n: int) -> int:
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
```

**Recursive version** (you build this):
```python
def factorial_recursive(n: int) -> int:
    # TODO: Implement
    # Base case: n == 0 or n == 1
    # Recursive case: n * factorial(n - 1)
    pass
```

### Algorithm 2: Fibonacci Sequence

Generate Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21...

**Recursive version**:
```python
def fibonacci_recursive(n: int) -> int:
    """
    Return the nth Fibonacci number.
    fib(0) = 0, fib(1) = 1
    fib(n) = fib(n-1) + fib(n-2)
    """
    # TODO: Implement
    pass
```

**Iterative version** (for comparison):
```python
def fibonacci_iterative(n: int) -> int:
    if n <= 1:
        return n
    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
```

### Algorithm 3: Sum of Array

**Recursive approach**:
```python
def sum_recursive(arr: List[int]) -> int:
    """
    Sum array elements recursively.
    Base case: empty array = 0
    Recursive: first element + sum(rest of array)
    """
    # TODO: Implement
    pass
```

**Hint**: Use array slicing: `arr[1:]` gives all elements except first.

### Algorithm 4: Tower of Hanoi

Classic recursive puzzle: Move n disks from source peg to destination peg using auxiliary peg.

**Rules**:
- Only one disk can be moved at a time
- A disk can only be placed on a larger disk
- All disks start on the source peg

```python
def tower_of_hanoi(n: int, source: str, dest: str, aux: str) -> List[str]:
    """
    Solve Tower of Hanoi puzzle.
    Returns list of moves: ["Move disk 1 from A to C", ...]
    """
    moves = []

    def hanoi_recursive(n, source, dest, aux):
        if n == 1:
            moves.append(f"Move disk 1 from {source} to {dest}")
        else:
            # TODO: Implement recursive logic
            # 1. Move n-1 disks from source to aux (using dest)
            # 2. Move disk n from source to dest
            # 3. Move n-1 disks from aux to dest (using source)
            pass

    hanoi_recursive(n, source, dest, aux)
    return moves
```

### C++ Versions

**Factorial**:
```cpp
int factorialRecursive(int n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}
```

**Fibonacci**:
```cpp
int fibonacciRecursive(int n) {
    if (n <= 1) return n;
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
```

**Sum Array**:
```cpp
int sumRecursive(std::vector<int>& arr, int index = 0) {
    if (index >= arr.size()) return 0;
    return arr[index] + sumRecursive(arr, index + 1);
}
```

**Tower of Hanoi**:
```cpp
void towerOfHanoi(int n, char source, char dest, char aux,
                  std::vector<std::string>& moves) {
    if (n == 1) {
        moves.push_back("Move disk 1 from " + std::string(1, source) +
                        " to " + std::string(1, dest));
        return;
    }

    towerOfHanoi(n - 1, source, aux, dest, moves);
    moves.push_back("Move disk " + std::to_string(n) + " from " +
                    std::string(1, source) + " to " + std::string(1, dest));
    towerOfHanoi(n - 1, aux, dest, source, moves);
}
```

### Test Cases

```python
# Test factorial
assert factorial_recursive(5) == 120
assert factorial_recursive(0) == 1

# Test Fibonacci
assert fibonacci_recursive(6) == 8
assert fibonacci_recursive(10) == 55

# Test sum
assert sum_recursive([1, 2, 3, 4, 5]) == 15
assert sum_recursive([]) == 0

# Test Tower of Hanoi
moves = tower_of_hanoi(3, 'A', 'C', 'B')
assert len(moves) == 7  # 2^n - 1 moves required
print("\n".join(moves))
```

**Expected Tower of Hanoi output (n=3)**:
```
Move disk 1 from A to C
Move disk 2 from A to B
Move disk 1 from C to B
Move disk 3 from A to C
Move disk 1 from B to A
Move disk 2 from B to C
Move disk 1 from A to C
```

**Grading** (10 points):
- All 4 algorithms implemented correctly (6 pts)
- All test cases pass (2 pts)
- Code documented with base/recursive cases identified (2 pts)

---

## Part 2: Performance Analysis - Recursion vs Iteration (7 points)

### Benchmark Recursive vs Iterative

Using your `Benchmark` class from M02-A1:

1. **Benchmark factorial**:
   - `factorial_recursive` vs `factorial_iterative`
   - Test with n = 5, 10, 15, 20
   - Which is faster? Why?

2. **Benchmark Fibonacci**:
   - `fibonacci_recursive` vs `fibonacci_iterative`
   - Test with n = 10, 15, 20, 25, 30
   - Graph the results
   - What happens to recursive version at n=30?

3. **Analyze results**:

```python
# Benchmark example
from benchmark import Benchmark

bench = Benchmark()

# Factorial comparison
for n in [5, 10, 15, 20]:
    # Time recursive
    start = time.perf_counter()
    factorial_recursive(n)
    recursive_time = (time.perf_counter() - start) * 1000

    # Time iterative
    start = time.perf_counter()
    factorial_iterative(n)
    iterative_time = (time.perf_counter() - start) * 1000

    print(f"n={n}: Recursive={recursive_time:.4f}ms, Iterative={iterative_time:.4f}ms")
```

### Create Performance Report

In `performance_analysis.md`, answer:

1. **Factorial Performance**:
   - Which is faster? By how much?
   - Why is one faster than the other?
   - What is the Big O of both? (Same or different?)

2. **Fibonacci Performance**:
   - What happens when n reaches 30 for recursive version?
   - Why does recursive Fibonacci get exponentially slower?
   - Draw the recursion tree for `fib(5)` to visualize the problem

3. **When to Use Recursion**:
   - When is recursion BETTER than iteration? (Examples?)
   - When is recursion WORSE? (Examples?)
   - What's the cost of recursion? (Hint: call stack)

**Fibonacci Recursion Tree** (draw this):
```
                    fib(5)
                   /      \
              fib(4)      fib(3)
             /     \       /    \
        fib(3)   fib(2) fib(2) fib(1)
        /   \     /  \    /  \
   fib(2) fib(1) ...  ...
    /  \
  fib(1) fib(0)
```

Notice: fib(3) is calculated TWICE. fib(2) is calculated THREE times. This is why it's slow!

**Grading** (7 points):
- Factorial benchmarked correctly (1 pt)
- Fibonacci benchmarked correctly (2 pts)
- Performance report complete (2 pts)
- Recursion tree drawn/explained (1 pt)
- Thoughtful analysis of when to use recursion (1 pt)

---

## Part 3: Recursive File System Explorer (5 points)

### Real-World Recursion Application

File systems are inherently recursive (folders contain folders). Build a tool that recursively explores directories.

**Python version**:

```python
import os
from typing import List

def list_files_recursive(path: str, indent: int = 0) -> List[str]:
    """
    Recursively list all files in directory tree.
    Returns list of file paths with indentation showing depth.
    """
    results = []

    try:
        items = os.listdir(path)

        for item in items:
            item_path = os.path.join(path, item)
            indent_str = "  " * indent

            if os.path.isfile(item_path):
                results.append(f"{indent_str}FILE: {item}")
            elif os.path.isdir(item_path):
                results.append(f"{indent_str}DIR: {item}/")
                # TODO: Recursively explore subdirectory
                # results.extend(list_files_recursive(item_path, indent + 1))

    except PermissionError:
        results.append(f"{'  ' * indent}[Permission Denied]")

    return results

# Test it
files = list_files_recursive("./week04-recursion")
for f in files:
    print(f)
```

**C++ version** (using filesystem library):

```cpp
#include <filesystem>
#include <vector>
#include <string>
#include <iostream>

namespace fs = std::filesystem;

void listFilesRecursive(const std::string& path,
                        std::vector<std::string>& results,
                        int indent = 0) {
    std::string indentStr(indent * 2, ' ');

    try {
        for (const auto& entry : fs::directory_iterator(path)) {
            if (entry.is_regular_file()) {
                results.push_back(indentStr + "FILE: " + entry.path().filename().string());
            } else if (entry.is_directory()) {
                results.push_back(indentStr + "DIR: " + entry.path().filename().string() + "/");
                // TODO: Recursively explore subdirectory
                // listFilesRecursive(entry.path().string(), results, indent + 1);
            }
        }
    } catch (const fs::filesystem_error& e) {
        results.push_back(indentStr + "[Permission Denied]");
    }
}
```

**Expected output**:
```
DIR: week04-recursion/
  FILE: factorial.py
  FILE: fibonacci.py
  DIR: test_data/
    FILE: test1.txt
    FILE: test2.txt
  FILE: tower_of_hanoi.py
```

**Grading** (5 points):
- Recursive directory traversal implemented (3 pts)
- Indentation shows depth correctly (1 pt)
- Handles errors gracefully (1 pt)

---

## Part 4: PM Integration - User Stories (3 points)

### Write User Stories for Technical Projects

Create `user_stories.md` with user stories for each recursive algorithm:

**Template**:
```markdown
# User Stories for Recursive Algorithms Project

## Story 1: Factorial Calculator
**As a** student learning recursion
**I want to** calculate factorials recursively
**So that** I can understand how recursion breaks problems into smaller pieces

**Acceptance Criteria**:
- [ ] Handles base case (n=0, n=1)
- [ ] Recursively calculates n * factorial(n-1)
- [ ] Returns correct results for n up to 20
- [ ] Includes error handling for negative n

**Story Points**: 2

---

## Story 2: Fibonacci Generator
[Your user story here]

---

## Story 3: Tower of Hanoi Solver
[Your user story here]

---

## Story 4: File System Explorer
[Your user story here]
```

**Grading** (3 points):
- All 4 user stories written (2 pts)
- Proper user story format (1 pt)

---

## Submission Checklist

- [ ] All 4 recursive algorithms implemented
- [ ] All test cases passing
- [ ] Performance benchmarks run (factorial & Fibonacci)
- [ ] performance_analysis.md with recursion tree drawing
- [ ] File system explorer implemented
- [ ] user_stories.md with all 4 stories
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request created with descriptive summary

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Recursive Algorithms** | 10 | All 4 implemented (6), tests pass (2), documented (2) |
| **Performance Analysis** | 7 | Factorial benchmark (1), Fibonacci benchmark (2), analysis report (2), recursion tree (1), when-to-use discussion (1) |
| **File System Explorer** | 5 | Recursive traversal (3), indentation (1), error handling (1) |
| **PM Integration** | 3 | User stories complete (2), proper format (1) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code doesn't run: -5 points
- Tests don't pass: -4 points
- Missing performance analysis: -3 points
- Missing prompts.txt: -2 points
- Recursion tree not drawn: -1 point

---

## Resources

**After you've tried**:
- Runestone: [Recursion Introduction](https://runestone.academy/ns/books/published/pythonds3/Recursion/WhatIsRecursion.html)
- VisuAlgo: [Recursion Visualization](https://visualgo.net/en/recursion)
- Python Tutor: [Visualize recursion calls](http://pythontutor.com)

**Tower of Hanoi**:
- Interactive puzzle: [towersofhanoi.info](https://www.towersofhanoi.info/Animate.aspx)

**File System Libraries**:
- Python os module: [docs.python.org](https://docs.python.org/3/library/os.html)
- C++ filesystem: [cppreference.com](https://en.cppreference.com/w/cpp/filesystem)

**Get Help**:
- Office Hours: See Canvas
- Discord: #week04-recursion channel

---

## Extension Challenges (+5 bonus)

1. **Memoized Fibonacci**: Implement Fibonacci with memoization (caching) to make recursive version fast:
   ```python
   def fib_memo(n, cache={}):
       if n in cache:
           return cache[n]
       if n <= 1:
           return n
       cache[n] = fib_memo(n-1, cache) + fib_memo(n-2, cache)
       return cache[n]
   ```
   Benchmark this vs naive recursive. How much faster?

2. **Recursive Maze Solver**: Implement recursive backtracking to solve a maze

3. **Recursive Permutations**: Generate all permutations of a string recursively

4. **Call Stack Visualization**: Create a visual representation of the call stack for Tower of Hanoi (n=3)

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
