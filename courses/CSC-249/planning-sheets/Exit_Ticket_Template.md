# Exit Ticket Template

**Purpose**: Weekly reflection on data structures learning, algorithm implementation challenges, and connections between coursework and career goals in systems programming.
**When to Use**: End of each week (Friday or Sunday evening)
**Time to Complete**: 10-15 minutes

---

## Instructions

1. **Set aside reflection time** - Same day/time each week builds the habit
2. **Be specific** - "I learned linked lists" is vague. "I learned that doubly-linked lists need null checks before dereferencing prev/next pointers" is specific.
3. **Be honest about challenges** - Pointer bugs, memory leaks, algorithm confusion - this helps Drew support you better
4. **Connect to career** - Every week, link data structures learning to professional systems programming work
5. **Submit to course** - Post to Discord channel or LMS as specified by Drew

Exit tickets help you consolidate learning and help Drew adjust the course to your needs.

---

## Template

### Exit Ticket - Week [#]

**Date**: [Date]
**Module**: [Module number and title]
**Data Structure/Algorithm Focus**: [What you implemented/learned this week]

---

### What did I learn this week?

**Technical concepts (data structures/algorithms):**
-
-
-

**Implementation skills (C++/Python specifics):**
-
-

**Tools/techniques:**
-
-

**Most important insight:**


---

### What challenged me this week?

**Technical challenges (pointer bugs, memory leaks, algorithm confusion):**
-
-

**Process challenges (sprint management, estimation, time management):**
-
-

**How I worked through challenges:**
-
-

**Challenges still unresolved:**
-
-

---

### What do I need help with?

**Immediate needs:**
-
-

**Conceptual confusion:**
-
-

**Process/workflow questions:**
-
-

**How can Drew/TAs help?**


---

### Connection to Career Goals

**My current career goal**: [Systems programmer, game developer, embedded systems, etc.]

**How this week's learning connects:**


**Skills I'm building that employers value:**
-
-

**What I want to explore further:**


---

### Sprint/Project Progress

**This week's sprint progress:**
- Story points completed: ___
- On track for sprint goal? [ ] Yes [ ] No

**Code quality metrics:**
- Test coverage: ___%
- Memory leaks found/fixed: ___
- Compiler warnings resolved: ___

**Wins this week:**
-
-

**Concerns for next week:**
-
-

---

### AI Collaboration Quality

**AI interactions this week**: ___ prompts documented

**Most valuable AI collaboration:**


**How I'm improving my AI prompting:**


**AI collaboration grade (self-assessment)**: [ ] Excellent [ ] Good [ ] Needs Improvement

---

### Commitments for Next Week

**Top 3 priorities:**
1.
2.
3.

**Time I'll dedicate to CSC-249**: ___ hours

**One thing I'll do differently**:


---

### Reflection Scale (1-5)

Rate your week:

**Understanding of data structures/algorithms**: 1  2  3  4  5
(1 = Lost, 5 = Mastered)

**Implementation skill (coding)**: 1  2  3  4  5
(1 = Struggling, 5 = Confident)

**Sprint discipline (PM process)**: 1  2  3  4  5
(1 = Chaos, 5 = Professional)

**Memory management (C++) or reference handling (Python)**: 1  2  3  4  5
(1 = Many bugs, 5 = Clean)

**Overall satisfaction**: 1  2  3  4  5
(1 = Frustrated, 5 = Thriving)

**What would improve my experience?**


---

## Example (Filled)

### Exit Ticket - Week 5

**Date**: Feb 21, 2026
**Module**: Module 4 - Linear Structures (Sprint 1)
**Data Structure/Algorithm Focus**: Doubly-Linked Lists and Stacks

---

### What did I learn this week?

**Technical concepts (data structures/algorithms):**
- Doubly-linked lists require bidirectional pointer maintenance (next AND prev must both be updated during insert/delete)
- Null pointer checks are essential before dereferencing - two types needed: traversal bounds check AND boundary node check
- Stack ADT can be elegantly implemented using linked list with O(1) operations by restricting operations to front only
- Destructor must traverse and deallocate ALL nodes to prevent memory leaks, not just head

