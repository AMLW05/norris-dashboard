# M08-A2: Capstone Presentation & Process Portfolio

**Course**: CSC-249 Data Structures & Algorithms
**Module**: 8 - Final Project & Portfolio
**Week**: 16
**Points**: 75 (30 presentation + 45 portfolio)
**Due**: End of Week 16

---

## Assignment Overview

**THE FINALE!** Present your capstone project to demonstrate technical mastery, then compile a comprehensive process portfolio documenting your entire sprint journey. This is the evidence of your growth as both a developer and a project manager.

**Philosophy**: "Show your work." Employers don't just want to see code—they want to see how you think, plan, problem-solve, and improve. Your portfolio tells the story of your development journey.

---

## Learning Objectives

By completing this assignment, you will:

1. Present technical work clearly and professionally
2. Document complete development process across 4 sprints
3. Demonstrate growth in estimation accuracy and velocity
4. Reflect on PM methodology value for software development
5. Create portfolio artifact for future job applications

**Bloom's Level**: Evaluate, Create (CLO3, CLO4, CLO5)

---

## Part 1: Capstone Project Presentation (30 points)

### Presentation Requirements

**Format**: Recorded video presentation (8-12 minutes)
**Audience**: Technical peers and instructor
**Delivery**: Upload to YouTube/Vimeo (unlisted) or submit video file

### Presentation Structure

#### 1. Introduction (1-2 minutes)

```markdown
**Cover**:
- Project name and tagline
- Your name
- Course: CSC-249 Data Structures & Algorithms

**Problem Statement**:
- What problem does your system solve?
- Who would use it?
- Why existing solutions aren't sufficient
```

#### 2. Architecture Overview (2-3 minutes)

```markdown
**System Architecture**:
- Show diagram of data structures and how they connect
- Explain each structure's role
- Walk through data flow for one key operation

**Design Decisions**:
- Why these specific structures?
- What alternatives did you consider?
- Performance trade-offs accepted

**Example Script**:
"My task manager uses three core data structures working together.
The hash table provides O(1) task lookup by ID, storing the master
task registry. The min-heap maintains priority ordering for O(log n)
next-task retrieval. The directed graph tracks dependencies and enables
cycle detection to prevent circular references. Here's how they interact
when a user adds a new task..."
```

#### 3. Live Demonstration (3-4 minutes)

```markdown
**Demo Script**:
Demonstrate 4-6 key features with live code execution

**Example**:
1. Add several tasks with priorities
2. Show priority queue ordering (heap in action)
3. Add task with dependencies (graph)
4. Demonstrate dependency blocking
5. Complete prerequisite task, show unlocking
6. Show performance with large dataset (1000+ items)

**Pro Tips**:
- Have demo script ready (don't improvise)
- Pre-load interesting test data
- Show output/results clearly
- Highlight where each structure is used
```

#### 4. Technical Deep Dive (2-3 minutes)

```markdown
**Choose ONE algorithm/operation to explain in detail**:

**Example: "Get Next Task" operation**
- Walk through code step-by-step
- Show data structure interactions
- Explain time complexity: O(log n + D)
  - O(log n) for heap extraction
  - O(D) for dependency checking
- Show how it handles edge cases

**Show Code**:
- Display actual implementation
- Highlight integration points
- Explain design choices
```

#### 5. Testing & Performance (1-2 minutes)

```markdown
**Show Test Suite**:
- Run test suite, show passing tests
- Highlight integration tests
- Show performance benchmarks

**Performance Results**:
- Display graphs/charts of scalability
- Compare actual vs theoretical complexity
- Identify any bottlenecks

**Example**:
"My test suite includes 25 tests covering all operations and edge cases.
The performance tests show that with 10,000 tasks, add_task still
completes in under 1 millisecond, matching our O(log n) expectation."
```

#### 6. Reflection & Conclusion (1 minute)

```markdown
**Personal Reflection**:
- What was most challenging?
- What are you most proud of?
- What would you improve with more time?

**Course Connection**:
- How did sprints 1-4 prepare you for this?
- Most valuable concept learned?

**Thank You**:
- Any acknowledgments
- Contact info (if sharing publicly)
```

### Presentation Deliverables

Create `PRESENTATION.md`:

```markdown
# Capstone Presentation Documentation

## Video Link
[URL to YouTube/Vimeo OR "See presentation.mp4"]

## Presentation Slides
[Link to slides OR embed PDF]

## Demo Script

### Demo 1: Add Tasks with Priority
```python
# Commands executed
tm.add_task("Buy groceries", priority=1)
tm.add_task("Finish homework", priority=2)
tm.add_task("Call dentist", priority=1)
```
**Expected Output**: [Paste output]
**Structures Used**: HashMap (storage), MinHeap (priority)

### Demo 2: Dependency Management
[Script for each demo]

---

## Q&A Preparation

**Anticipated Question 1**: "Why use a heap instead of sorted array?"
**Answer**: Heap gives O(log n) insert vs O(n) for sorted array. Since we're constantly adding tasks, O(log n) is critical.

**Anticipated Question 2**: "How do you handle circular dependencies?"
**Answer**: When adding a task with dependencies, I run DFS cycle detection on the graph. If cycle found, transaction is rolled back and error raised.

[Prepare 5-8 likely questions]
```

**Grading - Presentation** (30 points):
- Introduction and problem statement (3 pts)
- Architecture explanation clear (6 pts)
- Live demonstration effective (7 pts)
- Technical deep dive shows understanding (7 pts)
- Testing and performance results (4 pts)
- Reflection and conclusion (3 pts)

**Presentation Quality**:
- Clear audio/video (included in above)
- Professional delivery (included in above)
- Time management (8-12 minutes) (included in above)

---

## Part 2: Comprehensive Process Portfolio (45 points)

### Portfolio Structure

The portfolio documents your ENTIRE sprint journey, showing growth over time.

```
week16-process-portfolio/
├── PORTFOLIO_README.md (executive summary)
├── sprint_data/
│   ├── sprint1_metrics.json
│   ├── sprint2_metrics.json
│   ├── sprint3_metrics.json
│   └── sprint4_metrics.json
├── visualizations/
│   ├── velocity_trend.png
│   ├── estimation_accuracy.png
│   ├── burndown_comparison.png
│   ├── ai_usage_trend.png
│   └── time_distribution.png
├── retrospectives/
│   ├── sprint1_retrospective.md (from Week 8)
│   ├── sprint2_retrospective.md (from Week 10)
│   ├── sprint3_retrospective.md (from Week 12)
│   ├── sprint4_retrospective.md (from Week 14)
│   └── cumulative_retrospective.md (from Week 14)
├── artifacts/
│   ├── all_burndown_charts/ (from each sprint)
│   ├── sprint_planning_docs/ (from each sprint)
│   └── velocity_reports/ (from each sprint)
└── PROCESS_GROWTH_ANALYSIS.md (NEW - most important)
```

### Part 2.1: Sprint Metrics Compilation (10 points)

Create `sprint_metrics.json` for each sprint:

```json
{
  "sprint": 1,
  "sprint_goal": "Implement singly-linked list",
  "duration_weeks": 2,
  "planned_points": 17,
  "completed_points": 15,
  "velocity": 15,
  "estimated_hours": 13.5,
  "actual_hours": 18.0,
  "time_variance_percent": 33,
  "stories_completed": 5,
  "stories_planned": 6,
  "completion_rate": 83,
  "tests_written": 12,
  "tests_passing": 12,
  "ai_prompts_used": 23,
  "blockers_encountered": [
    {
      "blocker": "Delete operation pointer confusion",
      "days_delayed": 0.5,
      "resolution": "AI explanation of pointer mechanics"
    }
  ],
  "standups_completed": 6,
  "burndown_slope": "fell behind Days 3-4, caught up Days 5-6"
}
```

**Create metrics file for ALL 4 sprints.**

Then create `METRICS_SUMMARY.md`:

```markdown
# Sprint Metrics Summary - All 4 Sprints

## Velocity Progression

| Sprint | Planned | Completed | Velocity | Change |
|--------|---------|-----------|----------|--------|
| Sprint 1 | 17 | 15 | 15 | - |
| Sprint 2 | 18 | 20 | 20 | +33% |
| Sprint 3 | 22 | 24 | 24 | +20% |
| Sprint 4 | 24 | 22 | 22 | -8% |

**Average Velocity**: 20.25 points
**Velocity Stability**: [Increasing/Stable/Decreasing]
**Analysis**: [Why did velocity change over time?]

---

## Estimation Accuracy

| Sprint | Estimated Hours | Actual Hours | Variance |
|--------|----------------|-------------|----------|
| Sprint 1 | 13.5 | 18.0 | +33% |
| Sprint 2 | 15.0 | 16.5 | +10% |
| Sprint 3 | 18.0 | 19.0 | +6% |
| Sprint 4 | 17.0 | 17.5 | +3% |

**Improvement**: 30 percentage points from Sprint 1 to Sprint 4
**Analysis**: [What helped estimation improve?]

---

## Completion Rates

| Sprint | Stories Planned | Completed | Rate |
|--------|----------------|-----------|------|
| Sprint 1 | 6 | 5 | 83% |
| Sprint 2 | 6 | 6 | 100% |
| Sprint 3 | 7 | 7 | 100% |
| Sprint 4 | 6 | 6 | 100% |

**Analysis**: [Why did Sprint 1 have incomplete work?]

---

## Process Adherence

| Sprint | Standups | Planning | Retro | Burndown |
|--------|----------|---------|-------|----------|
| Sprint 1 | 6/7 | ✓ | ✓ | ✓ |
| Sprint 2 | 7/7 | ✓ | ✓ | ✓ |
| Sprint 3 | 7/7 | ✓ | ✓ | ✓ |
| Sprint 4 | 6/7 | ✓ | ✓ | ✓ |

**Analysis**: [How consistent were you with process?]

---

## Blocker Analysis

**Total Blockers**: [X]
**Average Resolution Time**: [Y] hours
**Most Common Type**: [Technical/Process/External]

**Blocker Trends**:
- Sprint 1: [X] blockers, avg [Y] hours to resolve
- Sprint 2: [X] blockers, avg [Y] hours to resolve
- Sprint 3: [X] blockers, avg [Y] hours to resolve
- Sprint 4: [X] blockers, avg [Y] hours to resolve

**Analysis**: [Did you get better at handling blockers?]
```

**Grading** (10 points):
- Metrics compiled for all 4 sprints (4 pts)
- Summary analysis complete (3 pts)
- Trends identified (2 pts)
- Blocker analysis (1 pt)

---

### Part 2.2: Portfolio Visualizations (15 points)

Generate professional charts showing your process journey.

Create `generate_portfolio_charts.py`:

```python
import matplotlib.pyplot as plt
import numpy as np
import json

# Load sprint metrics
sprints = [1, 2, 3, 4]
velocities = [15, 20, 24, 22]  # Your actual data
variances = [33, 10, 6, 3]  # Estimation variance %
ai_prompts = [23, 18, 15, 12]  # AI usage
time_coding = [60, 65, 70, 75]  # % time coding vs process

# Create 2x3 subplot layout
fig = plt.figure(figsize=(18, 12))

# Chart 1: Velocity Trend
ax1 = plt.subplot(2, 3, 1)
ax1.plot(sprints, velocities, marker='o', linewidth=3, markersize=10, color='#2E86AB')
ax1.set_title('Velocity Trend Across Sprints', fontsize=14, fontweight='bold')
ax1.set_xlabel('Sprint Number')
ax1.set_ylabel('Story Points Completed')
ax1.grid(True, alpha=0.3)
ax1.set_xticks(sprints)

# Add average line
avg_velocity = np.mean(velocities)
ax1.axhline(y=avg_velocity, color='red', linestyle='--', label=f'Avg: {avg_velocity:.1f}')
ax1.legend()

# Chart 2: Estimation Accuracy Improvement
ax2 = plt.subplot(2, 3, 2)
ax2.plot(sprints, variances, marker='s', linewidth=3, markersize=10, color='#F77F00')
ax2.set_title('Estimation Accuracy Improvement', fontsize=14, fontweight='bold')
ax2.set_xlabel('Sprint Number')
ax2.set_ylabel('Variance (%)')
ax2.grid(True, alpha=0.3)
ax2.set_xticks(sprints)
ax2.fill_between(sprints, variances, alpha=0.3, color='#F77F00')

# Add annotation
improvement = variances[0] - variances[-1]
ax2.annotate(f'{improvement}% improvement',
             xy=(4, variances[-1]),
             xytext=(3, 15),
             arrowprops=dict(arrowstyle='->', color='green', lw=2),
             fontsize=10, color='green', fontweight='bold')

# Chart 3: AI Usage Trend
ax3 = plt.subplot(2, 3, 3)
ax3.bar(sprints, ai_prompts, color='#06A77D', alpha=0.7)
ax3.set_title('AI Collaboration Usage', fontsize=14, fontweight='bold')
ax3.set_xlabel('Sprint Number')
ax3.set_ylabel('Number of AI Prompts')
ax3.grid(True, alpha=0.3, axis='y')
ax3.set_xticks(sprints)

# Chart 4: Burndown Comparison (all 4 sprints)
ax4 = plt.subplot(2, 3, 4)
# Sample burndown data (replace with your actual data)
days = [0, 1, 2, 3, 4, 5, 6]
sprint1_burndown = [17, 15, 13, 10, 7, 3, 0]
sprint2_burndown = [18, 16, 14, 11, 8, 4, 0]
sprint3_burndown = [22, 20, 17, 14, 10, 5, 0]
sprint4_burndown = [24, 21, 18, 14, 10, 5, 0]

ax4.plot(days, sprint1_burndown, marker='o', label='Sprint 1', alpha=0.7)
ax4.plot(days, sprint2_burndown, marker='s', label='Sprint 2', alpha=0.7)
ax4.plot(days, sprint3_burndown, marker='^', label='Sprint 3', alpha=0.7)
ax4.plot(days, sprint4_burndown, marker='d', label='Sprint 4', alpha=0.7)
ax4.set_title('Burndown Chart Comparison', fontsize=14, fontweight='bold')
ax4.set_xlabel('Day')
ax4.set_ylabel('Story Points Remaining')
ax4.legend()
ax4.grid(True, alpha=0.3)

# Chart 5: Time Distribution (Coding vs Process)
ax5 = plt.subplot(2, 3, 5)
process_time = [100 - x for x in time_coding]
width = 0.6
ax5.bar(sprints, time_coding, width, label='Coding', color='#4CAF50')
ax5.bar(sprints, process_time, width, bottom=time_coding, label='Process (PM)', color='#FF9800')
ax5.set_title('Time Distribution: Coding vs Process', fontsize=14, fontweight='bold')
ax5.set_xlabel('Sprint Number')
ax5.set_ylabel('Percentage of Time (%)')
ax5.legend()
ax5.set_xticks(sprints)
ax5.set_ylim(0, 100)

# Chart 6: Cumulative Achievement
ax6 = plt.subplot(2, 3, 6)
cumulative_points = np.cumsum(velocities)
ax6.plot(sprints, cumulative_points, marker='o', linewidth=3,
         markersize=10, color='#9C27B0')
ax6.fill_between(sprints, cumulative_points, alpha=0.3, color='#9C27B0')
ax6.set_title('Cumulative Story Points', fontsize=14, fontweight='bold')
ax6.set_xlabel('Sprint Number')
ax6.set_ylabel('Total Points Completed')
ax6.grid(True, alpha=0.3)
ax6.set_xticks(sprints)

# Add final total
total = cumulative_points[-1]
ax6.annotate(f'Total: {total} points',
             xy=(4, total),
             xytext=(2.5, total - 10),
             fontsize=12, fontweight='bold')

plt.tight_layout()
plt.savefig('portfolio_dashboard.png', dpi=300, bbox_inches='tight')
print("✓ Portfolio dashboard saved to portfolio_dashboard.png")

# Generate individual high-res charts
# Velocity chart
plt.figure(figsize=(10, 6))
plt.plot(sprints, velocities, marker='o', linewidth=3, markersize=12, color='#2E86AB')
plt.title('Sprint Velocity Progression', fontsize=16, fontweight='bold')
plt.xlabel('Sprint Number', fontsize=12)
plt.ylabel('Story Points Completed', fontsize=12)
plt.grid(True, alpha=0.3)
plt.xticks(sprints)
plt.axhline(y=avg_velocity, color='red', linestyle='--', linewidth=2,
            label=f'Average: {avg_velocity:.1f}')
plt.legend(fontsize=12)
plt.savefig('velocity_trend.png', dpi=300, bbox_inches='tight')
print("✓ Velocity trend chart saved")

# Estimation accuracy chart
plt.figure(figsize=(10, 6))
plt.plot(sprints, variances, marker='s', linewidth=3, markersize=12, color='#F77F00')
plt.fill_between(sprints, variances, alpha=0.3, color='#F77F00')
plt.title('Estimation Accuracy Over Time', fontsize=16, fontweight='bold')
plt.xlabel('Sprint Number', fontsize=12)
plt.ylabel('Variance from Estimate (%)', fontsize=12)
plt.grid(True, alpha=0.3)
plt.xticks(sprints)
plt.savefig('estimation_accuracy.png', dpi=300, bbox_inches='tight')
print("✓ Estimation accuracy chart saved")

print("\n✓ All portfolio visualizations generated successfully!")
```

