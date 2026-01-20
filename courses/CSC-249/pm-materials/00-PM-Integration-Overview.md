# CSC-249 Project Management Integration

## Purpose
Integrate Scrum sprint methodology into CSC-249 (Data Structures & Algorithms) to prepare students for professional software development. Students learn PM by managing data structure implementation projects using industry-standard sprint practices.

## PM Learning Outcomes for CSC-249

By the end of CSC-249, students will be able to:
1. Execute complete 2-week sprint cycles with planning, standups, and retrospectives
2. Track velocity and use historical data to improve estimation accuracy
3. Maintain burndown charts to visualize progress and identify blockers
4. Document technical work using user stories and acceptance criteria
5. Collaborate with AI tools ethically while documenting prompts and iterations
6. Create process portfolios demonstrating continuous improvement across sprints

## Integration Approach

### Not a Separate Course
PM concepts are **embedded** in data structures modules:
- Sprints run in Modules 4-7 (4 complete sprint cycles)
- PM practices integrated into technical assignments
- Process grading counts 40% of sprint project grades
- Retrospectives drive continuous improvement

### Builds on CSC-113/114 Foundation
Students arriving from CSC-113/114 already know:
- ✓ GitHub workflow (Issue → Branch → PR → Merge)
- ✓ Basic sprint cycles and retrospectives
- ✓ User story fundamentals (from CSC-114)
- ✓ Story point estimation (from CSC-114)

**CSC-249 adds:**
- Complete sprint cycles with all Scrum ceremonies
- Velocity-based capacity planning
- Burndown chart tracking
- AI collaboration documentation (prompts.txt)
- Process portfolio across 4 sprints

### For Students Without CSC-113/114
Students coming from CSC-134 (traditional C++ intro) receive:
- Quick PM onboarding in Modules 1-3
- Templates and scaffolding for sprint practices
- Extra support in Module 4 (first sprint)
- All PM skills taught just-in-time

## Module-by-Module PM Integration

### Module 1: Foundations & AI Collaboration (Weeks 1-2)
**PM Concept**: Sacred Flow Workflow & AI Documentation
- **Introduction**: GitHub workflow for data structures projects
- **Application**: Document AI collaboration in prompts.txt
- **Artifact**: First PR with working code + prompts.txt
- **Assessment**: Workflow quality (part of module grade)

**New for CSC-249**: Mandatory AI prompt documentation

### Module 2: Algorithm Analysis & Recursion (Weeks 3-4)
**PM Concept**: User Stories for Technical Projects
- **Mini-Lesson**: Writing user stories for algorithm implementations (5 min)
- **Application**: Create user stories for recursive algorithm project
- **Artifact**: GitHub Issues with acceptance criteria
- **Assessment**: User story quality (part of module grade)

**Skills**: Translate technical requirements into user stories

### Module 3: Sorting Algorithms (Weeks 5-6)
**PM Concept**: Story Point Estimation
- **Mini-Lesson**: Estimating algorithm complexity work (5 min)
- **Application**: Estimate sorting implementation tasks using story points
- **Artifact**: Backlog with story point labels
- **Assessment**: Estimation reasoning (part of module grade)

**Skills**: Relative estimation and capacity planning prep

### Module 4: Linear Structures - Sprint 1 (Weeks 7-8)
**PM Concept**: First Complete Sprint Cycle
- **Components**: Sprint planning, daily standups, burndown tracking, retrospective
- **Application**: Linked list implementation sprint
- **Artifacts**:
  - SPRINT_PLANNING.md with backlog
  - standup.md with daily updates
  - burndown.csv and burndown_chart.png
  - SPRINT_REVIEW.md
  - SPRINT1_RETROSPECTIVE.md
- **Assessment**:
  - M04-A1: Technical + Process (50 points, 40% process)
  - M04-A2: Retrospective (25 points)

**Milestone**: First complete sprint experience