**Implementation skills (C++/Python specifics):**
- Valgrind usage for detecting memory leaks and invalid memory access
- gdb debugger for stepping through pointer operations and inspecting memory
- nullptr checks before using -> operator (prevents segfaults)
- Understanding difference between stack memory (local variables) and heap memory (dynamically allocated nodes)

**Tools/techniques:**
- Drawing memory diagrams BEFORE writing pointer manipulation code saves hours of debugging
- Unit testing edge cases (empty list, single node, boundary operations) catches bugs early
- Compiler flags -Wall -Wextra catch potential issues before runtime
- Git commit messages should reference issue/story numbers for traceability

**Most important insight:**
Linked lists LOOK simple (just nodes with pointers) but the devil is in the edge cases. Every insert/delete operation has 4 scenarios to handle: empty list, single element, modifying head, modifying tail. Drawing diagrams for all 4 scenarios BEFORE coding prevents 90% of pointer bugs.

---

### What challenged me this week?

**Technical challenges (pointer bugs, memory leaks, algorithm confusion):**
- Spent 4 hours debugging segfault in deleteAt() - wasn't checking if prev pointer was null before dereferencing (head node has prev == nullptr)
- Memory leak in destructor - initially only deallocated head, didn't traverse list to delete all nodes
- Confusion about when to update head vs tail pointers during deletion operations
- Off-by-one error in insertAt(index) - was inserting AFTER index instead of AT index