Run this script to generate:
- `portfolio_dashboard.png` (6-chart overview)
- `velocity_trend.png` (high-res individual chart)
- `estimation_accuracy.png` (high-res individual chart)
- `burndown_comparison.png` (all 4 sprint burndowns)
- `ai_usage_trend.png`
- `time_distribution.png`

**Grading** (15 points):
- Portfolio dashboard (6 charts) (6 pts)
- Velocity trend visualization (2 pts)
- Estimation accuracy visualization (2 pts)
- Burndown comparison (2 pts)
- AI usage visualization (2 pts)
- Time distribution chart (1 pt)

---

### Part 2.3: Process Growth Analysis (20 points)

Create `PROCESS_GROWTH_ANALYSIS.md` - **THIS IS THE MOST IMPORTANT DOCUMENT**

```markdown
# Process Growth Analysis - CSC-249 Sprint Journey

## Executive Summary

Over 4 sprints spanning 8 weeks, I implemented 4 major data structures
(linked list, hash table, BST/heap, graph) while learning and applying
agile project management methodology. This portfolio documents measurable
improvement in estimation accuracy, velocity stability, and process maturity.

**Key Achievements**:
- Completed [X] total story points across 4 sprints
- Improved estimation accuracy from [X]% variance to [Y]%
- Maintained [Z]% sprint completion rate (Sprints 2-4)
- Reduced AI dependency by [W]% while increasing code quality

---

## Part 1: Quantitative Growth Metrics

### Metric 1: Velocity Stabilization

**Sprint 1**: 15 points (baseline, no prior data)
**Sprint 2**: 20 points (+33% - learning curve)
**Sprint 3**: 24 points (+20% - peak performance)
**Sprint 4**: 22 points (-8% - capstone complexity)

**Analysis**:
Velocity increased 47% from Sprint 1 to peak in Sprint 3, showing
improved productivity as I mastered both data structures and sprint
process. Sprint 4 slight decrease is expected—graph algorithms are
inherently more complex than linked lists. The stabilization around
20-24 points indicates I've found my sustainable pace.

**Implications for Future Work**:
For future 2-week sprints, I can confidently estimate capacity at
20-22 points with ±10% variance. This predictability enables realistic
project planning and deadline commitments.

---

### Metric 2: Estimation Accuracy

**Sprint 1**: 33% variance (estimated 13.5h, actual 18h)
**Sprint 2**: 10% variance (estimated 15h, actual 16.5h)
**Sprint 3**: 6% variance (estimated 18h, actual 19h)
**Sprint 4**: 3% variance (estimated 17h, actual 17.5h)

**30 percentage point improvement in 8 weeks.**

**What Changed**:
1. **Granular task breakdown**: Sprint 1 estimated at story level. By
   Sprint 4, I broke stories into hour-level tasks before estimating.
2. **Historical data**: Used actual time from previous similar tasks
   (e.g., Sprint 2 hash table insert time informed Sprint 3 tree operations)
3. **Buffer inclusion**: Added 20% buffer for complex operations after
   Sprint 1 taught me pointers take longer than expected
4. **Tool usage**: Created estimation spreadsheet tracking historical
   ratios (story points to hours)

**Why It Matters**:
Accurate estimation is critical for professional software development.
Clients/managers need realistic timelines. This improvement demonstrates
I can make trustworthy commitments.

---

### Metric 3: Process Consistency

| Process Element | Sprint 1 | Sprint 2 | Sprint 3 | Sprint 4 | Avg |
|----------------|---------|---------|---------|---------|-----|
| Daily Standups | 6/7 (86%) | 7/7 (100%) | 7/7 (100%) | 6/7 (86%) | 93% |
| Sprint Planning | ✓ | ✓ | ✓ | ✓ | 100% |
| Retrospective | ✓ | ✓ | ✓ | ✓ | 100% |
| Burndown Tracking | ✓ | ✓ | ✓ | ✓ | 100% |
| Test Suite | 12 tests | 15 tests | 18 tests | 20 tests | +67% |

**Analysis**:
93% standup completion shows strong process adherence. Missed days
correlate with weekends or non-work days, not process abandonment.
Test count growth shows increasing quality focus—not just "make it work"
but "prove it works."

---

### Metric 4: AI Collaboration Evolution

| Sprint | Prompts | Conceptual | Code Gen | Debug | Review |
|--------|---------|-----------|---------|-------|--------|
| Sprint 1 | 23 | 30% | 40% | 20% | 10% |
| Sprint 2 | 18 | 40% | 25% | 25% | 10% |
| Sprint 3 | 15 | 45% | 15% | 30% | 10% |
| Sprint 4 | 12 | 50% | 10% | 30% | 10% |

**Trend**: 48% reduction in total prompts, shift from code generation
to conceptual understanding.

**What This Means**:
I'm not becoming "AI-dependent"—I'm using AI more strategically. Sprint 1
was "write this for me." Sprint 4 was "explain this concept so I can
implement it myself." The reduction in prompts with increase in code
quality suggests I'm internalizing knowledge, not outsourcing thinking.

**Most Valuable AI Pattern**:
"Explain [concept] using [analogy], then I'll implement"
This approach gave me understanding + practice vs just copy-paste.

---

## Part 2: Qualitative Growth Insights

### Insight 1: Process Reduces Cognitive Load

**Observation**: By Sprint 3, I stopped thinking about "when to do standups"
or "how to structure retrospectives"—it became automatic.

**Value**: Automating process freed mental energy for technical problem-solving.
Sprint 1, I was juggling "what's a burndown chart?" and "how do linked lists
work?" By Sprint 4, process was muscle memory, so I could focus 100% on
graph algorithms.

**Application**: For future complex projects, establish process early so
it's habitual when technical challenges intensify.

---

### Insight 2: Retrospectives Drive Real Improvement

**Observation**: Every retrospective action item translated to measurable
improvement in next sprint.

**Examples**:
- Sprint 1 retro: "Add buffer to estimates" → Sprint 2 variance dropped 23%
- Sprint 2 retro: "Break tasks smaller" → Sprint 3 had better burndown slope
- Sprint 3 retro: "Write tests first" → Sprint 4 had fewest bugs

**Value**: Retrospectives aren't busywork—they're debugging your process.
The feedback loop (plan → execute → reflect → adjust) is what drives growth.

**Application**: Never skip retrospectives. Even 15-minute reflection yields
actionable insights.

---

### Insight 3: Velocity is a Tool, Not a Goal

**Observation**: I initially thought "higher velocity = better." But Sprint 4
showed velocity decrease doesn't mean failure—it means honest estimation.

**Realization**: Velocity is for PREDICTION, not EVALUATION. A team that
delivers 10 points consistently is more valuable than one that does 20
points one sprint, 5 the next. Stability > magnitude.

**Application**: In future team projects, I'll emphasize velocity consistency
over velocity maximization. Predictable delivery builds trust with stakeholders.

---

### Insight 4: Data Structures are About Trade-offs, Not "Right Answers"

**Observation**: Every sprint involved choosing between structures. No choice
was purely "correct."

**Examples**:
- Hash table vs BST: O(1) average vs O(log n) worst-case guarantees
- Array-based heap vs pointer-based: Cache locality vs dynamic sizing
- Adjacency matrix vs list: O(1) edge lookup vs O(V²) space

**Value**: This course taught me to think in trade-offs: time vs space,
average vs worst-case, simplicity vs flexibility. Professional engineering
is about justified decisions, not perfect ones.

**Application**: When proposing technical solutions, I'll always present
alternatives and explain trade-offs, not just advocate for one approach.

---

## Part 3: Course Methodology Reflection

### "Create Before Theory" Approach

**Assessment**: Highly effective, but required mental adjustment.

**Pros**:
- Building first made theory concrete (Big-O made sense after benchmarking)
- Struggle led to deeper understanding than passive reading
- Immediate application reinforced concepts

**Cons**:
- Initial frustration when building without full understanding
- Sometimes wished for theory first (e.g., graph algorithms)

**Verdict**: The discomfort was the point. Wrestling with linked list
implementation before knowing "optimal" solutions forced me to understand
WHY certain approaches work. I'd recommend this approach to future students
with caveat: "Expect to feel lost at first—that's learning."

---

### Sprint Methodology in CS Course

**Assessment**: Transformative. Should be standard in all project-based CS courses.

**Value Delivered**:
1. **Realistic work simulation**: Industry uses sprints; practicing in school
   removed "real world shock"
2. **Time management**: Forced me to scope work realistically, say no to
   scope creep
3. **Process documentation**: prompts.txt and standups create audit trail—
   I can see exactly how I solved problems
4. **Continuous improvement**: Retrospective-driven improvement is powerful

**Challenges**:
- Initial overhead: Sprint 1 planning took 2 hours. Felt like "wasted" time.
- Process grading: 40% for "non-code" felt high at first
- Daily standups: Hard to remember initially

**Verdict**: Challenges were growing pains, not flaws. By Sprint 3, planning
took 30 minutes and saved time overall. Process grading forced me to value
PM skills I'll use forever. Would advocate for this methodology in all
CSC courses.

---

### Mandatory AI Collaboration

**Assessment**: Brilliant course design choice for 2026.

**Why It Worked**:
- Prompts.txt forced metacognition: "What do I actually need to know?"
- Honesty about AI use removed stigma, enabled learning discussions
- Comparing prompts across sprints showed my evolution as a learner

**Concerns Addressed**:
I worried I'd become "dependent" on AI. The metrics prove otherwise—
prompts decreased 48% while code quality increased. Mandatory documentation
made me conscious of HOW I was using AI, preventing lazy copy-paste.

**Recommendation**: Keep mandatory prompts.txt for future courses. It's
the accountability mechanism that makes AI a learning tool instead of
a crutch.

---

## Part 4: Portfolio as Career Artifact

### How I'll Use This Portfolio

**In Job Interviews**:
- "Here's evidence I can estimate accurately, deliver on time, and improve
  continuously"
- Show velocity trend: "I don't just code—I measure and optimize my process"
- Demonstrate reflection: "I learn from mistakes and document improvements"

**In Project Proposals**:
- Use historical velocity data to estimate realistic timelines
- Reference Sprint 3's 6% estimation variance: "My estimates are reliable"

**In Team Settings**:
- Lead retrospectives using proven format
- Advocate for sustainable pace (learned from Sprint 4 velocity)

**In Continuous Learning**:
- Apply sprint methodology to learning new technologies
- Track "learning velocity" for topics outside coursework

---

## Part 5: Future Growth Areas

### Technical Gaps Remaining

1. **Advanced graph algorithms**: A*, Floyd-Warshall need more practice
2. **Balanced trees**: Red-black, AVL trees only briefly covered
3. **Advanced hash tables**: Concurrent hash maps, consistent hashing
4. **Algorithm optimization**: Dynamic programming, greedy algorithms

**Action Plan**:
- Read "Introduction to Algorithms" (CLRS) chapters on above topics
- Implement red-black tree in personal project (Sprint 5?)
- Take algorithms course next semester

---

### Process Skills to Develop

1. **Team retrospectives**: Facilitating for groups vs solo
2. **Estimation in unfamiliar domains**: All my estimates were for similar work
3. **Velocity tracking for research/learning**: Not just coding projects

**Action Plan**:
- Volunteer to facilitate team retros in CSC-253 group project
- Track hours on learning activities (reading, tutorials) to build estimation
  skills for non-coding work

---

## Conclusion

This portfolio documents a transformation from "student who codes" to
"developer who engineers." I didn't just learn data structures—I learned
to plan, estimate, track, reflect, and improve. The velocity charts and
estimation metrics prove growth, but the real value is in internalized
habits: daily standups, retrospective thinking, data-driven decisions.

**Most Important Takeaway**:
Process and product are inseparable. Writing code without planning, tracking,
and reflecting is like driving without a map. You might reach a destination,
but you won't know how you got there or how to get there faster next time.

**Final Thought**:
If I could tell my Week-1 self one thing: "Trust the process. The standups
feel silly at first. The retrospectives feel like busywork. But by Week 16,
you'll have a portfolio that proves you're not just a coder—you're an engineer."

---

**Portfolio Compiled**: [Date]
**Total Sprints**: 4
**Total Story Points**: [X]
**Total Learning**: Immeasurable
```

