# M03-A1: Sorting Implementation & Visualization

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 3 - Sorting Algorithms
**Week**: 5
**Points**: 25
**Due**: End of Week 5

---

## Assignment Overview

Implement four classic sorting algorithms from scratch: Selection Sort, Insertion Sort, Merge Sort, and Quick Sort. Visualize how each algorithm works step-by-step, discovering patterns of divide-and-conquer versus direct comparison approaches.

**Philosophy**: "Build to understand." By implementing sorting algorithms yourself (not using built-in `sort()`), you'll understand WHY some algorithms are O(n²) and others are O(n log n), not just memorize it.

---

## Learning Objectives

By completing this assignment, you will:

1. Implement four sorting algorithms with correct logic
2. Visualize algorithm execution step-by-step
3. Understand divide-and-conquer strategies (Merge Sort, Quick Sort)
4. Compare simple sorts (Selection, Insertion) vs advanced sorts
5. Estimate work complexity using story points (PM skill)

**Bloom's Level**: Apply, Analyze (CLO1, CLO2, CLO4)

---

## Part 1: Simple Sorts - O(n²) Algorithms (8 points)

### Algorithm 1: Selection Sort

**Concept**: Find the smallest element, swap it to the front, repeat for remaining elements.

**Python implementation**:

```python
def selection_sort(arr: List[int]) -> List[int]:
    """
    Sort array using selection sort algorithm.
    Returns sorted array and prints steps for visualization.
    """
    n = len(arr)
    arr = arr.copy()  # Don't modify original

    for i in range(n):
        # Find minimum element in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        # Swap minimum with first unsorted element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

        # Print step for visualization
        print(f"Step {i+1}: {arr} (swapped {arr[i]} to position {i})")

    return arr
```

