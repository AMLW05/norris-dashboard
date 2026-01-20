# Module 6 Activity: Tree Traversal Lab - Recursion and Hierarchical Data

**Duration**: 90 minutes
**Format**: Individual with visualization exercises
**Materials Needed**:
- Working C++/Python development environment
- Paper/whiteboard for drawing tree diagrams
- Visualization tools (graphviz, or hand-drawn trees)
- Sprint 3 planning materials
- Expression evaluation test cases

**Learning Objectives**:
- Implement binary search tree (BST) with all operations
- Execute and visualize tree traversals (inorder, preorder, postorder, level-order)
- Understand recursive tree algorithms through implementation
- Build expression tree evaluator
- Recognize when tree structures are appropriate vs linear structures

---

## Overview

**Welcome to Sprint 3!** PM is becoming habitual now. You're focusing more on implementation, less on process overhead.

Trees are everywhere: file systems, DOM trees, decision trees, syntax trees, organization charts. Today you'll build Binary Search Trees and see why hierarchical data structures matter.

**By the end of this lab, you'll:**
- Implement BST with insert, search, delete
- Visualize four different tree traversal orders
- Understand why inorder traversal produces sorted output
- Build an expression tree that evaluates mathematical expressions
- Recognize O(log n) search performance (balanced trees)

**Recursion is your friend. Trees are naturally recursive structures.**

---

## Pre-Activity Setup (10 minutes)

**Before you start:**

1. **Sprint 3 Planning**:
   ```
   Sprint 2 Velocity: _____ points
   Velocity Trend: Sprint 1: ___, Sprint 2: ___, Average: ___

   Sprint 3 Capacity: _____ points (using average velocity)
   ```

2. **Create Sprint 3 Issue**:
   ```
   Title: Sprint 3: Binary Search Tree & Heap Implementation

   Description:
   Implement hierarchical data structures with O(log n) performance.

   Acceptance Criteria:
   - [ ] BST with insert, search, delete, min, max
   - [ ] All four traversals implemented
   - [ ] Tree visualization (print structure)
   - [ ] Expression tree evaluator
   - [ ] Height and balance factor calculation
   - [ ] Heap structure for priority queue

   Sprint Goal: Working BST with all traversals + expression evaluator

   Story Points: _____
   ```

3. **Review recursion**:
   ```python
   # Recursive template for trees
   def process_tree(node):
       if node is None:  # Base case
           return

       # Process current node
       # Recursively process left subtree
       # Recursively process right subtree
   ```

---

## Part 1: Build Your First BST (25 minutes)

### Instructions

**Step 1: Understand BST property**

Binary Search Tree rule:
- Left subtree: all values < node value
- Right subtree: all values > node value

```
Example BST:
        50
       /  \
      30   70
     / \   / \
   20  40 60  80

Property check:
- All left of 50: {20, 30, 40} < 50 ✓
- All right of 50: {60, 70, 80} > 50 ✓
```

**Step 2: Implement Node and BST**

**Python**:
```python
class TreeNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        """Insert value into BST"""
        if self.root is None:
            self.root = TreeNode(value)
        else:
            self._insert_recursive(self.root, value)

    def _insert_recursive(self, node, value):
        """Recursive helper for insert"""
        if value < node.value:
            # Go left
            if node.left is None:
                node.left = TreeNode(value)
            else:
                self._insert_recursive(node.left, value)
        elif value > node.value:
            # Go right
            if node.right is None:
                node.right = TreeNode(value)
            else:
                self._insert_recursive(node.right, value)
        # If value == node.value, ignore (no duplicates)

    def search(self, value):
        """Search for value in BST"""
        return self._search_recursive(self.root, value)

    def _search_recursive(self, node, value):
        """Recursive search"""
        if node is None:
            return False

        if value == node.value:
            return True
        elif value < node.value:
            return self._search_recursive(node.left, value)
        else:
            return self._search_recursive(node.right, value)

    def find_min(self):
        """Find minimum value (leftmost node)"""
        if self.root is None:
            return None
        current = self.root
        while current.left:
            current = current.left
        return current.value

    def find_max(self):
        """Find maximum value (rightmost node)"""
        if self.root is None:
            return None
        current = self.root
        while current.right:
            current = current.right
        return current.value

    def height(self):
        """Calculate tree height"""
        return self._height_recursive(self.root)

    def _height_recursive(self, node):
        """Recursive height calculation"""
        if node is None:
            return -1  # Or 0, depending on definition

        left_height = self._height_recursive(node.left)
        right_height = self._height_recursive(node.right)

        return 1 + max(left_height, right_height)
```

