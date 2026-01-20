# M05-A1: Hash Table Implementation Sprint (Sprint 2)

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 5 - Hashing & Hash Tables (Sprint 2)
**Week**: 9
**Points**: 50 (30 technical + 20 process)
**Sprint Duration**: 2 weeks (Week 9-10)
**Due**: End of Week 9

---

## Assignment Overview

**SPRINT 2: Velocity-Based Planning!** Build a hash table from scratch with collision resolution strategies. This sprint uses your Sprint 1 velocity to plan capacity more accurately. You'll implement separate chaining OR open addressing and deliver O(1) average-case lookups.

**Philosophy**: "Constant time is king." Hash tables are one of the most important data structures in programming—nearly every language has them built-in (dict, map, HashMap). Build one to understand how O(1) lookup actually works.

---

## Learning Objectives

By completing this sprint, you will:

1. Implement hash table with collision resolution strategy
2. Design hash functions for different data types
3. Apply velocity-based sprint planning (using Sprint 1 data)
4. Track sprint progress with improved estimation accuracy
5. Understand amortized analysis and load factor management

**Bloom's Level**: Apply, Create (CLO1, CLO2, CLO4)

---

## Sprint Overview

### Week 9 (THIS ASSIGNMENT):
- Velocity-based sprint planning
- Hash table implementation
- Collision resolution (choose ONE: chaining OR open addressing)
- Daily standups and burndown tracking
- **Deliverable**: Working hash table with tests

### Week 10 (M05-A2):
- Sprint review and velocity analysis
- Compare Sprint 1 vs Sprint 2 velocity
- Process improvements review

---

## Part 1: Velocity-Based Sprint Planning (6 points)

### Step 1: Review Sprint 1 Velocity

From your Sprint 1 Retrospective:
- **Sprint 1 Velocity**: [X] story points completed
- **Sprint 1 Time Variance**: [Y]%

### Step 2: Plan Sprint 2 Capacity

Create `SPRINT2_PLANNING.md`:

