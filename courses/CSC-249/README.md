# CSC-249: Data Structures & Algorithms

**Credits**: 3 (2 Class | 3 Lab)
**Term**: Spring 2026
**Prerequisites**: CSC-134 (Intro to Programming - C++)
**Status**: 🚧 In Development

## Course Description

This course introduces data structures and algorithms frequently used in programming applications. Students implement lists, stacks, queues, dequeues, heaps, sorting, searching, recursion, and algorithm testing following professional development practices. Emphasizes "create before theory" pedagogy with mandatory AI collaboration and sprint-based project management. Upon completion, students will design data structures, implement algorithms, analyze complexity, and manage technical projects professionally.

## Course Learning Outcomes (CLOs)

1. **CLO1**: Implement fundamental data structures (lists, stacks, queues, trees, graphs, hash tables) using C++ or Python
2. **CLO2**: Analyze algorithm complexity using Big O notation and select appropriate structures for problems
3. **CLO3**: Collaborate effectively with AI tools, documenting prompts and iterative learning processes
4. **CLO4**: Apply professional development workflows (version control, code review, pull requests, sprint methodology)
5. **CLO5**: Design solutions by building implementations first, then understanding theoretical foundations

## 8-Module Structure

### Module 1: Foundations & AI Collaboration (Weeks 1-2)
**Theme**: Professional workflows and ADT fundamentals

**MLOs**:
- Configure professional development environment (GitHub, IDE, AI tools)
- Implement simple ADTs (Stack, Queue) using create-first approach
- Document AI collaboration patterns in prompts.txt
- Execute professional GitHub workflow (Issue → Branch → PR → Merge)

**Assignments**:
- M01-A1: GitHub Setup & First ADT (Stack) (25 points)
- M01-A2: AI Collaboration & Undo System (25 points)

**PM Integration**: Introduction to Sacred Flow workflow and AI-assisted development

---

### Module 2: Algorithm Analysis & Recursion (Weeks 3-4)
**Theme**: Measuring performance and thinking recursively

**MLOs**:
- Measure algorithm performance using benchmarking tools (timeit, chrono)
- Analyze complexity using Big O notation through experimentation
- Implement recursive algorithms (factorial, Fibonacci, Tower of Hanoi)
- Compare iterative vs recursive solutions empirically
- Create user stories for algorithm implementation projects (PM: User Stories)

**Assignments**:
- M02-A1: Benchmarking Lab & Big O Analysis (25 points)
- M02-A2: Recursive Algorithms Project (25 points)

**PM Integration**: User story writing for technical projects

---

### Module 3: Sorting Algorithms (Weeks 5-6)
**Theme**: Classic algorithms and divide-and-conquer strategies

**MLOs**:
- Implement sorting algorithms (selection, insertion, merge, quick sort)
- Visualize algorithm execution step-by-step
- Benchmark sorting performance on different datasets
- Understand divide-and-conquer patterns
- Estimate work complexity using story points (PM: Estimation)

**Assignments**:
- M03-A1: Sorting Implementation & Visualization (25 points)
- M03-A2: Sorting Comparison Report (25 points)

**PM Integration**: Story point estimation for algorithm complexity

---

### Module 4: Linear Structures - Sprint 1 (Weeks 7-8)
**Theme**: Linked lists, stacks, queues with first complete sprint

**MLOs**:
- Implement node-based linked lists from scratch
- Understand pointer/reference manipulation in depth
- Build applications using stacks (undo systems) and queues (simulators)
- Compare array-based vs node-based implementations
- Execute first complete sprint cycle (PM: Sprint Planning, Standups, Retrospective)

**Assignments**:
- M04-A1: Linked List Implementation Sprint (50 points)
- M04-A2: Sprint 1 Retrospective (25 points)

**PM Integration**: First complete 2-week sprint with planning, standups, burndown, retrospective

---

### Module 5: Hashing & Hash Tables - Sprint 2 (Weeks 9-10)
**Theme**: O(1) lookup with collision strategies

**MLOs**:
- Design hash functions for different data types
- Implement collision resolution strategies (chaining, open addressing)
- Build hash table/dictionary from scratch
- Analyze hash table performance characteristics
- Apply velocity tracking to improve sprint planning (PM: Velocity-based Planning)

**Assignments**:
- M05-A1: Hash Table Implementation Sprint (50 points)
- M05-A2: Sprint 2 Review & Velocity Analysis (25 points)

**PM Integration**: Velocity-based planning using Sprint 1 data

---

