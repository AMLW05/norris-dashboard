# Daily Standup Template

**Purpose**: Maintain daily momentum on data structures implementation, identify blockers early, and stay accountable to your sprint commitment.
**When to Use**: Daily (or every work session if not coding daily)
**Time to Complete**: 5 minutes

---

## Instructions

1. **Schedule a consistent time** - Same time every day (or before each work session)
2. **Answer three questions** - Keep answers brief and specific to your data structure work
3. **Focus on progress toward sprint goal** - Not every task you did, just sprint-related work
4. **Identify blockers immediately** - Pointer bugs, memory leaks, algorithm confusion don't fix themselves
5. **Log your standup** - Keep a record so you can track patterns in your debugging process

Even when working solo, this practice keeps you honest about progress and helps you catch problems early (like segfaults that indicate deeper design issues).

---

## Template

### Daily Standup - [Date]

**Sprint**: [Sprint Number] | **Sprint Goal**: [One sentence]
**Data Structure Focus**: [Linked List | Tree | Hash Table | Graph]

#### What did I do since last standup?
-
-
-

**Story points completed**: ___
**Lines of code written**: ___ (optional metric)

#### What will I do before next standup?
-
-
-

**Story points planned**: ___

#### What blockers am I facing?

**Technical blockers:**
-
-

**Conceptual blockers:**
-
-

**If blocked, what help do I need?**


**Today's focus**: [One sentence - what's the most important thing to accomplish?]

---

### Progress Tracking

**Sprint Progress:**
- Total committed story points: ___
- Completed story points: ___
- Remaining story points: ___
- Days left in sprint: ___

**Am I on track?** [ ] Yes [ ] No [ ] At risk

**If not on track, what will I adjust?**


---

### Code Quality Check
**Today's code health:**
- [ ] All tests passing
- [ ] No compiler warnings
- [ ] No memory leaks (ran valgrind/memory profiler)
- [ ] Code committed to version control
- [ ] AI prompts documented

**Technical debt identified:**
-

---

## Example (Filled)

### Daily Standup - Feb 18, 2026

**Sprint**: 2 | **Sprint Goal**: Implement fully functional doubly-linked list with comprehensive test coverage
**Data Structure Focus**: Doubly-Linked List

#### What did I do since last standup?
- Implemented node class with data, next, prev pointers (tested in isolation)
- Created insertFront() and insertBack() methods
- Wrote 12 unit tests covering insert operations (all passing)
- Fixed off-by-one error in insertAt(index) method after debugging for 45 minutes

**Story points completed**: 3 (completed US-004: Node class)
**Lines of code written**: ~150 lines (including tests)

#### What will I do before next standup?
- Implement deleteFront() and deleteBack() methods
- Handle edge case: deleting from single-element list
- Write unit tests for delete operations
- Start insertAt(index) for arbitrary position insertion