```markdown
# Sprint 2 Planning - Hash Table Implementation

**Sprint Goal**: Implement a fully functional hash table with collision resolution, achieving O(1) average-case operations.

**Sprint Duration**: 2 weeks (Week 9-10)

---

## Capacity Planning (Velocity-Based)

### Sprint 1 Velocity
- **Completed**: [X] story points
- **Baseline velocity**: [X] points per 2-week sprint

### Sprint 2 Capacity Prediction

**Using Sprint 1 velocity**: [X] points

**Adjustments**:
- Sprint 1 lessons learned: [Add/subtract points based on retrospective]
- Complexity comparison: Hash tables vs Linked Lists = [same/harder/easier]
- Available time this sprint: [More/same/less than Sprint 1]

**Final Sprint 2 Capacity**: [Y] story points

**Confidence Level**: Medium (based on 1 sprint of historical data)

---

## Sprint Backlog

### Story 1: Hash Function Design & Implementation
**As a** developer
**I want to** implement hash functions for integers and strings
**So that** I can convert keys to array indices

**Acceptance Criteria**:
- [ ] `hash(key, table_size)` function for integers
- [ ] `hash(key, table_size)` function for strings
- [ ] Hash values distribute evenly (test with 100+ keys)
- [ ] Modulo operation maps to valid indices

**Story Points**: 3
**Estimated Hours**: 2.5

---

### Story 2: Hash Table Class with Basic Structure
**As a** developer
**I want to** create the HashTable class foundation
**So that** I can build upon it with collision handling

**Acceptance Criteria**:
- [ ] HashTable class with configurable size
- [ ] Internal array/bucket structure initialized
- [ ] `size()` returns number of key-value pairs stored
- [ ] `isEmpty()` checks if table empty
- [ ] Load factor tracking

**Story Points**: 2
**Estimated Hours**: 1.5

---

### Story 3: Collision Resolution - Separate Chaining
**As a** developer
**I want to** handle collisions using linked lists at each bucket
**So that** multiple keys can hash to same index

**Acceptance Criteria**:
- [ ] Each bucket is a linked list (or Python list)
- [ ] Colliding keys added to bucket's list
- [ ] Search scans bucket for matching key
- [ ] Delete removes from bucket list

**Story Points**: 5
**Estimated Hours**: 4

**OR (if choosing open addressing instead):**

### Story 3: Collision Resolution - Open Addressing
**As a** developer
**I want to** handle collisions using linear probing
**So that** all data stays in main array

**Acceptance Criteria**:
- [ ] Linear probing finds next open slot
- [ ] Insert probes until empty slot found
- [ ] Search probes until key found or empty slot
- [ ] Delete uses tombstone marker
- [ ] Handles clustering awareness

**Story Points**: 6
**Estimated Hours**: 5

---

### Story 4: Insert, Search, Delete Operations
**As a** developer
**I want to** implement core hash table operations
**So that** I can use the hash table like a dictionary

**Acceptance Criteria**:
- [ ] `insert(key, value)` adds key-value pair
- [ ] `search(key)` returns value or None/null
- [ ] `delete(key)` removes key-value pair
- [ ] `contains(key)` checks existence
- [ ] All operations average O(1) with good hash function

**Story Points**: 4
**Estimated Hours**: 3.5

---

### Story 5: Dynamic Resizing (Rehashing)
**As a** developer
**I want to** resize table when load factor exceeds threshold
**So that** performance stays O(1) even as table fills

**Acceptance Criteria**:
- [ ] Track load factor (num_items / table_size)
- [ ] Trigger rehash when load factor > 0.7
- [ ] Double table size
- [ ] Rehash all existing keys to new table
- [ ] Maintain O(1) amortized performance

**Story Points**: 5
**Estimated Hours**: 4

---

### Story 6: Comprehensive Test Suite
**As a** developer
**I want to** test all operations and edge cases
**So that** I can verify correctness

**Acceptance Criteria**:
- [ ] Test basic insert/search/delete
- [ ] Test collision handling (force collisions)
- [ ] Test rehashing (fill table beyond 70%)
- [ ] Test with 1000+ items for performance
- [ ] All tests passing

**Story Points**: 3
**Estimated Hours**: 2.5

---

### Story 7: Performance Benchmarking
**As a** developer
**I want to** verify O(1) average performance
**So that** I can prove hash table efficiency

**Acceptance Criteria**:
- [ ] Benchmark insert on 1000, 10000, 100000 items
- [ ] Benchmark search on same sizes
- [ ] Compare to linked list search (O(n))
- [ ] Graph shows constant time for hash table
- [ ] Document load factor impact

**Story Points**: 3
**Estimated Hours**: 2

---

## Sprint Capacity Summary

**Total Story Points**: 25 (or 26 if using open addressing)
**Total Estimated Hours**: 20 (or 21.5)

**Capacity Check**:
- Sprint 2 capacity: [Y] points (from velocity calculation)
- Planned backlog: 25 points
- **Status**: [Over/under capacity by X points]

**Adjustment**: [If over capacity, which stories to defer? If under, what to add?]

---

## Definition of Done (Updated from Sprint 1)

A story is "Done" when:
- [ ] Code implemented and committed
- [ ] Tests written and passing
- [ ] Code documented with complexity analysis
- [ ] AI prompts documented in prompts.txt
- [ ] Performance benchmarked (where applicable)
- [ ] Code reviewed (self-review)
- [ ] Merged to sprint branch

---

## Sprint Risks

1. **Risk**: Hash function may not distribute evenly
   **Mitigation**: Test with 100+ keys, visualize distribution, use AI to debug

2. **Risk**: Rehashing is complex
   **Mitigation**: Implement as separate story, allow extra time, test thoroughly

3. **Risk**: [Your risk]
   **Mitigation**: [Your plan]
```

**Grading** (6 points):
- Velocity-based capacity calculation (2 pts)
- Sprint backlog with user stories (2 pts)
- Capacity check and adjustment (1 pt)
- Risks identified (1 pt)

---

## Part 2: Technical Implementation (30 points)

### Hash Table Requirements

Implement either **Separate Chaining** OR **Open Addressing** (your choice).

### Option A: Separate Chaining (Recommended)

**Python implementation**:

```python
class HashTable:
    """Hash table using separate chaining for collision resolution."""

    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]  # List of lists (buckets)
        self.num_items = 0

    def _hash(self, key):
        """
        Hash function for strings and integers.
        Returns index in range [0, size-1].
        """
        if isinstance(key, int):
            return key % self.size
        elif isinstance(key, str):
            # Simple string hash: sum of ASCII values
            hash_value = sum(ord(char) for char in key)
            return hash_value % self.size
        else:
            raise TypeError("Key must be int or str")

    def insert(self, key, value):
        """Insert key-value pair. O(1) average case."""
        index = self._hash(key)
        bucket = self.table[index]

        # Check if key already exists, update value
        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket[i] = (key, value)
                return

        # Key doesn't exist, append to bucket
        bucket.append((key, value))
        self.num_items += 1

        # Check load factor and rehash if needed
        if self.load_factor() > 0.7:
            self._rehash()

    def search(self, key):
        """Search for key, return value or None. O(1) average case."""
        index = self._hash(key)
        bucket = self.table[index]

        for k, v in bucket:
            if k == key:
                return v
        return None

    def delete(self, key):
        """Delete key-value pair. Returns True if deleted."""
        index = self._hash(key)
        bucket = self.table[index]

        for i, (k, v) in enumerate(bucket):
            if k == key:
                bucket.pop(i)
                self.num_items -= 1
                return True
        return False

    def contains(self, key):
        """Check if key exists in table."""
        return self.search(key) is not None

    def load_factor(self):
        """Return current load factor."""
        return self.num_items / self.size

    def _rehash(self):
        """Double table size and rehash all items."""
        print(f"Rehashing: {self.size} -> {self.size * 2}")
        old_table = self.table
        self.size *= 2
        self.table = [[] for _ in range(self.size)]
        self.num_items = 0

        # Reinsert all items
        for bucket in old_table:
            for key, value in bucket:
                self.insert(key, value)

    def display(self):
        """Display hash table contents."""
        for i, bucket in enumerate(self.table):
            if bucket:
                print(f"Bucket {i}: {bucket}")
```