**Process challenges (sprint management, estimation, time management):**
- Underestimated complexity of insert/delete operations - estimated 5 points, actually took 8 hours (should've been 8 points)
- Exam week killed momentum even with capacity planning - lost 2 full days
- Didn't break down "implement insert/delete" story small enough - was actually 6 different operations

**How I worked through challenges:**
- For deleteAt() segfault: drew memory diagram of deletion at index 0, immediately saw prev is nullptr for head node
- For memory leak: asked Claude to explain destructor pattern, learned about while-loop traversal for deallocation
- For process: adjusted sprint scope on day 11 when burndown showed I was behind - removed comprehensive testing story

**Challenges still unresolved:**
- Test coverage is 87%, goal was 90% - need to add 3-4 more edge case tests
- Still slow at reading compiler error messages - takes me 5-10 minutes to parse what's wrong
- Not confident about analyzing algorithm complexity yet - can identify O(1) vs O(n) but struggle with more complex analysis

---

### What do I need help with?

**Immediate needs:**
- Strategy for getting from 87% to 90% test coverage - what edge cases am I missing?
- Pattern for writing good unit tests - mine feel random and incomplete

**Conceptual confusion:**
- When is it better to use array-based implementation vs node-based (linked) implementation?
- How do I decide between singly-linked vs doubly-linked list for a problem?
- What's the performance difference in practice (not just Big O theory)?

**Process/workflow questions:**
- How to estimate story points for algorithms I've never implemented before?
- Should I be using GitHub Issues for every user story or is planning doc enough?
- How much documentation is enough? (Currently commenting every function and major code block)

**How can Drew/TAs help?**
- Office hours discussion on algorithm complexity analysis - I get the basics but want deeper understanding
- Example of well-structured test suite for linked list (as reference/template)
- Guidance on test coverage tools for C++ (is gcov the right tool?)

---

### Connection to Career Goals

**My current career goal**: Systems Programmer at game studio (graphics/engine work) or embedded systems developer

**How this week's learning connects:**
Linked lists are EVERYWHERE in systems programming - render queues in graphics engines, memory allocators, event systems, scene graphs. Understanding how to implement them from scratch with manual memory management is essential.

Game engines can't use garbage collection (too slow, unpredictable pauses). Must manually manage memory. This week I learned: how to think about memory ownership, when to allocate/deallocate, how to prevent leaks. This is core game engine work.

Stack data structure connects to undo systems in editors, function call stacks in debuggers, state machines in AI. Not just academic exercise - I'll use these patterns in real projects.

**Skills I'm building that employers value:**
- Manual memory management (critical for C++ game engines and embedded systems)
- Pointer manipulation expertise (differentiates systems programmers from app developers)
- Debugging low-level bugs (segfaults, memory leaks) - this is 50% of systems programming work
- Understanding performance implications of data structure choices (when O(1) vs O(n) matters in practice)
- Professional development process (Git workflow, testing discipline, code review)

**What I want to explore further:**
- Memory pool allocators (efficient allocation for game entities)
- Cache-friendly data structure design (data-oriented design for performance)
- Lock-free data structures for multithreading (concurrent game systems)
- Custom memory allocators (how Unreal Engine does memory management)

---

### Sprint/Project Progress

**This week's sprint progress:**
- Story points completed: 8 (out of 10 committed)
- On track for sprint goal? [x] No (but close - 80% completion)

**Code quality metrics:**
- Test coverage: 87% (goal was 90%)
- Memory leaks found/fixed: 3 major leaks (all resolved, valgrind clean now)
- Compiler warnings resolved: 12 warnings (now compiling with -Wall -Wextra with zero warnings)

**Wins this week:**
- Linked list core functionality is SOLID - all operations work correctly
- Stack implementation built on linked list works perfectly - clean abstraction
- Learned valgrind and can now use it effectively (went from 30 min to understand output → 5 min)
- Front-loaded work before exam successfully - gave me buffer for studying

**Concerns for next week:**
- Moving to hash tables (new data structure) - will estimation be off again?
- Need to improve velocity tracking - actual vs estimated hours was way off
- Test coverage discipline slipping - need to write tests WHILE coding, not after

---

### AI Collaboration Quality

**AI interactions this week**: 23 prompts documented in prompts.txt

**Most valuable AI collaboration:**
Claude session about deleteAt() segfault. I provided specific code + valgrind output + my hypothesis about what was wrong. Claude explained:
1. Why prev->next dereference fails when prev is nullptr (deleting head)
2. Difference between "walked off end" check vs "at boundary" check
3. Pattern for handling first/last node deletions

This wasn't just "here's the fix" - it was "here's WHY your understanding was incomplete." Led to breakthrough understanding of edge case handling.

**How I'm improving my AI prompting:**
- Week 1 prompts: "How do I implement linked list?" (too vague, got generic tutorial)
- Week 5 prompts: "Here's my specific code, here's the exact error, here's what I don't understand about why this happens" (much better responses)
- Learning to iterate: first prompt gets solution, second prompt asks "why does this work?" for understanding
- Asking AI to verify MY analysis instead of just giving answers

**AI collaboration grade (self-assessment)**: [x] Good [ ] Excellent [ ] Needs Improvement

(Not excellent yet because: still sometimes copy-paste without fully understanding, need to verify understanding more consistently, could document failed prompts better)

---

### Commitments for Next Week

**Top 3 priorities:**
1. Research hash functions and collision resolution strategies BEFORE sprint planning (don't learn during sprint like I did with linked lists)
2. Complete sprint retrospective with honest analysis of what went wrong
3. Get test coverage to 90% on linked list before moving to next data structure

**Time I'll dedicate to CSC-249**: 15 hours (Sprint 3 starts, hash table implementation)

**One thing I'll do differently**:
Draw memory diagrams BEFORE writing any pointer manipulation code, not AFTER hitting segfaults. This week I learned: 30 minutes drawing saves 4 hours debugging. Make it habitual.

---

### Reflection Scale (1-5)

Rate your week:

**Understanding of data structures/algorithms**: 1  2  3  [4]  5
(I understand linked lists and stacks well conceptually and can implement them, but still learning optimal patterns and edge case handling)

**Implementation skill (coding)**: 1  2  3  [4]  5
(Code works and is tested, but I'm not fast yet - takes me longer than it should. Will improve with practice.)

**Sprint discipline (PM process)**: 1  2  [3]  4  5
(Daily standups are consistent, but estimation is still inaccurate. Need more sprint cycles to calibrate velocity.)

**Memory management (C++)**: 1  2  [3]  4  5
(Found and fixed leaks, understand valgrind, but still introducing leaks during coding. Not automatic yet.)

**Overall satisfaction**: 1  2  3  [4]  5
(Frustrated by pointer bugs and being behind schedule, but satisfied with learning progress and quality of final implementation)

**What would improve my experience?**
More scaffolding on test-driven development. I'm writing tests after code, which means I'm debugging instead of preventing bugs. Would love example of TDD workflow for data structures: write test for insert, implement insert to pass test, write test for edge case, handle edge case, etc.

Also, more guidance on estimating story points for algorithms. My estimates are consistently 30-40% low.

---

## Why This Matters

Exit tickets are standard practice in modern pedagogy for good reason: **reflection deepens learning.**

In my teaching, exit tickets help me:
1. **Identify common struggles** - If 10 students are confused about pointer arithmetic, I adjust next week
2. **Provide targeted help** - "I need help with X" tells me exactly where to focus office hours
3. **Track individual progress** - I can see your growth week-over-week
4. **Connect theory to practice** - Your career reflections help me bring in relevant examples

For you, exit tickets help:
1. **Consolidate learning** - Writing what you learned solidifies it in memory (meta-cognition)
2. **Identify gaps** - Articulating confusion helps you realize what you don't know
3. **Track progress** - Looking back at week 1 vs week 10 shows how far you've come
4. **Build self-awareness** - Reflecting on your learning process makes you a better learner

**The best students I teach all maintain reflection practices.** Exit tickets formalize this into a weekly habit.

In my own systems programming work, I keep a weekly "what I learned" log about algorithms and data structures. Years later, I look back and see patterns in my growth. This habit started with exit tickets in school.

---

## Common Mistakes to Avoid

- **Mistake**: Vague reflections like "I learned about linked lists"
  **Better approach**: Specific learnings like "I learned that doubly-linked list deletion requires checking if prev/next are null before dereferencing to avoid segfaults." Specific = memorable.

- **Mistake**: Only listing technical concepts, ignoring process/career reflections
  **Better approach**: Balance technical, process, and career insights. "I learned linked lists" plus "I learned to draw diagrams before coding prevents bugs" plus "This connects to game engine work."

- **Mistake**: Not being honest about struggles (trying to look good)
  **Better approach**: Honest struggles help me help you. "I'm lost on pointer arithmetic" is way more useful than "Everything's fine!" when it's not.

- **Mistake**: Treating exit tickets as busywork, rushing through in 2 minutes
  **Better approach**: Genuine reflection takes 10-15 minutes. This is learning time, not administrative time.

- **Mistake**: Not connecting weekly learning to bigger picture
  **Better approach**: Every week, ask: "How does this fit into my understanding of data structures? My career goals?" Build coherence, not just a pile of disconnected facts.

- **Mistake**: Ignoring AI collaboration reflection
  **Better approach**: In CSC-249, AI is part of the learning process. Reflect on: what prompts worked? What didn't? How am I improving at AI collaboration? This is meta-skill development.

---

## Tips from Drew

**Do exit tickets on the same day/time every week.** Friday evening or Sunday evening. Make it a ritual. Consistency builds the habit, and habits build professionals.

**Start with "What challenged me?" not "What did I learn?"** Challenges are more memorable. Once you identify challenges, learnings follow naturally. Pointer bugs that took 4 hours to debug stick in your brain.

**The career connection is the most important part.** Data structures aren't abstract CS theory - they're preparation for real systems programming work. Every week, explicitly connect algorithms to game engines, embedded systems, operating systems, compilers.

**Use your exit ticket to plan next week.** The "commitments for next week" section makes this a forward-looking tool, not just backward reflection.

**Save all your exit tickets.** At the end of the semester, read through all of them. You'll be amazed at your growth. Week 1: "Pointers confuse me." Week 15: "Implementing red-black tree rotations." The progression is your learning story.

**Be honest about the reflection scale.** If memory management is 2/5, tell me why. I can't fix problems I don't know about. Low self-assessment with specific reasons helps me help you.

**When you write "I need help with X," actually come to office hours.** Exit tickets identify needs. Office hours address them. Don't just document struggles - get help.

**The "most important insight" is your TL;DR.** If you could only remember one thing from this week in 5 years, what would it be? That's your most important insight. For me, it was: "Drawing diagrams prevents pointer bugs."

**Code quality metrics tell a story over time.** Track test coverage, memory leaks, compiler warnings week-over-week. Are you improving? Getting worse? Stagnating? Data reveals trends.

---

## Integration with CSC-249

Exit tickets are part of your participation grade in CSC-249 (4% of final grade).

**Grading criteria:**
- **Completion** (50%): Did you submit all weekly exit tickets?
- **Specificity** (25%): Are reflections specific and detailed, or vague?
- **Honesty** (25%): Are you genuinely reflecting, or just checking a box?

I don't grade on "correct" answers - there are no correct answers in reflection. I grade on thoughtfulness and consistency.

**What I'm looking for:**
- Specific technical learnings with examples (not "learned linked lists" but "learned null pointer checks")
- Honest identification of challenges (pointer bugs, memory leaks, estimation struggles)
- Career connections that show you're thinking about professional context
- Requests for help (so I can support you)
- Week-over-week growth in sophistication of understanding
- AI collaboration reflection (quality of prompts, understanding verification)

**What exit tickets do for you:**
- Help you consolidate weekly learning (better retention of data structures concepts)
- Give you a record of your growth to reference in interviews ("Tell me about a time you debugged a difficult memory leak")
- Build the habit of reflection (critical for senior engineers who lead teams)
- Create accountability for sprint progress
- Ensure I can support you when you're struggling with algorithms

**Students who skip exit tickets:**
- Struggle more because I don't know where they're stuck
- Retain less (no weekly consolidation of data structures concepts)
- Can't articulate their learning in final retrospective
- Miss the meta-skill of reflective practice

**Students who take exit tickets seriously:**
- Progress faster (I adjust course to their needs - more pointer examples, more memory debugging help)
- Build stronger portfolios (they track learnings systematically - "I learned X data structures with Y complexity")
- Write excellent final retrospectives (they have 15 weeks of reflection data)
- Develop professional self-awareness about their engineering process

**Think of exit tickets as your weekly 1:1 with me.** I read every single one. I adjust my teaching based on them (if 5 students are confused about tree rotations, I spend more time on it). I reach out when I see struggles (consistent 2/5 on memory management → office hours invitation).

This is how I scale personalized support in a class of 30+ students.

**Take them seriously. They're not busywork - they're your learning tool.**

---

## CSC-249 Specific Exit Ticket Considerations

**Memory management reflection should be explicit.** Don't just note "had memory leaks" - note HOW MANY, what tools found them, how you fixed them, what patterns prevent them. Memory discipline improves with tracking.

**Pointer bug patterns repeat.** If you had null pointer dereference this week and last week, that's a pattern. Reflection should include: "Same class of bug twice → I need to draw diagrams BEFORE coding, not debug AFTER segfaults."

**Algorithm complexity understanding evolves.** Week 1: "I don't understand Big O." Week 8: "I can identify O(1) vs O(n) vs O(log n) and explain why." Week 15: "I can derive recurrence relations and solve them." Track this evolution.

**Test coverage metrics reveal discipline.** If coverage is dropping week-over-week (92% → 87% → 81%), you're cutting corners. Reflection should catch this: "Why is coverage dropping? Because I'm writing tests after code instead of during. Fix: TDD next week."

**AI prompt quality should improve.** Compare prompts from Week 1 vs Week 10. Week 1: "How do I make linked list?" Week 10: "Here's my red-black tree rotation code, here's the specific violation, here's what I don't understand about why this happens." Evolution visible.

**Drawing diagrams effectiveness should be measured.** Reflection: "This week I drew diagrams before coding deleteAt() → zero pointer bugs. Last week I coded first → 4 hours debugging. Data says: diagram first works."

**Sprint velocity calibration happens through reflection.** "Estimated 5 points, took 8 hours, should've been 8 points. Next sprint: similar algorithm complexity gets 8 point estimate." Estimation improves with reflection.

**Code review and PR feedback should be referenced.** "This week's PR got feedback: 'tests are good but need more edge cases.' Next week: brainstorm edge cases BEFORE writing tests, not after PR feedback."