**C++**:
```cpp
struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;

    TreeNode(int val) : value(val), left(nullptr), right(nullptr) {}
};

class BinarySearchTree {
private:
    TreeNode* root;

    TreeNode* insertRecursive(TreeNode* node, int value) {
        if (node == nullptr) {
            return new TreeNode(value);
        }

        if (value < node->value) {
            node->left = insertRecursive(node->left, value);
        } else if (value > node->value) {
            node->right = insertRecursive(node->right, value);
        }

        return node;
    }

    bool searchRecursive(TreeNode* node, int value) {
        if (node == nullptr) return false;

        if (value == node->value) return true;
        if (value < node->value) return searchRecursive(node->left, value);
        return searchRecursive(node->right, value);
    }

public:
    BinarySearchTree() : root(nullptr) {}

    void insert(int value) {
        root = insertRecursive(root, value);
    }

    bool search(int value) {
        return searchRecursive(root, value);
    }

    // Find min, max, height implementations...
};
```

**Step 3: Test BST operations**

```python
# Create BST
bst = BinarySearchTree()

# Insert values
values = [50, 30, 70, 20, 40, 60, 80]
for val in values:
    bst.insert(val)
    print(f"Inserted {val}")

# Visualize structure (draw on paper)
print("\nTree structure (draw this):")
print("        50")
print("       /  \\")
print("      30   70")
print("     / \\   / \\")
print("   20  40 60  80")

# Test search
print(f"\nSearch 40: {bst.search(40)}")  # True
print(f"Search 25: {bst.search(25)}")    # False

# Find min/max
print(f"Min: {bst.find_min()}")  # 20
print(f"Max: {bst.find_max()}")  # 80

# Calculate height
print(f"Height: {bst.height()}")  # 2
```

**Step 4: Analyze complexity**

```
Operation    | Balanced Tree | Worst Case (Degenerate)
-------------|---------------|-------------------------
Search       | O(log n)      | O(n) (becomes linked list)
Insert       | O(log n)      | O(n)
Delete       | O(log n)      | O(n)
Find Min/Max | O(log n)      | O(n)

Question: When does BST become O(n) for search?
Answer: When tree is unbalanced (e.g., inserting sorted data: 1,2,3,4,5...)

Draw degenerate tree:
1
 \
  2
   \
    3
     \
      4
(This is just a linked list!)
```

### Expected Output

- Working BST with insert and search
- Understanding of BST property
- Recognition of O(log n) performance (balanced case)
- Awareness of worst-case degeneration

---

## Part 2: Tree Traversals - Four Ways (30 minutes)

### Instructions

**Step 1: Implement all four traversals**

**Python**:
```python
class BinarySearchTree:
    # ... previous methods ...

    def inorder_traversal(self):
        """Inorder: Left -> Root -> Right"""
        result = []
        self._inorder_recursive(self.root, result)
        return result

    def _inorder_recursive(self, node, result):
        if node is None:
            return

        self._inorder_recursive(node.left, result)   # Left
        result.append(node.value)                     # Root
        self._inorder_recursive(node.right, result)  # Right

    def preorder_traversal(self):
        """Preorder: Root -> Left -> Right"""
        result = []
        self._preorder_recursive(self.root, result)
        return result

    def _preorder_recursive(self, node, result):
        if node is None:
            return

        result.append(node.value)                     # Root
        self._preorder_recursive(node.left, result)   # Left
        self._preorder_recursive(node.right, result)  # Right

    def postorder_traversal(self):
        """Postorder: Left -> Right -> Root"""
        result = []
        self._postorder_recursive(self.root, result)
        return result

    def _postorder_recursive(self, node, result):
        if node is None:
            return

        self._postorder_recursive(node.left, result)   # Left
        self._postorder_recursive(node.right, result)  # Right
        result.append(node.value)                      # Root

    def level_order_traversal(self):
        """Level-order (BFS): Level by level, left to right"""
        if self.root is None:
            return []

        result = []
        queue = [self.root]  # Use list as queue

        while queue:
            node = queue.pop(0)  # Dequeue front
            result.append(node.value)

            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        return result
```

**Step 2: Visualize traversals**

```python
bst = BinarySearchTree()
values = [50, 30, 70, 20, 40, 60, 80]
for val in values:
    bst.insert(val)

print("Tree structure:")
print("        50")
print("       /  \\")
print("      30   70")
print("     / \\   / \\")
print("   20  40 60  80")
print()

print("Traversal Results:")
print(f"Inorder:    {bst.inorder_traversal()}")
print(f"Preorder:   {bst.preorder_traversal()}")
print(f"Postorder:  {bst.postorder_traversal()}")
print(f"Level-order: {bst.level_order_traversal()}")
```

