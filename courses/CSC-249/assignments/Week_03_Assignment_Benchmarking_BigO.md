# M02-A1: Benchmarking Lab & Big O Analysis

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 2 - Algorithm Analysis & Recursion
**Week**: 3
**Points**: 25
**Due**: End of Week 3

---

## Assignment Overview

Measure algorithm performance empirically and connect measurements to Big O notation. Instead of learning Big O notation abstractly first, you'll run benchmarks, generate data, visualize results, and THEN understand what O(n), O(n²), and O(log n) actually mean in practice.

**Philosophy**: "Data before theory." You'll measure performance with real code on real data, plot the results, and discover algorithmic complexity through experimentation.

---

## Learning Objectives

By completing this assignment, you will:

1. Implement benchmarking tools to measure algorithm runtime
2. Generate performance data across different input sizes
3. Visualize algorithm growth rates with graphs
4. Classify algorithms by Big O complexity through observation
5. Document AI collaboration in performance analysis

**Bloom's Level**: Analyze (CLO2, CLO3)

---

## Part 1: Build Your Benchmarking Tool (8 points)

### The Challenge

Create a `Benchmark` class that can time ANY algorithm and track results across multiple input sizes.

### Requirements

Your benchmarking tool must:
- Time function execution precisely (milliseconds or microseconds)
- Run tests across input sizes: 100, 500, 1000, 5000, 10000, 50000
- Average results over multiple runs (to reduce noise)
- Export data to CSV for graphing

### Starter Code (C++)

Create `week03-benchmarking/Benchmark.h`:

```cpp
#ifndef BENCHMARK_H
#define BENCHMARK_H

#include <chrono>
#include <vector>
#include <functional>
#include <string>
#include <fstream>

class Benchmark {
private:
    struct Result {
        int inputSize;
        double avgTime;  // milliseconds
    };

    std::vector<Result> results;

public:
    // Time a function with given input size
    // func should take vector<int> as parameter
    double timeFunction(std::function<void(std::vector<int>&)> func,
                        int inputSize,
                        int numRuns = 5);

    // Run benchmark across all standard sizes
    void runSuite(std::function<void(std::vector<int>&)> func,
                  std::string algorithmName);

    // Export results to CSV
    void exportCSV(std::string filename);

    // Print results to console
    void printResults();
};

#endif
```

**Your task**: Implement these methods in `Benchmark.cpp`.

**Hints**:
- Use `std::chrono::high_resolution_clock` for timing
- Generate random data: `std::vector<int> data(size);` filled with random ints
- Average multiple runs to smooth out OS noise

### Starter Code (Python)

Create `week03-benchmarking/benchmark.py`:

```python
import time
import random
import csv
from typing import Callable, List

class Benchmark:
    def __init__(self):
        self.results = []  # List of (input_size, avg_time) tuples

    def time_function(self, func: Callable, input_size: int, num_runs: int = 5) -> float:
        """
        Time a function with given input size.
        Returns average time in milliseconds.
        """
        # TODO: Implement timing logic
        # Generate random data: data = [random.randint(1, 10000) for _ in range(input_size)]
        # Time func(data) over num_runs
        # Return average time in milliseconds
        pass

    def run_suite(self, func: Callable, algorithm_name: str):
        """
        Run benchmark across standard sizes: 100, 500, 1000, 5000, 10000, 50000
        """
        sizes = [100, 500, 1000, 5000, 10000, 50000]
        # TODO: Implement benchmark suite
        pass

    def export_csv(self, filename: str):
        """Export results to CSV file."""
        # TODO: Write results to CSV
        pass

    def print_results(self):
        """Print results to console in table format."""
        # TODO: Print formatted results
        pass
```

**Timing in Python**:
```python
start_time = time.perf_counter()
func(data)
end_time = time.perf_counter()
elapsed_ms = (end_time - start_time) * 1000
```

### Test Your Benchmark Tool

