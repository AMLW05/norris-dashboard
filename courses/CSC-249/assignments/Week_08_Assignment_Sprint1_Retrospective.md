# M04-A2: Sprint 1 Retrospective

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 4 - Linear Structures (Sprint 1 Review)
**Week**: 8
**Points**: 25
**Due**: End of Week 8

---

## Assignment Overview

Complete Sprint 1 with a retrospective analyzing your process, estimations, and AI collaboration. This is NOT about fixing bugs—it's about reflecting on HOW you worked and identifying improvements for Sprint 2.

**Philosophy**: "Process improvement is continuous." Every sprint ends with reflection: What worked? What didn't? What will we change? This is how professional teams get faster and better over time.

---

## Learning Objectives

By completing this retrospective, you will:

1. Analyze sprint velocity and estimation accuracy
2. Reflect on AI collaboration effectiveness
3. Identify process improvements for future sprints
4. Document blockers and how they were resolved
5. Practice professional retrospective facilitation (PM skill)

**Bloom's Level**: Evaluate, Create (CLO3, CLO4)

---

## Part 1: Sprint Retrospective Document (12 points)

### Create `SPRINT1_RETROSPECTIVE.md`

```markdown
# Sprint 1 Retrospective - Linked List Implementation

**Sprint Duration**: Week 7-8 (2 weeks)
**Sprint Goal**: Implement fully functional singly-linked list
**Date**: [Date of retrospective]

---

## Sprint Metrics

### Velocity
- **Planned Story Points**: 17
- **Completed Story Points**: [Your actual completion]
- **Velocity**: [Completed points] (this becomes baseline for Sprint 2)

### Time Tracking
- **Estimated Hours**: 13.5
- **Actual Hours**: [How long did it actually take?]
- **Variance**: [+/- X hours or Y%]

### Completion Rate
- **Stories Completed**: [X] out of 6
- **Completion Percentage**: [X]%
- **Tests Passing**: [X] out of [Y]

---

## What Went Well (Keep Doing)

### 1. [Title of something that worked]
**What happened**: [Describe]
**Why it worked**: [Analysis]
**Keep doing**: [How to replicate in Sprint 2]

**Example**:
**Daily standups kept me on track**
**What happened**: Updating standup.md every day forced me to assess progress and plan next steps
**Why it worked**: Having a written record made it clear when I was falling behind
**Keep doing**: Continue daily standup updates, maybe add time tracking

### 2. [Another positive]
[Fill in]

### 3. [Another positive]
[Fill in]

---

## What Didn't Go Well (Stop Doing or Change)

### 1. [Title of something that didn't work]
**What happened**: [Describe the problem]
**Impact**: [How did it affect the sprint?]
**Root cause**: [Why did this happen?]
**Action item**: [Specific change for Sprint 2]

**Example**:
**Underestimated complexity of delete operations**
**What happened**: Estimated delete methods at 2 hours, took 4 hours
**Impact**: Fell behind on Day 3, had to rush testing
**Root cause**: Didn't account for edge cases (delete head, delete only element)
**Action item**: For Sprint 2, add 50% buffer to estimates for complex pointer operations

### 2. [Another problem]
[Fill in]

### 3. [Another problem]
[Fill in]

---

## Puzzles (Things We're Not Sure About)

These are questions or uncertainties that came up during the sprint:

1. **Is my velocity of [X] points typical?** Need more data from Sprint 2 to know.
2. **Should I use more AI help or less?** Not sure if I'm relying too much vs learning enough.
3. [Your puzzle]
4. [Your puzzle]

---

## Action Items for Sprint 2

Based on this retrospective, I commit to:

1. **[Specific, measurable change]**
   - How to implement: [Concrete steps]
   - Success metric: [How will I know it worked?]

2. **[Another action item]**
   - How to implement: [Steps]
   - Success metric: [Measurement]

3. **[Another action item]**
   - How to implement: [Steps]
   - Success metric: [Measurement]

**Example action item**:
**Improve estimation accuracy**
- How: Break stories into smaller tasks, estimate each task, sum totals
- Success metric: Variance < 20% in Sprint 2 (vs 40% in Sprint 1)

---

## Burndown Analysis

[Embed your burndown_chart.png here]

**Analysis**:
- Did I stay on track with ideal burndown? [Yes/No]
- When did I fall behind? [Which days?]
- When did I catch up? [How?]
- What does this tell me about my work patterns? [Insights]

**Example**:
*My burndown shows I fell behind on Days 2-3 when implementing delete operations. I caught up on Days 5-6 by working longer hours. This tells me I underestimate complex operations and overestimate simple ones.*

---

## Estimation Accuracy Review

| Story | Estimated Points | Estimated Hours | Actual Hours | Variance |
|-------|-----------------|----------------|-------------|----------|
| Node Class | 2 | 1.5 | 1.0 | -33% |
| Basic Operations | 5 | 4.0 | 5.5 | +38% |
| Display Methods | 2 | 1.5 | 1.5 | 0% |
| Advanced Operations | 3 | 2.5 | 4.0 | +60% |
| Test Suite | 3 | 2.5 | 2.0 | -20% |
| Documentation | 2 | 1.5 | 1.5 | 0% |

**Average Variance**: [Calculate]
**Pattern**: [What type of work do you over/underestimate?]

---

## Technical Debt Identified

List any "shortcuts" or "quick fixes" you took that should be cleaned up:

1. **[Technical debt item]**
   - Why it exists: [Explanation]
   - Impact: [Low/Medium/High]
   - Fix planned for: [Sprint 2 / Sprint 3 / Never]

**Example**:
**No error handling for invalid indices in insert_at()**
- Why: Ran out of time, focused on happy path
- Impact: Medium (could crash if user passes negative index)
- Fix planned for: Sprint 2 cleanup story

---

## AI Collaboration Effectiveness

### AI Usage Statistics
- **Number of AI sessions**: [Count from prompts.txt]
- **Most helpful interaction**: [Describe]
- **Least helpful interaction**: [Describe]

### What Worked
- [Type of prompts that got good results]
- [How AI helped you learn vs just giving answers]

### What Didn't Work
- [Prompts that didn't help]
- [Times you relied too much on AI without understanding]

### Changes for Sprint 2
- [How will you adjust AI collaboration?]

---

## Personal Reflection

### What I Learned About Data Structures
- [Technical insights about linked lists]
- [Aha moments about pointers/references]

### What I Learned About My Work Habits
- [When am I most productive?]
- [What distracts me?]
- [How do I handle frustration?]

### What I Learned About Process
- [Value of planning?]
- [Value of daily standups?]
- [Value of testing?]

---

## Sprint 2 Preview

Based on Sprint 1 learnings, for Sprint 2 (Hash Tables) I will:

1. **Adjust capacity**: Estimate [X] story points (based on velocity of [Y] from Sprint 1)
2. **Improve process**: [Specific change]
3. **Technical focus**: [What will I prioritize?]

---

## Retrospective Completion Date
**Date**: [When you completed this]
**Time spent on retrospective**: [X] minutes
```

