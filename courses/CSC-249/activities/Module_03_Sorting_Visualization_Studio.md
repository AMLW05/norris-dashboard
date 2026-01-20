# Module 3 Activity: Sorting Visualization Studio - Build, See, Compare

**Duration**: 90 minutes
**Format**: Individual implementation with group comparison
**Materials Needed**:
- Working C++/Python development environment
- Visualization library (matplotlib for Python, or terminal output for C++)
- Benchmarking tools from Module 2
- Course repository with sorting templates
- Spreadsheet for performance comparison

**Learning Objectives**:
- Implement classic sorting algorithms (selection, insertion, merge, quick sort)
- Visualize algorithm execution step-by-step
- Understand divide-and-conquer strategy through implementation
- Benchmark sorting performance on different dataset types
- Recognize trade-offs between different sorting approaches

---

## Overview

You've measured performance. You've seen O(n²) vs O(n log n) in data. Now you're going to build sorting algorithms from scratch and watch them work.

This isn't about memorizing pseudocode—it's about understanding sorting by making it visual, tangible, and measurable.

**By the end of this studio, you'll:**
- Implement 4 sorting algorithms
- Visualize how they move data around
- Benchmark them on different types of data (sorted, random, reverse)
- Understand why some are O(n²) and others are O(n log n)
- Know when to use which algorithm

**Create first, theory later.** Let's build.

---

## Pre-Activity Setup (5 minutes)

**Before you start:**

1. **Create new branch**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b yourname-module03
   ```

2. **Install visualization tools** (Python students):
   ```bash
   pip install matplotlib
   ```

3. **Test visualization**:

   **Python**:
   ```python
   import matplotlib.pyplot as plt

   data = [64, 34, 25, 12, 22, 11, 90]
   plt.bar(range(len(data)), data)
   plt.title("Test Visualization")
   plt.show()
   ```

   **C++ students**: You'll use terminal output:
   ```cpp
   void visualize(std::vector<int> arr) {
       for (int val : arr) {
           std::cout << std::string(val, '*') << std::endl;
       }
       std::cout << std::endl;
   }
   ```

4. **Create data collection table**:
   - Algorithm Name
   - Input Type (Random, Sorted, Reverse)
   - Input Size
   - Time
   - Comparisons Made
   - Swaps Made

---

## Part 1: Selection Sort - Simplest First (20 minutes)

### Instructions

Selection sort repeatedly finds the minimum element and moves it to the front.

**Step 1: Understand the strategy**

Use AI to help:
```
Prompt: Explain selection sort algorithm in simple terms. Show me how it works
on this array: [64, 25, 12, 22, 11]. Walk through each step.

[Document response in prompts.txt]
```

**Step 2: Implement with visualization**

**Python**:
```python
import matplotlib.pyplot as plt
import time

def selection_sort_visualized(arr):
    """Selection Sort: O(n²)"""
    n = len(arr)
    comparisons = 0
    swaps = 0

    for i in range(n):
        # Find minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            comparisons += 1
            if arr[j] < arr[min_idx]:
                min_idx = j

        # Swap the found minimum with the first element
        if min_idx != i:
            arr[i], arr[min_idx] = arr[min_idx], arr[i]
            swaps += 1

        # Visualize current state
        visualize_array(arr, i, min_idx, f"Selection Sort - Step {i+1}")
        time.sleep(0.5)  # Pause to see the change

    return comparisons, swaps

def visualize_array(arr, current_idx, highlight_idx, title):
    """Visualize array with highlighting"""
    colors = ['blue' if i != current_idx and i != highlight_idx
              else 'red' if i == current_idx
              else 'green'
              for i in range(len(arr))]

    plt.clf()
    plt.bar(range(len(arr)), arr, color=colors)
    plt.title(title)
    plt.xlabel('Index')
    plt.ylabel('Value')
    plt.pause(0.1)

# Test
if __name__ == "__main__":
    data = [64, 34, 25, 12, 22, 11, 90]
    print(f"Original: {data}")

    plt.ion()  # Interactive mode
    comparisons, swaps = selection_sort_visualized(data.copy())
    plt.ioff()

    print(f"Sorted: {data}")
    print(f"Comparisons: {comparisons}")
    print(f"Swaps: {swaps}")
    plt.show()
```

**C++**:
```cpp
#include <iostream>
#include <vector>
#include <chrono>
#include <thread>

