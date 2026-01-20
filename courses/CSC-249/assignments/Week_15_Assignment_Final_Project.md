# M08-A1: Final Capstone Project - Multi-Structure System

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 8 - Final Project & Portfolio
**Week**: 15
**Points**: 100 (60 technical + 40 process/design)
**Due**: End of Week 15

---

## Assignment Overview

**THE CAPSTONE!** Design and implement an original system that meaningfully integrates 3+ data structures from the course. This is YOUR chance to demonstrate mastery, creativity, and professional development practices.

**Philosophy**: "Synthesis proves understanding." Anyone can implement a tutorial—true learning means combining concepts to solve novel problems. This project shows employers you can architect real systems, not just follow instructions.

---

## Learning Objectives

By completing this capstone, you will:

1. Design complex system architecture using multiple data structures
2. Justify data structure choices with performance trade-offs
3. Implement production-quality code with comprehensive testing
4. Document design decisions and technical architecture
5. Demonstrate cumulative mastery of course concepts

**Bloom's Level**: Evaluate, Create (CLO1, CLO2, CLO3, CLO4, CLO5)

---

## Part 1: Project Proposal & Architecture Design (15 points)

### Step 1: Choose Your Project Domain

**Requirements**:
- Must use 3+ DIFFERENT data structures from course
- Must solve a real problem (not just "combine structures for no reason")
- Must have clear user stories/use cases
- Must demonstrate WHY each structure was chosen

**Project Ideas**:

**Option A: Task Management System with Smart Scheduling**
- **Priority Queue**: Task prioritization
- **Hash Table**: O(1) task lookup by ID
- **Graph**: Task dependencies & critical path
- **Tree (BST/Heap)**: Scheduled task ordering
- **Features**: Add tasks, auto-schedule based on dependencies, priority reordering, deadline tracking

**Option B: Social Media Feed Aggregator**
- **Hash Table**: Fast user lookup
- **Heap**: Top K most popular posts
- **Linked List**: Chronological feed
- **BST/Tree**: Timestamp-based post retrieval
- **Features**: User timelines, trending posts, friend feed aggregation

**Option C: Music Library & Playlist Manager**
- **Hash Table**: Song lookup by ID
- **BST**: Alphabetical/genre organization
- **Linked List**: Playlist management
- **Heap**: Top played songs, recommendation queue
- **Features**: Playlist CRUD, smart shuffle, play history, recommendations

**Option D: Academic Course Scheduler**
- **Graph**: Course prerequisites & conflicts
- **Hash Table**: Course catalog lookup
- **Heap**: Priority registration queue
- **Tree**: Time slot scheduling
- **Features**: Prerequisite validation, conflict detection, waitlist management

**Option E: Your Original Idea (Requires Approval)**
- Submit proposal to instructor by Week 14 end
- Must meet all requirements above

### Step 2: Create Architecture Design Document

Create `PROJECT_PROPOSAL.md`:

```markdown
# Capstone Project Proposal - [Your Project Name]

## Executive Summary
[2-3 sentences: What are you building and why?]

---

## Problem Statement

**User Story**:
As a [type of user]
I want to [goal]
So that [benefit]

**Pain Points**:
1. [Current problem without this system]
2. [Another problem]
3. [Another problem]

---

## System Architecture

### Data Structures Used

#### 1. [Structure Name - e.g., Hash Table]
**Purpose**: [What does this structure do in your system?]
**Operations**: [Which operations - insert, search, delete, etc.]
**Why This Structure**: [Why not array? Why not tree? Justify with Big-O]
**Example**:
```python
# Example usage in system
user_cache = HashMap()
user_cache.insert(user_id, user_data)  # O(1) lookup later
```

#### 2. [Second Structure - e.g., Priority Queue / Heap]
**Purpose**: [What does this do?]
**Operations**: [Which operations?]
**Why This Structure**: [Justification]
**Example**:
```python
# Example
priority_tasks = MinHeap()  # Min-heap sorted by deadline
priority_tasks.insert(task, deadline)
next_task = priority_tasks.extract_min()  # Get most urgent
```

#### 3. [Third Structure - e.g., Graph]
**Purpose**: [What does this do?]
**Operations**: [Which operations?]
**Why This Structure**: [Justification]
**Example**:
```python
# Example
dependencies = Graph()
dependencies.add_edge(task1, task2)  # task2 depends on task1
valid_order = dependencies.topological_sort()
```

#### 4. [Fourth Structure - OPTIONAL for bonus]
[Same format]

---

## System Interface

### User Operations

**Operation 1: [e.g., Add Task]**
```python
system.add_task(title="Finish project", priority=1, deadline="2026-01-25")
# Uses: Hash table for storage, heap for priority queue
```

**Operation 2: [e.g., Get Next Task]**
```python
next_task = system.get_next_task()
# Uses: Heap to extract highest priority, graph to check dependencies
```

**Operation 3: [e.g., Complete Task]**
```python
system.complete_task(task_id=123)
# Uses: Hash table for lookup, graph to unlock dependent tasks
```

[Define 5-8 core operations]

---

## Performance Analysis

### Time Complexity Goals

| Operation | Target Complexity | Data Structure Used | Justification |
|-----------|------------------|-------------------|---------------|
| Add task | O(log n) | Min-heap insert | Need ordered priority |
| Get next task | O(log n) | Heap extract | Priority-based |
| Lookup task | O(1) avg | Hash table | Fast ID lookup |
| Find dependencies | O(V+E) | Graph DFS | Traverse all deps |

---

## Data Flow Example

Walk through one complete user scenario:

**Scenario: User adds a task with dependencies**

1. User calls `add_task("Write report", depends_on=["Research"])`
2. System checks if "Research" exists using **hash table lookup** - O(1)
3. System adds task to **hash table** by ID - O(1)
4. System adds edge to **dependency graph** - O(1)
5. System inserts task into **priority heap** - O(log n)
6. System validates no circular dependencies using **graph cycle detection** - O(V+E)

**Structures Used**: Hash table, graph, heap
**Total Complexity**: O(V + E + log n)

---

## Success Criteria

This project is successful if:
- [ ] All 3+ data structures meaningfully integrated
- [ ] System solves real problem (not contrived)
- [ ] 10+ operations implemented and tested
- [ ] Performance meets Big-O goals
- [ ] Code is production-quality (documented, tested, error handling)

---

## Risks & Mitigation

**Risk 1**: Graph algorithms too complex
**Mitigation**: Start with DFS/BFS from Sprint 4, adapt to project needs

**Risk 2**: Integration complexity (connecting structures)
**Mitigation**: Build each structure separately first, then integrate

**Risk 3**: Scope too large
**Mitigation**: Define MVP (minimum viable product) with 3 structures, 5 operations

---

## Implementation Timeline

**Week 15 Day 1-2**: Architecture design, proposal document
**Week 15 Day 3-4**: Implement core data structures (if not reusing from sprints)
**Week 15 Day 5-6**: Integrate structures, implement operations
**Week 15 Day 7**: Testing, documentation, submission

---

## Resources Needed

**From Previous Sprints**:
- [ ] Linked list implementation (Sprint 1)
- [ ] Hash table implementation (Sprint 2)
- [ ] BST/Heap implementation (Sprint 3)
- [ ] Graph implementation (Sprint 4)

**New Development**:
- [ ] Integration layer connecting structures
- [ ] User interface (CLI or simple GUI)
- [ ] Test suite
```

**Grading - Proposal** (15 points):
- Problem statement clear and compelling (3 pts)
- 3+ data structures justified (6 pts)
- System interface defined (3 pts)
- Performance analysis (2 pts)
- Timeline and risks identified (1 pt)

---

## Part 2: Technical Implementation (60 points)

### Core Requirements

**Minimum Requirements**:
1. Use 3+ DIFFERENT data structures from course
2. Implement 8+ meaningful operations
3. Structures must interact (not just separate features)
4. Comprehensive test suite (20+ tests)
5. Performance meets Big-O specifications
6. Production-quality code (error handling, edge cases)

### Implementation Guidelines

**Project structure**:
```
week15-capstone-project/
├── PROJECT_PROPOSAL.md
├── README.md (how to use your system)
├── src/
│   ├── main.py (or main.cpp)
│   ├── hash_table.py (if implementing fresh)
│   ├── heap.py
│   ├── graph.py
│   └── [your_system].py (integration layer)
├── tests/
│   ├── test_hash_table.py
│   ├── test_heap.py
│   ├── test_graph.py
│   └── test_integration.py (most important!)
├── docs/
│   ├── ARCHITECTURE.md
│   └── PERFORMANCE_ANALYSIS.md
├── data/
│   └── sample_data.txt (test datasets)
└── prompts.txt
```

### Example Implementation: Task Manager (Partial)

