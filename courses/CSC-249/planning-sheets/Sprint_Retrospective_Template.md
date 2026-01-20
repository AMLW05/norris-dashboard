# Sprint Retrospective Template

**Purpose**: Reflect on your data structures sprint - what went well, what didn't, identify improvements for better algorithm implementation and learning.
**When to Use**: At the end of each sprint (after sprint review, before next sprint planning)
**Time to Complete**: 30-45 minutes

---

## Instructions

1. **Review the entire sprint** - Look at your sprint planning doc, daily standups, and completed code
2. **Be honest** - This only works if you're truthful about what didn't go well (pointer bugs, misjudged complexity, poor estimates)
3. **Focus on process, not just outcomes** - Even if you implemented the data structure perfectly, could the process improve?
4. **Create actionable improvements** - Vague reflections don't change behavior ("understand pointers better" vs "draw memory diagram before writing pointer manipulation code")
5. **Update your velocity** - Calculate actual story points completed for future planning
6. **Celebrate wins** - Acknowledge what went well before diving into problems

This is your most important learning tool for mastering data structures and algorithms. Teams that skip retrospectives repeat the same mistakes forever.

---

## Template

### Sprint Retrospective - Sprint [Number]

**Sprint Duration**: [Start Date] to [End Date]
**Sprint Goal**: [What you committed to accomplish]
**Data Structure/Algorithm Focus**: [What you implemented]

---

### Sprint Metrics

**Commitment:**
- Planned story points: ___
- Completed story points: ___
- Velocity this sprint: ___

**Time:**
- Estimated hours: ___
- Actual hours: ___
- Efficiency (points per hour): ___

**Code Quality:**
- Lines of code written: ___
- Test coverage achieved: ___%
- Memory leaks found and fixed: ___
- Compiler warnings resolved: ___

**Goal Achievement:**
- [ ] Sprint goal fully achieved
- [ ] Sprint goal partially achieved
- [ ] Sprint goal not achieved

---

### Start / Stop / Continue

**START doing (new practices to adopt):**
-
-
-