void visualize_array(const std::vector<int>& arr, int current_idx, int highlight_idx) {
    for (int i = 0; i < arr.size(); i++) {
        if (i == current_idx)
            std::cout << "[" << arr[i] << "] ";
        else if (i == highlight_idx)
            std::cout << "(" << arr[i] << ") ";
        else
            std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

std::pair<int, int> selection_sort_visualized(std::vector<int>& arr) {
    int n = arr.size();
    int comparisons = 0, swaps = 0;

    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            comparisons++;
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }

        if (min_idx != i) {
            std::swap(arr[i], arr[min_idx]);
            swaps++;
        }

        std::cout << "Step " << (i + 1) << ": ";
        visualize_array(arr, i, min_idx);
        std::this_thread::sleep_for(std::chrono::milliseconds(500));
    }

    return {comparisons, swaps};
}

int main() {
    std::vector<int> data = {64, 34, 25, 12, 22, 11, 90};

    std::cout << "Original: ";
    for (int val : data) std::cout << val << " ";
    std::cout << std::endl << std::endl;

    auto [comparisons, swaps] = selection_sort_visualized(data);

    std::cout << "\nSorted: ";
    for (int val : data) std::cout << val << " ";
    std::cout << "\nComparisons: " << comparisons << std::endl;
    std::cout << "Swaps: " << swaps << std::endl;

    return 0;
}
```

**Step 3: Run and observe**

Watch the visualization. Answer:
```
1. How many comparisons did it make? _____
2. How many swaps did it make? _____
3. What pattern do you notice in how it selects elements?
   [Your observation]
4. Why is this O(n²)?
   [Hint: How many comparisons for each element?]
```

**Step 4: Benchmark on different data**

Test selection sort on:
- Random data: `[64, 34, 25, 12, 22, 11, 90]`
- Already sorted: `[11, 12, 22, 25, 34, 64, 90]`
- Reverse sorted: `[90, 64, 34, 25, 22, 12, 11]`

Record comparisons and swaps for each case.

### Expected Output

- Working selection sort with step-by-step visualization
- Count of comparisons and swaps
- Observation that comparisons are same regardless of input order
- Understanding of why it's O(n²)

---

## Part 2: Insertion Sort - Building Sorted Portion (20 minutes)

### Instructions

Insertion sort builds the sorted array one element at a time.

**Step 1: Implement insertion sort**

**Python**:
```python
def insertion_sort_visualized(arr):
    """Insertion Sort: O(n²) worst case, O(n) best case"""
    n = len(arr)
    comparisons = 0
    swaps = 0

    for i in range(1, n):
        key = arr[i]
        j = i - 1

        # Move elements greater than key one position ahead
        while j >= 0 and arr[j] > key:
            comparisons += 1
            arr[j + 1] = arr[j]
            swaps += 1
            j -= 1

            # Visualize
            visualize_array(arr, i, j+1, f"Insertion Sort - Inserting {key}")
            time.sleep(0.3)

        if j >= 0:
            comparisons += 1

        arr[j + 1] = key

    return comparisons, swaps
```

**C++**:
```cpp
std::pair<int, int> insertion_sort_visualized(std::vector<int>& arr) {
    int n = arr.size();
    int comparisons = 0, swaps = 0;

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            comparisons++;
            arr[j + 1] = arr[j];
            swaps++;
            j--;

            std::cout << "Inserting " << key << ": ";
            visualize_array(arr, i, j+1);
            std::this_thread::sleep_for(std::chrono::milliseconds(300));
        }

        if (j >= 0) comparisons++;

        arr[j + 1] = key;
    }

    return {comparisons, swaps};
}
```

**Step 2: Compare with selection sort**

Run insertion sort on the same three datasets:
- Random
- Already sorted
- Reverse sorted

**Create comparison table**:

| Dataset        | Selection Comparisons | Selection Swaps | Insertion Comparisons | Insertion Swaps |
|----------------|----------------------|-----------------|----------------------|-----------------|
| Random         |                      |                 |                      |                 |
| Sorted         |                      |                 |                      |                 |
| Reverse Sorted |                      |                 |                      |                 |

**Step 3: Analyze the difference**

```
Question: Which algorithm performs better on already-sorted data?
Answer: _____

Question: Why does insertion sort perform better on sorted data?
Answer: [Explain the best-case O(n) behavior]