```python
from hash_table import HashMap
from heap import MinHeap
from graph import Graph

class TaskManager:
    """Task management system with smart scheduling."""

    def __init__(self):
        # Multiple structures working together
        self.tasks = HashMap()  # ID -> Task object
        self.priority_queue = MinHeap()  # (priority, deadline, task_id)
        self.dependencies = Graph(directed=True)  # Task dependency graph
        self.next_id = 1

    def add_task(self, title, priority=5, deadline=None, depends_on=None):
        """
        Add task to system.

        Time Complexity: O(log n) - dominated by heap insert
        """
        # Validate dependencies exist
        if depends_on:
            for dep_id in depends_on:
                if not self.tasks.search(dep_id):
                    raise ValueError(f"Dependency {dep_id} does not exist")

        # Create task
        task_id = self.next_id
        self.next_id += 1

        task = {
            'id': task_id,
            'title': title,
            'priority': priority,
            'deadline': deadline,
            'depends_on': depends_on or [],
            'completed': False
        }

        # Store in hash table - O(1)
        self.tasks.insert(task_id, task)

        # Add to priority queue - O(log n)
        self.priority_queue.insert((priority, deadline, task_id))

        # Add to dependency graph - O(1)
        self.dependencies.add_vertex(task_id)
        if depends_on:
            for dep_id in depends_on:
                self.dependencies.add_edge(dep_id, task_id)

        # Validate no circular dependencies - O(V+E)
        if self._has_circular_dependencies():
            # Rollback task addition
            self.tasks.delete(task_id)
            raise ValueError("Circular dependency detected")

        return task_id

    def get_next_task(self):
        """
        Get highest priority task with no incomplete dependencies.

        Time Complexity: O(log n + D) where D = max dependencies per task
        """
        while not self.priority_queue.is_empty():
            priority, deadline, task_id = self.priority_queue.extract_min()

            # Check if task still exists and incomplete
            task = self.tasks.search(task_id)
            if not task or task['completed']:
                continue

            # Check dependencies satisfied
            if self._dependencies_satisfied(task_id):
                return task

            # Re-insert if dependencies not ready
            self.priority_queue.insert((priority, deadline, task_id))
            return None  # No tasks ready

        return None

    def complete_task(self, task_id):
        """
        Mark task complete.

        Time Complexity: O(1) - hash table update
        """
        task = self.tasks.search(task_id)
        if not task:
            raise ValueError(f"Task {task_id} not found")

        task['completed'] = True
        self.tasks.insert(task_id, task)  # Update

    def get_task_dependencies(self, task_id):
        """
        Get all tasks that must be completed before this one.

        Time Complexity: O(V+E) - DFS traversal
        """
        # DFS backwards through dependency graph
        visited = set()
        stack = [task_id]

        while stack:
            current = stack.pop()
            if current in visited:
                continue
            visited.add(current)

            # Get incoming edges (tasks this depends on)
            task = self.tasks.search(current)
            if task:
                stack.extend(task['depends_on'])

        visited.remove(task_id)  # Don't include self
        return list(visited)

    def _dependencies_satisfied(self, task_id):
        """Check if all dependencies are complete."""
        task = self.tasks.search(task_id)
        for dep_id in task['depends_on']:
            dep_task = self.tasks.search(dep_id)
            if not dep_task or not dep_task['completed']:
                return False
        return True

    def _has_circular_dependencies(self):
        """Detect circular dependencies using DFS."""
        # Implement cycle detection algorithm
        # (Use graph.has_cycle() from Sprint 4)
        pass

    # Add more operations:
    # - get_all_tasks()
    # - get_tasks_by_priority()
    # - delete_task()
    # - update_priority()
    # - get_critical_path() (longest path in dependency graph)
    # - get_task_count()
    # - clear_completed()
```

### Comprehensive Test Suite