**Grading** (20 points):
- Quantitative metrics analysis (6 pts)
- Qualitative insights (5 pts)
- Course methodology reflection (4 pts)
- Portfolio as career artifact (2 pts)
- Future growth areas (3 pts)

---

## Submission Checklist

### Part 1: Presentation
- [ ] Video presentation (8-12 minutes) uploaded
- [ ] PRESENTATION.md with video link and demo scripts
- [ ] Presentation slides (if used)

### Part 2: Portfolio
- [ ] PORTFOLIO_README.md (executive summary)
- [ ] sprint_metrics.json for ALL 4 sprints
- [ ] METRICS_SUMMARY.md
- [ ] Portfolio visualizations (6 charts minimum)
- [ ] All retrospective documents from Weeks 8, 10, 12, 14
- [ ] PROCESS_GROWTH_ANALYSIS.md
- [ ] Organized folder structure

---

## Grading Rubric (75 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| **Presentation** | 30 | Intro (3), architecture (6), demo (7), deep dive (7), testing (4), reflection (3) |
| **Sprint Metrics** | 10 | All 4 sprints (4), summary (3), trends (2), blockers (1) |
| **Visualizations** | 15 | Dashboard (6), velocity (2), accuracy (2), burndown (2), AI (2), time (1) |
| **Growth Analysis** | 20 | Quant metrics (6), qual insights (5), methodology (4), career (2), future (3) |
| **Total** | **75** | |

