# Module 1 Knowledge Check: Foundations & AI Collaboration

**Purpose**: Assess understanding of professional development workflows, ADT fundamentals, and AI collaboration patterns
**Format**: 14 multiple choice questions
**Attempts**: Unlimited
**Grading**: Auto-graded, feedback provided
**Time Estimate**: 15-20 minutes

---

## Technical Concepts (60%)

### Question 1
What does ADT stand for in computer science?

A) Automatic Data Transfer
B) Abstract Data Type
C) Advanced Development Tools
D) Algorithm Design Template

**Correct Answer**: B
**Explanation**: An Abstract Data Type defines what operations can be performed on data, independent of how those operations are implemented. A stack is an ADT—you can push and pop, but whether it's implemented with an array or linked list doesn't change the abstract interface. This separation of "what" from "how" is fundamental to software engineering.

### Question 2
A stack data structure follows which principle?

A) First In, First Out (FIFO)
B) Last In, First Out (LIFO)
C) Random Access
D) Priority-based

**Correct Answer**: B
**Explanation**: Stacks are LIFO—like a stack of plates, the last one you put on is the first one you take off. This makes stacks perfect for undo systems, function call management, and backtracking algorithms. FIFO describes queues, not stacks. Understanding this fundamental property is crucial for choosing the right data structure.

### Question 3
Which operations are fundamental to a stack ADT?

A) insert() and delete()
B) push() and pop()
C) enqueue() and dequeue()
D) add() and remove()

**Correct Answer**: B
**Explanation**: Push adds to the top, pop removes from the top. These names are standard across programming languages. While some languages might also offer peek() (look at top without removing) or isEmpty(), push and pop are the core operations that define stack behavior. Enqueue/dequeue are queue operations.

### Question 4
You're implementing an undo system for a text editor. Which data structure is most appropriate?

A) Array
B) Queue
C) Stack
D) Hash table

**Correct Answer**: C
**Explanation**: Each edit gets pushed onto a stack. When the user hits undo, pop the most recent edit and reverse it. This LIFO behavior matches user expectations—undo happens in reverse chronological order. Queues would undo oldest first (wrong!), arrays don't enforce the pattern, and hash tables are for key-value lookups.

### Question 5
What is the primary difference between array-based and linked-list-based stack implementations?

A) Array-based stacks are always faster
B) Array-based stacks have fixed capacity (or need resizing); linked lists grow dynamically
C) Linked lists can't implement stacks
D) There is no difference

**Correct Answer**: B
**Explanation**: Arrays need a maximum size defined upfront (or expensive resizing). Linked lists allocate memory per element, growing as needed. Trade-off: arrays have better cache locality (faster access), linked lists have flexible size. This create-first approach will help you feel this difference before we dive into the theory.

### Question 6
A queue data structure is useful for which scenario?

A) Undo/redo systems
B) Function call management
C) Print job scheduling (first come, first served)
D) Expression evaluation

**Correct Answer**: C
**Explanation**: Queues are FIFO—perfect for fairness scenarios like print jobs, customer service lines, or task scheduling. First person in line gets served first. Undo systems need stacks (LIFO). Function calls use stacks. Expression evaluation can use stacks. Matching data structure to real-world behavior is key.

### Question 7
What does it mean to work with a "create-first approach"?

A) Always create documentation before coding
B) Build a working implementation before studying theory
C) Create test cases before implementation
D) Design the UI first

**Correct Answer**: B
**Explanation**: In this course, you'll build a working stack, see how it behaves, break it, fix it—then study the theory. This inverts traditional teaching but aligns with how professionals actually learn: through doing. Theory makes more sense after you've wrestled with the implementation. You'll understand LIFO deeply after debugging your push/pop logic.

### Question 8
You implement a stack but it crashes when you pop from an empty stack. What's the fix?

A) Ignore it—users should know better
B) Add a check: if stack is empty, handle gracefully (throw exception or return error)
C) Remove the pop() method
D) Switch to a queue