```python
def test_task_manager():
    """Integration tests for TaskManager system."""

    tm = TaskManager()

    # Test 1: Add simple task
    task1 = tm.add_task("Buy groceries", priority=1)
    assert task1 == 1
    print("✓ Test 1: Add simple task")

    # Test 2: Add task with priority
    task2 = tm.add_task("Finish homework", priority=2)
    next_task = tm.get_next_task()
    assert next_task['id'] == task1  # Priority 1 comes first
    print("✓ Test 2: Priority ordering")

    # Test 3: Add task with dependencies
    task3 = tm.add_task("Submit homework", depends_on=[task2])
    next_task = tm.get_next_task()
    assert next_task['id'] != task3  # Can't do task3 until task2 done
    print("✓ Test 3: Dependency blocking")

    # Test 4: Complete dependency, unlock next
    tm.complete_task(task1)
    next_task = tm.get_next_task()
    assert next_task['id'] == task2
    print("✓ Test 4: Dependency unlocking")

    # Test 5: Circular dependency detection
    task4 = tm.add_task("Task A")
    task5 = tm.add_task("Task B", depends_on=[task4])
    try:
        # Try to make task4 depend on task5 (circular!)
        tm.add_task("Task C", depends_on=[task5, task4])
        # Then update task4 to depend on task5 - circular!
        # Should raise error
        assert False, "Should have detected circular dependency"
    except ValueError:
        print("✓ Test 5: Circular dependency detection")

    # Test 6: Get all dependencies
    deps = tm.get_task_dependencies(task3)
    assert task2 in deps
    print("✓ Test 6: Dependency traversal")

    # Test 7: Performance test (large dataset)
    import time
    start = time.time()
    for i in range(1000):
        tm.add_task(f"Task {i}", priority=i % 10)
    elapsed = time.time() - start
    assert elapsed < 1.0  # Should be fast
    print(f"✓ Test 7: Added 1000 tasks in {elapsed:.3f}s")

    # Test 8: Stress test - get next from 1000 tasks
    start = time.time()
    for _ in range(100):
        tm.get_next_task()
    elapsed = time.time() - start
    assert elapsed < 0.5
    print(f"✓ Test 8: 100 get_next operations in {elapsed:.3f}s")

    # Add 12 more tests covering:
    # - Edge cases (empty queue, no dependencies, etc.)
    # - Error handling (invalid task IDs, etc.)
    # - All operations
    # - Performance benchmarks

    print("\n✓ All integration tests passed!")

if __name__ == "__main__":
    test_task_manager()
```

**Grading - Implementation** (60 points):
- 3+ data structures integrated (15 pts)
- 8+ operations implemented (16 pts)
- Structures interact meaningfully (8 pts)
- Test suite comprehensive (20+ tests) (10 pts)
- Performance meets Big-O goals (5 pts)
- Production quality (error handling, edge cases) (6 pts)

---

## Part 3: Technical Documentation (15 points)

### Create ARCHITECTURE.md

```markdown
# System Architecture - [Your Project]

## Overview
[High-level system description]

---

## Data Structure Integration Diagram

```
┌─────────────┐
│  User Input │
└──────┬──────┘
       │
       v
┌─────────────────────────────────┐
│   TaskManager (Integration)     │
│  ┌─────────┐  ┌──────┐  ┌────┐ │
│  │HashMap  │  │Heap  │  │Graph│ │
│  │(Tasks)  │  │(Prio)│  │(Dep)│ │
│  └─────────┘  └──────┘  └────┘ │
└─────────────────────────────────┘
```

---

## Component Details

### HashMap Component
**Purpose**: O(1) task lookup by ID
**Operations**: insert, search, delete
**Implementation**: [Describe your hash function, collision handling]

### MinHeap Component
**Purpose**: Priority-based task ordering
**Operations**: insert, extract_min, peek
**Implementation**: [Array-based binary heap]

### Graph Component
**Purpose**: Task dependency relationships
**Operations**: add_edge, topological_sort, cycle_detection
**Implementation**: [Adjacency list representation]

---

## Algorithm Analysis

### Critical Path Analysis
[Describe most important algorithm in your system]

**Algorithm**: [Name - e.g., Topological Sort for valid task order]
**Time Complexity**: O(V+E)
**Space Complexity**: O(V)
**Why Needed**: [Explanation]

---

## Design Decisions

### Why These Structures?

**Decision 1: HashMap for task storage**
- **Alternative considered**: Array/List
- **Why rejected**: O(n) lookup vs O(1)
- **Trade-off accepted**: Higher memory usage for speed

**Decision 2: MinHeap for priority queue**
- **Alternative considered**: Sorted array
- **Why rejected**: O(n) insert vs O(log n)
- **Trade-off accepted**: Cannot access middle elements easily

**Decision 3: Graph for dependencies**
- **Alternative considered**: Nested hash table
- **Why rejected**: Complex dependency traversal
- **Trade-off accepted**: More memory overhead

---

## Performance Benchmarks

| Operation | Big-O | Measured Time (n=1000) |
|-----------|-------|----------------------|
| Add task | O(log n) | 0.15 ms |
| Get next | O(log n) | 0.20 ms |
| Complete | O(1) | 0.05 ms |
| Get deps | O(V+E) | 2.5 ms |

---

## Testing Strategy

**Unit Tests**: Each data structure tested independently
**Integration Tests**: Operations using multiple structures
**Performance Tests**: Benchmarks with large datasets
**Edge Case Tests**: Empty, single element, circular dependencies
```