**C++ implementation** (separate chaining with linked lists):

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <string>
#include <utility>

template <typename K, typename V>
class HashTable {
private:
    std::vector<std::list<std::pair<K, V>>> table;
    int size;
    int num_items;

    int hash(const K& key) {
        // TODO: Implement hash function
        // For int: key % size
        // For string: sum of characters % size
        return 0;
    }

    void rehash() {
        // TODO: Implement rehashing
    }

public:
    HashTable(int initial_size = 10) : size(initial_size), num_items(0) {
        table.resize(size);
    }

    void insert(const K& key, const V& value) {
        // TODO: Implement insert with collision handling
    }

    V* search(const K& key) {
        // TODO: Return pointer to value, or nullptr if not found
        return nullptr;
    }

    bool remove(const K& key) {
        // TODO: Implement delete
        return false;
    }

    bool contains(const K& key) {
        return search(key) != nullptr;
    }

    double loadFactor() {
        return static_cast<double>(num_items) / size;
    }

    void display() {
        // TODO: Print table contents
    }
};
```

### Option B: Open Addressing (Linear Probing)

```python
class HashTableOpenAddressing:
    """Hash table using linear probing for collision resolution."""

    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size
        self.num_items = 0
        self.DELETED = object()  # Tombstone marker

    def _hash(self, key):
        """Hash function."""
        if isinstance(key, int):
            return key % self.size
        elif isinstance(key, str):
            return sum(ord(char) for char in key) % self.size

    def _probe(self, key):
        """
        Linear probing: find index for key.
        Yields indices to try in sequence.
        """
        index = self._hash(key)
        for i in range(self.size):
            yield (index + i) % self.size

    def insert(self, key, value):
        """Insert using linear probing."""
        for index in self._probe(key):
            if self.table[index] is None or self.table[index] is self.DELETED:
                self.table[index] = (key, value)
                self.num_items += 1
                if self.load_factor() > 0.7:
                    self._rehash()
                return
            elif self.table[index][0] == key:
                # Update existing key
                self.table[index] = (key, value)
                return

        raise Exception("Hash table is full")

    def search(self, key):
        """Search using linear probing."""
        for index in self._probe(key):
            if self.table[index] is None:
                return None  # Not found
            elif self.table[index] is not self.DELETED:
                if self.table[index][0] == key:
                    return self.table[index][1]
        return None

    def delete(self, key):
        """Delete using tombstone marker."""
        for index in self._probe(key):
            if self.table[index] is None:
                return False
            elif self.table[index] is not self.DELETED:
                if self.table[index][0] == key:
                    self.table[index] = self.DELETED
                    self.num_items -= 1
                    return True
        return False

    def load_factor(self):
        return self.num_items / self.size

    def _rehash(self):
        """Rehash to larger table."""
        old_table = self.table
        self.size *= 2
        self.table = [None] * self.size
        self.num_items = 0

        for item in old_table:
            if item is not None and item is not self.DELETED:
                key, value = item
                self.insert(key, value)
