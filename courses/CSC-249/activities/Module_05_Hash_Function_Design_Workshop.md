# Module 5 Activity: Hash Function Design Workshop - Building O(1) Lookup

**Duration**: 90 minutes
**Format**: Small groups (3-4 students) with experimentation
**Materials Needed**:
- Working C++/Python development environment
- Paper and markers for hash table visualization
- Sprint 2 planning materials
- Test datasets (names, numbers, strings)
- Collision tracking spreadsheet

**Learning Objectives**:
- Design hash functions for different data types
- Understand collision resolution strategies (chaining vs open addressing)
- Build a hash table from scratch
- Measure hash function quality (distribution, collisions)
- Apply velocity-based planning from Sprint 1 to Sprint 2

---

## Overview

**Welcome to Sprint 2!** You learned from Sprint 1. Now you'll use that velocity data to plan smarter.

Today's focus: **Hash Tables**—the data structure that makes dictionaries, sets, and database indexes possible. You'll discover why O(1) lookup is achievable and what happens when it breaks down.

You're going to:
1. Design your own hash functions
2. Watch collisions happen
3. Fix them with collision resolution strategies
4. Build a working hash table
5. Measure performance

**By the end of this workshop, you'll:**
- Understand how hash functions map keys to indices
- Implement chaining and open addressing for collisions
- Build a complete hash table with insert, search, delete
- Measure hash function quality
- Plan Sprint 2 using Sprint 1 velocity data

**Create first, optimize later.**

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Form groups**: 3-4 students per group

2. **Sprint 2 Retrospective** (from Sprint 1):
   ```
   Sprint 1 Velocity: _____ points
   Sprint 1 Completion Rate: _____%

   What took longer than expected in Sprint 1?
   [Your answer]

   Sprint 2 Capacity adjustment:
   Sprint 1 velocity × capacity factor = _____ points for Sprint 2
   ```

3. **Create Sprint 2 Issue**:
   ```
   Title: Sprint 2: Hash Table Implementation

   Description:
   Build a hash table with collision resolution to achieve O(1) average
   case performance for search operations.

   Acceptance Criteria:
   - [ ] Hash function design for strings and integers
   - [ ] Chaining collision resolution implemented
   - [ ] Insert, search, delete operations
   - [ ] Load factor tracking and resizing
   - [ ] Performance benchmarking vs linear search
   - [ ] Collision statistics collected

   Sprint Goal: Working hash table with <1.0 average collisions per insert

   Story Points: (Based on Sprint 1 velocity)
   ```

4. **Materials ready**:
   - Array/vector for hash table storage
   - Test data: ["Alice", "Bob", "Charlie", "David", "Emma", ...]

---

## Part 1: Bad Hash Functions - Learning from Failure (20 minutes)

### Instructions

The best way to understand good hash functions? Build terrible ones first.

**Step 1: The worst hash function**

**C++**:
```cpp
#include <iostream>
#include <string>
#include <vector>

// TERRIBLE HASH FUNCTION #1: Always returns 0
int hashFunction_terrible1(const std::string& key, int tableSize) {
    return 0;  // Everything goes to index 0!
}

// TERRIBLE HASH FUNCTION #2: Uses only first character
int hashFunction_terrible2(const std::string& key, int tableSize) {
    return key[0] % tableSize;
}

// TERRIBLE HASH FUNCTION #3: String length
int hashFunction_terrible3(const std::string& key, int tableSize) {
    return key.length() % tableSize;
}
```

**Python**:
```python
# TERRIBLE HASH FUNCTION #1: Always returns 0
def hash_terrible1(key, table_size):
    return 0  # Everything goes to index 0!

# TERRIBLE HASH FUNCTION #2: Uses only first character
def hash_terrible2(key, table_size):
    return ord(key[0]) % table_size

# TERRIBLE HASH FUNCTION #3: String length
def hash_terrible3(key, table_size):
    return len(key) % table_size
```

**Step 2: Test with real data**

```python
names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank",
         "Grace", "Henry", "Iris", "Jack", "Amy", "Anna"]

table_size = 10

# Track where each name gets hashed
print("Hash Function #1 (always 0):")
for name in names:
    index = hash_terrible1(name, table_size)
    print(f"{name} -> index {index}")

print("\nHash Function #2 (first character):")
for name in names:
    index = hash_terrible2(name, table_size)
    print(f"{name} -> index {index}")

print("\nHash Function #3 (length):")
for name in names:
    index = hash_terrible3(name, table_size)
    print(f"{name} -> index {index}")
```

**Step 3: Count collisions**

Create collision table:

| Hash Function | Collisions | Max at One Index | Distribution Quality |
|---------------|------------|------------------|---------------------|
| Always 0      | 11         | 12 (all at 0)    | Worst possible      |
| First char    | 4          | 3 (A names)      | Poor                |
| Length        | 8          | 4 (5-char names) | Poor                |

**Step 4: Analyze what went wrong**

```
Question: Why is "always return 0" terrible?
Answer: [All items collide - no distribution]

Question: Why is "first character" bad?
Answer: [Names starting with same letter collide, uneven distribution]

Question: Why is "length" bad?
Answer: [Many names have same length - common collision]

Key insight: Good hash functions should ____________ distribute keys
across the table.
```

### Expected Output

- Recognition of what makes a bad hash function
- Understanding that collisions destroy O(1) performance
- Data showing poor distribution
- Motivation for better hash function design

---

## Part 2: Better Hash Function - Polynomial Rolling Hash (20 minutes)

### Instructions

**Step 1: Implement polynomial rolling hash**

This is a common, effective hash function for strings.

**C++**:
```cpp
int hashFunction_good(const std::string& key, int tableSize) {
    const int PRIME = 31;  // Prime number for better distribution
    long long hash = 0;
    long long prime_pow = 1;

    for (char c : key) {
        hash = (hash + (c - 'a' + 1) * prime_pow) % tableSize;
        prime_pow = (prime_pow * PRIME) % tableSize;
    }

    return static_cast<int>((hash % tableSize + tableSize) % tableSize);  // Handle negatives
}
```

**Python**:
```python
def hash_good(key, table_size):
    """Polynomial rolling hash"""
    PRIME = 31
    hash_value = 0
    prime_pow = 1

    for char in key.lower():
        hash_value = (hash_value + (ord(char) - ord('a') + 1) * prime_pow) % table_size
        prime_pow = (prime_pow * PRIME) % table_size

    return hash_value % table_size
```

**Step 2: Test distribution**

```python
collision_count = {}
for name in names:
    index = hash_good(name, table_size)
    collision_count[index] = collision_count.get(index, 0) + 1

print("Distribution:")
for i in range(table_size):
    count = collision_count.get(i, 0)
    print(f"Index {i}: {'*' * count} ({count})")
```

**Expected output**:
```
Index 0: * (1)
Index 1: ** (2)
Index 2: * (1)
Index 3: ** (2)
Index 4: * (1)
Index 5: ** (2)
Index 6: * (1)
Index 7: * (1)
Index 8: * (1)
Index 9: (0)
```

Much better distribution!

**Step 3: Compare all hash functions**

| Hash Function   | Collisions | Distribution | Performance |
|-----------------|------------|--------------|-------------|
| Always 0        | 11         | Terrible     | O(n)        |
| First char      | 4          | Poor         | O(n/k)      |
| Length          | 8          | Poor         | O(n/k)      |
| Polynomial      | 1-2        | Good         | Near O(1)   |

**Step 4: Understand why polynomial works**

```
The polynomial hash:
hash = c₁×31⁰ + c₂×31¹ + c₃×31² + ...

Why prime number (31)?
[Answer: Reduces patterns, better distribution]

Why use all characters?
[Answer: Two different strings very unlikely to produce same hash]

Why modulo table_size?
[Answer: Maps hash value to valid array index]
```

### Expected Output

- Working polynomial hash function
- Even distribution across table
- Understanding of hash function design principles
- Significant reduction in collisions

---

## Part 3: Collision Resolution - Chaining (25 minutes)

### Instructions

Even good hash functions have collisions. Time to handle them!

**Step 1: Implement hash table with chaining**

