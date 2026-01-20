# Module 2 Knowledge Check: Algorithm Analysis & Recursion

**Purpose**: Assess understanding of Big O notation, recursion, algorithm performance analysis, and user story writing
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 18-22 minutes

---

## Technical Concepts (60%)

### Question 1
What does Big O notation measure?

A) The exact runtime of an algorithm in seconds
B) How an algorithm's performance scales as input size grows
C) The amount of memory an algorithm uses
D) How many lines of code an algorithm has

**Correct Answer**: B
**Explanation**: Big O describes scalability, not absolute time. O(n) means "time grows linearly with input size." An O(n) algorithm might run in 1ms for n=100, or 10ms on slower hardware—but both scale linearly. This abstraction lets us compare algorithms independent of hardware. It's about the pattern of growth, not the speed.

### Question 2
An algorithm that checks if an item exists in an unsorted array has what time complexity?

A) O(1)
B) O(log n)
C) O(n)
D) O(n²)

**Correct Answer**: C
**Explanation**: Worst case: you check every element before finding it (or confirming it's not there). That's n comparisons for n items = O(n) linear time. If the array were sorted, binary search could achieve O(log n). If you had a hash table, O(1). Understanding these differences drives data structure selection in real projects.

### Question 3
Which time complexity is considered most efficient for large datasets?

A) O(n²)
B) O(n log n)
C) O(n)
D) O(1)

**Correct Answer**: D
**Explanation**: O(1) = constant time—doesn't matter if you have 10 items or 10 million, same speed. Hash table lookups aim for this. Then O(log n) (binary search), O(n) (linear scan), O(n log n) (good sorting), O(n²) (bubble sort—avoid for large data). These aren't just academic—they determine if your app is usable or freezes.

### Question 4
What is recursion in programming?

A) Reusing code with functions
B) A function that calls itself to solve smaller instances of the same problem
C) A type of loop
D) An optimization technique

**Correct Answer**: B
**Explanation**: Recursion breaks problems into smaller versions of themselves. factorial(5) = 5 * factorial(4), which calls factorial(3)... until factorial(1) = 1 (base case). Each call waits for the smaller call to complete. This matches how many problems naturally decompose. Master recursion; it unlocks divide-and-conquer algorithms.

### Question 5
Every recursive function must have which component to avoid infinite recursion?

A) A loop
B) A base case that stops recursion
C) A return statement
D) At least 10 recursive calls

**Correct Answer**: B
**Explanation**: Without a base case, recursion never stops—stack overflow crash. factorial(1) returning 1 without recursing is the base case. fibonacci(0) and fibonacci(1) are base cases. Every recursive call must move toward a base case. This is the recursion safety rule: always define when to stop.

### Question 6
What is the time complexity of calculating Fibonacci numbers using naive recursion (no memoization)?

A) O(n)
B) O(log n)
C) O(2^n)
D) O(n²)

**Correct Answer**: C
**Explanation**: Each fibonacci(n) calls fibonacci(n-1) and fibonacci(n-2), each of which makes two more calls... exponential explosion. fibonacci(40) makes billions of redundant calculations. This is why you'll compare naive recursion to iterative or memoized solutions—feel the performance difference empirically before studying the theory.

### Question 7
When comparing iterative and recursive solutions, recursion typically uses more of what resource?

A) CPU cycles
B) Memory (stack space)
C) Disk space
D) Network bandwidth

**Correct Answer**: B
**Explanation**: Each recursive call adds a frame to the call stack. Deep recursion (1000+ levels) can overflow the stack. Iteration uses constant stack space. Trade-off: recursion can be more elegant and match problem structure; iteration is safer for deep problems. Later you'll learn tail recursion optimization, but understanding this limitation is crucial.

### Question 8
You benchmark two sorting algorithms. Algorithm A takes 100ms for 1000 items and 400ms for 2000 items. What's the likely time complexity?

A) O(n) - linear
B) O(n log n)
C) O(n²) - quadratic
D) O(1) - constant

**Correct Answer**: C
**Explanation**: Doubling input (1000→2000) quadrupled time (100→400), suggesting O(n²). If it were O(n), time would double. If O(n log n), time would slightly more than double. This empirical analysis—seeing how runtime scales—is how you'll discover Big O in practice before memorizing formulas.

### Question 9
What Python library would you use to benchmark algorithm performance?