### Bonus Opportunities (+10 max)
- Interactive dashboard (web-based): +5
- Video presentation with professional editing: +3
- Published portfolio (GitHub Pages, personal site): +2

### Deductions
- Late submission: -10% per day (max 3 days)
- Presentation under 8 min or over 12 min: -5 points
- Missing retrospective documents: -5 points per sprint
- No visualizations: -15 points
- Growth analysis lacks depth: -10 points

---

## Resources

**Presentation**:
- OBS Studio (free screen recording)
- Loom (browser-based recording)
- Slides: Google Slides, PowerPoint, Keynote

**Visualizations**:
- Python: matplotlib, seaborn, plotly
- Online tools: Chart.js, D3.js, Google Charts

**Portfolio Hosting**:
- GitHub Pages (free, easy)
- Personal website
- PDF compilation

**Get Help**:
- Office Hours: See Canvas
- Discord: #week16-portfolio channel
- Presentation practice sessions: [Schedule TBD]

---

## Extension Challenges (+10 bonus)

1. **Interactive Web Dashboard**: Build HTML/JS dashboard with drill-down capabilities

2. **Process Automation Tool**: Build script that generates portfolio from sprint data automatically

3. **Comparative Analysis**: Compare your metrics to "typical" sprint velocities (research + analyze)

4. **Public Portfolio**: Publish portfolio publicly (blog post, GitHub) and share with instructor

5. **Video Tutorial**: Create tutorial teaching others how to apply sprint methodology to personal projects

---

## Final Thoughts from Instructor

This portfolio is evidence of your growth. In 16 weeks, you've gone from
"What's a sprint?" to delivering professional-quality work with predictable
velocity and measurable improvement.

**You've learned**:
- 4 fundamental data structures (linked lists, hash tables, trees, graphs)
- Algorithm analysis and Big-O reasoning
- Professional project management methodology
- Estimation, tracking, and continuous improvement
- AI collaboration as learning tool

**More importantly, you've proven you can**:
- Break complex problems into manageable tasks
- Estimate realistically and deliver on commitments
- Reflect on process and make data-driven improvements
- Document your work for future reference and collaboration

Take this portfolio to interviews. Show employers you're not just a coder—
you're an engineer who ships quality software on schedule while continuously
improving.

**Congratulations on completing CSC-249.**

---

**Last Updated**: January 2026
**Instructor**: Drew Norris