Question: Which algorithm would you choose for "nearly sorted" data?
Answer: _____
```

### Expected Output

- Working insertion sort with visualization
- Recognition that insertion sort is adaptive (faster on sorted data)
- Comparison table showing performance differences
- Understanding of best-case vs worst-case complexity

---

## Part 3: Merge Sort - Divide and Conquer (25 minutes)

### Instructions

Now implement a faster algorithm: Merge Sort (O(n log n)).

**Step 1: Understand divide and conquer**

```
Prompt: Explain merge sort using divide and conquer. Show me how it divides
the array [64, 34, 25, 12, 22, 11, 90, 88] and then merges it back.

[Document in prompts.txt]
```

**Step 2: Implement merge sort**

**Python**:
```python
def merge_sort(arr, depth=0):
    """Merge Sort: O(n log n)"""
    if len(arr) <= 1:
        return arr

    # Divide
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    print("  " * depth + f"Divide: {arr} → {left} | {right}")

    # Conquer
    left = merge_sort(left, depth + 1)
    right = merge_sort(right, depth + 1)

    # Combine
    merged = merge(left, right)
    print("  " * depth + f"Merge: {left} + {right} → {merged}")

    return merged

def merge(left, right):
    """Merge two sorted arrays"""
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result

# Test
data = [64, 34, 25, 12, 22, 11, 90, 88]
print(f"Original: {data}\n")
sorted_data = merge_sort(data.copy())
print(f"\nSorted: {sorted_data}")
```

**C++**:
```cpp
void merge(std::vector<int>& arr, int left, int mid, int right, int depth) {
    std::vector<int> temp(right - left + 1);
    int i = left, j = mid + 1, k = 0;

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];

    for (int i = 0; i < temp.size(); i++) {
        arr[left + i] = temp[i];
    }

    // Visualize merge
    std::cout << std::string(depth * 2, ' ') << "Merge: ";
    for (int i = left; i <= right; i++) {
        std::cout << arr[i] << " ";
    }
    std::cout << std::endl;
}

void merge_sort(std::vector<int>& arr, int left, int right, int depth = 0) {
    if (left >= right) return;

    int mid = left + (right - left) / 2;

    // Visualize divide
    std::cout << std::string(depth * 2, ' ') << "Divide: [";
    for (int i = left; i <= right; i++) {
        std::cout << arr[i] << (i < right ? ", " : "");
    }
    std::cout << "]" << std::endl;

    merge_sort(arr, left, mid, depth + 1);
    merge_sort(arr, mid + 1, right, depth + 1);
    merge(arr, left, mid, right, depth);
}
```

**Step 3: Observe the recursion tree**

Run merge sort and look at the output. You should see:
```
Divide: [64, 34, 25, 12, 22, 11, 90, 88]
  Divide: [64, 34, 25, 12]
    Divide: [64, 34]
      ...
    Merge: [34, 64]
  ...
Merge: [11, 12, 22, 25, 34, 64, 88, 90]
```

**Answer**:
```
1. How many levels of recursion do you see? _____
2. What's the relationship between array size and recursion depth?
   [Hint: log₂(8) = 3 levels]
3. At each level, how much work is done?
   [Hint: Every element gets compared once per level]
4. Total complexity: depth × work per level = _____ × _____ = O(n log n)
```

**Step 4: Benchmark merge sort vs O(n²) sorts**

Test all three algorithms on larger datasets:

| Algorithm       | n=100 | n=1000 | n=10000 |
|----------------|-------|--------|---------|
| Selection Sort |       |        | (Skip)  |
| Insertion Sort |       |        | (Skip)  |
| Merge Sort     |       |        |         |

**Observation**:
```
When n increases from 100 to 1000 (10x):
- Selection/Insertion time increases by: ~100x (n² pattern)
- Merge sort time increases by: ~13x (n log n pattern)

This is why O(n log n) beats O(n²) for large datasets!
```

### Expected Output

- Working merge sort with divide/merge visualization
- Understanding of recursive decomposition
- Recognition of O(n log n) growth pattern
- Clear performance advantage on large datasets

---

## Part 4: Quick Sort - Another Divide & Conquer (15 minutes)

### Instructions

**Step 1: Implement quick sort**

**Python**:
```python
def quick_sort(arr, low=0, high=None, depth=0):
    """Quick Sort: O(n log n) average, O(n²) worst case"""
    if high is None:
        high = len(arr) - 1

    if low < high:
        # Partition
        pivot_idx = partition(arr, low, high)

        print("  " * depth + f"Pivot: {arr[pivot_idx]}, Array: {arr[low:high+1]}")

        # Recursively sort elements before and after partition
        quick_sort(arr, low, pivot_idx - 1, depth + 1)
        quick_sort(arr, pivot_idx + 1, high, depth + 1)