**Expected output**:
```
Inorder:     [20, 30, 40, 50, 60, 70, 80]  # SORTED!
Preorder:    [50, 30, 20, 40, 70, 60, 80]
Postorder:   [20, 40, 30, 60, 80, 70, 50]
Level-order: [50, 30, 70, 20, 40, 60, 80]
```

**Step 3: Understand traversal patterns**

Draw and trace each traversal:

```
INORDER (Left -> Root -> Right):
Start at 50
  Go left to 30
    Go left to 20
      No left, visit 20 ✓
      No right, back to 30
    Visit 30 ✓
    Go right to 40
      Visit 40 ✓
  Visit 50 ✓
  Go right to 70...

Result: 20, 30, 40, 50, 60, 70, 80 (SORTED!)

Key insight: Inorder traversal of BST produces sorted sequence!
```

**Step 4: Traversal use cases**

```
Traversal   | Pattern              | Use Case
------------|----------------------|----------------------------------
Inorder     | Left-Root-Right      | Get sorted values from BST
Preorder    | Root-Left-Right      | Copy tree, serialize tree
Postorder   | Left-Right-Root      | Delete tree, evaluate expression
Level-order | Level by level (BFS) | Find shortest path, print by level
```

**Step 5: Challenge - Trace by hand**

Given this tree, trace all four traversals:
```
       10
      /  \
     5    15
    / \     \
   3   7    20
```

Answers:
```
Inorder:     [3, 5, 7, 10, 15, 20]
Preorder:    [10, 5, 3, 7, 15, 20]
Postorder:   [3, 7, 5, 20, 15, 10]
Level-order: [10, 5, 15, 3, 7, 20]
```

### Expected Output

- All four traversals implemented correctly
- Recognition that inorder produces sorted output
- Understanding of recursion in tree traversal
- Ability to trace traversals by hand

---

## Part 3: Delete Operation - The Challenging One (20 minutes)

### Instructions

Deletion is the hardest tree operation because of three cases.

**Step 1: Understand the three cases**

```
Case 1: Node has no children (leaf)
  → Simply remove it

        50                50
       /  \              /  \
      30   70    →      30   70
     /                 /
   20 (delete)

Case 2: Node has one child
  → Replace node with its child

        50                50
       /  \              /  \
      30   70    →      30   70
       \                 \
        40                60
       /                 /
     35 (delete 40)     35

Case 3: Node has two children
  → Find inorder successor (min in right subtree)
  → Replace node value with successor value
  → Delete successor

        50                60
       /  \              /  \
      30   70    →      30   70
     / \   / \         / \     \
   20  40 60  80     20  40     80
(delete 50: replace with 60, delete original 60)
```

**Step 2: Implement delete**

```python
def delete(self, value):
    """Delete value from BST"""
    self.root = self._delete_recursive(self.root, value)

def _delete_recursive(self, node, value):
    """Recursive delete"""
    if node is None:
        return None

    if value < node.value:
        node.left = self._delete_recursive(node.left, value)
    elif value > node.value:
        node.right = self._delete_recursive(node.right, value)
    else:
        # Found node to delete

        # Case 1: No children (leaf)
        if node.left is None and node.right is None:
            return None

        # Case 2: One child
        if node.left is None:
            return node.right
        if node.right is None:
            return node.left

        # Case 3: Two children
        # Find inorder successor (min in right subtree)
        successor = self._find_min_node(node.right)
        node.value = successor.value
        node.right = self._delete_recursive(node.right, successor.value)

    return node

def _find_min_node(self, node):
    """Find node with minimum value"""
    current = node
    while current.left:
        current = current.left
    return current
```

**Step 3: Test deletion**

```python
bst = BinarySearchTree()
values = [50, 30, 70, 20, 40, 60, 80]
for val in values:
    bst.insert(val)

print("Original:", bst.inorder_traversal())

# Test Case 1: Delete leaf
bst.delete(20)
print("After deleting 20:", bst.inorder_traversal())

# Test Case 2: Delete node with one child
bst.delete(70)  # Has two children (60, 80)
print("After deleting 70:", bst.inorder_traversal())

# Test Case 3: Delete root
bst.delete(50)
print("After deleting 50:", bst.inorder_traversal())
```

### Expected Output

- Understanding of three deletion cases
- Working delete implementation
- Recognition that Case 3 is most complex
- Tree remains valid BST after deletions

---

## Part 4: Expression Tree Evaluator (15 minutes)

### Instructions

