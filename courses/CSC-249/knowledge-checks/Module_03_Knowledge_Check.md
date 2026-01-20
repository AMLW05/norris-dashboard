# Module 3 Knowledge Check: Sorting Algorithms

**Purpose**: Assess understanding of sorting algorithms, divide-and-conquer strategies, performance analysis, and story point estimation
**Format**: 15 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 18-22 minutes

---

## Technical Concepts (60%)

### Question 1
What is the basic strategy of selection sort?

A) Divide the array in half repeatedly
B) Find the smallest element and swap it to the front, repeat for remaining elements
C) Compare adjacent elements and swap if out of order
D) Randomly shuffle until sorted

**Correct Answer**: B
**Explanation**: Selection sort scans the unsorted portion for the minimum, swaps it to the front, then repeats for the rest. Simple but inefficient: O(n²) because you scan n elements, then n-1, then n-2... Implementation-wise, it's great for learning basic sorting logic before tackling complex algorithms.

### Question 2
What is the time complexity of bubble sort in the worst case?

A) O(n)
B) O(n log n)
C) O(n²)
D) O(1)

**Correct Answer**: C
**Explanation**: Bubble sort compares adjacent pairs, bubbling large values to the end. Worst case (reverse-sorted array): first pass makes n-1 comparisons, second makes n-2... totaling n²/2 comparisons = O(n²). You'll feel this pain when benchmarking bubble sort on 10,000 items. It's pedagogically useful but professionally avoided.

### Question 3
Merge sort uses which algorithmic strategy?

A) Greedy approach
B) Divide-and-conquer
C) Dynamic programming
D) Brute force

**Correct Answer**: B
**Explanation**: Divide-and-conquer: split array in half, recursively sort each half, merge sorted halves. This pattern appears everywhere—binary search, quicksort, many tree algorithms. Understanding divide-and-conquer through merge sort unlocks a whole category of efficient algorithms. It's a fundamental problem-solving paradigm.

### Question 4
What is the time complexity of merge sort?

A) O(n)
B) O(n log n)
C) O(n²)
D) O(2^n)

**Correct Answer**: B
**Explanation**: Merge sort splits the array log n times (halving repeatedly), and each level does O(n) work merging. Total: O(n log n). This is optimal for comparison-based sorting. You can't do better than n log n when sorting by comparing elements. This efficiency makes merge sort production-worthy, unlike bubble sort's O(n²).

### Question 5
In quicksort, what is the purpose of the pivot element?

A) To store the smallest element
B) To partition the array into elements less than and greater than the pivot
C) To mark the middle of the array
D) To track sorting progress

**Correct Answer**: B
**Explanation**: Quicksort picks a pivot, rearranges so smaller elements are left, larger right, then recursively sorts each partition. Pivot selection matters—bad pivots (always smallest) degrade to O(n²). Good pivots (median or random) average O(n log n). Partitioning is the key insight that makes quicksort work.

### Question 6
Which sorting algorithm is generally most efficient for large, random datasets?

A) Bubble sort
B) Selection sort
C) Insertion sort
D) Merge sort or quicksort

**Correct Answer**: D
**Explanation**: Merge sort guarantees O(n log n). Quicksort averages O(n log n) with good pivot selection. Both crush bubble/selection/insertion sort's O(n²) on large data. Caveat: insertion sort shines for nearly-sorted small arrays. Choosing the right algorithm requires understanding your data characteristics. Benchmarking reveals these differences empirically.

### Question 7
What does "stable sorting" mean?

A) The algorithm doesn't crash
B) Equal elements maintain their relative order from the input
C) The algorithm always takes the same time
D) The sort can't be undone

**Correct Answer**: B
**Explanation**: If two elements are equal (both value 5), a stable sort keeps them in original order. Merge sort is stable; quicksort typically isn't (depends on implementation). Stability matters when sorting complex objects—e.g., sorting people by age, then by name, preserving name order within same age. Professional concern for real-world data.

### Question 8
You visualize insertion sort step-by-step and notice it's fast on nearly-sorted arrays. Why?

A) It's always fast
B) It only makes swaps when elements are out of order—few swaps if mostly sorted
C) It uses less memory
D) It's a coincidence

**Correct Answer**: B
**Explanation**: Insertion sort's best case is O(n) for already-sorted data—just scans, no swaps. Worst case O(n²) for reverse-sorted. This adaptive behavior makes it excellent for small or nearly-sorted datasets. Visualization helps you see why—watch how few operations it makes when data is mostly correct. Theory confirms what you observe.

### Question 9
When benchmarking sorting algorithms, why test different dataset sizes (100, 1000, 10000 elements)?

