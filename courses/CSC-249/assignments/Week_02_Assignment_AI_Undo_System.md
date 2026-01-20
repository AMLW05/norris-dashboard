# M01-A2: AI Collaboration & Undo System

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 1 - Foundations & AI Collaboration
**Week**: 2
**Points**: 25
**Due**: End of Week 2

---

## Assignment Overview

Build a text editor undo/redo system using your Stack ADT from M01-A1. This assignment emphasizes AI collaboration as a learning tool—you MUST document your AI interactions in `prompts.txt`. The goal is not just working code, but demonstrating how you used AI to learn and solve problems.

**Key Requirement**: You must submit `prompts.txt` showing your AI conversations. "I didn't use AI" is not acceptable—this course requires AI collaboration with documentation.

---

## Learning Objectives

1. Apply Stack ADT to solve a real-world problem (undo/redo)
2. Collaborate with AI tools effectively, documenting the learning process
3. Iterate on AI suggestions (not just copy-paste)
4. Explain code in your own words (understanding check)

**Bloom's Level**: Apply, Analyze (CLO3, CLO5)

---

## Part 1: Undo System Design (5 points)

### The Problem

You're building a simple text editor that needs undo/redo functionality:

- **Actions**: `type(text)`, `delete(n_chars)`, `undo()`, `redo()`
- **Undo**: Reverses the last action
- **Redo**: Re-applies an undone action
- **Stack Strategy**: Two stacks (undo stack and redo stack)

### How It Works

**Example sequence**:
```
1. type("Hello")    → Text: "Hello"       | Undo: [type("Hello")]       | Redo: []
2. type(" World")   → Text: "Hello World" | Undo: [type("Hello"), type(" World")] | Redo: []
3. undo()           → Text: "Hello"       | Undo: [type("Hello")]       | Redo: [type(" World")]
4. redo()           → Text: "Hello World" | Undo: [type("Hello"), type(" World")] | Redo: []
```

### Your Task - Design Phase

Before coding, answer these questions in `design.md`:

1. **What should the undo stack store?** (Action objects? Strings? How do you represent `type` vs `delete`?)

2. **When does redo stack get cleared?** (Hint: What happens if you undo, then type new text?)

3. **Edge cases to handle**:
   - Undo on empty history?
   - Redo with no undone actions?
   - Delete more characters than exist?

**Create**: `week02-undo/design.md` with your answers BEFORE coding.

**Grading** (5 points): Thoughtful design document addressing all questions

---

## Part 2: AI-Assisted Implementation (15 points)

### Required: prompts.txt Documentation

Create `week02-undo/prompts.txt` with this template:

```markdown
# AI Collaboration Log - M01-A2 Undo System

## Session 1: Initial Design
**Date/Time**: [When you asked]
**AI Tool**: [Claude / ChatGPT / Copilot]

**My Prompt**:
> [Paste your exact question]

**AI Response Summary**:
> [Summarize what AI suggested - don't paste entire response]

**What I Learned**:
> [What new concept or approach did you understand?]

**What I Modified**:
> [How did you change AI's suggestion? Why?]

---

## Session 2: [Next Question/Problem]
[Repeat template]

---

## Session 3+: [Continue for all major AI interactions]

---

## Reflection
**Total AI sessions**: [Number]
**Most helpful suggestion**: [Which AI response helped most?]
**What I still don't understand**: [What requires more learning?]
```

### Implementation Requirements

Create `TextEditor` class (C++) or `TextEditor` class (Python) that uses TWO stacks:

**Required methods**:
- `type(text)`: Add text to document
- `delete(n)`: Remove last n characters
- `undo()`: Reverse last action
- `redo()`: Reapply undone action
- `get_text()`: Return current document text

**Starter code** (C++):
```cpp
#include "Stack.h"  // Your Stack from M01-A1
#include <string>

class TextEditor {
private:
    std::string document;
    Stack undoStack;  // Stores actions to undo
    Stack redoStack;  // Stores actions to redo

public:
    void type(std::string text);
    void deleteChars(int n);
    void undo();
    void redo();
    std::string getText() const { return document; }
};
```

