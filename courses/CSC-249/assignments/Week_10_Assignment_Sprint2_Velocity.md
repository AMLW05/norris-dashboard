# M05-A2: Sprint 2 Review & Velocity Analysis

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 5 - Hashing & Hash Tables (Sprint 2 Review)
**Week**: 10
**Points**: 25
**Due**: End of Week 10

---

## Assignment Overview

Complete Sprint 2 with comprehensive velocity analysis comparing Sprints 1 and 2. With two sprints of data, you can now calculate a more reliable velocity trend and make better predictions for Sprint 3.

**Philosophy**: "Data drives improvement." Two data points create a trend. Three create confidence. Use empirical velocity data to improve future planning accuracy.

---

## Learning Objectives

By completing this assignment, you will:

1. Calculate Sprint 2 velocity and compare to Sprint 1
2. Analyze estimation accuracy improvement over time
3. Identify velocity trends and adjust Sprint 3 capacity
4. Reflect on process improvements from Sprint 1 retrospective
5. Practice data-driven sprint planning (PM skill)

**Bloom's Level**: Analyze, Evaluate (CLO3, CLO4)

---

## Part 1: Sprint 2 Retrospective (10 points)

### Create `SPRINT2_RETROSPECTIVE.md`

Use the same format from Sprint 1 Retrospective (M04-A2), but focus on:

```markdown
# Sprint 2 Retrospective - Hash Table Implementation

## Sprint Metrics

### Velocity
- **Planned Story Points**: [X]
- **Completed Story Points**: [Y]
- **Sprint 2 Velocity**: [Y] points

### Velocity Trend
- **Sprint 1 Velocity**: [A] points
- **Sprint 2 Velocity**: [Y] points
- **Change**: [+/- Z] points ([percentage]%)
- **Average Velocity**: [(A + Y) / 2] points

### Time Tracking
- **Estimated Hours**: [X]
- **Actual Hours**: [Y]
- **Variance**: [+/- %]

### Estimation Accuracy Improvement
- **Sprint 1 variance**: [X]%
- **Sprint 2 variance**: [Y]%
- **Improvement**: [Better/worse by Z%]

---

## What Went Well

### 1. [Improvement from Sprint 1 Retrospective Action Items]
**What I changed**: [Describe action item from Sprint 1]
**Result**: [Did it work? How?]
**Evidence**: [Data or specific example]

**Example**:
**Added 30% buffer to estimates**
**What I changed**: In Sprint 1 retrospective, I identified underestimation. Added 30% buffer to all task estimates.
**Result**: Sprint 2 variance dropped from 40% to 15%
**Evidence**: 4 out of 6 stories completed within estimated time

### 2. [Another positive]
[Fill in]

### 3. [Technical win - hash table specific]
[What worked well about implementing hash tables?]

---

## What Didn't Go Well

[Same format as Sprint 1, but compare to Sprint 1 patterns]

**Analysis**: Are you making the same mistakes as Sprint 1? Or new ones?

---

## Action Items for Sprint 3

Based on 2 sprints of data:

1. **[Process improvement]**
   - Evidence from both sprints: [Pattern observed]
   - Action: [Specific change]

2. **[Another improvement]**

3. **[Another improvement]**

---

## Comparison to Sprint 1 Action Items

### Action Item 1 from Sprint 1: [Title]
- **Implemented?**: Yes/No
- **Effectiveness**: [Did it help? By how much?]
- **Continue?**: Yes/No

### Action Item 2 from Sprint 1: [Title]
[Same analysis]

### Action Item 3 from Sprint 1: [Title]
[Same analysis]

---

## Hash Table Specific Reflection

### Technical Learning
- What was hardest about hash tables vs linked lists?
- Did collision resolution match your expectations?
- Was rehashing harder or easier than predicted?

### Complexity Understanding
- Do you truly understand O(1) amortized now?
- Can you explain load factor impact in your own words?
- When would you use hash table vs linked list?

---

## AI Collaboration Evolution

### Changes from Sprint 1
- Did you use more or less AI help?
- Did prompt quality improve?
- Did understanding before implementation improve?

### Prompt Effectiveness Comparison

| Metric | Sprint 1 | Sprint 2 | Change |
|--------|---------|---------|--------|
| Total prompts | [X] | [Y] | [+/-] |
| Conceptual prompts | [X]% | [Y]% | [+/-]% |
| Code generation prompts | [X]% | [Y]% | [+/-]% |
| Understanding before use | [X]% | [Y]% | [+/-]% |
```

**Grading** (10 points):
- Sprint metrics with trend analysis (3 pts)
- What went well with evidence (2 pts)
- What didn't go well with new patterns (2 pts)
- Sprint 1 action item effectiveness review (2 pts)
- Technical and AI reflection (1 pt)

---

## Part 2: Velocity Analysis Report (8 points)

### Create `VELOCITY_ANALYSIS.md`