### Create PERFORMANCE_ANALYSIS.md

```markdown
# Performance Analysis - [Your Project]

## Theoretical Complexity

[Table of all operations with Big-O analysis]

---

## Empirical Testing

### Test Setup
**Hardware**: [Your system specs]
**Language**: [Python/C++]
**Test Dataset**: [Description]

### Results

**Scalability Test**:
- n=100: X ms
- n=1000: Y ms
- n=10000: Z ms

**Analysis**: [Does it match expected Big-O?]

---

## Bottlenecks Identified

**Bottleneck 1**: [Description]
**Impact**: [How much slower?]
**Potential Fix**: [How could this be optimized?]

---

## Comparison to Alternatives

| Approach | Time Complexity | Space Complexity | Pros | Cons |
|----------|----------------|-----------------|------|------|
| My implementation | [X] | [Y] | [Z] | [W] |
| Alternative 1 | [X] | [Y] | [Z] | [W] |
```

**Grading - Documentation** (15 points):
- Architecture diagram and explanation (5 pts)
- Algorithm analysis (3 pts)
- Design decision justification (4 pts)
- Performance benchmarks (3 pts)

---

## Part 4: Process Reflection (10 points)

### Create CAPSTONE_REFLECTION.md

```markdown
# Capstone Project Reflection

## Design Process

**How did I decide which structures to use?**
[Reflection on architecture decisions]

**What challenges did I face integrating structures?**
[Integration challenges]

**What would I do differently?**
[Improvements]

---

## Technical Growth

**Most complex part**: [What was hardest?]
**Biggest learning**: [What did you figure out?]
**Skills applied from sprints**: [How did previous work help?]

---

## Course Synthesis

**Data structures mastered**: [Which ones do you feel confident with?]
**Data structures still challenging**: [Which need more work?]
**Favorite structure**: [Which was most interesting and why?]

---

## Beyond This Course

**How will you use this in future projects?**
[Practical applications]

**What gaps remain in your knowledge?**
[What do you still need to learn?]

**Next steps for learning**:
1. [What will you study next?]
2. [Books/courses to explore?]
```

**Grading** (10 points):
- Design process reflection (3 pts)
- Technical growth discussion (4 pts)
- Course synthesis (3 pts)

---

## Submission Checklist

- [ ] PROJECT_PROPOSAL.md with architecture design
- [ ] Complete implementation (3+ structures, 8+ operations)
- [ ] Comprehensive test suite (20+ tests passing)
- [ ] ARCHITECTURE.md explaining system design
- [ ] PERFORMANCE_ANALYSIS.md with benchmarks
- [ ] CAPSTONE_REFLECTION.md
- [ ] README.md with usage instructions
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request with clear description

---

## Grading Rubric (100 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Proposal & Design** | 15 | Problem (3), structures justified (6), interface (3), performance (2), timeline (1) |
| **Technical Implementation** | 60 | Structures (15), operations (16), integration (8), tests (10), performance (5), quality (6) |
| **Documentation** | 15 | Architecture (5), analysis (3), decisions (4), benchmarks (3) |
| **Process Reflection** | 10 | Design process (3), growth (4), synthesis (3) |
| **Total** | **100** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code doesn't compile: -10 points
- Tests don't pass: -10 points
- Fewer than 3 structures: -20 points
- Structures don't meaningfully interact: -15 points
- Missing performance analysis: -5 points
- Missing prompts.txt: -5 points

---

## Resources

**Design Patterns**:
- Facade pattern for integration layer
- Strategy pattern for swappable data structures

**Performance Testing**:
- Python: `timeit` module
- C++: `<chrono>` library

**Documentation**:
- Architecture diagrams: draw.io, lucidchart
- Performance graphs: matplotlib, gnuplot

**Get Help**:
- Office Hours: See Canvas
- Discord: #week15-capstone channel

---

## Extension Challenges (+10 bonus)

1. **4th Data Structure**: Add meaningful 4th structure (not trivial)
2. **GUI Interface**: Build visual interface (not just CLI)
3. **Persistence**: Save/load system state to file
4. **Advanced Algorithm**: Implement A*, red-black tree balancing, or other advanced algorithm
5. **Real-Time Visualization**: Animate data structure operations

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
