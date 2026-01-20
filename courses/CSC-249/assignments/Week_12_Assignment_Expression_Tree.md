# M06-A2: Expression Tree Evaluator

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 6 - Trees & Heaps (Application Project)
**Week**: 12
**Points**: 25
**Due**: End of Week 12

---

## Assignment Overview

Build an expression tree evaluator that parses mathematical expressions (like "3 + 4 * 2") into a tree structure and evaluates them correctly. This demonstrates a real-world tree application: compilers use expression trees to parse and evaluate code.

**Philosophy**: "Trees represent structure." Expression trees visually show operator precedence. Infix notation (3 + 4) becomes tree structure, making evaluation straightforward through tree traversal.

---

## Learning Objectives

By completing this assignment, you will:

1. Build expression trees from postfix notation
2. Evaluate expressions using tree traversal
3. Convert between infix, prefix, and postfix notation
4. Apply tree data structures to solve compiler-like problems
5. Understand how compilers parse mathematical expressions

**Bloom's Level**: Apply, Analyze (CLO1, CLO5)

---

## Part 1: Understanding Expression Trees (5 points)

### Create `EXPRESSION_TREE_EXPLANATION.md`

```markdown
# Expression Trees Explained

## What is an Expression Tree?

An expression tree represents a mathematical expression where:
- **Leaf nodes** = numbers (operands)
- **Internal nodes** = operators (+, -, *, /)

Example: Expression "3 + 4 * 2"

```
      +
     / \
    3   *
       / \
      4   2
```

## Why Postfix Notation?

**Infix**: 3 + 4 * 2 (requires precedence rules)
**Postfix**: 3 4 2 * + (no precedence needed, unambiguous)

Building tree from postfix is straightforward using a stack.

## Evaluation via Tree Traversal

**Postorder traversal** (left, right, root) naturally evaluates:
1. Evaluate left subtree → 3
2. Evaluate right subtree → 4 * 2 = 8
3. Apply root operator → 3 + 8 = 11

## Your Task

Explain in YOUR OWN WORDS:
1. Why are operators internal nodes and numbers leaf nodes?
2. Why is postfix easier to parse than infix?
3. How does tree structure enforce operator precedence?

[Your explanations here]
```

**Grading** (5 points):
- Explanation shows understanding (5 pts)

---

## Part 2: Expression Tree Implementation (15 points)

### Requirements

Build an `ExpressionTree` class that:
1. Parses postfix expressions into tree
2. Evaluates tree to get result
3. Converts tree to infix, prefix, postfix notation

**Python implementation**:

```python
class ExpressionNode:
    """Node for expression tree."""
    def __init__(self, value):
        self.value = value  # operator or operand
        self.left = None
        self.right = None

    def is_operator(self):
        """Check if node contains operator."""
        return self.value in ['+', '-', '*', '/', '^']


class ExpressionTree:
    """Expression tree built from postfix notation."""

    def __init__(self, postfix_expr):
        """
        Build expression tree from postfix expression.
        Example: "3 4 + 2 *" becomes tree for (3+4)*2
        """
        self.root = self._build_from_postfix(postfix_expr)

    def _build_from_postfix(self, postfix):
        """
        Build tree using stack.
        Algorithm:
        1. For each token in postfix:
           - If operand: create node, push to stack
           - If operator: pop 2 operands, create node with operator,
             set operands as children, push to stack
        2. Final stack item is root
        """
        stack = []
        tokens = postfix.split()

        for token in tokens:
            node = ExpressionNode(token)

            if node.is_operator():
                # Pop right, then left (order matters!)
                node.right = stack.pop()
                node.left = stack.pop()

            stack.append(node)

        return stack[0] if stack else None

    def evaluate(self):
        """Evaluate expression tree recursively."""
        return self._evaluate_recursive(self.root)

    def _evaluate_recursive(self, node):
        """
        Postorder evaluation:
        1. Evaluate left subtree
        2. Evaluate right subtree
        3. Apply operator
        """
        if node is None:
            return 0

        # Leaf node (operand)
        if not node.is_operator():
            return float(node.value)

        # Internal node (operator)
        left_val = self._evaluate_recursive(node.left)
        right_val = self._evaluate_recursive(node.right)

        # TODO: Apply operator based on node.value
        if node.value == '+':
            return left_val + right_val
        elif node.value == '-':
            return left_val - right_val
        # TODO: Implement *, /, ^
        elif node.value == '*':
            pass  # Your implementation
        elif node.value == '/':
            pass
        elif node.value == '^':
            pass  # Exponentiation

    def to_infix(self):
        """Convert tree to infix notation."""
        return self._infix_recursive(self.root)

    def _infix_recursive(self, node):
        """Inorder traversal with parentheses."""
        if node is None:
            return ""

        if not node.is_operator():
            return str(node.value)

        # Inorder: (left) operator (right)
        left_str = self._infix_recursive(node.left)
        right_str = self._infix_recursive(node.right)
        return f"({left_str} {node.value} {right_str})"

    def to_prefix(self):
        """Convert tree to prefix notation."""
        return self._prefix_recursive(self.root)

    def _prefix_recursive(self, node):
        """Preorder traversal: operator left right."""
        # TODO: Implement
        pass

    def to_postfix(self):
        """Convert tree to postfix notation."""
        return self._postfix_recursive(self.root)

    def _postfix_recursive(self, node):
        """Postorder traversal: left right operator."""
        # TODO: Implement
        pass

    def display_tree(self, node=None, level=0):
        """Display tree structure."""
        if node is None:
            node = self.root

        if node:
            self.display_tree(node.right, level + 1)
            print('    ' * level + str(node.value))
            self.display_tree(node.left, level + 1)
```

**C++ version**:

```cpp
#include <string>
#include <stack>
#include <sstream>
#include <cmath>

class ExpressionNode {
public:
    std::string value;
    ExpressionNode* left;
    ExpressionNode* right;

    ExpressionNode(std::string val) : value(val), left(nullptr), right(nullptr) {}

    bool isOperator() {
        return value == "+" || value == "-" || value == "*" || value == "/" || value == "^";
    }
};

class ExpressionTree {
private:
    ExpressionNode* root;

    ExpressionNode* buildFromPostfix(const std::string& postfix) {
        std::stack<ExpressionNode*> stack;
        std::istringstream iss(postfix);
        std::string token;

        while (iss >> token) {
            ExpressionNode* node = new ExpressionNode(token);

            if (node->isOperator()) {
                node->right = stack.top(); stack.pop();
                node->left = stack.top(); stack.pop();
            }

            stack.push(node);
        }

        return stack.empty() ? nullptr : stack.top();
    }

    double evaluateRecursive(ExpressionNode* node) {
        // TODO: Implement evaluation
        return 0.0;
    }

public:
    ExpressionTree(const std::string& postfix) {
        root = buildFromPostfix(postfix);
    }

    double evaluate() {
        return evaluateRecursive(root);
    }

    // TODO: Implement to_infix, to_prefix, to_postfix
};
```

### Test Cases

```python
def test_expression_tree():
    # Test 1: Simple addition
    expr1 = ExpressionTree("3 4 +")
    assert expr1.evaluate() == 7
    assert expr1.to_infix() == "(3 + 4)"
    print("Test 1 PASSED")

    # Test 2: Precedence (3 + 4) * 2
    expr2 = ExpressionTree("3 4 + 2 *")
    assert expr2.evaluate() == 14
    assert expr2.to_infix() == "((3 + 4) * 2)"
    print("Test 2 PASSED")

    # Test 3: Division
    expr3 = ExpressionTree("8 2 /")
    assert expr3.evaluate() == 4
    print("Test 3 PASSED")

    # Test 4: Complex expression: ((5 + 3) * 2) - 4
    # Postfix: 5 3 + 2 * 4 -
    expr4 = ExpressionTree("5 3 + 2 * 4 -")
    assert expr4.evaluate() == 12
    print("Test 4 PASSED")

    # Test 5: Exponentiation: 2^3 + 1
    # Postfix: 2 3 ^ 1 +
    expr5 = ExpressionTree("2 3 ^ 1 +")
    assert expr5.evaluate() == 9
    print("Test 5 PASSED")

    # Test 6: Prefix conversion
    expr6 = ExpressionTree("3 4 +")
    assert expr6.to_prefix() == "+ 3 4"
    print("Test 6 PASSED")

    # Test 7: Postfix conversion (should match input)
    expr7 = ExpressionTree("3 4 + 2 *")
    assert expr7.to_postfix() == "3 4 + 2 *"
    print("Test 7 PASSED")

    print("\n✓ All tests passed!")
```