**Python**:
```python
class HashNode:
    """Node for chaining (linked list in each bucket)"""
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size
        self.count = 0

    def hash(self, key):
        """Polynomial rolling hash"""
        PRIME = 31
        hash_value = 0
        prime_pow = 1

        for char in str(key).lower():
            hash_value = (hash_value + (ord(char) - ord('a') + 1) * prime_pow)
            prime_pow = (prime_pow * PRIME)

        return hash_value % self.size

    def insert(self, key, value):
        """Insert with chaining collision resolution"""
        index = self.hash(key)

        # Create new node
        new_node = HashNode(key, value)

        # If bucket is empty
        if self.table[index] is None:
            self.table[index] = new_node
        else:
            # Collision! Add to chain
            current = self.table[index]

            # Check if key already exists (update value)
            while current:
                if current.key == key:
                    current.value = value  # Update existing
                    return
                if current.next is None:
                    break
                current = current.next

            # Add to end of chain
            current.next = new_node

        self.count += 1

    def search(self, key):
        """Search for key in hash table"""
        index = self.hash(key)
        current = self.table[index]

        # Traverse chain
        while current:
            if current.key == key:
                return current.value
            current = current.next

        return None  # Not found

    def delete(self, key):
        """Delete key from hash table"""
        index = self.hash(key)
        current = self.table[index]
        prev = None

        while current:
            if current.key == key:
                if prev is None:
                    # Deleting first node in chain
                    self.table[index] = current.next
                else:
                    prev.next = current.next
                self.count -= 1
                return True
            prev = current
            current = current.next

        return False  # Not found

    def display(self):
        """Visualize hash table"""
        for i in range(self.size):
            print(f"Index {i}: ", end="")
            current = self.table[i]
            while current:
                print(f"[{current.key}: {current.value}] -> ", end="")
                current = current.next
            print("NULL")

    def load_factor(self):
        """Calculate load factor"""
        return self.count / self.size

    def collision_stats(self):
        """Count collisions"""
        chains = 0
        max_chain = 0
        total_chain_length = 0

        for i in range(self.size):
            if self.table[i]:
                length = 0
                current = self.table[i]
                while current:
                    length += 1
                    current = current.next

                if length > 1:
                    chains += 1
                max_chain = max(max_chain, length)
                total_chain_length += length

        avg_chain = total_chain_length / self.size if self.size > 0 else 0

        return {
            'chains_with_collisions': chains,
            'max_chain_length': max_chain,
            'average_chain_length': avg_chain,
            'load_factor': self.load_factor()
        }
```

**Step 2: Test with data**

```python
# Create hash table
ht = HashTable(size=10)

# Insert student data
students = [
    ("Alice", 95),
    ("Bob", 87),
    ("Charlie", 92),
    ("David", 78),
    ("Emma", 88),
    ("Frank", 91),
    ("Grace", 85),
    ("Amy", 93),  # Might collide with Alice
]

print("Inserting students...")
for name, grade in students:
    ht.insert(name, grade)
    print(f"Inserted {name}: {grade}")

print("\nHash Table Contents:")
ht.display()

print("\nSearching:")
print(f"Alice's grade: {ht.search('Alice')}")
print(f"Bob's grade: {ht.search('Bob')}")
print(f"Unknown student: {ht.search('Zoe')}")

print("\nCollision Statistics:")
stats = ht.collision_stats()
for key, value in stats.items():
    print(f"{key}: {value}")
```

**Step 3: Analyze performance**

```
Load Factor = count / size = 8 / 10 = 0.8

Observations:
- Number of chains with collisions: _____
- Longest chain length: _____
- Average chain length: _____

Performance impact:
- Best case (no collision): O(1)
- Worst case (all items in one chain): O(n)
- Average case (good hash, low load factor): O(1 + α) where α = load factor
```

**Step 4: Test resizing**

```python
def resize(self):
    """Double table size when load factor > 0.7"""
    if self.load_factor() <= 0.7:
        return

    old_table = self.table
    self.size *= 2
    self.table = [None] * self.size
    self.count = 0

    # Rehash all elements
    for bucket in old_table:
        current = bucket
        while current:
            self.insert(current.key, current.value)
            current = current.next
```

### Expected Output

- Working hash table with chaining
- Visualization showing chains at collision indices
- Understanding of load factor impact
- Collision statistics collected

---

## Part 4: Open Addressing - Linear Probing (20 minutes)

### Instructions

Alternative collision strategy: instead of chaining, find another empty slot.

**Step 1: Implement linear probing**

```python
class HashTableOpenAddressing:
    def __init__(self, size=10):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size
        self.count = 0

    def hash(self, key):
        """Same hash function as before"""
        PRIME = 31
        hash_value = 0
        for char in str(key).lower():
            hash_value = (hash_value + ord(char)) * PRIME
        return hash_value % self.size

    def insert(self, key, value):
        """Insert with linear probing"""
        index = self.hash(key)
        original_index = index
        probes = 0

        while self.keys[index] is not None:
            # Key already exists - update
            if self.keys[index] == key:
                self.values[index] = value
                return probes

            # Linear probe: try next index
            index = (index + 1) % self.size
            probes += 1

            # Table is full
            if index == original_index:
                raise Exception("Hash table is full!")

        # Found empty slot
        self.keys[index] = key
        self.values[index] = value
        self.count += 1
        return probes

    def search(self, key):
        """Search with linear probing"""
        index = self.hash(key)
        original_index = index

        while self.keys[index] is not None:
            if self.keys[index] == key:
                return self.values[index]

            index = (index + 1) % self.size

            if index == original_index:
                break

        return None

    def display(self):
        """Show table contents"""
        for i in range(self.size):
            if self.keys[i] is not None:
                print(f"Index {i}: [{self.keys[i]}: {self.values[i]}]")
            else:
                print(f"Index {i}: [EMPTY]")
```