**Your task**: Implement this YOURSELF (don't copy-paste). Add comments explaining each step.

**Test**:
```python
data = [64, 25, 12, 22, 11]
sorted_data = selection_sort(data)
print(f"Final sorted: {sorted_data}")
```

**Expected output**:
```
Step 1: [11, 25, 12, 22, 64] (swapped 11 to position 0)
Step 2: [11, 12, 25, 22, 64] (swapped 12 to position 1)
Step 3: [11, 12, 22, 25, 64] (swapped 22 to position 2)
Step 4: [11, 12, 22, 25, 64] (swapped 25 to position 3)
Step 5: [11, 12, 22, 25, 64] (swapped 64 to position 4)
Final sorted: [11, 12, 22, 25, 64]
```

### Algorithm 2: Insertion Sort

**Concept**: Build sorted array one item at a time by inserting each element into its correct position.

**Python starter code**:

```python
def insertion_sort(arr: List[int]) -> List[int]:
    """
    Sort array using insertion sort algorithm.
    Like sorting a hand of cards.
    """
    n = len(arr)
    arr = arr.copy()

    for i in range(1, n):
        key = arr[i]
        j = i - 1

        # TODO: Shift elements greater than key to the right
        # while j >= 0 and arr[j] > key:
        #     arr[j + 1] = arr[j]
        #     j -= 1

        # TODO: Insert key at correct position
        # arr[j + 1] = key

        print(f"Step {i}: {arr} (inserted {key})")

    return arr
```

**C++ versions**:

**Selection Sort**:
```cpp
void selectionSort(std::vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        int min_idx = i;

        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_idx])
                min_idx = j;
        }

        std::swap(arr[i], arr[min_idx]);
        printArray(arr, i + 1);  // Helper function to print
    }
}
```

**Insertion Sort**:
```cpp
void insertionSort(std::vector<int>& arr) {
    int n = arr.size();

    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
        printArray(arr, i);
    }
}
```

**Grading** (8 points):
- Selection sort implemented correctly (3 pts)
- Insertion sort implemented correctly (3 pts)
- Both algorithms print visualization steps (2 pts)

---

## Part 2: Divide-and-Conquer Sorts - O(n log n) (10 points)

### Algorithm 3: Merge Sort

**Concept**: Divide array in half, recursively sort each half, merge sorted halves.

**Python implementation**:

```python
def merge_sort(arr: List[int]) -> List[int]:
    """
    Sort array using merge sort (divide-and-conquer).
    """
    if len(arr) <= 1:
        return arr

    # Divide
    mid = len(arr) // 2
    left = arr[:mid]
    right = arr[mid:]

    # Conquer (recursive calls)
    left = merge_sort(left)
    right = merge_sort(right)

    # Combine (merge)
    return merge(left, right)


def merge(left: List[int], right: List[int]) -> List[int]:
    """
    Merge two sorted arrays into one sorted array.
    """
    result = []
    i = j = 0

    # TODO: Implement merge logic
    # Compare elements from left and right
    # Add smaller element to result
    # Move pointer forward

    # Hint:
    # while i < len(left) and j < len(right):
    #     if left[i] <= right[j]:
    #         result.append(left[i])
    #         i += 1
    #     else:
    #         result.append(right[j])
    #         j += 1

    # TODO: Add remaining elements
    # result.extend(left[i:])
    # result.extend(right[j:])

    print(f"Merged: {left} + {right} = {result}")
    return result
```

**C++ version**:

```cpp
void merge(std::vector<int>& arr, int left, int mid, int right) {
    int n1 = mid - left + 1;
    int n2 = right - mid;

    std::vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(std::vector<int>& arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
}
```

### Algorithm 4: Quick Sort

**Concept**: Choose pivot, partition array around pivot, recursively sort partitions.

**Python implementation**:

```python
def quick_sort(arr: List[int]) -> List[int]:
    """
    Sort array using quick sort algorithm.
    """
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    print(f"Pivot {pivot}: {left} | {middle} | {right}")

    return quick_sort(left) + middle + quick_sort(right)
```

**C++ version** (in-place partitioning):

```cpp
int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }

    std::swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
```

**Test all algorithms**:

```python
test_data = [64, 34, 25, 12, 22, 11, 90]

print("=== Selection Sort ===")
selection_sort(test_data.copy())

print("\n=== Insertion Sort ===")
insertion_sort(test_data.copy())

print("\n=== Merge Sort ===")
result = merge_sort(test_data.copy())
print(f"Final: {result}")

print("\n=== Quick Sort ===")
result = quick_sort(test_data.copy())
print(f"Final: {result}")
```

**Grading** (10 points):
- Merge sort implemented correctly (4 pts)
- Quick sort implemented correctly (4 pts)
- Both print visualization of divide/merge steps (2 pts)

---

## Part 3: Sorting Visualizer (4 points)

### Create Visual Representation

Build a simple visualizer that shows HOW each sort works.

**Python example using ASCII bars**:

```python
def visualize_sort(arr: List[int], algorithm_name: str):
    """
    Visualize sorting algorithm with ASCII bar chart.
    """
    def print_bars(arr, highlight_idx=-1):
        max_val = max(arr) if arr else 1
        for i, val in enumerate(arr):
            bar_length = int((val / max_val) * 40)
            bar = '█' * bar_length
            marker = '<--' if i == highlight_idx else ''
            print(f"{val:3d} | {bar} {marker}")
        print()

    # Example: Visualize selection sort step-by-step
    print(f"=== {algorithm_name} Visualization ===\n")
    print("Initial array:")
    print_bars(arr)

    # Run sort with visualization at each step
    # (Modify your sorting functions to call print_bars at each swap)
```

**Expected output**:
```
=== Selection Sort Visualization ===

Initial array:
 64 | ████████████████████████████████████████
 25 | ███████████████
 12 | ███████
 22 | █████████████
 11 | ██████

Step 1 (swapped 11 to front):
 11 | ██████
 25 | ███████████████
 12 | ███████
 22 | █████████████
 64 | ████████████████████████████████████████
```

**Alternative**: Create HTML visualization that animates sorting steps.

**Grading** (4 points):
- Visualization shows array state (2 pts)
- Highlights key operations (swaps/merges) (2 pts)

---

## Part 4: PM Integration - Story Points Estimation (3 points)

### Estimate Complexity with Story Points

Create `story_points.md` estimating the complexity of implementing each algorithm:

```markdown
# Story Points Estimation - Sorting Algorithms

## Story Point Scale
- 1 point = Very simple, < 1 hour
- 2 points = Simple, 1-2 hours
- 3 points = Moderate, 2-4 hours
- 5 points = Complex, 4-8 hours
- 8 points = Very complex, full day

## Algorithm Estimates

### Selection Sort
**Story Points**: [Your estimate]
**Reasoning**: [Why this estimate?]
**Actual Time**: [How long did it take?]

### Insertion Sort
**Story Points**: [Your estimate]
**Reasoning**: [Why this estimate?]
**Actual Time**: [How long did it take?]

### Merge Sort
**Story Points**: [Your estimate]
**Reasoning**: [Why this estimate? Consider recursive complexity]
**Actual Time**: [How long did it take?]

### Quick Sort
**Story Points**: [Your estimate]
**Reasoning**: [Why this estimate?]
**Actual Time**: [How long did it take?]

## Reflection
**Total estimated**: [X] points
**Total actual time**: [Y] hours
**Accuracy**: [Were estimates close? What surprised you?]
```

**Grading** (3 points):
- Story points estimated for all 4 algorithms (2 pts)
- Reflection on accuracy (1 pt)

---

## Submission Checklist

- [ ] All 4 sorting algorithms implemented
- [ ] All algorithms include visualization/step printing
- [ ] Test cases pass for all algorithms
- [ ] Visualizer created (ASCII or HTML)
- [ ] story_points.md with estimates and reflection
- [ ] prompts.txt documenting AI collaboration
- [ ] Pull request with complete implementation

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Simple Sorts (O(n²))** | 8 | Selection sort (3), Insertion sort (3), visualization (2) |
| **Divide-Conquer Sorts** | 10 | Merge sort (4), Quick sort (4), visualization (2) |
| **Sorting Visualizer** | 4 | Shows array states (2), highlights operations (2) |
| **PM Story Points** | 3 | Estimates for all (2), reflection (1) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Code doesn't run: -5 points
- Algorithms produce incorrect output: -3 pts each
- Missing visualization: -2 points
- Missing prompts.txt: -2 points

---

## Resources

**After you've tried**:
- VisuAlgo: [Sorting Visualizations](https://visualgo.net/en/sorting)
- Runestone: [Sorting Algorithms](https://runestone.academy/ns/books/published/pythonds3/SortingAndSearching/sorting.html)
- Sorting Algorithm Animations: [sorting-algorithms.com](http://www.sorting-algorithms.com/)

**Understanding Merge Sort**:
- Visualization: Watch the merge process
- Key insight: Merging two sorted arrays is O(n)

**Understanding Quick Sort**:
- Pivot selection strategies
- Worst case vs average case

**Get Help**:
- Office Hours: See Canvas
- Discord: #week05-sorting channel

---

## Extension Challenges (+5 bonus)

1. **Heap Sort**: Implement heap sort algorithm (O(n log n))

2. **Hybrid Sort**: Implement "Timsort" strategy—use insertion sort for small subarrays, merge sort for larger

3. **Animated Visualization**: Create web-based visualization using HTML/CSS/JavaScript

4. **Comparative Analysis**: Run all 4 algorithms on same dataset, compare step counts and swaps

5. **Stability Analysis**: Test which algorithms are "stable" (preserve relative order of equal elements)

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