**Correct Answer**: B
**Explanation**: Defensive programming checks preconditions. Before popping, verify the stack isn't empty. You might throw an exception, return null, or return a special value—depends on your language and use case. This is professional error handling: anticipate misuse, handle it gracefully. Never crash without a meaningful error.

---

## Project Management & AI Collaboration (40%)

### Question 9
What is the Sacred Flow workflow referenced in CSC-249?

A) A meditation technique
B) Issue → Branch → PR → Merge workflow for professional development
C) A specific sorting algorithm
D) A type of data structure

**Correct Answer**: B
**Explanation**: Sacred Flow is the professional Git workflow: create an issue (plan work), branch (isolate changes), PR (request review), merge (integrate). This prevents messy commits on main, enables collaboration, and creates audit trails. It's called "sacred" because it's non-negotiable in professional work—master this workflow.

### Question 10
Why does CSC-249 require a prompts.txt file in every assignment?

A) To slow you down
B) To document AI collaboration and learning process
C) To prove you used AI
D) Because it's trendy

**Correct Answer**: B
**Explanation**: Documenting your AI prompts shows your thinking process, helps classmates learn better prompt strategies, and creates evidence of your learning journey. It's not about proving you used AI—it's about making AI collaboration transparent and educational. Good prompts are shareable knowledge.

### Question 11
What does it mean that AI is a "collaborator, not a cheater" in this course?

A) You can't use AI at all
B) AI helps you learn and iterate, but you must understand the code you submit
C) AI writes all your code
D) Only certain AI tools are allowed

**Correct Answer**: B
**Explanation**: Use AI to explore, debug, learn—but you must be able to explain your code in your own words. If AI generates a solution you don't understand, you haven't learned. AI accelerates the create-iterate-understand cycle; it doesn't replace the understanding part. Professional developers use AI daily; professionals also own their code.

### Question 12
You're creating a GitHub issue for implementing a stack. What should it include?

A) Just the title "Implement stack"
B) What you're building, why, acceptance criteria, and AI prompt plan
C) The complete code solution
D) Only the due date

**Correct Answer**: B
**Explanation**: A good issue is a mini project plan. What: implement stack ADT. Why: needed for undo system. Acceptance criteria: push/pop work, handles empty stack. AI plan: "I'll start by asking Claude to explain stack behavior, then iterate on implementation." This planning makes the work clearer and creates documentation.

### Question 13
What is the purpose of code review in the Pull Request process?

A) To criticize your code
B) To catch bugs, share knowledge, and ensure quality before merging
C) To delay merging
D) To prove you worked

**Correct Answer**: B
**Explanation**: Code review is about quality and learning. Reviewers catch bugs you missed, suggest improvements, ask questions that deepen understanding. For you as reviewer, you learn from others' approaches. This is standard professional practice. Get comfortable with feedback—it makes you better.

### Question 14
How does "create before theory" pedagogy apply to learning stacks?

A) You read about stacks for weeks, then implement
B) You implement a working stack first, then study why LIFO matters
C) You skip theory entirely
D) You memorize stack operations before coding

**Correct Answer**: B
**Explanation**: You'll build a stack, see it work, maybe implement undo functionality—feel the LIFO behavior in action. Then when we discuss theory (stack applications, time complexity), you have concrete experience to anchor the concepts. Theory without practice is abstract; practice without theory is shallow. We start with practice, then add theory for deep learning.

---

## Scoring Guide
- 90-100%: Excellent understanding of ADT fundamentals and professional workflow
- 80-89%: Good grasp, minor gaps in concepts
- 70-79%: Adequate foundation, review ADT operations and Git workflow
- Below 70%: Revisit Module 1 materials before proceeding

## Study Resources
- Module 1 Assignments: GitHub Setup & First ADT, AI Collaboration & Undo System
- Canvas HTML: "Abstract Data Types Explained"
- Canvas HTML: "Sacred Flow Workflow Guide"
- GitHub documentation: Issues, Branches, Pull Requests
- prompts.txt examples from classmates
- Stack visualization on VisuAlgo.net