### Module 6: Trees & Heaps - Sprint 3 (Weeks 11-12)
**Theme**: Hierarchical structures and priority queues

**MLOs**:
- Implement binary search trees (BST) with all operations
- Execute tree traversals (inorder, preorder, postorder, level-order)
- Build heap data structure for priority queue
- Design expression tree evaluator
- Manage sprint with PM becoming habitual

**Assignments**:
- M06-A1: BST & Heap Implementation Sprint (75 points)
- M06-A2: Expression Tree Evaluator (25 points)

**PM Integration**: PM becomes automatic, less scaffolding provided

---

### Module 7: Graphs & Advanced Algorithms - Sprint 4 (Weeks 13-14)
**Theme**: Network structures and graph traversal

**MLOs**:
- Implement graph representations (adjacency matrix, adjacency list)
- Execute graph traversal algorithms (BFS, DFS)
- Implement shortest path algorithm (Dijkstra's)
- Apply graphs to real-world problems (social networks, maps)
- Optimize sprint process based on 3 prior sprints (PM: Process Optimization)

**Assignments**:
- M07-A1: Graph Implementation & Traversal Sprint (75 points)
- M07-A2: Real-World Graph Application (50 points)

**PM Integration**: Process optimization and cumulative retrospective

---

### Module 8: Integration Project & Portfolio (Weeks 15-16)
**Theme**: Capstone project demonstrating mastery

**MLOs**:
- Design application using 3+ data structures appropriately
- Justify structure selection with complexity analysis
- Document complete development process (technical + PM)
- Present technical work professionally with AI collaboration evidence
- Create process portfolio demonstrating sprint growth (PM: Process Portfolio)

**Assignments**:
- M08-A1: Final Integration Project (100 points)
- M08-A2: Technical Presentation & Process Portfolio (75 points)

**PM Integration**: Process portfolio analyzing all 4 sprints + final autonomous sprint

---

## Grading Breakdown

**Total Points**: 700

| Component | Points | Percentage |
|-----------|--------|------------|
| Modules 1-2 (Foundations) | 100 | 14% |
| Module 3 (Sorting) | 50 | 7% |
| Modules 4-7 (Sprint Projects) | 300 | 43% |
| Module 8 (Capstone) | 175 | 25% |
| Knowledge Checks (8) | 50 | 7% |
| Participation (PR reviews, AI prompts) | 25 | 4% |

**Grading Scale**: A (90-100%), B (80-89%), C (70-79%), D (60-69%), F (<60%)

---

## Course Materials

### Required (All Free)
- GitHub account (free, GitHub Pro free for students)
- C++ compiler (g++, clang, or Visual Studio) OR Python 3.8+
- IDE: VS Code (free) or CLion/PyCharm (free for students)
- AI tool access: Claude, ChatGPT, or GitHub Copilot (choose one)

### Recommended Resources
- **Runestone Academy**: C++ edition or Python edition (free, interactive)
- **VisuAlgo** (visualgo.net): Visual demonstrations of data structures
- **Python Tutor** (pythontutor.com): Code execution visualization

### Optional
- Zybooks CSC 249 (light reference only)
- Local development environment (vs cloud-based Codespaces/Colab)

---

## Drew's Pedagogical Approach

### "Bloom's Taxonomy Starts with Create"
> "Build working implementations first, then understand why they work."

Traditional CS education: Learn theory → Understand → Build
Drew's approach: Build → Break → Fix → Understand deeply

This inverts instruction but aligns with how professional developers learn—through iteration.

### Sacred Flow (Workflow Mastery)
Git workflow from CSC-113 continues, enhanced with AI collaboration:
- **Issues** = User stories + AI prompt plans
- **Branches** = Implementation sprints
- **PRs** = Working code + prompts.txt documentation
- **Merges** = Reviewed, tested, understood code

### AI as Collaborator (Not Cheater)
- **Required**: Every lab must include `prompts.txt`
- **Philosophy**: AI helps you learn, not replaces learning
- **Assessment**: Must explain code in your own words
- **Culture**: Sharing prompts helps classmates learn better

### Process Over Product (40% Process Grading)
Grading emphasizes:
- Sprint planning quality and velocity tracking
- AI prompt documentation and iteration
- Commit frequency and PR descriptions
- Retrospective depth and continuous improvement
- Understanding over just "working code"

### Dual-Language Flexibility
- Choose **C++** (systems programming, pointers, memory management) OR **Python** (rapid prototyping, high-level abstractions)
- Use AI to translate concepts between languages
- Understand both perspectives through AI-guided exploration

### Failure as Exercise
- Broken code with good debugging process > Perfect code you can't explain
- "What did you try?" is always the first question
- Retrospectives normalize: "What broke? What did I learn? What's next?"

---

## Project Management Skills Development

CSC-249 integrates **Scrum fundamentals** for professional development:

**New PM Skills** (builds on CSC-113/114 for students who took those):
- Sprint planning with velocity-based capacity
- Daily standups (async standup.md updates)
- Burndown chart tracking
- Sprint reviews and structured retrospectives
- Process portfolio demonstrating growth

**Progression to CTS-285/289**:
CSC-249 PM skills prepare for systems analysis capstone work with stakeholder management and release planning.

---

## Accessibility & Support

### Accessibility Statement

CSC-249 is designed to be accessible to all students. If you have a documented disability and require accommodations, please contact your institution's Disability Services office. Accommodations are implemented on an individual basis.

**Built-in Accessibility Features**:
- All assignments text-based (screen reader compatible)
- Code examples include detailed comments
- Unlimited attempts on knowledge checks
- Flexible deadlines available with documentation
- Alternative presentation formats supported (video vs live demo)
- Async communication options (Discord, email, GitHub)

**Technology Accessibility**:
- GitHub: Screen reader compatible, keyboard navigation
- VS Code: Built-in accessibility features, high contrast themes
- AI tools: Text-based, keyboard accessible
- Canvas HTML: WCAG 2.1 AA compliant

**Need Accommodations?** See SUPPORT_RESOURCES.md for complete information.

### Support Resources

**Quick Links**:
- **Course Support**: SUPPORT_RESOURCES.md (all help options)
- **Privacy Policies**: PRIVACY_POLICIES.md (required tools)
- **Instructor Response Time**: 24-48 hours on weekdays
- **Office Hours**: See Canvas for schedule
- **Technical Help**: See SUPPORT_RESOURCES.md

---

## File Organization

```
CSC-249/
├── README.md (this file)
├── COURSEMAP.md (printable course map)
├── assignments/
│   ├── Week_01_Assignment_GitHub_First_ADT.md
│   ├── Week_02_Assignment_AI_Undo_System.md
│   ├── Week_03_Assignment_Benchmarking_BigO.md
│   ├── Week_04_Assignment_Recursive_Algorithms.md
│   ├── Week_05_Assignment_Sorting_Implementation.md
│   ├── Week_06_Assignment_Sorting_Comparison.md
│   ├── Week_07_Assignment_Linked_List_Sprint.md
│   ├── Week_08_Assignment_Sprint1_Retrospective.md
│   ├── Week_09_Assignment_Hash_Table_Sprint.md
│   ├── Week_10_Assignment_Sprint2_Velocity.md
│   ├── Week_11_Assignment_BST_Heap_Sprint.md
│   ├── Week_12_Assignment_Expression_Tree.md
│   ├── Week_13_Assignment_Graph_Sprint.md
│   ├── Week_14_Assignment_Graph_Application.md
│   ├── Week_15_Assignment_Final_Project.md
│   └── Week_16_Assignment_Presentation_Portfolio.md
├── pm-materials/
│   ├── 00-PM-Integration-Overview.md
│   ├── 01-Sprint-Basics-For-CSC249.md
│   ├── 02-AI-Collaboration-Guidelines.md
│   └── templates/
├── rubrics/
│   └── assessment-rubrics.md
├── activities/
│   └── (hands-on exercises)
├── knowledge-checks/
│   └── (module quizzes)
├── planning-sheets/
│   └── (sprint templates)
├── reference-materials/
│   └── (glossaries, troubleshooting)
├── instructor-guide/
│   └── INSTRUCTOR_GUIDE.md
├── canvas-html/
│   └── (Canvas pages)
└── audits/
    └── (QM, CourseForge, RSI audits)
```

---

## Certification Status

**QM Standards**: In Development
**Ready for Submission**: Not Yet

---

## Unique Course Features

1. **Create-First Pedagogy**: Build before theory, iterate to understanding
2. **Mandatory AI Collaboration**: AI tools required, prompts documented
3. **Dual-Language Support**: C++ or Python, AI bridges concepts
4. **Sprint-Based Development**: 4 complete sprint cycles (Modules 4-7)
5. **Process Portfolio**: Document PM growth across entire semester
6. **Real-World Applications**: Every data structure applied to authentic problems

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
**Instructional Designer**: Angela Westmoreland