```markdown
# Velocity Analysis: Sprints 1-2

## Raw Velocity Data

| Sprint | Planned Points | Completed Points | Velocity | Completion % |
|--------|---------------|-----------------|----------|--------------|
| Sprint 1 | [X] | [Y] | [Y] | [Y/X]% |
| Sprint 2 | [X] | [Y] | [Y] | [Y/X]% |

**Average Velocity**: [(S1 + S2) / 2] = [Z] points per 2-week sprint

---

## Velocity Trend Analysis

### Is Velocity Increasing, Decreasing, or Stable?

**Trend**: [Increasing/Decreasing/Stable]

**Analysis**:
- Sprint 2 velocity was [higher/lower/same] as Sprint 1
- Change of [X] points represents [Y]% [increase/decrease]
- Reasons for change: [List factors]

**Examples of reasons**:
- Increasing: Better estimation, learning curve, process improvements
- Decreasing: More complex work, unexpected blockers, overcommitment
- Stable: Consistent work capacity, good estimation

---

## Estimation Accuracy Trend

| Sprint | Estimated Hours | Actual Hours | Variance |
|--------|----------------|-------------|----------|
| Sprint 1 | [X] | [Y] | [Z]% |
| Sprint 2 | [X] | [Y] | [Z]% |

**Trend**: [Improving/worsening/stable]

**Analysis**: [Explain trend]

**Graph**: [Create line graph showing variance over time - goal is downward trend]

---

## Sprint 3 Capacity Prediction

### Method 1: Simple Average
**Average velocity**: [Z] points (from S1 and S2)
**Sprint 3 capacity**: [Z] points

### Method 2: Weighted Average (Recent sprint counts more)
**Calculation**: (S1 × 0.4) + (S2 × 0.6) = [W] points
**Sprint 3 capacity**: [W] points

### Method 3: Conservative (Use lower velocity)
**Lower of S1 or S2**: [min(S1, S2)] points
**Sprint 3 capacity**: [min] points (safest)

### Recommended Sprint 3 Capacity

**Choice**: [Which method above?]
**Capacity**: [X] points
**Reasoning**: [Why this choice?]

**Confidence Level**: Medium-High (based on 2 sprints of data)

---

## Velocity Consistency Analysis

### Coefficient of Variation
**Standard deviation**: [Calculate]
**Mean velocity**: [Z]
**CV**: [std_dev / mean] = [X]%

**Interpretation**:
- CV < 20%: Very consistent velocity
- CV 20-40%: Moderately consistent
- CV > 40%: Inconsistent (need more sprints to stabilize)

**Your velocity consistency**: [Interpretation]

---

## Factors Affecting Velocity

### Positive Factors (Increased velocity)
1. [Factor]: [Impact description]
2. [Factor]: [Impact]

**Example**: Better estimation from Sprint 1 lessons increased velocity by 3 points

### Negative Factors (Decreased velocity)
1. [Factor]: [Impact description]
2. [Factor]: [Impact]

**Example**: Hash tables more complex than linked lists, reduced velocity by 2 points

### Controllable vs Uncontrollable
**Controllable** (can improve): [List]
**Uncontrollable** (accept): [List]

---

## Sprint 3 Planning Recommendations

Based on velocity analysis, for Sprint 3 (BST & Heap):

1. **Capacity**: Plan for [X] story points
2. **Buffer**: Add [Y]% buffer for complexity
3. **Complexity adjustment**: BST/Heap are [more/less] complex than hash tables
4. **Process improvements**: [Apply learnings from S1 and S2]

**Final Sprint 3 recommendation**: [Z] story points
```

**Grading** (8 points):
- Velocity data table (1 pt)
- Trend analysis (2 pts)
- Sprint 3 capacity prediction with multiple methods (2 pts)
- Velocity consistency analysis (1 pt)
- Factors affecting velocity identified (1 pt)
- Sprint 3 recommendations (1 pt)

---

## Part 3: Process Improvement Effectiveness (4 points)

### Create `PROCESS_IMPROVEMENT_EFFECTIVENESS.md`

```markdown
# Process Improvement Effectiveness - Sprint 1 to Sprint 2

For each improvement proposed in Sprint 1 retrospective, analyze effectiveness.

## Improvement 1: [Title from Sprint 1]

**Original Problem**: [What was wrong in Sprint 1?]

**Proposed Solution**: [What you planned to change]

**Implementation**: [Did you actually implement it in Sprint 2?]

**Results**:
- **Quantitative**: [Data showing impact - time saved, variance reduced, etc.]
- **Qualitative**: [How did it feel? Did it help?]

**Verdict**: [Effective / Partially effective / Not effective]

**Next Steps**: [Keep doing / Modify / Abandon]

---

## Improvement 2: [Title]
[Same template]

---

## Improvement 3: [Title]
[Same template]

---

## Summary

**Improvements Implemented**: [X] out of [Y] proposed
**Effective Improvements**: [X] out of [Y] implemented
**Process Improvement ROI**: [Was it worth the effort?]

**Key Insight**: [What did you learn about process improvement?]
```