**Grading** (12 points):
- Sprint metrics complete (2 pts)
- What went well section (2 pts)
- What didn't go well with action items (3 pts)
- Burndown analysis (2 pts)
- Estimation accuracy review (2 pts)
- Personal reflection depth (1 pt)

---

## Part 2: Velocity Calculation & Sprint 2 Planning Preview (5 points)

### Calculate Your Velocity

Create `VELOCITY_REPORT.md`:

```markdown
# Sprint 1 Velocity Report

## Definition
**Velocity** = Story points completed per sprint
Used to predict capacity for future sprints

## Sprint 1 Velocity
- **Completed story points**: [X]
- **Sprint length**: 2 weeks
- **Velocity**: [X] points per 2-week sprint

## Velocity-Based Planning for Sprint 2

**Sprint 2 capacity**: [X] points (use Sprint 1 velocity as baseline)

**Confidence level**: Low (only 1 sprint of data)
- If Sprint 2 velocity matches Sprint 1, confidence increases
- Need 3 sprints of data for reliable velocity

## Capacity Calculation

**Available time for Sprint 2**: [Y] hours
**Historical productivity**: [X points] / [Z hours] = [ratio] points per hour
**Predicted capacity**: [Y hours] × [ratio] = [points]

**Conservative estimate**: [X] - 20% buffer = [final capacity]
```

**Grading** (5 points):
- Velocity calculated correctly (2 pts)
- Sprint 2 capacity predicted (2 pts)
- Confidence level and buffer discussed (1 pt)

---

## Part 3: AI Collaboration Retrospective (5 points)

### Analyze Your prompts.txt

Create `AI_COLLABORATION_REVIEW.md`:

```markdown
# Sprint 1 AI Collaboration Review

## Prompt Analysis

### Total Prompts Used: [X]

### Categorize Your Prompts

**1. Conceptual Understanding (e.g., "Explain how pointers work")**
   - Count: [X]
   - Effectiveness: [High/Medium/Low]
   - Example: [Paste one effective prompt]

**2. Debugging Help (e.g., "Why does my delete crash?")**
   - Count: [X]
   - Effectiveness: [High/Medium/Low]
   - Example: [Paste one effective prompt]

**3. Code Generation (e.g., "Write insert_back for me")**
   - Count: [X]
   - Effectiveness: [High/Medium/Low]
   - Example: [Paste one - be honest]

**4. Code Review (e.g., "Is this delete implementation correct?")**
   - Count: [X]
   - Effectiveness: [High/Medium/Low]
   - Example: [Paste one]

### Best Prompt of the Sprint

**Prompt**: [Paste it]

**Why it worked**: [Analysis]

**What I learned**: [Insight gained]

### Worst Prompt of the Sprint

**Prompt**: [Paste it]

**Why it failed**: [Analysis]

**What I learned**: [How to improve]

---

## Learning vs Copy-Paste

### Honest Assessment

**Times I understood AI's suggestion before using it**: [X out of Y]

**Times I copy-pasted without fully understanding**: [X out of Y]

**Code I can now explain confidently**: [Which parts?]

**Code I still don't fully understand**: [Which parts?]

---

## AI Collaboration Improvements for Sprint 2

1. **[Specific change]**: [How it will help]
2. **[Specific change]**: [How it will help]
3. **[Specific change]**: [How it will help]

**Example**:
**Ask for explanations before code**: Instead of "Write delete method," ask "Explain how to delete a node from a linked list, then I'll implement it"
```

**Grading** (5 points):
- Prompt categorization complete (2 pts)
- Best/worst prompt analysis (1 pt)
- Honest learning vs copy-paste assessment (1 pt)
- Improvements identified for Sprint 2 (1 pt)

---

## Part 4: Process Improvement Proposals (3 points)

### Propose Concrete Changes

Create `PROCESS_IMPROVEMENTS.md`:

```markdown
# Sprint 1 Process Improvement Proposals

For each problem identified, propose a SPECIFIC, TESTABLE improvement.

## Improvement 1: [Title]

**Problem**: [What went wrong in Sprint 1?]

**Root Cause**: [Why did it happen?]

**Proposed Solution**: [What will you change?]

**Implementation**: [HOW will you implement this? Concrete steps]

**Success Metric**: [How will you know if it worked?]

**Example**:
**Problem**: Fell behind schedule on Days 3-4
**Root Cause**: Underestimated time for complex methods, no buffer time
**Proposed Solution**: Add 30% time buffer to all estimates
**Implementation**:
  1. Estimate task in ideal conditions
  2. Multiply by 1.3
  3. Use buffered estimate for planning
**Success Metric**: Sprint 2 actual time within 15% of estimated time (vs 40% variance in Sprint 1)

---

## Improvement 2: [Title]
[Fill in template above]

---

## Improvement 3: [Title]
[Fill in template above]
```

**Grading** (3 points):
- 3 improvement proposals (1 pt each)
- Each includes success metric (graded above)

---

## Submission Checklist

- [ ] SPRINT1_RETROSPECTIVE.md complete with all sections
- [ ] VELOCITY_REPORT.md with Sprint 2 capacity prediction
- [ ] AI_COLLABORATION_REVIEW.md analyzing prompts.txt
- [ ] PROCESS_IMPROVEMENTS.md with 3 proposals
- [ ] All documents show honest reflection (not just "everything was great")
- [ ] Action items are specific and measurable
- [ ] Pull request created with retrospective documents

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint Retrospective** | 12 | Metrics (2), went well (2), didn't go well (3), burndown (2), estimation (2), reflection (1) |
| **Velocity Calculation** | 5 | Velocity calculated (2), Sprint 2 capacity (2), buffer discussion (1) |
| **AI Collaboration Review** | 5 | Prompt analysis (2), best/worst (1), honesty (1), improvements (1) |
| **Process Improvements** | 3 | 3 proposals with metrics (3) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day (max 3 days)
- Superficial reflection (lacks depth): -5 points
- No action items or vague items: -3 points
- Missing velocity calculation: -3 points
- Dishonest AI assessment: -2 points

---

## Resources

**Retrospective Techniques**:
- Start-Stop-Continue format
- 4 L's: Liked, Learned, Lacked, Longed For
- Mad-Sad-Glad

**Velocity Tracking**:
- Scrum Guide on velocity
- Agile estimation techniques

**Process Improvement**:
- Kaizen (continuous improvement)
- PDCA cycle (Plan-Do-Check-Act)

**Get Help**:
- Office Hours: See Canvas
- Discord: #week08-retrospective channel

---

## Extension Challenges (+3 bonus)

1. **Sprint Comparison Dashboard**: Create visual dashboard comparing Sprint 1 metrics (for future use comparing all 4 sprints)

2. **Technical Debt Log**: Create a prioritized backlog of technical debt items with effort estimates

3. **Estimation Calculator**: Build a tool that uses your Sprint 1 data to suggest estimates for similar tasks

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
