# M03-A2: Sorting Comparison Report

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 3 - Sorting Algorithms
**Week**: 6
**Points**: 25
**Due**: End of Week 6

---

## Assignment Overview

Benchmark all four sorting algorithms from M03-A1 across different dataset types (random, sorted, reverse-sorted, nearly-sorted) and write a comprehensive comparison report. Discover when O(n²) algorithms can outperform O(n log n) algorithms in practice.

**Philosophy**: "Data tells the story." Theory says Quick Sort is faster, but empirical testing reveals the nuances—like how Insertion Sort excels on nearly-sorted data.

---

## Learning Objectives

By completing this assignment, you will:

1. Benchmark sorting algorithms on diverse datasets
2. Analyze best case, worst case, and average case performance
3. Interpret performance data to select appropriate algorithms
4. Create professional technical reports with data visualizations
5. Apply story point estimation to compare predictions vs reality (PM skill)

**Bloom's Level**: Analyze, Evaluate (CLO2, CLO3)

---

## Part 1: Comprehensive Benchmarking (10 points)

### Dataset Types to Test

Benchmark all 4 algorithms (Selection, Insertion, Merge, Quick) on these datasets:

1. **Random data**: Completely unsorted
2. **Sorted data**: Already in ascending order (best case for some)
3. **Reverse-sorted**: Descending order (worst case for some)
4. **Nearly-sorted**: 90% sorted, 10% random swaps
5. **Duplicates**: Many repeated values

### Benchmark Framework

Create `sorting_benchmarks.py` or `sorting_benchmarks.cpp`:

```python
from benchmark import Benchmark
import random
from typing import List, Callable

class SortingBenchmarks:
    def __init__(self):
        self.sizes = [100, 500, 1000, 5000, 10000]
        self.results = {}

    def generate_dataset(self, size: int, dataset_type: str) -> List[int]:
        """Generate test dataset based on type."""
        if dataset_type == "random":
            return [random.randint(1, 10000) for _ in range(size)]

        elif dataset_type == "sorted":
            return list(range(size))

        elif dataset_type == "reverse":
            return list(range(size, 0, -1))

        elif dataset_type == "nearly_sorted":
            data = list(range(size))
            # Swap 10% of elements randomly
            num_swaps = size // 10
            for _ in range(num_swaps):
                i, j = random.randint(0, size-1), random.randint(0, size-1)
                data[i], data[j] = data[j], data[i]
            return data

        elif dataset_type == "duplicates":
            return [random.randint(1, 100) for _ in range(size)]  # Only 100 possible values

        return []

    def benchmark_algorithm(self, sort_func: Callable, algo_name: str, dataset_type: str):
        """Benchmark one algorithm on one dataset type."""
        print(f"\nBenchmarking {algo_name} on {dataset_type} data...")

        results = []
        for size in self.sizes:
            # Generate fresh data for each size
            data = self.generate_dataset(size, dataset_type)

            # Time the sort (average of 3 runs)
            times = []
            for _ in range(3):
                test_data = data.copy()
                start = time.perf_counter()
                sort_func(test_data)
                end = time.perf_counter()
                times.append((end - start) * 1000)  # Convert to ms

            avg_time = sum(times) / len(times)
            results.append((size, avg_time))
            print(f"  Size {size}: {avg_time:.3f} ms")

        # Store results
        key = f"{algo_name}_{dataset_type}"
        self.results[key] = results

    def export_all_results(self, filename: str):
        """Export all benchmark results to CSV."""
        with open(filename, 'w') as f:
            f.write("Algorithm,Dataset,Size,Time_ms\n")
            for key, results in self.results.items():
                algo, dataset = key.rsplit('_', 1)
                for size, time_ms in results:
                    f.write(f"{algo},{dataset},{size},{time_ms:.3f}\n")

    def run_full_suite(self, algorithms: dict):
        """
        Run all algorithms on all dataset types.
        algorithms: dict of {"name": sort_function}
        """
        dataset_types = ["random", "sorted", "reverse", "nearly_sorted", "duplicates"]

        for algo_name, sort_func in algorithms.items():
            for dataset_type in dataset_types:
                self.benchmark_algorithm(sort_func, algo_name, dataset_type)

        self.export_all_results("sorting_comparison_results.csv")
        print("\nAll benchmarks complete! Results saved to sorting_comparison_results.csv")
```

### Run the Benchmarks

```python
from sorting_algorithms import selection_sort, insertion_sort, merge_sort, quick_sort

# Create benchmark suite
bench = SortingBenchmarks()

# Define algorithms to test
algorithms = {
    "Selection": selection_sort,
    "Insertion": insertion_sort,
    "Merge": merge_sort,
    "Quick": quick_sort
}

# Run full benchmark suite (this will take a few minutes)
bench.run_full_suite(algorithms)
```

