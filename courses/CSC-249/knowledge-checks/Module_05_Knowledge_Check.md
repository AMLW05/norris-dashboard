# Module 5 Knowledge Check: Hashing & Hash Tables - Sprint 2

**Purpose**: Assess understanding of hash functions, collision resolution, hash table implementation, and velocity-based planning
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 18-22 minutes

---

## Technical Concepts (60%)

### Question 1
What is the primary goal of a hash function?

A) To sort data
B) To convert a key into an array index for fast lookup
C) To encrypt passwords
D) To compress files

**Correct Answer**: B
**Explanation**: Hash functions map keys (strings, objects) to array indices. hash("apple") might return 42, so you store "apple"'s data at array[42]. This enables O(1) average-case lookup—no searching needed, just compute hash and go directly to the location. This is why dictionaries/maps are so fast in Python/C++.

### Question 2
What is the ideal time complexity for hash table lookup, insertion, and deletion?

A) O(n)
B) O(log n)
C) O(1)
D) O(n²)

**Correct Answer**: C
**Explanation**: With a good hash function and proper collision handling, hash tables average O(1) for all operations. This is dramatically faster than arrays (O(n) search) or even balanced trees (O(log n)). Worst case can degrade to O(n) with many collisions, but good design minimizes this. Understanding when to use hash tables is a key professional skill.

### Question 3
What is a collision in hash tables?

A) When two computers crash
B) When two different keys hash to the same array index
C) When the hash function fails
D) When the table runs out of memory

**Correct Answer**: B
**Explanation**: hash("apple") = 42 and hash("banana") = 42—collision. Inevitable with large key spaces and finite array size (pigeonhole principle). The art of hash tables is handling collisions gracefully. Poor handling destroys O(1) performance. Good handling maintains it. You'll implement collision strategies and measure their impact.

### Question 4
What is chaining as a collision resolution strategy?

A) Linking hash tables together
B) Each array slot contains a linked list of all items that hash to that index
C) Rehashing with different functions
D) Deleting colliding items

**Correct Answer**: B
**Explanation**: Array[42] becomes a linked list containing both "apple" and "banana". Lookup: hash key, go to that index, traverse the short list. If lists stay small (good hash function), still nearly O(1). If one list gets huge (bad hash function), degrades toward O(n). Simple to implement; commonly used in practice.

### Question 5
What is open addressing as a collision resolution strategy?

A) Leaving empty spaces in the table
B) When a collision occurs, probe for the next available slot in the array
C) Making the array publicly accessible
D) Using multiple hash tables

**Correct Answer**: B
**Explanation**: hash("apple") = 42 is occupied? Try 43, then 44... until you find empty slot. Lookup follows same probing sequence. Varieties: linear probing (try 42, 43, 44...), quadratic probing, double hashing. Trade-off: saves memory (no linked lists), but clustering can hurt performance. Different tool for different needs.

### Question 6
What is the load factor of a hash table?

A) How heavy the table is
B) The ratio of filled slots to total capacity (n/m)
C) The speed of the hash function
D) The number of collisions

**Correct Answer**: B
**Explanation**: Load factor = number of elements / array size. Load factor 0.75 means table is 75% full. High load factor (>0.7) increases collisions. Solution: resize (rehash everything into larger array). Most implementations auto-resize at load factor thresholds. Understanding load factor helps you reason about hash table performance.

### Question 7
Why is a good hash function important?

A) To make the code look complex
B) To distribute keys evenly across array indices, minimizing collisions
C) To slow down lookups
D) To encrypt data

**Correct Answer**: B
**Explanation**: Bad hash function: all keys hash to index 0—effectively a linked list, O(n) lookup. Good hash function: keys spread evenly—each slot has 0-2 items, nearly O(1). You'll experiment with different hash functions for strings and see how distribution quality affects performance. Theory predicts; benchmarking confirms.

### Question 8
What happens when a hash table's load factor becomes too high?

A) Nothing
B) Performance degrades due to increased collisions; table should resize
C) It automatically sorts itself
D) It deletes old entries

**Correct Answer**: B
**Explanation**: High load factor means more collisions, longer chains or probe sequences, slower operations. Professional implementations resize when load factor hits 0.7-0.8, creating larger array and rehashing all entries. Resizing is expensive (O(n)) but rare, amortizing to O(1) per operation over time. This trade-off is typical in data structures.

### Question 9
You need to store 1,000,000 user records and frequently look them up by username. Which data structure is best?

A) Unsorted array
B) Sorted array with binary search
C) Linked list
D) Hash table