**Story points planned**: Make progress on US-005 (won't complete, but will advance)

#### What blockers am I facing?

**Technical blockers:**
- Intermittent segfault when deleting last element - suspect dangling pointer
- Valgrind shows "invalid read" on line 47 but I don't see the issue yet

**Conceptual blockers:**
- Confused about when to update head vs tail pointers during deletion
- Not sure how to handle edge case: delete only element in list (head and tail both NULL?)

**If blocked, what help do I need?**
Will draw memory diagrams for deletion edge cases. If still stuck after 1 hour, will post in Discord with code snippet and valgrind output. May ask AI to review pointer logic.

**Today's focus**: Fix the segfault in delete operation - won't move forward until memory is safe.

---

### Progress Tracking

**Sprint Progress:**
- Total committed story points: 10
- Completed story points: 3
- Remaining story points: 7
- Days left in sprint: 10

**Am I on track?** [x] Yes [ ] No [ ] At risk

**If not on track, what will I adjust?**
Slightly ahead - completed node class faster than expected (estimated 2 days, took 1.5 days). Exam is Feb 22, so need to stay ahead to have buffer for studying.

---

### Code Quality Check
**Today's code health:**
- [x] All tests passing (12/12 tests green)
- [x] No compiler warnings (compiled with -Wall -Wextra)
- [ ] No memory leaks (BLOCKER: segfault prevents full valgrind run)
- [x] Code committed to version control (3 commits today)
- [x] AI prompts documented (logged conversation about pointer arithmetic)

**Technical debt identified:**
- Tests are getting repetitive - need to refactor test helper functions
- Node class could use better documentation (add examples to header comments)

---

## Example Async Standup (For Solo Developers)

Many students ask: "Why do a standup if I'm working alone on data structures?"

Because **you need to talk to yourself honestly about progress and blockers.**

Here's how I do async standups when implementing algorithms solo:

### Morning Standup (Before I Start Coding)
- Review yesterday's standup
- Decide today's focus (one clear outcome - one function working)
- Identify potential blockers BEFORE I hit them (do I understand the algorithm? do I need to research?)

### Evening Standup (After Work Session)
- Log what I actually completed (not what I planned, what I DID)
- Be honest about velocity (if insertAt() took 3 hours and I estimated 1 hour, note that)
- Adjust tomorrow's plan if needed
- Document any AI conversations that helped me understand something

**The magic is in the daily discipline.** It's like brushing your teeth - skipping one day doesn't matter, but skipping a week creates problems (or in this case, you lose track of progress and realize on day 12 of a 14-day sprint that you're hopelessly behind).

---

## Why This Matters

Daily standups are the heartbeat of agile teams at every major tech company.

At Google, we did standups at 9:30am every day. Three questions, 15 minutes max, whole team. Why?

1. **Blockers surface immediately** - Not three days later when segfault has derailed entire sprint
2. **Coordination happens naturally** - "Oh, you're implementing BST insert? I need that for my balanced tree work."
3. **Accountability is built-in** - When you say "I'll implement deleteAt() today," you're committing
4. **Patterns become visible** - If you're blocked three days in a row on pointer arithmetic, something's wrong with your approach

The best part about standups: **They're short.** This isn't a status meeting. No discussions, no problem-solving, no deep dives. Just three questions, and you're done.

Solo developers who do daily standups ship faster than teams without standups. It's not about the ceremony - it's about the discipline of daily reflection.

---

## Common Mistakes to Avoid

- **Mistake**: Writing vague updates like "worked on linked list"
  **Better approach**: Specific updates like "implemented deleteFront(), discovered segfault when deleting single element, wrote 8 unit tests (6 passing, 2 failing)." Be concrete.

- **Mistake**: Only doing standups when you feel like it
  **Better approach**: Daily discipline. Even if you didn't work yesterday, do a standup noting that. The consistency matters more than the content.

- **Mistake**: Not identifying blockers because "I should figure this out myself"
  **Better approach**: A blocker is anything slowing you down for >2 hours. Segfaults, algorithm confusion, pointer bugs - note them immediately. Identifying blockers isn't weakness - it's self-awareness.

- **Mistake**: Planning too many tasks for "before next standup"
  **Better approach**: If you're doing daily standups, you only have a few hours. One primary task (implement one function), maybe one secondary (write tests). Be realistic.

- **Mistake**: Letting standups turn into 30-minute reflection sessions
  **Better approach**: 5 minutes max. This is a quick check-in, not a journal entry. Save deep reflection for sprint retrospectives.

- **Mistake**: Not running memory leak checks until "code is done"
  **Better approach**: Run valgrind (C++) or memory profiler (Python) EVERY DAY. Memory bugs compound. Catch them early when you know exactly what code you wrote that day.

---

## Tips from Drew

**Do your standup BEFORE you start coding, not after.** It's a planning tool, not a reporting tool. Morning standup sets your intention for the day: "Today I will implement and test deleteAt()" - that's your contract with yourself.

**If you can't articulate what you'll do before next standup, you're not ready to code.** That's fine! The standup just revealed that you need to do more algorithm research or draw more memory diagrams. Better to realize this now than after wasting 3 hours.

**The "blockers" question is the most important one.** Most students leave this blank because they don't want to admit they're stuck. But blockers are NORMAL! Every developer faces blockers daily. The difference is: good developers identify them early and ask for help. Bad developers stay blocked for days.

**Track your "story points completed" daily.** This is how you build accurate velocity data. If you're 5 days into a 10-day sprint and you've only completed 2 of 10 points, you're not on track. Adjust now, not on day 9.

**Use "today's focus" to fight scope creep.** It's easy to get distracted by interesting tangents ("oh, I should optimize this traversal, oh I should add this feature"). One focus keeps you on track toward sprint goal.

**Pattern to watch for: Three blockers in a row on the same issue.** If you're stuck on pointer arithmetic for three days, stop trying to figure it out alone. That's when you come to office hours, post detailed question in Discord, or schedule pairing session. Blockers don't age like wine.

**Memory safety is non-negotiable in daily checklist.** In CSC-249, you can't skip memory leak checks. Segfaults that "only sometimes happen" indicate deeper issues. Don't mark code as "working" until valgrind is clean.

---

## Integration with CSC-249

In CSC-249, your daily standup log becomes evidence of your process for project grading.

I don't just grade your final data structure implementation - I grade how you got there. Consistent daily standups show:
- You planned your work intentionally
- You identified and addressed blockers (segfaults, algorithm confusion, memory leaks)
- You tracked progress against your sprint goal
- You adapted when things didn't go as planned (they never do with systems programming)

**Students who maintain daily standups:**
- Finish data structure projects 2-3 weeks earlier on average
- Identify memory bugs before they cascade into unfixable messes
- Ask for help when stuck (instead of being stuck for days)
- Have clear evidence of their learning process for portfolio and retrospectives

**Students who skip standups:**
- Lose track of sprint progress until it's too late
- Waste time on low-priority tasks (premature optimization)
- Get blocked without realizing it (spend 3 days on a problem that 10-minute office hours conversation would solve)
- Struggle to write project retrospectives (because they didn't track daily)

For your final integration project, I'll ask you to submit your standup log. It's part of your process documentation. The students with consistent standups get higher process grades - because they demonstrably followed professional engineering practices.

**Think of standups as version control for your brain.** Git tracks your code commits. Standups track your decision commits. Both matter in systems programming.

---

## CSC-249 Specific Standup Considerations

**Memory leak tracking deserves dedicated attention.** In daily standup, always include: "Ran valgrind today?" and "Any memory errors detected?" Memory bugs are like credit card debt - compound interest kills you.

**Pointer/reference bugs need specific descriptions.** Not: "linked list broken." Yes: "Segfault on line 47 during deleteAt(3), suspect prev pointer not updated when deleting middle node."

**Recursion depth tracking for tree/graph algorithms.** When implementing recursive traversals, note in standup: "Stack overflow on trees with depth > 100, need to investigate." Recursive algorithms have hidden complexity.

**Big O analysis should be daily check-in.** Not: "I'll analyze complexity later." Yes: "Implemented insert today, confirmed it's O(1) for linked list front insertion by analyzing operations."

**Test coverage percentage is a useful metric.** "Wrote 8 tests today, coverage now 73%" gives you trajectory. Aim for 90%+ coverage on data structures - they're foundational code.

**AI collaboration time should be tracked.** "Spent 45 minutes with Claude understanding why my BST rotation wasn't working, documented 3-prompt conversation in prompts.txt." AI collaboration is PART of the work in CSC-249, not separate from it.

**Drawing diagrams counts as work.** "Spent 30 minutes drawing memory diagrams for deletion edge cases - no code written but now I understand the algorithm." Diagram time is algorithm understanding time.

**Compilation warnings are blockers.** If you have compiler warnings, you have blockers. -Wall -Wextra should produce zero warnings. Warnings are future segfaults.