**Starter code** (Python):
```python
from stack import Stack  # Your Stack from M01-A1

class TextEditor:
    def __init__(self):
        self.document = ""
        self.undo_stack = Stack()
        self.redo_stack = Stack()

    def type(self, text):
        # TODO: Implement
        pass

    def delete(self, n):
        # TODO: Implement
        pass

    def undo(self):
        # TODO: Implement
        pass

    def redo(self):
        # TODO: Implement
        pass

    def get_text(self):
        return self.document
```

### AI Collaboration Strategy

**Good prompts** (encouraged):
- "I'm implementing undo/redo with two stacks. When should I push to the redo stack?"
- "My undo works but redo doesn't. Here's my code: [paste code]. What's wrong with my logic?"
- "Explain how action objects could store both the action type and data"

**Bad prompts** (discouraged):
- "Write complete undo/redo system for me"
- "Give me all the code"

**Rule**: If you can't explain the code you submit, you can't receive full credit.

### Test Cases (Provided)

```python
def test_undo_system():
    editor = TextEditor()

    # Test 1: Basic typing
    editor.type("Hello")
    assert editor.get_text() == "Hello", "Test 1 FAILED"

    # Test 2: Undo typing
    editor.undo()
    assert editor.get_text() == "", "Test 2 FAILED"

    # Test 3: Redo
    editor.redo()
    assert editor.get_text() == "Hello", "Test 3 FAILED"

    # Test 4: Multiple operations
    editor.type(" World")
    editor.type("!")
    editor.undo()  # Remove "!"
    assert editor.get_text() == "Hello World", "Test 4 FAILED"

    # Test 5: New action clears redo
    editor.type("!!!")
    # Redo should now be empty
    editor.redo()  # Should do nothing
    assert editor.get_text() == "Hello World!!!", "Test 5 FAILED"

    print("All tests passed!")
```

**Grading** (15 points):
- TextEditor class implemented (5 pts)
- All test cases pass (5 pts)
- prompts.txt complete with 3+ sessions (3 pts)
- Code modifications from AI shown (2 pts)

---

## Part 3: Understanding Check - Explain Your Code (5 points)

In `explanation.md`, answer these questions IN YOUR OWN WORDS (no AI):

1. **Stack Usage**: "Why do we need TWO stacks for undo/redo? What would break with just one?"

2. **Redo Clearing**: "When you undo and then type new text, why must the redo stack be cleared?"

3. **Your Modifications**: "Show one piece of code where you modified AI's suggestion. Why did you change it?"

4. **Debugging Story**: "What broke during implementation? How did you figure out the fix?"

**Interview Simulation**: Instructor may ask you to explain your code verbally. Practice explaining it!

**Grading** (5 points):
- All 4 questions answered (2 pts)
- Answers demonstrate understanding (2 pts)
- Shows personal problem-solving (1 pt)

---

## Submission Checklist

- [ ] `design.md` with initial design thinking
- [ ] `TextEditor.cpp` / `text_editor.py` implemented
- [ ] Test file created and all tests passing
- [ ] `prompts.txt` with 3+ AI collaboration sessions
- [ ] `explanation.md` with understanding check answers
- [ ] Pull request created with all files
- [ ] PR description includes test results screenshot

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Design Phase** | 5 | Thoughtful design.md addressing edge cases |
| **Implementation** | 15 | TextEditor works (5), tests pass (5), prompts.txt (3), modifications shown (2) |
| **Understanding Check** | 5 | Questions answered (2), demonstrates understanding (2), personal insights (1) |
| **Total** | **25** | |

### Deductions
- prompts.txt missing: -10 points (REQUIRED)
- Cannot explain code: -10 points (understanding check)
- Late submission: -10% per day (max 3 days)
- Tests don't pass: -5 points

---

## Resources

**After you've tried**:
- Runestone: [Stack Applications](https://runestone.academy/ns/books/published/pythonds3/BasicDS/StackApplications.html)
- VisuAlgo: [Stack Operations Visualization](https://visualgo.net/en/list)

**AI Tools**:
- [Claude](https://claude.ai)
- [ChatGPT](https://chat.openai.com)
- [GitHub Copilot](https://github.com/features/copilot)

---

## Extension Challenges (+5 bonus)

1. **Command Pattern**: Implement using Command design pattern (Action classes)
2. **Delete Operation**: Add delete(n) that can be undone/redone
3. **Undo History Limit**: Stack with max 10 actions (oldest removed)
4. **Visualization**: Create a simple GUI showing undo/redo stacks

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