**Grading** (4 points):
- All Sprint 1 improvements analyzed (2 pts)
- Quantitative results provided (1 pt)
- Honest assessment and next steps (1 pt)

---

## Part 4: Cumulative Burndown Comparison (3 points)

### Create Comparative Burndown Graph

Generate `burndown_comparison.png` showing both sprints on one graph.

**Python example**:

```python
import matplotlib.pyplot as plt
import pandas as pd

# Load both sprint burndowns
s1 = pd.read_csv('sprint1/burndown.csv')
s2 = pd.read_csv('sprint2/burndown.csv')

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Sprint 1
ax1.plot(s1['Day'], s1['Story_Points_Remaining'], marker='o', label='Actual', color='blue')
ax1.plot(s1['Day'], s1['Ideal_Burndown'], linestyle='--', label='Ideal', color='green')
ax1.set_title('Sprint 1 Burndown')
ax1.set_xlabel('Day')
ax1.set_ylabel('Story Points')
ax1.legend()
ax1.grid(True)

# Sprint 2
ax2.plot(s2['Day'], s2['Story_Points_Remaining'], marker='o', label='Actual', color='blue')
ax2.plot(s2['Day'], s2['Ideal_Burndown'], linestyle='--', label='Ideal', color='green')
ax2.set_title('Sprint 2 Burndown')
ax2.set_xlabel('Day')
ax2.set_ylabel('Story Points')
ax2.legend()
ax2.grid(True)

plt.tight_layout()
plt.savefig('burndown_comparison.png')
plt.show()
```

**Analysis document** (`BURNDOWN_ANALYSIS.md`):

```markdown
# Burndown Pattern Analysis

## Visual Comparison
[Embed burndown_comparison.png]

## Sprint 1 Pattern
- **Shape**: [Describe: smooth decline, step function, behind ideal, etc.]
- **Key moments**: [When fell behind? When caught up?]

## Sprint 2 Pattern
- **Shape**: [Describe]
- **Key moments**: [Notable events]

## Comparison
- **Improvement**: [Was Sprint 2 closer to ideal than Sprint 1?]
- **Work patterns**: [Front-loaded? Back-loaded? Consistent?]
- **Predictability**: [Which sprint was more predictable?]

## Insights for Sprint 3
- Aim for: [Desired burndown pattern]
- Avoid: [Patterns to avoid based on learning]
```

**Grading** (3 points):
- Comparative burndown graph (1 pt)
- Burndown analysis document (2 pts)

---

## Submission Checklist

- [ ] SPRINT2_RETROSPECTIVE.md complete
- [ ] VELOCITY_ANALYSIS.md with Sprint 3 predictions
- [ ] PROCESS_IMPROVEMENT_EFFECTIVENESS.md analyzing Sprint 1 action items
- [ ] burndown_comparison.png comparing both sprints
- [ ] BURNDOWN_ANALYSIS.md
- [ ] All documents show data-driven analysis (not just opinions)
- [ ] Pull request created

---

## Grading Rubric (25 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Sprint 2 Retrospective** | 10 | Metrics (3), went well (2), didn't go well (2), S1 action review (2), reflection (1) |
| **Velocity Analysis** | 8 | Data table (1), trend (2), S3 prediction (2), consistency (1), factors (1), recommendations (1) |
| **Process Improvement** | 4 | All improvements analyzed (2), quantitative results (1), honest assessment (1) |
| **Burndown Comparison** | 3 | Graph (1), analysis (2) |
| **Total** | **25** | |

### Deductions
- Late submission: -10% per day
- Missing velocity calculations: -3 points
- No Sprint 3 predictions: -3 points
- Superficial analysis (lacks data): -4 points
- Missing burndown comparison: -3 points

---

## Resources

**Velocity Tracking**:
- Agile velocity best practices
- Velocity forecasting techniques
- Story point estimation guides

**Process Improvement**:
- Kaizen methodology
- Plan-Do-Check-Act (PDCA)
- Retrospective Prime Directive

**Statistical Analysis**:
- Calculating standard deviation
- Coefficient of variation
- Trend analysis basics

**Get Help**:
- Office Hours: See Canvas
- Discord: #week10-velocity channel

---

## Extension Challenges (+3 bonus)

1. **Statistical Velocity Prediction**: Use regression analysis to predict Sprint 3 velocity

2. **Monte Carlo Simulation**: Simulate Sprint 3 outcomes based on Sprint 1-2 data distribution

3. **Process Dashboard**: Create interactive dashboard showing all sprint metrics (velocity, burndown, estimation accuracy) over time

4. **Root Cause Analysis**: Use "5 Whys" technique to deeply analyze one chronic problem across both sprints

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
