# Module 2 Activity: Benchmarking Workshop - Measuring Algorithm Performance

**Duration**: 60 minutes
**Format**: Individual with group data sharing
**Materials Needed**:
- Working C++/Python development environment
- `<chrono>` library (C++) or `timeit` module (Python)
- Course repository with benchmarking templates
- Spreadsheet software (Excel, Google Sheets) or plotting library
- Calculator

**Learning Objectives**:
- Measure algorithm execution time using benchmarking tools
- Analyze empirical performance across different input sizes
- Connect experimental data to Big O notation concepts
- Compare iterative vs recursive algorithm performance
- Visualize time complexity through data plotting

---

## Overview

You've heard professors say "this algorithm is O(n)" or "that one is O(n²)". But what does that actually mean in practice?

Today, you're going to find out by measuring algorithm performance yourself. No theory first—just experimentation, data collection, and pattern recognition.

**By the end of this workshop, you'll:**
- Measure how long algorithms actually take to run
- Collect data showing how performance scales with input size
- Plot time vs input size to visualize growth patterns
- Recognize O(n), O(n²), and O(log n) patterns from real data
- Compare recursive vs iterative performance empirically

This is Drew's approach: **measure first, theorize later**. You'll discover Big O notation by seeing it in your own data.

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Pull latest course repo**:
   ```bash
   cd csc-249-data-structures
   git pull origin main
   git checkout -b yourname-module02
   ```

2. **Verify benchmarking tools**:

   **C++**: Test chrono library
   ```cpp
   #include <chrono>
   #include <iostream>
   int main() {
       auto start = std::chrono::high_resolution_clock::now();
       // Do something
       auto end = std::chrono::high_resolution_clock::now();
       auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
       std::cout << "Time: " << duration.count() << " microseconds" << std::endl;
       return 0;
   }
   ```

   **Python**: Test timeit module
   ```python
   import timeit

   def test_function():
       return sum(range(1000))

   time = timeit.timeit(test_function, number=1000)
   print(f"Time: {time:.6f} seconds")
   ```

3. **Create data collection spreadsheet** with columns:
   - Input Size (n)
   - Time (microseconds or seconds)
   - Algorithm Name

**Instructor**: Verify everyone has benchmarking code running before proceeding.

---

## Part 1: Linear Search - First Benchmark (15 minutes)

### Instructions

You're going to benchmark a simple linear search algorithm across different input sizes.

**Step 1: Implement linear search**

**C++**:
```cpp
#include <iostream>
#include <vector>
#include <chrono>
#include <random>

// Linear search: O(n)
int linear_search(const std::vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;  // Found
        }
    }
    return -1;  // Not found
}

// Helper: Generate random array
std::vector<int> generate_array(int size) {
    std::vector<int> arr(size);
    for (int i = 0; i < size; i++) {
        arr[i] = i;
    }
    return arr;
}

int main() {
    std::vector<int> sizes = {100, 500, 1000, 5000, 10000, 50000};

    std::cout << "Input Size, Time (microseconds)" << std::endl;

    for (int size : sizes) {
        std::vector<int> arr = generate_array(size);
        int target = size - 1;  // Worst case: search for last element

        auto start = std::chrono::high_resolution_clock::now();
        linear_search(arr, target);
        auto end = std::chrono::high_resolution_clock::now();

        auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

        std::cout << size << ", " << duration.count() << std::endl;
    }

    return 0;
}
```

**Python**:
```python
import timeit
import random

def linear_search(arr, target):
    """Linear search: O(n)"""
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Found
    return -1  # Not found

def generate_array(size):
    """Generate sorted array of given size"""
    return list(range(size))

def benchmark_linear_search():
    sizes = [100, 500, 1000, 5000, 10000, 50000]

    print("Input Size, Time (seconds)")

    for size in sizes:
        arr = generate_array(size)
        target = size - 1  # Worst case: search for last element

        # Run search and measure time
        time = timeit.timeit(lambda: linear_search(arr, target), number=100)
        time_avg = time / 100  # Average time per search

        print(f"{size}, {time_avg:.6f}")

if __name__ == "__main__":
    benchmark_linear_search()
```

**Step 2: Run the benchmark**

**C++**:
```bash
g++ -std=c++11 -O2 module-02/linear_search_benchmark.cpp -o benchmark
./benchmark
```

**Python**:
```bash
python module-02/linear_search_benchmark.py
```

**Step 3: Record your data**

Copy the output into your spreadsheet:

| Input Size (n) | Time (microseconds) |
|----------------|---------------------|
| 100            | 2                   |
| 500            | 8                   |
| 1000           | 18                  |
| 5000           | 89                  |
| 10000          | 175                 |
| 50000          | 890                 |

(Your numbers will vary)

**Step 4: Observe the pattern**

Look at your data:
- When input size doubles (500 → 1000), what happens to time?
- When input size increases 5x (10000 → 50000), what happens to time?

**Write down your observation**:
```
Pattern observed: When input size doubles, time approximately _________.
When input size increases 5x, time increases about _________.
```

### Expected Output