**Step 1: Understand expression trees**

```
Expression: (3 + 5) * (2 - 1)

Tree representation:
         *
        / \
       +   -
      / \ / \
     3  5 2  1

Postorder traversal evaluates the expression!
Left, Right, Root = 3, 5, +, 2, 1, -, *
```

**Step 2: Build expression tree**

```python
class ExpressionNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def is_operator(self):
        return self.value in ['+', '-', '*', '/']

class ExpressionTree:
    def __init__(self, root):
        self.root = root

    def evaluate(self):
        """Evaluate expression tree using postorder traversal"""
        return self._evaluate_recursive(self.root)

    def _evaluate_recursive(self, node):
        if node is None:
            return 0

        # Leaf node (operand)
        if not node.is_operator():
            return float(node.value)

        # Evaluate left and right subtrees
        left_val = self._evaluate_recursive(node.left)
        right_val = self._evaluate_recursive(node.right)

        # Apply operator
        if node.value == '+':
            return left_val + right_val
        elif node.value == '-':
            return left_val - right_val
        elif node.value == '*':
            return left_val * right_val
        elif node.value == '/':
            return left_val / right_val

    def to_infix(self):
        """Convert to infix notation with parentheses"""
        return self._infix_recursive(self.root)

    def _infix_recursive(self, node):
        if node is None:
            return ""

        if not node.is_operator():
            return str(node.value)

        left = self._infix_recursive(node.left)
        right = self._infix_recursive(node.right)

        return f"({left} {node.value} {right})"
```

**Step 3: Test expression tree**

```python
# Build tree for: (3 + 5) * 2
#       *
#      / \
#     +   2
#    / \
#   3   5

root = ExpressionNode('*')
root.left = ExpressionNode('+')
root.left.left = ExpressionNode('3')
root.left.right = ExpressionNode('5')
root.right = ExpressionNode('2')

tree = ExpressionTree(root)

print(f"Expression: {tree.to_infix()}")     # ((3 + 5) * 2)
print(f"Result: {tree.evaluate()}")         # 16
```

**Step 4: More complex expression**

```python
# Build: ((7 - 3) * (2 + 4)) / 8
# Expected: (4 * 6) / 8 = 24 / 8 = 3
```

### Expected Output

- Working expression tree evaluator
- Understanding of postorder for evaluation
- Ability to convert between tree and infix notation
- Recognition of tree structure in mathematical expressions

---

## Wrap-up & Applications (10 minutes)

### Discussion Questions

**1. Why Trees?**: When would you use a tree instead of a linked list or hash table?

**2. Balanced vs Unbalanced**: What's the problem with an unbalanced BST? How do AVL trees or Red-Black trees solve this?

**3. Traversal Choice**: If you need to delete all nodes in a tree, which traversal would you use? Why?

**4. Real-World Trees**:
   - File systems: directories and files
   - DOM: HTML elements
   - Decision trees: ML classification
   - Syntax trees: compilers

   Which traversal would you use for each?

### Exit Ticket

**Submit via Canvas**:

```
1. Upload your BST implementation with all traversals

2. Draw a BST after inserting: 15, 10, 20, 8, 12, 17, 25
   Then show the result after deleting 10

3. Given tree:
        8
       / \
      3   10
     / \    \
    1   6   14
   Write the output for:
   - Inorder: ___________
   - Preorder: ___________
   - Postorder: ___________

4. Why does inorder traversal of a BST produce sorted output?
   [Your explanation]

5. Sprint 3 progress check: ___% complete
```

---

## Extension Challenges (Optional)

### Challenge 1: AVL Tree
Implement self-balancing BST with rotation operations

### Challenge 2: Tree Serialization
Serialize tree to string, then deserialize back to tree

### Challenge 3: Lowest Common Ancestor
Find LCA of two nodes in BST

### Challenge 4: Path Sum
Find all root-to-leaf paths that sum to target value

---

## Instructor Notes

### Common Struggles

**Recursion confusion**: Base case, recursive case
- **Fix**: Draw recursion tree, trace execution

**Traversal order**: Mixing up inorder/preorder/postorder
- **Fix**: Mnemonic: "Where do you visit root? In/Pre/Post"

**Delete complexity**: Case 3 with two children
- **Fix**: Step through example slowly, draw each step

### Success Indicators

Students grasp trees if they:
- ✅ Can draw tree after series of inserts
- ✅ Trace traversals by hand correctly
- ✅ Understand why inorder produces sorted output
- ✅ Implement all operations correctly
- ✅ Recognize O(log n) performance benefit

---

**Next: Graphs! Trees are special cases of graphs.**