A) numpy
B) timeit
C) pandas
D) requests

**Correct Answer**: B
**Explanation**: timeit runs code multiple times, averages results, minimizes timing overhead. Example: `timeit.timeit('sum(range(100))', number=10000)`. This lets you empirically measure performance. You'll use this to discover that bubble sort really is slower than merge sort on large datasets. Measurement before theory.

---

## Project Management & AI Collaboration (40%)

### Question 10
What is a user story in agile development?

A) A biography of the user
B) "As a [role], I want [feature] so that [benefit]"
C) A bug report
D) A list of technical tasks

**Correct Answer**: B
**Explanation**: User stories frame work from the user's perspective. "As a developer, I want to benchmark my sorting algorithm so that I can choose the fastest implementation for large datasets." This keeps focus on value, not just activity. It answers "why are we building this?" Technical tasks follow from user stories.

### Question 11
Why write user stories for algorithm implementation projects?

A) Because it's required
B) To connect technical work to real-world value and learning goals
C) To avoid writing code
D) To make the project take longer

**Correct Answer**: B
**Explanation**: "As a student, I want to implement merge sort so that I understand divide-and-conquer algorithms." This clarifies purpose. It's not just about the code compiling; it's about the understanding you gain. User stories for learning projects keep you focused on educational value, not just completion.

### Question 12
You're estimating how long it will take to implement three recursive algorithms. What should you consider?

A) Only the lines of code
B) Complexity of logic, debugging time, testing, and your experience level
C) Just copy estimates from the internet
D) Always estimate the same for all algorithms

**Correct Answer**: B
**Explanation**: Fibonacci might be easier than Tower of Hanoi. If you've never done recursion, add time for learning. Include time for debugging (recursion is tricky at first), testing edge cases, and documentation. Honest estimation improves with practice. Track actual vs estimated time—this data improves future estimates.

### Question 13
What is the purpose of benchmarking algorithms empirically (measuring actual runtime)?

A) To prove your computer is fast
B) To see real-world performance and verify theoretical complexity
C) To waste time
D) Only for professional software

**Correct Answer**: B
**Explanation**: Theory says merge sort is O(n log n). Benchmarking shows you the actual difference: 50ms vs 5000ms on real data. This anchors abstract concepts in reality. You'll see bubble sort slow to a crawl on large arrays—visceral learning. Theory predicts, empiricism confirms. Do both.

### Question 14
When documenting AI collaboration for recursive algorithm implementation, what should prompts.txt include?

A) Just the final working code
B) Your initial prompts, AI responses, iterations, and what you learned
C) Nothing—recursion is too complex to explain
D) Only errors you encountered

**Correct Answer**: B
**Explanation**: Show your learning journey. "First I asked Claude to explain recursion. Didn't fully get it. Then asked for factorial example. Tried to implement, got stack overflow. Asked why, learned about base case. Implemented fibonacci, compared to iterative." This narrative shows iteration and learning—exactly what we're assessing.

### Question 15
How does measuring Big O empirically (through benchmarking) support "create before theory" pedagogy?

A) It doesn't—theory should always come first
B) You discover that some algorithms really are slower as data grows, making Big O notation meaningful
C) It's just busy work
D) Benchmarking replaces the need for theory

**Correct Answer**: B
**Explanation**: When you measure bubble sort taking 60 seconds on 10,000 items vs merge sort taking 0.5 seconds, Big O isn't abstract anymore—it's survival. You felt the pain of O(n²). Now when we say "quadratic time is problematic for large data," you know why. Experience → insight → theory. That's create-first learning.

---

## Scoring Guide
- 90-100%: Excellent understanding of algorithm analysis and recursion fundamentals
- 80-89%: Good grasp, minor gaps in Big O or recursion concepts
- 70-79%: Adequate foundation, review benchmarking and recursive thinking
- Below 70%: Revisit Module 2 materials, practice more recursive examples

## Study Resources
- Module 2 Assignments: Benchmarking Lab & Big O Analysis, Recursive Algorithms Project
- Canvas HTML: "Big O Notation for Beginners"
- Canvas HTML: "Understanding Recursion Through Examples"
- Python timeit documentation
- VisuAlgo.net: Recursion tree visualizations
- User story writing guide for technical projects
- Fibonacci recursion tree diagrams