- Benchmark runs successfully across all input sizes
- Time increases as input size increases
- Roughly linear relationship: 2x input ≈ 2x time
- Data collected in spreadsheet

### Common Issues

**Issue**: Times are all 0 or very small
- **Fix**: Increase number of repetitions or use larger input sizes

**Issue**: Times are inconsistent (vary wildly)
- **Fix**: Close other applications, run multiple times and average

**Issue**: Compilation errors with chrono (C++)
- **Fix**: Ensure `-std=c++11` flag is used

---

## Part 2: Quadratic Growth - Bubble Sort (15 minutes)

### Instructions

Now benchmark an algorithm with different growth characteristics: Bubble Sort.

**Step 1: Implement bubble sort**

**C++**:
```cpp
void bubble_sort(std::vector<int>& arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                std::swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    std::vector<int> sizes = {100, 200, 500, 1000, 2000};

    std::cout << "Input Size, Time (microseconds)" << std::endl;

    for (int size : sizes) {
        // Generate reverse-sorted array (worst case)
        std::vector<int> arr(size);
        for (int i = 0; i < size; i++) {
            arr[i] = size - i;
        }

        auto start = std::chrono::high_resolution_clock::now();
        bubble_sort(arr);
        auto end = std::chrono::high_resolution_clock::now();

        auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);

        std::cout << size << ", " << duration.count() << std::endl;
    }

    return 0;
}
```

**Python**:
```python
def bubble_sort(arr):
    """Bubble sort: O(n²)"""
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def benchmark_bubble_sort():
    sizes = [100, 200, 500, 1000, 2000]

    print("Input Size, Time (seconds)")

    for size in sizes:
        # Generate reverse-sorted array (worst case)
        arr = list(range(size, 0, -1))

        time = timeit.timeit(lambda: bubble_sort(arr.copy()), number=10)
        time_avg = time / 10

        print(f"{size}, {time_avg:.6f}")

if __name__ == "__main__":
    benchmark_bubble_sort()
```

**Step 2: Run and record data**

Run your bubble sort benchmark and record results.

**Step 3: Compare with linear search**

Create a comparison table:

| Input Size | Linear Search (µs) | Bubble Sort (µs) | Ratio (Bubble/Linear) |
|------------|-------------------|------------------|----------------------|
| 100        | 2                 | 150              | 75x                  |
| 200        | 4                 | 600              | 150x                 |
| 500        | 10                | 3750             | 375x                 |
| 1000       | 18                | 15000            | 833x                 |

**Step 4: Analyze the pattern**

Calculate what happens when you double the input size:

```
Linear Search:
- 100 → 200: Time increases by factor of _____
- 200 → 400: Time increases by factor of _____
Pattern: Time increases by factor of _____ (approximately)

Bubble Sort:
- 100 → 200: Time increases by factor of _____
- 200 → 400: Time increases by factor of _____
Pattern: Time increases by factor of _____ (approximately 4x?)
```

**Write your observation**:
```
When bubble sort input doubles, time increases by approximately _____.
This suggests the algorithm grows at a rate proportional to _____.
```

### Expected Output

- Bubble sort benchmark completes across all sizes
- Time increases dramatically with input size
- Doubling input ≈ 4x time (quadratic growth)
- Clear difference between linear and quadratic growth

---

## Part 3: Logarithmic Growth - Binary Search (10 minutes)

### Instructions

Now test an algorithm that's more efficient than linear search: Binary Search.

**Step 1: Implement binary search**

**C++**:
```cpp
int binary_search(const std::vector<int>& arr, int target) {
    int left = 0;
    int right = arr.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

**Python**:
```python
def binary_search(arr, target):
    """Binary search: O(log n)"""
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = left + (right - left) // 2

        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1
```

**Step 2: Benchmark with large inputs**

Use these sizes: 1000, 10000, 100000, 1000000, 10000000

**Step 3: Compare all three algorithms**

| Input Size | Linear (µs) | Binary (µs) | Bubble Sort (µs) |
|------------|-------------|-------------|------------------|
| 1000       | 18          | 0.5         | 15000            |
| 10000      | 175         | 0.8         | 1500000          |
| 100000     | 1750        | 1.2         | ???              |

(Don't run bubble sort on 100000—it'll take forever!)

**Step 4: Calculate growth factors**

```
Binary Search (1000 → 10000):
Input increased by: 10x
Time increased by: approximately _____x

Binary Search (10000 → 100000):
Input increased by: 10x
Time increased by: approximately _____x

Observation: Even with massive input increases, binary search time barely changes!
```

### Expected Output

- Binary search is dramatically faster than linear search
- Time increases very slowly as input size grows
- 10x input increase ≈ minimal time increase (logarithmic)

---

## Part 4: Recursive vs Iterative - Fibonacci (15 minutes)

### Instructions

Compare recursive vs iterative implementations of the same algorithm.

**Step 1: Implement both versions**

**C++**:
```cpp
// Recursive Fibonacci: O(2^n) - exponential!
long long fib_recursive(int n) {
    if (n <= 1) return n;
    return fib_recursive(n - 1) + fib_recursive(n - 2);
}