def partition(arr, low, high):
    """Partition array around pivot"""
    pivot = arr[high]
    i = low - 1

    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]

    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

# Test
data = [64, 34, 25, 12, 22, 11, 90, 88]
print(f"Original: {data}\n")
quick_sort(data)
print(f"\nSorted: {data}")
```

**C++** (similar structure with partition function)

**Step 2: Compare with merge sort**

| Algorithm  | Best Case | Average Case | Worst Case | Extra Space |
|-----------|-----------|--------------|------------|-------------|
| Merge Sort| O(n log n)| O(n log n)   | O(n log n) | O(n)        |
| Quick Sort| O(n log n)| O(n log n)   | O(n²)      | O(log n)    |

**Step 3: Test worst case**

```python
# Worst case for basic quick sort: already sorted!
data_sorted = list(range(100))
# Benchmark this vs random data
```

**Answer**:
```
Why is already-sorted data the worst case for quick sort?
[Explain unbalanced partitions]

How can you avoid the worst case?
[Randomized pivot selection]
```

### Expected Output

- Working quick sort implementation
- Understanding of partition strategy
- Recognition of worst-case scenario
- Comparison with merge sort trade-offs

---

## Wrap-up & Algorithm Selection Guide (10 minutes)

### Discussion Questions

**1. The Big Picture**: You've now implemented:
   - Selection Sort: O(n²), simple but slow
   - Insertion Sort: O(n²) worst, O(n) best—good for nearly sorted data
   - Merge Sort: O(n log n) always, but uses extra space
   - Quick Sort: O(n log n) average, O(n²) worst, in-place

   When would you use each?

**2. Visualization Value**: How did seeing the algorithms work help you understand them better than just reading pseudocode?

**3. Divide and Conquer**: What's the key insight that makes merge sort and quick sort faster than selection/insertion sort?

**4. Real-World Sorting**: Python's `sorted()` and Java's `Arrays.sort()` use Timsort (hybrid of merge and insertion). Why might hybrid algorithms be better?

### Algorithm Selection Flowchart

```
Is data size small (< 50 elements)?
  → Yes: Use Insertion Sort (simple, efficient for small n)
  → No: Continue

Is data nearly sorted?
  → Yes: Use Insertion Sort (O(n) best case)
  → No: Continue

Is memory constrained?
  → Yes: Use Quick Sort (in-place)
  → No: Use Merge Sort (stable, predictable O(n log n))
```

### Exit Ticket

**Submit via Canvas**:

```
1. Upload your visualization screenshots or terminal output

2. Complete the benchmark table for all 4 algorithms

3. In your own words, explain why merge sort is O(n log n):
   [Your explanation]

4. Which sorting algorithm surprised you most? Why?

5. If you had to sort 1 million student records by GPA, which algorithm
   would you choose and why?
```

---

## Extension Challenges (Optional)

### Challenge 1: Heap Sort
Implement heap sort: O(n log n) with O(1) extra space!

### Challenge 2: Counting Sort
For integer data in limited range, implement counting sort: O(n + k)

### Challenge 3: Hybrid Sort
Combine quick sort with insertion sort (use insertion for small subarrays)

### Challenge 4: Sorting Stability
Test which algorithms are stable (preserve order of equal elements)

---

## Instructor Notes

### Timing Breakdown
- **0-5 min**: Setup
- **5-25 min**: Selection sort
- **25-45 min**: Insertion sort
- **45-70 min**: Merge sort
- **70-85 min**: Quick sort
- **85-90 min**: Wrap-up

### Common Struggles

**Recursion confusion**: Students struggle visualizing merge/quick sort recursion
- **Fix**: Draw recursion tree on board, step through small example together

**Off-by-one errors**: Common in partition functions
- **Fix**: Test with small arrays (3-4 elements) first

**Visualization overwhelming**: Too much output
- **Fix**: Use smaller datasets for visualization, larger for benchmarking

### Success Indicators

Students are on track if they:
- ✅ All 4 sorts work correctly
- ✅ Can explain divide-and-conquer strategy
- ✅ Observe O(n²) vs O(n log n) performance difference
- ✅ Understand when to use each algorithm

---

**Next module: You'll apply these concepts to linked list implementations in your first complete sprint!**
