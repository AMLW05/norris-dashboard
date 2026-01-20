# Burndown Chart Template

**Purpose**: Visualize daily progress toward sprint goal and identify if you're on track to complete your data structure implementation.
**When to Use**: Update daily during the sprint, review at standup time
**Time to Complete**: 2 minutes per day to update

---

## Instructions

1. **Set up your chart at sprint start** - Record total committed story points and sprint duration
2. **Update daily** - Log remaining story points at the end of each work day
3. **Calculate ideal burndown** - This is your target line (linear decrease)
4. **Compare actual vs ideal** - Are you above or below the ideal line?
5. **Adjust mid-sprint if needed** - If you're way off track by midpoint, re-scope

This chart is your early warning system. It shows you in real-time if you're going to complete your linked list, hash table, or tree implementation.

---

## Template

### Burndown Chart - Sprint [Number]

**Sprint Goal**: [One sentence]
**Data Structure Focus**: [Linked List | Hash Table | Tree | Graph]
**Sprint Duration**: [Start Date] to [End Date] ([X] days)
**Total Committed Story Points**: ___

---

### Daily Tracking Table

| Day | Date | Remaining Story Points | Stories Completed | Notes |
|-----|------|------------------------|-------------------|-------|
| 0 | [Start] | [Total Points] | - | Sprint start |
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |
| 4 | | | | |
| 5 | | | | |
| 6 | | | | |
| 7 | | | | |
| 8 | | | | |
| 9 | | | | |
| 10 | | | | |
| 11 | | | | |
| 12 | | | | |
| 13 | | | | |
| 14 | | | | |
| [End] | [End Date] | 0 | - | Sprint end (target) |

---

### Ideal vs Actual Burndown

**Ideal burndown (linear):**
- Day 0: [Total points]
- Day [Mid]: [~50% of points]
- Day [End]: 0 points

**Actual burndown:**
[Plot your actual remaining points from table above]

**Visual Chart:**
```
Story Points
[Total] |■■■■■■■■■■■■■■■■■■■■ (Day 0)
        |■■■■■■■■■■■■■■■      (Ideal midpoint)
        |■■■■■■■■■■■■         (Actual midpoint - example)
        |■■■■■■■              (Ideal day 7)
      0 |                     (Target: Day [End])
        +-----------------------> Days
```

---

### Sprint Health Check

**As of Day [X] of [Y]:**

**Burndown Status:**
- [ ] On track (actual close to ideal)
- [ ] Ahead of schedule (actual below ideal)
- [ ] Behind schedule (actual above ideal)
- [ ] Severely behind (actual >25% above ideal at midpoint)

**If behind schedule, what's the plan?**
- [ ] Work more hours (not sustainable)
- [ ] Remove lowest priority story
- [ ] Reduce scope of a story (implement basic BST without balancing)
- [ ] Extend sprint (discuss with Drew)
- [ ] Other: ___________

---

### Mid-Sprint Checkpoint (Day [X])

**Planned progress by midpoint**: [50% of total points] = ___ points completed
**Actual progress**: ___ points completed

**Are we on track?**


**What's causing variance from ideal?**
-
-

**Adjustments needed?**


---

### End-of-Sprint Analysis

**Final remaining story points**: ___
**Completion rate**: ___% (completed points / committed points)

**Did burndown chart help us this sprint?**


**What would we do differently next time?**


---

## Example (Filled)

### Burndown Chart - Sprint 2

**Sprint Goal**: Implement fully functional doubly-linked list with comprehensive test coverage
**Data Structure Focus**: Doubly-Linked List & Stack
**Sprint Duration**: Feb 15 - Feb 28 (14 days, but only 12 work days due to exam)
**Total Committed Story Points**: 10

---

### Daily Tracking Table

| Day | Date | Remaining Story Points | Stories Completed | Notes |
|-----|------|------------------------|-------------------|-------|
| 0 | Feb 15 | 10 | - | Sprint start, reviewed plan |
| 1 | Feb 16 | 8 | US-004 (2 pts) | Node class done, tests passing |
| 2 | Feb 17 | 8 | - | Started insert operations, no story completed yet |
| 3 | Feb 18 | 5 | Partial US-005 (3 pts) | insertFront/Back complete |
| 4 | Feb 19 | 5 | - | Working on deleteAt(), hit segfault |
| 5 | Feb 20 | 3 | Rest of US-005 (2 pts) | Fixed segfault, delete operations complete! |
| 6 | Feb 21 | 3 | - | Weekend, no work (studying for exam) |
| 7 | Feb 22 | 3 | - | Exam day, no sprint work |
| 8 | Feb 23 | 2 | Partial US-006 (1 pt) | Stack push/pop implemented |
| 9 | Feb 24 | 2 | - | Debugging memory leak in stack destructor |
| 10 | Feb 25 | 2 | - | Valgrind clean, but haven't completed US-006 fully |
| 11 | Feb 26 | 2 | Rest of US-006 (2 pts complete total=3) | Stack complete, peek/isEmpty working |
| 12 | Feb 27 | 2 | - | Started US-007 tests, won't finish |
| 13 | Feb 28 | 2 | - | Sprint end, 8/10 points completed (80%) |

