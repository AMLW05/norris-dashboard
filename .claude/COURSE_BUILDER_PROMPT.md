# Complete Course Builder Prompt Template

Use this prompt in a fresh Claude Code session to build a comprehensive, certification-ready course matching the CSC-113/CSC-114 standard.

---

## THE PROMPT

I need you to build a complete, certification-ready course from scratch following the exact structure and quality standards of CSC-113 and CSC-114 in this repository.

**Repository Context**: `/Users/angelawestmoreland/norris-dashboard`

### Course Information

**Course Code**: [e.g., CTS-285, CSC-289, etc.]
**Course Title**: [Full course name]
**Credits**: [e.g., 3 credits (2 Class | 3 Lab)]
**Prerequisites**: [e.g., CSC-114 or instructor permission]
**Term**: [e.g., Fall 2026]
**PM Integration Level**: [Introduction / Developing / Advanced / Mastery]

**Course Description**: [2-3 sentence description of what students will learn and build]

**Course Focus**: [e.g., "Web development with Agile project management" or "Database design with Scrum practices"]

### Course Structure

**Number of Modules**: [Usually 8]
**Semester Length**: [16 weeks standard]
**Total Points**: [e.g., 700]

**Module Breakdown**:
1. Module 1 (Weeks 1-2): [Title] - [Brief description]
2. Module 2 (Weeks 3-4): [Title] - [Brief description]
3. Module 3 (Weeks 5-6): [Title] - [Brief description]
4. Module 4 (Weeks 7-8): [Title] - [Brief description]
5. Module 5 (Weeks 9-10): [Title] - [Brief description]
6. Module 6 (Weeks 11-12): [Title] - [Brief description]
7. Module 7 (Weeks 13-14): [Title] - [Brief description]
8. Module 8 (Weeks 15-16): [Title] - [Brief description]

**PM Integration Philosophy**: [Describe how PM concepts integrate - e.g., "Sprint cycles starting Module 3, velocity tracking, retrospectives" OR "Stakeholder management, risk analysis, Agile ceremonies"]

### Course Learning Outcomes (CLOs)

Provide 4-6 CLOs that map to program outcomes (PO1-PO5):