**Grading** (15 points):
- ExpressionNode and Tree structure (2 pts)
- Build tree from postfix (4 pts)
- Evaluate tree (4 pts)
- Convert to infix (2 pts)
- Convert to prefix/postfix (2 pts)
- All tests passing (1 pt)

---

## Part 3: Infix to Postfix Converter (Bonus Integration) (5 points)

### Challenge: Parse Infix Directly

Build converter from infix to postfix using **Shunting Yard Algorithm**:

```python
def infix_to_postfix(infix):
    """
    Convert infix to postfix using Shunting Yard algorithm.
    Example: "3 + 4 * 2" → "3 4 2 * +"
    """
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    output = []
    operator_stack = []

    tokens = infix.split()

    for token in tokens:
        if token.isdigit():
            output.append(token)
        elif token == '(':
            operator_stack.append(token)
        elif token == ')':
            while operator_stack and operator_stack[-1] != '(':
                output.append(operator_stack.pop())
            operator_stack.pop()  # Remove '('
        elif token in precedence:
            # Pop operators with >= precedence
            while (operator_stack and
                   operator_stack[-1] != '(' and
                   operator_stack[-1] in precedence and
                   precedence[operator_stack[-1]] >= precedence[token]):
                output.append(operator_stack.pop())
            operator_stack.append(token)

    while operator_stack:
        output.append(operator_stack.pop())

    return ' '.join(output)

# Now you can use:
postfix = infix_to_postfix("3 + 4 * 2")
tree = ExpressionTree(postfix)
print(tree.evaluate())  # 11
```

**Grading** (5 points - BONUS):
- Infix to postfix converter working (3 pts)
- Handles parentheses correctly (2 pts)

---

## Submission Checklist

- [ ] EXPRESSION_TREE_EXPLANATION.md
- [ ] ExpressionTree class implemented
- [ ] Build from postfix working
- [ ] Evaluate method working
- [ ] Infix/prefix/postfix conversions
- [ ] Test suite with 7+ tests passing
- [ ] Infix to postfix converter (bonus)
- [ ] prompts.txt
- [ ] Pull request

---

## Grading Rubric (25 points + 5 bonus)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Explanation Document** | 5 | Understanding demonstrated (5) |
| **Tree Implementation** | 15 | Structure (2), build (4), evaluate (4), infix (2), prefix/postfix (2), tests (1) |
| **Bonus: Infix Converter** | +5 | Converter (3), parentheses (2) |
| **Total** | **25** | *(+5 bonus)* |

### Deductions
- Late submission: -10% per day
- Tests don't pass: -3 points
- Missing conversions: -2 pts each

---

## Resources

**Expression Trees**:
- Compiler design basics
- AST (Abstract Syntax Trees)

**Shunting Yard Algorithm**:
- Dijkstra's algorithm for parsing
- Stack-based parsing

**Get Help**:
- Office Hours
- Discord: #week12-expression-trees

---

## Extension Challenges (+3 bonus)

1. **Variable Support**: Handle variables like "x + 2"
2. **Function Calls**: Support "sin(x) + 2"
3. **Tree Simplification**: Simplify "x + 0" to "x"
4. **Derivative Calculator**: Compute symbolic derivatives using tree manipulation

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