**Correct Answer**: D
**Explanation**: Hash table gives O(1) average lookup—instant, even with millions of records. Arrays require O(n) linear search or O(log n) binary search. Linked lists are O(n). For large datasets with lookup-heavy workloads, hash tables dominate. This is why databases use hash indices. Match structure to usage pattern.

---

## Project Management & Sprint Skills (40%)

### Question 10
What is velocity in agile project management?

A) How fast you type
B) The average amount of work (story points) you complete per sprint
C) Your running speed
D) The speed of your code execution

**Correct Answer**: B
**Explanation**: Track completed work across sprints. Sprint 1: 10 points. Sprint 2: 12 points. Average velocity: 11 points. This tells you your realistic capacity. Planning without velocity is guessing. Planning with velocity is data-driven. You'll calculate your actual velocity from Sprint 1 to plan Sprint 2 commitments realistically.

### Question 11
You completed 15 points in Sprint 1. How should you plan Sprint 2?

A) Commit to 30 points—aim higher
B) Commit to roughly 15 points, adjusted for any known changes in availability
C) Commit to 5 points—play it safe
D) Don't plan; just code whatever

**Correct Answer**: B
**Explanation**: Velocity is your baseline. Sprint 2 is a normal week? Commit to ~15. Got a midterm? Commit to 10. Long weekend with no other classes? Maybe 18. Use data (Sprint 1 velocity) plus context (upcoming schedule) to set realistic commitments. Overcommit habitually? Burnout. Undercommit habitually? Underachievement. Balance matters.

### Question 12
What is the purpose of tracking velocity across multiple sprints?

A) To compete with classmates
B) To understand your sustainable pace and improve planning accuracy
C) To impress your instructor
D) Velocity tracking serves no purpose

**Correct Answer**: B
**Explanation**: Sprint 1: 10 pts. Sprint 2: 15 pts. Sprint 3: 12 pts. Average: ~12 pts. This is your sustainable pace. Now you can plan confidently: "At 12 pts/sprint, this 36-point final project needs 3 sprints." Velocity tracking transforms vague hope into concrete planning. It's self-knowledge applied to project management.

### Question 13
In your Sprint 2 retrospective, you notice hash table implementation took 12 points instead of estimated 8. What should you document?

A) Nothing—just move on
B) Collision handling was more complex than expected; adjust future hash-related estimates
C) You're bad at estimating
D) Hash tables are impossible

**Correct Answer**: B
**Explanation**: Specific insights improve future estimates. "Underestimated collision edge cases—testing all scenarios took extra time." Next time: estimate hash-related tasks higher. This calibration is the value of retrospectives. You're building a mental model of what different kinds of work actually cost. That's professional-grade self-awareness.

### Question 14
How does Sprint 1 velocity data inform Sprint 2 planning?

A) It doesn't—they're separate sprints
B) Sprint 1's actual completion rate sets a realistic baseline for Sprint 2 commitments
C) You should always do more in Sprint 2
D) Sprint 2 ignores Sprint 1 data

**Correct Answer**: B
**Explanation**: Sprint 1 revealed your capacity under real conditions. Use that data. Don't commit to 25 points in Sprint 2 if you completed 10 in Sprint 1 (unless something major changed). Data-driven planning prevents the "I'll work twice as hard next time" trap that leads to burnout. Respect your measured capacity.

### Question 15
What makes Sprint 2 different from Sprint 1 in terms of PM maturity?

A) Nothing—they're identical
B) You now have velocity data, making planning more informed and realistic
C) Sprint 2 is easier
D) You skip planning in Sprint 2

**Correct Answer**: B
**Explanation**: Sprint 1: planning based on guesses. Sprint 2: planning based on Sprint 1 data. This is evidence-based improvement. By Sprint 4, you'll have 3 sprints of velocity data—highly predictive. PM skills compound: each sprint's data makes the next sprint's planning better. This is agile's empirical process control in action.

---

## Scoring Guide
- 90-100%: Excellent understanding of hash tables and velocity-based planning
- 80-89%: Good grasp, minor gaps in collision handling or velocity concepts
- 70-79%: Adequate foundation, review hash functions and sprint retrospectives
- Below 70%: Revisit Module 5 materials, practice collision resolution strategies

## Study Resources
- Module 5 Assignments: Hash Table Implementation Sprint, Sprint 2 Review & Velocity Analysis
- Canvas HTML: "Hash Functions and Collision Resolution"
- Canvas HTML: "Using Velocity to Plan Realistically"
- Hash table visualizations
- Load factor and resizing demonstrations
- Velocity calculation examples
- Sprint 2 retrospective template
- Collision resolution strategy comparisons