Create `test_benchmark.cpp` or `test_benchmark.py`:

```python
from benchmark import Benchmark

def linear_search(data: List[int]):
    """O(n) algorithm - search for specific value."""
    target = data[0] if data else 0
    for item in data:
        if item == target:
            return item
    return None

# Test benchmark tool
bench = Benchmark()
bench.run_suite(linear_search, "Linear Search")
bench.print_results()
bench.export_csv("linear_search_results.csv")
```

**Expected output**:
```
Algorithm: Linear Search
Input Size | Avg Time (ms)
      100  |    0.012
      500  |    0.058
     1000  |    0.115
     5000  |    0.573
    10000  |    1.142
    50000  |    5.721
```

**Grading** (8 points):
- Benchmark class implemented (3 pts)
- Timing accurate and consistent (2 pts)
- Runs across all input sizes (1 pt)
- Exports to CSV correctly (1 pt)
- Code documented (1 pt)

---

## Part 2: Benchmark Three Algorithms (9 points)

### Algorithms to Benchmark

Implement and benchmark these three algorithms:

#### Algorithm 1: Linear Search - O(n)

```python
def linear_search(data: List[int]) -> int:
    """Search for maximum value - must check every element."""
    max_val = data[0]
    for item in data:
        if item > max_val:
            max_val = item
    return max_val
```

#### Algorithm 2: Binary Search - O(log n)

```python
def binary_search_setup(data: List[int]) -> int:
    """
    Binary search requires sorted data.
    Benchmark includes sorting time.
    """
    data.sort()  # This is O(n log n), but search itself is O(log n)

    # Search for middle value
    target = data[len(data) // 2]
    left, right = 0, len(data) - 1

    while left <= right:
        mid = (left + right) // 2
        if data[mid] == target:
            return mid
        elif data[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

#### Algorithm 3: Bubble Sort - O(n²)

```python
def bubble_sort(data: List[int]):
    """Classic O(n²) sorting algorithm."""
    n = len(data)
    for i in range(n):
        for j in range(0, n - i - 1):
            if data[j] > data[j + 1]:
                data[j], data[j + 1] = data[j + 1], data[j]
```

### Your Task

1. Implement all three algorithms
2. Benchmark each using your Benchmark tool
3. Export each to CSV:
   - `linear_search_results.csv`
   - `binary_search_results.csv`
   - `bubble_sort_results.csv`

**C++ versions** (translate using AI if needed):

```cpp
// Linear search
int linearSearch(std::vector<int>& data) {
    int max_val = data[0];
    for (int item : data) {
        if (item > max_val) max_val = item;
    }
    return max_val;
}