A) To waste time
B) To see how time complexity manifests—O(n²) grows much faster than O(n log n) as n increases
C) Because 100 items is always enough
D) To make prettier graphs

**Correct Answer**: B
**Explanation**: Small datasets (n=100): bubble sort might finish in 10ms, merge sort in 5ms—both fast enough. Large datasets (n=10000): bubble sort takes 60 seconds, merge sort 0.5 seconds—now the O(n²) vs O(n log n) difference is undeniable. Testing multiple sizes reveals scaling behavior, making Big O real.

---

## Project Management & AI Collaboration (40%)

### Question 10
What are story points in agile estimation?

A) Points awarded for completing stories
B) Relative measures of effort/complexity for tasks
C) Lines of code
D) Literal points on a graph

**Correct Answer**: B
**Explanation**: Story points estimate relative complexity. Implementing bubble sort might be 3 points (straightforward). Merge sort might be 8 points (recursion adds complexity). Not hours—points. Why? Complexity is more stable than time estimates. You might implement faster as you learn, but merge sort remains relatively harder than bubble sort.

### Question 11
How do story points help plan algorithm implementation projects?

A) They don't—just start coding
B) They help estimate capacity: if your sprint capacity is 20 points, you know which tasks fit
C) Higher points mean better code
D) They replace the need for testing

**Correct Answer**: B
**Explanation**: If you have 10 hours this week and know your velocity is ~15 points per week, you can commit to bubble sort (3 pts) + insertion sort (4 pts) + merge sort (8 pts) = 15 pts. Overcommit to 30 points? You'll fail. Story points enable data-driven planning, preventing burnout from unrealistic commitments.

### Question 12
You estimated implementing merge sort at 5 story points but it took as much effort as your previous 10-point task. What should you do?

A) Ignore it
B) Reflect in your retrospective: merge sort's recursion was harder than expected; adjust future estimates
C) Lower all your estimates
D) Stop estimating

**Correct Answer**: B
**Explanation**: Estimation improves through feedback. You underestimated recursion complexity. Note it: "Recursive algorithms are 2x harder than I thought." Next sprint, estimate quicksort at 10 points instead of 5. This calibration is the learning loop. Bad estimates aren't failures—they're data for improvement.

### Question 13
When creating a user story for implementing a sorting algorithm visualization, which is better?

A) "As a developer, I want to code bubble sort"
B) "As a learner, I want to visualize bubble sort step-by-step so that I understand how it moves elements"
C) "Implement sorting"
D) "Write code"

**Correct Answer**: B
**Explanation**: Good user stories specify role, feature, and benefit. B clarifies why visualization matters—it aids understanding. This keeps you focused on learning value, not just task completion. A is task-focused. C and D are too vague. The "so that" clause is crucial—it forces you to articulate value.

### Question 14
You're using AI to help implement quicksort. Your prompts.txt should include:

A) Only the final working code
B) Your conceptual questions, implementation attempts, debugging prompts, and insights gained
C) Just "Claude, write quicksort"
D) Nothing—don't document AI use

**Correct Answer**: B
**Explanation**: Show the journey: "Asked Claude to explain partitioning. Tried implementing, got index errors. Asked about off-by-one bugs in partitioning. Realized I wasn't handling pivot correctly. Re-implemented with clearer variable names." This documents learning, helps classmates avoid same mistakes, and proves deep engagement.

### Question 15
How does benchmarking multiple sorting algorithms support the "create before theory" approach?

A) It wastes time that could be spent reading
B) You empirically discover which algorithms are faster, making time complexity concepts concrete
C) It proves you don't need theory
D) Benchmarking replaces understanding

**Correct Answer**: B
**Explanation**: You run bubble sort, insertion sort, merge sort on 1000, 5000, 10000 items. Graph the results. Bubble sort's curve is steeper—you see O(n²). Merge sort's gentler slope shows O(n log n). Now Big O isn't abstract notation; it's the pattern you measured. Experience precedes theory; theory explains experience. That's create-first pedagogy.

---

## Scoring Guide
- 90-100%: Excellent understanding of sorting algorithms and estimation techniques
- 80-89%: Good grasp, minor gaps in divide-and-conquer or story points
- 70-79%: Adequate foundation, review merge sort and estimation practices
- Below 70%: Revisit Module 3 materials, visualize sorting algorithms more

## Study Resources
- Module 3 Assignments: Sorting Implementation & Visualization, Sorting Comparison Report
- Canvas HTML: "Divide-and-Conquer Explained"
- Canvas HTML: "Story Points for Technical Estimation"
- VisuAlgo.net: Sorting algorithm animations
- Big O cheat sheet for sorting algorithms
- Benchmarking guide with sample datasets
- Story point estimation examples