**STOP doing (practices that aren't working):**
-
-
-

**CONTINUE doing (practices that are working well):**
-
-
-

---

### What Went Well?

**Technical wins:**
-
-

**Process wins:**
-
-

**Personal/learning wins:**
-
-

---

### What Didn't Go Well?

**Technical challenges:**
-
-

**Process issues:**
-
-

**Personal/learning struggles:**
-
-

---

### What Will We Change?

**For next sprint, I will:**

1. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

2. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

3. **Change**: [Specific improvement]
   **Why**: [Root cause this addresses]
   **How**: [Concrete action]
   **Success metric**: [How I'll know it worked]

---

### Velocity Analysis

**Recent velocity trend:**
- Sprint 1: ___ points
- Sprint 2: ___ points
- Sprint 3: ___ points
- Sprint 4: ___ points

**Average velocity (last 3 sprints)**: ___ points

**What affected velocity this sprint?**
-
-

**Velocity prediction for next sprint**: ___ points

**Confidence level**: [ ] High [ ] Medium [ ] Low

---

### Blocker Analysis

**What blocked me this sprint?**

| Blocker | Days Blocked | How Resolved | Prevention Strategy |
|---------|--------------|--------------|---------------------|
| | | | |
| | | | |

---

### Sprint Goal Reflection

**Did we achieve the sprint goal? Why or why not?**


**If we didn't achieve the goal, what was the root cause?**
- [ ] Overcommitted on story points
- [ ] Technical complexity underestimated (algorithm harder than expected)
- [ ] Unexpected blockers (memory bugs, pointer issues)
- [ ] External factors (exams, life, etc.)
- [ ] Poor task breakdown (didn't see hidden complexity)
- [ ] Insufficient algorithm understanding before coding
- [ ] Other: ___________

---

### Key Learnings

**Technical learnings (data structures/algorithms):**
-
-

**Process learnings (sprint management, AI collaboration):**
-
-

**About myself as a developer:**
-
-

---

### AI Collaboration Reflection

**AI tools used this sprint:**
- [ ] Claude
- [ ] ChatGPT
- [ ] GitHub Copilot
- [ ] Other: ___________

**Quality of AI collaboration:**
- Number of prompts logged: ___
- Most helpful AI interaction: ___
- Least helpful AI interaction: ___

**What I learned about working with AI:**
-
-

**How I'll improve AI collaboration next sprint:**
-

---

### Action Items for Next Sprint

| Action Item | Owner | Due By | Priority |
|-------------|-------|--------|----------|
| | Me | Before sprint planning | [ ] High [ ] Medium [ ] Low |
| | Me | | [ ] High [ ] Medium [ ] Low |
| | Me | | [ ] High [ ] Medium [ ] Low |

---

## Example (Filled)

### Sprint Retrospective - Sprint 2

**Sprint Duration**: Feb 15 - Feb 28
**Sprint Goal**: Implement fully functional doubly-linked list with comprehensive test coverage and build stack using the linked list
**Data Structure/Algorithm Focus**: Doubly-Linked Lists & Stacks

---

### Sprint Metrics

**Commitment:**
- Planned story points: 10 (reduced from 12 due to exam)
- Completed story points: 8
- Velocity this sprint: 8

**Time:**
- Estimated hours: 18
- Actual hours: 22
- Efficiency (points per hour): 0.36

**Code Quality:**
- Lines of code written: 487 (including tests)
- Test coverage achieved: 87%
- Memory leaks found and fixed: 3 major leaks
- Compiler warnings resolved: 12 warnings

**Goal Achievement:**
- [ ] Sprint goal fully achieved
- [x] Sprint goal partially achieved
- [ ] Sprint goal not achieved

---

### Start / Stop / Continue

**START doing (new practices to adopt):**
- Draw memory diagrams BEFORE writing pointer manipulation code (not after segfault)
- Run valgrind after every function implementation, not at end of day
- Write tests for edge cases first (empty list, single element) before normal cases
- Use debugger to step through pointer operations instead of printf debugging

**STOP doing (practices that aren't working):**
- Stop assuming pointer code is correct without testing immediately
- Stop working late nights before exams (reduces focus, increases bugs)
- Stop committing to aggressive story point totals to impress myself
- Stop copy-pasting AI-generated code without understanding every line

**CONTINUE doing (practices that are working well):**
- Daily standups - caught memory leak pattern early
- Drawing diagrams - visual understanding of linked structures is essential
- Asking for help in Discord when stuck for >2 hours (got unstuck on deleteAt() in 20 minutes)
- Documenting AI prompts - seeing my learning progression is valuable

---

### What Went Well?

**Technical wins:**
- Linked list implementation is solid - all core operations working correctly
- Stack built on linked list works perfectly - push/pop/peek all O(1)
- Learned valgrind and found 3 memory leaks before they became disasters
- Test coverage is 87% - caught several off-by-one errors

**Process wins:**
- Daily standups kept me honest about progress and velocity
- Identified deleteAt() blocker early, got help, unblocked in same day
- Front-loaded work before exam (completed 5 points before Feb 20)
- AI collaboration improved - learned to ask better questions about pointer behavior

**Personal/learning wins:**
- Finally understand the difference between stack and heap memory
- Comfortable with pointer dereferencing and address-of operator
- Got faster at reading valgrind output (from 30 min to 5 min to understand error)
- Realized I learn best by drawing memory diagrams, not just reading code

---

### What Didn't Go Well?

**Technical challenges:**
- Spent 4 hours debugging single segfault in deleteAt() - prev pointer not updated correctly
- Underestimated complexity of handling edge cases (empty list, single element, invalid index)
- Memory leak in destructor took 2 hours to find (wasn't deallocating entire list)
- Test coverage goal was 90% but only achieved 87%

**Process issues:**
- Lost 2 full days to exam, even with planned capacity reduction
- Didn't break down US-005 (insert/delete operations) into small enough tasks - it was actually 3 stories
- Completed only 8 of 10 committed points (80% completion)
- Waited too long to ask for help on deleteAt() bug (struggled for 3 hours before posting to Discord)

**Personal/learning struggles:**
- Got frustrated when pointers didn't behave as expected - wasted time with trial-and-error instead of systematic debugging
- Studied algorithm theory during sprint instead of before sprint (should've been prep work)
- Tired in second week of sprint, affected productivity and bug introduction rate
- Overconfident about "simple" linked list - complexity is in the edge cases

---

### What Will We Change?

**For next sprint, I will:**

1. **Change**: Draw complete memory diagrams before writing any pointer manipulation code
   **Why**: Spent 4 hours debugging deleteAt() that would've taken 30 minutes if I'd drawn diagram first
   **How**: For every function that manipulates pointers (insert, delete, reverse), draw before/after memory state on paper
   **Success metric**: Zero pointer bugs that require >1 hour to debug

2. **Change**: Break down stories with "implement X operations" into separate sub-stories
   **Why**: US-005 "implement insert/delete operations" was actually 6 different operations, too large to estimate accurately
   **How**: Next sprint (hash table), break "implement collision resolution" into: (1) implement chaining, (2) implement open addressing, (3) implement rehashing, (4) test each strategy
   **Success metric**: No story larger than 5 points in next sprint planning

3. **Change**: Run valgrind after implementing each function, not at end of day
   **Why**: Memory leak in destructor accumulated over several functions, hard to pinpoint source
   **How**: Add to definition of done for each function: "valgrind shows 0 leaks for this function in isolation"
   **Success metric**: Find and fix memory leaks within 30 minutes of introduction, not hours later

---

### Velocity Analysis

**Recent velocity trend:**
- Sprint 1: 10 points (basic ADTs - stack, queue with arrays)
- Sprint 2: 8 points (linked lists - more complex due to pointers)

**Average velocity (last 3 sprints)**: 9 points (only have 2 sprints so far)

**What affected velocity this sprint?**
- Exam on Feb 22 consumed 2 full days even with planning
- Pointer debugging took longer than anticipated (never worked with manual memory management before)
- Underestimated edge case complexity (empty list, single element, boundaries)
- Learning valgrind took 2 hours (one-time cost, will be faster next sprint)

**Velocity prediction for next sprint**: 9 points (no exams, now comfortable with pointers and memory tools)

**Confidence level**: [ ] High [x] Medium [ ] Low

---

### Blocker Analysis

**What blocked me this sprint?**

| Blocker | Days Blocked | How Resolved | Prevention Strategy |
|---------|--------------|--------------|---------------------|
| Segfault in deleteAt() due to prev pointer not updated | 0.5 days | Drew memory diagram, posted to Discord, got help | Draw diagrams BEFORE writing pointer code |
| Memory leak in destructor - wasn't iterating through list | 0.3 days | Valgrind pinpointed line, learned about while loop pattern for deallocation | Run valgrind after each function, not end of day |
| Confusion about when head vs tail pointers update | 0.2 days | Asked Claude to explain with examples, drew 5 scenarios | Study algorithm before coding, don't code and learn simultaneously |
| Exam on Feb 22 | 2 days | Studied, took exam, returned to sprint | Can't prevent exams, but capacity planning worked |

---

### Sprint Goal Reflection

**Did we achieve the sprint goal? Why or why not?**

Partially achieved. Doubly-linked list is fully implemented and tested (87% coverage, close to 90% goal). Stack built on linked list works perfectly. Did NOT complete comprehensive test coverage story (US-007) - ran out of time. But core technical goal (working linked list + stack) is met.

**If we didn't achieve the goal, what was the root cause?**
- [ ] Overcommitted on story points
- [x] Technical complexity underestimated (pointer edge cases harder than I thought)
- [ ] Unexpected blockers
- [x] External factors (exam took 2 days as planned, but still impacted momentum)
- [x] Poor task breakdown (US-005 was too large, should've been 3 stories)
- [ ] Insufficient algorithm understanding before coding
- [ ] Other: ___________

---

### Key Learnings

**Technical learnings (data structures/algorithms):**
- Linked lists look simple but pointer manipulation is SUBTLE - null checks everywhere
- Edge cases are where complexity hides: empty list, single element, deleting head/tail
- Stack implementation on linked list is beautiful - O(1) for all operations by restricting to front operations
- Valgrind is essential tool for C++ - memory bugs are invisible without it
- Drawing memory diagrams reveals bugs before they happen

**Process learnings (sprint management, AI collaboration):**
- Daily standups work - caught memory leak pattern on day 3 instead of day 10
- Story point estimation for algorithms is different than apps - more uncertainty
- Front-loading sprint before exam was correct decision - gave me buffer
- AI is incredible for explaining "why does this segfault" when you provide specific code and error
- Asking for help after 2 hours of being stuck is the right threshold - saved 3+ hours

**About myself as a developer:**
- I learn best by drawing before coding, not coding then debugging
- I get frustrated when things don't work immediately - need to embrace debugging as part of process
- Morning coding sessions (2-3 hours) are more productive than late night cramming
- I'm better at algorithmic thinking than pointer arithmetic (so far)
- I need to trust the process: diagram → code → test → valgrind → commit

---

### AI Collaboration Reflection

**AI tools used this sprint:**
- [x] Claude
- [ ] ChatGPT
- [ ] GitHub Copilot
- [ ] Other: ___________

**Quality of AI collaboration:**
- Number of prompts logged: 23 prompts in prompts.txt
- Most helpful AI interaction: Asked "why does deleteAt() segfault with this specific code" - Claude explained prev pointer wasn't being updated, gave example fix
- Least helpful AI interaction: Asked "how do I implement linked list" - too vague, got generic tutorial when I needed specific guidance

**What I learned about working with AI:**
- Specific questions with code snippets get better answers than general questions
- AI is excellent at explaining "why this code fails" when given specific error
- I need to understand AI-generated code before using it - copy-paste led to bugs
- Prompts are an iterative conversation - first prompt rarely gives perfect answer
- Documenting prompts helps me see my learning progression

**How I'll improve AI collaboration next sprint:**
- Ask specific questions with code + error messages, not vague "how do I do X"
- Use AI to verify my understanding AFTER I've tried, not BEFORE
- Request explanations with memory diagrams, not just code
- Document failed prompts too (shows what doesn't work)

---

### Action Items for Next Sprint

| Action Item | Owner | Due By | Priority |
|-------------|-------|--------|----------|
| Research hash function design patterns and collision resolution strategies | Me | Before Sprint 3 planning | [x] High |
| Create "memory diagram template" for pointer operations to use consistently | Me | Before Sprint 3 day 1 | [x] High |
| Break Sprint 3 stories into sub-stories (no story >5 points) | Me | During Sprint 3 planning | [x] High |
| Write blog post about linked list learnings for portfolio | Me | Within 1 week | [ ] Medium |

---

## Why This Matters

Sprint retrospectives are how professional teams get better over time.

At Spotify, we did retrospectives every two weeks. At first, I thought: "Why spend 30 minutes talking about the past? Let's just start the next sprint."

Then I realized: **Teams that skip retrospectives keep making the same mistakes.**

Here's what retrospectives do:
1. **Surface systemic issues** - One pointer bug is bad luck. Three pointer bugs is a pattern (not drawing diagrams first).
2. **Improve estimation** - You learn what slows you down (memory debugging, edge cases) and adjust future planning
3. **Build self-awareness** - Honest reflection creates understanding of your strengths/weaknesses
4. **Create accountability** - Action items from retros actually get done (unlike vague "I should learn pointers better")

The engineering teams I've seen succeed all do retrospectives religiously. The teams that fail? They're always "too busy" to reflect. So they stay busy doing the wrong things.

**A 30-minute retrospective can save you 10 hours of repeated mistakes in the next sprint.**

---

## Common Mistakes to Avoid

- **Mistake**: Only focusing on what went wrong, ignoring what went well
  **Better approach**: Start with wins. Celebrating successes builds momentum. THEN dig into problems. A retro that's all negative kills motivation.

- **Mistake**: Vague improvement plans like "understand pointers better" or "debug faster"
  **Better approach**: Specific actions with success metrics. "Draw memory diagrams before writing pointer code, with success metric: zero pointer bugs requiring >1 hour to debug" is actionable.

- **Mistake**: Blaming external factors ("I failed because of the exam")
  **Better approach**: Focus on what you control. "I didn't adjust capacity enough for the exam" is empowering. Blaming the exam isn't.

- **Mistake**: Creating 15 action items that you'll never complete
  **Better approach**: 2-3 high-impact changes MAX. Better to nail two improvements than to forget ten.

- **Mistake**: Skipping retrospectives when sprints go well
  **Better approach**: Good sprints need retros too! What made it work? How do you repeat that success? Retros aren't punishment - they're learning.

- **Mistake**: Not analyzing AI collaboration effectiveness
  **Better approach**: In CSC-249, AI collaboration is REQUIRED. Retro should include: what AI interactions helped? What didn't? How can I ask better questions? AI effectiveness improves with reflection.

---

## Tips from Drew

**The "5 Whys" technique is your friend.** When something goes wrong, ask "why?" five times to find the root cause. Example:
- Linked list deleteAt() segfaulted (why?)
- Because prev pointer was null (why?)
- Because I didn't update it when deleting middle node (why?)
- Because I didn't consider that case when coding (why?)
- Because I coded without drawing memory diagram first (ROOT CAUSE: coding before diagramming)

**Velocity trends tell a story.** If your velocity is all over the place (10, 4, 15, 7), your estimation is off OR your capacity planning is inconsistent. Aim for relatively stable velocity - that's predictability. Algorithm velocity might be lower than app velocity (8 points vs 15 points) - that's normal.

**The "what will we change" section is the only one that matters.** Everything else is context. If you walk away from a retro without 2-3 concrete action items, you wasted 30 minutes.

**Track your action items from sprint to sprint.** Did you actually draw memory diagrams before coding (like you said you would)? If not, why? If you keep creating action items you don't complete, your retros aren't honest enough.

**Don't compare your velocity to others.** Some students complete 15 points per sprint in CSC-249, some complete 7. Both are fine. What matters is: Are YOU getting better over time? Is YOUR velocity becoming predictable? Are YOU learning from mistakes?

**Failed sprint goals are learning opportunities.** My best retros came from sprints where everything went wrong (segfaults everywhere, memory leaks cascading, tests failing mysteriously). Those failures taught me more than my successes. Don't fear failure - fear not learning from failure.

**Code quality metrics matter in systems programming.** In CSC-249, track: test coverage %, memory leaks found/fixed, compiler warnings, lines of code. These metrics reveal quality trends. If test coverage is dropping sprint-over-sprint, that's a problem.

---

## Integration with CSC-249

In CSC-249, your sprint retrospectives are graded as part of your project documentation.

I'm looking for:
- **Honest reflection** - Did you critically analyze your process AND technical work?
- **Actionable improvements** - Are your action items specific and measurable?
- **Velocity tracking** - Do you understand your capacity and trends?
- **Root cause analysis** - Did you dig deeper than surface-level problems?
- **Learning evidence** - Can you articulate what you learned technically and professionally?
- **AI collaboration reflection** - How effective was your AI usage? How will you improve?

**Students with strong retrospectives:**
- Improve their velocity and estimation accuracy over the semester
- Stop repeating the same bugs (memory leaks, pointer errors, off-by-one)
- Ship higher-quality final projects (better process = better outcomes)
- Write exceptional project postmortems (they tracked learnings all semester)
- Get better at data structures implementation with each sprint

**Students who skip or phone in retrospectives:**
- Repeat the same mistakes sprint after sprint (same memory leaks, same pointer bugs)
- Have inconsistent velocity (can't predict capacity)
- Struggle with final project documentation
- Miss the whole point of agile process

Your retro log is evidence that you're not just coding - you're becoming a professional engineer who reflects, adapts, and improves.

**The best systems programmers I know are the best learners. Retrospectives are how you learn from experience instead of just accumulating it.**

---

## CSC-249 Specific Retrospective Considerations

**Memory management patterns deserve dedicated analysis.** Track across sprints: How many memory leaks this sprint vs last? Are you catching them earlier (during coding) or later (during integration)? Memory discipline improves with tracking.

**Pointer bug root causes often repeat.** If you had 3 pointer bugs this sprint, find the pattern. Was it: not checking for null? Off-by-one in loops? Not updating prev/next pointers? Same root cause means systematic fix.

**Test coverage trends reveal discipline.** Sprint 1: 87%, Sprint 2: 73%, Sprint 3: 65% = you're cutting corners. Sprint 1: 75%, Sprint 2: 85%, Sprint 3: 92% = you're improving process.

**Recursion understanding is a milestone.** First sprint with recursive algorithm (tree traversal, graph DFS) will be slower. Second recursive algorithm should be faster. Track "time to understand recursive structure" sprint-over-sprint.

**Algorithm complexity estimation accuracy improves.** Track: Did you correctly predict O(log n) vs O(n) vs O(n²) before implementation? How often were you wrong? You should get better at predicting complexity.

**Drawing diagrams effectiveness should be measured.** Retro should ask: Did diagram-before-code prevent bugs? How many bugs would've been caught by diagrams? Adjust behavior based on data.

**AI prompt quality evolution is meta-learning.** Compare prompts from Sprint 1 vs Sprint 4. Are you asking better questions? Providing more context? Getting better answers faster? AI collaboration improves with reflection.