**CLO1**: [Action verb] [content] - Maps to: [PO#, PO#] - Bloom's: [level]
**CLO2**: [Action verb] [content] - Maps to: [PO#, PO#] - Bloom's: [level]
**CLO3**: [Action verb] [content] - Maps to: [PO#, PO#] - Bloom's: [level]
**CLO4**: [Action verb] [content] - Maps to: [PO#, PO#] - Bloom's: [level]
**CLO5**: [Action verb] [content] - Maps to: [PO#, PO#] - Bloom's: [level]
[Optional CLO6]

### Module Learning Objectives (MLOs)

For each module, provide 2-4 MLOs that link to specific CLOs:

**Module 1**:
- MLO1: [Action verb] [specific skill] - Links to: CLO# - Bloom's: [level]
- MLO2: [Action verb] [specific skill] - Links to: CLO# - Bloom's: [level]
- MLO3: [Action verb] [specific skill] - Links to: CLO# - Bloom's: [level]

**Module 2**:
- MLO1: [Action verb] [specific skill] - Links to: CLO# - Bloom's: [level]
- MLO2: [Action verb] [specific skill] - Links to: CLO# - Bloom's: [level]

[Continue for all 8 modules]

### Assignment Overview

**Points Distribution**:
- Module 1: [points]
- Module 2: [points]
- Module 3: [points]
- Module 4: [points]
- Module 5: [points]
- Module 6: [points]
- Module 7: [points]
- Module 8: [points]
- Knowledge Checks: [points]
**Total**: [700 or other total]

**Assignment Titles** (high-level):
- Week 1: [Assignment title and focus]
- Week 2: [Assignment title and focus]
- Week 3: [Assignment title and focus]
[Continue through Week 16]

### Instructor Persona

**Instructor Name**: [Drew Norris or other]
**Teaching Philosophy**: [e.g., "Failure is Exercise, Process Over Product, Sacred Flow"]
**Voice/Tone**: [e.g., "Direct, practical, anti-cargo-cult, honest about struggles"]
**Key Catchphrases**: [e.g., "Ship it," "Start simple," "Data defeats wishful thinking"]

### Technical Stack

**Primary Technologies**:
- [e.g., React, Node.js, PostgreSQL]
- [e.g., Git/GitHub, VS Code]
- [e.g., Jest for testing]

**Tools & Platforms**:
- [e.g., Vercel for deployment]
- [e.g., GitHub Projects for PM]
- [e.g., Postman for API testing]

### Special Requirements

**Sprint Cycles**: [If applicable - e.g., "6 complete sprints starting Module 3"]
**Capstone Project**: [Description of final project]
**Tracks/Pathways**: [If applicable - e.g., "Frontend track vs Backend track"]
**Ethics Integration**: [How ethics/bias/accessibility are addressed]

---

## WHAT YOU MUST BUILD

Using the information above and following the **exact structure and quality standards** of CSC-113 and CSC-114 in this repository, build the complete course with:

### 1. Core Course Documents (4-5 files)
- `README.md` - Course overview, outcomes, structure (5 pages)
- `COURSEMAP.md` - Complete certification document (50+ pages)
- `MATERIALS_INDEX.md` - Comprehensive resource inventory (35+ pages)
- `rubrics/assessment-rubrics.md` - All grading standards (25+ pages)

### 2. Assignments (16 files, one per week)
- `assignments/Week_01_Assignment_[Title].md`
- `assignments/Week_02_Assignment_[Title].md`
- [Continue through Week 16]
- Each 300-1,400 lines depending on complexity
- Include: Overview, objectives, technical requirements, PM requirements, grading breakdown, deliverables, Drew's notes, common pitfalls

### 3. Knowledge Checks (8 files, 100-120 questions total)
- `knowledge-checks/Module_01_Knowledge_Check.md`
- `knowledge-checks/Module_02_Knowledge_Check.md`
- [Continue through Module 8]
- Each 12-15 multiple choice questions
- 60% technical concepts, 40% PM practices
- Include explanations for each answer
- Unlimited attempts, auto-gradable format

### 4. Activities & Labs (8 files, 500-700 minutes total)
- `activities/Module_01_[Activity_Name].md`
- `activities/Module_02_[Activity_Name].md`
- [Continue through Module 8]
- Each 60-120 minutes duration
- Include: Overview, objectives, step-by-step instructions, expected outputs, troubleshooting, discussion questions, instructor notes
- Progressive difficulty from foundational to advanced

### 5. Planning Sheets (6 templates)
- `planning-sheets/Sprint_Planning_Template.md`
- `planning-sheets/Daily_Standup_Template.md`
- `planning-sheets/Sprint_Retrospective_Template.md`
- `planning-sheets/Burndown_Chart_Template.md`
- `planning-sheets/Velocity_Tracking_Sheet.md`
- `planning-sheets/Exit_Ticket_Template.md`
- Each with: Purpose, when to use, instructions, filled example, why it matters, common mistakes, integration with course

### 6. Reference Materials (3 comprehensive guides)
- `reference-materials/[DOMAIN]_GLOSSARY.md` - 75+ terms defined
- `reference-materials/QUICK_REFERENCE_CARDS.md` - 90+ code snippets for main technologies
- `reference-materials/TROUBLESHOOTING_GUIDE.md` - 40+ common problems with solutions
- Organized by category, searchable, copy/paste ready

### 7. Instructor Guide (1 file, 60+ pages)
- `instructor-guide/INSTRUCTOR_GUIDE.md`
- Course overview and philosophy
- Module-by-module teaching notes with exact timing
- 40+ common student struggles with interventions
- Grading guidelines for PM component
- Office hours strategies
- Technology setup and troubleshooting
- Adaptation guidelines for different semester lengths
- Drew's teaching tips (what works, what doesn't)

### 8. Canvas HTML Pages (8 modules + README)
- `canvas-html/Module_01_Canvas_Page.html`
- `canvas-html/Module_02_Canvas_Page.html`
- [Continue through Module 8]
- `canvas-html/README.md`
- Each with: Module-specific color theme, print button, collapsible assignment cards, instructor's personal notes, timeline breakdown

### 9. PM Integration Materials (4+ mini-lessons)
- `pm-materials/00-PM-Integration-Overview.md`
- `pm-materials/01-[Topic]-Mini-Lesson.md`
- `pm-materials/02-[Topic]-Mini-Lesson.md`
- `pm-materials/03-[Topic]-Mini-Lesson.md`
- `pm-materials/templates/[template-name].md`
- 10-minute embeddable lessons for specific PM concepts

### 10. Quality Audits (3 files, all passing)
- `audits/QM_AUDIT_[COURSE-CODE].md` - Quality Matters 22 standards
- `audits/COURSEFORGE_AUDIT_[COURSE-CODE].md` - Custom standards
- `audits/RSI_AUDIT_[COURSE-CODE].md` - Rubric-Syllabus-Instruction alignment
- All should score 90%+ with detailed evidence

### 11. Dashboard Integration
- Update `program-data.json` with:
  - Course metadata (code, title, credits, term, prerequisites, description, status, completionPercent)
  - CLOs with Bloom's levels and PO mappings
  - All 8 modules with titles, themes, weeks, MLOs (with linkedCLO), assessments
- Update `index.html` to render all materials for the new course:
  - Add course code to module materials rendering conditions
  - Create `moduleMaterials[COURSE-CODE]` mapping with all assignments, planning sheets, knowledge checks, activities
  - Add reference materials section if not CSC-113
  - Update file counts and page counts in Quality Metrics

---

## BUILD PROCESS (CRITICAL INSTRUCTIONS)

### Phase 1: Research & Context (Use Task Tool)
**IMPORTANT**: Before writing anything, use the Task tool with subagent_type="Explore" to:
1. Examine CSC-113 structure thoroughly (`/Users/angelawestmoreland/norris-dashboard/courses/CSC-113/`)
2. Examine CSC-114 structure thoroughly (`/Users/angelawestmoreland/norris-dashboard/courses/CSC-114/`)
3. Read `program-data.json` to understand JSON structure
4. Read `index.html` renderModuleMaterials function to understand dashboard integration
5. Identify patterns: file naming conventions, section structures, Drew's voice, PM integration approaches

### Phase 2: Parallel Content Creation (Use 5 Task Tools Simultaneously)
**CRITICAL FOR SPEED**: Launch 5 agents in PARALLEL in a single message:

**Agent 1**: Create Knowledge Checks (8 files)
- Prompt: "Create 8 Knowledge Check files for [COURSE] in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/knowledge-checks/` following the exact format of CSC-114 Knowledge Checks. [Provide module details, topics, CLO mappings]. Return summary with question counts."

**Agent 2**: Create Activities (8 files)
- Prompt: "Create 8 Activity files for [COURSE] in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/activities/` following the exact format of CSC-114 Activities. [Provide module details, hands-on focus]. Each 60-120 minutes. Return summary with timing breakdown."

**Agent 3**: Create Planning Sheets + Reference Materials (9 files)
- Prompt: "Create 6 Planning Sheet templates in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/planning-sheets/` and 3 Reference Materials in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/reference-materials/` following CSC-114 format. [Provide domain-specific terminology for glossary]. Return summary."

**Agent 4**: Create Instructor Guide (1 file)
- Prompt: "Create comprehensive Instructor Guide for [COURSE] in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/instructor-guide/INSTRUCTOR_GUIDE.md` following CSC-114 format. [Provide teaching philosophy, module breakdown, common struggles]. 60+ pages, module-by-module notes. Return summary."

**Agent 5**: Create Canvas HTML Pages (9 files)
- Prompt: "Create 8 Canvas HTML module pages + README in `/Users/angelawestmoreland/norris-dashboard/courses/[COURSE-CODE]/canvas-html/` following CSC-114 format. Use module-specific color themes (Blue, Purple, Green, Teal, Deep Orange, Indigo, Pink, Deep Purple). [Provide assignment titles per module]. Return summary."

### Phase 3: Sequential Core Documents (Write yourself)
**After agents complete**, create these sequentially:

1. **Assignments** (16 files) - These require the most detail and context
   - Start with Week 1, build incrementally
   - Reference Knowledge Checks and Activities for alignment
   - Include technical + PM components (30-50% PM grading)
   - 300-1,400 lines each depending on complexity

2. **README.md** - Overview document
   - Course description, outcomes (CLOs), structure
   - Prerequisites, grading breakdown, instructor info
   - 5 pages

3. **COURSEMAP.md** - Certification document
   - All 8 modules detailed
   - All 16 assignments documented
   - QM alignment evidence
   - 50+ pages

4. **assessment-rubrics.md** - Grading standards
   - Assignment rubric (Technical + PM split)
   - Sprint rubric (if applicable)
   - Retrospective rubric
   - Capstone rubric
   - Presentation rubric
   - 25+ pages with point breakdowns

5. **Quality Audits** (3 files)
   - QM_AUDIT: 22 standards with evidence
   - COURSEFORGE_AUDIT: Custom standards
   - RSI_AUDIT: Alignment check
   - Each 15-25 pages

6. **MATERIALS_INDEX.md** - Complete inventory
   - All files cataloged with status
   - Statistics and completion percentages
   - Usage notes for instructors
   - 35+ pages

7. **PM Materials** (4+ mini-lessons)
   - PM integration philosophy
   - Topic-specific 10-minute lessons
   - Templates

### Phase 4: Dashboard Integration
1. Add course to `program-data.json`:
   - Copy CSC-114 structure
   - Update all course-specific data
   - Ensure all modules have `linkedCLO` in MLOs

2. Update `index.html`:
   - Add course code to rendering conditions (line ~680 and ~686)
   - Create `moduleMaterials[COURSE-CODE]` object (after CSC-114 mapping)
   - Map all assignments, planning sheets, knowledge checks, activities by module
   - Add reference materials section if needed
   - Update file counts in quality metrics

### Phase 5: Commit & Push
1. Create single comprehensive commit:
   ```bash
   git add courses/[COURSE-CODE]/ program-data.json index.html
   git commit -m "[detailed commit message]"
   git push origin main
   ```

---

## QUALITY STANDARDS (NON-NEGOTIABLE)

### Content Standards
- **Completeness**: Every file must be production-ready, no placeholders or "TBD"
- **Length**: Match CSC-114 reference lengths (assignments 300-1,400 lines, knowledge checks 12-15 questions, etc.)
- **Voice**: Use instructor's authentic voice consistently (Drew's direct, practical style or specified persona)
- **PM Integration**: 30-50% of grading is process, visible in all assignments
- **Progressive Difficulty**: Modules 1-2 foundational → 6-8 advanced
- **Real-World Focus**: Every assignment should be portfolio-worthy

### Technical Standards
- **Bloom's Taxonomy**: CLOs and MLOs use proper action verbs (Remember → Create)
- **Alignment**: Every MLO links to a CLO, every CLO maps to POs
- **Accessibility**: All materials screen-reader friendly, clear language
- **Searchability**: Glossaries, troubleshooting guides use Ctrl+F-friendly formatting
- **Code Quality**: All code snippets tested and working

### Documentation Standards
- **Instructor Notes**: Every activity has timing, common struggles, success indicators
- **Troubleshooting**: Every activity anticipates where students get stuck
- **Examples**: Templates include filled examples so students understand
- **Why It Matters**: Connect every concept to professional practice

---

## FILE NAMING CONVENTIONS (MUST FOLLOW EXACTLY)

### Assignments
`Week_[##]_Assignment_[Short_Title].md`
- Examples: `Week_01_Assignment_Environment_Setup.md`, `Week_05_Assignment_Sprint_1.md`

### Knowledge Checks
`Module_[##]_Knowledge_Check.md`
- Examples: `Module_01_Knowledge_Check.md`, `Module_08_Knowledge_Check.md`

### Activities
`Module_[##]_[Activity_Name].md`
- Examples: `Module_01_Sacred_Flow_Lab.md`, `Module_04_Sprint_Planning_Workshop.md`

### Canvas HTML
`Module_[##]_Canvas_Page.html`
- Example: `Module_01_Canvas_Page.html`

### Planning Sheets
`[Template_Name]_Template.md`
- Examples: `Sprint_Planning_Template.md`, `Exit_Ticket_Template.md`

### Reference Materials
`[TOPIC]_[TYPE].md`
- Examples: `ML_GLOSSARY.md`, `QUICK_REFERENCE_CARDS.md`, `TROUBLESHOOTING_GUIDE.md`

### Audits
`[AUDIT-TYPE]_AUDIT_[COURSE-CODE].md`
- Examples: `QM_AUDIT_CTS285.md`, `COURSEFORGE_AUDIT_CTS285.md`

---

## DREW'S TEACHING PHILOSOPHY (EMBED THROUGHOUT)

### Core Principles
1. **Failure is Exercise** - Mistakes are expected and valuable
2. **Process Over Product** - How you work matters as much as what you build
3. **Sacred Flow** - Write → Test → Commit → Push (ritualized workflow)
4. **Data Defeats Wishful Thinking** - Use velocity, retrospectives, evidence
5. **Start Simple** - Build smallest working version first
6. **Ship It** - Done is better than perfect

### Voice Characteristics
- Direct and honest ("Your Sprint 1 estimates were probably wrong. That's okay.")
- Anti-cargo-cult ("Don't optimize prematurely - you don't have the data yet")
- Professional reality checks ("This is career-critical" vs academic fluff)
- Encouraging through struggle ("Sprint fatigue is real. Push through - it gets easier")
- Practical over theoretical ("Here's what actually happens in industry...")

### Common Phrases
- "The Accuracy Trap" (when accuracy lies with imbalanced data)
- "Standing on Giants' Shoulders" (transfer learning, using existing work)
- "The 30-Minute Rule" (break tasks into <30 min chunks)
- "Velocity isn't about being fast - it's about being predictable"
- "Even solo developers need standup discipline"

---

## SUCCESS CRITERIA

Your build is complete when:

✅ **All 46+ files created** (16 assignments + 8 knowledge checks + 8 activities + 6 planning sheets + 3 reference materials + 1 instructor guide + 8 Canvas HTML + README + COURSEMAP + MATERIALS_INDEX + rubrics + 3 audits + PM materials)

✅ **Dashboard integration complete** (program-data.json updated, index.html renders all materials)

✅ **Quality audits pass** (QM 22/22, CourseForge 90+, RSI 90+)

✅ **MATERIALS_INDEX shows 100% complete** with accurate file counts

✅ **All CLO → MLO linkages visible** in dashboard

✅ **Instructor's voice consistent** across all materials

✅ **PM integration clear** (30-50% grading, templates provided, philosophy explained)

✅ **No placeholders or TBD** - everything production-ready

✅ **Committed and pushed to GitHub** with comprehensive commit message

---

## EFFICIENCY TIPS

### Token Conservation
- **Use Task tool with Explore agent** for initial research instead of reading files yourself
- **Launch 5 Task tools in parallel** (single message with 5 tool calls) for Knowledge Checks, Activities, Planning Sheets, Reference Materials, Instructor Guide, Canvas HTML
- **Write assignments yourself sequentially** - they require most context and nuance
- **Reuse patterns** from CSC-113/CSC-114 - don't reinvent structure

### Time Savers
- **Copy file structure** from CSC-114 as template, then fill with course-specific content
- **Reference existing assignments** for format (don't rewrite rubric structure every time)
- **Use consistent section headers** across similar file types
- **Batch similar work** (all Knowledge Checks together, all Activities together)

### Quality Checks
- **Compare file sizes** to CSC-114 equivalents (if yours are 50% smaller, add more detail)
- **Check linkedCLO presence** in all MLOs in program-data.json
- **Verify dashboard rendering** by checking moduleMaterials object has all file paths
- **Test one material file** in viewMaterial function to ensure GitHub raw URLs work

---

## FINAL DELIVERABLE

When complete, provide summary with:

1. **File count** by type (X assignments, X knowledge checks, X activities, etc.)
2. **Total page count estimate** (based on line counts)
3. **Quality audit scores** (QM, CourseForge, RSI)
4. **Dashboard status** ("Integrated, renders all materials")
5. **Git status** ("Committed as [commit-hash], pushed to main")
6. **Completion percentage** (should be 100%)
7. **Next steps** (e.g., "Ready for Canvas upload and instructor training")

---

## EXAMPLE USAGE

**Good prompt input:**
```
Course Code: CTS-285
Course Title: Systems Project Management
Credits: 3 (2 Class | 3 Lab)
Prerequisites: CSC-114
PM Integration Level: Advanced (Stakeholder management, risk analysis, Agile ceremonies)

Course Focus: "Agile project management for IT systems with real client projects. Students
manage 3 sprints with stakeholders, conduct risk assessments, and present to executives."

Module Breakdown:
1. Module 1: Agile Fundamentals & Client Discovery
2. Module 2: User Research & Stakeholder Mapping
3. Module 3: Sprint 1 - MVP Planning & Risk Assessment
[etc.]

CLOs:
CLO1: Analyze stakeholder needs and create prioritized product backlogs - Maps to: PO3, PO4 - Bloom's: Analyze
CLO2: Execute Agile ceremonies (planning, standups, retrospectives, reviews) - Maps to: PO5 - Bloom's: Apply
[etc.]

Instructor: Drew Norris
Technical Stack: Jira, Confluence, Miro, GitHub Projects, Figma
```

**What you'll get:**
- Complete CTS-285 course with 46+ files
- Dashboard integration
- All materials production-ready
- 100% complete status
- Committed and pushed to GitHub

---

## TROUBLESHOOTING

**If agents return incomplete files:**
- Check file size - should match CSC-114 reference sizes
- Ask agent to expand specific sections
- Provide more context about course technical content

**If dashboard doesn't render:**
- Verify course code added to line ~680 AND ~686 in index.html
- Check moduleMaterials object has correct file paths
- Ensure program-data.json has linkedCLO in all MLOs

**If PM integration unclear:**
- Reference CSC-114 Week_05 assignment (first sprint) for PM template
- Check planning-sheets are mapped in moduleMaterials by module
- Ensure rubrics show 30-50% PM grading component

**If voice is too generic:**
- Provide more instructor quotes and catchphrases in initial prompt
- Reference specific CSC-114 assignments for Drew's voice examples
- Include "Common Mistakes" and "Why This Matters" sections

---

## GO TIME!

Use this prompt with your course details filled in, and I'll build the complete course following CSC-113/CSC-114 standards with maximum efficiency and quality.