// Iterative Fibonacci: O(n) - linear
long long fib_iterative(int n) {
    if (n <= 1) return n;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long long temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
```

**Python**:
```python
def fib_recursive(n):
    """Recursive Fibonacci: O(2^n)"""
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)

def fib_iterative(n):
    """Iterative Fibonacci: O(n)"""
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
```

**Step 2: Benchmark both**

**WARNING**: Don't test recursive Fibonacci beyond n=40 or it'll run forever!

Test sizes: 10, 15, 20, 25, 30, 35

**Step 3: Compare results**

| n  | Recursive (µs) | Iterative (µs) | Ratio     |
|----|---------------|----------------|-----------|
| 10 | 5             | 0.5            | 10x       |
| 20 | 500           | 1.0            | 500x      |
| 30 | 50000         | 1.5            | 33,333x   |
| 40 | ???           | 2.0            | ???       |

**Step 4: Analyze exponential growth**

```
Recursive Fibonacci (10 → 20):
Input increased by: 2x
Time increased by: approximately _____x (100x?)

Recursive Fibonacci (20 → 30):
Input increased by: 1.5x
Time increased by: approximately _____x (100x again?)

This is exponential growth: each small increase in input causes
massive increase in time!
```

### Expected Output

- Recursive Fibonacci becomes unusably slow quickly
- Iterative Fibonacci handles large inputs easily
- Clear demonstration of why exponential algorithms are impractical

---

## Wrap-up & Big O Recognition (10 minutes)

### Discussion Questions

**1. Pattern Recognition**: You've now seen four growth patterns:
   - Binary Search: Barely increases
   - Linear Search: Increases proportionally
   - Bubble Sort: Increases quadratically (4x when input doubles)
   - Recursive Fibonacci: Increases exponentially

   Match these to Big O notation:
   - O(log n)
   - O(n)
   - O(n²)
   - O(2^n)

**2. Practical Implications**: If you have 1 million items to search, which algorithm would you use? Why does it matter?

**3. Trade-offs**: Binary search is faster than linear search. What's the catch? (Hint: data must be sorted)

**4. Recursive vs Iterative**: When would you choose recursion despite performance costs?

**5. Real-World Application**: Where do you encounter these patterns in software you use?

### Exit Ticket

**Submit via Canvas**:

```
1. Upload your data table (all benchmarks)

2. Based on your experiments, match the Big O notation:
   - Linear Search: O(___)
   - Binary Search: O(___)
   - Bubble Sort: O(___)
   - Recursive Fibonacci: O(___)

3. In your own words, what does O(n²) mean based on what you observed?

4. What surprised you most about these benchmarks?

5. Confidence check (1-5):
   - Using benchmarking tools: ___
   - Understanding algorithm growth patterns: ___
   - Choosing appropriate algorithms: ___
```

---

## Extension Challenges (Optional)

### Challenge 1: Visualize Growth
Create a graph plotting all four algorithms on the same chart. Use logarithmic scale if needed.

### Challenge 2: Memoized Fibonacci
Implement Fibonacci with memoization (caching results). How does performance compare?

```python
fib_cache = {0: 0, 1: 1}

def fib_memoized(n):
    if n in fib_cache:
        return fib_cache[n]
    fib_cache[n] = fib_memoized(n-1) + fib_memoized(n-2)
    return fib_cache[n]
```

### Challenge 3: Benchmark Sorting Algorithms
Compare Bubble Sort, Selection Sort, and Insertion Sort. Which is fastest? Why?

### Challenge 4: Best/Average/Worst Case
Modify linear search to test:
- Best case: target is first element
- Average case: target is in middle
- Worst case: target is last element

How do times differ?

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup and tool verification
- **5-20 min**: Linear search benchmarking
- **20-35 min**: Bubble sort quadratic growth
- **35-45 min**: Binary search logarithmic growth
- **45-60 min**: Recursive vs iterative, discussion

### Common Struggles

**Timing inconsistency**: Students get different results each run.
- **Fix**: Emphasize running multiple iterations and averaging
- Teach them to close other apps, use consistent test data

**Scale confusion**: Microseconds vs seconds vs milliseconds
- **Fix**: Use consistent units, provide conversion reference

**Impatience with slow algorithms**: Students interrupt bubble sort on large inputs
- **Fix**: That's the lesson! Let them experience the pain of O(n²)

### Success Indicators

Students are on track if they:
- ✅ Successfully measure execution time across multiple input sizes
- ✅ Observe doubling input → doubling time for linear search
- ✅ Observe doubling input → 4x time for bubble sort
- ✅ Recognize binary search is dramatically faster
- ✅ See exponential explosion in recursive Fibonacci
- ✅ Can match observed patterns to Big O notation

### Teaching Philosophy

This embodies "measure first, theorize later." Students discover Big O through experimentation, not memorization. When they later learn formal definitions, they'll think "Oh, that's what I saw in the data!"

The recursive Fibonacci benchmark is intentionally painful—let them wait while n=35 calculates. That frustration teaches why exponential algorithms are impractical better than any lecture.

---

**Next module: You'll use this understanding to implement and compare sorting algorithms.**
