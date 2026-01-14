# CSC-113 Instructor Guide
## Teaching AI Fundamentals with Sacred Flow & Process-Focused Pedagogy

**Instructor**: Drew Norris (author's voice throughout)
**Course**: CSC-113 - Artificial Intelligence Fundamentals
**Credits**: 3 (2 Class | 2 Lab)
**Last Updated**: January 2026

---

## TEACHING PHILOSOPHY

### Process Over Product
> "I don't just grade what students build. I grade HOW they build it."

**What this means in practice**:
- Commit messages matter as much as code quality
- Pull request descriptions show thinking
- Retrospectives reveal learning
- Documentation demonstrates professionalism

**Why**: In industry, process determines success. Bad process → technical debt, missed deadlines, poor collaboration. Good process → sustainable development, team effectiveness, career advancement.

---

### Sacred Flow as Non-Negotiable
> "Every professional developer uses version control. My students will too."

**The Workflow**: Issue → Branch → Commit → Push → PR → Review → Merge

**Why it's "sacred"**:
- **Industry Standard**: 100% of software jobs use Git/GitHub or equivalent
- **Transferable**: Same workflow whether building AI tools, web apps, or infrastructure
- **Pedagogical**: Forces planning (Issue), iterative work (Commits), reflection (PR description)

**How to enforce**:
- 15% of grade is process (commit quality, PR descriptions, frequency)
- Every assignment requires Sacred Flow, no exceptions
- Early modules = heavy scaffolding, later modules = independence

---

### Failure as Exercise
> "Bad Bot is my favorite assignment because everyone fails on purpose."

**The Philosophy**:
- Controlled failure teaches more than easy success
- Students learn what NOT to do before learning best practices
- Normalizes iteration: First attempt fails → Analyze → Improve

**How to implement**:
- Module 2: Bad Bot (intentionally broken AI agent)
- Module 3: Good Bot (iterate to improvement)
- Retrospectives: "What didn't work? What did you learn?"
- Celebrate mistakes: "My Favorite Mistakes" discussion prompts

---

###Two Tracks, One Standard
> "Prompt Masters is not 'easier.' It's a different path to the same outcomes."

**Code Builders**: Programming focus (Python/JavaScript)
**Prompt Masters**: No-code focus (Zapier, Airtable, prompt engineering)

**Both tracks**:
- Same 5 CLOs (GitHub workflow, AI configuration, prompt engineering, evaluation, documentation)
- Same assignment structure (adjusted for track)
- Same professional workflow (Sacred Flow)
- Same rigor

**Why two tracks**:
- Diverse student backgrounds (some have zero coding experience)
- Career diversity (not everyone becomes a programmer)
- AI literacy matters for ALL roles (marketing, management, design)

---

## SEMESTER OVERVIEW

### Pacing Strategy

**Modules 1-4** (Weeks 1-8): **Foundation Building**
- Smaller assignments (25-50 points)
- Heavy scaffolding (templates, examples, detailed instructions)
- Frequent low-stakes assessment (knowledge checks, exit tickets)
- **Goal**: Master GitHub, understand AI tools, learn prompt engineering

**Module 5** (Weeks 9-10): **Transition**
- First authentic project work (prototype)
- Introduction to sprint methodology
- More autonomy, less scaffolding
- **Goal**: Bridge from exercises to real projects

**Modules 6-8** (Weeks 11-16): **Project Execution**
- Multi-week project (Sprint 1, Sprint 2, Portfolio)
- Student-driven decisions (scope, track, implementation)
- Professional-level documentation
- **Goal**: Build portfolio-worthy capstone with full process documentation

---

### Time Allocation (Weekly)

**Total**: 9 hours/week (3 credit hours × 3 = federal standard)

**Breakdown**:
- **In-class instruction**: 2 hours (lecture, demos, discussions)
- **In-class lab**: 2 hours (hands-on activities, work time)
- **Outside class**: 5 hours (assignments, reading, projects)

**Modules 1-4**: Students spend ~3-5 hours/week outside class
**Modules 5-8**: Students spend ~6-10 hours/week outside class (project work)

---

## MODULE-BY-MODULE TEACHING GUIDE

---

## MODULE 1: SAGE Foundation & GitHub Setup (Weeks 1-2)

### Learning Objectives
- **MLO 1.1**: Apply version control principles (GitHub)
- **MLO 1.2**: Execute Sacred Flow workflow
- **MLO 1.3**: Integrate AI assistants (SAGE)

### Key Concepts to Emphasize
1. **Git ≠ GitHub**: Git is software (version control system), GitHub is platform (hosts repos + collaboration)
2. **Branches are workspaces**: Main = production, branches = safe experimentation
3. **Commits are snapshots**: Not just "save" - you're creating restore points with descriptions
4. **SAGE = personalized AI**: Context documents tailor AI to your needs

---

### Week 1: Introduction & Setup

**Class Session 1** (2 hours):
- **Welcome & Course Overview** (30 min):
  - Introduce yourself, teaching philosophy, syllabus walkthrough
  - Explain "Process Over Product" grading
  - Show examples of past student portfolios (with permission)
- **Sacred Flow Introduction** (30 min):
  - Draw workflow on board: Issue → Branch → Commit → PR → Merge
  - Live demo: You create a repo, make a branch, commit, PR, merge (5 min)
  - Explain WHY each step matters (professional workflow)
- **GitHub Account Setup** (30 min):
  - Students create accounts (help troubleshoot)
  - Verify everyone can log in
  - Bookmark GitHub.com
- **Module 1 Assignment Overview** (30 min):
  - Walk through Assignment 1: Hello GitHub
  - Show rubric, clarify expectations
  - Answer questions

**Lab Session 1** (2 hours):
- **Activity: Sacred Flow Lab** (90 min):
  - Guided hands-on practice (see activities/Module_01_Sacred_Flow_Lab.md)
  - Students create first repo, issue, branch, commit, PR
  - Circulate constantly - this is their first time!
- **Troubleshooting Time** (30 min):
  - Address common issues (branch confusion, commit messages, merge anxiety)
  - Students who finish early help peers

**Common Student Struggles (Week 1)**:
1. **"I'm lost in GitHub's interface"**
   - Fix: Visual diagram of tabs (Code, Issues, PRs). Walk through together on projector.
2. **"What's the difference between Git and GitHub?"**
   - Fix: Analogy: Git = Microsoft Word (software), GitHub = Google Drive (storage + sharing)
3. **"I committed to main instead of my branch"**
   - Fix: Reassure it's OK for first assignment. Show how to create branch from existing commit.

---

### Week 2: AI Tools & SAGE

**Class Session 2** (2 hours):
- **AI History Brief** (20 min):
  - Quick overview: Turing Test → Expert Systems → Deep Learning → LLMs
  - Set realistic expectations: AI is powerful but not magic
- **AI Tool Comparison** (40 min):
  - Demo Claude, ChatGPT, Gemini side-by-side
  - Same prompt, different outputs - discuss why
  - Emphasize: Different tools, different strengths
- **SAGE Introduction** (30 min):
  - What is SAGE? (Scholar's Adaptive Growth Engine - customized AI assistant)
  - Show context document example
  - Explain how context tailors responses
- **Module 1 Assignment 2 Overview** (30 min):
  - Meet Kevin & SAGE assignment walkthrough
  - Rubric review, Q&A

**Lab Session 2** (2 hours):
- **Work Time: Assignment 1 Completion** (60 min):
  - Students finish Hello GitHub
  - Circulate, answer questions, review PRs
- **Work Time: Assignment 2 Start** (60 min):
  - Students begin SAGE setup
  - Test AI tools, start comparison notes
  - Available for help

**Assessment Checkpoint**:
- Review Assignment 1 PRs as they come in
- Provide feedback within 24-48 hours (quick turnaround for first assignment builds confidence)
- Look for: Branch usage, commit message quality, PR description completeness

---

### Module 1 Teaching Tips

**Do**:
- ✅ Over-explain initially (they're learning entirely new workflow)
- ✅ Model vulnerability: Share your own learning curve with Git
- ✅ Celebrate small wins: "You made your first commit!"
- ✅ Normalize confusion: "Everyone finds Git confusing at first"

**Don't**:
- ❌ Assume prior knowledge (many students have never used command line or GitHub)
- ❌ Rush through Sacred Flow (this is foundation for entire course)
- ❌ Skip live demos (students need to SEE the workflow)
- ❌ Use jargon without defining (what's obvious to you is new to them)

---

## MODULE 2: AI Exploration & GitHub Mastery (Weeks 3-4)

### Learning Objectives
- **MLO 2.1**: Analyze AI evolution
- **MLO 2.2**: Evaluate multiple AI tools
- **MLO 2.3**: Design AI agent configurations (Bad Bot)

### Key Concepts to Emphasize
1. **AI Winters**: Hype cycles teach us to have realistic expectations
2. **Evaluation Criteria**: Not just "does it sound good?" but "is it accurate, unbiased, useful?"
3. **Intentional Failure**: Bad Bot teaches through controlled experimentation

---

### Week 3: AI History & Research

**Class Session 3** (2 hours):
- **AI Timeline Overview** (45 min):
  - Key milestones: Dartmouth Conference, AI winters, Deep Blue, AlexNet, ChatGPT
  - Pattern recognition: Boom → bust → quiet progress → breakthrough
  - "Where are we now?" discussion
- **Research Skills** (45 min):
  - Evaluating sources (credible vs. not)
  - Citing properly (even for AI tool outputs!)
  - Organizing research notes
- **Assignment 2A Overview** (30 min):
  - AI Timeline Research assignment
  - Show exemplar from past student
  - Rubric walkthrough

**Lab Session 3** (2 hours):
- **Activity: AI Timeline Workshop** (60 min):
  - Collaborative timeline building (see activities/Module_02_AI_Timeline_Workshop.md)
  - Students sort event cards, identify patterns
- **Work Time: Assignment 2A Start** (60 min):
  - Students begin research
  - Find sources, take notes, start drafting

---

### Week 4: Bad Bot Design

**Class Session 4** (2 hours):
- **Failure as Exercise** (30 min):
  - Explain philosophy: Learning what NOT to do is powerful
  - Share "My Favorite Mistakes" from past students
  - Normalize iteration
- **Bad Bot Demo** (30 min):
  - Show intentionally terrible AI agent
  - Analyze WHY it fails (no context, vague prompts, contradictions)
  - Discuss how to design failure scenarios
- **GitHub Advanced Topics** (30 min):
  - Merge conflicts: What they are, how to resolve
  - Branch management: When to delete branches
  - Issue linking: Using "Closes #X" in PRs
- **Assignment 2B Overview** (30 min):
  - Bad Bot Design assignment
  - Emphasize: Goal is to create BAD agent (intentionally!)
  - Rubric: Graded on documentation of failure, not on working product

**Lab Session 4** (2 hours):
- **Work Time: Finish Assignment 2A** (60 min)
- **Work Time: Start Assignment 2B** (60 min)

---

### Module 2 Teaching Tips

**Do**:
- ✅ Make Bad Bot fun (encourage creative failures)
- ✅ Share AI history context (helps students understand current tools)
- ✅ Emphasize critical evaluation (not all AI outputs are good)
- ✅ Connect to Module 3 (Bad Bot sets up Good Bot iteration)

**Don't**:
- ❌ Let students think Bad Bot is "just a joke" (it's pedagogically intentional)
- ❌ Skip the evaluation criteria lesson (they'll need it for Module 3)
- ❌ Assume students know how to research (teach source evaluation)

**Common Struggles (Week 4)**:
- **"My Bad Bot accidentally works"**: That's fine! Document why it SHOULDN'T work well, and where its weaknesses are.
- **"I don't understand the point"**: Reiterate - learning failure modes helps you avoid them in real projects.

---

## MODULE 3: Prompt Engineering Mastery (Weeks 5-6)

### Learning Objectives
- **MLO 3.1**: Evaluate and improve AI performance
- **MLO 3.2**: Apply prompt engineering techniques
- **MLO 3.3**: Analyze AI capabilities across use cases

### Key Concepts to Emphasize
1. **Iteration is the skill**: First prompts rarely work perfectly
2. **Specificity > Vagueness**: Always
3. **Techniques are tools**: Different problems need different techniques
4. **Evaluation criteria**: How do you know if output is "good"?

---

### Week 5: Good Bot Iteration

**Class Session 5** (2 hours):
- **Prompt Engineering Techniques** (60 min):
  - Teach 10 techniques (see Module_03_Prompt_Engineering_Lab.md):
    1. Be specific
    2. Add context
    3. Use examples (few-shot)
    4. Set role/persona
    5. Define format
    6. Set constraints
    7. Chain of thought
    8. Specify audience
    9. Negative examples
    10. Iterate
  - Show before/after examples for each
- **Iteration Process** (30 min):
  - Model: Start with bad prompt → Analyze output → Identify problem → Apply technique → Test → Repeat
  - Emphasize: Professionals iterate constantly
- **Assignment 3A Overview** (30 min):
  - Good Bot Iteration (transform Bad Bot)
  - Show rubric (graded on iteration PROCESS, not just final result)

**Lab Session 5** (2 hours):
- **Activity: Prompt Engineering Lab** (90 min):
  - Hands-on practice with 10 techniques (see activities/)
  - Iteration challenge: 4 rounds of refinement
- **Work Time: Assignment 3A Start** (30 min)

---

### Week 6: Real-World Application

**Class Session 6** (2 hours):
- **Multi-Tool Comparison** (45 min):
  - Same task, 3 different AI tools
  - Compare accuracy, format, usefulness
  - Discuss: When to use which tool?
- **Bias & Limitations** (45 min):
  - Hallucinations: Confident but wrong outputs
  - Bias: How training data affects outputs
  - Critical evaluation: Always verify important info
- **Assignment 3B Overview** (30 min):
  - Holiday Shopping Research
  - Real-world task using prompt engineering
  - Emphasize: Comparison and evaluation

**Lab Session 6** (2 hours):
- **Work Time: Finish Assignment 3A** (60 min)
- **Work Time: Start Assignment 3B** (60 min)
- **1-on-1 Conferences** (optional): Schedule 10-min check-ins with students who are struggling

---

### Module 3 Teaching Tips

**Do**:
- ✅ Model iteration publicly (show your own prompt refinement process)
- ✅ Celebrate improvement over perfection
- ✅ Use real examples (not toy problems)
- ✅ Connect to Bad Bot (they're applying learning from Module 2)

**Don't**:
- ❌ Give students "the perfect prompt" (defeats the learning goal)
- ❌ Skip evaluation criteria (they need to assess quality, not just accept output)
- ❌ Assume first iteration will work (normalize failure → improvement)

**Mid-Semester Check-In**:
- By end of Module 3, students should be comfortable with Sacred Flow
- Review grade distribution: Are most students succeeding? If not, adjust pacing
- Anonymous feedback survey: "What's working? What's not?"

---

## MODULE 4: Project Ideation & Track Selection (Weeks 7-8)

### Learning Objectives
- **MLO 4.1**: Create project concepts
- **MLO 4.2**: Evaluate learning paths (track selection)
- **MLO 4.3**: Design project proposals

### Key Concepts to Emphasize
1. **Problem-first, not technology-first**: Start with a problem you/others face
2. **MVP mindset**: Simplest version that solves core problem
3. **Track choice is about fit**: Not about "easier" - about career goals and interests
4. **Feasibility matters**: Cool idea ≠ doable in 8 weeks

---

### Week 7: Ideation & Brainstorming

**Class Session 7** (2 hours):
- **Project Examples** (30 min):
  - Show 5-6 past student projects (with permission)
  - Discuss: Problem → Solution → Impact
  - Both tracks represented
- **Ideation Techniques** (45 min):
  - Problem-first brainstorming
  - Tech-first exploration
  - Mashup method (AI + your interests)
  - Feasibility matrix (interest × feasibility)
- **MVP & Scope** (30 min):
  - What is MVP? (Minimum Viable Product)
  - Scope creep: The enemy of completion
  - Examples of good scope vs. too ambitious
- **Assignment 4A Overview** (15 min):
  - Project Ideation assignment
  - Rubric: Quantity of ideas + refinement process

**Lab Session 7** (2 hours):
- **Activity: Brainstorming Studio** (60 min):
  - Structured ideation exercises (see activities/)
  - Generate 10+ ideas, refine to top 3
- **Activity: Elevator Pitch Practice** (30 min):
  - Draft 30-60 second pitches
  - Speed-dating style practice rounds
- **Work Time: Assignment 4A** (30 min)

---

### Week 8: Track Selection

**Class Session 8** (2 hours):
- **Track Deep Dive** (60 min):
  - Code Builders: What you'll learn (Python, APIs, testing)
  - Prompt Masters: What you'll learn (no-code tools, automation, advanced prompting)
  - Same CLOs, different paths
  - Show 2 example projects per track
- **Self-Assessment** (30 min):
  - Students complete track readiness quiz
  - Reflect: Career goals, skill interests, learning style
- **Decision Framework** (30 min):
  - Decision matrix activity
  - "It's OK to not know!" - can adjust until Module 5 starts
- **Assignment 4B Overview** (30 min):
  - Track Specialization assignment
  - Write justification for track choice
  - Create learning goals for Modules 5-8

**Lab Session 8** (2 hours):
- **Work Time: Finish Assignment 4A** (30 min)
- **Work Time: Assignment 4B** (60 min)
- **1-on-1 Track Consultations** (30 min):
  - Meet with students unsure about track
  - Provide guidance, answer questions

---

### Module 4 Teaching Tips

**Do**:
- ✅ Encourage wild ideas initially (refinement comes later)
- ✅ Help students scope DOWN (most students aim too high)
- ✅ Present both tracks as equally valid
- ✅ Share your own ideation process (model messy brainstorming)

**Don't**:
- ❌ Let students pick projects that are out of scope
- ❌ Pressure students into a track (they need to choose based on fit)
- ❌ Skip the feasibility conversation (unrealistic projects lead to Module 6-8 struggles)

**Critical Decision Point**:
By end of Module 4, students should have:
- Clear project idea (problem statement + solution overview)
- Track choice with justification
- Realistic scope understanding

If students are lost, schedule mandatory check-ins before Module 5.

---

## MODULE 5: Rapid Prototyping (Weeks 9-10)

### Learning Objectives
- **MLO 5.1**: Create PRD (Product Requirements Document)
- **MLO 5.2**: Construct functional prototype
- **MLO 5.3**: Develop technical documentation

### Teaching Shift: Less Scaffolding, More Autonomy

Modules 5-8 are project-driven. Your role shifts from "instructor teaching concepts" to "coach supporting work."

**What this means**:
- Less lecture, more work time
- Less detailed instructions, more student decision-making
- More 1-on-1 troubleshooting, less whole-class demos
- Introduce sprint methodology (they'll use it in Modules 6-7)

---

### Week 9: PRD Creation

**Class Session 9** (2 hours):
- **PRD Overview** (30 min):
  - What is a PRD? Why do companies use them?
  - Walk through professional PRD example
  - Components: Problem, Users, Features, Success Criteria, Risks
- **Sprint Methodology Introduction** (30 min):
  - What is a sprint? (Time-boxed work period with defined goal)
  - Sprint planning: Select tasks, estimate time, commit to scope
  - You'll use sprints in Modules 6-7
- **Track-Specific Guidance** (30 min):
  - Code Builders: Technical considerations (language, libraries, APIs)
  - Prompt Masters: Tool selection (Zapier, Airtable, Make, etc.)
  - Both: How to test your prototype
- **Assignment 5A & 5B Overview** (30 min):
  - 5A: Rapid Prototype Sprint (50 pts)
  - 5B: Project Planning (25 pts)
  - Rubrics review

**Lab Session 9** (2 hours):
- **Activity: PRD Workshop** (90 min):
  - Guided PRD drafting with checkpoints (see activities/)
  - Instructor reviews each section before students move on
- **Work Time: Finalize PRD** (30 min)

---

### Week 10: Prototype Sprint

**Class Session 10** (2 hours):
- **Prototype Examples** (30 min):
  - Show "rough but functional" examples
  - Emphasize: Prototype ≠ polished product
  - Goal: Prove concept works
- **AI-Assisted Development** (30 min):
  - How to use AI tools to help build (Code Builders: Copilot, ChatGPT; Prompt Masters: AI for workflow design)
  - IMPORTANT: Understand what AI generates, don't just copy-paste
  - Document what AI tools you used
- **Troubleshooting Common Issues** (30 min):
  - Code Builders: Debugging, API errors, environment setup
  - Prompt Masters: Tool integration, automation triggers, data flow
- **Work Time** (30 min): Immediate work time with instructor available

**Lab Session 10** (2 hours):
- **Activity: Rapid Prototype Build Session** (120 min):
  - Uninterrupted work time (see activities/)
  - Standup checkpoints every 30 min
  - Instructor circulates as "unblocking specialist"

---

### Module 5 Teaching Tips

**Do**:
- ✅ Set realistic expectations (prototype = proof of concept, not production-ready)
- ✅ Be available for troubleshooting (students will hit blockers)
- ✅ Encourage documentation (PRD and process notes help with Module 8 portfolio)
- ✅ Praise effort and iteration, not just results

**Don't**:
- ❌ Solve problems for students (guide them to solutions)
- ❌ Let students skip PRD (it's foundational for Modules 6-7 planning)
- ❌ Expect polished work (this is rapid prototyping, emphasis on rapid)

**Common Struggles**:
- **"My prototype doesn't work"**: That's OK! Document what you tried. Partial functionality is fine.
- **"I can't figure out [specific tech issue]"**: Break down problem. Google the error. Try simpler version first.
- **"I'm overwhelmed by scope"**: Scope down. What's the SMALLEST thing you can build that demonstrates your idea?

---

## MODULES 6-7: Sprint Execution (Weeks 11-14)

### Module 6: Sprint 1 (Weeks 11-12)
### Module 7: Sprint 2 (Weeks 13-14)

These modules follow similar structure, so I'm covering them together.

### Learning Objectives
- **MLO 6.1 / 7.1**: Implement using sprint methodology
- **MLO 6.2 / 7.2**: Evaluate progress, identify improvements
- **MLO 6.3 / 7.3**: Analyze obstacles, formulate solutions

---

### Sprint Teaching Approach

**Your role**: Coach, not director
- Students own their sprint planning
- You provide frameworks and checkpoints
- They make decisions about scope and features

**Each sprint cycle**:
1. **Planning** (Week 1 of sprint): Break work into tasks, estimate time, commit to scope
2. **Execution** (Weeks 1-2): Daily work with periodic check-ins
3. **Demo** (End of Week 2): Present working features
4. **Retrospective** (After demo): Reflect on process

---

### Sprint 1 (Module 6)

**Week 11**:

**Class** (2 hours):
- **Sprint Planning Overview** (30 min): How to break work into tasks, estimate time
- **Activity: Sprint Planning Session** (60 min): Students plan Sprint 1 (see activities/)
- **Check-ins** (30 min): Instructor reviews each student's sprint plan

**Lab** (2 hours):
- **Work Time** with periodic standups (every 30 min): "What are you working on? Any blockers?"

**Week 12**:

**Class** (2 hours):
- **Mid-Sprint Check-In** (30 min): Are you on track? Need to adjust scope?
- **Work Time** (90 min): Finish Sprint 1 features

**Lab** (2 hours):
- **Activity: Demo Day - Sprint 1** (90 min): Each student presents (5 min demo + feedback)
- **Activity: Sprint 1 Retrospective** (45 min): Reflect and plan improvements for Sprint 2

---

### Sprint 2 (Module 7)

**Week 13**:

**Class** (2 hours):
- **Velocity Review** (30 min): How accurate were Sprint 1 estimates? Adjust for Sprint 2.
- **Activity: Sprint 2 Planning with Velocity** (45 min): Use Sprint 1 data to plan realistically
- **Work Time** (45 min)

**Lab** (2 hours):
- **Work Time** with standups

**Week 14**:

**Class** (2 hours):
- **Portfolio Building** (30 min): How to document your project professionally
- **Activity: Portfolio Workshop** (90 min): Draft portfolio page, peer review

**Lab** (2 hours):
- **Activity: Demo Day - Sprint 2** (90 min): Final project presentations (7 min each, more polished than Sprint 1)
- **Celebration** (30 min): Pizza, acknowledgment of effort, preview Module 8

---

### Sprint Teaching Tips

**Do**:
- ✅ Hold students accountable to their sprint commitments
- ✅ Normalize scope adjustments (life happens, priorities shift)
- ✅ Celebrate learning from retrospectives (not just success)
- ✅ Provide substantive feedback on demos (specific praise + constructive suggestions)

**Don't**:
- ❌ Let students skip retrospectives (that's where learning happens)
- ❌ Rescue students who didn't plan well (let them learn from consequences, but support improvement in Sprint 2)
- ❌ Compare students publicly (everyone's project is different, valid progress looks different)

**Grading During Sprints**:
- Sprint deliverables are HIGH STAKES (75-100 points each)
- Grade on: Functionality, process (commits, retrospective quality), documentation
- Use rubric consistently, but allow for different scopes

---

## MODULE 8: Capstone & Portfolio Defense (Weeks 15-16)

### Learning Objectives
- **MLO 8.1**: Develop comprehensive portfolio
- **MLO 8.2**: Justify decisions through presentation
- **MLO 8.3**: Evaluate personal skill development

---

### Week 15: Presentation Prep

**Class** (2 hours):
- **Presentation Best Practices** (30 min): Structure, delivery, handling questions
- **Activity: Presentation Workshop** (60 min): Draft outlines, practice rounds (see activities/)
- **Final Portfolio Review** (30 min): Checklist of required components

**Lab** (2 hours):
- **Work Time**: Finalize portfolio, rehearse presentation
- **Optional: 1-on-1 Dry Runs** (10 min per student): Preview presentation, get feedback

---

### Week 16: Final Presentations & Closure

**Class** (2 hours):
- **Activity: Final Presentation Day - Part 1** (120 min): Half the class presents

**Lab** (2 hours):
- **Activity: Final Presentation Day - Part 2** (120 min): Other half presents
- **Activity: Course Retrospective** (30 min): Semester reflection, closure activity

**Celebration Ideas**:
- "Awards" for every student (Most Innovative, Best Demo, Best Learning Journey, etc.)
- Certificates of completion
- Share final portfolios on class Discord (with permission)
- Pizza or snacks

---

### Module 8 Teaching Tips

**Do**:
- ✅ Make presentations feel like an event (invite guests, create formal atmosphere)
- ✅ Provide rubric clearly (students should know how they're being evaluated)
- ✅ Ask thoughtful questions during Q&A (model intellectual curiosity)
- ✅ End on a positive note (celebrate growth, not just final products)

**Don't**:
- ❌ Let presentations run over (strict time limits keep energy high)
- ❌ Skip the retrospective (it's closure for students)
- ❌ Grade harshly on presentation delivery (content > performance)

---

## GRADING PHILOSOPHY & PRACTICES

### Process Over Product (Detailed)

**Process Components (25 points across semester)**:
- **Commit Quality** (10 pts): Descriptive messages, appropriate frequency (not all on due date)
- **Pull Request Quality** (8 pts): Clear descriptions, linked issues, thoughtful reviews
- **Exit Tickets** (5 pts): Completed on time, thoughtful reflection
- **Participation** (2 pts): Discussions, peer reviews, class engagement

**How to Grade Process**:
1. **Commit Quality**: Open GitHub, check commit history
   - Good: `Add AI timeline research with 10 major milestones`
   - Bad: `update` or `changes`
   - Frequency: Should see commits throughout module, not all in last 2 hours before deadline

2. **PR Quality**: Read PR descriptions
   - Good: Summary of changes, link to issue, specific questions/notes
   - Bad: Empty description or just "Done"

3. **Exit Tickets**: Read for depth
   - Good: Specific blockers, concrete next steps, honest reflection
   - Bad: "Everything is fine" or minimal effort

---

### Late Work Policy

**Sacred Flow Exception**:
If student creates Issue + Branch + PR by deadline (even if work isn't finished), they can request 24-hour extension with NO PENALTY.

**Why**: This rewards professional workflow. In industry, communicating progress and showing incremental work matters more than "done by deadline at any cost."

**Standard Late Penalties**:
- 1-24 hours: -10%
- 25-48 hours: -20%
- 48+ hours: -50%
- After Module 8 ends: No credit (semester is over)

**Proactive Communication**:
If student emails BEFORE deadline with legitimate issue (illness, family emergency), work with them on extension. No penalty for life circumstances + proactive communication.

---

### Feedback Best Practices

**Turnaround Time**:
- **Modules 1-4**: 24-48 hours (build confidence with quick feedback)
- **Modules 5-8**: 3-5 days (larger projects take longer to review)

**Feedback Format** (in PR comments):
- **Start with positive**: "Your commit messages are really improving!" or "Nice problem statement in your PRD."
- **Be specific about issues**: Don't just say "needs improvement" - point to exact section: "Your Good Bot iteration needs more detail. Show 3+ rounds of refinement with before/after examples."
- **Connect to rubric**: "This is missing the 'How I resolved blockers' section, which is 5 points of your exit ticket grade."
- **End with encouragement**: "You're on the right track - just need more detail here."

---

## COMMON STUDENT STRUGGLES & INTERVENTIONS

### Struggle 1: "I'm falling behind"

**Early warning signs**:
- No commits for 5+ days
- Missing multiple exit tickets
- Not attending lab sessions

**Intervention**:
1. **Reach out proactively** (email or Discord DM): "I noticed you haven't committed this week. Everything OK?"
2. **Office hours check-in**: Understand what's blocking them (technical? time management? personal?)
3. **Create catch-up plan**:
   - Which assignments are most important?
   - Can we scope down Module 5-8 project?
   - Connect to campus resources (tutoring, counseling, disability services)

---

### Struggle 2: "I don't understand [technical concept]"

**Common pain points**:
- Git/GitHub workflow (Modules 1-2)
- Prompt engineering techniques (Module 3)
- Scope management (Modules 4-5)

**Intervention**:
1. **Don't just explain again** - they've heard the explanation. Try:
   - Different analogy
   - Live demo with their specific problem
   - Pair them with student who gets it
2. **Break it down smaller**: If "branches" is confusing, start with "what is a commit?"
3. **Provide alternative resources**: YouTube tutorials, written guides, office hours

---

### Struggle 3: "My project is too ambitious / not working"

**Signs**:
- Prototype doesn't function at all by Week 10
- Student is stressed, overwhelmed
- Scope keeps expanding

**Intervention**:
1. **Mandatory scope reduction meeting**: "What's the SMALLEST version of this that works?"
2. **Reframe expectations**: Prototype = proof of concept, not production app
3. **Celebrate partial success**: "You got authentication working - that's 50% of your MVP!"
4. **Adjust grading if needed**: Grade on effort + process + documentation, not just functionality

---

## ACCESSIBILITY & ACCOMMODATIONS

### Universal Design for Learning (UDL)

**Multiple means of representation**:
- Videos AND written guides
- Live demos AND screenshots
- Verbal explanations AND visual diagrams

**Multiple means of engagement**:
- Individual work AND pair/group activities
- Structured assignments AND open-ended projects
- Two tracks (Code Builders / Prompt Masters)

**Multiple means of expression**:
- Written reflections AND verbal presentations
- Technical code/config AND documentation
- Portfolio showcase (choose what to highlight)

---

### Common Accommodations

**Extended time**:
- Knowledge checks: Unlimited time already (formative)
- Assignments: Work with student to extend deadlines as needed
- Presentations: Can pre-record instead of live present

**Alternative formats**:
- Prefer text? Transcript all videos
- Prefer audio? Allow voice memos for reflections
- Assistive tech needed? Ensure materials are screen-reader compatible

**Reduced distraction**:
- Separate room for presentations
- Asynchronous discussion options
- Flexible attendance (if they watch recordings and complete work)

---

## TECHNOLOGY REQUIREMENTS & SUPPORT

### Required Tools (All Free)
- GitHub account
- AI tools: Claude, ChatGPT, Gemini (free tiers)
- Text editor: VS Code or equivalent
- Browser: Chrome, Firefox, Edge (current version)

### Tech Support Strategy

**Level 1: Self-Help Resources**
- Troubleshooting guide (see reference-materials/)
- GitHub documentation
- Stack Overflow, AI tools

**Level 2: Peer Support**
- Discord #tech-help channel
- Buddy system (pair students for mutual support)
- Office hours

**Level 3: Instructor Support**
- Office hours (1-on-1 troubleshooting)
- Email for urgent issues
- Refer to campus IT for computer/network issues

**Level 4: Campus Resources**
- Computer labs (if student doesn't have reliable laptop)
- IT help desk
- Accessibility services (assistive tech)

---

## CONTINUOUS IMPROVEMENT

### Student Feedback Loops

**Exit Tickets** (every module):
- "What's working in this course?"
- "What's not working?"
- "What questions do you have?"
- Read these! Adjust based on trends.

**Mid-Semester Anonymous Survey** (after Module 4):
- Teaching effectiveness
- Pace (too fast / too slow / just right)
- Assignment clarity
- What to keep / change for second half

**End-of-Semester Feedback** (after Module 8):
- Overall course evaluation
- Most valuable / least valuable components
- Suggestions for future iterations

---

### Instructor Self-Reflection

**After each module, ask yourself**:
- Did students meet the MLOs? (Check knowledge checks, assignments)
- What took longer than expected? (Adjust next time)
- What questions came up repeatedly? (Add to FAQ, clarify next time)
- What worked really well? (Keep doing it!)

**Keep a teaching journal**:
- Quick notes after each class
- Student quotes (successes and struggles)
- Ideas for improvement

---

## FINAL THOUGHTS: DREW'S TEACHING MANIFESTO

### 1. Meet Students Where They Are
- Not everyone has programmed before. That's OK.
- Not everyone finds GitHub intuitive. That's normal.
- Not everyone will love AI. But everyone can learn to use it.

### 2. Process > Product
- A well-documented, iterative failure teaches more than a lucky success.
- Commit messages, PRs, retrospectives = professional habits = career readiness.

### 3. Failure is Feedback
- Bad Bot assignment embodies this.
- When students struggle, reframe: "What did you learn? How will you adjust?"

### 4. Sacred Flow is Sacred
- Non-negotiable. Every assignment. No exceptions.
- By Module 8, it should be automatic.

### 5. Two Tracks, One Standard
- Prompt Masters ≠ "easy mode." It's a different, equally rigorous path.
- All students achieve the same CLOs.

### 6. Authenticity Matters
- Real projects > toy exercises
- Real AI tools > simulations
- Real workflow > simplified versions

### 7. Celebrate Growth
- Not everyone will build a groundbreaking AI app. That's OK.
- If they master GitHub, learn prompt engineering, and think critically about AI, they've succeeded.

---

**Teaching CSC-113 is teaching students to work like professionals while building their AI literacy. You're not just teaching Git commands or prompt techniques - you're teaching habits that will serve them for their entire career.**

**Ship fast. Learn faster. Iterate always.**

**frotz → plugh**