**Step 2: Compare with chaining**

```python
# Test both implementations
print("=== CHAINING ===")
ht_chain = HashTable(size=10)
for name, grade in students:
    ht_chain.insert(name, grade)
ht_chain.display()
print(f"Load factor: {ht_chain.load_factor()}")

print("\n=== OPEN ADDRESSING ===")
ht_open = HashTableOpenAddressing(size=10)
for name, grade in students:
    probes = ht_open.insert(name, grade)
    if probes > 0:
        print(f"{name} required {probes} probes (collision)")
ht_open.display()
```

**Step 3: Understand clustering**

```
Primary Clustering Problem:
When collisions happen, items cluster together.
This makes future insertions slower (more probes needed).

Example:
[A] [B] [C] [ ] [ ] [ ] [ ]
Insert D, hashes to index 1 (occupied by B)
Probe sequence: 1 → 2 (C) → 3 (found!)

Now we have:
[A] [B] [C] [D] [ ] [ ] [ ]

Insert E, hashes to index 2:
Probe sequence: 2 → 3 → 4 (found!)

Cluster grows: [A] [B] [C] [D] [E] [ ] [ ]
```

**Step 4: Compare strategies**

| Aspect            | Chaining              | Open Addressing    |
|-------------------|-----------------------|-------------------|
| Memory            | Extra for pointers    | No extra pointers |
| Cache performance | Poor (scattered)      | Good (contiguous) |
| Load factor limit | Can exceed 1.0        | Must stay < 1.0   |
| Deletion          | Simple                | Complex (markers) |
| Clustering        | No clustering         | Yes (primary)     |

### Expected Output

- Working open addressing implementation
- Understanding of probing sequences
- Recognition of clustering problem
- Comparison of collision strategies

---

## Wrap-up & Sprint Planning (10 minutes)

### Discussion Questions

**1. O(1) Myth**: Hash tables promise O(1) lookup. Under what conditions does this break down?

**2. Trade-offs**: When would you choose chaining vs open addressing?

**3. Real-World Hash Tables**: Python dicts, Java HashMaps, C++ unordered_maps all use hash tables. Which collision strategy do you think they use?

**4. Sprint 2 Velocity**: Based on this workshop, estimate story points for your Sprint 2 hash table implementation. Use Sprint 1 velocity as baseline.

### Sprint 2 Planning

```
Sprint 1 Velocity: _____ points
Sprint 2 Capacity: _____ points (adjusted for availability)

Sprint 2 Commitment:
- [ ] Hash function implementation (__ points)
- [ ] Chaining collision resolution (__ points)
- [ ] Insert/Search/Delete operations (__ points)
- [ ] Resizing and load factor tracking (__ points)
- [ ] Performance benchmarking (__ points)

Total: _____ points (should match capacity)
```

### Exit Ticket

**Submit via Canvas**:

```
1. Upload collision statistics from your hash table tests

2. Which hash function performed best? Why?

3. Explain chaining vs open addressing in your own words

4. Draw a hash table with 5 slots showing chaining after inserting
   keys that hash to: [2, 2, 0, 2, 4]

5. What's your Sprint 2 velocity-based commitment? _____ points
```

---

## Extension Challenges (Optional)

### Challenge 1: Quadratic Probing
Instead of linear (+1, +2, +3), try quadratic (+1², +2², +3²)

### Challenge 2: Double Hashing
Use second hash function for probe sequence

### Challenge 3: Perfect Hashing
Design hash function with zero collisions for known dataset

### Challenge 4: Bloom Filter
Implement probabilistic data structure using multiple hash functions

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Sprint 2 planning setup
- **10-30 min**: Bad hash functions
- **30-50 min**: Good hash function design
- **50-75 min**: Chaining implementation
- **75-95 min**: Open addressing
- **95-105 min**: Sprint planning

### Common Struggles

**Hash function design**: Students struggle with why polynomial works
- **Fix**: Show concrete examples with collisions
- Visualize distribution

**Chaining linked lists**: Pointer management again
- **Fix**: Reference Module 4 linked list knowledge

**Modulo arithmetic**: Negative numbers, overflow
- **Fix**: Explain `(hash % size + size) % size` pattern

### Success Indicators

Students are on track if they:
- ✅ Recognize poor vs good distribution
- ✅ Implement working chaining
- ✅ Understand load factor impact
- ✅ Can compare collision strategies
- ✅ Use Sprint 1 data for Sprint 2 planning

---

**Sprint 2 continues with velocity-based planning!**
