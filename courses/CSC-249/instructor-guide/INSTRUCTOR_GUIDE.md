# CSC-249 Instructor Guide
## Data Structures & Algorithms - Complete Teaching Playbook

**Course**: CSC-249 Data Structures & Algorithms
**Instructor**: Drew Norris
**Term**: Spring 2026
**Last Updated**: January 2026

---

## Table of Contents

1. [Course Philosophy & Teaching Approach](#course-philosophy)
2. [First Week Preparation Checklist](#first-week-prep)
3. [Module-by-Module Teaching Guide](#module-guides)
4. [Grading Guidelines (40% Process)](#grading-guidelines)
5. [AI Collaboration Management](#ai-collaboration)
6. [Office Hours Best Practices](#office-hours)
7. [Technology Setup & Troubleshooting](#technology-setup)
8. [Common Teaching Challenges](#teaching-challenges)
9. [Adaptation Guidelines](#adaptation-guidelines)
10. [Appendices](#appendices)

---

<a name="course-philosophy"></a>
## 1. Course Philosophy & Teaching Approach

### "Bloom's Taxonomy Starts with Create"

**Core Principle**: Students build working implementations FIRST, then understand why they work.

**Why This Works**:
- Mirrors how professional developers actually learn
- Debugging teaches deeper than perfect code
- Iteration reveals understanding gaps
- "Aha moments" come from breaking things

**Traditional Approach** (what we're NOT doing):
```
Lecture → Theory → Examples → Students implement → Assessment
```

**CSC-249 Approach** (what we ARE doing):
```
Challenge → Students build → Break/Debug → Refine → NOW explain theory → Assessment
```

### The "30-Minute Rule"

**Each class session**:
- 0-10 min: What we're building today (motivation)
- 10-40 min: Students build (you circulate, ask questions)
- 40-50 min: What did we learn? (theory emerges from experience)

**Never lecture for more than 15 consecutive minutes.** If you find yourself talking longer, stop and have them DO something.

### Sacred Flow + AI Collaboration

**Sacred Flow** (from CSC-113):
```
Issue → Branch → Code → Commit → PR → Review → Merge
```

**CSC-249 Addition**: + AI Collaboration
```
Issue → Branch → [AI Session → Code → Test → Document in prompts.txt] → Commit → PR → Merge
```

**Your role**: Normalize AI use, but demand understanding.

### Dual-Language Philosophy

Students choose **C++ OR Python** as primary language. Don't force both.

**C++ Students**:
- Deeper understanding of memory, pointers, allocation
- Compile-time errors teach discipline
- Industry systems programming preparation

**Python Students**:
- Faster prototyping, focus on algorithms not syntax
- Easier visualization and testing
- Industry data science preparation

**Both tracks achieve the same CLOs.** Judge on understanding, not language choice.

### Process Over Product (40% of Grade)

**What this means in practice**:
- A student with buggy code but excellent process documentation can get B+ (70% technical, 100% process = 82%)
- A student with perfect code but no process evidence gets C (100% technical, 0% process = 60%)
- "I can't explain this" = cannot receive full technical credit either

**Why 40% is the right number**:
- Higher than CSC-114 (30%) because this course has 4 complete sprint cycles
- Not 50% because technical implementation still matters
- Industry reality: Good process → good code over time

---

<a name="first-week-prep"></a>
## 2. First Week Preparation Checklist

### Before Semester Starts (4-6 hours)

**Week Before Classes**:
- [ ] Set up GitHub Classroom organization
- [ ] Create assignment repos (16 total)
- [ ] Record 5-minute "Welcome to CSC-249" video
- [ ] Upload Canvas HTML pages (customize assignment links)
- [ ] Test your own environment (C++ compiler, Python, AI tool)
- [ ] Read through all Week 1-2 materials
- [ ] Prepare "Stack challenge" live coding demo

**Day Before First Class**:
- [ ] Review student roster (check for CSC-134 prerequisite waivers)
- [ ] Prepare "Why Data Structures Matter" 10-minute talk
- [ ] Have 3 real-world examples ready (GPS = graphs, Undo = stack, Autocomplete = trie)

### First Day Agenda (50 minutes)

**0-5 min**: Course overview
- "This course inverts CS education. You build first."
- Show COURSEMAP.md structure
- Emphasize: AI is required, not cheating

**5-15 min**: GitHub setup walkthrough
- Live demo: Fork → Clone → Edit README → Commit → Push
- Everyone does it together (pair programming encouraged)

**15-25 min**: Stack challenge
- "What is LIFO? Give me a real-world example."
- "Build a Stack class that can push, pop, and peek. 10 minutes. Go."
- (They will struggle. That's the point.)

**25-35 min**: Debrief
- "What did you try?"
- Show VisuAlgo Stack visualization
- "Now it makes sense, right?"

**35-45 min**: AI collaboration introduction
- Demo asking Claude: "Explain how a stack tracks its top element"
- Show good prompt vs bad prompt
- Introduce prompts.txt requirement

**45-50 min**: Assignment release
- M01-A1 due end of week
- Office hours schedule
- Questions

### First Week Teaching Tips

**Expect confusion**. Students are used to theory-first. Say:
> "I know this feels backwards. By week 4, you'll see why it works."

**Celebrate debugging**. When someone shares broken code:
> "Excellent! You found where your understanding breaks down. Let's fix it together."

**Set AI norms early**:
- Show your own prompts.txt from practice assignment
- Model: "I don't understand this either. Let's ask AI together."

---

<a name="module-guides"></a>
## 3. Module-by-Module Teaching Guide

### Module 1: Foundations & AI Collaboration (Weeks 1-2)

**Theme**: Professional workflows and ADT fundamentals
**Technical**: Stack, Queue
**PM**: Sacred Flow, prompts.txt

#### Week 1: GitHub & First Stack

**Monday** (50 min):
- 0-10: Course intro (see First Day Agenda)
- 10-25: GitHub setup (hands-on)
- 25-40: Stack challenge
- 40-50: Debrief + assignment release

**Wednesday** (50 min):
- 0-5: Stack struggles check-in ("What broke?")
- 5-15: Pointer/array confusion clarification (C++ students)
- 15-45: Lab work time (M01-A1 Stack implementation)
- 45-50: Homework: Finish Stack by Friday

**Friday** (50 min):
- 0-15: Student demos (3-4 volunteers show their Stack code)
- 15-30: NOW teach theory (ADT definition, LIFO, applications)
- 30-45: Queue introduction (FIFO concept, real-world examples)
- 45-50: M01-A2 release (Undo system)

#### Week 2: AI Collaboration & Undo System

**Monday** (50 min):
- 0-10: Queue challenge (build it without looking up)
- 10-25: Queue debrief + theory
- 25-40: "Two stacks for undo/redo" design thinking
- 40-50: Work time on M01-A2

**Wednesday** (50 min):
- 0-10: prompts.txt workshop ("Show me your AI conversations")
- 10-15: Good vs bad prompts examples
- 15-45: Lab work time (Undo system)
- 45-50: Peer code review setup

**Friday** (50 min):
- 0-20: Undo system demos
- 20-35: prompts.txt showcase (3-4 students share best AI interactions)
- 35-45: Reflection: "Did build-first help your understanding?"
- 45-50: Module 2 preview (Big O, recursion)

#### Common Module 1 Struggles

**"I can't figure out how to start"**:
- Response: "What's the simplest version? Even if it only holds 1 item?"
- Scaffold: "Start with an array of size 10. Hard-code it."

**"My Stack segfaults" (C++ students)**:
- Response: "Show me your push method. Walk me through what topIndex is doing."
- Debug together with print statements

**"AI gave me code I don't understand"**:
- Response: "That's perfect! Now ask AI to explain line-by-line. Document that in prompts.txt."
- Don't let them submit unexplained code

**"Do we HAVE to use AI?"**:
- Response: "Yes. It's a course requirement. Industry uses AI—you need to learn to collaborate with it effectively."

#### Module 1 Success Indicators

✅ Students create PRs without asking how
✅ At least 50% attempt Stack before looking up solutions
✅ prompts.txt files show iteration, not just "give me code"
✅ Class discussions reference "when I tried X, it broke because Y"

---

### Module 2: Algorithm Analysis & Recursion (Weeks 3-4)

**Theme**: Measuring performance and thinking recursively
**Technical**: Big O, benchmarking, factorial, Fibonacci, Tower of Hanoi
**PM**: User stories (introduced)

#### Week 3: Big O Through Measurement

**Monday** (50 min):
- 0-10: "Which is faster: find a book in sorted library or unsorted pile?"
- 10-30: Benchmarking lab (provide linear search and binary search code, students time them on N=100, 1000, 10000)
- 30-45: Plot results, notice pattern
- 45-50: "This pattern is called Big O. Linear is O(N), binary is O(log N)."

**Wednesday** (50 min):
- 0-15: Big O notation explained (now that they've felt the difference)
- 15-25: Code analysis practice (5 snippets, identify Big O)
- 25-45: M02-A1 work time (Benchmarking lab)
- 45-50: Homework: Complete benchmarking report

**Friday** (50 min):
- 0-10: Benchmarking results sharing
- 10-20: Recursion teaser ("A function that calls itself")
- 20-35: Factorial visualization (pythontutor.com or whiteboard)
- 35-50: Recursive factorial challenge

#### Week 4: Recursion Mastery

**Monday** (50 min):
- 0-10: Factorial solutions debrief (base case, recursive case)
- 10-25: Fibonacci challenge (2 recursive calls!)
- 25-40: Tower of Hanoi visualization
- 40-50: M02-A2 release (Recursive algorithms project)

**Wednesday** (50 min):
- 0-15: Recursion debugging session (infinite recursion, stack overflow)
- 15-30: Iteration vs recursion trade-offs
- 30-50: Lab work time

**Friday** (50 min):
- 0-20: Recursive art showcase (if students did fractal extension)
- 20-35: User stories introduction (PM concept for Module 3+)
- 35-50: Module 3 preview (Sorting algorithms)

#### Common Module 2 Struggles

**"I don't see the pattern in Big O"**:
- Response: "Show me your benchmark data. Let's graph it."
- Have them double N and see what happens to time

**"My recursion never stops"**:
- Response: "What's your base case? When does it return without recursing?"
- Draw the call tree on whiteboard

**"Recursion is slower than loops. Why use it?"**:
- Response: "True for simple cases. But for trees and graphs (coming later), recursion is clearer. Trade-off: readability vs performance."

#### Module 2 Success Indicators

✅ Students explain Big O in their own words with real examples
✅ Can identify base case and recursive case in any recursive function
✅ Benchmark data matches theoretical Big O predictions
✅ Start documenting work in user story format

---

### Module 3: Sorting Algorithms (Weeks 5-6)

**Theme**: Classic algorithms and divide-and-conquer
**Technical**: Selection sort, insertion sort, merge sort, quick sort
**PM**: Story point estimation

#### Week 5: Simple Sorts

**Monday** (50 min):
- 0-5: "How would you sort a deck of cards?"
- 5-25: Selection sort challenge (build before reading)
- 25-40: VisuAlgo demonstration + theory
- 40-50: Insertion sort preview

**Wednesday** (50 min):
- 0-15: Insertion sort challenge
- 15-30: Compare selection vs insertion (when is each better?)
- 30-50: M03-A1 work time (Sorting implementation)

**Friday** (50 min):
- 0-20: Sorting benchmark results ("Why is insertion faster on nearly-sorted data?")
- 20-35: Divide-and-conquer introduction (recursion returns!)
- 35-50: Merge sort visualization

#### Week 6: Divide and Conquer

**Monday** (50 min):
- 0-20: Merge sort implementation (provide merge() helper, students write mergeSort())
- 20-40: Quick sort introduction
- 40-50: M03-A2 release (Sorting comparison report)

**Wednesday** (50 min):
- 0-15: Story point estimation workshop (PM concept)
- 15-50: Lab work time (sorting comparison, benchmarking, writing report)

**Friday** (50 min):
- 0-25: Sorting competition showcase (fastest implementations)
- 25-40: When to use which sort? (decision tree)
- 40-50: Module 4 preview (FIRST SPRINT - linked lists)

#### Common Module 3 Struggles

**"Merge sort is too complicated"**:
- Response: "Let's break it down. The merge() part is given. You just need: if array size > 1, split in half, sort left, sort right, merge. That's 5 lines."

**"My quick sort stack overflows"**:
- Response: "Bad pivot choice. Try median-of-three instead of first element."

**"Benchmarking shows weird results"**:
- Response: "Run multiple trials, take average. Also, N=100 is too small to see pattern. Try N=10,000."

#### Module 3 Success Indicators

✅ Can explain divide-and-conquer in own words
✅ Sorting visualizations make sense (not just magic)
✅ Benchmark data validates theoretical complexity
✅ Story point estimates start to show calibration

---

### Module 4: Linear Structures - Sprint 1 (Weeks 7-8)

**Theme**: Linked lists with FIRST COMPLETE SPRINT
**Technical**: Node-based linked lists, pointers, memory management
**PM**: Sprint planning, daily standups, burndown chart, retrospective

#### Week 7: Sprint Planning & Linked Lists

**Monday** (50 min):
- 0-15: **Sprint Planning Workshop** (PM heavy day)
  - "What is a sprint? 2 weeks, specific goal, daily tracking."
  - Sprint planning template walkthrough
  - Capacity calculation (how many story points can you do?)
  - Sprint goal: "Working linked list implementation"
- 15-30: Node concept introduction
- 30-50: Node class implementation challenge

**Wednesday** (50 min):
- 0-5: First daily standup (whole class)
  - "What did you do yesterday?"
  - "What will you do today?"
  - "Any blockers?"
- 5-20: Pointer debugging session (C++ students)
- 20-50: Lab work time (M04-A1 Sprint - linked list implementation)

**Friday** (50 min):
- 0-5: Daily standup
- 5-15: Linked list insertion patterns (prepend, append, insert-at-index)
- 15-50: Lab work time + burndown chart check-in

#### Week 8: Sprint Completion & First Retrospective

**Monday** (50 min):
- 0-5: Daily standup
- 5-50: Lab work time (push to finish linked list)

**Wednesday** (50 min):
- 0-5: Final standup
- 5-30: Sprint review demos (3-4 students show working linked lists)
- 30-50: Code review session (peer feedback on PRs)

**Friday** (50 min):
- 0-40: **Sprint 1 Retrospective** (CRITICAL - set the tone)
  - What went well? (celebrate successes)
  - What didn't go well? (normalize struggle)
  - Velocity analysis (planned vs actual story points)
  - Action items for Sprint 2 (concrete changes)
- 40-50: Module 5 preview (Hash tables, Sprint 2)

#### Common Module 4 Struggles (BIGGEST MODULE FOR CONFUSION)

**"Sprint planning feels like busywork"**:
- Response: "First sprint always feels that way. By Sprint 3, you'll see how velocity data helps you plan realistically. Trust the process."

**"I don't know my velocity yet"**:
- Response: "Exactly! Sprint 1 is for calibration. Guess conservatively. You'll have data for Sprint 2."

**"My linked list loses nodes"**:
- Response: "Pointer bug. Draw it out. Show me: when you insert at position 2, what happens to node.next?"

**"Daily standups take too long"**:
- Response: "Keep it to 3 questions, 2 minutes per person. If detailed discussion needed, take it offline."

**Pointers are killing me (C++ students)"**:
- Response: "Draw every operation. Use valgrind to find memory leaks. Pointers are hard—you're not broken."

#### Module 4 Success Indicators (MOST IMPORTANT - THIS SETS SPRINT HABITS)

✅ Sprint planning documents show thoughtful capacity calculation
✅ Daily standup entries exist (even if brief)
✅ Burndown chart shows progress (doesn't have to be perfect)
✅ Retrospective is HONEST (not "everything was great")
✅ Students mention Sprint 1 velocity in Sprint 2 planning

**If Module 4 PM goes well, Modules 5-7 will be smooth. If students don't buy into Sprint 1, intervene immediately.**

---

### Module 5: Hash Tables - Sprint 2 (Weeks 9-10)

**Theme**: O(1) lookup with velocity-based planning
**Technical**: Hash functions, collision resolution (chaining, open addressing)
**PM**: Velocity-based sprint planning

#### Week 9: Sprint 2 Planning with Velocity

**Monday** (50 min):
- 0-20: Sprint 2 planning (now with Sprint 1 velocity data!)
  - "Your Sprint 1 velocity was X points. Plan Sprint 2 accordingly."
  - Sprint goal: "Working hash table with collision handling"
- 20-35: Hash function concept (map keys to indices)
- 35-50: Hash function design challenge

**Wednesday** (50 min):
- 0-5: Daily standup
- 5-20: Collision handling strategies (chaining vs open addressing)
- 20-50: Lab work time (M05-A1 Sprint - hash table)

**Friday** (50 min):
- 0-5: Daily standup
- 5-15: Load factor and resizing
- 15-50: Lab work time

#### Week 10: Sprint 2 Completion & Velocity Refinement

**Monday** (50 min):
- 0-5: Daily standup
- 5-50: Lab work time

**Wednesday** (50 min):
- 0-5: Final standup
- 5-30: Sprint 2 review demos
- 30-50: Velocity analysis session

**Friday** (50 min):
- 0-30: Sprint 2 retrospective
  - Velocity trend: Sprint 1 vs Sprint 2 (should show improvement)
  - Estimation accuracy improving?
  - Action items
- 30-50: Module 6 preview (Trees, Sprint 3)

**By Module 5, PM should feel routine. Spend less time explaining, more time doing.**

---

### Module 6: Trees & Heaps - Sprint 3 (Weeks 11-12)

**Theme**: Hierarchical structures with PM becoming habitual
**Technical**: BST, tree traversals, heaps, priority queues
**PM**: Process optimization (3 sprints of data)

**Teaching Approach**: Sprint 3 gets less PM scaffolding. Students should execute independently.

**Monday Week 11**: Sprint planning (5 min), tree intro (15 min), work time (30 min)
**Wednesday/Friday Week 11**: Standup (5 min), work time (45 min)
**Monday Week 12**: Standup, work time
**Wednesday Week 12**: Sprint review demos
**Friday Week 12**: Retrospective with 3-sprint velocity analysis

**Focus**: Tree recursion is hard. Emphasize traversal visualization (inorder/preorder/postorder).

---

### Module 7: Graphs - Sprint 4 (Weeks 13-14)

**Theme**: Network structures with cumulative retrospective
**Technical**: Graph representations, BFS, DFS, Dijkstra's
**PM**: Process portfolio prep

**Teaching Approach**: Sprint 4 is most autonomous. Students plan and execute with minimal guidance.

**Friday Week 14**: Cumulative retrospective across all 4 sprints
- Velocity evolution chart
- Estimation accuracy improvement
- "What PM habits will you take to future courses?"

---

### Module 8: Capstone & Portfolio (Weeks 15-16)

**Theme**: Integration project and process portfolio
**Technical**: Multi-structure application (student-designed)
**PM**: Process portfolio documenting growth

#### Week 15: Project Development

**Monday**: Project proposal presentations (2 min each)
**Wednesday**: Work time + check-ins
**Friday**: Mid-project demos

#### Week 16: Presentations & Celebration

**Monday**: Work time (final push)
**Wednesday**: Capstone presentations Part 1
**Friday**: Capstone presentations Part 2 + course reflection

**Presentation Format**: 8-12 min technical demo + 5 min PM journey story

---

<a name="grading-guidelines"></a>
## 4. Grading Guidelines (40% Process)

### Process Grading Philosophy

**Process grading is NOT busywork grading.** It's grading on:
- Evidence of iterative thinking
- Professional development habits
- Learning from mistakes
- Growth over time

### What Process Grading Looks Like

**Weekly Assignments (Modules 1-3)**: 30% process
- prompts.txt exists and shows iteration (5 pts)
- Git commits are incremental, not one dump (3 pts)
- PR description explains approach (2 pts)

**Sprint Assignments (Modules 4-7)**: 40% process
- Sprint planning complete with velocity data (5-8 pts)
- Daily standups documented (5-8 pts)
- Burndown chart maintained (5-8 pts)
- Retrospective honest and actionable (5-8 pts)

**Capstone (Module 8)**: 40% process (including process portfolio)

### How to Grade prompts.txt

**Excellent (5/5)**:
```
## Session 1: Understanding Hash Functions
My Prompt: "I'm implementing a hash table. Why do we use modulo
operator for array indexing?"

AI Response: [summarized]

What I Learned: Modulo ensures index stays within array bounds.
Like clock arithmetic.

What I Modified: AI suggested % tableSize, but I added check for
negative hashes (used abs() first).

## Session 2: Collision Handling Confusion
My Prompt: "My chaining implementation causes infinite loop when
searching. Here's my code: [code]. What's wrong?"

AI Response: [summarized]

What I Learned: I was updating current in wrong place. Should be
inside while loop, not outside.

What I Modified: Moved current = current.next inside loop. Also
added null check.
```

**Good (4/5)**: Shows 2+ sessions, some modification evidence, demonstrates learning

**Adequate (3/5)**: Shows AI use but minimal modification/learning notes

**Insufficient (1-2/5)**: One session only, or just "AI gave me this code"

**Missing (0/5)**: No prompts.txt file

### How to Grade Sprint Artifacts

**Sprint Planning (8 points)**:
- Capacity calculated based on velocity (2 pts) - Must reference previous sprint for Sprint 2+
- Sprint goal defined (1 pt)
- Story breakdown logical (3 pts)
- Estimation shows thought (2 pts)

**Daily Standups (8 points)**:
- 10 entries minimum (one per work day) (4 pts)
- Blockers identified when present (2 pts)
- Shows incremental progress (2 pts)

**Burndown Chart (8 points)**:
- Updated at least 5 times during sprint (4 pts)
- Shows actual vs ideal (2 pts)
- Format clear and readable (2 pts)

**Retrospective (8 points)**:
- What went well (2 pts)
- What didn't go well (2 pts) - MUST have something, or it's not honest
- Velocity analysis (2 pts)
- Actionable improvements (2 pts)

### Red Flags (Deduct Points or Request Revision)

❌ **Fake Standups**: All entries say "worked on project, no blockers"
→ Response: "Real standups have specifics. Revise or lose 5 points."

❌ **Retrospective says "Everything was perfect"**
→ Response: "No sprint is perfect. Identify one challenge or lose 4 points."

❌ **No evidence of AI collaboration**
→ Response: "prompts.txt required. 0 points on process until submitted."

❌ **Code they can't explain**
→ Response: "5-minute verbal check. If you can't explain, technical grade capped at 60%."

### Grade Calculation Examples

**Example 1: Strong Technical, Weak Process**
- Technical: 90/100 × 60% = 54%
- Process: 50/100 × 40% = 20%
- **Total: 74% (C)**

**Example 2: Decent Technical, Strong Process**
- Technical: 75/100 × 60% = 45%
- Process: 95/100 × 40% = 38%
- **Total: 83% (B)**

**Example 3: Excellent Both**
- Technical: 95/100 × 60% = 57%
- Process: 90/100 × 40% = 36%
- **Total: 93% (A)**

**The message**: Process matters as much as code quality.

---

<a name="ai-collaboration"></a>
## 5. AI Collaboration Management

### Setting the Right Culture

**Week 1 Message**:
> "AI is required in this course. If you don't use AI, you're missing 10% of your grade (prompts.txt). But AI that you don't understand is plagiarism. The line: Can you explain the code?"

**Ongoing Message**:
> "Show me your prompts.txt. Let's learn together how to ask better questions."

### The "Explain It to Me" Test

**In office hours or during sprint reviews**:
- Pick a random method from their code
- Ask: "Walk me through what this does, line by line"
- If they can explain: ✓ They learned from AI
- If they can't: ❌ They copy-pasted without understanding

**Not a gotcha—it's a learning check.** Say:
> "You can't explain this yet. That's OK. Let's go back to AI and ask it to explain in simpler terms. Document that in prompts.txt."

### Good AI Collaboration vs Bad

**Good (Encourage This)**:
```
Student: "I'm stuck on linked list deletion. Here's my code.
When I delete node at index 2, the next node disappears. Why?"

AI: [explains pointer reassignment]

Student: "Oh! I need to save temp.next BEFORE I delete temp.
Let me try that."

[documents this in prompts.txt]
```

**Bad (Discourage This)**:
```
Student: "Write me a linked list class in C++"

AI: [gives 200 lines of code]

Student: [copy-pastes]

[submits with minimal/no prompts.txt]
```

### When to Intervene

**Week 2-3**: If 20%+ of class has no prompts.txt, do a class-wide workshop:
- Show example prompts.txt from practice work
- Have students pair up and share their AI conversations
- Normalize: "I used AI 15 times to debug this. Here's how."

**Week 5-6 (First Sprint)**: If students can't explain their sprint code:
- Require 5-minute verbal check-ins
- No process points until they can explain
- Offer: "Let's ask AI to explain it together, then you document that"

**Week 10+**: By now, prompts.txt should show sophisticated AI use:
- Asking AI to compare approaches
- Using AI to understand error messages
- Asking for optimization suggestions

### AI Tool Recommendations for Students

**Claude** (claude.ai or API):
- Best for: Explaining concepts, iterative dialogue
- Free tier sufficient for this course

**ChatGPT** (chat.openai.com):
- Best for: Code generation, debugging
- Free tier sufficient

**GitHub Copilot**:
- Best for: In-editor suggestions
- Free for students with GitHub Education pack

**Students must pick one and stick with it for consistency.**

---

<a name="office-hours"></a>
## 6. Office Hours Best Practices

### "Debugging Together" Philosophy

**Don't fix their code for them.** Debug WITH them.

**When a student brings broken code**:

**Step 1: "What did you try?"**
- If they say "nothing yet": "Go try something. Office hours are for when you're stuck, not when you haven't started."
- If they show attempts: "Good! Let's figure out why that didn't work."

**Step 2: "Let's trace through execution"**
- Add print statements together
- Walk through the logic line by line
- Draw the data structure state on whiteboard

**Step 3: "What does the error message say?"**
- Read it together, word by word
- "Segmentation fault on line 47—what's on line 47? A pointer dereference. Is that pointer null?"

**Step 4: "Have you asked AI about this?"**
- If no: "Let's ask together. Here's a good prompt: [demonstrate]"
- If yes: "Show me the AI response. What part don't you understand?"

**Step 5: "You fix it, I'll watch"**
- Don't type for them
- Guide: "Try checking if the pointer is null before dereferencing"
- They make the change
- They run the test
- They debug further if needed

### Common Office Hour Scenarios

**Scenario: "I don't understand Big O"**
- Response: "Show me your benchmarking data from M02-A1."
- Graph it together
- "When N doubles, what happens to time?"
- Connect empirical data to theoretical notation

**Scenario: "My sprint is behind schedule"**
- Response: "Show me your burndown chart. When did you fall behind?"
- Identify: Over-ambitious planning? Unexpected blocker? Procrastination?
- Adjust: "What can you cut to still meet sprint goal?"

**Scenario: "I have code but don't understand it"**
- Response: "Let's ask AI to explain it. But YOU type the prompt."
- Student asks: "Explain this code line by line in simple terms"
- Document the explanation session in prompts.txt
- Test understanding: "Now explain it back to me in your own words"

**Scenario: "AI gave me wrong code"**
- Response: "Perfect learning moment! Why is it wrong?"
- Debug together
- "Now tell AI what was wrong. See if it learns."
- Document: "AI gave me X, but I found bug Y, corrected to Z"

### Time Management in Office Hours

**High-demand weeks** (Sprints weeks 8, 10, 12, 14):
- Extend office hours +1 hour
- Group sessions: "Everyone working on linked lists, come at 2pm"
- Virtual option: Zoom office hours for quick questions

**Low-demand weeks** (Non-sprint weeks):
- Standard office hours
- Use time to review upcoming assignment specs

### When to Say "Go Try More First"

If student shows up with:
- "I haven't started"
- "I don't know where to begin"
- "Can you just tell me the answer?"

Response:
> "Office hours are for when you're stuck after trying. Go attempt the assignment for 30 minutes. Document what you tried. Come back if you're still stuck. I'll be here."

**Not harsh—it's teaching self-sufficiency.**

---

<a name="technology-setup"></a>
## 7. Technology Setup & Troubleshooting

### Student Environment Options

**Option 1: Local C++ Development** (Recommended for C++ track)
- Compiler: g++ (Linux/Mac) or Visual Studio (Windows)
- IDE: VS Code with C++ extension or CLion
- Pros: Full control, learn memory tools (valgrind)
- Cons: Setup complexity, Windows students struggle

**Option 2: Local Python Development** (Recommended for Python track)
- Python 3.8+
- IDE: VS Code with Python extension or PyCharm
- Pros: Easy setup, works everywhere
- Cons: Hides memory management concepts

**Option 3: Cloud Development** (Backup for anyone)
- GitHub Codespaces (free tier: 60 hours/month)
- replit.com (free tier sufficient)
- Pros: No local setup, works on Chromebooks
- Cons: Requires internet, free tier limits

### Common Setup Issues (First 2 Weeks)

**"g++ command not found" (Mac)**:
```bash
xcode-select --install
```

**"g++ command not found" (Windows)**:
- Install MinGW or use WSL (Windows Subsystem for Linux)
- Alternative: Visual Studio Community (heavier but easier)

**"Python not found" (Windows)**:
- Download from python.org
- Check "Add Python to PATH" during install
- Restart terminal

**"Segmentation fault" (C++ students, Week 3+)**:
- Install valgrind (Linux/Mac): `brew install valgrind` or `apt install valgrind`
- Run: `valgrind ./program`
- Shows exact line of memory error

### GitHub Issues (Week 1-2)

**"Permission denied (publickey)"**:
- Need to add SSH key to GitHub
- Guide: https://docs.github.com/en/authentication
- Alternative: Use HTTPS instead of SSH

**"git command not found"**:
- Mac: `xcode-select --install`
- Windows: Download Git for Windows
- Linux: `sudo apt install git`

**"How do I create a PR?"**:
- Push branch: `git push origin branch-name`
- Go to GitHub repo
- Click "Compare & pull request" banner
- Fill out description, click "Create pull request"

### AI Tool Access

**Claude**:
- Free tier: claude.ai (no credit card)
- Sufficient for course

**ChatGPT**:
- Free tier: chat.openai.com
- GPT-3.5 sufficient (GPT-4 not needed)

**GitHub Copilot**:
- Apply for GitHub Student Developer Pack
- Free while student (requires .edu email verification)

**If student has NO AI access**:
- Pair them with student who does
- Check if campus has institutional license

---

<a name="teaching-challenges"></a>
## 8. Common Teaching Challenges

### Challenge 1: "Students Over-Rely on AI"

**Symptoms**:
- Code they can't explain
- Copy-paste without modification
- No troubleshooting attempts before asking AI

**Solutions**:
- **Week 3**: Mandatory "Explain Your Code" in office hours
- **Week 5**: Add to rubric: "Can explain code verbally (5 pts)"
- **Week 8**: Sprint review includes code walkthrough

**Messaging**:
> "AI is a tool, not a replacement for thinking. If you can't explain your code, you didn't learn—you copied."

### Challenge 2: "Students Resist Build-First Approach"

**Symptoms**:
- "Can you just teach us first?"
- Reading theory before attempting challenge
- Waiting for lecture instead of trying

**Solutions**:
- **Week 2**: Share student testimonial from past semester ("It felt backwards at first, but by week 5 I was solving problems faster")
- **Week 4**: Mid-course reflection: "Has build-first helped you debug better?"
- **Week 8**: Celebrate: "Remember Week 1 when you couldn't figure out Stack? Now you're building linked lists from scratch."

**Messaging**:
> "Professional developers don't learn theory then code. They code, break things, and THEN understand why. This course prepares you for real work."

### Challenge 3: "Sprint Process Feels Like Busywork"

**Symptoms**:
- Fake standups ("worked on project, no blockers" × 10)
- Retrospectives say "everything was great"
- Burndown charts backfilled at end of sprint

**Solutions**:
- **Week 7**: Emphasize: "Process points = 40% of your grade. Take it seriously or your grade tanks."
- **Week 8**: Show velocity data benefits: "Those who tracked daily finished on time. Those who didn't crammed at end and missed features."
- **Week 10**: Sprint 2 retrospective focus: "How did Sprint 1 velocity help you plan Sprint 2?"

**Messaging**:
> "Industry uses sprints because they work. Tracking prevents surprises. By Module 8, you'll thank me."

### Challenge 4: "C++ Students Struggle with Pointers"

**Symptoms**:
- Segfaults in every assignment
- Memory leaks
- Confusion about when to use *, &, ->

**Solutions**:
- **Week 4**: Extra office hours for pointer workshop
- **Week 7**: Pair C++ students with each other (struggle together)
- **Week 9**: Offer: "Switch to Python if pointers are blocking learning. You'll still hit CLOs."

**Messaging**:
> "Pointers are HARD. That's why they're valuable. Industry needs people who understand memory. Keep going."

### Challenge 5: "Python Students Feel Less Challenged"

**Symptoms**:
- Finish assignments early
- "This is too easy compared to C++"

**Solutions**:
- **Offer Extension Challenges**: Dual implementation, performance optimization, C++ translation
- **Week 6**: "Implement sorting in C++ too. Compare performance and code complexity."
- **Week 12**: "Build custom memory allocator in Python to simulate manual memory management"

**Messaging**:
> "Python abstracts complexity. Use that speed to go DEEPER: more algorithms, better analysis, dual implementations."

### Challenge 6: "Students Don't Start Until Due Date"

**Symptoms**:
- No commits until day before due date
- Sprint artifacts backfilled
- "I just work better under pressure"

**Solutions**:
- **Week 5**: Add intermediate checkpoints (10% of grade for checkpoint submission)
- **Week 7**: Sprint planning requires posting by Monday (can't backfill planning)
- **Week 10**: Daily standup bonus: +5 pts if all 10 standups on-time

**Messaging**:
> "Sprints don't work if you ignore them for 10 days. Industry expects daily progress tracking. Learn the habit now."

---

<a name="adaptation-guidelines"></a>
## 9. Adaptation Guidelines

### 8-Week Semester (Compressed)

**Combine modules**:
- Week 1: Module 1 (compress to 1 week)
- Week 2: Module 2 (compress to 1 week)
- Week 3: Module 3 (compress to 1 week)
- Week 4-5: Module 4-5 (2 sprints, back-to-back)
- Week 6-7: Module 6-7 (2 sprints, back-to-back)
- Week 8: Module 8 (capstone, abbreviated)

**Cut**:
- Reduce assignment points proportionally
- Sprint 3 or Sprint 4 (keep 2 sprints minimum)
- Some extension challenges

**Keep**:
- Create-first pedagogy
- AI collaboration
- Process grading (40%)
- Sprint structure

### Single-Language Only (C++ OR Python, Not Both)

**If forced to choose one**:
- **Choose C++** for: Systems programming track, embedded systems focus
- **Choose Python** for: Data science track, rapid prototyping focus

**Adaptation**:
- Remove dual-language starter code
- Focus all examples in chosen language
- Students miss cross-language perspective, but still hit CLOs

### Without AI Collaboration Requirement

**If institution prohibits AI use**:
- Remove prompts.txt requirement
- Replace with "Debugging Log" (same format, no AI)
- Increase office hour emphasis
- Lose 10% of process grade points
- Miss CLO3 entirely (revise to focus on peer collaboration)

**Not recommended—industry uses AI. Students should learn to collaborate with it.**

### Without Sprint Structure (Traditional Weekly Assignments)

**If 4 sprints are too much**:
- Modules 1-3: Weekly assignments (unchanged)
- Module 4-7: 2 longer projects (4 weeks each) instead of 4 sprints
- Keep retrospectives after each project
- Reduce process grading to 30%

**Trade-off**: Students don't develop sprint habits, less prepared for CTS-285/289.

---

<a name="appendices"></a>
## 10. Appendices

### Appendix A: Weekly Time Investment Estimate

**Instructor Prep Time per Week**:
- Weeks 1-2: 4-6 hours (setup, first assignments)
- Weeks 3-6: 2-3 hours (lecture prep, grading)
- Weeks 7-14 (Sprints): 3-5 hours (sprint artifact review, check-ins)
- Weeks 15-16: 4-6 hours (capstone grading, presentations)

**Average**: 3-4 hours/week instructor prep + 2-3 hours/week grading

**Grading Time per Student per Sprint**: 30-45 minutes (15 min technical, 15-30 min process)

### Appendix B: Student Success Predictors

**Early indicators student will succeed**:
- Asks questions in first 2 weeks
- Git commits show incremental work
- prompts.txt shows iteration, not just "give me answer"
- Attends office hours when stuck (not to get answers, but to debug together)
- Sprint 1 retrospective is honest

**Early warning signs**:
- No commits until due date
- Can't explain code they submitted
- Retrospective says "everything was great"
- Skips sprint planning

**Intervention**: Private check-in by Week 6. Offer support plan.

### Appendix C: Example Syllabus Policies

**Late Work**:
- 10% per day penalty (max 3 days)
- Sprints cannot be late (defeats purpose)
- Extensions available with communication 24+ hours before due date

**Academic Integrity**:
- AI collaboration encouraged, but must document in prompts.txt
- Code you can't explain = plagiarism
- First offense: 0 on assignment + meeting
- Second offense: F in course

**Accessibility**:
- Extended time available with documented need
- Alternative formats (video instead of presentation)
- Flexible sprint deadlines with advance communication

### Appendix D: Semester Calendar Template

```
Week 1: Module 1 - GitHub setup, Stack
Week 2: Module 1 - Undo system, AI collaboration
Week 3: Module 2 - Big O, benchmarking
Week 4: Module 2 - Recursion
Week 5: Module 3 - Selection, insertion sort
Week 6: Module 3 - Merge sort, quick sort
Week 7: Module 4 Sprint 1 - Linked lists (planning, work)
Week 8: Module 4 Sprint 1 - Linked lists (completion, retrospective)
Week 9: Module 5 Sprint 2 - Hash tables (planning, work)
Week 10: Module 5 Sprint 2 - Hash tables (completion, velocity analysis)
Week 11: Module 6 Sprint 3 - Trees, heaps (planning, work)
Week 12: Module 6 Sprint 3 - Trees, heaps (completion, retrospective)
Week 13: Module 7 Sprint 4 - Graphs (planning, work)
Week 14: Module 7 Sprint 4 - Graphs (completion, cumulative retrospective)
Week 15: Module 8 - Capstone development
Week 16: Module 8 - Presentations, course celebration
```

### Appendix E: Quick Reference for You

**Daily standup template** (show students Week 7):
```
## Daily Standup - [Date]
**Yesterday**: Implemented push and pop methods for linked list
**Today**: Working on insert-at-index, fixing off-by-one bug
**Blockers**: Confused about edge case when index > list size
```

**Retrospective template** (show students Week 8):
```
## Sprint [N] Retrospective

### What Went Well
- Got linked list insert working after 3 attempts
- AI helped me understand pointer logic

### What Didn't Go Well
- Underestimated delete complexity (8 points, should have been 13)
- Waited until day 6 to start (bad idea)

### Velocity Analysis
- Planned: 25 points
- Completed: 18 points
- Actual velocity: 18 points

### Action Items for Next Sprint
- Start on Day 1, not Day 6
- Ask AI for complexity estimates before committing points
- Allocate 30% buffer for debugging
```

---

## Final Note to Instructors

**This course is different.** It inverts traditional CS pedagogy. Students will resist at first. By Module 4, they'll start to see why it works. By Module 8, they'll appreciate it.

**Your job**: Hold the line on create-first, AI collaboration, and process grading. These aren't optional—they're the course.

**Trust the process.** By the end, students will debug faster, think more critically, and manage projects more professionally than traditional data structures students.

**Questions?** Email Drew Norris or check the CourseForge documentation.

**You've got this. Now go build some stacks!**

---

**Last Updated**: January 2026
**Author**: Drew Norris
**Instructional Designer**: Angela Westmoreland
**Version**: 1.0 (Initial Release)