---

### Ideal vs Actual Burndown

**Ideal burndown (linear):**
- Day 0: 10 points
- Day 7: 5 points
- Day 14: 0 points

**Actual burndown:**
- Day 0: 10 points
- Day 7: 3 points (ahead!)
- Day 10: 2 points (plateaued)
- Day 14: 2 points (behind - didn't complete)

**Visual Chart:**
```
Story Points
10  |● (Day 0 - start)
9   |
8   |●━━━━━━━━━━━━━━ (Ideal line)
7   |        ●
6   |         ╲
5   |          ●━━━━━●━━━━━━━━━━━━━━━━━━━━━━━━━━━●━━━━━━━●
4   |                                                      ╲
3   |                                                       ●━━━●━━━●━━━●
2   |                                                                    ●━●
1   |                                                                      ╲
0   |                                                                       ●
    +-------------------------------------------------------------------> Days
    0    2    4    6    8   10   12   14
```

**Pattern**: Strong start (ahead of ideal by day 5), then plateau during exam days (7-9), partial recovery days 10-13 but not enough to complete all stories.

---

### Sprint Health Check

**As of Day 10 of 14:**

**Burndown Status:**
- [ ] On track (actual close to ideal)
- [ ] Ahead of schedule (actual below ideal)
- [x] Behind schedule (actual above ideal)
- [ ] Severely behind (actual >25% above ideal at midpoint)

**If behind schedule, what's the plan?**
- [ ] Work more hours (not sustainable) - Already tired from exam week
- [x] Remove lowest priority story - US-007 comprehensive tests is "should have", will do minimum viable testing instead
- [ ] Reduce scope of a story - Core functionality (linked list + stack) is solid
- [ ] Extend sprint (discuss with Drew) - Not needed, 80% completion is acceptable
- [x] Other: Accept 8/10 points (80% completion) and carry testing story to next sprint backlog

---

### Mid-Sprint Checkpoint (Day 7)

**Planned progress by midpoint**: 50% of 10 points = 5 points completed
**Actual progress**: 7 points completed (US-004 + US-005 fully done)

**Are we on track?**
Ahead of schedule! Completed 7/10 points by day 7 (70% done). Feeling great about pace. Exam is tomorrow (day 7-8) which will slow down progress, but strong start gives me buffer.

**What's causing variance from ideal?**
- Node class implementation was simpler than estimated (estimated 2 points, felt like 1 point of effort)
- Insert operations went smoothly after drawing memory diagrams
- Haven't hit major blockers yet (one segfault but resolved in 4 hours with Discord help)

**Adjustments needed?**
None yet. Expecting slowdown during exam days (7-9) as planned. May not complete all 10 points due to exam, but on track to complete core data structures (linked list + stack).

---

### End-of-Sprint Analysis

**Final remaining story points**: 2 (US-007 comprehensive tests not completed)
**Completion rate**: 80% (8 completed / 10 committed)

**Did burndown chart help us this sprint?**
YES! Chart clearly showed the plateau during exam days (7-9). By day 10, it was obvious I wasn't going to complete all 10 points with only 4 days left and 4 points remaining (was only completing ~0.5 points/day at that velocity).

This helped me make decision on day 11 to reduce scope (skip comprehensive testing story, do minimum viable tests instead) rather than crunch unhealthily or fail sprint goal entirely.

Being ahead on days 3-5 gave me psychological buffer - I knew core work was done before exam.

**What would we do differently next time?**
- Good: Front-loading work before exam was correct strategy - gave buffer
- Good: Tracking daily gave early warning that I was plateauing (would've been invisible otherwise)
- Improve: Should've re-scoped on day 10 instead of day 11 (would've saved 1 day of stress)
- Improve: Could've broken US-005 (insert/delete operations) into smaller stories to see more granular progress

---

## How to Interpret Your Burndown Chart

### Pattern: Actual line is BELOW ideal line
**Meaning**: You're ahead of schedule
**Action**: Keep going! But don't add scope mid-sprint. Finish early and rest, or polish code quality.

### Pattern: Actual line is CLOSE TO ideal line (±10%)
**Meaning**: You're on track
**Action**: Maintain pace. Watch for blockers that could slow you down (memory leaks, pointer bugs, algorithm confusion).

### Pattern: Actual line is ABOVE ideal line (10-20%)
**Meaning**: You're slightly behind
**Action**: Identify what's slowing you. Stuck on segfault? Underestimated complexity? Ask for help now, not later.

### Pattern: Actual line is ABOVE ideal line (>25% at midpoint)
**Meaning**: You're significantly behind
**Action**: Re-scope NOW. Remove lowest priority story or reduce story scope (basic BST without balancing). Don't wait until day 12 of 14.

### Pattern: Flat line (no progress for 3+ days)
**Meaning**: You're blocked or not working
**Action**: If blocked on memory leak/segfault, ask for help immediately. If not working, be honest about capacity. Blocked 3+ days is a crisis.

### Pattern: Steep drop then plateau
**Meaning**: Completed easy stories first (node class, basic operations), stuck on hard ones (complex algorithms, edge cases)
**Action**: Normal pattern for data structures. Hard stories at end is risky - consider breaking complex algorithms into smaller stories next time.

---

## When to Adjust Mid-Sprint

**DON'T adjust for:**
- One slow day (everyone has off days, especially with pointer debugging)
- Weekend slowdown (if you don't work weekends, that's fine and planned)
- Minor variance from ideal line (<10%)

**DO adjust for:**
- Three consecutive days with no progress (blocked on segfault, memory leak, algorithm understanding)
- >25% behind at sprint midpoint (day 7 of 14, should have 5 points done, only have 2)
- Unexpected life events (illness, family emergency, major exam you forgot to plan for)
- Discovery that story was WAY underestimated (thought "implement BST" was 5 points, actually 13 points)

**How to adjust:**
1. Identify lowest priority story (nice-to-have)
2. Remove it from sprint, move back to backlog
3. Re-draw ideal line with new total points
4. Communicate to Drew if needed (especially if impacts sprint goal)

**Remember**: Better to complete 7/7 stories (100%) than 7/10 (70%). Scope reduction isn't failure - it's professionalism.

---

## Why This Matters

Burndown charts are standard in every agile software team I've worked with.

At Google, our team had a TV screen showing the sprint burndown 24/7. Why? Because **surprises at the end of a sprint are expensive.**

If you're 2 days from sprint end and realize you won't finish implementing the hash table, it's too late to adjust. But if you're at day 5 of 14 and you can see you're behind ideal by 30%, you can re-scope with 9 days left.

Burndown charts give you:
1. **Early warning system** - Memory leak consuming 3 days is visible immediately, not on day 13
2. **Objective reality** - No self-deception about progress ("I'm working hard" ≠ "I'm completing stories")
3. **Planning data** - Patterns show estimation accuracy (always plateau at complex algorithms? Need more time estimates)
4. **Communication tool** - Visual proof of progress for Drew during check-ins

Data structures projects are especially prone to hidden complexity ("linked list looks simple!" → 3 days debugging pointer bugs). Burndown charts keep you honest about real progress.

---

## Common Mistakes to Avoid

- **Mistake**: Only updating the burndown chart at the end of the sprint
  **Better approach**: Update daily, ideally during evening standup. The whole point is to catch problems early, not document them after the fact.

- **Mistake**: Treating the ideal line as a rigid requirement
  **Better approach**: Ideal line is a guide, not a law. Real work is messy (segfaults happen, memory leaks take time). Small variance (<10%) is fine. Large variance needs action.

- **Mistake**: Adding new stories mid-sprint and not updating the chart
  **Better approach**: If you add scope (rare, discouraged), re-draw the ideal line with new total points. Otherwise you can't interpret the chart.

- **Mistake**: Hiding the chart from yourself when behind schedule
  **Better approach**: The chart is MOST useful when you're behind! Face the reality (day 7, 3 points done, should have 5), adjust the plan (remove a story). Ignoring problems doesn't make them disappear.

- **Mistake**: Beating yourself up for being behind schedule
  **Better approach**: Behind schedule is data, not a moral failing. Use the chart to learn ("complex algorithms take me longer than simple ones") and adjust ("next sprint, increase estimates for recursive algorithms"). Self-compassion enables learning.

- **Mistake**: Not tracking blockers in daily notes column
  **Better approach**: When progress plateaus, note WHY in the daily notes ("Day 8: stuck on memory leak in destructor"). Pattern of blockers reveals systemic issues ("always blocked on pointer bugs → need to draw diagrams first").

---

## Tips from Drew

**Update your burndown during your evening standup.** Make it a habit. Standup answers "what did I complete?" Burndown tracks "how many points remain?" Natural pairing.

**The midpoint checkpoint is critical.** Day 7 of a 14-day sprint is your "do or die" moment. If you're behind by >20%, re-scope immediately. Don't wait until day 12 to panic.

**A flat burndown line means something is wrong.** Three days with no story completion? You're blocked. Memory leak consuming days? Segfault you can't fix? Ask for help NOW. Don't waste a week being stuck.

**Steep drops look great but can be misleading.** If you complete 3 easy stories (node class, basic insert, basic delete) in 2 days, your burndown looks amazing. But if the remaining 2 stories are complex (implement tree balancing, handle all edge cases), you're in trouble. Track both points AND story completion.

**Use the burndown to fight scope creep.** When you think "oh I should add this optimization," look at your burndown. Are you on track? No? Then no new features. Scope creep breaks burndowns.

**Celebrate finishing early!** If your actual line hits zero before the ideal line, you nailed your estimation. That's the goal. Take the extra time to: add polish, improve test coverage, write documentation, or just rest. Don't fill extra time with scope creep.

**Pattern recognition is the real skill.** After 3-4 sprints, you'll notice your patterns. Do you always start slow (learning phase)? Do you always plateau at complex algorithms? Use these patterns to improve planning and self-awareness.

**Memory issues create invisible work.** Burndown might show no story completion for 2 days while you debug memory leak. That's real work (important work!), just not story completion. Note in daily column: "Day 8: debugging memory leak, no story progress but this is critical." Context matters.

---

## Integration with CSC-249

In CSC-249, I want to see your burndown charts for each sprint in your project documentation.

Why? Because burndown charts show me:
- You tracked progress daily (not just at the end)
- You identified problems early and adjusted (re-scoped, asked for help)
- You understand your velocity with low-level code
- You're developing professional project management discipline

**Students with good burndown tracking:**
- Rarely miss project deadlines (they adjust mid-sprint when behind)
- Can accurately predict completion dates for final integration project ("based on 10 points/sprint velocity and 30 points remaining, I need 3 more sprints")
- Have data to support scope discussions ("I can add red-black tree balancing, but it will take 2 more sprints based on my velocity")
- Demonstrate professional engineering process

**Students without burndown tracking:**
- Surprise themselves (and me) when data structure implementations aren't done on time
- Can't articulate why they're behind schedule ("it just took longer than expected")
- Lack data for process improvement (can't identify patterns)
- Miss the early warning signals (3 days debugging memory leak invisibly)

Your burndown chart is evidence that you're managing your work like a professional systems programmer, not just coding until deadlines.

**Systems engineers who can't estimate and track their algorithm implementation work don't get to lead projects. Learn this skill now.**

---

## CSC-249 Specific Burndown Considerations

**Memory debugging doesn't show on burndown (no story completion) but is critical work.** When burndown is flat for 2 days while you debug segfault, that's not "wasted time" - that's essential debugging. Note in daily column: "Day 5-6: debugging memory leak in destructor, no story completion but critical bug fix."

**Pointer bugs create unpredictable plateaus.** Unlike app development where problems are often Google-able, pointer bugs can consume days. Plan buffer in estimates. If burndown plateaus for >2 days on pointer bug, that's when you ask for help (office hours, Discord, pairing).

**Edge case testing reveals hidden complexity.** You might think "implement BST" is done, but then edge case testing reveals 5 bugs. Burndown shows this: steep drop (basic implementation), plateau (edge case fixing). Pattern teaches: include edge case time in estimates.

**Recursive algorithm understanding has learning curve.** First recursive algorithm (tree traversal): burndown will be slow. Second recursive algorithm (graph DFS): faster. Track time-to-understand-recursion across sprints.

**Test coverage percentage is useful burndown companion.** Burndown shows story completion. Test coverage shows quality. Both at midpoint: 50% stories done, 40% test coverage = quality lagging. Both should track together.

**Valgrind/memory profiler time should be visible.** If you're running valgrind daily (as you should), that takes time. Not story completion time, but quality time. Note in daily column when significant memory debugging happens.

**Algorithm complexity analysis is part of story completion.** Story isn't "complete" until you can explain why it's O(log n) or O(n²). If burndown shows story complete but you haven't analyzed complexity, story isn't actually done. Definition of done includes analysis.

**Drawing diagrams takes time but doesn't show as story completion.** Day spent drawing BST rotation diagrams or hash table collision scenarios is learning time. Essential work. Note in daily column: "Day 3: no code written, drew 10 memory diagrams, now understand algorithm."
