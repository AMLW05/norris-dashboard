# Sprint Basics for CSC-249 Data Structures Projects

**Purpose**: Quick reference guide for executing 2-week sprints in Modules 4-7
**Audience**: CSC-249 students implementing data structures
**Prerequisites**: Basic GitHub workflow, user stories (covered in Module 2)

---

## What is a Sprint?

A **sprint** is a fixed 2-week cycle where you:
1. **Plan** what you'll build (Monday, Week 1)
2. **Build** it daily (Mon-Fri, both weeks)
3. **Track** progress with standups and burndown chart
4. **Review** what you built (end of Week 2)
5. **Reflect** on how to improve (retrospective)

**Goal**: Deliver working, tested code every 2 weeks while continuously improving your process.

---

## The 5 Sprint Ceremonies

### 1. Sprint Planning (Monday, Week 1)
**Duration**: 30-60 minutes
**Deliverable**: SPRINT_PLANNING.md

**Steps**:

1. **Set Sprint Goal** (one sentence describing what you'll build)
   ```
   Example: "Implement a fully functional singly-linked list with all CRUD operations and tests."
   ```

2. **Create Sprint Backlog** (break work into user stories)
   ```markdown
   ### Story 1: Node Class Implementation
   As a developer
   I want to create a Node class to store data and link to next node
   So that I can build the foundation for my linked list

   Acceptance Criteria:
   - [ ] Node class created with data and next attributes
   - [ ] Constructor initializes node with data
   - [ ] Can link nodes together manually
   - [ ] Basic tests confirm node linking works

   Story Points: 2
   Estimated Hours: 1.5
   ```

3. **Estimate Story Points** (use Fibonacci: 1, 2, 3, 5, 8, 13)
   - **1 point**: Trivial (< 1 hour)
   - **2 points**: Simple (1-2 hours)
   - **3 points**: Straightforward (half day)
   - **5 points**: Moderate (full day)
   - **8 points**: Complex (2-3 days)
   - **13 points**: Very complex (needs breaking down)

4. **Calculate Capacity**
   - First sprint: Guess (12-15 points is typical)
   - Later sprints: Use velocity from previous sprint
   - Add 20% buffer for unknowns

5. **Define "Done"**
   ```markdown
   A story is "Done" when:
   - [ ] Code implemented and committed
   - [ ] Tests written and passing
   - [ ] Code documented (comments + docstrings)
   - [ ] Merged to sprint branch
   - [ ] prompts.txt updated with AI collaboration
   ```

**Template**: See `templates/SPRINT_PLANNING_template.md`

---

### 2. Daily Standup (Every work day)
**Duration**: 2 minutes (just write it down)
**Deliverable**: standup.md (updated daily)

**Format**:
```markdown
## [Day of Week], Week [X]
**What I did yesterday**: [Completed tasks]
**What I'm doing today**: [Today's tasks]
**Blockers**: [Any problems or questions]
**Burndown**: [X] story points remaining
```

**Example**:
```markdown
## Tuesday, Week 7
**What I did yesterday**: Completed Node class, started LinkedList insert methods
**What I'm doing today**: Finish insert_back, implement delete method
**Blockers**: Confused about pointer handling in delete - will ask AI
**Burndown**: 15 story points remaining
```

**Best Practices**:
- Update standup.md EVERY day you work (even weekends if you work)
- Be specific: "Implemented insert_front" not "worked on list"
- Document blockers honestly—this helps you ask for help
- Minimum 5 entries per sprint (one per weekday minimum)

**Template**: See `templates/standup_template.md`

---

### 3. Burndown Tracking (Daily)
**Duration**: 1 minute per day
**Deliverables**: burndown.csv + burndown_chart.png

**What is a Burndown Chart?**
A graph showing story points remaining each day vs ideal burndown.

**How to Track**:

1. Create `burndown.csv`:
   ```csv
   Day,Story_Points_Remaining,Ideal_Burndown
   0,17,17
   1,15,14.2
   2,13,11.4
   3,10,8.6
   4,7,5.8
   5,3,3.0
   6,0,0
   ```

2. Each day, count incomplete story points, add row to CSV

3. At end of sprint, create chart:
   ```python
   import matplotlib.pyplot as plt
   import pandas as pd

   df = pd.read_csv('burndown.csv')

   plt.plot(df['Day'], df['Story_Points_Remaining'],
            marker='o', label='Actual', color='blue')
   plt.plot(df['Day'], df['Ideal_Burndown'],
            linestyle='--', label='Ideal', color='green')

   plt.xlabel('Day')
   plt.ylabel('Story Points Remaining')
   plt.title('Sprint 1 Burndown Chart')
   plt.legend()
   plt.grid(True)
   plt.savefig('burndown_chart.png')
   ```

**What It Tells You**:
- **Above ideal line**: Behind schedule (need to adjust or cut scope)
- **Below ideal line**: Ahead of schedule (add stretch goals or celebrate)
- **Flat line**: Stuck (identify blocker, ask for help)

**Template**: See `templates/burndown_template.csv`

---

### 4. Sprint Review (End of Week 2)
**Duration**: 15 minutes
**Deliverable**: SPRINT_REVIEW.md

**Purpose**: Demo what you built, show it works

**Steps**:

1. **List Completed Stories** (check off what's done)
   ```markdown
   ## Completed Stories
   - [x] Story 1: Node Class (2 pts)
   - [x] Story 2: LinkedList Basic Operations (5 pts)
   - [x] Story 3: Display Methods (2 pts)
   - [x] Story 4: Advanced Operations (3 pts)
   - [x] Story 5: Test Suite (3 pts)
   - [ ] Story 6: Documentation (2 pts) - **Incomplete**

   Total Completed: 15 story points out of 17
   ```

2. **Demo Your Work** (paste test output or screenshot)
   ```
   $ python test_linked_list.py
   Test 1 PASSED: Empty list
   Test 2 PASSED: Insert front
   Test 3 PASSED: Insert back
   ...
   Test 11 PASSED: Delete only element

   ✓ All tests passed!
   ```

3. **Calculate Velocity** (completed story points = your velocity)
   ```
   Sprint 1 Velocity: 15 points
   (Use this for planning Sprint 2)
   ```

4. **Preview Next Sprint**
   ```markdown
   For Sprint 2 (Hash Tables), I will:
   - Estimate more conservatively (15 points capacity, not 17)
   - Add buffer time for complex methods
   - Start testing earlier
   ```

**Template**: See `templates/SPRINT_REVIEW_template.md`

---

### 5. Sprint Retrospective (After Sprint Review)
**Duration**: 30 minutes
**Deliverable**: RETROSPECTIVE.md

**Purpose**: Reflect on process, identify improvements

**Format**: Start-Stop-Continue or Mad-Sad-Glad

**Start-Stop-Continue Template**:

```markdown
# Sprint [X] Retrospective

## What Went Well (Continue Doing)

### 1. Daily standups kept me on track
**What happened**: Updating standup.md daily forced me to plan each day
**Why it worked**: Written record made it obvious when I fell behind
**Keep doing**: Continue daily updates, maybe add time tracking

### 2. [Another positive]
...

---

## What Didn't Go Well (Stop Doing or Change)

### 1. Underestimated complexity of delete operations
**What happened**: Estimated 2 hours, took 4 hours
**Impact**: Fell behind Day 3, had to rush testing
**Root cause**: Didn't account for edge cases
**Action item**: Add 50% buffer to estimates for pointer operations in Sprint 2

### 2. [Another problem]
...

---

## Action Items for Next Sprint

1. **Improve estimation accuracy**
   - How: Break stories into smaller tasks, estimate each, sum total
   - Success metric: Variance < 20% (vs 40% in this sprint)

2. **Start testing earlier**
   - How: Write tests same day as implementation, not at end
   - Success metric: All tests passing by Day 5 (vs Day 7 this sprint)

3. [Another action item]
   ...
```

**Key Requirements**:
- Minimum 3 "What went well"
- Minimum 3 "What didn't go well" with action items
- Action items must be SPECIFIC and MEASURABLE
- Be honest—superficial retrospectives get lower grades

**Template**: See `templates/RETROSPECTIVE_template.md`

---

## Sprint Workflow Summary

```
Week 1, Monday:
├─ Sprint Planning → SPRINT_PLANNING.md
├─ Create sprint branch: git checkout -b sprint1-linked-list
└─ Create GitHub Issues for each story

Week 1, Mon-Fri:
├─ Daily: Update standup.md
├─ Daily: Update burndown.csv
├─ Daily: Work on stories, create feature branches
└─ Daily: Update prompts.txt with AI collaboration

Week 2, Mon-Fri:
├─ Continue daily standups and burndown
├─ Complete remaining stories
└─ Run all tests

Week 2, End:
├─ Create burndown chart: burndown_chart.png
├─ Sprint Review → SPRINT_REVIEW.md
├─ Calculate velocity
├─ Sprint Retrospective → RETROSPECTIVE.md
├─ Push sprint branch
└─ Create Pull Request with sprint summary
```

---

## Git Branching Strategy for Sprints

### Sprint Branch Model

```bash
# At start of sprint (Week 1, Monday)
git checkout main
git pull origin main
git checkout -b sprint1-linked-list

# For each user story, create feature branch
git checkout -b feature/node-class
# ...implement, test, commit...
git checkout sprint1-linked-list
git merge feature/node-class

# Next story
git checkout -b feature/insert-operations
# ...implement, test, commit...
git checkout sprint1-linked-list
git merge feature/insert-operations

# Continue for all stories...

# At end of sprint (Week 2)
git push origin sprint1-linked-list
# Create PR: "Sprint 1 Complete - Linked List Implementation"
# Include sprint summary in PR description
```

### Pull Request Description Template

```markdown
# Sprint 1 Complete - Linked List Implementation

## Sprint Goal
Implement fully functional singly-linked list with all CRUD operations and comprehensive tests.

## Completed Stories (15/17 points)
- [x] Story 1: Node Class (2 pts)
- [x] Story 2: LinkedList Basic Operations (5 pts)
- [x] Story 3: Display Methods (2 pts)
- [x] Story 4: Advanced Operations (3 pts)
- [x] Story 5: Test Suite (3 pts)
- [ ] Story 6: Documentation (2 pts) - Moved to Sprint 2

## Demo
All 11 tests passing. See burndown chart for progress tracking.

## Velocity
Sprint 1 Velocity: 15 points

## Key Learnings
- Underestimated pointer complexity
- Daily standups crucial for staying on track
- AI collaboration helped debug delete method edge cases

## Files Changed
- linked_list.py (or .cpp)
- test_linked_list.py
- SPRINT_PLANNING.md
- standup.md
- burndown.csv + burndown_chart.png
- SPRINT_REVIEW.md
- prompts.txt

Ready for review @DrewNorris
```

---

## Sprint Artifacts Checklist

Every sprint must include these files:

### Planning Phase
- [ ] `SPRINT_PLANNING.md`
  - Sprint goal
  - Sprint backlog (user stories)
  - Story points for each story
  - Definition of Done
  - Capacity calculation

### Execution Phase
- [ ] `standup.md`
  - Minimum 5 daily entries
  - What did, what doing, blockers
  - Burndown points tracked

- [ ] `burndown.csv`
  - Daily story points remaining
  - Ideal burndown calculation

- [ ] `prompts.txt`
  - All AI collaboration documented
  - Timestamps, prompts, responses, reflections

### Review Phase
- [ ] `burndown_chart.png`
  - Graph showing actual vs ideal burndown

- [ ] `SPRINT_REVIEW.md`
  - Completed stories checklist
  - Demo output (test results)
  - Velocity calculation

- [ ] `RETROSPECTIVE.md`
  - What went well (min 3)
  - What didn't go well (min 3 with action items)
  - Action items for next sprint (specific, measurable)

### Technical Deliverables
- [ ] Working code (data structure implementation)
- [ ] Test suite (10+ tests, all passing)
- [ ] Documentation (README, comments)

### Git Deliverables
- [ ] Sprint branch created
- [ ] Multiple feature branches used
- [ ] Pull request with sprint summary

---

## Common Sprint Anti-Patterns to Avoid

### 1. "Fake Standups"
**Problem**: Writing all standups at once at end of sprint
**Why it's bad**: Defeats purpose of daily tracking
**Solution**: Set daily reminder, actually update each day
**How we detect**: All entries same writing style, no real blockers documented

### 2. "Optimistic Estimation"
**Problem**: Planning 25 story points in first sprint
**Why it's bad**: Guarantees failure, discourages student
**Solution**: Conservative first sprint (12-15 points), adjust based on velocity
**Reality**: Most students complete 8-12 points in Sprint 1

### 3. "Scope Creep"
**Problem**: Adding stories mid-sprint without replanning
**Why it's bad**: Burndown becomes meaningless, capacity overrun
**Solution**: New ideas go in backlog for NEXT sprint
**Exception**: Only add if you finish early and have capacity

### 4. "Testing Theater"
**Problem**: Writing tests that don't actually test edge cases
**Why it's bad**: False confidence, bugs in production
**Solution**: Test empty list, single element, invalid inputs
**Requirement**: Minimum 10 meaningful tests

### 5. "Retrospective Platitudes"
**Problem**: "Everything was great, no problems, will do same thing"
**Why it's bad**: No learning, no improvement
**Solution**: Require minimum 3 "didn't go well" with specific action items
**Truth**: Every sprint has problems—that's why we retrospect

### 6. "Copy-Paste AI"
**Problem**: Asking AI for complete solution, pasting without understanding
**Why it's bad**: Can't explain code, fails when requirements change
**Solution**: Ask AI for explanations first, implement yourself, then verify
**Detected by**: Sprint review requires code explanation

---

## Data Structures Sprint Examples

### Sprint 1: Linked List (Module 4)
**Typical Stories**:
- Node class (2 pts)
- Insert operations (5 pts)
- Delete operations (3 pts)
- Search/Get (2 pts)
- Display/Helpers (2 pts)
- Test suite (3 pts)

**Total**: ~17 points planned, ~12 points completed (typical Sprint 1 velocity)

**Common Blockers**:
- Pointer manipulation in delete
- Edge cases (empty list, single element)
- Memory management in C++

### Sprint 2: Hash Table (Module 5)
**Typical Stories**:
- Hash function implementation (3 pts)
- Collision handling (chaining) (5 pts)
- Insert/Get/Delete (5 pts)
- Resize/Rehash (5 pts)
- Test suite with collision tests (3 pts)

**Total**: ~21 points planned, ~15 points completed (typical Sprint 2 velocity)

**Common Blockers**:
- Hash function design for different types
- Collision resolution edge cases
- Resize timing and rehashing logic

### Sprint 3: BST & Heap (Module 6)
**Typical Stories**:
- BST node and insert (5 pts)
- BST delete with cases (8 pts)
- Tree traversals (3 pts)
- Heap implementation (5 pts)
- Comprehensive testing (5 pts)

**Total**: ~26 points planned, ~18 points completed (typical Sprint 3 velocity)

**Common Blockers**:
- BST delete three cases
- Heap heapify operations
- Recursion in traversals

### Sprint 4: Graph (Module 7)
**Typical Stories**:
- Graph representation (adjacency list) (5 pts)
- BFS implementation (5 pts)
- DFS implementation (5 pts)
- Dijkstra's shortest path (8 pts)
- Real-world application (5 pts)

**Total**: ~28 points planned, ~20 points completed (typical Sprint 4 velocity)

**Common Blockers**:
- Choosing right graph representation
- Priority queue for Dijkstra's
- Handling disconnected graphs

---

## Velocity Expectations by Sprint

**Sprint 1** (Module 4):
- **Planned**: 15-17 points
- **Typical Completion**: 10-13 points
- **Velocity**: 10-13
- **Why low**: Learning sprint process + learning data structure

**Sprint 2** (Module 5):
- **Planned**: 13-15 points (based on Sprint 1 velocity)
- **Typical Completion**: 13-16 points
- **Velocity**: 13-16
- **Why higher**: Process familiar, better estimation

**Sprint 3** (Module 6):
- **Planned**: 15-18 points (based on Sprint 2 velocity)
- **Typical Completion**: 15-20 points
- **Velocity**: 15-20
- **Why higher**: Process habitual, confidence building

**Sprint 4** (Module 7):
- **Planned**: 18-22 points (based on Sprint 3 velocity)
- **Typical Completion**: 18-23 points
- **Velocity**: 18-23
- **Why highest**: PM mastery, cumulative learning, efficient workflow

**Key Insight**: Velocity typically INCREASES across sprints as you:
1. Get better at estimation
2. Master the sprint process
3. Build coding efficiency
4. Learn to use AI more effectively

---

## Sprint Success Metrics

### Process Quality (40% of sprint grade)

**Excellent Sprint (90-100%)**:
- All PM artifacts complete and thorough
- Daily standups show consistent progress
- Burndown tracked accurately
- Retrospective has depth and specific action items
- Evidence of learning and improvement

**Good Sprint (80-89%)**:
- All PM artifacts present
- Most standups completed
- Burndown generally accurate
- Retrospective shows honest reflection
- Some action items for improvement

**Adequate Sprint (70-79%)**:
- PM artifacts present but shallow
- Standups inconsistent
- Burndown incomplete
- Retrospective superficial
- Vague action items

**Poor Sprint (<70%)**:
- Missing PM artifacts
- Minimal or fake standups
- No burndown tracking
- No meaningful retrospective
- No evidence of process thinking

### Technical Quality (60% of sprint grade)

**Graded separately**, but sprint process helps achieve:
- Working, tested code
- Comprehensive test coverage
- Code documentation
- AI collaboration documented in prompts.txt

---

## Resources

**Templates** (in `pm-materials/templates/`):
- SPRINT_PLANNING_template.md
- standup_template.md
- burndown_template.csv
- SPRINT_REVIEW_template.md
- RETROSPECTIVE_template.md
- velocity_tracker.xlsx

**Examples** (in `pm-materials/examples/`):
- Sample Sprint 1 artifacts (linked list)
- Sample retrospective with good action items
- Sample burndown chart with analysis

**Tools**:
- GitHub Issues (backlog management)
- GitHub Projects (Kanban board)
- Python matplotlib (burndown charts)
- Excel/Google Sheets (velocity tracking)

**Further Reading**:
- Scrum Guide: https://scrumguides.org/
- VisuAlgo Sprint Demo: https://visualgo.net/
- Agile Estimation: Mike Cohn's resources

---

## Quick Reference Card

```
SPRINT CYCLE (2 weeks)

Monday Week 1:
  Plan → SPRINT_PLANNING.md

Every Day:
  Standup → standup.md
  Track → burndown.csv
  Code → feature branches
  Document → prompts.txt

End of Week 2:
  Chart → burndown_chart.png
  Review → SPRINT_REVIEW.md
  Reflect → RETROSPECTIVE.md
  PR → sprint summary

Key Numbers:
  Sprint 1: Plan 12-15 pts
  Standups: Min 5 entries
  Tests: Min 10 tests
  Process: 40% of grade

Remember:
  ✓ Daily standups build habits
  ✓ Velocity improves with data
  ✓ Retrospectives drive learning
  ✓ Process = Product quality
```

---

**Last Updated**: January 2026
**For**: CSC-249 Data Structures & Algorithms
**Instructor**: Drew Norris