**Expected CSV structure**:
```
Algorithm,Dataset,Size,Time_ms
Selection,random,100,0.234
Selection,random,500,2.456
Selection,sorted,100,0.189
Insertion,sorted,100,0.045
...
```

**Grading** (10 points):
- Benchmark framework implemented (3 pts)
- All 5 dataset types generated correctly (2 pts)
- All 4 algorithms benchmarked on all datasets (3 pts)
- Results exported to CSV (2 pts)

---

## Part 2: Data Visualization (6 points)

### Create Comparison Graphs

Generate these visualizations:

#### Graph 1: All Algorithms on Random Data

Line graph showing how each algorithm performs on random data as size increases.

```python
import matplotlib.pyplot as plt
import pandas as pd

# Load results
df = pd.read_csv('sorting_comparison_results.csv')

# Filter for random data only
random_data = df[df['Dataset'] == 'random']

# Plot each algorithm
for algo in ['Selection', 'Insertion', 'Merge', 'Quick']:
    algo_data = random_data[random_data['Algorithm'] == algo]
    plt.plot(algo_data['Size'], algo_data['Time_ms'], marker='o', label=algo)

plt.xlabel('Input Size')
plt.ylabel('Time (ms)')
plt.title('Sorting Performance on Random Data')
plt.legend()
plt.grid(True)
plt.savefig('graph1_random_comparison.png')
plt.show()
```

#### Graph 2: One Algorithm Across All Dataset Types

Choose ONE algorithm (e.g., Insertion Sort) and show how it performs on different dataset types.

```python
# Filter for Insertion Sort only
insertion_data = df[df['Algorithm'] == 'Insertion']

# Plot each dataset type
for dataset in ['random', 'sorted', 'reverse', 'nearly_sorted', 'duplicates']:
    dataset_results = insertion_data[insertion_data['Dataset'] == dataset]
    plt.plot(dataset_results['Size'], dataset_results['Time_ms'], marker='o', label=dataset)

plt.xlabel('Input Size')
plt.ylabel('Time (ms)')
plt.title('Insertion Sort: Performance Across Dataset Types')
plt.legend()
plt.grid(True)
plt.savefig('graph2_insertion_datasets.png')
plt.show()
```

#### Graph 3: Best Case vs Worst Case Comparison

Compare algorithms on their BEST dataset vs WORST dataset.

**Grading** (6 points):
- Graph 1: All algorithms on random data (2 pts)
- Graph 2: One algorithm on all datasets (2 pts)
- Graph 3: Best vs worst case comparison (2 pts)

---

## Part 3: Technical Comparison Report (7 points)

### Write `sorting_analysis_report.md`

Create a professional technical report with these sections:

```markdown
# Sorting Algorithms Comparison Report

**Author**: [Your Name]
**Date**: [Date]
**Course**: CSC-249

---

## Executive Summary

[2-3 paragraph overview of findings. Which algorithm is fastest overall? Any surprises?]

---

## Methodology

### Algorithms Tested
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort

### Dataset Types
- Random: [Description]
- Sorted: [Description]
- Reverse: [Description]
- Nearly-sorted: [Description]
- Duplicates: [Description]

### Test Configuration
- Input sizes: 100, 500, 1000, 5000, 10000
- Number of runs per test: 3 (averaged)
- Language: [Python/C++]
- Hardware: [Your CPU/RAM]

---

## Results

### Performance on Random Data

[Embed Graph 1 here]

**Observations**:
- Which algorithms showed O(n²) growth pattern?
- Which showed O(n log n)?
- At what input size does Merge/Quick Sort overtake Selection/Insertion?

### Best Case Performance

**Insertion Sort on Sorted Data**:
- Time at size 10000: [X] ms
- Why is this the best case? [Explain]

**Quick Sort on [Dataset]**:
- Best case dataset: [Which one?]
- Time at size 10000: [X] ms

### Worst Case Performance

**Quick Sort on [Dataset]**:
- Worst case dataset: [Reverse? Random?]
- Time at size 10000: [X] ms
- Why is this the worst case? [Explain pivot selection problem]

**Insertion Sort on Reverse-Sorted**:
- Time at size 10000: [X] ms
- How much slower than sorted? [X]% slower

### Nearly-Sorted Data Analysis

[Embed Graph 2 - Insertion Sort across datasets]

**Key Finding**:
Insertion Sort performs [much better/worse] on nearly-sorted data because [explanation].

Practical application: [When would you use Insertion Sort in real life?]

---

## Big O Classification Verification

### Theoretical vs Empirical

| Algorithm | Theoretical Big O | Observed Pattern | Match? |
|-----------|-------------------|------------------|--------|
| Selection Sort | O(n²) | [Describe growth] | Yes/No |
| Insertion Sort | O(n²) | [Describe growth] | Yes/No |
| Merge Sort | O(n log n) | [Describe growth] | Yes/No |
| Quick Sort | O(n log n) avg | [Describe growth] | Yes/No |

**Analysis**:
Did your empirical results match theoretical complexity? Any discrepancies? Why?

---

## Algorithm Selection Guide

Based on your findings, complete this decision matrix:

**Use Selection Sort when**:
- [Scenario 1]
- [Scenario 2]

**Use Insertion Sort when**:
- Data is nearly sorted
- Small datasets (< 100 elements)
- [Other scenarios]

**Use Merge Sort when**:
- Need guaranteed O(n log n) performance
- Stability is required (preserves order of equal elements)
- [Other scenarios]

**Use Quick Sort when**:
- Average case performance is acceptable
- In-place sorting needed (memory constrained)
- [Other scenarios]

---

## Surprising Findings

### Finding 1: [Title]
[What surprised you? Maybe Insertion Sort beat Quick Sort on nearly-sorted data?]

### Finding 2: [Title]
[Another unexpected result]

---

## Limitations

- Small input sizes (largest was 10,000)
- Single hardware configuration
- [Other limitations of your testing]

---

## Conclusion

[Summarize key takeaways. Which algorithm would you choose for a real project? Why?]

---

## References

- Course materials
- VisuAlgo sorting visualizations
- [Any other sources]
```