// Binary search
int binarySearch(std::vector<int>& data) {
    std::sort(data.begin(), data.end());
    int target = data[data.size() / 2];
    int left = 0, right = data.size() - 1;

    while (left <= right) {
        int mid = (left + right) / 2;
        if (data[mid] == target) return mid;
        else if (data[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Bubble sort
void bubbleSort(std::vector<int>& data) {
    int n = data.size();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                std::swap(data[j], data[j + 1]);
            }
        }
    }
}
```

**Grading** (9 points):
- All three algorithms implemented correctly (3 pts)
- All three benchmarked successfully (3 pts)
- CSV files generated with correct data (3 pts)

---

## Part 3: Visualize and Analyze Results (8 points)

### Create Graphs

Using Excel, Google Sheets, Python matplotlib, or any graphing tool:

1. Create a **line graph** with:
   - X-axis: Input size
   - Y-axis: Time (milliseconds)
   - Three lines: Linear Search, Binary Search, Bubble Sort

2. Save as `performance_graph.png`

**Python visualization example** (optional):

```python
import matplotlib.pyplot as plt
import pandas as pd

# Load all CSV files
linear = pd.read_csv('linear_search_results.csv')
binary = pd.read_csv('binary_search_results.csv')
bubble = pd.read_csv('bubble_sort_results.csv')

# Plot
plt.figure(figsize=(10, 6))
plt.plot(linear['input_size'], linear['avg_time'], label='Linear Search O(n)', marker='o')
plt.plot(binary['input_size'], binary['avg_time'], label='Binary Search O(log n)', marker='s')
plt.plot(bubble['input_size'], bubble['avg_time'], label='Bubble Sort O(n²)', marker='^')

plt.xlabel('Input Size')
plt.ylabel('Time (ms)')
plt.title('Algorithm Performance Comparison')
plt.legend()
plt.grid(True)
plt.savefig('performance_graph.png')
plt.show()
```

### Analysis Document

Create `analysis.md` answering these questions:

1. **Growth Rate Observation**:
   - Which algorithm's time doubles when input size doubles?
   - Which algorithm's time quadruples when input size doubles?
   - Which algorithm barely changes as input grows?

2. **Big O Classification**:
   Based ONLY on your graph, classify each algorithm:
   - Linear Search: O(?)
   - Binary Search: O(?)
   - Bubble Sort: O(?)

3. **Real-World Impact**:
   - At 50,000 elements, which algorithm is fastest?
   - If you had 1,000,000 elements, which would you choose? Why?
   - When might Bubble Sort be acceptable despite being O(n²)?

4. **AI Collaboration**:
   - Did you use AI to help create graphs? How?
   - What did AI suggest that improved your analysis?
   - Document in `prompts.txt`

**Grading** (8 points):
- Graph created showing all three algorithms (3 pts)
- Graph clearly labeled with legend (1 pt)
- Analysis answers demonstrate understanding (3 pts)
- AI collaboration documented (1 pt)

---

## Submission Checklist

- [ ] Benchmark tool implemented (Benchmark.cpp/.py)
- [ ] All three algorithms implemented
- [ ] Three CSV files generated with benchmark data
- [ ] Performance graph created (PNG/PDF)
- [ ] analysis.md with observations and Big O classifications
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request created with all files
- [ ] PR includes screenshot of graph

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Benchmarking Tool** | 8 | Implementation (3), timing accuracy (2), all sizes (1), CSV export (1), documentation (1) |
| **Algorithm Implementations** | 9 | All three correct (3), benchmarked (3), CSV files (3) |
| **Visualization & Analysis** | 8 | Graph created (3), labeled (1), analysis quality (3), AI docs (1) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code doesn't compile/run: -5 points
- Missing CSV files: -3 points
- Missing graph: -3 points
- Missing prompts.txt: -2 points
- Graph not labeled: -2 points

---

## Resources

**After you've tried**:
- Big O Cheat Sheet: [bigocheatsheet.com](https://www.bigocheatsheet.com)
- VisuAlgo: [Sorting Visualizations](https://visualgo.net/en/sorting)
- Python timing: [timeit documentation](https://docs.python.org/3/library/timeit.html)
- C++ timing: [chrono documentation](https://en.cppreference.com/w/cpp/chrono)

**Graphing tools**:
- Python matplotlib: [matplotlib.org](https://matplotlib.org)
- Google Sheets: Free online
- Excel: Available on campus computers

**Get Help**:
- Office Hours: See Canvas
- Discord: #week03-benchmarking channel

---

## Extension Challenges (+5 bonus)

1. **Logarithmic Scale Graph**: Create a log-scale graph to better visualize O(log n) vs O(n) vs O(n²)

2. **Memory Benchmarking**: Extend Benchmark class to track memory usage, not just time

3. **Best/Worst/Average Cases**: Benchmark algorithms on:
   - Already sorted data (best case)
   - Reverse sorted data (worst case)
   - Random data (average case)

4. **Additional Algorithms**: Benchmark:
   - Quick Sort: O(n log n)
   - Hash table lookup: O(1)
   - Merge Sort: O(n log n)

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