### Module 5: Hashing & Hash Tables - Sprint 2 (Weeks 9-10)
**PM Concept**: Velocity-Based Planning
- **Application**: Use Sprint 1 velocity to plan Sprint 2 capacity
- **New Practice**: Velocity tracking and estimation refinement
- **Artifacts**:
  - Sprint 2 planning with velocity-based capacity
  - Continued burndown tracking
  - Velocity comparison report
- **Assessment**:
  - M05-A1: Hash table sprint (50 points, 40% process)
  - M05-A2: Velocity analysis (25 points)

**Focus**: Improving estimation accuracy using data

### Module 6: Trees & Heaps - Sprint 3 (Weeks 11-12)
**PM Concept**: PM Becomes Habitual
- **Application**: BST and heap implementation sprint
- **Reduced Scaffolding**: Less detailed templates, students own process
- **Artifacts**: Standard sprint artifacts (planning, standups, burndown, retro)
- **Assessment**:
  - M06-A1: Tree/heap sprint (75 points, 35% process)
  - M06-A2: Expression tree project (25 points)

**Milestone**: PM practices become automatic

### Module 7: Graphs & Advanced Algorithms - Sprint 4 (Weeks 13-14)
**PM Concept**: Process Optimization
- **Application**: Graph implementation sprint with optimized process
- **Focus**: Apply learnings from Sprints 1-3
- **New Practice**: Cumulative retrospective across all sprints
- **Artifacts**:
  - Sprint 4 standard artifacts
  - Cumulative process analysis
- **Assessment**:
  - M07-A1: Graph sprint (75 points, 35% process)
  - M07-A2: Real-world graph application (50 points)

**Milestone**: Self-directed sprint management

### Module 8: Integration Project & Portfolio (Weeks 15-16)
**PM Concept**: Process Portfolio
- **Application**: Final project using autonomous sprint cycle
- **Artifact**: Process portfolio analyzing growth across all 4 sprints
- **Components**:
  - Velocity progression chart
  - Estimation accuracy improvement graph
  - Key learnings from each sprint
  - PM skills demonstration for capstone readiness
- **Assessment**:
  - M08-A1: Final project (100 points)
  - M08-A2: Presentation + Process Portfolio (75 points, 30% process)

**Milestone**: Complete PM competency for CTS-285/289 capstone

## PM Grading in CSC-249

### Process Points Distribution

**Modules 4-7 (Sprint Projects)**: 40% process grading
- Sprint planning quality (10%)
- Daily standup consistency (10%)
- Burndown tracking (10%)
- Retrospective depth (10%)

**Module 8 (Capstone)**: 30% process grading
- Final sprint execution (15%)
- Process portfolio quality (15%)

### PM Artifacts Required

