# Module 1 Activity: Sacred Flow Lab - Professional Development Environment for Data Structures

**Duration**: 60-90 minutes
**Format**: Individual with pair programming support
**Materials Needed**:
- Laptop with admin access
- GitHub account
- Internet connection
- IDE (VS Code, CLion, or PyCharm)
- C++ compiler (g++, clang, or MSVC) OR Python 3.8+
- Course GitHub repository URL

**Learning Objectives**:
- Configure professional C++/Python development environment for data structures
- Practice GitHub workflow (Issue → Branch → PR → Merge)
- Implement first Abstract Data Type (Stack) using create-first approach
- Establish Sacred Flow workflow habits for the semester
- Document AI collaboration patterns in prompts.txt

---

## Overview

Welcome to CSC-249: Data Structures & Algorithms. Today you're establishing the "Sacred Flow" that professional developers use daily: **write code → test it → version it → commit it → iterate**.

This isn't just about installing software—it's about building the professional workflow that will carry you through 4 complete sprints and your capstone project.

By the end of this lab, you'll have:
- A working C++ or Python development environment
- Your own branch of the course repo
- Your first ADT implementation: a working Stack
- A proper Git commit showing your work
- Your first AI collaboration documented in prompts.txt

This is the foundation for everything else this semester. Take your time, help your neighbors, don't skip steps.

---

## Pre-Activity Setup (5-10 minutes)

**Before you start coding:**

1. **Verify admin access**: Make sure you can install software on your laptop
2. **GitHub account**: If you don't have one, create it now at github.com
3. **Accept course repo invitation**: Check your email for the GitHub classroom link
4. **Choose your language**: C++ (systems programming, pointers) OR Python (rapid prototyping)
5. **Download IDE**:
   - C++: CLion (free for students) or VS Code
   - Python: PyCharm (free for students) or VS Code
6. **Have your phone ready**: You might need 2FA for GitHub

**Instructor Check**: Make sure everyone has GitHub access before moving forward.

---

## Part 1: Development Environment Setup (20-25 minutes)

### For C++ Students

**Step 1: Install C++ compiler**

**Mac**:
```bash
xcode-select --install
g++ --version
```

**Windows**:
- Download Visual Studio Community from visualstudio.microsoft.com
- Select "Desktop development with C++" workload

**Linux**:
```bash
sudo apt update
sudo apt install build-essential
g++ --version
```

**Step 2: Verify compiler**
Create test.cpp:
```cpp
#include <iostream>
int main() {
    std::cout << "C++ environment ready!" << std::endl;
    return 0;
}
```

Compile and run:
```bash
g++ test.cpp -o test
./test
```

**Step 3: Install IDE**
- Download CLion or VS Code
- Configure C++ extensions if using VS Code

### For Python Students

**Step 1: Check Python installation**
```bash
python3 --version
```

If you see Python 3.8 or higher, you're good. If not, download from python.org.

**Step 2: Create virtual environment**
```bash
cd ~/Documents
mkdir CSC-249-DataStructures
cd CSC-249-DataStructures
python3 -m venv ds-env
```

**Step 3: Activate virtual environment**

Mac/Linux:
```bash
source ds-env/bin/activate
```

Windows:
```bash
ds-env\Scripts\activate
```

**Step 4: Verify environment**
```bash
python --version
pip list
```

### Expected Output

**C++ Students**:
- Compiler installed and working
- Test program compiles and runs
- IDE configured

**Python Students**:
- Virtual environment activated (prompt shows `(ds-env)`)
- Python 3.8+ confirmed
- pip working

### Common Issues

**Issue**: "Compiler not found" or "command not found"
- **Fix**: Ensure compiler is installed and added to PATH

**Issue**: Permission denied when creating venv (Python)
- **Fix**: Don't use sudo. Navigate to a directory you own

**Issue**: Visual Studio installation fails (Windows)
- **Fix**: Ensure you have 10GB free space and stable internet

---

## Part 2: Git Workflow Setup (15-20 minutes)

### Instructions

**Step 1: Clone the course repository**

```bash
git clone https://github.com/[course-org]/csc-249-data-structures.git
cd csc-249-data-structures
```

**Step 2: Create your personal branch**

Never work directly on `main`. Create your own branch:

```bash
git checkout -b yourname-module01
```

Replace `yourname` with your actual name (e.g., `drew-module01`).

**Step 3: Verify your branch**
```bash
git branch
```

You should see an asterisk (*) next to your branch name, not `main`.

**Step 4: Create Issue for your work**

Go to GitHub repository → Issues → New Issue:

```
Title: Module 01 - Implement Stack ADT

Description:
As a CSC-249 student, I need to implement a Stack ADT to practice
fundamental data structures and professional workflow.

Acceptance Criteria:
- [ ] Stack class with push, pop, peek, isEmpty operations
- [ ] Test cases demonstrating functionality
- [ ] Code compiles/runs without errors
- [ ] AI collaboration documented in prompts.txt
- [ ] Code committed to personal branch

Labels: module-01, enhancement
```

Note the Issue number (e.g., #12).

**Step 5: Connect branch to issue**
```bash
git commit --allow-empty -m "Start work on Issue #12: Implement Stack ADT"
git push -u origin yourname-module01
```

### Expected Output

- Repository cloned successfully
- You're on your own branch (not main)
- GitHub Issue created with clear acceptance criteria
- Branch pushed to GitHub

### Common Issues

**Issue**: "git: command not found"
- **Fix**: Install Git from git-scm.com

**Issue**: "Permission denied (publickey)" when cloning
- **Fix**: Use HTTPS URL instead of SSH, or set up SSH keys with GitHub

**Issue**: Can't create Issues on GitHub
- **Fix**: Verify you have write access to the repository

---

## Part 3: Build Your First Stack - Create Before Theory (25-35 minutes)

### Instructions

This is the core of Drew's pedagogy: **Build first, understand later.**

You're going to implement a Stack without me explaining what a Stack is. Use your intuition, AI tools, and experimentation.

**Step 1: Create your Stack file**

**C++ students**: Create `module-01/stack.cpp`
**Python students**: Create `module-01/stack.py`

**Step 2: Use AI to help you build**

Open your AI tool (Claude, ChatGPT, or GitHub Copilot).

**Example prompt** (save this in `module-01/prompts.txt`):

```
Prompt 1:
I need to implement a Stack data structure in [C++/Python]. I understand it follows
LIFO (Last In, First Out) principle. Can you help me understand what methods a Stack
needs and show me a basic implementation?

[Copy AI response summary here]

Prompt 2:
How do I handle the case when someone tries to pop from an empty stack? Should I
throw an exception or return a special value?

[Copy AI response summary here]

Prompt 3:
Can you show me how to write test cases for my Stack implementation?

[Copy AI response summary here]
```

**Step 3: Implement Stack class**

**C++ Template**:
```cpp
#include <iostream>
#include <vector>
#include <stdexcept>

template <typename T>
class Stack {
private:
    std::vector<T> data;

public:
    // TODO: Implement push(T item)
    // TODO: Implement T pop()
    // TODO: Implement T peek()
    // TODO: Implement bool isEmpty()
    // TODO: Implement int size()
};

// Test your stack
int main() {
    Stack<int> myStack;

    // Test 1: Push items
    myStack.push(10);
    myStack.push(20);
    myStack.push(30);

    // Test 2: Peek top item
    std::cout << "Top item: " << myStack.peek() << std::endl;  // Should be 30

    // Test 3: Pop items (LIFO order)
    std::cout << "Popped: " << myStack.pop() << std::endl;  // 30
    std::cout << "Popped: " << myStack.pop() << std::endl;  // 20

    // Test 4: Check size
    std::cout << "Stack size: " << myStack.size() << std::endl;  // 1

    // Test 5: isEmpty
    std::cout << "Is empty? " << (myStack.isEmpty() ? "Yes" : "No") << std::endl;  // No

    return 0;
}
```

**Python Template**:
```python
class Stack:
    def __init__(self):
        self.data = []

    # TODO: Implement push(self, item)
    # TODO: Implement pop(self)
    # TODO: Implement peek(self)
    # TODO: Implement is_empty(self)
    # TODO: Implement size(self)

# Test your stack
if __name__ == "__main__":
    my_stack = Stack()

    # Test 1: Push items
    my_stack.push(10)
    my_stack.push(20)
    my_stack.push(30)

    # Test 2: Peek top item
    print(f"Top item: {my_stack.peek()}")  # Should be 30

    # Test 3: Pop items (LIFO order)
    print(f"Popped: {my_stack.pop()}")  # 30
    print(f"Popped: {my_stack.pop()}")  # 20

    # Test 4: Check size
    print(f"Stack size: {my_stack.size()}")  # 1

    # Test 5: is_empty
    print(f"Is empty? {my_stack.is_empty()}")  # False
```

**Step 4: Implement the methods**

Work with AI to complete the TODO items. Document your prompts in `prompts.txt`.

**Step 5: Run your tests**

**C++**:
```bash
g++ -std=c++11 module-01/stack.cpp -o stack
./stack
```

**Python**:
```bash
python module-01/stack.py
```

**Step 6: Add reflection comments**

At the end of your file, add:

```
// REFLECTION (C++) or # REFLECTION (Python)

1. What does this Stack data structure do?
   [Your answer: Explain LIFO behavior in your own words]

2. Where could you use a Stack in real applications?
   [Your answer: Think of examples - undo systems, browser history, etc.]

3. What was challenging about this implementation?
   [Your answer: What took time? What confused you?]

4. How did AI help you learn?
   [Your answer: What prompts were most useful?]
```

### Expected Output

- Stack implementation compiles/runs without errors
- All test cases pass with correct output
- LIFO behavior demonstrated (30, 20 when popping)
- prompts.txt documents your AI collaboration
- Reflection questions answered

### Common Issues

**Issue**: Stack returns wrong order (FIFO instead of LIFO)
- **Fix**: Check your pop() implementation—are you removing from the wrong end?

**Issue**: Segmentation fault or IndexError on empty stack
- **Fix**: Add error handling for pop/peek on empty stack

**Issue**: Compiler errors about templates (C++)
- **Fix**: Put all template code in header file or same file as main

**Issue**: "ModuleNotFoundError" (Python)
- **Fix**: Make sure you're running from correct directory

---

## Part 4: Commit Your Work - Sacred Flow (10-15 minutes)

### Instructions

**Step 1: Check what changed**
```bash
git status
```

You should see your new files as "untracked."

**Step 2: Stage your changes**
```bash
git add module-01/stack.cpp module-01/prompts.txt
# OR for Python:
git add module-01/stack.py module-01/prompts.txt
```

**Step 3: Commit with meaningful message**
```bash
git commit -m "Implement Stack ADT with LIFO operations

- Created Stack class with push, pop, peek, isEmpty, size methods
- Implemented using vector/list as underlying storage
- Added comprehensive test cases demonstrating LIFO behavior
- Documented AI collaboration in prompts.txt
- All tests passing

Closes #12"
```

**Step 4: Push to GitHub**
```bash
git push origin yourname-module01
```

**Step 5: Create Pull Request**

Go to GitHub → Pull Requests → New Pull Request

```
Title: Module 01: Stack ADT Implementation

Description:
Implemented Stack data structure following create-first pedagogy.

Changes:
- Stack class with all core operations
- Test cases demonstrating functionality
- AI collaboration documented

Test Results:
- [x] Code compiles/runs without errors
- [x] All test cases pass
- [x] LIFO behavior verified
- [x] Edge cases handled (empty stack)

AI Tools Used: [Claude/ChatGPT/Copilot]
Prompts documented in: module-01/prompts.txt

Ready for review.
```

**Step 6: Verify on GitHub**

Go to your repository and verify:
- Pull Request is visible
- Issue is linked (shows "Closes #12")
- Code changes are visible

### Expected Output

- Clean git status after commit
- Push succeeds without errors
- Pull Request created and visible on GitHub
- Issue automatically linked to PR

### Common Issues

**Issue**: "Nothing to commit, working tree clean" but you made changes
- **Fix**: You forgot to save your files. Save and try again.

**Issue**: Push rejected / "Updates were rejected"
- **Fix**: Pull latest changes first: `git pull origin main`, then push again

**Issue**: Can't push - authentication failed
- **Fix**: Use Personal Access Token instead of password

---

## Wrap-up & Reflection (10 minutes)

### Discussion Questions

**1. Create-First Experience**: You built a Stack before I formally taught you what a Stack is. How did that feel? What did you learn by building first?

**2. AI as Learning Tool**: You used AI to help implement your Stack. Did it help you understand, or just give you code? How can you use AI to maximize learning?

**3. Sacred Flow in Practice**: We just did Issue → Branch → Code → Commit → PR. Why is this workflow important for data structures work? What happens if you skip version control?

**4. Real-World Applications**: Where have you encountered stack-like behavior in software you use? (Browser back button? Undo in text editors?)

**5. PM Integration Ahead**: Starting Module 4, you'll use sprints for all projects. How might you break down "Implement a Binary Search Tree" into user stories?

### Exit Ticket

**Complete this reflection** (submit via Canvas):

```
1. What's one thing that clicked for you during this lab?

2. What's one thing you're still confused about?

3. On a scale of 1-5, how confident are you with:
   - Setting up C++/Python development environment: ___
   - Using Git for version control: ___
   - Understanding Stack behavior: ___
   - Using AI tools effectively: ___

4. What do you want to dive deeper into next week?
```

---

## Extension Challenges (Optional)

**For students who finish early:**

### Challenge 1: Implement Queue
A Queue is like a Stack, but FIFO (First In, First Out) instead of LIFO.

```
Operations needed:
- enqueue(item): Add to back
- dequeue(): Remove from front
- peek_front(): See front item
- is_empty()
```

Can you implement Queue and demonstrate FIFO behavior?

### Challenge 2: Stack-Based Application - Parentheses Checker
Use your Stack to check if parentheses are balanced:

```python
def is_balanced(expression):
    # "((()))" → True
    # "(()" → False
    # "(()())" → True
    # Use your Stack!
```

### Challenge 3: Performance Comparison
Compare array-based vs linked-list-based Stack implementations:
- Which is faster for push/pop?
- Which uses more memory?
- When would you choose one over the other?

### Challenge 4: Undo System
Build a simple text editor with undo functionality using two stacks:
- `undo_stack`: Stores previous states
- `redo_stack`: Stores undone states

---

## Instructor Notes

### Timing Breakdown
- **0-10 min**: Pre-activity setup, GitHub access verification
- **10-30 min**: Development environment setup (expect troubleshooting)
- **30-50 min**: Git workflow and Issue creation
- **50-85 min**: Building Stack with AI collaboration
- **85-95 min**: Git commit and Pull Request
- **95-105 min**: Discussion and reflection

### Common Struggles

**Environment issues dominate early**: This is normal. Have these ready:
- Pre-installed USB drives with compilers/Python
- Backup: Cloud-based development (GitHub Codespaces, Replit)
- Pair students who finish early with students who are stuck

**AI collaboration confusion**: Students may copy-paste without understanding. Emphasize:
- "You must explain every line of code you submit"
- "prompts.txt shows your learning journey, not just answers"
- "AI is a tutor, not a solution dispenser"

**Create-first anxiety**: Some students will be uncomfortable building without theory first. Reassure:
- "Making mistakes now helps you understand theory later"
- "Professional developers google/ask AI all the time"
- "Understanding comes from iteration, not memorization"

### Success Indicators

Students are on track if they:
- ✅ Can compile/run code in their environment
- ✅ Have created a branch (not on main)
- ✅ Implemented Stack with correct LIFO behavior
- ✅ Documented AI collaboration in prompts.txt
- ✅ Created PR with meaningful description
- ✅ Can explain Stack behavior in their own words

Students are struggling if they:
- ❌ Keep getting compilation/import errors (environment not set up)
- ❌ Are working on main branch (don't understand Git branching)
- ❌ Stack exhibits FIFO behavior (conceptual error)
- ❌ Can't explain their code (copy-pasted without understanding)
- ❌ Haven't pushed to GitHub (workflow unclear)

### Materials to Prepare

**Before class:**
- [ ] Test the course GitHub repo - all students have access
- [ ] Create demo branch yourself and test full workflow
- [ ] Have USB drives with compilers/Python installers
- [ ] Print Git command reference sheets
- [ ] Prepare backup plan (cloud IDEs)
- [ ] Write "Sacred Flow" on board: Issue → Branch → Code → Commit → PR
- [ ] Have example prompts.txt ready

**During class:**
- [ ] Project screen when walking through installations
- [ ] Stop at checkpoints: "Everyone should see X before we move on"
- [ ] Circulate to check branch names (catch main-branch workers early)
- [ ] Review prompts.txt files - are students documenting learning?
- [ ] Check that Stack implementations exhibit LIFO, not FIFO

**After class:**
- [ ] Review all Pull Requests
- [ ] Check prompts.txt quality - are they learning or just copying?
- [ ] Identify students who didn't complete - reach out individually
- [ ] Note which steps took longest - adjust timing for next semester

### Teaching Philosophy Notes

This lab embodies Drew's "create-first" pedagogy: students build a Stack before we formally define it. The cognitive discomfort is intentional. They'll remember Stack behavior because they built it, broke it, and fixed it—not because they read a definition.

The Sacred Flow (Issue → Branch → Code → Commit → PR) is a ritual we're establishing. By Module 4, this should be automatic. Don't rush it. Muscle memory starts now.

AI collaboration is required, not optional. Students need to learn to work with AI as a thought partner, not a code generator. The prompts.txt file is where learning happens—reviewing these files tells you who's learning vs who's copy-pasting.

Finally, celebrate the wins. Students who leave this lab with a working Stack, a clean PR, and documented AI collaboration have accomplished something real. Everything else builds on this.

---

**Remember**: If students leave with a working environment, a committed Stack implementation, and a GitHub PR, that's success. The theory will come. The habits matter more right now.