**Grading** (7 points):
- Report structure complete (1 pt)
- Results section with data analysis (2 pts)
- Big O verification (1 pt)
- Algorithm selection guide (2 pts)
- Professional writing quality (1 pt)

---

## Part 4: PM Reflection - Estimation Accuracy (2 points)

Add a section to your report:

```markdown
## PM Reflection: Story Point Estimation Review

### Original Estimates (from M03-A1)
- Selection Sort: [X] points → Actual: [Y] hours
- Insertion Sort: [X] points → Actual: [Y] hours
- Merge Sort: [X] points → Actual: [Y] hours
- Quick Sort: [X] points → Actual: [Y] hours

### Estimation Accuracy
**Average error**: [X]%
**What I learned**: [How did actual complexity compare to estimates?]

### Applying to This Assignment
**Estimated time for benchmarking project**: [X] hours
**Actual time**: [Y] hours
**Reflection**: [Were you more accurate this time? Why or why not?]
```

**Grading** (2 points):
- Estimation review complete (1 pt)
- Thoughtful reflection on accuracy improvement (1 pt)

---

## Submission Checklist

- [ ] Benchmark framework implemented
- [ ] All 4 algorithms tested on all 5 dataset types
- [ ] sorting_comparison_results.csv generated
- [ ] 3 graphs created (PNG format)
- [ ] sorting_analysis_report.md complete
- [ ] PM reflection section included
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request created with all files

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Comprehensive Benchmarking** | 10 | Framework (3), datasets (2), all tests run (3), CSV export (2) |
| **Data Visualization** | 6 | Graph 1 (2), Graph 2 (2), Graph 3 (2) |
| **Technical Report** | 7 | Structure (1), results analysis (2), Big O verification (1), selection guide (2), writing quality (1) |
| **PM Reflection** | 2 | Estimation review (1), thoughtful reflection (1) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Incomplete benchmarks: -3 points
- Missing graphs: -2 points per graph
- Report lacks analysis: -3 points
- Missing prompts.txt: -2 points

---

## Resources

**Data Visualization**:
- Matplotlib tutorial: [matplotlib.org](https://matplotlib.org/stable/tutorials/index.html)
- Seaborn (advanced plotting): [seaborn.pydata.org](https://seaborn.pydata.org/)

**Sorting Analysis**:
- Big O Cheat Sheet: [bigocheatsheet.com](https://www.bigocheatsheet.com/)
- Sorting algorithm stability: [Wikipedia](https://en.wikipedia.org/wiki/Sorting_algorithm#Stability)

**Technical Writing**:
- IEEE report format
- Scientific report structure

**Get Help**:
- Office Hours: See Canvas
- Discord: #week06-sorting-analysis channel

---

## Extension Challenges (+5 bonus)

1. **Statistical Analysis**: Add error bars to graphs showing standard deviation across runs

2. **Memory Profiling**: Measure memory usage for each algorithm (in-place vs extra space)

3. **Hybrid Algorithm**: Implement Timsort (Python's built-in sort)—uses Insertion for small runs, Merge for larger

4. **Parallel Sorting**: Implement parallel Merge Sort using threading/multiprocessing

5. **Cache Performance**: Analyze cache efficiency—why might Merge Sort be slower than expected due to cache misses?

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