**Every Sprint (Modules 4-7)**:
- SPRINT_PLANNING.md (backlog, user stories, story points, DoD)
- standup.md (daily updates, minimum 5 entries per sprint)
- burndown.csv (daily point tracking)
- burndown_chart.png (visual progress)
- SPRINT_REVIEW.md (demo, completed stories)
- RETROSPECTIVE.md (went well, didn't go well, action items)
- prompts.txt (AI collaboration documentation)

**Module 8 Only**:
- PROCESS_PORTFOLIO.md (cumulative sprint analysis)
- Velocity progression chart
- Estimation accuracy improvement graph

## Tools Used

### GitHub as PM Tool
- **Issues**: Product backlog (user stories with story points)
- **Projects**: Kanban board (To Do, In Progress, Done)
- **Milestones**: Sprint markers (Sprint 1, Sprint 2, etc.)
- **Labels**: Story points (points: 1, points: 2, points: 3, points: 5, points: 8, points: 13)
- **Branches**: Sprint branches + feature branches
- **Pull Requests**: Sprint review and code delivery

### Simple Tracking
- **Burndown**: CSV file + Python/spreadsheet visualization
- **Standup Log**: Markdown template (standup.md)
- **Retrospective**: Structured template (Start/Stop/Continue or Mad-Sad-Glad)
- **Velocity Tracker**: Simple spreadsheet tracking points across sprints

### AI Collaboration Documentation
- **prompts.txt**: Required file documenting all AI interactions
- **Format**: Timestamped prompts with AI responses and reflections
- **Purpose**: Track learning process, not just copy-paste

## Student PM Journey in CSC-249

### Weeks 1-2 (Module 1): Sacred Flow & AI Setup
Students learn GitHub workflow with AI prompt documentation.

### Weeks 3-4 (Module 2): User Stories for Algorithms
Students write user stories for recursive algorithm implementations.

### Weeks 5-6 (Module 3): Estimation Practice
Students estimate sorting algorithm work using story points.

### Weeks 7-8 (Module 4): First Sprint Experience
Students execute complete sprint cycle for linked list implementation.
- Sprint planning (select stories, estimate, set goal)
- Daily standups (track progress, identify blockers)
- Burndown tracking (visualize progress)
- Sprint review (demo working code)
- Retrospective (reflect, identify improvements)

### Weeks 9-10 (Module 5): Velocity-Based Planning
Students use Sprint 1 velocity to plan realistic Sprint 2 capacity.
- Calculate velocity from Sprint 1
- Adjust estimates based on historical data
- Track velocity trend

### Weeks 11-12 (Module 6): Autonomous Sprint Management
Students run Sprint 3 with less scaffolding, PM becomes habitual.

### Weeks 13-14 (Module 7): Process Optimization
Students run Sprint 4 with optimized process based on prior learnings.
- Cumulative retrospective across all sprints
- Process refinement
- PM mastery demonstration

### Weeks 15-16 (Module 8): Capstone & Process Portfolio
Students complete final project with autonomous sprint, create process portfolio.
- Demonstrate PM competency
- Analyze growth across 4 sprints
- Prepare for capstone courses (CTS-285/289)

## Connection to CTS-285/289 Capstone

CSC-249 PM skills directly prepare for capstone:
- **CTS-285**: Systems Analysis requires stakeholder management, release planning
- **CTS-289**: Capstone requires self-managed project using Scrum
- Students arrive with 4+ sprints of experience
- Can estimate accurately based on velocity history
- Comfortable with all Scrum ceremonies
- Know how to adapt when plans change
- Experienced documenting technical work professionally

## Instructor Notes

### Time Investment
- **Prep**: 3 mini-lessons (15 min each = 45 min total)
- **Grading**: PM artifacts reviewed during sprint grading (already happening)
- **Support**: Office hours help with PM questions alongside technical questions
- **Templates Provided**: All sprint templates included in pm-materials/

### Drew's Pedagogy Fit
- **Process over Product**: PM practices ARE the process (40% of sprint grades)
- **Sacred Flow**: Expands GitHub workflow to full Scrum
- **Failure as Exercise**: Retrospectives normalize learning from mistakes
- **Iteration**: PM emphasizes continuous improvement
- **AI as Collaborator**: prompts.txt documents learning journey

### Common Student Challenges

1. **First Sprint Overwhelm**: Module 4 is intense with new PM + complex code
   - **Solution**: Provide detailed templates, expect lower velocity
   - **Normalize**: "Sprint 1 is always messy—that's why we retrospect"

2. **Underestimation**: Students consistently underestimate pointer/recursion work
   - **Solution**: Track patterns in retrospectives, teach buffer time
   - **Data-driven**: Show velocity trends to build estimation skill

3. **Skipping Standups**: Students forget daily updates when busy
   - **Solution**: Make lightweight (2 min max), celebrate consistency
   - **Automation**: Consider Discord/Slack reminders

4. **Shallow Retrospectives**: Students write "everything was fine"
   - **Solution**: Model vulnerability, share instructor's own mistakes
   - **Requirement**: Minimum 3 "didn't go well" items with action items

5. **AI Over-Reliance**: Students copy-paste without understanding
   - **Solution**: Retrospective requires honest AI assessment
   - **Assessment**: Code explanation in sprint review tests understanding

### Grading Efficiency Tips

**Sprint Planning Review** (2 min per student):
- Skim backlog for story format
- Check story point distribution (not all 1s or 13s)
- Verify Definition of Done exists

**Standup Review** (1 min per student):
- Count entries (minimum 5)
- Spot-check blockers are addressed
- Note patterns (working sporadically vs daily)

**Burndown Review** (1 min per student):
- Check CSV exists and chart generated
- Note if student fell behind (inform retro grading)

**Retrospective Review** (5 min per student):
- Most important artifact—read carefully
- Look for depth, honesty, specific action items
- This reveals student's process maturity

**Total grading time per sprint**: ~10 min per student for PM artifacts

## Resources Provided

1. **Mini-Lesson Slides**: 3 slide decks (User Stories, Estimation, Sprint Basics)
2. **Templates**:
   - SPRINT_PLANNING.md template
   - standup.md template
   - RETROSPECTIVE.md template (multiple formats)
   - VELOCITY_REPORT.md template
   - PROCESS_PORTFOLIO.md template
3. **Examples**: Sample artifacts from prior students
4. **Rubrics**: PM grading criteria for each sprint module
5. **Quick Reference**: Sprint process cheat sheet
6. **AI Collaboration Guide**: prompts.txt best practices

## Unique CSC-249 PM Features

### AI Prompt Documentation (prompts.txt)
**Required for all assignments**, documents:
- Prompts sent to AI (Claude, ChatGPT, Copilot, etc.)
- AI responses received
- How student modified/applied AI suggestions
- What student learned from interaction

**Philosophy**: Transparency about AI use, learning made visible

### Velocity Progression Tracking
Students track velocity across all 4 sprints:
- Sprint 1: Baseline (usually 8-12 points)
- Sprint 2: Refinement (velocity stabilizes)
- Sprint 3: Consistency (velocity becomes predictable)
- Sprint 4: Optimization (highest velocity)

**Outcome**: Students graduate understanding their own capacity

### Technical + PM Integration
Unlike separate PM course, CSC-249 integrates:
- User stories describe data structure features
- Story points estimate algorithm complexity
- Standups track technical blockers (pointer bugs, recursion confusion)
- Retrospectives improve both code quality AND process

**Result**: PM and technical skills reinforce each other

### Process Portfolio (Capstone Prep)
Module 8 culminates with process portfolio:
- Velocity chart showing progression
- Estimation accuracy improvement graph
- Key learnings from each sprint
- Evidence of PM mastery for capstone courses

**Advantage**: Students can show employers real PM experience

## Sprint Progression Philosophy

**Sprint 1 (Module 4)**: "Learn the Process"
- Heavy scaffolding
- Detailed templates provided
- Focus: Complete all ceremonies correctly
- Expectation: Low velocity, high learning

**Sprint 2 (Module 5)**: "Apply the Data"
- Moderate scaffolding
- Use Sprint 1 velocity for planning
- Focus: Estimation accuracy improvement
- Expectation: Velocity stabilizes

**Sprint 3 (Module 6)**: "Make It Habitual"
- Light scaffolding
- Student-driven process decisions
- Focus: PM becomes automatic
- Expectation: Highest velocity (complex project)

**Sprint 4 (Module 7)**: "Optimize & Reflect"
- Minimal scaffolding
- Cumulative retrospective
- Focus: Process mastery demonstration
- Expectation: Autonomous sprint management

**Final Sprint (Module 8)**: "Demonstrate Competency"
- No scaffolding
- Process portfolio creation
- Focus: Capstone readiness
- Expectation: Professional-level PM execution

---

**Next**: See individual mini-lesson files for detailed content.
- 01-Sprint-Basics-For-CSC249.md: How to run a sprint for data structures projects
- 02-AI-Collaboration-Guidelines.md: Ethical AI use and prompts.txt documentation