```

### Test Suite

```python
def test_hash_table():
    ht = HashTable()

    # Test 1: Insert and search
    ht.insert("apple", 100)
    ht.insert("banana", 200)
    ht.insert("cherry", 300)
    assert ht.search("apple") == 100
    assert ht.search("banana") == 200
    print("Test 1 PASSED: Insert and search")

    # Test 2: Update existing key
    ht.insert("apple", 150)
    assert ht.search("apple") == 150
    print("Test 2 PASSED: Update existing key")

    # Test 3: Delete
    assert ht.delete("banana") == True
    assert ht.search("banana") is None
    print("Test 3 PASSED: Delete")

    # Test 4: Contains
    assert ht.contains("cherry") == True
    assert ht.contains("banana") == False
    print("Test 4 PASSED: Contains")

    # Test 5: Force collisions (keys that hash to same index)
    ht2 = HashTable(size=5)
    ht2.insert(5, "five")
    ht2.insert(10, "ten")   # 10 % 5 = 0, same as 5 % 5
    ht2.insert(15, "fifteen")  # 15 % 5 = 0, collision again
    assert ht2.search(5) == "five"
    assert ht2.search(10) == "ten"
    assert ht2.search(15) == "fifteen"
    print("Test 5 PASSED: Collision handling")

    # Test 6: Rehashing
    ht3 = HashTable(size=4)
    for i in range(10):
        ht3.insert(i, i * 10)
    # Should trigger rehash when load factor > 0.7
    assert ht3.size > 4  # Table should have grown
    assert ht3.search(5) == 50  # All items still accessible
    print("Test 6 PASSED: Rehashing")

    # Test 7: Large dataset
    ht4 = HashTable()
    for i in range(1000):
        ht4.insert(i, i)
    assert ht4.search(500) == 500
    assert ht4.num_items == 1000
    print("Test 7 PASSED: Large dataset")

    print("\n✓ All tests passed!")
```

**Grading - Technical Implementation** (30 points):
- Hash function for int and string (4 pts)
- HashTable class structure (3 pts)
- Insert operation with collision handling (6 pts)
- Search operation (4 pts)
- Delete operation (4 pts)
- Rehashing implementation (5 pts)
- Test suite with 7+ tests (3 pts)
- All tests passing (1 pt)

---

## Part 3: Sprint Process (14 points)

### Daily Standups (6 points)

Update `standup.md` daily with improved detail from Sprint 1 retrospective.

**Grading** (6 points):
- 5+ standup entries (3 pts)
- Shows actual progress (2 pts)
- Blockers and resolutions documented (1 pt)

### Burndown Chart (4 points)

Create `sprint2_burndown.csv` and graph.

**Grading** (4 points):
- Daily tracking in CSV (2 pts)
- Burndown chart graph (2 pts)

### Sprint Review (4 points)

Create `SPRINT2_REVIEW.md`:

```markdown
# Sprint 2 Review - Hash Table Implementation

**Sprint Goal**: O(1) hash table with collision resolution
**Goal Met**: [Yes/No]

## Completed Stories
[List with checkmarks]

**Total Completed**: [X] story points

## Velocity Comparison
- **Sprint 1 velocity**: [X] points
- **Sprint 2 velocity**: [Y] points
- **Change**: [+/-] Z points ([percentage])

## Demo
[Screenshot of tests passing and performance benchmark]

## What Improved from Sprint 1
[Specific improvements based on retrospective action items]
```

**Grading** (4 points):
- Review complete (2 pts)
- Velocity comparison (1 pt)
- Improvements from Sprint 1 noted (1 pt)

---

## Submission Checklist

- [ ] SPRINT2_PLANNING.md with velocity-based capacity
- [ ] HashTable implementation complete
- [ ] Collision resolution working (chaining OR open addressing)
- [ ] Rehashing implemented
- [ ] Test suite with 7+ tests passing
- [ ] standup.md with daily updates
- [ ] sprint2_burndown.csv and chart
- [ ] SPRINT2_REVIEW.md
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request from sprint2 branch

---

## Grading Rubric (50 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Planning** | 6 | Velocity calculation (2), backlog (2), capacity check (1), risks (1) |
| **Technical Implementation** | 30 | Hash function (4), structure (3), insert (6), search (4), delete (4), rehash (5), tests (3), passing (1) |
| **Daily Standups** | 6 | 5+ entries (3), progress (2), blockers (1) |
| **Burndown Chart** | 4 | CSV tracking (2), chart (2) |
| **Sprint Review** | 4 | Complete (2), velocity comparison (1), improvements (1) |
| **Total** | **50** | |

### Deductions
- Late submission: -10% per day
- Code doesn't run: -5 points
- Tests don't pass: -5 points
- No collision handling: -10 points
- No rehashing: -5 points

---

## Resources

**Hash Tables**:
- VisuAlgo: [Hash Table Visualization](https://visualgo.net/en/hashtable)
- Runestone: [Hashing](https://runestone.academy/ns/books/published/pythonds3/SortingAndSearching/Hashing.html)

**Hash Functions**:
- String hashing algorithms
- Collision resolution strategies

**Get Help**:
- Office Hours: See Canvas
- Discord: #week09-sprint2 channel

---

## Extension Challenges (+5 bonus)

1. **Quadratic Probing**: Implement open addressing with quadratic probing instead of linear

2. **Double Hashing**: Use second hash function for probing

3. **Performance Comparison**: Benchmark separate chaining vs open addressing

4. **Perfect Hashing**: For a fixed set of keys, find a hash function with no collisions

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
